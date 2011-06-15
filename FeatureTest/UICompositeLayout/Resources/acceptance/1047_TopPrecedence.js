//Create a view with top to 10 and center.y to 30 and bottom to 100 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
	backgroundColor: 'yellow',
	top: 10,
	center: {y:30},
	bottom: 100
});

var label = Ti.UI.createLabel({
	top: 20,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});


win.addEventListener('open', function(e){
	label.text = 'View Height value: '+view.size.height+'\nPass if the value is 40 and \n10 units shifted to the down';
});

win.add(view);
win.add(label);