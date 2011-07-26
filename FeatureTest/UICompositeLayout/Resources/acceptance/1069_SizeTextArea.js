// Create a text area on a parent that is width and height constrained 
// See that the text area sizes itself accordingly 

var win = Ti.UI.currentWindow;
win.backgroundColor = 'white';

var label = Ti.UI.createLabel({
	text: 'Pass if text areas (yellow) width to handle the text in them, but not outside the view (green)',
	top: 20,
	left: 10,
	height: 40,
	width: 300,
	color: 'black'
});

var view1 = Ti.UI.createView({
	height: 30,
	width: 60,
	top: 80,
	backgroundColor: 'green'
});

var ta1=Titanium.UI.createTextArea({
	value: 'A',
	backgroundColor: 'yellow'
});

var view2 = Ti.UI.createView({
	height: 50,
	width: 120,
	top: 140,
	backgroundColor: 'green'
});

var ta2=Titanium.UI.createTextArea({
	value: 'Sentence: This is to test the text area to display a single sentence',
	backgroundColor: 'yellow'
});

var view3 = Ti.UI.createView({
	height: 70,
	width: 180,
	top: 220,
	backgroundColor: 'green'
});

var ta3=Titanium.UI.createTextArea({
	value: 'Paragraph: This is to test the text area to display a paragraph. A paragraph (from the Greek paragraphos, "to write beside" or "written beside") is a self-contained unit of a discourse in writing dealing with a particular point or idea. Paragraphs consist of one or more sentences. The start of a paragraph is indicated by beginning on a new line. Sometimes the first line is indented. At various times, the beginning of a paragraph has been indicated by the pilcrow',
	backgroundColor: 'yellow'
});


view1.add(ta1);
view2.add(ta2);
view3.add(ta3);

win.add(view1);
win.add(view2);
win.add(view3);
win.add(label);