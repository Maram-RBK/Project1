//styling using jquery.
$('#head').css("background", "#009999");
$('p').css("color", "#e6ffff")
$('#text').css('font-size', '100px');

//declare an array of qutes and show them in a div.
var arr = ["A reader lives a thousand lives before he dies", "We read to know we're not alone", "If one cannot enjoy reading a book over and over again, there is no use in reading it at all"];
var i = 0;
//use the click function to show the qutes.
$('#text').click(function() {
	if(i < arr.length) {
	$('#qtsD').text(arr[i])
	i++;
	};
});