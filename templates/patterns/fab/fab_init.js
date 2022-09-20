(function () {
  "use strict";
  const fabs = document.querySelector(".mdc-fab");
  for (const fab of fabs) {
    mdc.fab.MDCFab.attachTo(fab);
  }
})();
