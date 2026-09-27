(function(){
  'use strict';
  function open(id){
    var m=document.getElementById(id);
    if(!m) return false;
    m.classList.remove('hidden');
    m.style.setProperty('display','grid','important');
    m.setAttribute('aria-hidden','false');
    var input=m.querySelector('input, textarea, select');
    if(input) setTimeout(function(){try{input.focus()}catch(e){}},50);
    return true;
  }
  function close(id){
    var m=document.getElementById(id); if(!m) return;
    m.classList.add('hidden');
    m.style.removeProperty('display');
    m.setAttribute('aria-hidden','true');
  }
  window.omniOpenProductForm=function(){open('adminProductCreateModal');};
  window.omniOpenUserForm=function(){open('adminUserCreateModal');};
  window.omniCloseAdminModal=close;
  document.addEventListener('click',function(e){
    var t=e.target && e.target.closest ? e.target.closest('#adminAddProductDashboard,#adminQuickAddProduct,#adminQuickUserTop') : null;
    if(t){
      e.preventDefault();
      if(t.id==='adminQuickUserTop') open('adminUserCreateModal'); else open('adminProductCreateModal');
      return;
    }
    var c=e.target && e.target.closest ? e.target.closest('[data-close="adminProductCreateModal"],[data-close="adminUserCreateModal"]') : null;
    if(c){e.preventDefault();close(c.getAttribute('data-close'));}
  },true);
})();
