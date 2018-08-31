function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
}

function image_swap() {
	$('#profile').bind('mouseenter mouseleave', function() {
		$(this).attr({
			src: $(this).attr('data-other-src') 
			, 'data-other-src': $(this).attr('src') 
		})
	});
}

$(document).ready(function(){
	image_swap();
	random_bg_color();
});