


/**
 *  PADDING WILL NOT BE IMPLEMENTED FOR 2.0; will not be tested
 */


// Create a view and set padding to 1/2/3/4 for top/left/right/bottom
// View should contain 1/2/3/4 for the padding

var win = Ti.UI.currentWindow;

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
	padding: {top:1, left:2, right:3, bottom:4}
});

var innerView = Ti.UI.createView({
	backgroundColor: 'green'
});

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'View Padding values\n'+
				'Top: '+view.padding.top+'\n'+
				'Left: '+view.padding.left+'\n'+
				'Right: '+view.padding.right+'\n'+
				'Bottom: '+view.padding.bottom+'\n'+
				'Pass if values are: 1/2/3/4';
	win.addEventListener('postlayout', layoutHandler);
});

view.add(innerView);
win.add(view);
win.add(label);