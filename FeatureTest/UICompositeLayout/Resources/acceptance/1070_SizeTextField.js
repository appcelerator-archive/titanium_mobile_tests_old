// Create a text field on a parent that is width and height constrained 
// See that the text field sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if text areas (yellow) width to handle the text in them, but not outside the view (green)',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var view1 = Ti.UI.createView({
	height: 30,
	width: 60,
	top: 80,
	backgroundColor: 'green'
});

var tf1=Titanium.UI.createTextField({
	value: 'A',
	backgroundColor: 'yellow'
});

var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'green'
});

var tf2=Titanium.UI.createTextField({
	value: 'Word',
	backgroundColor: 'yellow'
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
	top: 220,
	backgroundColor: 'green'
});

var tf3=Titanium.UI.createTextField({
	value: 'Longer Word',
	backgroundColor: 'yellow'
});


view1.add(tf1);
view2.add(tf2);
view3.add(tf3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);