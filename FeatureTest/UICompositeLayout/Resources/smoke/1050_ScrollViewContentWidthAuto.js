// Create a scroll view and put a very wide view in it so that it requires 
//horizontal scroll and set contentWidth to auto 
// View should fill the screen and display the scroll view   

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'View Size is: ',
	top: 20,
	left: 10,
	height: 200,
	color: 'black'
});

var scrollView = Titanium.UI.createScrollView({
    contentWidth:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
    backgroundColor:'gray',
    width: 1000
});

scrollView.add(view);

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
	label.text = 'Pass if gray view fills the screen and scrolls left and right';
	win.addEventListener('postlayout', layoutHandler);
});

win.add(scrollView);
view.add(label);