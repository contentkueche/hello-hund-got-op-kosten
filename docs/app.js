(function () {
  "use strict";

  var copyButton = document.querySelector("[data-copy-embed]");
  var code = document.querySelector("[data-embed-code]");
  var status = document.querySelector("[data-copy-status]");
  var frame = document.querySelector(".tool-frame");

  if (copyButton && code && status) {
    copyButton.addEventListener("click", function () {
      var value = code.value || "";
      function done(message) {
        status.textContent = message;
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(function () {
          done("Der Einbettungscode wurde kopiert.");
        }).catch(function () {
          code.select();
          done("Der Code ist markiert und kann kopiert werden.");
        });
      } else {
        code.select();
        done("Der Code ist markiert und kann kopiert werden.");
      }
    });
  }

  if (frame) {
    window.addEventListener("message", function (event) {
      var data = event.data || {};
      if (
        event.origin !== "https://hello-hund.de" ||
        event.source !== frame.contentWindow ||
        data.type !== "hh-op-cost-widget-height"
      ) return;
      var height = parseInt(data.height, 10) || 0;
      if (height >= 560 && height <= 2800) {
        frame.style.height = height + "px";
      }
    });
  }
})();
