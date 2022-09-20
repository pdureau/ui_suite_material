(function () {
  "use strict";
  const buttons = document.querySelector(".mdc-button");
  for (const button of buttons) {
    mdc.ripple.MDCRipple.attachTo(button);
  }
})();
