// Create a view and set its center value (50, 50)
// View should have (50,50) as the center

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 100,
	left: 10,
	height: 80,
	width: 300,
	color: 'black'
});
var view = Ti.UI.createView({
	backgroundColor: 'green',
	height: 40,
	width: 40,
	center: {x:50,y:50}
});

win.addEventListener('open', function(e){
	label.text = 'View Center values: '+view.center.x+' and '+view.center.y+'\nPass if values are returned'+
					' and the green view is at the top left';
});

win.add(label);
win.add(view);