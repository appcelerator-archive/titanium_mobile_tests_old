// Create a view with scroll view and put content that will require both scroll 
// View should fill the screen and allow to scroll both direction    
// Test case is not valid for Android; cannot have vertical and horizontal scroll indicators at the same time.

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
    contentHeight:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
    backgroundColor:'gray',
    height: 1000,
    width: 1000
});

scrollView.add(view);

win.addEventListener('postlayout', function layoutHandler(e) {
	win.removeEventListener('postlayout', layoutHandler);
  	label.text = 'Pass if gray view fills the screen and scrolls left, right, up, and down';
  	win.addEventListener('postlayout', layoutHandler);
});

win.add(scrollView);
view.add(label);