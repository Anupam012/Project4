


/* mobile Menu Js */
$(document).ready(function(){
	$(".mobile_button").click(function(){
		$(".menu").toggleClass("mobile_menu");
	});
	$("ul li a", "html, body").click(function(){
		$(".menu").removeClass("mobile_menu");
		$("html, body").removeClass("mobile_menu");
	});
});
/* mobile Menu Js */

/* Sticky header Js */
$(window).scroll(function(){
	if ($(window).scrollTop() >= 330) {
	   $('.header').addClass('sticky');
	}
	else {
	   $('.header').removeClass('sticky');
	}
});
/* Sticky header Js */


/* Scrolling Js */
jQuery(document).ready(function(){
	jQuery(".ec_header .nav-link").click(function() {
		var targetId = jQuery(this).data('target');
		if(targetId == '#'){
			jQuery('html, body').animate({
				scrollTop: 0
			}, 2000);
		}else if(targetId == '#contact_section'){
			jQuery('html, body').animate({
				scrollTop: jQuery(targetId).offset().top - 70
			}, 2000);
		}else{
			jQuery('html, body').animate({
				scrollTop: jQuery(targetId).offset().top
			}, 2000);
		}

		jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
		
	});
	//on scroll scroll to top hide/show.
	jQuery(window).scroll(function(){
		//scroll to top hide/show
		if (jQuery(this).scrollTop() > 100) {
			jQuery('.scrollToTop').fadeIn();
		} else {
			jQuery('.scrollToTop').fadeOut();
		}
	});
	jQuery('.scrollToTop').on('click', function(){
		jQuery('html, body').animate({
			scrollTop: 0
		}, 2000);
	});
});

function scrollToDiv(elem){
	var targetId = jQuery(elem).data('target');
	jQuery('html, body').animate({
		scrollTop: jQuery(targetId).offset().top
	}, 2000);
}
/* Scrolling Js */



