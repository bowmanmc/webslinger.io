$(function() {
    // Setup the site navigation
    $('#menu-btn').click(function() {
        $('html, body').animate({
            scrollTop: $("#footer").offset().top
        }, 500);
    });
    console.log('hooking up top-btn');
    $('#top-btn').click(function() {
        console.log('top-btn clicked!');
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

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
