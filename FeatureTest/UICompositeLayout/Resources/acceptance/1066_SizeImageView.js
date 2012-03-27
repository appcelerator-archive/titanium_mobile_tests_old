// Create an image view on a parent that is width and height constrained 
// See that the image view sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'ImageView should auto size to image and stay within the blue',
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
	backgroundColor: 'red'
});

var imageView1 = Ti.UI.createImageView({
	image: '../images/flower.jpg',
	backgroundColor: 'blue'
});

var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'red'
});

var imageView2 = Ti.UI.createImageView({
	image: '../images/flower.jpg',
	backgroundColor: 'blue'
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
	top: 220,
	backgroundColor: 'red'
});

var imageView3 = Ti.UI.createImageView({
	image: '../images/flower.jpg',
	backgroundColor: 'blue'
});


view1.add(imageView1);
view2.add(imageView2);
view3.add(imageView3);
win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);
