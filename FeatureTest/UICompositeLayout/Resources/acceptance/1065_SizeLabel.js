// Create 3 label on a parent that is width and height constrained with the following text:
// A
// Test
// VeryLongLabelText1234567890 
// See that the label sizes itself accordingly

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Labels should auto size to text, but stay within red',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});
// Short Test
var outlineView1 = Ti.UI.createView({
	height: 62,
	width: 152,
	top: 80,
	backgroundColor: 'red'
});
var view1 = Ti.UI.createView({
	height: 60,
	width: 150
});
var label1 = Ti.UI.createLabel({
	text: 'A',
	backgroundColor: 'blue',
	color: 'white'
});
view1.add(label1);
outlineView1.add(view1);

// Medium Test
var outlineView2 = Ti.UI.createView({
	height: 62,
	width: 152,
	top: 180,
	backgroundColor: 'red'
});
var view2 = Ti.UI.createView({
	height: 60,
	width: 150
});
var label2 = Ti.UI.createLabel({
	text: 'Test',
	backgroundColor: 'blue',
	color: 'white'
});
view2.add(label2);
outlineView2.add(view2);

// Long Test
var outlineView3 = Ti.UI.createView({
	height: 62,
	width: 152,
	top: 280,
	backgroundColor: 'red'
});
var view3 = Ti.UI.createView({
	height: 60,
	width: 150
});
var label3 = Ti.UI.createLabel({
	text: 'VeryLongLabelText1234567890 ',
	backgroundColor: 'blue',
	color: 'white'
});
view3.add(label3);
outlineView3.add(view3);


win.add(label);
win.add(outlineView1);
win.add(outlineView2);
win.add(outlineView3);

