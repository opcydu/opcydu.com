
const floatingNav = document.querySelector("#floatingNav");

const showAfter = 180;

function updateNav() {
  if (window.scrollY > showAfter) {
    floatingNav.classList.add("visible");
  } else {
    floatingNav.classList.remove("visible");
  }
}

window.addEventListener("scroll", updateNav, {
  passive: true
});

updateNav();
