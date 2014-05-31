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
	sv.ui.view_choose1 = new sv.vari.combobox(Ti.App.size(60), set_lbl(), Ti.App.size(290), Ti.App.size(290), Ti.App.size(160));

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
		minDate : new Date(2013, 0, 1),
		maxDate : new Date(),
		top : Ti.App.size(100),
		value : new Date(),
		backgroundColor : Ti.App.Color.gray
	});
	sv.ui.ViewPicker.add(sv.ui.picker);
	sv.ui.btn_pick = Ti.UI.createButton({
		width : Ti.App.size(200),
		height : Ti.App.size(100),
		title : "Chọn",
		color : Ti.App.Color.nauden,
		font : {
			fonSize : Ti.App.size(30)
		},
		backgroundColor : Ti.App.Color.gray,
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
		sv.ui.View_header.text = "Kết quả sổ xố " + sv.ui.lblfirst.text + ' ' + sv.ui.lblfirst1.text;
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
	sv.ui.scrollView.scrollTo(0, 0);
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
					sv.ui.bangkq.visible = true;
					sv.ui.bangkq_miennam.visible = false;
					sv.ui.bangkq.setKQ("");
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
function set_lbl() {
	if (currHour >= 18) {
		return currDate();
	} else {
		return getYesterdaysDate();
	}
};
