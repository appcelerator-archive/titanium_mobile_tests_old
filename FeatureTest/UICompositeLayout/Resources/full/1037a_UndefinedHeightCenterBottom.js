//Create a view and do not set the height and set the center.y to 5 and bottom to 10, call height value(static/dynamic) 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	bottom: 10,
	center: {y:5}
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Dynamic Height value: 2*('+ win.rect.y + '+' + win.rect.height + '-' + view.bottom +'-'+ view.center.y + ')=' + view.size.height+'\n Static Height Value is undefined:' + view.height;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);