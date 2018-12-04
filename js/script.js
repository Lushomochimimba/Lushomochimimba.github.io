var typed = new Typed('.element', {
strings: ["I am a Full stack web developer","React js developer"," I also do React Native js development" ,"hope you enjoy your stay on my site"],
typeSpeed: 60,
backSpeed: 30,
backDelay: 2000,
loop: true
});
// scroll to projects
  $('#bt').click( function() {
    $('html, body').animate({
         scrollTop: $('#D2').offset().top
    }, 1000);
});// scroll to contact me form
$('#bt1').click( function() {
    $('html, body').animate({
         scrollTop: $('#D3').offset().top
    }, 1000);
});// scroll to footer
$('#bt2').click( function() {
    $('html, body').animate({
         scrollTop: $('#D4').offset().top
    }, 1000);

});
$('#bt3').click( function() {
    $('html, body').animate({
         scrollTop: $('#D5').offset().top
    }, 1000);

});
$('#home').click( function() {
    $('html, body').animate({
         scrollTop: $('#D1').offset().top
    }, 1000);
});// scroll to the top of the page
if ($('.scrollToTop')[0]){
    $('.scrollToTop').click(function(){
         $('html,body').animate({ scrollTop: 0 }, 100);
    });
}
