module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();

	return sv;
};
function tao_bien(sv) {
	// sv.vari.indicator = require('/ui-controller/vIndicatorWindow');
	// sv.vari.vIndicatorWindow = sv.vari.indicator.createIndicatorWindow();
	sv.vari.viewTTTD = require('/ui_bongda/viewTTTD');
	sv.vari.bxh = require('/ui_bongda/BangXepHang');
	sv.vari.TTTD_cuthe = require('/ui_bongda/ThongTinTranDau_CuThe');
	sv.vari.combobox = require('/ui_soxo/ComboBox');
	sv.vari.SoLuongGiaiDau = 0;
	sv.vari.SoTran = 0;
	// sv.vari.timeout;
	//////////
	sv.arr.MangMatchId = [];
	sv.arr.rows = [];
	sv.arr.viewArow = [];
	sv.arr.viewRow = [];
	sv.arr.arrow = [];
	sv.arr.viewBac = [];
	sv.arr.trandau = [];
	sv.arr.ViewChua = [];
	sv.arr.viewBack = [];
	sv.arr.viewGD = [];
	sv.arr.lbl_tennc = [];
	sv.arr.lbl_co = [];
	sv.arr.TourId = [];
	/////cac mua giai
	sv.arr.muagiai = [{
		name : "2012-2013"
	}, {
		name : "2013-2014"
	}];
	sv.vari.flag = false;
	//////////
	sv.arr.SoTran = [];
	sv.vari.row_height = Ti.App.size(100);
	// sv.vari.trans = Titanium.UI.create2DMatrix();
	// sv.vari.trans1 = sv.vari.trans.rotate(90);
	// sv.vari.trans2 = sv.vari.trans.rotate(270);

	///event
	sv.arr.event_clickrow = [];
	sv.arr.event_clickGD = [];
	sv.arr.event_clickTTCuthe = [];

};
function tao_ui(sv) {
	sv.ui.ViewTong = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
		backgroundColor : 'transparent'
	});
	sv.ui.lbl_muagiai = Titanium.UI.createLabel({
		left : 0,
		width : Ti.App.size(220),
		height : Ti.App.size(100),
		top : 0,
		text : 'Mùa giải',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color:Ti.App.Color.superwhite,
		backgroundColor:Ti.App.Color.brown,
		textAlign:'center'
	});
	sv.ui.ViewTong.add(sv.ui.lbl_muagiai);
	sv.ui.view_choose = new sv.vari.combobox(0, "2013-2014", Ti.App.size(220), Ti.App.size(500), Ti.App.size(100));
	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.view_choose.setTable(sv.arr.muagiai);
	sv.ui.ViewTong.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.table_view);
	sv.ui.ViewChua = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : Ti.App.size(100),
		left : 0,
		showVerticalScrollIndicator : 'true',
		contentHeight : Ti.UI.FILL,
		height : Ti.UI.FILL
	});
	sv.ui.ViewTong.add(sv.ui.ViewChua);
	GetTour(sv, "gettour", {
		"season" : "2013-2014"
		//"matchid" : "1"
	});
	tao_event(sv);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.ViewChua.addEventListener('click', sv.fu.event_clickscrollview);
};
function tao_event(sv) {
	sv.fu.event_clickscrollview = function(e) {
		sv.vari.flag = false;
		if (sv.vari.flag == false) {
			sv.ui.table_view.visible = false;
		};
	};
	sv.fu.event_click_view = function(e) {
		sv.vari.flag = true;
		sv.ui.table_view.visible = true;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
		GetTour(sv, "gettour", {
			"season" : sv.ui.lblfirst.text
			//"matchid" : "1"
		});
	};
}

function tbl_click(e, _lbl, _tbl, sv) {
	if (sv.vari.flag == true) {
		_lbl.text = e.row.tenrow;
		_tbl.visible = false;
	}
}

function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.vari.SoLuongGiaiDau.length - 1)) {
		return Ti.App.size(2);
	} else {
		return 0;
	}
};

function GetTour(sv, _cmd, data) {
	// sv.vari.vIndicatorWindow.openIndicator();
	var xhr = Titanium.Network.createHTTPClient();
	xhr.onsendstream = function(e) {
		//ind.value = e.progress;
		Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
	};
	xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
	xhr.setRequestHeader("Content-Type", "application/json-rpc");
	Ti.API.info(JSON.stringify(data));
	xhr.send(JSON.stringify(data));
	xhr.onerror = function(e) {
		Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
	};
	xhr.onload = function() {
		// if (Ti.Platform.osname == 'android') {
		// }

		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		Ti.API.info('cac giai dau  : ', jsonResuilt.tournaments);
		sv.arr.data = [];
		sv.arr.logo = [];
		for (var i = 0; i < (jsonResuilt.tournaments).length; i++) {

			sv.vari.SoLuongGiaiDau = (jsonResuilt.tournaments).length;
			sv.arr.data.push(jsonResuilt.tournaments[i].name);
			if (jsonResuilt.tournaments[i].logo) {
				sv.arr.logo.push(jsonResuilt.tournaments[i].logo);
			} else {
				sv.arr.logo.push("");
			}
			sv.arr.TourId[i] = jsonResuilt.tournaments[i].id.toString();

		}
		/////////do du lieu vao tableview
		sv.ui.ViewChua.removeAllChildren();
		// sv.vari.timeout = setTimeout(function() {
		for (var i = 0; i < sv.vari.SoLuongGiaiDau; i++) {
			sv.arr.rows[i] = Ti.UI.createTableViewRow({
				height : sv.vari.row_height,
				width : Ti.App.size(720),
				backgroundColor : Ti.App.Color.magenta,
			});

			sv.arr.ViewChua[i] = Ti.UI.createView({
				height : Ti.UI.FILL,
				width : Ti.App.size(720),
			});

			sv.arr.viewRow[i] = Ti.UI.createView({
				height : sv.vari.row_height,
				top : 0,
				width : Ti.App.size(720),
				borderColor : Ti.App.Color.xanhnhat,
				borderWidth : set_border(i, sv),
				left : 0,
			});

			sv.arr.viewGD[i] = Titanium.UI.createView({
				height : sv.vari.row_height,
				top : 0,
				width : Ti.App.size(610),
				left : 0,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				idGD : i
			});

			sv.arr.lbl_tennc[i] = Ti.UI.createLabel({
				left : Ti.App.size(100),
				text : sv.arr.data[i],
				width : Ti.App.size(720),
				font : {
					fontSize : Ti.App.size(30),
					fontWeight : 'bold'
				},
				color : 'black',
				touchEnabled : false
			});
			//
			sv.arr.lbl_co[i] = Titanium.UI.createImageView({
				width : Ti.App.size(65),
				height : Ti.App.size(45),
				image : "/assets/images/1/Chelsea_FC.png",
				left : Ti.App.size(20),
				touchEnabled : false,
			});

			sv.arr.viewArow[i] = Titanium.UI.createView({
				width : Ti.App.size(110),
				height : sv.vari.row_height,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				right : 0,
				top : 0,
				expanded : false,
				id : i,
				// transform : sv.vari.trans2
			});

			sv.arr.arrow[i] = Titanium.UI.createView({
				width : Ti.App.size(40),
				height : Ti.App.size(24),
				// image : '/assets/images/icon/arrow-left.png',
				touchEnabled : false,
				backgroundImage : '/assets/images/icon/arrow-top.png'
			});

			// sv.ui.row.add(sv.arr.ViewChua[i]);
			sv.arr.rows[i].add(sv.arr.viewRow[i]);

			sv.arr.viewGD[i].add(sv.arr.lbl_tennc[i]);
			sv.arr.viewGD[i].add(sv.arr.lbl_co[i]);

			sv.arr.viewArow[i].add(sv.arr.arrow[i]);
			sv.arr.viewRow[i].add(sv.arr.viewGD[i]);
			sv.arr.viewRow[i].add(sv.arr.viewArow[i]);
			// sv.arr.rows.push(sv.ui.row);

			sv.arr.viewGD[i].addEventListener('click', function(e) {
				Ti.API.info('thu tu ' + e.source.idGD);
				Ti.API.info('tourid : ', i, ' ', sv.arr.TourId[e.source.idGD]);
				sv.vari.view_bxh = new sv.vari.bxh(sv.arr.TourId[e.source.idGD]);
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.ViewTong.add(sv.vari.view_bxh.ui.ViewTong);
			});

			sv.arr.viewArow[i].addEventListener('click', function(e) {
				// GetMatchList(sv.arr.TourId[e.source.id], e.source.id, sv);

				data1 = {
					"tourid" : sv.arr.TourId[e.source.id],
					"startdate" : "01/06/2014",
					"enddate" : "12/06/2014"
				};
				var xhr1 = Titanium.Network.createHTTPClient();
				xhr1.onsendstream = function(e) {
					//ind.value = e.progress;
					Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
				};
				xhr1.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + "getmatchlist");
				xhr1.setRequestHeader("Content-Type", "application/json-rpc");
				Ti.API.info(JSON.stringify(data1));
				xhr1.send(JSON.stringify(data1));
				xhr1.onerror = function(e) {
					Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
				};

				xhr1.onload = function() {
					var sotran = [];
					var MangMatchId = [];
					var dl1 = JSON.parse(this.responseText);
					var jsonResuilt1 = JSON.parse(dl1);
					Ti.API.info('du lieu la : ', jsonResuilt1.matchs);

					if (jsonResuilt1.matchs.length == 0) {
						sotran = [];
					} else {
						for (var j = 0; j < (jsonResuilt1.matchs).length; j++) {
							sotran[j] = jsonResuilt1.matchs[j];
							MangMatchId[j] = jsonResuilt1.matchs[j].id;
						}
						sv.arr.MangMatchId = MangMatchId;
					}

					sv.vari.SoTran = sotran.length;

					sv.arr.viewBack[e.source.id] = Ti.UI.createView({
						left : 0,
						height : height_viewback(sotran),
						top : sv.vari.row_height,
						width : Ti.App.size(720),
						backgroundGradient : {
							type : 'linear',
							colors : [{
								color : Ti.App.Color.superwhite,
								position : 0.5
							}, {
								color : Ti.App.Color.superwhite,
								position : 0.5
							}]
						},
						bottom : 1
					});

					for ( j = 0; j < jsonResuilt1.matchs.length; j++) {
						sv.ui.vThongtinTD = new sv.vari.viewTTTD(j);
						sv.ui.vThongtinTD.setParam(Ti.App.size(140 * j), sotran[j]);
						sv.ui.vThongtinTD.setTuVan(false);
						sv.arr.viewBack[e.source.id].add(sv.ui.vThongtinTD.ui.Vcontent);
						sv.arr.trandau.push(sv.ui.vThongtinTD.ui.Viewthongtin);
					}

					sv.arr.rows[e.source.id].add(sv.arr.viewBack[e.source.id]);

					for (var j = 0; j < sv.vari.SoTran; j++) {
						sv.arr.trandau[j].addEventListener('click', function(e) {
							Ti.API.info('length' + sv.arr.MangMatchId[e.source.id]);
							sv.ui.TTTD = new sv.vari.TTTD_cuthe(sv.arr.MangMatchId[e.source.id]);
							sv.ui.ViewTong.removeAllChildren();
							sv.ui.ViewTong.add(sv.ui.TTTD.ui.ViewTong);
						});
					}

					if (e.source.expanded) {
						e.source.expanded = false;
						sv.arr.rows[e.source.id].setHeight(sv.vari.row_height);
						// sv.arr.viewArow[e.source.id].transform = sv.vari.trans2;
						sv.arr.arrow[e.source.id].setBackgroundImage('/assets/images/icon/arrow-top.png');
						for (var j = 0; j < sv.arr.data.length; j++) {
							if (j != (e.source.id)) {
								sv.arr.rows[j].expanded = false;
								sv.arr.rows[j].setHeight(sv.vari.row_height);
								sv.arr.arrow[j].setBackgroundImage('/assets/images/icon/arrow-top.png');
								// sv.arr.viewArow[j].transform = sv.vari.trans2;
								// sv.arr.arrow[j].top = Ti.App.size(25);
							}
						}
					} else {
						e.source.expanded = true;
						sv.arr.rows[e.source.id].setHeight(Ti.App.size((sotran.length) * 140 + 100));
						sv.arr.arrow[e.source.id].setBackgroundImage('/assets/images/icon/arrow-bottom.png');
						// sv.arr.viewArow[e.source.id].transform = sv.vari.trans1;
						// sv.arr.arrow[e.source.id].top = Ti.App.size(20);
						for (var j = 0; j < sv.arr.data.length; j++) {
							if (j != (e.source.id)) {
								sv.arr.rows[j].expanded = false;
								// sv.arr.viewArow[j].transform = sv.vari.trans2;
								// sv.arr.arrow[j].top = Ti.App.size(25);
								sv.arr.rows[j].setHeight(sv.vari.row_height);
								sv.arr.arrow[j].setBackgroundImage('/assets/images/icon/arrow-top.png');
							}
						}
					}

				};

			});
		}
		sv.ui.tbl = Ti.UI.createTableView({
			data : sv.arr.rows,
			height : Ti.UI.FILL,
			width : Ti.App.size(720),
			top : 0,
			separatorColor : 'transparent',
			backgroundColor : Ti.App.Color.magenta,
		});
		sv.ui.ViewChua.add(sv.ui.tbl);
		// sv.vari.vIndicatorWindow.closeIndicator();
		// clearTimeout(sv.vari.timeout);
		// }, 1000);

	};

}

function GetMatchList(TourId, i, sv) {

}

function height_viewback(sotran) {
	if ((sotran.length) == 1) {
		return Ti.App.size(140);
	} else {
		return Ti.App.size((sotran.length) * 140);
	}

};

