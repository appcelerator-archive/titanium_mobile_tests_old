// Create a child view that has a height larger than the parent view's height
// Child view (blue rectangle) should be clipped propertly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var view = Ti.UI.createView({
backgroundColor: 'yellow',
top: '110px',
height: '150px',
width: '150px'
});
 
var view2 = Ti.UI.createView({ backgroundColor: 'blue', height: '180px', width: '75px', }); 

var label = Ti.UI.createLabel({ top: 20, left: 10, height: Ti.UI.SIZE, width: Ti.UI.SIZE, color: 'black' });
label.text = 'The blue rectangle (vertical) should be contained within the yellow square';

view.add(view2);
win.add(view);
win.add(label);
win.open();