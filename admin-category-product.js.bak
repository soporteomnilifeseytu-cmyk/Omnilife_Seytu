(function(){
  'use strict';
  const API='backend/api.php';
  const $=id=>document.getElementById(id);
  let categories=[];
  function toast(msg){ if(typeof window.toast==='function'){window.toast(msg);return;} alert(msg); }
  async function api(action,data,method='POST'){
    const opts={method,cache:'no-store'};
    let url=API+'?action='+encodeURIComponent(action)+'&_='+Date.now();
    if(method==='GET' && data){Object.keys(data).forEach(k=>{if(data[k]!==undefined&&data[k]!==null&&data[k]!=='')url+='&'+encodeURIComponent(k)+'='+encodeURIComponent(data[k]);});}
    if(method!=='GET'){opts.headers={'Content-Type':'application/json'};opts.body=JSON.stringify(data||{});}
    const r=await fetch(url,opts);
    const raw=await r.text(); let x; try{x=JSON.parse(raw)}catch(e){throw new Error('PHP no devolvió JSON. Revisa Apache/PHP.');}
    if(!r.ok||x.ok===false)throw new Error(x.message||('Error HTTP '+r.status));
    return x;
  }
  function brand(){return $('adminCreateBrand')?.value||'';}
  function esc(v){return String(v??'').replace(/[&<>'"]/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[m]));}
  function renderCategories(){
    const select=$('adminCreateCat'); if(!select)return;
    const current=select.value;
    select.innerHTML='<option value="">Selecciona una categoría</option>'+categories.map(c=>'<option value="'+esc(c)+'">'+esc(c)+'</option>').join('');
    if(categories.includes(current))select.value=current;
    const list=$('adminCategoryList');
    if(list)list.innerHTML=categories.length?categories.map(c=>'<button type="button" class="admin-category-chip" data-admin-category="'+esc(c)+'">'+esc(c)+'</button>').join(''):'<small>No hay categorías guardadas para esta marca todavía.</small>';
  }
  async function loadCategories(){
    const select=$('adminCreateCat');if(!select)return;
    const selectedBrand=brand();
    select.disabled=true;
    if(!selectedBrand){categories=[];renderCategories();select.disabled=true;if($('adminCreateCategory'))$('adminCreateCategory').disabled=true;return;}
    try{const x=await api('categories',{brand:selectedBrand},'GET');categories=Array.isArray(x.categories)?x.categories:[];}
    catch(e){categories=[];console.warn('No se pudieron cargar categorías:',e.message);}
    select.disabled=false;renderCategories();if($('adminCreateCategory'))$('adminCreateCategory').disabled=false;
  }
  function openCategoryModal(){
    if(!brand())return toast('Primero selecciona OMNILIFE o SEYTÚ.');
    const modal=$('adminCategoryCreateModal');if(!modal)return;
    $('adminCategoryBrandLabel').textContent=brand()||'la marca seleccionada';
    $('adminNewCategoryName').value='';
    modal.classList.remove('hidden');modal.style.setProperty('display','grid','important');modal.setAttribute('aria-hidden','false');
    setTimeout(()=>$('adminNewCategoryName')?.focus(),40);
  }
  function closeCategoryModal(){
    const modal=$('adminCategoryCreateModal');if(!modal)return;
    modal.classList.add('hidden');modal.style.removeProperty('display');modal.setAttribute('aria-hidden','true');
  }
  async function createCategory(){
    const name=$('adminNewCategoryName')?.value.trim()||''; if(!name)return toast('Escribe el nombre de la nueva categoría.');
    const btn=$('adminCategorySave');if(btn){btn.disabled=true;btn.textContent='Guardando…';}
    try{
      const x=await api('create_category',{brand:brand(),name});
      await loadCategories(); $('adminCreateCat').value=x.name; closeCategoryModal();
      toast(x.created===false?'✓ Esa categoría ya existía y quedó seleccionada.':'✓ Categoría creada y seleccionada para '+brand()+'.');
    }catch(e){toast('No se pudo crear la categoría: '+e.message);}
    finally{if(btn){btn.disabled=false;btn.textContent='Guardar categoría';}}
  }
  function reset(){if($('adminCreateBrand'))$('adminCreateBrand').value='';if($('adminCreateCat')){$('adminCreateCat').value='';$('adminCreateCat').disabled=true;}categories=[];renderCategories();}
  window.adminCreateProductSave=async function(){
    const name=$('adminCreateName')?.value.trim()||'';const brandValue=brand();const cat=$('adminCreateCat')?.value.trim()||'';const desc=$('adminCreateDesc')?.value.trim()||'';const price=Math.max(0,Number($('adminCreatePrice')?.value||0));const stock=Math.max(0,Math.floor(Number($('adminCreateStock')?.value||0)));let img=$('adminCreateImg')?.value.trim()||'';const estado=$('adminCreateStatus')?.value||'Disponible';
    if(!brandValue)return toast('Selecciona OMNILIFE o SEYTÚ.');if(!name)return toast('Escribe el nombre del producto.');if(!cat)return toast('Selecciona una categoría de '+brandValue+' o crea una nueva.');if(!Number.isFinite(price)||!Number.isFinite(stock))return toast('Revisa el precio y stock.');
    const btn=$('adminCreateSave');if(btn){btn.disabled=true;btn.textContent='Guardando…';}
    try{
      const file=$('adminCreateImageFile')?.files?.[0];
      if(file){const form=new FormData();form.append('imagen',file);const r=await fetch(API+'?action=upload_product_image&_='+Date.now(),{method:'POST',body:form,cache:'no-store'});const x=await r.json();if(!r.ok||x.ok===false)throw new Error(x.message||'No se pudo subir la imagen.');img=x.img||'';}
      const x=await api('create_product',{name,brand:brandValue,cat,desc,price,stock,img,estado});if(!x.id)throw new Error('MySQL no devolvió el ID del producto.');
      if($('adminProductCreateModal')){$('adminProductCreateModal').classList.add('hidden');$('adminProductCreateModal').style.removeProperty('display');$('adminProductCreateModal').setAttribute('aria-hidden','true');}
      toast('✓ Producto guardado en '+brandValue+' · '+cat+' · ID '+x.id);setTimeout(()=>location.reload(),400);
    }catch(e){toast('No se pudo guardar el producto: '+e.message);}finally{if(btn){btn.disabled=false;btn.textContent='Guardar producto';}}
  };
  function bind(){
    $('adminCreateBrand')?.addEventListener('change',loadCategories);
    if($('adminCreateCategory'))$('adminCreateCategory').disabled=!brand();
    $('adminCreateCategory')?.addEventListener('click',openCategoryModal);
    $('adminCategoryCancel')?.addEventListener('click',closeCategoryModal);
    $('adminCategorySave')?.addEventListener('click',createCategory);
    $('adminNewCategoryName')?.addEventListener('keydown',e=>{if(e.key==='Enter'){e.preventDefault();createCategory();}});
    $('adminCategoryList')?.addEventListener('click',e=>{const b=e.target.closest('[data-admin-category]');if(b){$('adminCreateCat').value=b.dataset.adminCategory;}});
    document.addEventListener('click',e=>{if(e.target.closest('[data-close="adminCategoryCreateModal"]'))closeCategoryModal();});
    const original=window.__omniOpenProductModal;
    if(typeof original==='function')window.__omniOpenProductModal=function(ev){const r=original(ev);setTimeout(loadCategories,30);return r;};
    loadCategories();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bind,{once:true});else bind();
})();
