// Create a view and do not set the top and set center.y to 50, call top value  
// View should display 50 as the center point and return the top value 

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
	center: {y:50}
});

win.addEventListener('open', function(e){
	label.text = 'View Center.y: '+view.center.y+
				' Top: '+view.top+
				'\nPass if Center.y: 50 and Top is returned';
});

win.add(view);
win.add(label);