
// Create an progress bar on a parent that is width and height constrained 
// See that the progress bar sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if Progress bars size to text size',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

// ios params
var height1 = 40;
var height2 = 50;
var height3 = 70;

var width1 = 60;
var width2 = 120;
var width3 = 180;

var top1 = 80;
var top2 = 140;
var top3 = 220;

if (Ti.Platform.osname !== 'iphone' && Ti.Platform.osname !== 'ipad'){
	height1 = 75;
	height2 = 105;
	height3 = 115;
	
	width1 = 95;
	width2 = 150;
	
	top2 = 175;
	top3 = 285;
}

var view1 = Ti.UI.createView({
	height: height1,
	width: width1,
	top: top1,
	backgroundColor: 'black'
});

var pb1=Titanium.UI.createProgressBar({
    min: 0,
    max: 10,
    value:0,
    message: 'Test',
    color: 'white'
});

var view2 = Ti.UI.createView({
	height: height2,
	width: width2,
	top: top2,
	backgroundColor: 'black'
});

var pb2=Titanium.UI.createProgressBar({
    min: 0,
    max: 10,
    value:0,
    message: 'Short Progress',
    color: 'white'
});

var view3 = Ti.UI.createView({
	height: height3,
	width: width3,
	top: top3,
	backgroundColor: 'black'
});

var pb3=Titanium.UI.createProgressBar({
    min: 0,
    max: 10,
    value:0,
    message: 'Very long Progress Bar',
    color: 'white'
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

var val = 1
setInterval(function() {
	
	pb1.value = val;
	pb2.value = val;
	pb3.value = val;
	
	val++;

},1000);