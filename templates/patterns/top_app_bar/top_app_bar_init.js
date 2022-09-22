(function () {
  "use strict";
  const bars = document.querySelectorAll(".mdc-top-app-bar");
  for (const bar of bars) {
    mdc.topAppBar.MDCTopAppBar.attachTo(bar);
  }
})();
