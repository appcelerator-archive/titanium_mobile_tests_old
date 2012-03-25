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

// ios params
var height1 = 30;
var height2 = 50;
var height3 = 70;

var width1 = 80;
var width2 = 120;
var width3 = 180;

var top1 = 80;
var top2 = 140;
var top3 = 220;

if (Ti.Platform.osname !== 'iphone' && Ti.Platform.osname !== 'ipad'){
	height1 = 85;
	height2 = 85;
	height3 = 85;
	
	width1 = 95;
	width2 = 150;
	
	top2 = 170;
	top3 = 270;
}

var view1 = Ti.UI.createView({
	height: height1,
	width: width1,
	top: top1,
	backgroundColor: 'green'
});

var sw1=Titanium.UI.createSwitch({
	value: true,
	titleOn:'A',
	titleOff:'B'
});

var view2 = Ti.UI.createView({
	height: height2,
	width: width2,
	top: top2,
	backgroundColor: 'green'
});

var sw2=Titanium.UI.createSwitch({
	value: true,
	titleOn:'Test On',
	titleOff:'Test Off'
});

var view3 = Ti.UI.createView({
	height: height3,
	width: width3,
	top: top3,
	backgroundColor: 'green'
});

var sw3=Titanium.UI.createSwitch({
	value: true,
	titleOn:'VeryLongText1234567890 On',
	titleOff:'VeryLongText1234567890 Off'
});


view1.add(sw1);
view2.add(sw2);
view3.add(sw3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);