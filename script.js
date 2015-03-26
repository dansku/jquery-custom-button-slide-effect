jQuery(document).ready(function($) {
var crossTime = 300; // rotate timer
	$( ".expand_button_slide" ).click(function() {
		var degree = getRotationDegrees($(this).children("span"));
		if(degree == 90) { 
			degree = 45;
			$(this).css("border-color", "#142330");
			$(this).children("span").css("color", "#142330");
		} else { 
			degree = 90;
			$(this).css("border-color", "#9b2631");
			$(this).children("span").css("color", "#9b2631");
		}
		$(this).children("span").transition({ rotate: degree,  duration: crossTime });
		$(this).siblings("#slider_div").slideToggle('slow');
	});
 
	//xbutton click
	$( ".close_circle" ).click(function() {
		$(this).parent("#slider_div").slideToggle('slow');
		$(this).parent().siblings(".expand_button_slide").css("border-color", "#142330");
		$(this).parent().siblings(".expand_button_slide").children("span").css("color", "#142330");
		$(this).parent().siblings(".expand_button_slide").children("span").transition({ rotate: 45,  duration: crossTime });
	});
});
 
function getRotationDegrees(obj) {
    var matrix = obj.css("-webkit-transform") ||
    obj.css("-moz-transform")    ||
    obj.css("-ms-transform")     ||
    obj.css("-o-transform")      ||
    obj.css("transform");
    if(matrix !== 'none') {
        var values = matrix.split('(')[1].split(')')[0].split(',');
        var a = values[0];
        var b = values[1];
        var angle = Math.round(Math.atan2(b, a) * (180/Math.PI));
    } else { var angle = 0; }
    return (angle < 0) ? angle + 360 : angle;
}