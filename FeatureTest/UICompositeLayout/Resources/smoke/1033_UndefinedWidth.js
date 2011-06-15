// Create a view and do not set the width and set left to 5 and right to 10, call width value
// View should be 5 unit in width and return width value

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
	backgroundColor: 'yellow',
	left: 5,
	right: 10
});

win.addEventListener('open', function(e){
	label.text = 'View Width value: '+view.size.width+'\nPass if value is returned';
});

win.add(view);
win.add(label);