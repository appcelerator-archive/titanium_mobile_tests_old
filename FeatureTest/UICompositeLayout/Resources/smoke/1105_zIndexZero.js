// Create a view and add to parent call the zIndex 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView();

var label = Ti.UI.createLabel({
	text: 'zIndex Value: ' + view.zIndex + ' Pass if it is 0',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});


win.add(view);
win.add(label);

