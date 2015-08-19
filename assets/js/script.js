(function($) {
	$( document ).ready(function() {

		//Init Nice Scroll
		$("html").niceScroll({'scrollspeed':50});

		// Init WOW Effects
		new WOW({ mobile:false }).init();

		// Food Categories Menu
		$('.categories a').click(function(e) {
			e.preventDefault();

			$('.categories a').removeClass('active');
			$(this).addClass('active');

			$('.category-content').stop().clearQueue().slideUp();
			$($(this).attr('href')).slideDown();
		});





			/* Booking Table Form Submission */
			var use_ajax = true;

			$('#BookTable').submit(function() {
				var form_data = $(this).serialize();
				if (use_ajax === true)
				{
					$.post($(this).attr('action'), form_data, function(data) {
						$('.feedback-book').html(data).delay(300).fadeIn('slow');
					});
					return false;
				}
			});



		// Gallery Owl Carousel Init
		$('.owl-testimonials').owlCarousel({
				loop:true,
				margin:10,
				nav:false,
				items:1,
				autoplay:true,
				responsiveClass:true
		})


		// Gallery Owl Carousel Init
		$('.owl-carousel').owlCarousel({
				loop:true,
				margin:10,
				responsiveClass:true,
				responsive:{
						0:{
								items:1,
								nav:false
						},
						800:{
								items:2,
								nav:false
						},
						1280:{
								items:3,
								nav:false,
								loop:false
						}
				}
		})



		// Social Media Icons
	 	$(".footer-social li").mouseleave(function(){
        $(this).find('img').stop().css('top', '0');
    }).mouseenter(function(){
        $(this).find('img').stop().animate({ top: '-10px' }, 250);
    });


			/* Contact Form Submission */
			var use_ajax = true;

			$('#ContactForm').submit(function() {
				var form_data = $(this).serialize();

				if (validate_email($('#ContactEmail').val() ))
				{
					if (use_ajax === true)
					{
						$.post($(this).attr('action'), form_data, function(data) {
							$('.feedback').html('<strong class="text-info">'+data+'</strong>').delay(300).fadeIn('slow');
						});
						return false;
					}
				}
				else
				{
					$('.feedback').html('<strong class="text-danger">Please enter a valid e-mail!</strong>').fadeIn('slow');
					return false;
				}
			});



		/*-----------------------------------------------------------------------------------*/
		/* ####	HELPERS
		/*-----------------------------------------------------------------------------------*/


		/* Validate E-Mail */

		function validate_email (email) {
			// http://stackoverflow.com/a/46181/11236

				var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
				return re.test(email);
		}


		// Smooth scroll
		$('a.scroll').bind('click',function(event){
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500,'easeInOutExpo');
			event.preventDefault();
			return false;
		});



	});
})(jQuery);
