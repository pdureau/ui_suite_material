(function () {
  "use strict";
  const snackbars = document.querySelectorAll(".mdc-snackbar");
  for (const snackbar of snackbars) {
    let yo = mdc.snackbar.MDCSnackbar.attachTo(snackbar).open();
    console.log(yo);
  }
})();
