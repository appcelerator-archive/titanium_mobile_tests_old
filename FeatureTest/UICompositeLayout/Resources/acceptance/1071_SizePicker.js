// Create a text field on a parent that is width and height constrained 
// See that the text field sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if the Picker is within the view (green)',
	top: 20,
	left: 10,
	height: 60,
	width: 300,
	color: 'black'
});

var view1 = Ti.UI.createView({
	height: 200,
	width: 100,
	top: 80,
	backgroundColor: 'green'
});


var picker = Titanium.UI.createPicker();
var data = [];
data[0]=Titanium.UI.createPickerRow({title:'Bananas'});
data[1]=Titanium.UI.createPickerRow({title:'Strawberries'});
data[2]=Titanium.UI.createPickerRow({title:'Mangos'});
data[3]=Titanium.UI.createPickerRow({title:'Grapes'});
picker.add(data);

view1.add(picker);


win.add(view1);
/*win.add(view2);
win.add(view3);*/
win.add(label);