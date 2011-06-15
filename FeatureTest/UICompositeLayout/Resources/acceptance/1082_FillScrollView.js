//	Create a scroll view on a parent that takes the whole screen 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';


var label = Ti.UI.createLabel({
	text: 'Pass if you can scroll all the way down and to the right and see "END"',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var label2 = Ti.UI.createLabel({
	text: 'END',
	top: 2000,
	left: 800,
	height: 40,
	width: 300,
	color: 'black'
});

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    contentHeight:'auto',
    top:0,
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
    backgroundColor:'#336699',
    width:800,
    height:2000,
});

view.add(label);
view.add(label2);
scrollView.add(view);
win.add(scrollView);
