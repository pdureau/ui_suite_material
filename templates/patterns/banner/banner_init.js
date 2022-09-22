(function () {
  "use strict";
  const banners = document.querySelectorAll(".mdc-banner");
  for (const banner of banners) {
    mdc.banner.MDCBanner.attachTo(banner).open();
  }
})();
