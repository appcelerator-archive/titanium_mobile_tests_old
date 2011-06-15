
// Create an progress bar on a parent that is width and height constrained 
// See that the progress bar sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if Progress bars size to text size',
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

var pb1=Titanium.UI.createProgressBar({
    min: 0,
    max: 10,
    message: 'Test'
});

var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'green'
});

var pb2=Titanium.UI.createProgressBar({
    min: 0,
    max: 10,
    message: 'Short Progress'
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
	top: 220,
	backgroundColor: 'green'
});

var pb3=Titanium.UI.createProgressBar({
    min: 0,
    max: 10,
    message: 'Very long Progress Bar'
});


view1.add(pb1);
view2.add(pb2);
view3.add(pb3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);

pb1.show();
pb2.show();
pb3.show();