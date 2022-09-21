(function () {
  "use strict";
  const tabBars = document.querySelectorAll(".mdc-tab-bar");
  for (const tabBar of tabBars) {
    mdc.tab.MDCTab.attachTo(tabBar);
  }
})();
