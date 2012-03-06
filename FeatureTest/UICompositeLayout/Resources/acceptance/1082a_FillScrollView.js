//	Create a scroll view on a parent that takes the whole screen 
// This test is meant for Android small form factor

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

if(Ti.Platform.osname !== 'android') {
	var text = 'This test is not for ' + Ti.Platform.osname + '.\nRun 1082 instead.';
	var notLabel = Ti.UI.createLabel({
		color:'black',
		text:text,
		width:'auto',
		height:'auto'
	});
	
	win.add(notLabel);
}
else {
	
	var label = Ti.UI.createLabel({
		text: 'Pass if you can scroll all the way down and see "END"',
		top: 20,
		left: 10,
		height: 'auto',
		width: 'auto',
		color: 'black'
	});
	
	var label2 = Ti.UI.createLabel({
		text: 'END',
		top: 1950,
		left: 400,
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
	    width:480,
	    height:2000
	});
	
	view.add(label);
	view.add(label2);
	scrollView.add(view);
	win.add(scrollView);
}