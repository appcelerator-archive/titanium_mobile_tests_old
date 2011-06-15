// Create a view and set its height value
// Get correct value for the view height in the system units

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'green',
	height: 10
});

win.addEventListener('open', function(e){
	label.text = 'View Height value: '+view.height+'\nPass if value is: 10';
});

win.add(view);
win.add(label);