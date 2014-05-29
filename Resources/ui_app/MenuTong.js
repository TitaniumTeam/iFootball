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
	sv.vari.ketqua_tructiep = require('/ui_soxo/WindowRealTime');
	sv.vari.ketquasx = require('/ui_soxo/KetQuaSX');
	sv.vari.tuvan_soxo = require('/ui_soxo/tuvan');
	sv.vari.thongke = require('/ui_soxo/ThongKe');
	////////
	sv.vari.TTTD = require('/ui_bongda/ThongTinTranDau');
	sv.vari.tintuc = require('/ui_bongda/News');
	sv.vari.tuvan_bongda = require('/ui_bongda/TuVan');
	/////

	sv.arr.param = ['09808', '09808', '09808', '09808', '09808', '09990', '09788', '04358', '09899', '09111', '0978', '0435', '0981', '0911', '0978', '0435', '0981', '0911', '0978', '0435', '091', '091', '097', '04', '09', '01', '09'];
	sv.arr.img_footer3 = [{
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
	sv.arr.img_footer1 = [{
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
function taoui(sv) {
	sv.ui.win = Ti.UI.createWindow({
		backgroundColor : Ti.App.Color.superwhite,
		navBarHidden : true,
		exitOnClose : true
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
	//sv.ui.ViewFooter.add(sv.vari.footer.ui.footer_soxo);
	/////
	taosukien(sv);

	for (var i = 0; i < 4; i++) {
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
	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 0) {
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_kqsx = new sv.vari.ketquasx();
				sv.ui.ViewTong.add(sv.vari.view_kqsx.ui.ViewTong);
				// Ti.App.vIndicatorWindow.openIndicator(sv.vari.wdthongke1.ui.ViewTong);
				// setTimeout(function() {
				// sv.vari.wdthongke1.setParam(sv.arr.param);
				// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.wdthongke1.ui.ViewTong);
				// }, 2000);

			};
		}
		if (i == 1) {
			sv.arr.evt_chucnangsoxo[i] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 1) {
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].bg;
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
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
				sv.vari.view_tuvan = new sv.vari.tuvan_soxo();
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
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangsoxo[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer3[j].image = sv.arr.img_footer3[j].bg;
					}

				}
				sv.ui.ViewTong.removeAllChildren();
			};
		}
	};
	// ///su kien khi click footer bong da

	for (var i = 0; i < 4; i++) {
		if (i == 0) {
			sv.arr.evt_chucnangbongda[0] = function(e) {
				for (var j = 0; j < 4; j++) {
					if (j == 0) {
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].bg;
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
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].bg;
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
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].bg;
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
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.nauden;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].press;
					} else {
						sv.vari.footer.arr.viewchucnangbongda[j].backgroundColor = Ti.App.Color.superwhite;
						sv.vari.footer.arr.icon_footer1[j].image = sv.arr.img_footer1[j].bg;
					}

				}
				Ti.API.info('chuc nangvip');
				sv.ui.ViewTong.removeAllChildren();
			};
		}
	};

	/**
	 * su kien header
	 * **/
	///su kien khi click vao header bong da
	sv.fu.evt_icon_bongda = function(e) {
		for (var i = 0; i < 4; i++) {
			if (i == 0) {
				sv.vari.footer.arr.viewchucnangbongda[i].backgroundColor = Ti.App.Color.nauden;
				sv.vari.footer.arr.icon_footer1[i].image = sv.arr.img_footer1[i].press;
			} else {
				sv.vari.footer.arr.viewchucnangbongda[i].backgroundColor = Ti.App.Color.superwhite;
				sv.vari.footer.arr.icon_footer1[i].image = sv.arr.img_footer1[i].bg;
			}
		}
		set_maubg(sv.ui.View_icon_bongda, sv.ui.View_icon_soxo, sv.ui.View_icon_user);
		sv.ui.ViewFooter.visible = true;
		sv.ui.ViewTong.bottom = Ti.App.size(100);
		sv.vari.footer.ui.footer_bongda.visible = true;
		sv.vari.footer.ui.footer_soxo.visible = false;
		sv.ui.ViewTong.removeAllChildren();
		sv.vari.wdTTTD = new sv.vari.TTTD();
		sv.ui.ViewTong.add(sv.vari.wdTTTD.ui.ViewTong);
		// Ti.App.vIndicatorWindow.openIndicator(sv.vari.wdTTTD.ui.ViewTong);
		// setTimeout(function() {
		// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.wdTTTD.ui.ViewTong);
		// }, 2000);
	};

	sv.fu.EvtClickView_icon_user = function(e) {
		set_maubg(sv.ui.View_icon_user, sv.ui.View_icon_soxo, sv.ui.View_icon_bongda);
		sv.ui.ViewFooter.visible = false;
		sv.ui.ViewTong.bottom = 0;
		sv.ui.ViewTong.removeAllChildren();
		sv.vari.Info = new (require('/ui_user/Info'))();
		sv.ui.ViewTong.add(sv.vari.Info.ui.ViewTong);
		// Ti.App.vIndicatorWindow.openIndicator(sv.vari.Info.ui.ViewTong);
		// setTimeout(function() {
		// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.Info.ui.ViewTong);
		// }, 2000);
	};

	///su kien khi click vao header soxo
	sv.fu.evt_icon_soxo = function(e) {
		for (var i = 0; i < 4; i++) {
			sv.vari.footer.arr.viewchucnangsoxo[i].backgroundColor = Ti.App.Color.superwhite;
			sv.vari.footer.arr.icon_footer3[i].image = sv.arr.img_footer3[i].bg;
		}
		set_maubg(sv.ui.View_icon_soxo, sv.ui.View_icon_bongda, sv.ui.View_icon_user);
		sv.ui.ViewFooter.visible = true;
		sv.ui.ViewTong.bottom = Ti.App.size(100);
		sv.vari.footer.ui.footer_bongda.visible = false;
		sv.vari.footer.ui.footer_soxo.visible = true;
		sv.ui.ViewTong.removeAllChildren();
		sv.vari.wdKQSX = new sv.vari.ketquatructiep();
		sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
		// Ti.App.vIndicatorWindow.openIndicator(sv.vari.wdKQSX.ui.ViewTong);
		// setTimeout(function() {
		// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.wdKQSX.ui.ViewTong);
		// }, 2000);
	};
	/**su kien cua window
	 * **/
	sv.fu.evt_win_open = function(e) {
		Ti.API.info('win open');
		fn_updateImage2Server(sv, "searchlottery", {
			"startdate" : "28/05/2014"
		});

		set_maubg(sv.ui.View_icon_soxo, sv.ui.View_icon_bongda, sv.ui.View_icon_user);
		sv.ui.ViewFooter.add(sv.vari.footer.ui.footer_soxo);
		sv.ui.ViewFooter.add(sv.vari.footer.ui.footer_bongda);
		sv.vari.footer.ui.footer_bongda.visible = false;
		sv.vari.footer.ui.footer_soxo.visible = true;
		sv.vari.wdKQSX = new sv.vari.ketqua_tructiep();
		// sv.vari.wdKQSX.ui.ViewHeader.text = "So xo " + sv.vari.ketquatrave[2].provide.name + "ngay" + sv.vari.ketquatrave[2].resultdate;
		//sv.vari.wdKQSX.setParam(sv.vari.ketquatrave.ketqua[2]);
		// Ti.API.info('' + sv.vari.ketquatrave.ketqua[0]);

		sv.ui.ViewTong.add(sv.vari.wdKQSX.ui.ViewTong);
		// Ti.App.vIndicatorWindow.openIndicator(sv.vari.wdKQSX.ui.ViewTong);
		// setTimeout(function() {
		// Ti.App.vIndicatorWindow.closeIndicator(sv.vari.wdKQSX.ui.ViewTong);
		// }, 2000);
	};
	sv.fu.evt_win_close = function(e) {
		sv.ui.win.removeEventListener('open', sv.fu.evt_win_open);
		sv.ui.win.removeEventListener('close', sv.fu.evt_win_close);
		for (var i = 0; i < 4; i++) {
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

function fn_updateImage2Server(sv, _cmd, data) {
	var xhr = Titanium.Network.createHTTPClient();
	var dulieutrave;
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	// open the client
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		//Ti.API.info('du lieu: ' + dl);

		var jsonResuilt = JSON.parse(dl);
		dulieutrave = jsonResuilt.resulttable;
		var tg = dulieutrave[2].resultdate.split(' ');
		var dt = [];
		sv.vari.wdKQSX.ui.ViewHeader.text = "Sổ xố " + dulieutrave[2].provide.name + ' ' + "ngày " + tg[0];

		// sv.vari.wdKQSX.setParam(dulieutrave[2].lines[0].result);
		for (var i = 0; i < (dulieutrave[2].lines.length); i++) {
			dt.push(dulieutrave[5].lines.result);
			// Ti.API.info(''+dulieutrave[5].lines[i].name);
		}
		sv.vari.wdKQSX.setParam(dt);

		// for (var i = 0; i < jsonResuilt.resulttable.length; i++) {
		// //Ti.API.info('ten giai: ' + jsonResuilt.resulttable[i].provide.name);
		// dulieu_trave.tengiai.push(jsonResuilt.resulttable[i].provide.name);
		// Ti.API.info('ten giai:' + dulieu_trave.tengiai[i]);
		// //Ti.API.info('ngay thang: ' + jsonResuilt.resulttable[i].resultdate);
		// dulieu_trave.ngaythang.push(jsonResuilt.resulttable[i].resultdate);
		// Ti.API.info('ngay thang:'+dulieu_trave.ngaythang[i]);
		// dulieu_trave.lines.push(jsonResuilt.resulttable[i].lines);
		// for (var j = 0; j < jsonResuilt.resulttable[i].lines.length; j++) {
		// // Ti.API.info('Thu tu: ' + jsonResuilt.resulttable[i].lines[j].name);
		// dulieu_trave.thutu.push(jsonResuilt.resulttable[i].lines[j].name);
		// Ti.API.info('thu tu:'+dulieu_trave.thutu[j]);
		// //Ti.API.info('ket qua: ' + jsonResuilt.resulttable[i].lines[j].result);
		// dulieu_trave.ketqua.push(jsonResuilt.resulttable[i].lines[j].result);
		// Ti.API.info('ket qua:'+dulieu_trave.ketqua[j]);
		// };
		//
		// }
	};
};

