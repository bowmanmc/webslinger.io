$(function() {

    // Setup the site navigation
    console.log('Setting up menu navigation');
    $('#menu-btn').click(function() {
        console.log('#menu-btn clicked!');
        $('#menu-btn').toggleClass('close');
    });

});
