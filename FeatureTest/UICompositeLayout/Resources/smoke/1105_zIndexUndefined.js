// Create a view and add to parent call the zIndex 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView();

var label = Ti.UI.createLabel({
	text: 'zIndex Value: ' + view.zIndex + ' Pass if it is undefined',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});


win.add(view);
win.add(label);

