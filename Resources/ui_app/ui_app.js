module.exports = function() {
	var win = Titanium.UI.createWindow({
		backgroundColor : 'transparent',
		fullscreen : false
	});

	//-------Views to hold content-------

	var winView1 = Ti.UI.createScrollView({
		top : 0,
		height : '85%',
		backgroundColor : 'blue'
	});
	var winView2 = Ti.UI.createScrollView({
		top : 0,
		height : '85%',
		backgroundColor : 'yellow'
	});

	var winView3 = Ti.UI.createScrollView({
		top : 0,
		height : '85%',
		backgroundColor : 'green'
	});

	var winView4 = Ti.UI.createScrollView({
		top : 0,
		height : '85%',
		backgroundColor : 'red'
	});
	var winView5 = Ti.UI.createScrollView({
		top : 0,
		height : '85%',
		backgroundColor : 'brown'
	});
	//---------Labels that Describe each View-------

	//Tab container holds the custom tabgroup

	var tabContainer = Ti.UI.createView({
		bottom : 0,
		height : '15%',
		width : Ti.App.size(720),
		layout : 'horizontal'

	});
	var linetab = Ti.UI.createView({
		top : 0,
		width : Ti.App.size(720),
		height : 1,
		left : 0,
		backgroundColor : Ti.App.Color.xanhnhat
	});
	//----The custom tabs-----
	//they can also be defined with a background image
	//property which will give them a more professional style, look and feel

	var tab1 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 3
	});

	var tab2 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});

	var tab3 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});

	var tab4 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});
	var tab5 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});
	//Labels describing each custom tab view

	var label1 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/icon-soxo.png'
	});

	var label2 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/icon-quabong.png',
	});

	var label3 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/user-icon.png'
	});

	var label4 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/calendar-icon.png',
	});
	var label5 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/icon-moneyy.png'
	});
	//adding the labels to tabs and the tabs to the container
	tab1.add(label1);
	tab2.add(label2);
	tab3.add(label3);
	tab4.add(label4);
	tab5.add(label5);
	win.add(tabContainer);

	tabContainer.add(linetab);
	tabContainer.add(tab1);
	tabContainer.add(tab2);
	tabContainer.add(tab3);
	tabContainer.add(tab4);
	tabContainer.add(tab5);

	win.add(winView1);

	win.add(winView2);
	winView2.hide();

	win.add(winView3);
	winView3.hide();

	win.add(winView4);
	winView4.hide();
	win.add(winView5);
	winView5.hide();
	//----------------Tab Event Listeners------------
	tao_sukien();
	tab1.addEventListener('click', evt_tab1);
	tab2.addEventListener('click', evt_tab2);
	tab3.addEventListener('click', evt_tab3);
	tab4.addEventListener('click', evt_tab4);
	tab5.addEventListener('click', evt_tab5);
	win.addEventListener('open', evt_openwin);
	win.addEventListener('close', evt_closewin);

	return win;
};
function tao_sukien() {
	var evt_tab1 = function(e) {
		this.removeEventListener('click', evt_tab1);
		tab_click(winView2, winView5, winView3, winView4, winView1);
		tabtop_change(tab1, tab2, tab3, tab4, tab5);
	};

	var evt_tab2 = function(e) {
		this.removeEventListener('click', evt_tab2);
		tab_click(winView1, winView5, winView3, winView4, winView2);
		tabtop_change(tab2, tab1, tab3, tab4, tab5);
	};

	var evt_tab3 = function(e) {
		this.removeEventListener('click', evt_tab3);
		tab_click(winView2, winView5, winView1, winView4, winView3);
		tabtop_change(tab3, tab2, tab1, tab4, tab5);
	};

	var evt_tab4 = function(e) {
		this.removeEventListener('click', evt_tab4);
		tab_click(winView2, winView5, winView1, winView3, winView4);
		tabtop_change(tab4, tab2, tab3, tab1, tab5);
	};
	var evt_tab5 = function(e) {
		this.removeEventListener('click', evt_tab5);
		tab_click(winView2, winView3, winView1, winView4, winView5);
		tabtop_change(tab5, tab2, tab3, tab4, tab1);
	};
	var evt_openwin = function(e) {
		Ti.API.info('open window');
	};
	var evt_closewin = function(e) {
		tab1.removeEventListener('click', evt_tab1);
		tab2.removeEventListener('click', evt_tab2);
		tab3.removeEventListener('click', evt_tab3);
		tab4.removeEventListener('click', evt_tab4);
		tab5.removeEventListener('click', evt_tab5);
		win.removeEventListener('open', evt_openwin);
		win.removeEventListener('close', evt_closewin);

	};
};
function tab_click(t1, t2, t3, t4, t5) {
	t1.hide();
	t2.hide();
	t3.hide();
	t4.hide();
	t5.show();
};
function tabtop_change(t1, t2, t3, t4, t5) {
	t1.top = 3;
	t2.top = 0;
	t3.top = 0;
	t4.top = 0;
	t5.top = 0;
};
function menu_soxo() {
	var viewsoxo = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
	});
	var view_kqsx = Ti.UI.createView({
	});
	return viewsoxo;
};
