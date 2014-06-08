module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	(function() {
		taobien(sv);
		tao_ui(sv);
	})();
	return sv;
};

function taobien(sv) {
	sv.vari.combobox = require('/ui_soxo/ComboBox');
	sv.vari.indicator = require('/ui-controller/vIndicatorWindow');
	sv.vari.vIndicatorWindow = sv.vari.indicator.createIndicatorWindow();
	sv.vari.flag = false;
	sv.arr.datarow = [];
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	////view day so lau ve
	sv.arr.line1 = [];
	sv.arr.view_solauve = [];
	sv.arr.solauve = [];
	sv.arr.tansuat_solauve = [];
	///view day so hay ve
	sv.arr.line = [];
	sv.arr.view_sohayve = [];
	sv.arr.sohayve = [];
	sv.arr.tansuat_sohayve = [];
	sv.arr.tile_sohayve = [];
	///view cap so ra lien tiepp
	sv.arr.view_capsolt = [];
	sv.arr.capso1 = [];
	sv.arr.ngay1 = [];
	sv.arr.ngay2 = [];
	sv.arr.capso2 = [];
	sv.arr.line2 = [];
}

/*
 * khoi tao ui
 */
function tao_ui(sv) {
	sv.ui.ViewTong = Titanium.UI.createView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		top : 0,
		lef : 0,
		backgroundColor : 'transparent'
	});
	sv.ui.View_header = Titanium.UI.createLabel({
		height : Ti.App.size(60),
		left : 0,
		top : 0,
		width : Ti.App.size(720),
		color : Ti.App.Color.nauden,
		font : {
			fontSize : Ti.App.size(40),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		backgroundColor : Ti.App.Color.magenta,
		text : "Thống kê Miền Bắc"
	});
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(60), 'MIỀN BẮC', 0, Ti.App.size(720), Ti.App.size(160));
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.ViewTong.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.table_view);
	////////////////////
	sv.ui.scrollView = Ti.UI.createScrollView({
		top : Ti.App.size(160),
		width : Ti.App.size(720),
		left : 0,
		right : 0,
		layout : 'vertical',
		horizontalWrap : false,
		scrollType : 'vertical',
		backgroundColor : Ti.App.Color.superwhite,
		showHorizontalScrollIndicator : false,
		showVerticalScrollIndicator : true,
		disableBounce : true,
		horizontalBounce : true,
		height : Ti.UI.FILL,
		bottom : Ti.App.size(50)
	});
	sv.ui.ViewTong.add(sv.ui.scrollView);
	thongke("getlotterystat", {
		"provideid" : "MB",
		"startdate" : currDate()
	}, sv);
	////
	////

	////
	createUI_Event(sv);
	sv.ui.scrollView.addEventListener('postlayout',sv.fu.event_loadview);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.scrollView.addEventListener('click', sv.fu.event_clickscrollview);
};
function createUI_Event(sv) {
	sv.fu.event_loadview=function(e){
		Ti.API.info('post layout');
		sv.vari.vIndicatorWindow.closeIndicator();
	};
	sv.fu.event_clickscrollview = function(e) {
		sv.vari.flag = false;
		if (sv.vari.flag == false) {
			sv.ui.table_view.visible = false;
		};
	};
	sv.fu.event_click_view = function(e) {
		sv.vari.flag = true;
		thongke("getprovide", {
			"startdate" : currDate()
		}, sv);
		sv.ui.table_view.visible = true;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
		sv.ui.View_header.text = "Thống kê " + sv.ui.lblfirst.text;
		sv.ui.scrollView.scrollTo(0, 0);
		sv.vari.vIndicatorWindow.openIndicator();
		thongke("getlotterystat", {
			"provideid" : sv.ui.lblfirst.text,
			"startdate" : currDate()
		}, sv);
	};
};
function thongke(_cmd, data, sv) {
	var xhr = Titanium.Network.createHTTPClient();
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
		var jsonResuilt = JSON.parse(dl);
		if (jsonResuilt != null) {
			if (_cmd == "getlotterystat") {
				sv.ui.scrollView.removeAllChildren();
				sv.ui.lbl_dsve_saudau = Ti.UI.createLabel({
					width : Ti.App.size(670),
					height : Ti.App.size(65),
					left : Ti.App.size(25),
					backgroundColor : Ti.App.Color.brown,
					touchEnabled : false,
					font : {
						fontSize : Ti.App.size(25)
					},
					color : Ti.App.Color.superwhite,
					text : 'Dãy số ít về trong 10 ngày qua',
					top : Ti.App.size(30),
					textAlign : 'center'
				});
				sv.ui.scrollView.add(sv.ui.lbl_dsve_saudau);
				for (var i = 0; i < (jsonResuilt.thongke.lauchuara.length); i++) {
					sv.arr.view_solauve[i] = Ti.UI.createTableViewRow({
						width : Ti.App.size(670),
						height : Ti.App.size(65),
						left : Ti.App.size(25),
						backgroundColor : 'transparent',
						touchEnabled : false,
						top : Ti.App.size(10)
					});
					sv.arr.line1[i] = Ti.UI.createView({
						left : Ti.App.size(75),
						width : Ti.App.size(1),
						height : Ti.App.size(40),
						backgroundColor : Ti.App.Color.magenta
					});
					sv.arr.solauve[i] = Ti.UI.createLabel({
						width : Ti.App.size(70),
						height : Ti.App.size(65),
						left : Ti.App.size(3),
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'center',
						backgroundColor : 'transparent',
						color : Ti.App.Color.nauden,
						text : jsonResuilt.thongke.lauchuara[i].dayso,
					});
					sv.arr.tansuat_solauve[i] = Ti.UI.createLabel({
						left : Ti.App.size(150),
						width : Ti.App.size(520),
						backgroundColor : 'transparent',
						touchEnabled : false,
						height : Ti.UI.FILL,
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'left',
						color : Ti.App.Color.nauden,
						text : jsonResuilt.thongke.lauchuara[i].songay + ' ngày'
					});
					sv.arr.view_solauve[i].add(sv.arr.tansuat_solauve[i]);
					sv.arr.view_solauve[i].add(sv.arr.solauve[i]);
					sv.arr.view_solauve[i].add(sv.arr.line1[i]);
				};
				sv.ui.viewTongsolauve = Ti.UI.createTableView({
					width : Ti.App.size(670),
					height : Ti.UI.SIZE,
					left : Ti.App.size(25),
					backgroundColor : 'transparent',
					touchEnabled : false,
					borderColor : Ti.App.Color.magenta,
					borderWidth : Ti.App.size(2),
					separatorColor : Ti.App.Color.magenta,
					data : sv.arr.view_solauve,
				});
				sv.ui.scrollView.add(sv.ui.viewTongsolauve);
				///day so hay ve
				sv.ui.lbl_header_hayve = Ti.UI.createLabel({
					width : Ti.App.size(670),
					height : Ti.App.size(65),
					left : Ti.App.size(25),
					backgroundColor : Ti.App.Color.brown,
					touchEnabled : false,
					font : {
						fontSize : Ti.App.size(25)
					},
					color : Ti.App.Color.superwhite,
					text : '8 cặp số xuất hiện nhiều nhất trong vòng 10 ngày qua',
					textAlign : 'center',
					top : Ti.App.size(20)
				});
				sv.ui.scrollView.add(sv.ui.lbl_header_hayve);
				for (var i = 0; i < jsonResuilt.thongke.xuathiennhieu.length; i++) {
					sv.arr.view_sohayve[i] = Ti.UI.createTableViewRow({
						width : Ti.App.size(670),
						height : Ti.App.size(65),
						left : 0,
						backgroundColor : 'transparent',
						touchEnabled : false,
						top : Ti.App.size(65 * i)
					});
					for (var j = 0; j < 2; j++) {
						sv.arr.line[j] = Ti.UI.createView({
							left : set_left(j),
							width : Ti.App.size(1),
							height : Ti.App.size(40),
							backgroundColor : Ti.App.Color.magenta
						});
						sv.arr.view_sohayve[i].add(sv.arr.line[j]);
					}
					sv.arr.sohayve[i] = Ti.UI.createLabel({
						width : Ti.App.size(76),
						left : 0,
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'center',
						backgroundColor : 'transparent',
						touchEnabled : false,
						color : Ti.App.Color.nauden,
						text : jsonResuilt.thongke.xuathiennhieu[i].dayso
					});
					sv.arr.tansuat_sohayve[i] = Ti.UI.createLabel({
						width : Ti.UI.SIZE,
						left : Ti.App.size(110),
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'center',
						backgroundColor : 'transparent',
						touchEnabled : false,
						color : Ti.App.Color.nauden,
						text : jsonResuilt.thongke.xuathiennhieu[i].solan + ' lần'
					});
					sv.arr.tile_sohayve[i] = Ti.UI.createLabel({
						left : Ti.App.size(150),
						width : Ti.App.size(570),
						backgroundColor : 'transparent',
						touchEnabled : false,
						font : {
							fontSize : Ti.App.size(30),
							fontWidth : 'bold'
						},
						textAlign : 'center',
						color : Ti.App.Color.nauden,
						text : jsonResuilt.thongke.xuathiennhieu[i].songay + ' ngày'
					});
					sv.arr.view_sohayve[i].add(sv.arr.tile_sohayve[i]);
					sv.arr.view_sohayve[i].add(sv.arr.tansuat_sohayve[i]);
					sv.arr.view_sohayve[i].add(sv.arr.sohayve[i]);
				};
				sv.ui.viewTonghayve = Ti.UI.createTableView({
					width : Ti.App.size(670),
					height : Ti.UI.SIZE,
					left : Ti.App.size(25),
					backgroundColor : 'transparent',
					touchEnabled : false,
					borderColor : Ti.App.Color.magenta,
					borderWidth : Ti.App.size(2),
					separatorColor : Ti.App.Color.magenta,
					data : sv.arr.view_sohayve
				});
				sv.ui.scrollView.add(sv.ui.viewTonghayve);

				////view cac cap so ra lien tiep
				sv.ui.lbl_capsolientiep = Ti.UI.createLabel({
					width : Ti.App.size(670),
					height : Ti.App.size(65),
					left : Ti.App.size(25),
					backgroundColor : Ti.App.Color.brown,
					touchEnabled : false,
					font : {
						fontSize : Ti.App.size(25)
					},
					color : Ti.App.Color.superwhite,
					text : 'Các cặp số ra liên tiếp',
					textAlign : 'center',
					top : Ti.App.size(20)
				});
				sv.ui.scrollView.add(sv.ui.lbl_capsolientiep);

				for (var i = 0; i < jsonResuilt.thongke.ralientiep.length; i++) {
					sv.arr.view_capsolt[i] = Ti.UI.createTableViewRow({
						width : Ti.App.size(670),
						height : Ti.App.size(65),
						left : 0,
						borderColor : Ti.App.Color.magenta,
						borderWidth : Ti.App.size(2),
						backgroundColor : 'transparent',
						touchEnabled : false,
						top : Ti.App.size(65 * i),
						touchEnabled : false
					});
					sv.arr.line2[i] = Ti.UI.createView({
						left : Ti.App.size(345),
						width : Ti.App.size(1),
						height : Ti.App.size(40),
						backgroundColor : Ti.App.Color.magenta
					});
					sv.arr.capso1[i] = Ti.UI.createLabel({
						left : Ti.App.size(20),
						textAlign : 'center',
						width : Ti.UI.SIZE,
						font : {
							fontSize : Ti.App.size(30)
						},
						color : Ti.App.Color.nauden,
						touchEnabled : false,
						text : jsonResuilt.thongke.ralientiep[i].dayso
					});
					sv.arr.ngay1[i] = Ti.UI.createLabel({
						left : Ti.App.size(145),
						textAlign : 'left',
						width : Ti.UI.SIZE,
						font : {
							fontSize : Ti.App.size(30)
						},
						color : Ti.App.Color.nauden,
						touchEnabled : false,
						text : jsonResuilt.thongke.ralientiep[i].solan + ' lần'
					});
					sv.arr.view_capsolt[i].add(sv.arr.ngay1[i]);
					sv.arr.view_capsolt[i].add(sv.arr.capso1[i]);

					sv.arr.capso2[i] = Ti.UI.createLabel({
						left : Ti.App.size(365),
						textAlign : 'center',
						width : Ti.UI.SIZE,
						font : {
							fontSize : Ti.App.size(30)
						},
						color : Ti.App.Color.nauden,
						touchEnabled : false,
					});
					sv.arr.ngay2[i] = Ti.UI.createLabel({
						left : Ti.App.size(490),
						textAlign : 'left',
						width : Ti.UI.SIZE,
						font : {
							fontSize : Ti.App.size(30)
						},
						color : Ti.App.Color.nauden,
						touchEnabled : false,
					});
					sv.arr.view_capsolt[i].add(sv.arr.ngay2[i]);
					sv.arr.view_capsolt[i].add(sv.arr.capso2[i]);

					sv.arr.view_capsolt[i].add(sv.arr.line2[i]);

				};
				sv.ui.viewTongcapso = Ti.UI.createTableView({
					width : Ti.App.size(670),
					height : Ti.UI.SIZE,
					left : Ti.App.size(25),
					backgroundColor : 'transparent',
					touchEnabled : false,
					data : sv.arr.view_capsolt,
					borderColor : Ti.App.Color.magenta,
					borderWidth : Ti.App.size(2),
					separatorColor : Ti.App.Color.magenta,
				});
				sv.ui.scrollView.add(sv.ui.viewTongcapso);
			} else {
				if (_cmd == "getprovide") {
					var ketqua;
					var mangkq = [];
					for (var i = 0; i < jsonResuilt.provides.length; i++) {
						Ti.API.info('ten giai: ' + jsonResuilt.provides[i].name);
						Ti.API.info('ten giai: ' + jsonResuilt.provides[i].id);
						mangkq.push(jsonResuilt.provides[i]);
					}
					for (var i = 0; i < (mangkq.length); i++) {
						Ti.API.info('mang kq' + mangkq[i].name);
						Ti.API.info('mang kq' + mangkq[i].id);
					}
					sv.ui.view_choose.setTable(mangkq);

				}

			}

		} else {
			Ti.API.info('khong co du lieu');

		}

	};

};
function tbl_click(e, _lbl, _tbl, sv) {
	if (sv.vari.flag == true) {
		_lbl.text = e.row.tenrow;
		_tbl.visible = false;
	}
}

function set_top(i) {
	if (i == 0) {
		return Ti.App.size(70);
	} else {
		return Ti.App.size(70 * i);
	}
};
function set_left(i) {
	if (i == 0) {
		return Ti.App.size(80);
	} else {
		return Ti.App.size(210);
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