//Description: Create multiple slider on different parent width  

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Toolbar should fill the view area, last one will not have side border',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

// Short Test
var border1 = Ti.UI.createView({
	top: 80,
	height: 46,
	width: 102,
	backgroundColor: 'red'
});


var toolbar1 = Ti.UI.createToolbar();
var view1 = Ti.UI.createView({
	top:3,
	height:40,
	width: 100
});

view1.add(toolbar1);
border1.add(view1);

// Medium Test
var border2 = Ti.UI.createView({
	top: 135,
	height: 46,
	width: 202,
	backgroundColor: 'red'
});

var toolbar2 = Ti.UI.createToolbar();
var view2 = Ti.UI.createView({
	top:3,
	height: 40,
	width: 200,
});

view2.add(toolbar2);
border2.add(view2);

// Long Test
var border3 = Ti.UI.createView({
	top: 190,
	height: 46,
	backgroundColor: 'red'
});

var toolbar3 = Ti.UI.createToolbar();
var view3 = Ti.UI.createView({
	top:3,
	height: 40
});

view3.add(toolbar3);
border3.add(view3);

win.add(border3);
win.add(border2);
win.add(border1);
win.add(label);
