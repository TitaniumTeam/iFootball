module.exports = function(_quyen, _mangdv) {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv, _quyen, _mangdv);
	})();

	return sv;

};
function taobien(sv) {
	sv.vari.kqoff = require('/ui_app/kq_offline');
	sv.vari.popup = require('/ui_user/PopUpDangNhap');
	////
	sv.vari.ketqua_tructiep = require('/ui_soxo/WindowRealTime');
	sv.vari.ketquasx = require('/ui_soxo/KetQuaSX');
	sv.vari.tuvan_soxo = require('/ui_soxo/TuVan');
	sv.vari.thongke = require('/ui_soxo/ThongKe');
	////////
	// sv.vari.TTTD = require('/ui_bongda/ThongTinTranDau');
	sv.vari.tintuc = require('/ui_bongda/News');
	// sv.vari.tuvan_bongda = require('/ui_bongda/TuVan');
	///version old
	sv.vari.TTTD = require('/ui_bongda/thongtin_old');
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
	sv.arr.img_footersoxo = [{
		bg : "/assets/images/icon/icon-ketqua.png",
		press : "/assets/images/icon/icon-ketqua_press.png",
		title : "Kết quả"
	}, {
		bg : "/assets/images/icon/icon-thongke.png",
		press : "/assets/images/icon/icon-thongke_press.png",
		title : "Thống kê"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-vip.png",
		press : "/assets/images/icon/icon-vip_press.png",
		title : "VIP"
	}];
	sv.arr.img_footerbongda = [{
		bg : "/assets/images/icon/icon-calander.png",
		press : "/assets/images/icon/icon-calander_press.png",
		title : "Lịch thi đấu"
	}, {
		bg : "/assets/images/icon/icon-tuvan.png",
		press : "/assets/images/icon/icon-tuvan_press.png",
		title : "Tu van"
	}, {
		bg : "/assets/images/icon/icon-tintuc.png",
		press : "/assets/images/icon/icon-tintuc_press.png",
		title : "Tư vấn"
	}, {
		bg : "/assets/images/icon/icon-vip.png",
		press : "/assets/images/icon/icon-vip_press.png",
		title : "VIP"
	}];
	////cac mang so xo
	sv.arr.evt_chucnangsoxo = [];
	sv.arr.evt_chucnangbongda = [];
	sv.vari.ketquatrave = {};
	//////

};
function taoui(sv, _quyen, _mangdv) {
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
		backgroundColor : Ti.App.Color.superwhite,
		bottom : 0,
		left : 0,
		right : 0
	});
	sv.ui.win.add(sv.ui.ViewFooter);
	sv.ui.line_vfoot = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(5),
		backgroundColor : Ti.App.Color.xanhnhat,
		top : 0,
		zIndex : 10,
		left : 0
	});
	sv.ui.ViewFooter.add(sv.ui.line_vfoot);

	sv.ui.footer_bongda = Ti.UI.createView({
		top : 0,
		lef : 0,
		backgroundColor : 'transparent',
		height : Ti.App.size(100),
		right : 0
	});
	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangbongda[i] = Ti.UI.createView({
			width : Ti.App.size(180),
			height : Ti.App.size(100),
			backgroundSelectedColor : Ti.App.Color.nauden,
			backgroundColor : set(i),
			left : Ti.App.size(180 * i),
			top : 0,
		});

		sv.arr.icon_footerbongda[i] = Ti.UI.createImageView({
			image : sv.arr.img_footerbongda[i].bg,
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			touchEnabled : false,
			backgroundSelectedImage : sv.arr.img_footerbongda[i].press,

		});
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
			backgroundSelectedColor : Ti.App.Color.nauden,
			backgroundColor : 'transparent',
			top : 0,
			left : Ti.App.size(180 * i)
		});
		sv.arr.icon_footersoxo[i] = Ti.UI.createImageView({
			image : sv.arr.img_footersoxo[i].bg,
			width : Ti.App.size(60),
			height : Ti.App.size(60),
			touchEnabled : false,
			backgroundSelectedImage : sv.arr.img_footersoxo[i].press
		});
		sv.arr.viewchucnangsoxo[i].add(sv.arr.icon_footersoxo[i]);
		sv.ui.footer_soxo.add(sv.arr.viewchucnangsoxo[i]);
	}
	sv.ui.ViewFooter.add(sv.ui.footer_soxo);
	sv.ui.ViewFooter.add(sv.ui.footer_bongda);
	sv.ui.footer_bongda.visible = false;
	sv.ui.footer_soxo.visible = true;

	//sv.ui.ViewFooter.add(sv.ui.footer_soxo);
	/////
	taosukien(sv, _quyen, _mangdv);

	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangsoxo[i].addEventListener('click', sv.arr.evt_chucnangsoxo[i]);
	}
	for (var i = 0; i < 4; i++) {
		sv.arr.viewchucnangbongda[i].addEventListener('click', sv.arr.evt_chucnangbongda[i]);
	}
	for (var i = 0; i < 3; i++) {
		sv.arr.view_iconheader[i].addEventListener('click', sv.arr.evt_header[i]);
	}

	sv.ui.win.addEventListener('open', sv.fu.evt_win_open);
	sv.ui.win.addEventListener('close', sv.fu.evt_win_close);
};

function taosukien(sv, _quyen, _mangdv) {

	/**
	 * footer
	 **/
	///su kien khi click vao footer so xo
	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 0) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
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
					}, sv, 1);
				} else {
					if (currHour() >= 18) {
						sv.vari.view_kqsx.ui.View_header.text = "KẾT QUẢ SỔ XỐ MIỀN BẮC " + currDate();
						layketqua("searchlottery", {
							"provideid" : "MB",
							"startdate" : currDate()
						}, sv, 1);
					}
				}
			};
		}
		if (i == 1) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {

				for (var j = 0; j < 4; j++) {
					if (j == 1) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
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
				for (var j = 0; j < 4; j++) {
					if (j == 2) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_tuvan = new sv.vari.tuvan_soxo(_mangdv);
				sv.ui.ViewTong.add(sv.vari.view_tuvan.ui.ViewTong);
				// Ti.App.vIndicatorWindow.openIndicator(sv.vari.view_tuvan.ui.ViewTong);
				// setTimeout(function() {
				// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.view_tuvan.ui.ViewTong);
				// }, 2000);
			};
		}
		if (i == 3) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 3) {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footersoxo[j].image = sv.arr.img_footersoxo[j].press;
					} else {
						sv.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
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
				for (var j = 0; j < 4; j++) {
					if (j == 0) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
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
				for (var j = 0; j < 4; j++) {
					if (j == 1) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				sv.ui.view_tuvan = new sv.vari.tuvan_bongda();
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.ViewTong.add(sv.ui.view_tuvan.ui.ViewTong);
			};
		}
		if (i == 2) {
			sv.arr.evt_chucnangbongda[2] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 2) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.tintuc = new sv.vari.tintuc();
				sv.ui.ViewTong.add(sv.ui.tintuc.ui.ViewTong);
				// Ti.App.vIndicatorWindow.openIndicator(sv.vari.Betting.ui.ViewTong);
				// setTimeout(function() {
				// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.Betting.ui.ViewTong);
				// }, 2000);
			};
		}
		if (i == 3) {
			sv.arr.evt_chucnangbongda[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 3) {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].press;
					} else {
						sv.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[j].image = sv.arr.img_footerbongda[j].bg;
					}

				}
				alert('Chức năng đang được xây dựng');
				// Ti.API.info('chuc nangvip');
				// sv.ui.ViewTong.removeAllChildren();
			};
		}
	};

	/**
	 * su kien header
	 * **/
	///su kien khi click vao header bong da
	for (var j = 0; j < 3; j++) {
		if (j == 0) {
			sv.arr.evt_header[0] = function(e) {
				sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.superwhite;
				sv.arr.iconheader[0].image = sv.arr.img_header[0].press;
				sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[1].image = sv.arr.img_header[1].bg;
				sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[2].image = sv.arr.img_header[2].bg;
				for (var i = 0; i < 4; i++) {
					if (i == 0) {
						sv.arr.viewchucnangbongda[i].backgroundColor = Ti.App.Color.nauden;
						sv.arr.icon_footerbongda[i].image = sv.arr.img_footerbongda[i].press;
					} else {
						sv.arr.viewchucnangbongda[i].backgroundColor = Ti.App.Color.superwhite;
						sv.arr.icon_footerbongda[i].image = sv.arr.img_footerbongda[i].bg;
					}
				}
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
				sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.superwhite;
				sv.arr.iconheader[1].image = sv.arr.img_header[1].press;
				sv.arr.iconheader[0].image = sv.arr.img_header[0].bg;
				sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[2].image = sv.arr.img_header[2].bg;
				sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.red;
				if (_quyen == "free") {
					sv.vari.wd_popup = new sv.vari.popup(sv.ui.win);
					sv.vari.wd_popup.open({
						modal : Ti.Platform.osname == 'android' ? true : false
					});
				} else {
					sv.ui.ViewFooter.visible = false;
					sv.ui.ViewTong.bottom = 0;
					sv.ui.ViewTong.removeAllChildren();
					sv.vari.Info = new (require('/ui_user/Info'))();
					sv.ui.ViewTong.add(sv.vari.Info.ui.ViewTong);
				}
			};
		}
		if (j == 2) {
			sv.arr.evt_header[2] = function(e) {
				sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.superwhite;
				sv.arr.iconheader[2].image = sv.arr.img_header[2].press;
				sv.arr.iconheader[0].image = sv.arr.img_header[0].bg;
				sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.red;
				sv.arr.iconheader[1].image = sv.arr.img_header[1].bg;
				sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.red;
				for (var i = 0; i < 4; i++) {
					sv.arr.viewchucnangsoxo[i].backgroundColor = Ti.App.Color.superwhite;
					sv.arr.icon_footersoxo[i].image = sv.arr.img_footersoxo[i].bg;
				}
				sv.ui.ViewFooter.visible = true;
				sv.ui.ViewTong.bottom = Ti.App.size(100);
				sv.ui.footer_bongda.visible = false;
				sv.ui.footer_soxo.visible = true;
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.wdKQSX = new sv.vari.ketqua_tructiep();
				sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
				setInterval(function() {
					layketqua("searchlottery", {
						"provideid" : "MB",
						"startdate" : currDate()
					}, sv);
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
			};
		}

	}

	/**su kien cua window
	 * **/
	sv.fu.evt_win_open = function(e) {
		Ti.API.info('win open');
		sv.arr.view_iconheader[2].backgroundColor = Ti.App.Color.superwhite;
		sv.arr.iconheader[2].image = sv.arr.img_header[2].press;
		sv.arr.iconheader[0].image = sv.arr.img_header[0].bg;
		sv.arr.view_iconheader[0].backgroundColor = Ti.App.Color.red;
		sv.arr.iconheader[1].image = sv.arr.img_header[1].bg;
		sv.arr.view_iconheader[1].backgroundColor = Ti.App.Color.red;
		sv.vari.db = Ti.Database.open('userinfo');
		sv.vari.sql = sv.vari.db.execute("SELECT * FROM SaveInfo");
		if (sv.vari.sql.isValidRow()) {
			if ((sv.vari.sql.fieldByName("notifi")) == "false") {
				push_notification();
			} else {
				Ti.API.info('khong ban len nua');
				sv.vari.sql.close();
				sv.vari.db.close();
			}
		}
		setInterval(function() {
			layketqua("searchlottery", {
				"provideid" : "MB",
				"startdate" : currDate()
			}, sv);
			// Ti.API.info('lay ket qua lien tuc');
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

	};
	sv.fu.evt_win_close = function(e) {
		for (var i = 0; i < 4; i++) {
			sv.arr.viewchucnangsoxo[i].removeEventListener('click', sv.arr.evt_chucnangsoxo[i]);
		}
		for (var i = 0; i < 4; i++) {
			sv.arr.viewchucnangbongda[i].removeEventListener('click', sv.arr.evt_chucnangbongda[i]);
		};
		for (var i = 0; i < 3; i++) {
			sv.arr.view_iconheader[i].removeEventListener('click', sv.arr.evt_header[i]);
		}
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
function layketqua(_cmd, data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
	if (Ti.Network.networkType == Ti.Network.NETWORK_NONE) {
		sv.ui.view_off = new sv.vari.kqoff("KQSX");
		sv.ui.view_off.open({
			modal : Ti.Platform.osname == 'android' ? true : false
		});

	} else {
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
					// Ti.API.info('ten giai: ' + jsonResuilt.resulttable[i].provide.name);
					// Ti.API.info('ngay thang: ' + jsonResuilt.resulttable[i].resultdate);
					for (var j = 0; j < jsonResuilt.resulttable[i].lines.length; j++) {
						// Ti.API.info('Thu tu: ' + jsonResuilt.resulttable[i].lines[j].name);
						// Ti.API.info('ket qua: ' + jsonResuilt.resulttable[i].lines[j].result);
						ketqua.push(jsonResuilt.resulttable[i].lines[j].result);
					};
					for (var i = 0; i < (ketqua.length); i++) {
						mangstring = (ketqua[i].toString()).split(',');
						for (var j = 0; j < (mangstring.length); j++) {
							// Ti.API.info('mang string:' + mangstring[j]);
							mangkq.push(mangstring[j]);
						};
					}

				} else {
					Ti.API.info('khong co du lieu');
				}
			}
			sv.vari.wdKQSX.ui.bangkq.setKQ_tructiep(mangkq);

		};
	}

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

function set(i) {
	if (i == 0) {
		return Ti.App.Color.nauden;
	} else {
		return 'transparent';
	}
}

function set_color(i) {
	if (i == 0) {
		return Ti.App.Color.superwhite;
	} else {
		return Ti.App.Color.nauden;
	}
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
