// Script for navigation bar
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

console.log(bar, nav);

bar.addEventListener("click", (e) => {
  nav.classList.add("active");
});

close.addEventListener("click", (e) => {
  nav.classList.remove("active");
});
