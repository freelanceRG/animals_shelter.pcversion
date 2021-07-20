$(document).ready(function(){
	$('.pets__slider').slick({
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 930,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					// autoplay: true,
					// autoplaySpeed: 3000
				}
			},
			{
				breakpoint: 630,
				settings: {
					dots: true,
					arrows: false,
					slidesToShow: 1,
					slidesToScroll: 1
					// autoplay: true,
					// autoplaySpeed: 3000
				}
			},
		]
	});
});
