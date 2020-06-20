$(document).ready(function () {
	const mMenuBtn = $(".m-menu-button");
	const mMenu = $(".m-menu");
	const tab = $(".tab");
	const dark = $(".dark");
	const osnova = $(".osnova");
	const filmDescription = $(".film-description");
	const trailerButton = $(".trailer-button");
	const news = $(".news");
	const sectionNewsTitle = $(".section-news-title");
	const filmTitle = $(".film-title");
	const newsCard = $(".news-card");
	const header = $(".header");
	const navigationLink = $(".navigation-link");
	const signUp = $(".sign-up");
	const login = $(".login");
	const searchInput = $(".search-input");
	const searchButton = $(".search-button");
	const logo = $(".logo");
	const name = $(".name");
	const mMenuButton = $(".m-menu-button");
	const menuLine = $(".menu-line");
	const lupa = $(".lupa");
	const arrow = $(".arrow");
	const white = $(".white");
	const before = $(".before");
	const center = $(".center");
	const after = $(".after");

	mMenuBtn.on('click', function() {
		mMenu.toggleClass("active");
		$('body').toggleClass("no-scroll");
	});

	tab.on('click', function () {
		tab.removeClass("active");
		$(this).toggleClass("active");
		let activeTabContent = $(this).attr('data-target');
		$('.tabs-content').removeClass("visible")
		$(activeTabContent).toggleClass('visible');
	});
	mMenuButton.on('click', function () {
		$(this).toggleClass("open");
		mMenu.toggleClass("open");
	});

	dark.on('click', function () {
		osnova.toggleClass("active");
		filmDescription.toggleClass("active");
		trailerButton.toggleClass("active");
		news.toggleClass("active");
		sectionNewsTitle.toggleClass("active1");
		newsCard.toggleClass("active");
		header.toggleClass("active");
		navigationLink.toggleClass("active");
		signUp.toggleClass("active");
		login.toggleClass("active");
		searchInput.toggleClass("active");
		logo.toggleClass("active");
		name.toggleClass("active");
		filmTitle.toggleClass("active");
		mMenu.toggleClass("active1");
		mMenuButton.toggleClass("active1");
		menuLine.toggleClass("active1");
		searchButton.toggleClass("active");
		lupa.toggleClass("active");
		arrow.toggleClass("active");
		dark.toggleClass("active");
	});

	var mySwiper = new Swiper ('.swiper-container', {
	slidesPerView: 4,
	spaceBetween: 25,
    loop: true,
    breakpoints: {
    	992: {
    		slidesPerView: 4,
    	},
    	768:{
    		slidesPerView: 2,
    	},
    	320:{
    		slidesPerView: 1,
    		slidesOffsetAfter: 50,
    		navigation: {
    			nextEl: ".button-next",
    		},
    	},
    },
  });
});