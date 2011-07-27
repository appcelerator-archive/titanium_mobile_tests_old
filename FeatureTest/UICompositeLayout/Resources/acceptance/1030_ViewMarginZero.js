// Create a view and set margin to 0 for top/left/right/bottom
// View should not contain any margin

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
	margin: 0
});

win.addEventListener('open', function(e){
	label.text = 'View Margin value: '+innerView.margin+'\nPass if value is: 0';
});

view.add(innerView);
win.add(view);
win.add(label);