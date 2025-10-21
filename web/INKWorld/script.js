// Toggel class active

const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger diklik
document.querySelector("#hamburger-icon").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar sidebar unuk menghilangkan bar nav
