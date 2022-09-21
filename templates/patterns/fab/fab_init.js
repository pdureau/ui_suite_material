(function () {
  "use strict";
  const fabs = document.querySelectorAll(".mdc-fab");
  for (const fab of fabs) {
    mdc.ripple.MDCRipple.attachTo(fab);
  }
})();
