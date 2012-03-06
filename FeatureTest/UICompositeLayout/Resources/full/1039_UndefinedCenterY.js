// Create a view and do not set the center.y, call center.y value  
// View should fill screen and return the center vertical point 

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
	backgroundColor: 'yellow'
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);

	centerY = (view.rect.y + (view.size.height/2));
	label.text = 'View Dynamic CenterY value: '+ centerY +'\n Static Center Value is undefined:' + view.center;

	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);