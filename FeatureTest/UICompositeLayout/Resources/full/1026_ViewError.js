// Create a view and set the left, right, top, bottom, center, width and height value to a string and call the value for all
// View should fill the window and value should be returned

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
/*	height: 40,*/
	width: Ti.UI.SIZE,
	color: 'red'
});
var view = Ti.UI.createView({
	backgroundColor: 'green',
	left: 'leftString',
	right: 'rightString',
	top: 'topString',
	bottom: 'bottomString',
	width: 'widthString',
	height: 'heightString',
	center: {x:'centerXString', y:'centerYString'},
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'left: '+view.left+'\n'+
			'right: '+view.right+'\n'+
			'top: '+view.top+'\n'+
			'bottom: '+view.bottom+'\n'+
			'center: x: '+view.center.x+' y: '+view.center.y+'\n'+
			'width: '+view.width+'\n'+
			'height: '+view.height+'\n\n'+
			'Pass if green view fills window and all values strings returned';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(view);
win.add(label);