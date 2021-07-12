/* ===============================================
            Preloader
================================================= */

$(window).on("load", function() { // Make sure the whole website is loaded.
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut('slow');
});