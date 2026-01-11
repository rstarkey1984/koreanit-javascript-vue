(function () {
  const sidebar = document.querySelector(".sidebar");
  const btn = document.querySelector("[data-toggle-sidebar]");
  if (btn && sidebar) {
    btn.addEventListener("click", () => sidebar.classList.toggle("open"));
  }

  // 현재 페이지 링크 active 처리
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach(a => {
    const href = a.getAttribute("href");
    if (href === current) a.classList.add("active");
  });

  document.querySelectorAll("pre").forEach((pre) => {
    const button = document.createElement("button");
    button.textContent = "복사";
    button.className = "code-copy-btn";

    button.addEventListener("click", () => {
      const code = pre.querySelector("code");
      if (!code) return;

      navigator.clipboard.writeText(code.innerText).then(() => {
        button.textContent = "복사됨";
        setTimeout(() => (button.textContent = "복사"), 1200);
      });
    });

    pre.style.position = "relative";
    pre.appendChild(button);
  });
})();
