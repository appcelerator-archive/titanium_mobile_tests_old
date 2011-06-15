// Create a view with left to 10 and center.x to 30 and right to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	left: 10,
	center: {x:30},
	right: 100
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});


win.addEventListener('open', function(e){
	label.text = 'View Width value: ' + view.size.width + '\nPass if the value is 40 and \n10 units shifted to the right'
});

win.add(view);
win.add(label);