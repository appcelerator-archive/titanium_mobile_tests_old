// Create a view and do not set the height and set the top to 5 and bottom to 10, call height value 
// View should be 5 units in height and return height value 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

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
	top: 5,
	bottom: 10
});

win.addEventListener('open', function(e){
	label.text = 'View Height: '+view.height+
				'\nPass if Height is returned';
});

win.add(view);
win.add(label);