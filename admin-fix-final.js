/* OMNILIFE - FIX FINAL ADMIN PRODUCTO
   Un solo controlador para abrir/cerrar/guardar el modal de producto.
*/
(function(){
  'use strict';
  const API='./backend/api.php';
  const $=id=>document.getElementById(id);

  function openProduct(){
    const m=$('adminProductCreateModal');
    if(!m){ alert('No se encontró el formulario Agregar Producto.'); return; }
    ['adminCreateName','adminCreateCat','adminCreateDesc','adminCreateImg'].forEach(id=>{const e=$(id);if(e)e.value='';});
    if($('adminCreatePrice')) $('adminCreatePrice').value='0';
    if($('adminCreateStock')) $('adminCreateStock').value='0';
    if($('adminCreateStatus')) $('adminCreateStatus').value='Disponible';
    if($('adminCreateImageFile')) $('adminCreateImageFile').value='';
    m.classList.remove('hidden');
    m.style.setProperty('display','grid','important');
    m.setAttribute('aria-hidden','false');
    setTimeout(()=>$('adminCreateName')?.focus(),50);
  }

  function closeProduct(){
    const m=$('adminProductCreateModal');
    if(!m)return;
    m.classList.add('hidden');
    m.style.removeProperty('display');
    m.setAttribute('aria-hidden','true');
  }

  async function request(action,payload,method='POST'){
    const url=API+'?action='+encodeURIComponent(action)+'&_='+Date.now();
    const opt={method,cache:'no-store'};
    if(method!=='GET'){
      opt.headers={'Content-Type':'application/json'};
      opt.body=JSON.stringify(payload||{});
    }
    const r=await fetch(url,opt);
    const raw=await r.text();
    let x;
    try{x=JSON.parse(raw)}catch(e){throw new Error('PHP no devolvió JSON. Revisa Apache, PHP y backend/api.php.');}
    if(!r.ok || x.ok===false) throw new Error(x.message||('Error HTTP '+r.status));
    return x;
  }

  async function upload(file){
    if(!file)return '';
    const f=new FormData();f.append('imagen',file);
    const r=await fetch(API+'?action=upload_product_image&_='+Date.now(),{method:'POST',body:f,cache:'no-store'});
    const raw=await r.text();let x;
    try{x=JSON.parse(raw)}catch(e){throw new Error('PHP no devolvió JSON al subir la imagen.');}
    if(!r.ok||x.ok===false)throw new Error(x.message||'No se pudo subir la imagen.');
    return x.img||'';
  }

  async function saveProduct(){
    const name=$('adminCreateName')?.value.trim()||'';
    const cat=$('adminCreateCat')?.value.trim()||'General';
    const desc=$('adminCreateDesc')?.value.trim()||'';
    const price=Number($('adminCreatePrice')?.value||0);
    const stock=Math.max(0,Math.floor(Number($('adminCreateStock')?.value||0)));
    const estado=$('adminCreateStatus')?.value||'Disponible';
    let img=$('adminCreateImg')?.value.trim()||'';
    if(!name){alert('Escribe el nombre del producto.');return;}
    if(!Number.isFinite(price)||!Number.isFinite(stock)){alert('Revisa precio y stock.');return;}
    const btn=$('adminCreateSave'); if(btn) btn.disabled=true;
    try{
      const file=$('adminCreateImageFile')?.files?.[0];
      if(file)img=await upload(file);
      const created=await request('create_product',{name,cat,desc,price:Math.max(0,price),stock,img,estado});
      if(!created.id)throw new Error('MySQL no devolvió el ID del producto.');
      const check=await request('products',{},'GET');
      if(!Array.isArray(check.products)||!check.products.some(p=>Number(p.id)===Number(created.id)))
        throw new Error('El producto se envió, pero no apareció en la consulta de MySQL.');
      closeProduct();
      alert('✓ Producto guardado correctamente en MySQL.\nID: '+created.id);
      location.reload();
    }catch(e){alert('No se pudo guardar el producto:\n'+e.message);}
    finally{if(btn)btn.disabled=false;}
  }

  window.adminAddProduct= openProduct;
  window.adminCreateProductSave= saveProduct;

  // Window capture: se ejecuta antes de los listeners de document de script.js.
  window.addEventListener('click',function(e){
    const t=e.target?.closest?.('#adminAddProductDashboard,#adminQuickAddProduct,#adminCreateSave,[data-close="adminProductCreateModal"]');
    if(!t)return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation)e.stopImmediatePropagation();
    if(t.id==='adminAddProductDashboard'||t.id==='adminQuickAddProduct')openProduct();
    else if(t.id==='adminCreateSave')saveProduct();
    else closeProduct();
  },true);

  window.addEventListener('keydown',function(e){
    if(e.key==='Escape' && !$('adminProductCreateModal')?.classList.contains('hidden'))closeProduct();
  },true);
})();
