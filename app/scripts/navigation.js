$(function() {
    // Setup the site navigation
    $('#menu-btn').click(function() {
        console.log('#menu-btn clicked!');
        $('#menu-btn').toggleClass('close');
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
