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

	//GetMatchList(sv,"getmatchlist",{"matchid":"1"});

	sv.vari.viewTTTD = require('/ui_bongda/viewTTTD');
	sv.vari.bxh = require('/ui_bongda/BangXepHang');
	sv.vari.TTTD_cuthe = require('/ui_bongda/ThongTinTranDau_CuThe');
	sv.arr.param1 = [{
		thoigian : '22:10',
		ngay : '22/7',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
	}];

	sv.vari.SoLuongGiaiDau = 0;

	//////////

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

	//////////
	sv.arr.SoTran = [];
	sv.vari.row_height = Ti.App.size(100);
	sv.vari.trans = Titanium.UI.create2DMatrix();
	sv.vari.trans1 = sv.vari.trans.rotate(90);
	sv.vari.trans2 = sv.vari.trans.rotate(270);

	///event
	sv.arr.event_clickrow = [];
	sv.arr.event_clickGD = [];
	sv.arr.event_clickTTCuthe = [];

};
function tao_ui(sv) {

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : 0,
		left : 0,
		showVerticalScrollIndicator : 'true',
		height : Ti.UI.FILL,
		contentHeight : Ti.UI.FILL,

	});

	GetTour(sv, "gettour", {
		//"matchid" : "1"
	});
	setTimeout(function() {
		Ti.API.info('sv.vari.SoLuongGiaiDau', sv.vari.SoLuongGiaiDau);
		for (var i = 0; i < sv.vari.SoLuongGiaiDau; i++) {
			sv.ui.row = Ti.UI.createTableViewRow({
				height : sv.vari.height_viewrow,
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
				left : Ti.App.size(120),
				text : sv.arr.data[i],
				width : Ti.App.size(720),
				font : {
					fontSize : Ti.App.size(30),
					fontWeight : 'bold'
				},
				color : 'black',
				touchEnabled : false
			});

			sv.arr.lbl_co[i] = Titanium.UI.createImageView({
				width : Ti.App.size(65),
				height : Ti.App.size(45),
				image : '/assets/images/icon/0' + (i + 1) + '.png',
				left : Ti.App.size(40),
				touchEnabled : false
			});
			sv.arr.viewArow[i] = Titanium.UI.createView({
				width : Ti.App.size(110),
				height : sv.vari.row_height,
				backgroundColor : 'transparent',
				backgroundSelectedColor : Ti.App.Color.xanhnhat,
				right : 0,
				top : 0,
				expanded : false,
				id : i
			});
			sv.arr.arrow[i] = Titanium.UI.createImageView({
				width : Ti.App.size(20),
				height : Ti.App.size(40),
				image : '/assets/images/icon/arrow-left.png',
				transform : sv.vari.trans1,
				touchEnabled : false
			});

			sv.arr.viewBack[i] = Ti.UI.createView({
				left : 0,
				height : Ti.App.size(140),
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
				// bottom:1
			});

			//tao_event(sv);

			//////////////
			sv.arr.ViewChua[i].add(sv.arr.viewBack[i]);
			sv.ui.row.add(sv.arr.ViewChua[i]);
			sv.arr.ViewChua[i].add(sv.arr.viewRow[i]);

			sv.arr.viewGD[i].add(sv.arr.lbl_tennc[i]);
			sv.arr.viewGD[i].add(sv.arr.lbl_co[i]);

			sv.arr.viewArow[i].add(sv.arr.arrow[i]);
			sv.arr.viewRow[i].add(sv.arr.viewGD[i]);
			sv.arr.viewRow[i].add(sv.arr.viewArow[i]);
			sv.arr.rows.push(sv.ui.row);

			sv.arr.viewGD[i].addEventListener('click', function(e) {
				Ti.API.info('thu tu ' + e.source.idGD);
				Ti.API.info('tourid : ', i, ' ', sv.arr.TourId[e.source.idGD]);
				sv.vari.view_bxh = new sv.vari.bxh(sv.arr.TourId[e.source.idGD]);
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.ViewTong.add(sv.vari.view_bxh.ui.ViewTong);
			});
		}
		sv.ui.tbl = Ti.UI.createTableView({
			data : sv.arr.rows,
			// height : Ti.UI.FILL,
			width : Ti.App.size(720),
			top : 0,
			separatorColor : 'transparent',
			backgroundColor : Ti.App.Color.magenta,
		});
		sv.ui.ViewTong.add(sv.ui.tbl);
		var SoLuong = 0;
		var timer = setInterval(function() {
			if (SoLuong < sv.vari.SoLuongGiaiDau) {

				GetMatchList(sv.arr.TourId[SoLuong], SoLuong, sv);
				SoLuong++;

			} else {
				clearInterval(timer);
			}

		}, 100);

	}, 3000);

};

function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.arr.data.length - 1)) {
		return 1;
	} else {
		return 0;
	}
};

function GetTour(sv, _cmd, data) {
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
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		var jsonResuilt = JSON.parse(dl);
		Ti.API.info('cac giai dau  : ', jsonResuilt.tournaments);
		sv.arr.data = [];

		for (var i = 0; i < (jsonResuilt.tournaments).length; i++) {

			sv.vari.SoLuongGiaiDau = (jsonResuilt.tournaments).length;

			sv.arr.data.push(jsonResuilt.tournaments[i].name);
			sv.arr.TourId[i] = jsonResuilt.tournaments[i].id.toString();

		}

		//GetMatchList(sv,"getmatchlist",{"matchid":"1"});

	};

}

function GetMatchList(TourId, i, sv) {
	data1 = {
		"tourid" : TourId,
		"startdate" : "10/04/2014",
		"enddate" : "30/05/2014"
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
		//var sotran = [];
		var dl1 = JSON.parse(this.responseText);
		var jsonResuilt1 = JSON.parse(dl1);
		Ti.API.info('du lieu la : ', jsonResuilt1.matchs);

		if (jsonResuilt1.matchs.length == 0) {
			sotran = [];
		} else {
			for (var j = 0; j < (jsonResuilt1.matchs).length; j++) {
				sotran[j] = jsonResuilt1.matchs[j];
			}
		}

		for ( j = 0; j < jsonResuilt1.matchs.length; j++) {
			sv.ui.vThongtinTD = new sv.vari.viewTTTD();
			sv.ui.vThongtinTD.setParam(Ti.App.size(140 * j), sotran[j]);
			sv.ui.vThongtinTD.setTuVan(false);
			sv.arr.viewBack[i].add(sv.ui.vThongtinTD.ui.Vcontent);
			sv.arr.trandau.push(sv.ui.vThongtinTD.ui.Viewthongtin);
		}

		if (jsonResuilt1.matchs.length == 1) {
			sv.vari.height_viewthongtin = Ti.App.size(140);
			sv.vari.height_viewrow = Ti.App.size(380);
			sv.vari.height_viewthongtin_expand = Ti.App.size(240);
		} else {
			if (jsonResuilt1.matchs.length >= 2) {
				sv.vari.height_viewthongtin = Ti.App.size(jsonResuilt1.matchs.length * 140);
				sv.vari.height_viewthongtin_expand = Ti.App.size(jsonResuilt1.matchs.length * 140 + 100);
				sv.vari.height_viewrow = Ti.App.size(380);
			}
			if (jsonResuilt1.matchs.length == 0) {
				sv.vari.height_viewthongtin = Ti.App.size(jsonResuilt1.matchs.length * 0);
				sv.vari.height_viewthongtin_expand = Ti.App.size(jsonResuilt1.matchs.length * 0);
				sv.vari.height_viewrow = Ti.App.size(0);
			}
		}

		tao_event1(sv);

		// for (var k = 0; k < (jsonResuilt.tournaments).length; k++) {
		sv.arr.viewArow[i].addEventListener('click', sv.arr.event_clickrow[i]);
		// }
		//
		// for (var k = 0; k < (jsonResuilt.tournaments).length; k++) {
		//sv.arr.viewrows[i].addEventListener('click', sv.arr.event_clickGD[i]);
		// }

		for (var j = 0; j < jsonResuilt1.matchs.length; j++) {
			sv.arr.trandau[j].addEventListener('click', sv.arr.event_clickTTCuthe[j]);
		}

		function tao_event1(sv) {

			//event click thong tin tran dau
			for (var j = 0; j < jsonResuilt1.matchs.length; j++) {
				sv.arr.event_clickTTCuthe[j] = function(e) {
					sv.ui.TTTD = new sv.vari.TTTD_cuthe();
					sv.ui.ViewTong.removeAllChildren();
					sv.ui.ViewTong.add(sv.ui.TTTD.ui.ViewTong);
				};
			}

			//event click bang xep hang
			//for (var i = 0; i < sv.vari.SoLuongGiaiDau; i++) {
			// sv.arr.event_clickGD[i] = function(e) {
			// Ti.API.info('thu tu ' + e.source.idGD);
			// Ti.API.info('tourid : ', i, ' ', sv.arr.TourId[i]);
			// sv.vari.view_bxh = new sv.vari.bxh(sv.arr.TourId[i]);
			// sv.ui.ViewTong.removeAllChildren();
			// sv.ui.ViewTong.add(sv.vari.view_bxh.ui.ViewTong);
			// };
			//}

			sv.arr.event_clickrow[i] = function(e) {
				if (e.source.expanded) {
					e.source.expanded = false;
					sv.arr.rows[e.source.id].setHeight(100);
					sv.arr.arrow[e.source.id].transform = sv.vari.trans1;
					sv.arr.arrow[e.source.id].top = Ti.App.size(25);
					for (var j = 0; j < sv.arr.data.length; j++) {
						if (j != (e.source.id)) {
							sv.arr.rows[j].expanded = false;
							sv.arr.rows[j].setHeight(100);
							sv.arr.arrow[j].transform = sv.vari.trans1;
							sv.arr.arrow[j].top = Ti.App.size(25);
						}
					}
				} else {
					e.source.expanded = true;
					sv.arr.rows[e.source.id].setHeight(sv.vari.height_viewthongtin_expand);
					sv.arr.arrow[e.source.id].transform = sv.vari.trans2;
					sv.arr.arrow[e.source.id].top = Ti.App.size(20);
					for (var j = 0; j < sv.arr.data.length; j++) {
						if (j != (e.source.id)) {
							sv.arr.rows[j].expanded = false;
							sv.arr.arrow[j].transform = sv.vari.trans1;
							sv.arr.arrow[j].top = Ti.App.size(25);
							sv.arr.rows[j].setHeight(Ti.App.size(100));
						};
					}
				}

			};

		}

	};
}

// ///event click menu so xuong

// };

