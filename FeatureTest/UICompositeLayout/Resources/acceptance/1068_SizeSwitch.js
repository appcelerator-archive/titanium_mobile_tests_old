// Create a switch on a parent that is width and height constrained  
// See that the switch sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if switches are...',
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

var sw1=Titanium.UI.createSwitch({
	value: true
});

var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'green'
});

var sw2=Titanium.UI.createSwitch({
	value: true,
	title:'Testing'
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
	top: 220,
	backgroundColor: 'green'
});

var sw3=Titanium.UI.createSwitch({
	value: true,
	title: 'Test'
});


view1.add(sw1);
view2.add(sw2);
view3.add(sw3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);