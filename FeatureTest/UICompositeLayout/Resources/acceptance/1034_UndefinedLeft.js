// Create a view and do not set the left and set center.x to 80 and right to 200, call left value
// View should display 80 as the center point and left value as 40

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 200,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	center: {x:80},
	width: 120
});

win.addEventListener('open', function(e){
	label.text = 'View Center.x: '+view.center.x+' Left: '+view.rect.left+
				'\nPass if Center.x: 80 Left: 20';
});

win.add(view);
win.add(label);