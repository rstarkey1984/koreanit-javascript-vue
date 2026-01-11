(function () {
  function addCopyButtons() {
    document.querySelectorAll("pre").forEach(function (pre) {
      if (pre.querySelector(".copy-btn")) return;

      var btn = document.createElement("button");
      btn.className = "copy-btn";
      btn.type = "button";
      btn.textContent = "복사";

      btn.addEventListener("click", function () {
        var code = pre.querySelector("code");
        var text = code ? code.innerText : pre.innerText;

        console.log(text);

        navigator.clipboard.writeText(text).then(
          function () {
            btn.textContent = "복사됨";
            setTimeout(function () {
              btn.textContent = "복사";
            }, 900);
          },
          function () {
            btn.textContent = "실패";
            setTimeout(function () {
              btn.textContent = "복사";
            }, 900);
          }
        );
      });

      pre.appendChild(btn);
    });
  }

  addCopyButtons();
})();
