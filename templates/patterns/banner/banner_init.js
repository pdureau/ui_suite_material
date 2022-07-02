document.querySelectorAll('.mdc-banner').forEach(
  function(element) {
    const banner = new window.mdc.banner.MDCBanner(element);
    banner.open();
  }
)
