//Create a Ti.UI.View and do not set center.x, call center.x value (static/dynamic) 

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
	
	centerX = (view.rect.x + (view.size.width/2));
	label.text = 'View Dynamic CenterX value: '+ centerX +'\n Static Center Value is undefined:' + view.center;
	
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);