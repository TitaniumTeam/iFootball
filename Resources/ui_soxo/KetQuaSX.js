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
	sv.vari.arrow = require('/ui_soxo/vArrow');
	sv.vari.combobox = require('/ui_soxo/ComboBox');
	sv.vari.flag = false;
	sv.arr.datarow = [];
	sv.arr.height = [Ti.App.size(120), Ti.App.size(200)];
	sv.vari.newdate;
	sv.vari.bangkq = require('/ui_soxo/bangketquasx');
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
			fontSize : Ti.App.size(35),
			fontWeight : 'bold'
		},
		textAlign : 'center',
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.ViewTong.add(sv.ui.View_header);
	sv.ui.View_icon_search = Titanium.UI.createView({
		width : Ti.App.size(140),
		height : Ti.App.size(100),
		backgroundSelectedColor : Ti.App.Color.xanhnhat,
		backgroundColor : Ti.App.Color.green,
		top : Ti.App.size(60),
		right : 0
	});
	sv.ui.icon_search = Titanium.UI.createImageView({
		width : Ti.App.size(60),
		height : Ti.App.size(60),
		backgroundImage : '/assets/images/icon/icon-search.png',
		touchEnabled : false
	});
	sv.ui.View_icon_search.add(sv.ui.icon_search);
	sv.ui.ViewTong.add(sv.ui.View_icon_search);
	sv.ui.view_choose = new sv.vari.combobox(Ti.App.size(60), 'MIỀN BẮC', 0, Ti.App.size(290), Ti.App.size(160));
	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(60), currDate(), Ti.App.size(290), Ti.App.size(290), Ti.App.size(160));

	sv.ui.lblfirst = sv.ui.view_choose.getLblFirst();
	sv.ui.lblfirst1 = sv.ui.view_choose1.getLblFirst();
	sv.ui.table_view = sv.ui.view_choose.getTableView();
	sv.ui.ViewTong.add(sv.ui.view_choose);
	sv.ui.ViewTong.add(sv.ui.view_choose1);
	sv.ui.ViewTong.add(sv.ui.table_view);

	//////date picker
	sv.ui.ViewPicker = Titanium.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(400),
		visible : false,
		bottom : 0,
		zIndex : 10,
	});
	sv.ui.ViewTong.add(sv.ui.ViewPicker);
	sv.ui.picker = Ti.UI.createPicker({
		type : Titanium.UI.PICKER_TYPE_DATE,
		minDate : new Date(2009, 0, 1),
		maxDate : new Date(),
		top : Ti.App.size(100),
		value : new Date(),
		backgroundColor:Ti.App.Color.xanhnhat
	});
	sv.ui.ViewPicker.add(sv.ui.picker);
	sv.ui.btn_pick = Ti.UI.createButton({
		width : Ti.App.size(200),
		height : Ti.App.size(100),
		title : "Chọn",
		color : Ti.App.Color.superwhite,
		font : {
			fonSize : Ti.App.size(30)
		},
		backgroundColor : Ti.App.Color.nauden,
		top : 0,
	});
	sv.ui.ViewPicker.add(sv.ui.btn_pick);
	sv.ui.btn_pick.addEventListener('click', function(e) {
		sv.ui.lblfirst1.text = sv.vari.newdate;
		sv.ui.ViewPicker.visible = false;
	});
	sv.ui.picker.addEventListener('change', function(e) {
		sv.vari.date = e.value;
		sv.vari.day = sv.vari.date.getDate();
		sv.vari.month = sv.vari.date.getMonth() + 1;
		sv.vari.year = sv.vari.date.getFullYear();
		sv.vari.newdate = sv.vari.day + "/" + sv.vari.month + "/" + sv.vari.year;
	});
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
		height : Ti.UI.FILL
	});
	sv.ui.ViewTong.add(sv.ui.scrollView);
	////
	sv.ui.ViewChua = Titanium.UI.createView({
		top : 0,
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		left : 0,
		backgroundColor : 'transparent',
		touchEnabled : false
	});
	sv.ui.scrollView.add(sv.ui.ViewChua);
	sv.ui.bangkq = new sv.vari.bangkq(1);
	sv.ui.bangkq_miennam = new sv.vari.bangkq(2);
	sv.ui.bangkq_miennam.visible = false;
	sv.ui.ViewChua.add(sv.ui.bangkq);
	sv.ui.ViewChua.add(sv.ui.bangkq_miennam);
	sv.ui.vDaysove = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(300),
		backgroundColor : 'transparent',
		top : Ti.App.size(1160),
	});
	sv.ui.lbl_dsve = Ti.UI.createLabel({
		width : Ti.App.size(200),
		height : Ti.App.size(60),
		left : Ti.App.size(20),
		text : 'Dãy số về',
		top : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vDaysove.add(sv.ui.lbl_dsve);
	sv.ui.vConsove = Ti.UI.createView({
		width : Ti.App.size(680),
		height : Ti.App.size(240),
		top : Ti.App.size(80),
		left : Ti.App.size(20),
		right : Ti.App.size(20)
	});
	sv.ui.vDaysove.add(sv.ui.vConsove);

	for (var i = 0; i < 9; i++) {
		sv.ui.rowc1 = rowchild(0, Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, setbg(i, 5));
		// sv.ui.rowc1.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc1);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc2 = rowchild(Ti.App.size(75), Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, false);
		// sv.ui.rowc2.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc2);
	}
	for (var i = 0; i < 9; i++) {
		sv.ui.rowc3 = rowchild(Ti.App.size(150), Ti.App.size(75 * i), Ti.App.size(68), Ti.App.size(68), false, true, false);
		// sv.ui.rowc3.setText(sv.arr.dayso1[i]);
		sv.ui.vConsove.add(sv.ui.rowc3);
	}
	sv.ui.ViewChua.add(sv.ui.vDaysove);
	////
	sv.ui.vdau_sau = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
		top : Ti.App.size(1460),
	});

	sv.ui.lbl_dsve_saudau = Ti.UI.createLabel({
		width : Ti.App.size(70),
		height : Ti.App.size(70),
		left : Ti.App.size(20),
		text : 'Số đầu',
		top : 0,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vdau_sau.add(sv.ui.lbl_dsve_saudau);
	sv.ui.lbl_dsve_sau = Ti.UI.createLabel({
		width : Ti.App.size(70),
		height : Ti.App.size(70),
		left : Ti.App.size(120),
		text : 'Số sau',
		top : 0,
		font : {
			fontSize : Ti.App.size(20)
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left'
	});
	sv.ui.vdau_sau.add(sv.ui.lbl_dsve_sau);
	sv.ui.ViewChua.add(sv.ui.vdau_sau);
	////
	for (var i = 0; i < 8; i++) {
		sv.ui.vds_sovesau = Ti.UI.createView({
			width : Ti.App.size(670),
			height : Ti.App.size(70),
			left : Ti.App.size(20),
			top : Ti.App.size(1550 + (80 * i)),
			borderColor : Ti.App.Color.magenta,
			borderWidth : 1,
			borderRadius : 2
		});
		for (var j = 0; j < 4; j++) {
			sv.ui.rowchild_vds = rowchild(Ti.App.size(1), setleft(j, 0), Ti.App.size(67), Ti.App.size(67), false, false, false, setbg(j, 0));
			// sv.ui.rowchild_vds.setText(sv.arr.dayso1[0]);
			sv.ui.vds_sovesau.add(sv.ui.rowchild_vds);

		}
		sv.ui.ViewChua.add(sv.ui.vds_sovesau);
	}

	;
	////
	createUI_Event(sv);
	sv.ui.View_icon_search.addEventListener('click', sv.fu.event_timkiem);
	sv.ui.view_choose.addEventListener('click', sv.fu.event_click_view);
	sv.ui.table_view.addEventListener('click', sv.fu.event_clicktbl);
	sv.ui.view_choose1.addEventListener('click', sv.fu.event_click_view1);
	sv.ui.scrollView.addEventListener('click', sv.fu.event_clickscrollview);
};
function createUI_Event(sv) {
	sv.fu.event_clickscrollview = function(e) {
		sv.vari.flag = false;
		if (sv.vari.flag == false) {
			sv.ui.table_view.visible = false;
			sv.ui.ViewPicker.visible = false;
		};
	};
	sv.fu.event_timkiem = function(e) {
		sv.ui.View_header.text = "Kết quả sổ xố " + sv.ui.lblfirst.text+' ' + sv.ui.lblfirst1.text;
		sv.ui.table_view.visible = false;
		sv.ui.ViewPicker.visible = false;
		fn_updateImage2Server("searchlottery", {
			"provideid" : sv.ui.lblfirst.id,
			"startdate" : sv.ui.lblfirst1.text
		}, sv);
	};
	sv.fu.event_click_view = function(e) {
		sv.vari.flag = true;
		fn_updateImage2Server("getprovide", {}, sv);
		sv.ui.table_view.visible = true;
		sv.ui.table_view.scrollToTop(0, {
			animated : true
		});
		sv.ui.ViewPicker.visible = false;
	};
	sv.fu.event_clicktbl = function(e) {
		sv.vari.flag = true;
		tbl_click(e, sv.ui.lblfirst, sv.ui.table_view, sv);
	};
	sv.fu.event_click_view1 = function(e) {
		sv.vari.flag = true;
		sv.ui.ViewPicker.visible = true;
		sv.ui.table_view.visible = false;
	};
};
// function setkq(sv) {
// sv.setParam = function(param) {
// sv.ui.bangkq.setKQ(param);
// };
// }
function fn_updateImage2Server(_cmd, data, sv) {
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
		if (_cmd == "searchlottery") {
			var ketqua = [];
			var mangstring;
			var mangkq = [];
			for (var i = 0; i < jsonResuilt.resulttable.length; i++) {
				if (jsonResuilt.resulttable[i].provide) {
					Ti.API.info('ten giai: ' + jsonResuilt.resulttable[i].provide.name);
					Ti.API.info('ngay thang: ' + jsonResuilt.resulttable[i].resultdate);
					for (var j = 0; j < jsonResuilt.resulttable[i].lines.length; j++) {
						Ti.API.info('Thu tu: ' + jsonResuilt.resulttable[i].lines[j].name);
						Ti.API.info('ket qua: ' + jsonResuilt.resulttable[i].lines[j].result);
						ketqua.push(jsonResuilt.resulttable[i].lines[j].result);
					};
					for (var i = 0; i < (ketqua.length); i++) {
						mangstring = (ketqua[i].toString()).split(',');
						for (var j = 0; j < (mangstring.length); j++) {
							// Ti.API.info('mang string:' + mangstring[j]);
							mangkq.push(mangstring[j]);
						};
					}
					if (mangkq.length <= 20) {
						sv.ui.bangkq_miennam.visible = true;
						sv.ui.bangkq.visible = false;
						sv.ui.bangkq_miennam.setKQ(mangkq);
					} else {
						if (mangkq.length >= 20) {
							sv.ui.bangkq_miennam.visible = false;
							sv.ui.bangkq.visible = true;
							sv.ui.bangkq.setKQ(mangkq);
						}

					}

				} else {

					alert('khong co du lieu');
				}
			}

		} else {
			if (_cmd == "getprovide") {
				var ketqua;
				var mangkq = [];
				for (var i = 0; i < jsonResuilt.provides.length; i++) {
					// Ti.API.info('ten giai: ' + jsonResuilt.provides[i].name);
					// Ti.API.info('ten giai: ' + jsonResuilt.provides[i].id);
					mangkq.push(jsonResuilt.provides[i]);
				}
				// for (var i = 0; i < (mangkq.length); i++) {
				// Ti.API.info('mang kq' + mangkq[i].name);
				// Ti.API.info('mang kq' + mangkq[i].id);
				// }
				sv.ui.view_choose.setTable(mangkq);
			}

		}

	};

};
function setbg(i, _bg) {
	if (i == _bg) {
		return true;
	} else
		return false;
};
function setleft(j, _left) {
	if (j == _left) {
		return Ti.App.size(1);
	} else
		return Ti.App.size(74 * j);
};
function tbl_click(e, _lbl, _tbl, sv) {
	if (sv.vari.flag == true) {
		if (_lbl.id) {
			_lbl.id = e.row.id;
			Ti.API.info('id' + _lbl.id);
			_lbl.text = e.row.tenrow;
			_tbl.visible = false;
		} else {
			_lbl.text = e.row.tenrow;
			_tbl.visible = false;
		}
	}
}

function view_click(_tbl1, _tbl2, sv) {
	if (sv.vari.flag == true) {
		_tbl1.visible = true;
		_tbl2.visible = false;
	}

}

function rowchild(_top, _left, _width, _height, _visible, _border, _bg, _border2) {
	var view_contain = Ti.UI.createView({
		width : _width,
		height : _height,
		top : _top,
		left : _left,
	});
	var line_doc = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(70),
		right : 0,
		backgroundColor : Ti.App.Color.magenta,
		visible : _visible
	});
	view_contain.add(line_doc);
	var lbl_kq = Ti.UI.createLabel({
		color : Ti.App.Color.nauden,
		textAlign : 'center',
		font : {
			fontSize : Ti.App.size(40)
		}
	});
	view_contain.add(lbl_kq);
	view_contain.setColor_Line = function(_color) {
		line_doc.backgroundColor = _color;
	};
	if (_border == true) {
		view_contain.borderColor = 'black';
		view_contain.borderRadius = 3;
		view_contain.borderWidth = 1;
	};
	if (_border2 == true) {
		view_contain.borderWidth = 1;
		view_contain.borderColor = 'black';
	};
	if (_bg == true) {
		view_contain.backgroundColor = Ti.App.Color.red;
		lbl_kq.color = Ti.App.Color.superwhite;
	}
	view_contain.setText = function(_conso) {
		lbl_kq.text = _conso;
	};
	return view_contain;
};
function currDate() {
	var currTime = new Date();
	var ngay = currTime.getDate();
	var thang = currTime.getMonth() + 1;
	var nam = currTime.getFullYear();
	var currdate = ngay + "/" + thang + "/" + nam;
	return currdate;
}