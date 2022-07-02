document.querySelectorAll('.mdc-list').forEach(
  function(element) {
    const list = new window.mdc.list.MDCList(element);
    const ripple = new window.mdc.ripple.MDCRipple(list);
  }
)
