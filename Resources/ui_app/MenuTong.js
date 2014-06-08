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
	////
	sv.vari.indicator = require('/ui-controller/vIndicatorWindow');
	sv.vari.vIndicatorWindow = sv.vari.indicator.createIndicatorWindow();
	sv.vari.intelval
	sv.vari.dem = 0;
	sv.vari.popup = require('/ui_user/PopUpDangNhap');
	////
	sv.vari.ketqua_tructiep = require('/ui_soxo/WindowRealTime');
	sv.vari.ketquasx = require('/ui_soxo/KetQuaSX');
	sv.vari.tuvan_soxo = require('/ui_soxo/TuVan');
	sv.vari.thongke = require('/ui_soxo/ThongKe');
	////////
	sv.vari.TTTD = require('/ui_bongda/ThongTinTranDau');
	sv.vari.tintuc = require('/ui_bongda/News');
	// sv.vari.tuvan_bongda = require('/ui_bongda/TuVan');
	///version old
	// sv.vari.TTTD = require('/ui_bongda/thongtin_old');
	sv.vari.tuvan_bongda = require('/ui_bongda/tuvan_old');
	//////view header
	sv.arr.view_iconheader = [];
	sv.arr.iconheader = [];
	sv.arr.img_header = [{
		bg : "/assets/images/icon/icon-football.png",
		press : "/assets/images/icon/icon-football_press.png"
	}, {
		bg : "/assets/images/icon/icon-user.png",
		press : "/assets/images/icon/icon-user_press.png"
	}, {
		bg : "/assets/images/icon/icon-soxo.png",
		press : "/assets/images/icon/icon-soxo_press.png"
	}];
	//event
	sv.arr.evt_header = [];
	/////
	sv.arr.viewchucnangsoxo = [];
	sv.arr.viewchucnangbongda = [];
	sv.arr.icon_footerbongda = [];
	sv.arr.icon_footersoxo = [];
	sv.arr.title_footerbongda = [];
	sv.arr.title_footersoxo = [];
	sv.arr.img_footersoxo = [{
		press : "/assets/images/icon/icon-ketqua.png",
		bg : "/assets/images/icon/icon-ketqua_press.png",
		title : "Sổ kết quả"
	}, {
		press : "/assets/images/icon/icon-thongke.png",
		bg : "/assets/images/icon/icon-thongke_press.png",
		title : "Thống kê"
	}, {
		press : "/assets/images/icon/icon-tuvan_press.png",
		bg : "/assets/images/icon/icon-tuvan.png",
		title : "Tư vấn"
	}, {
		press : "/assets/images/icon/icon-vip.png",
		bg : "/assets/images/icon/icon-vip_press.png",
		title : "VIP"
	}];
	sv.arr.img_footerbongda = [{
		press : "/assets/images/icon/icon-calander.png",
		bg : "/assets/images/icon/icon-calander_press.png",
		title : "Lịch thi đấu"
	}, {
		press : "/assets/images/icon/icon-tintuc.png",
		bg : "/assets/images/icon/icon-tintuc_press.png",
		title : "Tin tức"
	}, {
		press : "/assets/images/icon/icon-tuvan_press.png",
		bg : "/assets/images/icon/icon-tuvan.png",
		title : "Tư vấn"
	}, {
		press : "/assets/images/icon/icon-vip.png",
		bg : "/assets/images/icon/icon-vip_press.png",
		title : "VIP"
	}];
	////cac mang so xo
	sv.arr.evt_chucnangsoxo = [];
	sv.arr.evt_chucnangbongda = [];
	//////

};
function taoui(sv) {
	sv.ui.win = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		navBarHidden : true,
		exitOnClose : true,
		orientationModes : [Ti.UI.PORTRAIT],
		keepScreenOn : true,
	});
	sv.ui.ViewHeader = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.red,
		top : 0,
		left : 0
	});
	sv.ui.win.add(sv.ui.ViewHeader);
	for (var i = 0; i < 3; i++) {
		sv.arr.view_iconheader[i] = Ti.UI.createView({
			width : Ti.App.size(240),
			height : Ti.App.size(100),
			backgroundSelectedColor : Ti.App.Color.superwhite,
			left : Ti.App.size(240 * i),
			backgroundColor : 'transparent'
		});
		sv.arr.iconheader[i] = Ti.UI.createImageView({
			image : sv.arr.img_header[i].bg,
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			touchEnabled : false,
			backgroundSelectedImage : sv.arr.img_header[i].press
		});
		sv.arr.view_iconheader[i].add(sv.arr.iconheader[i]);
		sv.ui.ViewHeader.add(sv.arr.view_iconheader[i]);
	}

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
	sv.vari.wdKQSX = new sv.vari.ketqua_tructiep();
	sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
	////
	sv.ui.ViewFooter = Ti.UI.createView({
		height : Ti.App.size(100),
		backgroundColor : Ti.App.Color.footer,
		bottom : 0,
		left : 0,
		right : 0
	});
	sv.ui.win.add(sv.ui.ViewFooter);
	sv.ui.line_vfoot = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(5),
		backgroundColor : Ti.App.Color.nauden,
		zIndex : 10,
		left : 0,
		bottom : Ti.App.size(100),
		opacity : 0.5,
		touchEnabled : false
	});
	sv.ui.win.add(sv.ui.line_vfoot);

	sv.ui.footer_bongda = Ti.UI.createView({
		top : 0,
		lef : 0,
		backgroundColor : 'transparent',
		height : Ti.App.size(100),
		right : 0
	});
	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.viewchucnangbongda[i] = Ti.UI.createView({
				width : Ti.App.size(180),
				height : Ti.App.size(100),
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				backgroundColor : Ti.App.Color.nauden,
				left : 0,
				top : 0,
			});

			sv.arr.icon_footerbongda[i] = Ti.UI.createImageView({
				image : sv.arr.img_footerbongda[i].bg,
				width : Ti.App.size(56),
				height : Ti.App.size(48),
				touchEnabled : false,
				backgroundSelectedImage : sv.arr.img_footerbongda[i].press,
				top : Ti.App.size(10)

			});
			sv.arr.title_footerbongda[i] = Ti.UI.createLabel({
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				color : Ti.App.Color.nauden,
				backgroundColor : 'transparent',
				touchEnabled : false,
				top : Ti.App.size(65),
				font : {
					fontSize : Ti.App.size(25),
					fontWeight : 'bold'
				},
				text : sv.arr.img_footerbongda[i].title
			});
		} else {
			sv.arr.viewchucnangbongda[i] = Ti.UI.createView({
				width : Ti.App.size(180),
				height : Ti.App.size(100),
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				backgroundColor : 'transparent',
				left : Ti.App.size(180 * i),
				top : 0,
			});

			sv.arr.icon_footerbongda[i] = Ti.UI.createImageView({
				image : sv.arr.img_footerbongda[i].press,
				width : Ti.App.size(50),
				height : Ti.App.size(48),
				touchEnabled : false,
				backgroundSelectedImage : sv.arr.img_footerbongda[i].bg,
				top : Ti.App.size(10)

			});
			sv.arr.title_footerbongda[i] = Ti.UI.createLabel({
				width : Ti.UI.SIZE,
				height : Ti.UI.SIZE,
				color : Ti.App.Color.nauden,
				backgroundColor : 'transparent',
				touchEnabled : false,
				top : Ti.App.size(65),
				font : {
					fontSize : Ti.App.size(25),
					fontWeight : 'bold'
				},
				text : sv.arr.img_footerbongda[i].title
			});
		}

		sv.arr.viewchucnangbongda[i].add(sv.arr.title_footerbongda[i]);
		sv.arr.viewchucnangbongda[i].add(sv.arr.icon_footerbongda[i]);
		sv.ui.footer_bongda.add(sv.arr.viewchucnangbongda[i]);
	};
	sv.ui.footer_soxo = Ti.UI.createView({
		top : 0,
		lef : 0,
		backgroundColor : 'transparent',
		height : Ti.App.size(100),
		right : 0
	});
	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangsoxo[i] = Ti.UI.createView({
			width : Ti.App.size(180),
			height : Ti.App.size(100),
			backgroundSelectedColor : Ti.App.Color.xanhnhat,
			backgroundColor : 'transparent',
			top : 0,
			left : Ti.App.size(180 * i)
		});
		sv.arr.icon_footersoxo[i] = Ti.UI.createImageView({
			image : sv.arr.img_footersoxo[i].bg,
			width : Ti.App.size(50),
			height : Ti.App.size(48),
			touchEnabled : false,
			backgroundSelectedImage : sv.arr.img_footersoxo[i].press,
			top : Ti.App.size(10)
		});
		sv.arr.title_footersoxo[i] = Ti.UI.createLabel({
			width : Ti.UI.SIZE,
			height : Ti.UI.SIZE,
			color : Ti.App.Color.nauden,
			backgroundColor : 'transparent',
			touchEnabled : false,
			top : Ti.App.size(65),
			font : {
				fontSize : Ti.App.size(25),
				fontWeight : 'bold'
			},
			text : sv.arr.img_footersoxo[i].title
		});
		sv.arr.viewchucnangsoxo[i].add(sv.arr.title_footersoxo[i]);
		sv.arr.viewchucnangsoxo[i].add(sv.arr.icon_footersoxo[i]);
		sv.ui.footer_soxo.add(sv.arr.viewchucnangsoxo[i]);
	}
	sv.ui.ViewFooter.add(sv.ui.footer_soxo);
	sv.ui.ViewFooter.add(sv.ui.footer_bongda);
	sv.ui.footer_bongda.visible = false;
	sv.ui.footer_soxo.visible = true;

	//sv.ui.ViewFooter.add(sv.ui.footer_soxo);
	/////
	taosukien(sv);

	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangsoxo[i].addEventListener('click', sv.arr.evt_chucnangsoxo[i]);
	}
	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangbongda[i].addEventListener('click', sv.arr.evt_chucnangbongda[i]);
	}
	for (var i = 0; i < 3; i++) {
		sv.arr.view_iconheader[i].addEventListener('click', sv.arr.evt_header[i]);
	}
	sv.ui.ViewTong.addEventListener('postlayout', sv.fu.event_loadview);
	sv.ui.win.addEventListener('postlayout', sv.fu.event_loadview);
	sv.ui.win.addEventListener('open', sv.fu.evt_win_open);
	sv.ui.win.addEventListener('close', sv.fu.evt_win_close);
};

function taosukien(sv) {
	sv.fu.event_loadview = function(e) {
		// // setTimeout(function() {
		// sv.vari.vIndicatorWindow.closeIndicator();
		// }, 2000);

	};

	/**
	 * footer
	 **/
	///su kien khi click vao footer so xo
	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				clearInterval(sv.vari.intelval);
				ktmang(sv);
				for (var j = 0; j < 4; j++) {
					if (j == 0) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_kqsx = new sv.vari.ketquasx();
				sv.ui.ViewTong.add(sv.vari.view_kqsx.ui.ViewTong);
				if (currHour() < 18) {
					sv.vari.view_kqsx.ui.View_header.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + getYesterdaysDate();
					layketqua("searchlottery", {
						"provideid" : "MB",
						"startdate" : getYesterdaysDate()
					}, sv.vari.view_kqsx);
				} else {
					if (currHour() >= 18) {
						sv.vari.view_kqsx.ui.View_header.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + currDate();
						layketqua("searchlottery", {
							"provideid" : "MB",
							"startdate" : currDate()
						}, sv.vari.view_kqsx);
					}
				}
			};
		}
		if (i == 1) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				clearInterval(sv.vari.intelval);
				ktmang(sv);
				for (var j = 0; j < 4; j++) {
					if (j == 1) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.view_thongke = new sv.vari.thongke();
				sv.ui.ViewTong.add(sv.ui.view_thongke.ui.ViewTong);

			};
		}
		if (i == 2) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				clearInterval(sv.vari.intelval);
				for (var j = 0; j < 4; j++) {
					if (j == 2) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_tuvan = new sv.vari.tuvan_soxo();
				sv.ui.ViewTong.add(sv.vari.view_tuvan.ui.ViewTong);
			};
		}
		if (i == 3) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				clearInterval(sv.vari.intelval);
				for (var j = 0; j < 4; j++) {
					if (j == 3) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].bg;
					}

				}
				alert('Chức năng đang được xây dựng');
				// sv.ui.ViewTong.removeAllChildren();
			};
		}
	};
	// ///su kien khi click footer bong da

	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangbongda[0] = function(e) {
				clearInterval(sv.vari.intelval);
				for (var j = 0; j < 4; j++) {
					if (j == 0) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.wdTTTD = new sv.vari.TTTD();
				sv.ui.ViewTong.add(sv.vari.wdTTTD.ui.ViewTong);
			};

		}
		if (i == 1) {
			sv.arr.evt_chucnangbongda[1] = function(e) {
				clearInterval(sv.vari.intelval);
				for (var j = 0; j < 4; j++) {
					if (j == 1) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.tintuc = new sv.vari.tintuc();
				sv.ui.ViewTong.add(sv.ui.tintuc.ui.ViewTong);

			};
		}
		if (i == 2) {
			sv.arr.evt_chucnangbongda[2] = function(e) {
				clearInterval(sv.vari.intelval);
				for (var j = 0; j < 4; j++) {
					if (j == 2) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				sv.ui.view_tuvan = new sv.vari.tuvan_bongda();
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.ViewTong.add(sv.ui.view_tuvan.ui.ViewTong);
			};
		}
		if (i == 3) {
			sv.arr.evt_chucnangbongda[i] = function(e) {
				clearInterval(sv.vari.intelval);
				for (var j = 0; j < 4; j++) {
					if (j == 3) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				alert('Chức năng đang được xây dựng');
				// Ti.API.info('chuc nangvip');
				sv.ui.ViewTong.removeAllChildren();
			};
		}
	};

	/**
	 * su kien header
	 * **/
	for (var j = 0; j < 3; j++) {
		if (j == 0) {
			sv.arr.evt_header[0] = function(e) {
				clearInterval(sv.vari.intelval);
				ktmang(sv);
				sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.superwhite;
				sv.arr.iconheader[0].image = sv.arr.img_header[0].press;
				sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[1].image = sv.arr.img_header[1].bg;
				sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[2].image = sv.arr.img_header[2].bg;
				for (var i = 0; i < 4; i++) {
					if (i == 0) {
						sv.arr.viewchucnangbongda[0].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[0].image = sv.arr.img_footerbongda[0].press;
					} else {
						sv.arr.viewchucnangbongda[i].backgroundColor = Ti.App.Color.footer;
						sv.arr.icon_footerbongda[i].image = sv.arr.img_footerbongda[i].bg;
					}
				}
				sv.ui.line_vfoot.visible = true;
				sv.ui.ViewFooter.visible = true;
				sv.ui.ViewTong.bottom = Ti.App.size(100);
				sv.ui.footer_bongda.visible = true;
				sv.ui.footer_soxo.visible = false;
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.wdTTTD = new sv.vari.TTTD();
				sv.ui.ViewTong.add(sv.vari.wdTTTD.ui.ViewTong);
			};
		}
		if (j == 1) {
			sv.arr.evt_header[1] = function(e) {
				///database
				sv.vari.db = Ti.Database.open('userinfo');
				sv.vari.sql = sv.vari.db.execute("SELECT * FROM SaveInfo");
				clearInterval(sv.vari.intelval);
				if (sv.vari.sql.isValidRow()) {
					sv.vari.vIndicatorWindow.openIndicator();
					sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.superwhite;
					sv.arr.iconheader[1].image = sv.arr.img_header[1].press;
					sv.arr.iconheader[0].image = sv.arr.img_header[0].bg;
					sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.red;
					sv.arr.iconheader[2].image = sv.arr.img_header[2].bg;
					sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.red;
					sv.ui.line_vfoot.visible = false;
					sv.ui.ViewFooter.visible = false;
					sv.ui.ViewTong.bottom = 0;
					sv.ui.ViewTong.removeAllChildren();
					sv.vari.Info = new (require('/ui_user/Info'))();
					sv.ui.ViewTong.add(sv.vari.Info.ui.ViewTong);
					sv.vari.sql.close();
					sv.vari.db.close();
				} else {
					sv.vari.wd_popup = new sv.vari.popup(sv.ui.win);
					sv.vari.wd_popup.open({
						modal : Ti.Platform.osname == 'android' ? true : false
					});
				}
			};
		}
		if (j == 2) {
			sv.arr.evt_header[2] = function(e) {
				clearInterval(sv.vari.intelval);
				ktmang(sv);
				sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.superwhite;
				sv.arr.iconheader[2].image = sv.arr.img_header[2].press;
				sv.arr.iconheader[0].image = sv.arr.img_header[0].bg;
				sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[1].image = sv.arr.img_header[1].bg;
				sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.red;
				for (var i = 0; i < 4; i++) {
					sv.arr.viewchucnangsoxo[i].backgroundColor = Ti.App.Color.footer;
					sv.arr.icon_footersoxo[i].image = sv.arr.img_footersoxo[i].bg;
				}
				sv.ui.line_vfoot.visible = true;
				sv.ui.ViewFooter.visible = true;
				sv.ui.ViewTong.bottom = Ti.App.size(100);
				sv.ui.footer_bongda.visible = false;
				sv.ui.footer_soxo.visible = true;
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.wdKQSX = new sv.vari.ketqua_tructiep();
				sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
				sv.vari.intelval = setInterval(function() {
					layketqua("searchlottery", {
						"provideid" : "MB",
						"startdate" : currDate()
					}, sv.vari.wdKQSX);
				}, 15000);
				if (currHour() < 18) {
					sv.vari.wdKQSX.ui.ViewHeader.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + getYesterdaysDate();
				} else {
					if (currHour() == 18 && (0 <= currMin() <= 30)) {
						sv.vari.wdKQSX.ui.ViewHeader.text = "ĐANG QUAY TRỰC TIẾP KQSXMB " + currDate();

					} else {
						if (currHour() > 18) {
							sv.vari.wdKQSX.ui.ViewHeader.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + currDate();
						}

					}
				}
				sv.vari.flag_updatekq = true;
			};
		}

	}

	/**su kien cua window
	 * **/
	sv.fu.evt_win_open = function(e) {
		Ti.API.info('win open');
		ktmang(sv);
		sv.vari.db_open = Ti.Database.open('userinfo');
		sv.vari.sql_open = sv.vari.db_open.execute("SELECT * FROM SaveInfo");
		sv.vari.dichvu_open = sv.vari.db_open.execute("SELECT * FROM DichVu");
		Ti.API.info('row count:' + sv.vari.dichvu_open.getRowCount());
		sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.superwhite;
		sv.arr.iconheader[2].image = sv.arr.img_header[2].press;
		sv.arr.iconheader[0].image = sv.arr.img_header[0].bg;
		sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.red;
		sv.arr.iconheader[1].image = sv.arr.img_header[1].bg;
		sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.red;
		while (sv.vari.dichvu_open.isValidRow()) {
			Ti.API.info('ten dich vu' + sv.vari.dichvu_open.fieldByName("tendv") + ':' + sv.vari.dichvu_open.fieldByName("dauso") + ':' + sv.vari.dichvu_open.fieldByName("thamso") + ':' + sv.vari.dichvu_open.fieldByName("gia"));
			sv.vari.dichvu_open.next();
		};
		if (sv.vari.sql_open.isValidRow()) {
			if ((sv.vari.sql_open.fieldByName("notifi")) == "false") {
				push_notification();
			} else {
				Ti.API.info('khong ban len nua');
			}
		}
		sv.vari.dichvu_open.close();
		sv.vari.sql_open.close();
		sv.vari.db_open.close();
		sv.vari.intelval = setInterval(function() {
			layketqua("searchlottery", {
				"provideid" : "MB",
				"startdate" : currDate()
			}, sv.vari.wdKQSX);
		}, 15000);

		if (currHour() < 18) {
			sv.vari.wdKQSX.ui.ViewHeader.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + getYesterdaysDate();
		} else {
			if (currHour() == 18 && (0 < currMin() < 30)) {
				sv.vari.wdKQSX.ui.ViewHeader.text = "ĐANG QUAY TRỰC TIẾP KQSXMB " + currDate();
			} else {
				if (currHour() > 18) {
					sv.vari.wdKQSX.ui.ViewHeader.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + currDate();
				}
			}
		}

	};
	sv.fu.evt_win_close = function(e) {
		clearInterval(sv.vari.intelval);
		for (var i = 0; i < 4; i++) {
			sv.arr.viewchucnangsoxo[i].removeEventListener('click', sv.arr.evt_chucnangsoxo[i]);
		}
		for (var i = 0; i < 4; i++) {
			sv.arr.viewchucnangbongda[i].removeEventListener('click', sv.arr.evt_chucnangbongda[i]);
		}
		for (var i = 0; i < 3; i++) {
			sv.arr.view_iconheader[i].removeEventListener('click', sv.arr.evt_header[i]);
		}
		sv.ui.ViewTong.addEventListener('postlayout', sv.fu.event_loadview);
		sv.ui.win.removeEventListener('postlayout', sv.fu.event_loadview);
		sv.ui.win.removeEventListener('open', sv.fu.evt_win_open);
		sv.ui.win.removeEventListener('close', sv.fu.evt_win_close);
		sv.ui = null;
		sv.arr = null;
		sv.vari = null;
		sv.fu = null;
		sv = null;
	};
};

/////cmd:ten ham, data: param,sv,_choose:1-view quay truc tiep- 2- view so ket qua
function layketqua(_cmd, data, sv, _choose) {
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	// Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
	};
	xhr.onload = function() {
		// Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		var ketqua = [];
		var mangstring;
		var mangkq = [];
		for (var i = 0; i < jsonResuilt.resulttable.length; i++) {
			if (jsonResuilt.resulttable[i].provide) {
				for (var j = 0; j < jsonResuilt.resulttable[i].lines.length; j++) {
					ketqua.push(jsonResuilt.resulttable[i].lines[j].result);
				};
				for (var i = 0; i < (ketqua.length); i++) {
					mangstring = (ketqua[i].toString()).split(',');
					for (var j = 0; j < (mangstring.length); j++) {
						mangkq.push(mangstring[j]);
					};
				}

			} else {
				Ti.API.info('khong co du lieu');
			}
		}
		sv.ui.bangkq.setKQ_tructiep(mangkq);
		/*
		 if(_choose==1){
		 sv.vari.view_kqsx.ui.bangkq.setKQ_tructiep(mangkq);
		 }
		 else{
		 sv.vari.wdKQSX.ui.bangkq.setKQ_tructiep(mangkq);
		 }
		 */
	};

};
function currDate() {
	var currTime = new Date();
	var ngay = currTime.getDate();
	var thang = currTime.getMonth() + 1;
	var nam = currTime.getFullYear();
	var currdate = ngay + "/" + thang + "/" + nam;
	return currdate;
}

function getYesterdaysDate() {
	var date = new Date();
	date.setDate(date.getDate() - 1);
	return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}

function currHour() {
	var date = new Date();
	var currhour = date.getHours();
	return currhour;
};
function currMin() {
	var date = new Date();
	var currmin = date.getMinutes();
	return currmin;
};

function ktmang(sv) {
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		var kqoff = new (require('/ui_app/kq_offline'))();
		kqoff.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});

	}
	// else {
	// sv.vari.vIndicatorWindow.openIndicator();
	// }
}

function push_notification() {
	var deviceToken = null;
	var Cloud = require("ti.cloud");
	var db = Ti.Database.open('userinfo');
	var sql = db.execute('SELECT * FROM SaveInfo');

	if (Ti.Platform.osname == 'android') {
		var CloudPush = require('ti.cloudpush');
		//fetch device token

		CloudPush.retrieveDeviceToken({
			success : function deviceTokenSuccess(e) {
				deviceToken = e.deviceToken;
				Ti.API.info('Device Token: ' + deviceToken);
				Ti.API.info('Device Token: ' + e.deviceToken);
				subscribeToChannel(deviceToken);
			},
			error : function deviceTokenError(e) {
				Ti.API.info('Failed to register for push! ' + e.error);
			}
		});

		CloudPush.debug = true;
		CloudPush.enabled = true;
		CloudPush.showTrayNotificationsWhenFocused = true;
		CloudPush.focusAppOnPush = false;

		CloudPush.addEventListener('callback', function(evt) {
			receivePush(evt);
		});
		CloudPush.addEventListener('trayClickLaunchedApp', function(evt) {
			// Ti.API.info('@@## Tray Click Launched App (app was not running)');
		});
		CloudPush.addEventListener('trayClickFocusedApp', function(evt) {
			Ti.API.info('@@## Tray Click Focused App (app was already running)');
		});
	} else {
		Ti.Network.registerForPushNotifications({
			// Specifies which notifications to receive
			types : [Ti.Network.NOTIFICATION_TYPE_BADGE, Ti.Network.NOTIFICATION_TYPE_SOUND],
			success : deviceTokenSuccess,
			error : deviceTokenError,
			// callback : receivePush
		});
		// Process incoming push notifications

		// Save the device token for subsequent API calls
		function deviceTokenSuccess(e) {
			deviceToken = e.deviceToken;
			subscribeToChannel(deviceToken);
		}

		function receivePush(e) {
			alert('Received push: ' + JSON.stringify(e));
		}

		function deviceTokenError(e) {
			Ti.API.info('Failed to register for push notifications! ' + e.error);
		}

	}
	function subscribeToChannel(device) {
		// Subscribes the device to the 'news_alerts' channel
		// Specify the push type as either 'android' for Android or 'ios' for iOS
		Cloud.PushNotifications.subscribeToken({
			device_token : device,
			channel : 'ifootball',
			type : Ti.Platform.name == 'android' ? 'gcm' : 'ios'
		}, function(e) {
			if (e.success) {
				Ti.API.info('dang ki thanh cong');
				if (sql.isValidRow()) {
					var username = sql.fieldByName("username");
				}
				db.execute('UPDATE SaveInfo SET notifi=? where username=?', "true", username);
			} else {
				Ti.API.info('Error:\n' + ((e.error && e.message) || JSON.stringify(e)));
			}
		});
	}


	sql.close();
	db.close();
};
