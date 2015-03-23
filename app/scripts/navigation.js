$(function() {
    // Setup the site navigation
    $('#menu-btn').click(function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 500);
    });
    $('#menu-btn-link').removeAttr('href'); // remove the href if js is enabled

    $("#navigation").headroom({
        "offset": 70,
        "tolerance": 2,
        "classes": {
            "initial": "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    }).init();
});
