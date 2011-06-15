// Create a view and set its width value to 10
// View width should be 10 system units

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
	width: 10
});

win.addEventListener('open', function(e){
	label.text = 'View Width value: '+view.width+'\nPass if value is: 10';
});

win.add(view);
win.add(label);