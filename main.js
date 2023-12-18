const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 100) {
		header.style.backgroundColor = '#677987';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});






const counters = document.querySelectorAll('.counter');
const plus = document.createTextNode("+")

function funkcja() {
	counters.forEach((counter) => {
		counter.innerText = '0';

		const updateCouter = () => {
			const target = +counter.getAttribute('data-target');
			const c = +counter.innerText;

			const increment = target / 200;

			if (c < target) {
				counter.innerText = `${Math.ceil(c + increment)}`;
				setTimeout(updateCouter, 1);
			} else {
				counter.innerText = target;
				counter.appendChild(plus);
			}
		};
		updateCouter();
	});
}


var once = 0;

const observer = new IntersectionObserver(function(entries, observer) {
	if (once != 1) {
		entries.forEach((entry) => {
			if (entry.target.id === 'small' && entry.isIntersecting) {
				funkcja();
				once = 1;
			}
		});
	}
});


const div = document.getElementById('small');
observer.observe(div);


