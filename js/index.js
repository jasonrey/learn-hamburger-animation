"use strict";

document.addEventListener('DOMContentLoaded', function() {
	var menus = document.querySelectorAll('div');

	for (var i = 0; i < menus.length - 1; i++) {
		menus[i].addEventListener('click', function(event) {
			this.classList.contains('active') ? this.classList.remove('active') : this.classList.add('active');
		});
	}
});
