(function () {
  "use strict";
  const banners = document.querySelectorAll(".mdc-banner");
  console.log(banners);
  for (const banner of banners) {
    mdc.banner.MDCBanner.attachTo(banner);
  }
})();
