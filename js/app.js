const c = document.getElementById("cursor");
if (c && matchMedia("(pointer:fine)").matches) {
  window.addEventListener("mousemove", (e) => {
    c.style.left = e.clientX + "px";
    c.style.top = e.clientY + "px";
  });
  document.querySelectorAll("a,button").forEach((el) => {
    el.addEventListener("mouseenter", () => { c.style.width = "36px"; c.style.height = "36px"; });
    el.addEventListener("mouseleave", () => { c.style.width = "14px"; c.style.height = "14px"; });
  });
}
document.querySelectorAll(".magnet").forEach((btn) => {
  btn.addEventListener("mousemove", (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.18}px)`;
  });
  btn.addEventListener("mouseleave", () => { btn.style.transform = ""; });
});
