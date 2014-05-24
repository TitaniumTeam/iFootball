module.exports = function() {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv);
	})();

	return sv;

};
function taobien(sv) {
	sv.vari.footer = new (require('/ui_app/footer_1'));
	sv.vari.KQSX = require('/ui_soxo/WindowRealTime');
	sv.vari.thongke1 = require('/ui_soxo/Thongke_first');
	sv.vari.tuvan = require('/ui_soxo/tuvan');
	////////
	sv.vari.bangxephang = (require('/ui_bongda/Home'));
	sv.vari.TTTD = require('/ui_bongda/ThongTinTranDau');
	sv.vari.TranNgonAn = new (require('/ui_bongda/TranNgonAn'))();
	sv.vari.Betting = new (require('/ui_bongda/Betting'))();
	/////

	sv.arr.param = ['09808', '09808', '09808', '09808', '09808', '09990', '09788', '04358', '09899', '09111', '0978', '0435', '0981', '0911', '0978', '0435', '0981', '0911', '0978', '0435', '091', '091', '097', '04', '09', '01', '09'];
	sv.arr.img_footer3 = [{
		bg : "/assets/images/icon/icon-thongke.png",
		press : "/assets/images/icon/icon-thongke_press.png",
		title : "Thống kê"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-3.png",
		press : "/assets/images/icon/icon-3.png",
		title : "VIP"
	}];
	sv.arr.img_footer3 = [{
		bg : "/assets/images/icon/icon-thongke.png",
		press : "/assets/images/icon/icon-thongke_press.png",
		title : "Thống kê"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-3.png",
		press : "/assets/images/icon/icon-3.png",
		title : "VIP"
	}];
	////cac mang so xo
	sv.arr.evt_chucnangsoxo = [];
	sv.arr.evt_chucnangbongda = [];
};
function taoui(sv) {
	sv.ui.win = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		navBarHidden : true
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.red,
		top : 0,
		left : 0
	});
	sv.ui.win.add(sv.ui.ViewHeader);
	sv.ui.View_icon_bongda = Ti.UI.createView({
		width : Ti.App.size(240),
		height : Ti.App.size(100),
		backgroundSelectedColor : Ti.App.Color.red_press,
		left : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.ViewHeader.add(sv.ui.View_icon_bongda);

	sv.ui.icon_bongda = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-football.png',
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.View_icon_bongda.add(sv.ui.icon_bongda);

	sv.ui.View_icon_user = Ti.UI.createView({
		width : Ti.App.size(240),
		height : Ti.App.size(100),
		backgroundSelectedColor : Ti.App.Color.red_press,
		left : Ti.App.size(240),
		backgroundColor : 'transparent'
	});
	sv.ui.ViewHeader.add(sv.ui.View_icon_user);

	sv.ui.icon_user = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-user.png',
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.View_icon_user.add(sv.ui.icon_user);

	sv.ui.View_icon_soxo = Ti.UI.createView({
		width : Ti.App.size(240),
		height : Ti.App.size(100),
		backgroundSelectedColor : Ti.App.Color.red_press,
		left : Ti.App.size(480),
		backgroundColor : 'transparent'
	});
	sv.ui.ViewHeader.add(sv.ui.View_icon_soxo);

	sv.ui.icon_soxo = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-soxo.png',
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		touchEnabled : false
	});
	sv.ui.View_icon_soxo.add(sv.ui.icon_soxo);

	/////
	sv.ui.ViewTong = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		top : Ti.App.size(100),
		left : 0,
		backgroundColor : Ti.App.Color.superwhite,
		bottom : Ti.App.size(100),
	});
	sv.ui.win.add(sv.ui.ViewTong);

	////
	sv.ui.ViewFooter = Ti.UI.createView({
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.superwhite,
		left : 0,
		bottom : 0,
		width : Ti.App.size(720)
	});
	sv.ui.win.add(sv.ui.ViewFooter);
	sv.ui.line_vfoot = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(3),
		backgroundColor : Ti.App.Color.xanhnhat,
		top : 0,
		zIndex : 10
	});
	sv.ui.ViewFooter.add(sv.ui.line_vfoot);
	//sv.ui.ViewFooter.add(sv.vari.footer.ui.footer_soxo);
	/////
	taosukien(sv);

	for (var i = 0; i < 3; i++) {
		sv.vari.footer.arr.viewchucnangsoxo[i].addEventListener('click', sv.arr.evt_chucnangsoxo[i]);
	}
	for (var i = 0; i < 4; i++) {
		sv.vari.footer.arr.viewchucnangbongda[i].addEventListener('click', sv.arr.evt_chucnangbongda[i]);
	};

	sv.ui.View_icon_bongda.addEventListener('click', sv.fu.evt_icon_bongda);
	sv.ui.View_icon_soxo.addEventListener('click', sv.fu.evt_icon_soxo);
	sv.ui.View_icon_user.addEventListener('click', sv.fu.EvtClickView_icon_user);
	sv.ui.win.addEventListener('open', sv.fu.evt_win_open);
	sv.ui.win.addEventListener('close', sv.fu.evt_win_close);
};

function set_maubg(t1, t2, t3) {
	t1.backgroundColor = Ti.App.Color.red_press;
	t2.backgroundColor = Ti.App.Color.red;
	t3.backgroundColor = Ti.App.Color.red;
};

function taosukien(sv) {

	/**
	 * footer
	 **/
	///su kien khi click vao footer so xo
	for (var i = 0; i < 3; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				sv.vari.footer.arr.lbl_icon_footer3[0].color = Ti.App.Color.superwhite;
				sv.vari.footer.arr.viewchucnangsoxo[0].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer3[0].image = '/assets/images/icon/icon-thongke_press.png';
				sv.vari.footer.arr.lbl_icon_footer3[1].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangsoxo[1].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer3[1].image = '/assets/images/icon/icon-tuvan.png';
				sv.vari.footer.arr.lbl_icon_footer3[2].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangsoxo[2].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer3[2].image = '/assets/images/icon/icon-3.png';
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.wdthongke1 = new sv.vari.thongke1();
				sv.ui.ViewTong.add(sv.vari.wdthongke1.ui.ViewTong);
				Ti.App.vIndicatorWindow.openIndicator(sv.ui.ViewTong);
				setTimeout(function() {
					sv.vari.wdthongke1.setParam(sv.arr.param);
					Ti.App.vIndicatorWindow.closeIndicator(sv.ui.ViewTong);
				}, 2000);

			};
		}
		if (i == 1) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				sv.vari.footer.arr.lbl_icon_footer3[0].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangsoxo[0].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer3[0].image = '/assets/images/icon/icon-thongke.png';
				sv.vari.footer.arr.lbl_icon_footer3[1].color = Ti.App.Color.superwhite;
				sv.vari.footer.arr.viewchucnangsoxo[1].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer3[1].image = '/assets/images/icon/icon-tuvan_press.png';
				sv.vari.footer.arr.lbl_icon_footer3[2].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangsoxo[2].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer3[2].image = '/assets/images/icon/icon-3.png';
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_tuvan = new sv.vari.tuvan();
				sv.ui.ViewTong.add(sv.vari.view_tuvan.ui.ViewTong);
				Ti.App.vIndicatorWindow.openIndicator(sv.ui.ViewTong);
				setTimeout(function() {
					Ti.App.vIndicatorWindow.closeIndicator(sv.ui.ViewTong);
				}, 2000);

			};
		}
		if (i == 2) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				sv.vari.footer.arr.lbl_icon_footer3[0].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangsoxo[0].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer3[0].image = '/assets/images/icon/icon-thongke.png';
				sv.vari.footer.arr.lbl_icon_footer3[2].color = Ti.App.Color.superwhite;
				sv.vari.footer.arr.viewchucnangsoxo[2].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer3[2].image = '/assets/images/icon/icon-tuvan_press.png';
				sv.vari.footer.arr.lbl_icon_footer3[1].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangsoxo[1].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer3[1].image = '/assets/images/icon/icon-3.png';
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_tuvan = new sv.vari.tuvan();
				sv.ui.ViewTong.add(sv.vari.view_tuvan.ui.ViewTong);
				Ti.App.vIndicatorWindow.openIndicator(sv.ui.ViewTong);
				setTimeout(function() {
					Ti.App.vIndicatorWindow.closeIndicator(sv.ui.ViewTong);
				}, 2000);
			};
		}
	};
	// ///su kien khi click footer bong da

	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangbongda[0] = function(e) {
				sv.vari.footer.arr.lbl_icon_footer1[0].color = Ti.App.Color.superwhite;
				sv.vari.footer.arr.viewchucnangbongda[0].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer1[0].image = '/assets/images/icon/icon-calander_press.png';
				sv.vari.footer.arr.lbl_icon_footer1[1].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[1].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[1].image = '/assets/images/icon/icon-xephang.png';
				sv.vari.footer.arr.lbl_icon_footer1[2].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[2].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[2].image = '/assets/images/icon/icon-tuvan.png';
				sv.vari.footer.arr.lbl_icon_footer1[3].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[3].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[3].image = '/assets/images/icon/icon-3.png';
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.wdTTTD = new sv.vari.TTTD();
				sv.ui.ViewTong.add(sv.vari.wdTTTD.ui.ViewTong);
				Ti.App.vIndicatorWindow.openIndicator(sv.ui.ViewTong);
				setTimeout(function() {
					Ti.App.vIndicatorWindow.closeIndicator(sv.ui.ViewTong);
				}, 2000);
			};
		}
		if (i == 1) {
			sv.arr.evt_chucnangbongda[1] = function(e) {
				sv.vari.footer.arr.lbl_icon_footer1[0].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[0].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[0].image = '/assets/images/icon/icon-calander.png';
				sv.vari.footer.arr.lbl_icon_footer1[1].color = Ti.App.Color.superwhite;
				sv.vari.footer.arr.viewchucnangbongda[1].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer1[1].image = '/assets/images/icon/icon-xephang_press.png';
				sv.vari.footer.arr.lbl_icon_footer1[2].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[2].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[2].image = '/assets/images/icon/icon-tuvan.png';
				sv.vari.footer.arr.lbl_icon_footer1[3].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[3].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[3].image = '/assets/images/icon/icon-3.png';
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.bxh = new sv.vari.bangxephang();
				sv.ui.ViewTong.add(sv.vari.bxh.ui.ViewTong);
				Ti.App.vIndicatorWindow.openIndicator(sv.ui.ViewTong);
				setTimeout(function() {
					Ti.App.vIndicatorWindow.closeIndicator(sv.ui.ViewTong);
				}, 2000);
			};
		}
		if (i == 2) {
			sv.arr.evt_chucnangbongda[2] = function(e) {
				sv.vari.footer.arr.lbl_icon_footer1[0].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[0].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[0].image = '/assets/images/icon/icon-calander.png';
				sv.vari.footer.arr.lbl_icon_footer1[1].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[1].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[1].image = '/assets/images/icon/icon-xephang.png';
				sv.vari.footer.arr.lbl_icon_footer1[2].color = Ti.App.Color.superwhite;
				sv.vari.footer.arr.viewchucnangbongda[2].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer1[2].image = '/assets/images/icon/icon-tuvan_press.png';
				sv.vari.footer.arr.lbl_icon_footer1[3].color = Ti.App.Color.nauden;
				sv.vari.footer.arr.viewchucnangbongda[3].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[3].image = '/assets/images/icon/icon-3.png';
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.ViewTong.add(sv.vari.Betting.ui.ViewTong);
				Ti.App.vIndicatorWindow.openIndicator(sv.ui.ViewTong);
				setTimeout(function() {
					Ti.App.vIndicatorWindow.closeIndicator(sv.ui.ViewTong);
				}, 2000);
			};
		}
		if (i == 3) {
			sv.arr.evt_chucnangbongda[i] = function(e) {
				Ti.API.info('chuc nang vip');
			};
		}
	};

	/**
	 * su kien header
	 * **/
	///su kien khi click vao header bong da
	sv.fu.evt_icon_bongda = function(e) {
		set_maubg(sv.ui.View_icon_bongda, sv.ui.View_icon_soxo, sv.ui.View_icon_user);
		sv.ui.ViewFooter.visible = true;
		sv.ui.ViewTong.bottom = Ti.App.size(100);
		sv.vari.footer.ui.footer_bongda.visible = true;
		sv.vari.footer.ui.footer_bongda.setCurrentPage(0);
		sv.vari.footer.ui.footer_soxo.visible = false;
		sv.vari.footer.arr.lbl_icon_footer1[0].color = Ti.App.Color.superwhite;
		sv.vari.footer.arr.viewchucnangbongda[0].backgroundColor = Ti.App.Color.nauden;
		sv.vari.footer.arr.icon_footer1[0].image = '/assets/images/icon/icon-calander_press.png';
		sv.vari.footer.arr.lbl_icon_footer1[1].color = Ti.App.Color.nauden;
		sv.vari.footer.arr.viewchucnangbongda[1].backgroundColor = Ti.App.Color.superwhite;
		sv.vari.footer.arr.icon_footer1[1].image = '/assets/images/icon/icon-xephang.png';
		sv.vari.footer.arr.lbl_icon_footer1[2].color = Ti.App.Color.nauden;
		sv.vari.footer.arr.viewchucnangbongda[2].backgroundColor = Ti.App.Color.superwhite;
		sv.vari.footer.arr.icon_footer1[2].image = '/assets/images/icon/icon-tuvan.png';
		sv.vari.footer.arr.lbl_icon_footer1[3].color = Ti.App.Color.nauden;
		sv.vari.footer.arr.viewchucnangbongda[3].backgroundColor = Ti.App.Color.superwhite;
		sv.vari.footer.arr.icon_footer1[3].image = '/assets/images/icon/icon-3.png';
		sv.ui.ViewTong.removeAllChildren();
		sv.vari.wdTTTD = new sv.vari.TTTD();
		sv.ui.ViewTong.add(sv.vari.wdTTTD.ui.ViewTong);
	};

	sv.fu.EvtClickView_icon_user = function(e) {
		set_maubg(sv.ui.View_icon_user, sv.ui.View_icon_soxo, sv.ui.View_icon_bongda);
		sv.ui.ViewFooter.visible = false;
		sv.ui.ViewTong.bottom = 0;
		sv.ui.ViewTong.removeAllChildren();
		sv.vari.Info = new (require('/ui_user/Info'))();
		sv.ui.ViewTong.add(sv.vari.Info.ui.ViewTong);
	};

	///su kien khi click vao header soxo
	sv.fu.evt_icon_soxo = function(e) {
		for (var i = 0; i < 3; i++) {
			sv.vari.footer.arr.lbl_icon_footer3[i].color = Ti.App.Color.nauden;
			sv.vari.footer.arr.viewchucnangsoxo[i].backgroundColor = Ti.App.Color.superwhite;
			sv.vari.footer.arr.icon_footer3[i].image = sv.arr.img_footer3[i].bg;
		}
		set_maubg(sv.ui.View_icon_soxo, sv.ui.View_icon_bongda, sv.ui.View_icon_user);
		sv.ui.ViewFooter.visible = true;
		sv.ui.ViewTong.bottom = Ti.App.size(100);
		sv.vari.footer.ui.footer_bongda.visible = false;
		sv.vari.footer.ui.footer_soxo.visible = true;
		sv.ui.ViewTong.removeAllChildren();
		sv.vari.wdKQSX = new sv.vari.KQSX();
		sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
	};
	/**su kien cua window
	 * **/
	sv.fu.evt_win_open = function(e) {
		Ti.API.info('win open');
		set_maubg(sv.ui.View_icon_soxo, sv.ui.View_icon_bongda, sv.ui.View_icon_user);
		sv.ui.ViewFooter.add(sv.vari.footer.ui.footer_bongda);
		sv.ui.ViewFooter.add(sv.vari.footer.ui.footer_soxo);
		sv.vari.footer.ui.footer_bongda.visible = false;
		sv.vari.footer.ui.footer_soxo.visible = true;
		sv.vari.wdKQSX = new sv.vari.KQSX();
		sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
	};
	sv.fu.evt_win_close = function(e) {
		sv.ui.win.removeEventListener('open', sv.fu.evt_win_open);
		sv.ui.win.removeEventListener('close', sv.fu.evt_win_close);
		for (var i = 0; i < 3; i++) {
			sv.vari.footer.arr.viewchucnangsoxo[i].removeEventListener('click', sv.arr.evt_chucnangsoxo[i]);
		}
		for (var i = 0; i < 4; i++) {
			sv.vari.footer.arr.viewchucnangbongda[i].removeEventListener('click', sv.arr.evt_chucnangbongda[i]);
		};
		sv.ui.View_icon_bongda.removeEventListener('click', sv.fu.evt_icon_bongda);
		sv.ui.View_icon_soxo.removeEventListener('click', sv.fu.evt_icon_soxo);
		sv.ui = null;
		sv.arr = null;
		sv.vari = null;
		sv.fu = null;
		sv = null;
	};
};