//Create a view and do not set the width and set right to 5 and center.x to 10, call width value (static/dynamic) 

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
	right: 5,
	center: {x:10}
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View dynamic width value: 2*('+ win.rect.x +'+'+ win.rect.width + '-' + view.right + '-' + view.center.x + ') =' + view.size.width+'\n Static width value should be undefined and is: ' + view.width;
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);