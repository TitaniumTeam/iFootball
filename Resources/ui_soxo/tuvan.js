module.exports = function(_mangdv) {
	var sv = {};
	sv.fu = {};
	sv.ui = {};
	sv.arr = {};
	sv.vari = {};
	(function() {
		taobien(sv);
		taoui(sv, _mangdv);
	})();

	return sv;
};
function taobien(sv) {
	sv.vari.soluongmenu = 3;
	sv.arr.rows = [];
};
function taoui(sv, _mangdv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
	});
	if (_mangdv == "" || _mangdv == undefined) {
		Ti.API.info('server loi');
	} else {
		sv.ui.webview = Ti.UI.createWebView({
			width : Ti.UI.FILL,
			height : Ti.UI.FILL,
			showScrollbars : true,
			scalesPageToFit : true,
			touchEnabled : true,
			enableZoomControls : false,
		});

		// sv.ui.webview.hide();
		for (var i = 1; i < (_mangdv.name.length); i++) {
			sv.ui.row = Ti.UI.createTableViewRow({
				width : Ti.App.size(640),
				left : 0,
				backgroundColor : Ti.App.Color.superwhite,
				height : Ti.App.size(90),
				color : 'black',
				font : {
					fontSize : Ti.App.size(30)
				},
				title : _mangdv.name[i],
				id : i,
				thamso : _mangdv.param[i],
				tendauso : _mangdv.dauso[i],
				price:_mangdv.price[i],
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
		tao_sukien(sv);
		sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
	}

};
function tao_sukien(sv) {
	sv.fu.evt_tblrow_click = function(e) {
		Ti.API.info(e.row.title);
		Ti.API.info(e.row.thamso);
		Ti.API.info(e.row.tendauso);
		Ti.API.info(e.row.price);
		sv.vari.tendauso = e.row.tendauso;
		sv.vari.price=e.row.price;
		if (e.row.thamso == "") {
			fn_updateImage2Server("menuaction", {
				"command" : sv.vari.tendauso,
				"param" : "","price":sv.vari.price
			}, sv);
		} else {
			sv.vari.param = [];
			sv.vari.thamso = e.row.thamso.toString();
			sv.vari.param = (sv.vari.thamso.split(','));
			sv.ui.opt_dialog = Titanium.UI.createOptionDialog({
				title : "Lựa chọn tỉnh thành",
				options : sv.vari.param
			});
			sv.ui.opt_dialog.show();
			sv.ui.opt_dialog.addEventListener('click', function(e) {
				fn_updateImage2Server("menuaction", {
					"command" : sv.vari.tendauso,
					"param" : sv.vari.param[e.index],
					"price":sv.vari.price
				}, sv);
			});
		}
	};
};
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
		Ti.API.info('du lieu' + dl);
		var jsonResuilt = JSON.parse(dl);
		if (jsonResuilt.result.code == 0 && jsonResuilt.advisor) {
			// var link = jsonResuilt.advisor;

			if (jsonResuilt.advisor) {
				// sv.ui.tbl1.hide();
				// sv.ui.webview.show();
				sv.ui.ViewTong.removeAllChildren();
				sv.ui.ViewTong.add(sv.ui.webview);
				sv.ui.webview.url = jsonResuilt.advisor;
			} else {
				Ti.API.info('khong co link');
			}
		}

	};

};