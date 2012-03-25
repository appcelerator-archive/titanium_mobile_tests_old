// Create a scroll view and put a very wide view in it so that it requires 
//horizontal scroll and set contentWidth to auto 
// View should fill the screen and display the scroll view   

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: Ti.UI.SIZE,
	width: Ti.UI.SIZE,
	color: 'black'
});

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    scrollType: 'horizontal', // needed to make case work correctly on Android
    showHorizontalScrollIndicator:true
});

var view = Ti.UI.createView({
    backgroundColor:'gray',
    width: 5000
});
/*
Titanium.Gesture.addEventListener('orientationchange', function(e){ // Handle case where launched in portrait then rotated to landscape
	
	if (e.orientation == Ti.UI.LANDSCAPE_LEFT || e.orientation == Ti.UI.LANDSCAPE_RIGHT) {
	view.startLayout();
	view.width = 2000;
	view.finishLayout();
} 

});
*/

scrollView.add(view);

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Pass if gray view fills the screen and scrolls left and right';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(scrollView);
view.add(label);