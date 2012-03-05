







/**
 * MARGIN WILL WILL NOT IMPLEMENTED FOR 2.0; will not be testing
 */

// Create a view and set margin to 10 for top/left/right/bottom
// View should contain 10 unit margin

var win = Ti.UI.currentWindow;

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'yellow'
});

var innerView = Ti.UI.createView({
	backgroundColor: 'green',
	margin: 10
});

win.addEventListener('open', function(e){
	label.text = 'View Margin value: '+innerView.margin+'\nPass if value is: 10';
});

view.add(innerView);
win.add(view);
win.add(label);