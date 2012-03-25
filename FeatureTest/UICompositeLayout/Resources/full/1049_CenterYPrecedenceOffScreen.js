// Create a view with center.y to 20 and bottom to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	height: 200,
	width:200,
	backgroundColor: 'yellow'
})
var viewChild = Ti.UI.createView({
	backgroundColor: 'red',
	top: 10,
	center: {y:20},
	bottom: 100
});
var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'The red view\'s height should be 2*('+ viewChild.center.y +'-'+ win.rect.y + '-' + viewChild.top + ') = ' + viewChild.size.height + '. '+
	             'The red view should be shifted 10 units down from top of the yellow view.';
	win.addEventListener('postlayout', layoutHandler);
});

view.add(viewChild);
win.add(view);
win.add(label);