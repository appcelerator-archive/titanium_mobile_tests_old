var win = Ti.UI.currentWindow;
// create table view data object
var data = [
/*	{title:'Example', hasChild:true, url:'./acceptance/example.js'},*/
	//{title:'1011_GetRectWidthHeight50', hasChild:true, url:'./acceptance/1011_GetRectWidthHeight50.js'},
	{title:'1012_ViewLeft', hasChild:true, url:'./acceptance/1012_ViewLeft.js'},
	{title:'1014_ViewRight', hasChild:true, url:'./acceptance/1014_ViewRight.js'},
	{title:'1016_ViewTop', hasChild:true, url:'./acceptance/1016_ViewTop.js'},
	{title:'1018_ViewBottom', hasChild:true, url:'./acceptance/1018_ViewBottom.js'},
	{title:'1020_ViewCenter', hasChild:true, url:'./acceptance/1020_ViewCenter.js'},
	{title:'1022_ViewWidth', hasChild:true, url:'./acceptance/1022_ViewWidth.js'},
	{title:'1024_ViewHeight', hasChild:true, url:'./acceptance/1024_ViewHeight.js'},
	// {title:'1027_ViewPaddingZero', hasChild:true, url:'./acceptance/1027_ViewPaddingZero.js'}, - PADDING WILL NOT BE IMPLEMENTED FOR 2.0
	// {title:'1030_ViewMarginZero', hasChild:true, url:'./acceptance/1030_ViewMarginZero.js'}, - MARGIN WILL NOT BE IMPLEMENTED FOR 2.0
	{title:'1033a_UndefinedWidthCenterLeft', hasChild:true, url:'./acceptance/1033a_UndefinedWidthCenterLeft.js'},
	{title:'1034_UndefinedLeft', hasChild:true, url:'./acceptance/1034_UndefinedLeft.js'},
	// {title:'1035_UndefinedCenterX', hasChild:true, url:'./acceptance/1035_UndefinedCenterX.js'}, - INVALID TEST CASE
	{title:'1043_LeftPrecedence', hasChild:true, url:'./acceptance/1043_LeftPrecedence.js'},
	{title:'1044_CenterXPrecedence', hasChild:true, url:'./acceptance/1044_CenterXPrecedence.js'},
	{title:'1047_TopPrecedence', hasChild:true, url:'./acceptance/1047_TopPrecedence.js'},
	{title:'1048_CenterYPrecedence', hasChild:true, url:'./acceptance/1048_CenterYPrecedence.js'},
	{title:'1051_ScrollViewContentHeightAuto', hasChild:true, url:'./acceptance/1051_ScrollViewContentHeightAuto.js'},
	{title:'1065_SizeLabel', hasChild:true, url:'./acceptance/1065_SizeLabel.js'},
	{title:'1066_SizeImageView', hasChild:true, url:'./acceptance/1066_SizeImageView.js'},
	{title:'1067_SizeProgressBar', hasChild:true, url:'./acceptance/1067_SizeProgressBar.js'},
	{title:'1068_SizeSwitch', hasChild:true, url:'./acceptance/1068_SizeSwitch.js'},
	{title:'1069_SizeTextArea', hasChild:true, url:'./acceptance/1069_SizeTextArea.js'},
	{title:'1070_SizeTextField', hasChild:true, url:'./acceptance/1070_SizeTextField.js'},
	{title:'1071_SizePicker', hasChild:true, url:'./acceptance/1071_SizePicker.js'},
	{title:'1072_SizeSearchBar', hasChild:true, url:'./acceptance/1072_SizeSearchBar.js'},
	{title:'1073_SizeButtonBar', hasChild:true, url:'./acceptance/1073_SizeButtonBar.js'},
	{title:'1074_SizeTableViewSection', hasChild:true, url:'./acceptance/1074_SizeTableViewSection.js'},
	{title:'1077_FillVideoView', hasChild:true, url:'./acceptance/1077_FillVideoView.js'},
	{title:'1078_FillToolbar', hasChild:true, url:'./acceptance/1078_FillToolbar.js'},
	{title:'1079_FillTableView', hasChild:true, url:'./acceptance/1079_FillTableView.js'},
	{title:'1080_FillTableViewRow', hasChild:true, url:'./acceptance/1080_FillTableViewRow.js'},
	{title:'1081_FillWebView', hasChild:true, url:'./acceptance/1081_FillWebView.js'},
	{title:'1082_FillScrollView', hasChild:true, url:'./acceptance/1082_FillScrollView.js'},
	{title:'1082a_FillScrollView', hasChild:true, url:'./acceptance/1082a_FillScrollView.js'},
	{title:'1083_FillScrollableView', hasChild:true, url:'./acceptance/1083_FillScrollableView.js'},
	{title:'1084_FillSlider', hasChild:true, url:'./acceptance/1084_FillSlider.js'},
	{title:'1106_zIndexMultiple', hasChild:true, url:'./acceptance/1106_zIndexMultiple.js'},
	{title:'LayoutChange', hasChild:true, url:'./acceptance/LayoutChange.js'},
	{title:'TIMOB7885', hasChild:true, url:'./acceptance/TIMOB7885.js'}
];



// create table view
var tableView = Titanium.UI.createTableView({
	data:data
});

// create table view event listener
tableView.addEventListener('click', function(e)
{
	if (e.rowData.url)
	{
		var win = Titanium.UI.createWindow({
			url:e.rowData.url,
			title:e.rowData.title
		});
		Titanium.UI.currentTab.open(win,{animated:true});
	}
});

// add table view to the window
win.add(tableView);