module.exports = function() {
	// this sets the background color of the master UIView (when there are no windows/tab groups on it)
	// Titanium.UI.setBackgroundColor('#000');

	// create tab group
	var tabGroup = Titanium.UI.createTabGroup();

	//
	// create base UI tab and root window
	//
	var win1 = new (require('/ui_soxo/slide_menu_android'));
	var tab1 = Titanium.UI.createTab({
		icon : '/assets/images/icon/icon-soxo.png',
		window : win1,
	});

	//
	// create controls tab and root window
	//
	var win2 = new (require('/ui_bongda/slide_menu_android'));
	var tab2 = Titanium.UI.createTab({
		icon : '/assets/images/icon/icon-quabong.png',
		window : win2,
	});

	//
	//  add tabs
	//
	tabGroup.addTab(tab1);
	tabGroup.addTab(tab2);
	return tabGroup;

};
