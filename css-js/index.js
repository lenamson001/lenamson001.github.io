$(document).ready( function() {
    /* Check width on page load*/
    if ( $(window).width() > 767) {
     $('.nav-link.dropdown-toggle').removeAttr('data-toggle');
    }
    else {
    	
    }
 });

$(window).resize(function() {
    /*If browser resized, check width again */
    if ($(window).width() > 767) {
     $('.nav-link.dropdown-toggle').removeAttr('data-toggle');
    }
    else {$('.nav-link.dropdown-toggle').attr('data-toggle','dropdown');}
 });
 

