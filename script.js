const details = document.querySelectorAll('details.e-n-accordion-item');

details.forEach(item => {
	const mylink = item.querySelectorAll('a');
	mylink.forEach(link => {
		const currentURL = document.location.href;
		if (link.getAttribute('href') == currentURL) {
			link.querySelector('.elementor-icon-list-text').className += ' active-current-link';
			const currentText = item.querySelector('summary');
			currentText.click();
		}
	});
});