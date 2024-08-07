// PRELOADER JS
// *************************************************************
document.addEventListener('DOMContentLoaded', function () {
	let progress = 0;
	const progressText = document.getElementById('progress-text');
	const preloader = document.getElementById('preloader');
	const content = document.getElementById('content');

	const interval = setInterval(function () {
		progress += 10;
		progressText.textContent = progress + '%';

		if (progress >= 100) {
			clearInterval(interval);
			document.getElementById('preloader').style.display = 'none';
			// You can redirect to your main page here
			window.location.href = 'profile.html'; // Change to your actual main page
		}
	}, 500); // Adjust the interval speed as needed
});

// TEACHING DROPDOWNS
function toggleDropdown(event) {
	const header = event.currentTarget;
	const content = header.nextElementSibling;
	header.classList.toggle('active');
	content.classList.toggle('show');
}

document.addEventListener('DOMContentLoaded', () => {
	const headers = document.querySelectorAll('.dropdown-header');
	headers.forEach((header) => {
		header.addEventListener('click', toggleDropdown);
	});
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
	menuIcon.classList.toggle('bx-x');
	navbar.classList.toggle('active');
};

// scroll section active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 150;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});
		}
	});

	// sticky navbar
	let header = document.querySelector('.navigator');

	header.classList.toggle('sticky', window.scrollY > 100);

	// remove menu icon navbar when click navbar link (scroll)
	menuIcon.classList.remove('bx-x');
	navbar.classList.remove('active');
};

// swiper

let swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 50,
	loop: true,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

// dark light mode

// Check if the element exists before trying to manipulate it
const darkModeIcon = document.querySelector('#darkMode-icon');
if (darkModeIcon) {
	// Use addEventListener for better flexibility
	darkModeIcon.addEventListener('click', () => {
		// Toggle the 'bx-sun' class for light/dark mode switch
		darkModeIcon.classList.toggle('bx-sun');
		// Add additional logic here to toggle dark mode styles on other elements
	});
} else {
	console.error('Dark mode icon element not found!');
}
