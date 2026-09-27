/* OMNILIFE — APERTURA DIRECTA DEL FORMULARIO AÑADIR USUARIO
   Esta ruta solo controla #adminQuickUserTop -> #adminUserCreateModal.
   No modifica productos ni reemplaza la función de guardado MySQL.
*/
(function () {
  'use strict';

  function byId(id) { return document.getElementById(id); }

  function resetUser() {
    [
      'adminUserName',
      'adminUserLast',
      'adminUserUsername',
      'adminUserEmail',
      'adminUserPhone',
      'adminUserPass',
      'adminUserPassConfirm'
    ].forEach(function (id) {
      var el = byId(id);
      if (el) el.value = '';
    });

    var role = byId('adminUserRole');
    if (role) role.value = 'cliente';

    var msg = byId('adminUserMsg');
    if (msg) msg.textContent = '';
  }

  window.omniOpenUserCreateModal = function (event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }

    var modal = byId('adminUserCreateModal');
    if (!modal) {
      alert('No se encontró el formulario "Añadir usuario".');
      return false;
    }

    resetUser();

    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    modal.style.setProperty('display', 'grid', 'important');
    modal.style.setProperty('visibility', 'visible', 'important');
    modal.style.setProperty('opacity', '1', 'important');
    modal.style.setProperty('pointer-events', 'auto', 'important');
    modal.style.setProperty('z-index', '2147483000', 'important');

    var name = byId('adminUserName');
    if (name) {
      setTimeout(function () {
        try { name.focus(); } catch (_) {}
      }, 60);
    }

    return false;
  };

  // Captura directa: no depende del render del panel ni de listeners del dashboard.
  document.addEventListener('click', function (event) {
    var button = event.target && event.target.closest
      ? event.target.closest('#adminQuickUserTop')
      : null;

    if (!button) return;

    event.preventDefault();
    event.stopPropagation();

    if (event.stopImmediatePropagation) event.stopImmediatePropagation();

    window.omniOpenUserCreateModal(event);
  }, true);

  // Cierre directo del modal, sin afectar otros modales.
  document.addEventListener('click', function (event) {
    var close = event.target && event.target.closest
      ? event.target.closest('[data-close="adminUserCreateModal"]')
      : null;

    if (!close) return;

    event.preventDefault();
    event.stopPropagation();

    var modal = byId('adminUserCreateModal');
    if (!modal) return;

    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    modal.style.removeProperty('display');
    modal.style.removeProperty('visibility');
    modal.style.removeProperty('opacity');
    modal.style.removeProperty('pointer-events');
    modal.style.removeProperty('z-index');
  }, true);

  document.documentElement.setAttribute('data-omni-user-direct', '1');
})();
