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
	sv.vari.soluongmenu = 3;
	sv.arr.data = [{
		title : "Cầu bạch thủ",
		url : "http://google.com.vn"
	}, {
		title : "Cầu 2 nháy",
		url : "http://dantri.com.vn"
	}, {
		title : "Soi cầu",
		url : "http://haivl.com"
	}, {
		title : "Sổ mơ",
		url : "http://ketqua.net"
	}];
	sv.arr.rows = [];
};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
	});
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			width : Ti.App.size(640),
			left : 0,
			backgroundColor : Ti.App.Color.superwhite,
			height : Ti.App.size(90),
			color : 'black',
			font : {
				fontSize : Ti.App.size(30)
			},
			title : sv.arr.data[i].title,
			id : i,
			// hasChild : true
		});
		sv.arr.rows.push(sv.ui.row);
	}
	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(680),
		height : Ti.UI.SIZE,
		data : sv.arr.rows,
		top : 0,
		separatorColor : Ti.App.Color.xanhnhat,
		left:Ti.App.size(20)
	});
	sv.ui.ViewTong.add(sv.ui.tbl1);
	sv.ui.webview = Ti.UI.createWebView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		showScrollbars : true,
		scalesPageToFit : true,
		touchEnabled : true,
		enableZoomControls : false
	});
	tao_sukien(sv);
	sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
};
function tao_sukien(sv) {
	sv.fu.evt_tblrow_click = function(e) {
		Ti.API.info(e.row.title);
		sv.ui.ViewTong.removeAllChildren();
		sv.ui.ViewTong.add(sv.ui.webview);
		sv.ui.webview.setUrl(sv.arr.data[e.row.id].url);
	};
};
