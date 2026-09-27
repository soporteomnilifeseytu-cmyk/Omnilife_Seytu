(function(){
  'use strict';
  function $(id){ return document.getElementById(id); }
  function openModal(id){
    const el=$(id);
    if(!el) return false;
    el.classList.remove('hidden');
    el.style.setProperty('display','grid','important');
    el.setAttribute('aria-hidden','false');
    return true;
  }
  function closeModal(id){
    const el=$(id); if(!el) return;
    el.classList.add('hidden');
    el.style.removeProperty('display');
    el.setAttribute('aria-hidden','true');
  }
  function toast(text){
    const old=document.querySelector('[data-admin-fix-toast]'); if(old) old.remove();
    const t=document.createElement('div'); t.dataset.adminFixToast='1'; t.textContent=text;
    Object.assign(t.style,{position:'fixed',left:'50%',bottom:'24px',transform:'translateX(-50%)',zIndex:'2147483647',background:'#25112f',color:'#fff',padding:'13px 18px',borderRadius:'12px',fontWeight:'700',fontFamily:'Arial,sans-serif',boxShadow:'0 12px 35px #0006'});
    document.body.appendChild(t); setTimeout(()=>t.remove(),3500);
  }
  function resetProduct(){
    ['adminCreateName','adminCreateCat','adminCreateDesc','adminCreateImg'].forEach(id=>{if($(id)) $(id).value='';});
    if($('adminCreatePrice')) $('adminCreatePrice').value='0';
    if($('adminCreateStock')) $('adminCreateStock').value='0';
    if($('adminCreateStatus')) $('adminCreateStatus').value='Disponible';
    if($('adminCreateImageFile')) $('adminCreateImageFile').value='';
  }
  function resetUser(){
    ['adminUserName','adminUserLast','adminUserUsername','adminUserEmail','adminUserPhone','adminUserPass'].forEach(id=>{if($(id)) $(id).value='';});
    if($('adminUserRole')) $('adminUserRole').value='cliente';
    if($('adminUserMsg')) $('adminUserMsg').textContent='';
  }
  window.omniFallbackOpenProduct=async function(){ resetProduct(); if(!openModal('adminProductCreateModal')) toast('No se encontró el formulario de producto en esta página.'); else { setTimeout(()=>$('adminCreateName')?.focus(),80); try{const c=await post('db_check',{}); toast('✓ MySQL conectado · '+c.products+' productos · '+c.users+' usuarios');}catch(e){toast('⚠ MySQL no está disponible: '+e.message);} } };
  window.omniFallbackOpenUser=async function(){ resetUser(); if(!openModal('adminUserCreateModal')) toast('No se encontró el formulario de usuario en esta página.'); else { setTimeout(()=>$('adminUserName')?.focus(),80); try{const c=await post('db_check',{}); toast('✓ MySQL conectado · '+c.products+' productos · '+c.users+' usuarios');}catch(e){toast('⚠ MySQL no está disponible: '+e.message);} } };
  async function post(action,data){
    const r=await fetch('backend/api.php?action='+encodeURIComponent(action),{method:'POST',headers:{'Content-Type':'application/json'},cache:'no-store',body:JSON.stringify(data)});
    const raw=await r.text(); let x; try{x=JSON.parse(raw)}catch(_){throw new Error('PHP no devolvió JSON. Revisa que Apache/PHP esté encendido y que backend/api.php exista.');}
    if(!r.ok || x.ok===false) throw new Error((x.message||('Error HTTP '+r.status)) + (x.detalle ? ' — '+x.detalle : ''));
    return x;
  }
  window.omniFallbackCreateUser=async function(){
    const nombres=$('adminUserName')?.value.trim()||'', apellidos=$('adminUserLast')?.value.trim()||'', usuario=$('adminUserUsername')?.value.trim().toLowerCase()||'', correo=$('adminUserEmail')?.value.trim().toLowerCase()||'', telefono=$('adminUserPhone')?.value.trim()||'', clave=$('adminUserPass')?.value||'', rol=$('adminUserRole')?.value==='admin'?'admin':'cliente';
    if(!nombres||!apellidos||!usuario||!correo||clave.length<6){toast('Completa nombres, apellidos, usuario, correo y una contraseña de mínimo 6 caracteres.');return;}
    try{ const x=await post('create_user',{nombres,apellidos,usuario,correo,telefono,clave,rol}); if(!x.user?.id_usuario) throw new Error('MySQL no devolvió el ID del usuario.'); closeModal('adminUserCreateModal'); toast('✓ Usuario guardado en MySQL.'); setTimeout(()=>location.reload(),800); }
    catch(e){toast('No se pudo guardar el usuario: '+e.message);}
  };
  window.omniFallbackCreateProduct=async function(){
    const name=$('adminCreateName')?.value.trim()||'', cat=$('adminCreateCat')?.value.trim()||'General', desc=$('adminCreateDesc')?.value.trim()||'', price=Number($('adminCreatePrice')?.value||0), stock=Math.max(0,Math.floor(Number($('adminCreateStock')?.value||0))), img=$('adminCreateImg')?.value.trim()||'', estado=$('adminCreateStatus')?.value||'Disponible';
    if(!name){toast('Escribe el nombre del producto.');return;}
    if(!Number.isFinite(price)||!Number.isFinite(stock)){toast('Revisa precio y stock.');return;}
    try{ const x=await post('create_product',{name,cat,desc,price,stock,img,estado}); if(!x.id) throw new Error('MySQL no devolvió el ID del producto.'); closeModal('adminProductCreateModal'); toast('✓ Producto guardado en MySQL.'); setTimeout(()=>location.reload(),800); }
    catch(e){toast('No se pudo guardar el producto: '+e.message);}
  };
  function bind(){
    document.addEventListener('click',function(e){
      const b=e.target.closest && e.target.closest('#adminAddProductDashboard,#adminQuickAddProduct,#adminQuickUserTop,#adminCreateSave,#adminUserCreateSave');
      if(!b) return;
      // Capture phase: intercept these five critical buttons before any broken handler can cancel them.
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      if(b.id==='adminAddProductDashboard'||b.id==='adminQuickAddProduct'){window.omniFallbackOpenProduct();return;}
      if(b.id==='adminQuickUserTop'){window.omniFallbackOpenUser();return;}
      if(b.id==='adminCreateSave'){window.omniFallbackCreateProduct();return;}
      if(b.id==='adminUserCreateSave'){window.omniFallbackCreateUser();return;}
    },true);
    document.addEventListener('click',function(e){
      const b=e.target.closest && e.target.closest('[data-close="adminProductCreateModal"],[data-close="adminUserCreateModal"]');
      if(!b)return; const id=b.getAttribute('data-close'); closeModal(id);
    },true);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',bind,{once:true}); else bind();
})();
