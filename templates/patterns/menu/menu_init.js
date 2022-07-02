document.querySelectorAll('.mdc-menu').forEach(
  function(element) {
    const menu = new window.mdc.menu.MDCMenu(element);
    menu.open = true;
  }
)
