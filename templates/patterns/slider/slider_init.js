(function () {
  "use strict";
  const sliders = document.querySelectorAll(".mdc-slider");
  for (const slider of sliders) {
    mdc.slider.MDCSlider.attachTo(slider);
  }
})();
