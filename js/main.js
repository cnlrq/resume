/*rem*/
$(document).ready(function() {
	var rem = $(window).width()/80+"px";
	$("body").css("font-size",rem);
	//alert(rem);
});
$(window).resize(function(){
	var rem = $(window).width()/80+"px";
	$("body").css("font-size",rem);
})
