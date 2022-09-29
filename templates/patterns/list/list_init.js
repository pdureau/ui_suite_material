(function () {
  "use strict";
  const lists = document.querySelectorAll(".mdc-list");
  for (const list of lists) {
    mdc.list.MDCList.attachTo(list);
    mdc.ripple.MDCRipple.attachTo(list);
  }
})();
