var typed = new Typed('.element', {
strings: ["Hi my name is lushomo Chimimba","this web page is under construction"," the info here dates 2018" ,"new updates coming soon"],
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
