(function () {
	const hamburgerBtn = document.querySelector(".hamburger-btn");
	const navMenu = document.querySelector(".page-header__nav");
	const toggleFeaturesBtn = document.querySelector(".feature__toggle-btn");
	const featuresList = document.querySelector(".features__list");

	hamburgerBtn.addEventListener("click", function (e) {
		hamburgerBtn.classList.toggle("opened");
		navMenu.classList.toggle("opened");
	});

	// Click everywhere to close navigation
	document.addEventListener("click", function (event) {
		if (navMenu.contains(event.target) || hamburgerBtn.contains(event.target)) {
			return;
		}
		if (
			!navMenu.contains(event.target) ||
			!hamburgerBtn.contains(event.target)
		) {
			navMenu.classList.remove("opened");
			hamburgerBtn.classList.remove("opened");
		}
	});

	toggleFeaturesBtn.addEventListener("click", function (e) {
		featuresList.classList.toggle("reveal");

		if (featuresList.classList.contains("reveal")) {
			e.target.textContent = "Close all features";
		} else {
			e.target.textContent = "See all features";
		}
	});
})();
