module.exports = function() {
	var sv = {};
	sv.ui = {};
	sv.fu = {};
	sv.vari = {};
	sv.arr = {};
	(function() {
		tao_bien(sv);
		tao_ui(sv);

	})();
	return sv;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.vari.menu_soxo = new (require('/ui_soxo/menu_soxo'));
	sv.vari.UngDungBongDa = new (require('/ui_bongda/UngDungBongDa'));

};
function tao_ui(sv) {
	sv.ui.win = Titanium.UI.createWindow({
		backgroundColor : 'transparent',
		// fullscreen : true,
		navBarHidden : true
	});
	sv.ui.winView1 = Ti.UI.createScrollView({
		top : 0,
		height : Ti.App.size(1088),
		backgroundColor : Ti.App.Color.magenta,
		bottom : Ti.App.size(192)
	});
	//-------Views to hold content-------

	sv.ui.winView2 = Ti.UI.createScrollView({
		top : 0,
		height : Ti.App.size(1088),
		backgroundColor : Ti.App.Color.magenta,
		bottom : Ti.App.size(192)
	});

	sv.ui.winView3 = Ti.UI.createScrollView({
		top : 0,
		height : Ti.App.size(1088),
		backgroundColor : Ti.App.Color.magenta,
		bottom : Ti.App.size(192)
	});

	sv.ui.winView4 = Ti.UI.createScrollView({
		top : 0,
		height : Ti.App.size(1088),
		backgroundColor : Ti.App.Color.magenta,
		bottom : Ti.App.size(192)
	});
	sv.ui.winView5 = Ti.UI.createScrollView({
		top : 0,
		height : Ti.App.size(1088),
		backgroundColor : Ti.App.Color.magenta,
		bottom : Ti.App.size(192)
	});
	//---------Labels that Describe each View-------

	//Tab container holds the custom tabgroup
	sv.ui.scrollableView = Titanium.UI.createScrollableView({
		views : [sv.ui.winView1, sv.ui.winView2, sv.ui.winView3, sv.ui.winView4, sv.ui.winView5],
		showPagingControl : false,
		currentPage : 0
	});
	sv.ui.win.add(sv.ui.scrollableView);

	sv.ui.tabContainer = Ti.UI.createView({
		bottom : 0,
		height : Ti.App.size(192),
		width : Ti.App.size(720),
		layout : 'horizontal',
		backgroundColor : Ti.App.Color.nauden
	});
	sv.ui.linetab = Ti.UI.createView({
		top : 0,
		width : Ti.App.size(720),
		height : 1,
		left : 0,
		backgroundColor : Ti.App.Color.xanhnhat
	});
	//----The custom tabs-----
	//they can also be defined with a background image
	//property which will give them a more professional style, look and feel

	sv.ui.tab1 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 3
	});

	sv.ui.tab2 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});

	sv.ui.tab3 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});

	sv.ui.tab4 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});
	sv.ui.tab5 = Ti.UI.createView({
		left : 0,
		height : Ti.UI.FILL,
		width : '20%',
		backgroundColor : Ti.App.Color.superwhite,
		top : 0
	});
	//Labels describing each custom tab view

	sv.ui.label1 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/icon-soxo.png'
	});

	sv.ui.label2 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/icon-quabong.png',
	});

	sv.ui.label3 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/user-icon.png'
	});

	sv.ui.label4 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/calendar-icon.png',
	});
	sv.ui.label5 = Ti.UI.createImageView({
		width : Ti.App.size(65),
		height : Ti.App.size(65),
		image : '/assets/images/icon/icon-moneyy.png'
	});
	//adding the labels to tabs and the tabs to the container
	sv.ui.tab1.add(sv.ui.label1);
	sv.ui.tab2.add(sv.ui.label2);
	sv.ui.tab3.add(sv.ui.label3);
	sv.ui.tab4.add(sv.ui.label4);
	sv.ui.tab5.add(sv.ui.label5);
	sv.ui.win.add(sv.ui.tabContainer);

	sv.ui.tabContainer.add(sv.ui.linetab);
	sv.ui.tabContainer.add(sv.ui.tab1);
	sv.ui.tabContainer.add(sv.ui.tab2);
	sv.ui.tabContainer.add(sv.ui.tab3);
	sv.ui.tabContainer.add(sv.ui.tab4);
	sv.ui.tabContainer.add(sv.ui.tab5);

	//----------------Tab Event Listeners------------
	tao_sukien(sv);

	sv.ui.tab1.addEventListener('click', sv.fu.evt_tab1);
	sv.ui.tab2.addEventListener('click', sv.fu.evt_tab2);
	sv.ui.tab3.addEventListener('click', sv.fu.evt_tab3);
	sv.ui.tab4.addEventListener('click', sv.fu.evt_tab4);
	sv.ui.tab5.addEventListener('click', sv.fu.evt_tab5);
	sv.ui.win.addEventListener('open', sv.fu.evt_openwin);
	sv.ui.win.addEventListener('close', sv.fu.evt_closewin);
	sv.ui.scrollableView.addEventListener('scrollend', sv.fu.evt_slidemenu);
	// return sv.ui.win;
};
function tao_sukien(sv) {
	sv.fu = {};
	//
	sv.fu.evt_slidemenu = function(e) {
		if (sv.ui.scrollableView.currentPage == 0) {
			tabtop_change(sv.ui.tab1, sv.ui.tab2, sv.ui.tab3, sv.ui.tab4, sv.ui.tab5);
		}
		if (sv.ui.scrollableView.currentPage == 1) {
			tabtop_change(sv.ui.tab2, sv.ui.tab1, sv.ui.tab3, sv.ui.tab4, sv.ui.tab5);
		}
		if (sv.ui.scrollableView.currentPage == 2) {
			tabtop_change(sv.ui.tab3, sv.ui.tab1, sv.ui.tab4, sv.ui.tab2, sv.ui.tab5);
		}
		if (sv.ui.scrollableView.currentPage == 3) {
			tabtop_change(sv.ui.tab4, sv.ui.tab1, sv.ui.tab2, sv.ui.tab3, sv.ui.tab5);
		}
		if (sv.ui.scrollableView.currentPage == 4) {
			tabtop_change(sv.ui.tab5, sv.ui.tab1, sv.ui.tab3, sv.ui.tab4, sv.ui.tab2);
		}
	};
	///
	sv.fu.evt_tab1 = function(e) {
		sv.ui.scrollableView.currentPage = 0;
		tabtop_change(sv.ui.tab1, sv.ui.tab2, sv.ui.tab3, sv.ui.tab4, sv.ui.tab5);
	};

	sv.fu.evt_tab2 = function(e) {
		sv.ui.scrollableView.currentPage = 1;
		tabtop_change(sv.ui.tab2, sv.ui.tab1, sv.ui.tab3, sv.ui.tab4, sv.ui.tab5);
	};

	sv.fu.evt_tab3 = function(e) {
		sv.ui.scrollableView.currentPage = 2;
		tabtop_change(sv.ui.tab3, sv.ui.tab2, sv.ui.tab1, sv.ui.tab4, sv.ui.tab5);
	};

	sv.fu.evt_tab4 = function(e) {
		sv.ui.scrollableView.currentPage = 3;
		tabtop_change(sv.ui.tab4, sv.ui.tab2, sv.ui.tab3, sv.ui.tab1, sv.ui.tab5);
	};
	sv.fu.evt_tab5 = function(e) {
		sv.ui.scrollableView.currentPage = 4;
		tabtop_change(sv.ui.tab5, sv.ui.tab2, sv.ui.tab3, sv.ui.tab4, sv.ui.tab1);
	};
	sv.fu.evt_openwin = function(e) {
		Ti.API.info('open window');
		sv.ui.winView2.add(sv.vari.UngDungBongDa.ui.ViewTong);
		sv.ui.winView1.add(sv.vari.menu_soxo.ui.ViewTong);
	};
	sv.fu.evt_closewin = function(e) {
		sv.ui.tab1.removeEventListener('click', sv.fu.evt_tab1);
		sv.ui.tab2.removeEventListener('click', sv.fu.evt_tab2);
		sv.ui.tab3.removeEventListener('click', sv.fu.evt_tab3);
		sv.ui.tab4.removeEventListener('click', sv.fu.evt_tab4);
		sv.ui.tab5.removeEventListener('click', sv.fu.evt_tab5);
		sv.ui.win.removeEventListener('open', sv.fu.evt_openwin);
		sv.ui.win.removeEventListener('close', sv.fu.evt_closewin);
		sv.ui.scrollableView.removeEventListener('scrollend', sv.fu.evt_slidemenu);
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
