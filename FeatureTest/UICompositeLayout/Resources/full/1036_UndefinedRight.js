// Create a view and do not set the right set center.x to 50 call right value
// View should display 50 as the center point and return right value

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
	center: {x:50}
});

win.addEventListener('open', function(e){
	label.text = 'View Center.x: '+view.center.x+' Right: '+view.rect.right+
				'\nPass if Center.x: 50 Right is returned';
});

win.add(view);
win.add(label);