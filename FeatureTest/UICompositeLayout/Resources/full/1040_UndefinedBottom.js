// Create a view and do not set the bottom set center.y to 50, call bottom value  
// View should display 50 as the center point and return bottom value  

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
	center: {y:50},
	top: 10
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Dynamic CenterY value: '+ view.rect.bottom +'\n Static CenterY Value is undefined:' + view.bottom;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);