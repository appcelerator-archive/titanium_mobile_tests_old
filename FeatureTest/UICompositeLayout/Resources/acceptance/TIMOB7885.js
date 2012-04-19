var win = Ti.UI.currentWindow;
 
win.backgroundColor = 'white';
 
var view = Ti.UI.createView({
backgroundColor: 'yellow',
top: '100px',
height: '150px',
width: '150px'
});
 
// uncomment this line and comment the other view2 to see width clipping bug
var view1 = Ti.UI.createView({ backgroundColor: 'blue', height: '75px', width: '180px', });
 
// height clipping bug
var view2 = Ti.UI.createView({ backgroundColor: 'blue', height: '180px', width: '75px', });
 
var label = Ti.UI.createLabel({ top: 20, left: 10, height: 'auto', width: 'auto', color: 'black' });
label.text = 'The blue rectangle should stay within the yellow square:';
 
view.add(view1);
view.add(view2);
win.add(view);
win.add(label);