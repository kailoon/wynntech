// import './modules'
document.addEventListener("DOMContentLoaded", function(event) {
	var button = document.querySelector('.sm-menu');
	var close = document.querySelector('.close');
	var nav = document.querySelector('#nav');
	var lang = navigator.language;
	var zh = document.querySelector('#zh');
	var en = document.querySelector('#en');
	button.addEventListener('click', function (e){
		nav.classList.toggle("invisible");
	});
	close.addEventListener('click', function (e){
		nav.classList.toggle("invisible");
	});

	if (window.navigator.language == 'zh') {       
  	en.classList.add("show");
	} else {
		zh.classList.add("show");
	}


});