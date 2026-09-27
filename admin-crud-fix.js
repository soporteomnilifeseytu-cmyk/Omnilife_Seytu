/* OMNILIFE × SEYTÚ — CRUD administrativo aislado
   Adaptado de la lógica de modales de SmartLunch, pero conectado a MySQL mediante backend/api.php.
   Este archivo es deliberadamente independiente de script.js para que los botones sigan funcionando
   aunque otro componente de la interfaz tenga un error de JavaScript.
*/
(function () {
  'use strict';

  const API = './backend/api.php';

  const $ = (id) => document.getElementById(id);

  function openModal(id) {
    const modal = $(id);
    if (!modal) return false;
    modal.classList.remove('hidden');
    modal.style.removeProperty('display');
    return true;
  }

  function closeModal(id) {
    const modal = $(id);
    if (!modal) return;
    modal.classList.add('hidden');
    modal.style.setProperty('display','grid','important');
  }

  function notify(message) {
    // También dejamos el mensaje dentro del modal si existe.
    const target = $('adminUserMsg') || $('adminProductMsg');
    if (target) target.textContent = message;
    window.alert(message);
  }

  async function request(action, payload, method) {
    method = method || 'POST';
    const url = API + '?action=' + encodeURIComponent(action) + '&_=' + Date.now();
    const options = { method: method, cache: 'no-store' };

    if (method !== 'GET') {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payload || {});
    }

    const response = await fetch(url, options);
    const raw = await response.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch (_) {
      throw new Error('El servidor no devolvió JSON. Revisa Apache/PHP y backend/config.php.');
    }

    if (!response.ok || data.ok === false) {
      throw new Error(data.message || 'No se pudo completar la operación.');
    }
    return data;
  }

  async function uploadImage(file) {
    if (!file) return '';
    const form = new FormData();
    form.append('imagen', file);

    const response = await fetch(API + '?action=upload_product_image&_=' + Date.now(), {
      method: 'POST',
      body: form,
      cache: 'no-store'
    });

    const raw = await response.text();
    let data;
    try {
      data = JSON.parse(raw);
    } catch (_) {
      throw new Error('El servidor no devolvió una respuesta válida al subir la imagen.');
    }
    if (!response.ok || data.ok === false) {
      throw new Error(data.message || 'No se pudo subir la imagen.');
    }
    return data.img || '';
  }

  function resetUserForm() {
    ['adminUserName', 'adminUserLast', 'adminUserUsername',
     'adminUserEmail', 'adminUserPhone', 'adminUserPass', 'adminUserPassConfirm'].forEach((id) => {
      const el = $(id);
      if (el) el.value = '';
    });
    if ($('adminUserRole')) $('adminUserRole').value = 'cliente';
    if ($('adminUserMsg')) $('adminUserMsg').textContent = '';
  }

  function resetProductForm() {
    ['adminCreateName', 'adminCreateCat', 'adminCreateDesc', 'adminCreateImg'].forEach((id) => {
      const el = $(id);
      if (el) el.value = '';
    });
    if ($('adminCreatePrice')) $('adminCreatePrice').value = '0';
    if ($('adminCreateStock')) $('adminCreateStock').value = '0';
    if ($('adminCreateStatus')) $('adminCreateStatus').value = 'Disponible';
    if ($('adminCreateImageFile')) $('adminCreateImageFile').value = '';
  }

  function adminAddUserFixed() {
    resetUserForm();
    openModal('adminUserCreateModal');
    setTimeout(() => $('adminUserName')?.focus(), 50);
  }

  function adminAddProductFixed() {
    resetProductForm();
    openModal('adminProductCreateModal');
  }

  async function createUserFixed() {
    const nombres = $('adminUserName')?.value.trim() || '';
    const apellidos = $('adminUserLast')?.value.trim() || '';
    const usuario = $('adminUserUsername')?.value.trim().toLowerCase() || '';
    const correo = $('adminUserEmail')?.value.trim().toLowerCase() || '';
    const telefono = $('adminUserPhone')?.value.trim() || '';
    const clave = $('adminUserPass')?.value || '';
    const confirmar = $('adminUserPassConfirm')?.value || '';
    const rol = $('adminUserRole')?.value === 'admin' ? 'admin' : 'cliente';

    if (!nombres || !apellidos || !usuario || !correo || clave.length < 6) {
      return notify('Completa nombres, apellidos, usuario, correo y una contraseña de mínimo 6 caracteres.');
    }
    if (clave !== confirmar) {
      return notify('Las contraseñas no coinciden.');
    }
    if (!/^[a-z0-9._-]{3,30}$/.test(usuario)) {
      return notify('El usuario debe tener 3 a 30 caracteres, sin espacios.');
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(correo)) {
      return notify('Ingresa un correo válido.');
    }

    try {
      const created = await request('create_user', {
        nombres, apellidos, usuario, correo, telefono, clave, rol
      });

      if (!created.user || !created.user.id_usuario) {
        throw new Error('MySQL no devolvió el ID del usuario creado.');
      }

      const verified = await request('users', {}, 'GET');
      const exists = Array.isArray(verified.users) &&
        verified.users.some((u) => Number(u.id_usuario) === Number(created.user.id_usuario));

      if (!exists) {
        throw new Error('El usuario fue enviado, pero no se pudo verificar en MySQL.');
      }

      closeModal('adminUserCreateModal');
      if ($('adminUserMsg')) $('adminUserMsg').textContent = '✓ Usuario guardado correctamente en MySQL.';
      window.location.reload();
    } catch (error) {
      notify('No se pudo crear el usuario: ' + error.message);
    }
  }

  async function createProductFixed() {
    const name = $('adminCreateName')?.value.trim() || '';
    const cat = $('adminCreateCat')?.value.trim() || 'General';
    const desc = $('adminCreateDesc')?.value.trim() || '';
    const price = Math.max(0, Number($('adminCreatePrice')?.value || 0));
    const stock = Math.max(0, Math.floor(Number($('adminCreateStock')?.value || 0)));
    let img = $('adminCreateImg')?.value.trim() || '';
    const estado = $('adminCreateStatus')?.value || 'Disponible';

    if (!name) return notify('Escribe el nombre del producto.');
    if (!Number.isFinite(price) || !Number.isFinite(stock)) {
      return notify('Revisa el precio y el stock.');
    }

    try {
      const file = $('adminCreateImageFile')?.files?.[0];
      if (file) img = await uploadImage(file);

      const created = await request('create_product', {
        name, brand: $('adminCreateBrand')?.value || 'OMNILIFE', cat, desc, price, stock, img, estado
      });

      if (!created.id) {
        throw new Error('MySQL no devolvió el ID del producto creado.');
      }

      const verified = await request('products', {}, 'GET');
      const exists = Array.isArray(verified.products) &&
        verified.products.some((p) => Number(p.id) === Number(created.id));

      if (!exists) {
        throw new Error('El producto fue enviado, pero no se pudo verificar en MySQL.');
      }

      closeModal('adminProductCreateModal');
      if ($('adminProductMsg')) $('adminProductMsg').textContent = '✓ Producto guardado correctamente en MySQL.';
      window.location.reload();
    } catch (error) {
      notify('No se pudo crear el producto: ' + error.message);
    }
  }

  async function deleteProductFixed(id) {
    const productId = Number(id);
    if (!productId) return notify('No se encontró el producto.');

    if (window.omniConfirm) { const ok = await window.omniConfirm({title:'¿Quitar producto del catálogo?',text:'El producto dejará de mostrarse en el catálogo, pero sus pedidos históricos se conservarán.',okText:'Sí, quitar producto'}); if(!ok)return; } else if (!window.confirm('¿Estás seguro de que quieres quitar este producto del catálogo?')) return;

    try {
      await request('delete_product', { id: productId });

      const verified = await request('products', {}, 'GET');
      const stillVisible = Array.isArray(verified.products) &&
        verified.products.some((p) => Number(p.id) === productId);

      if (stillVisible) {
        throw new Error('El producto no desapareció de la consulta de MySQL.');
      }

      alert('✓ Producto quitado del catálogo.');
      window.location.reload();
    } catch (error) {
      notify('No se pudo quitar el producto: ' + error.message);
    }
  }

  // Sustituimos las funciones globales usadas por los botones HTML.
  window.adminAddUser = adminAddUserFixed;
  window.adminAddProduct = adminAddProductFixed;
  window.adminCreateUserSave = createUserFixed;
  window.adminCreateProductSave = createProductFixed;

  // Delegación: funciona aunque el contenido del panel se vuelva a dibujar.
  document.addEventListener('click', function (event) {
    const target = event.target.closest && event.target.closest('button, [data-close], [data-admin-delete-product]');
    if (!target) return;

    if (target.matches('#adminQuickUserTop')) {
      event.preventDefault();
      event.stopPropagation();
      adminAddUserFixed();
      return;
    }

    if (target.matches('#adminAddProductDashboard, #adminQuickAddProduct')) {
      event.preventDefault();
      event.stopPropagation();
      adminAddProductFixed();
      return;
    }

    if (target.matches('#adminUserCreateSave')) {
      event.preventDefault();
      event.stopPropagation();
      createUserFixed();
      return;
    }

    if (target.matches('#adminCreateSave')) {
      event.preventDefault();
      event.stopPropagation();
      createProductFixed();
      return;
    }

    const deleteButton = target.closest('[data-admin-delete-product]');
    if (deleteButton) {
      event.preventDefault();
      event.stopPropagation();
      deleteProductFixed(deleteButton.getAttribute('data-admin-delete-product'));
      return;
    }

    const closeId = target.getAttribute('data-close');
    if (closeId) {
      event.preventDefault();
      closeModal(closeId);
    }
  }, true);

  // Formularios: Enter también guarda.
  document.addEventListener('submit', function (event) {
    if (event.target && event.target.id === 'adminUserCreateForm') {
      event.preventDefault();
      createUserFixed();
    }
    if (event.target && event.target.id === 'adminProductCreateForm') {
      event.preventDefault();
      createProductFixed();
    }
  }, true);

  // Si los modales ya están presentes, no dependemos de ningún otro init.
  document.documentElement.setAttribute('data-admin-crud-fixed', '1');
})();
