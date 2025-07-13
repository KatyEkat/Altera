const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
	const toggle = accordion.querySelector(".accordion-toggle");

	toggle.addEventListener("click", () => {
		accordion.classList.toggle("open");
	});
});
