/*
 Initiation of WOW.JS. 
 A JavaScript plugin that reveals animations when you scroll.
*/
new WOW().init();

/*
  SCROLLSPY.JS FUNCTION
  A plugin used to automatically update links in a navigation list based on scroll position.
*/
	$(document).ready(function() {
		// Navigation click actions	
		$('.scroll-link').on('click', function(event) {
			event.preventDefault();
			let sectionID = $(this).attr("data-id");	//assign ID of 'this' object to variable
			scrollToID('#' + sectionID, 750);			//scroll to section in 750ms
    });
    
		// Scroll to top action
		$('.scroll-top').on('click', function(event) {	//click eventlistener for class
			event.preventDefault();		
			$('html, body').animate({scrollTop:0}, 'slow'); 		
		});
	});
	// Scroll function
	function scrollToID(id, speed){
		let offSet = 50;
		let targetOffset = $(id).offset().top - offSet;
		let mainNav = $('#navbar_menu');
		$('html,body').animate({scrollTop:targetOffset}, speed);
		if (mainNav.hasClass("open")) {
			mainNav.css("height", "1px").removeClass("in").addClass("collapse");
			mainNav.removeClass("open");
		}
	}
	if (typeof console === "undefined") {
	    console = {
	        log: function() { }
	    };
  }
  //code snippet courtesy of AliJafarian.com
