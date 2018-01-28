$(function() {
  $(".hero-title").typed({
    strings: ["My Portfolio"],
    typeSpeed: 75,
    backSpeed: 10,
    backDelay: 2000,
    showCursor: false,
    loop: false,
  });
});

var toggleButton = document.querySelector('#toggle-button');
var mobileMenu = document.querySelector('#mobile-menu');
var menuIsOpen = true

function toggleMenu() {
	menuIsOpen = !menuIsOpen

	if (menuIsOpen) {
		mobileMenu.className = 'mobile-menu';
	}	else {
		mobileMenu.className = 'mobile-menu open';
	}
}

toggleButton.addEventListener('click', toggleMenu);