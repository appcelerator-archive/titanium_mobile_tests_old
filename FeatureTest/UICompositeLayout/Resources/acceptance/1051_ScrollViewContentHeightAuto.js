// Create a scroll view and put a very high view in it so that it requires 
//vertical scroll and set contentHeight to auto
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
    contentHeight:'auto',
    showVerticalScrollIndicator:true,
    showHorizontalScrollIndicator:true
});
var view = Ti.UI.createView({
    backgroundColor:'gray',
    height: 500
});

scrollView.add(view);

win.addEventListener('open', function(e){
	label.text = 'Pass if gray view fills the screen and scrolls up and down';
});

win.add(scrollView);
view.add(label);