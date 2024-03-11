
const linkListDetails = document.querySelectorAll('details.e-n-accordion-item');

linkListDetails.forEach(item => {
	const mylink = item.querySelectorAll('a');
	mylink.forEach(link => {
		const currentURL = document.location.href;
		// console.log(link.getAttribute ('href'));
		if (link.getAttribute('href') == currentURL) {
			const currentText = item.querySelector('summary');
			currentText.click();
		}
	});
});