(function () {
  "use strict";
  const menus = document.querySelectorAll(".mdc-menu");
  for (const menu of menus) {
    mdc.menu.MDCMenu.attachTo(menu);
    // menu.open = true;
  }
})();
