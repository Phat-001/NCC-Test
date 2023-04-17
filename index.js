function showContent(contentId) {
	const contents = document.querySelectorAll(
		".contents .wrap__contents > div"
	);
	for (let i = 0; i < contents.length; i++) {
		contents[i].style.display = "none";
	}

	const contentToShow = document.getElementById(contentId);
	contentToShow.style.display = "block";

	const tabs = document.querySelectorAll(".sidebar a");
	for (let i = 0; i < tabs.length; i++) {
		tabs[i].classList.remove("active");
	}
	const tabToActivate = document.querySelector(
		`.sidebar a[href="#${contentId}"]`
	);

	tabToActivate.classList.add("active");
}
