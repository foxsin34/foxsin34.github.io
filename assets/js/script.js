const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav');
const tutup = document.getElementById('tutup');
const body = document.querySelector('body')

menuToggle.addEventListener('click', function() {
	tutup.classList.toggle('cover');
	nav.classList.toggle('slide');
	body.classList.toggle('slide-on');
});