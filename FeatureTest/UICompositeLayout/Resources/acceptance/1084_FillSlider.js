//Description: Create multiple slider on different parent width  

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Slider should be the length of the parent background color',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

// Short Test
var slider1 = Ti.UI.createSlider();
var view1 = Ti.UI.createView({
	top:80,
	height: 40,
	width: 100,
	backgroundColor: 'yellow'
});

view1.add(slider1);

// Medium Test
var slider2 = Ti.UI.createSlider();
var view2 = Ti.UI.createView({
	top:130,
	height: 40,
	width: 200,
	backgroundColor: 'red'
});

view2.add(slider2);

// Long Test
var slider3 = Ti.UI.createSlider({
	top: 180
});

var view3 = Ti.UI.createView({
});

view3.add(slider3)

win.add(view3);
win.add(view2);
win.add(view1);
win.add(label);
