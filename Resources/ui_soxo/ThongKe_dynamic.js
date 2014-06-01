module.exports = function(_mangdv) {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv,_mangdv);
	})();

	return sv;
};
function taobien(sv) {
	sv.vari.soluongmenu = 3;
	sv.arr.rows = [];
};
function taoui(sv,_mangdv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
	});
	for (var i = 0; i < (_mangdv.name.length); i++) {
		sv.ui.row = Ti.UI.createTableViewRow({
			width : Ti.App.size(640),
			left : 0,
			backgroundColor : Ti.App.Color.superwhite,
			height : Ti.App.size(90),
			color : 'black',
			font : {
				fontSize : Ti.App.size(30)
			},
			title : _mangdv.dauso[i],
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
		left : Ti.App.size(20)
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
function fn_updateImage2Server(_cmd, data) {
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
		var home = new menutong("free");
		home.ui.win.open();

	};
	xhr.onload = function() {
		Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
		var dl = JSON.parse(this.responseText);
		Ti.API.info('du lieu' + dl);
		var jsonResuilt = JSON.parse(dl);
		var mang_dauso = [];
		var mang_tendichvu = [];
		for (var i = 0; i < (jsonResuilt.menus.length); i++) {
			mang_dauso.push(jsonResuilt.menus[i].action);
			mang_tendichvu.push(jsonResuilt.menus[i].name);
			if (jsonResuilt.menus[i].params) {
				Ti.API.info('param' + jsonResuilt.menus[i].params);
			}
		}
		for (var i = 0; i < (mang_dauso.length); i++) {
			Ti.API.info('dau so: ' + mang_dauso[i]);
		};
		
	};

};