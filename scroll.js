/* 
 * Create HTML5 elements for IE's sake
 */
/* smooth scrolling */
$(function () {
 
$('a[href^="#"]').click(function(event) {
var id = $(this).attr("href");
var offset = 20;
var target = $(id).offset().top - offset;
 
$('html, body').animate({scrollTop:target}, 500);
event.preventDefault();
});
 
});
/* end smooth scrolling script */

document.createElement("article");
document.createElement("section");