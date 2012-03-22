// Create a text field on a parent that is width and height constrained 
// See that the text field sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if text fields (yellow) are as wide enough to handle the text in them, but not outside the view (green)',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var view1 = Ti.UI.createView({
	height: 30,
	width: 60,
	top: 80,
	backgroundColor: 'green'
});

var bb1 = Titanium.UI.createButtonBar({
    labels:['One', 'Two', 'Three']
});

var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'green'
});

var bb2 = Titanium.UI.createButtonBar({
    labels:['One', 'Two', 'Three']
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
	top: 220,
	backgroundColor: 'green'
});

var bb3 = Titanium.UI.createButtonBar({
    labels:['One', 'Two', 'Three']
});


view1.add(bb1);
view2.add(bb2);
view3.add(bb3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);