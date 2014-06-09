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
	sv.arr.rows = [];
	sv.vari.db = Ti.Database.open("userinfo");
	sv.vari.dichvu_db = sv.vari.db.execute("SELECT * FROM DichVu");
	sv.arr.cacdichvu = {};
	sv.arr.cacdichvu.tendv = [];
	sv.arr.cacdichvu.thamso = [];
	sv.arr.cacdichvu.gia = [];
	sv.arr.cacdichvu.dauso = [];
	sv.arr.cacdichvu.id = [];
};
function taoui(sv) {
	sv.ui.ViewTong = Ti.UI.createView({
		top : 0,
		left : 0,
		width : Ti.App.size(720),
		height : Ti.UI.FILL,
	});
	while (sv.vari.dichvu_db.isValidRow()) {
		Ti.API.info('nhay vao day*******');
		sv.arr.cacdichvu.tendv.push(sv.vari.dichvu_db.fieldByName("tendv"));
		sv.arr.cacdichvu.thamso.push(sv.vari.dichvu_db.fieldByName("thamso"));
		sv.arr.cacdichvu.gia.push(sv.vari.dichvu_db.fieldByName("gia"));
		sv.arr.cacdichvu.dauso.push(sv.vari.dichvu_db.fieldByName("dauso"));
		sv.arr.cacdichvu.id.push(sv.vari.dichvu_db.fieldByName("servicenumber"));
		// // if (sv.vari.dichvu_db.fieldByName("tendv") == "Dich vu kqxs") {
		sv.vari.dichvu_db.next();
	}
	sv.vari.dichvu_db.close();
	sv.vari.db.close();
	for (var i = 1; i < (sv.arr.cacdichvu.tendv).length; i++) {
		Ti.API.info('ten dichvu:' + sv.arr.cacdichvu.tendv[i]);
		Ti.API.info('dauso:' + sv.arr.cacdichvu.dauso[i]);
		Ti.API.info('thamso:' + sv.arr.cacdichvu.thamso[i]);
		Ti.API.info('gia:' + sv.arr.cacdichvu.gia[i]);
		Ti.API.info('noi dung:' + sv.arr.cacdichvu.id[i]);
		// sv.ui.webview.hide();
		sv.ui.row = Ti.UI.createTableViewRow({
			width : Ti.App.size(640),
			left : Ti.App.size(20),
			backgroundColor : Ti.App.Color.magenta,
			height : Ti.App.size(90),
			color :Ti.App.Color.nauden,
			font : {
				fontSize : Ti.App.size(30)
			},
			title : sv.arr.cacdichvu.tendv[i],
			thamso : sv.arr.cacdichvu.thamso[i],
			tendauso : sv.arr.cacdichvu.dauso[i],
			price : sv.arr.cacdichvu.gia[i],
			// hasChild : true
		});
		sv.arr.rows.push(sv.ui.row);

	}
	sv.ui.webview = Ti.UI.createWebView({
		width : Ti.UI.FILL,
		height : Ti.UI.FILL,
		showScrollbars : false,
		scalesPageToFit : true,
		touchEnabled : true,
		enableZoomControls : false,
	});
	// }
	sv.ui.tbl1 = Ti.UI.createTableView({
		width : Ti.App.size(720),
		height : Ti.UI.SIZE,
		data : sv.arr.rows,
		top : 0,
		separatorColor : Ti.App.Color.xanhnhat,
		left :0,
		backgroundColor:'transparent'
	});
	sv.ui.ViewTong.add(sv.ui.tbl1);
	tao_sukien(sv);
	sv.ui.tbl1.addEventListener('click', sv.fu.evt_tblrow_click);
};
function tao_sukien(sv) {
	sv.fu.evt_tblrow_click = function(e) {
		Ti.API.info(e.row.title);
		Ti.API.info(e.row.thamso);
		Ti.API.info(e.row.tendauso);
		Ti.API.info(e.row.price);
		sv.vari.tendauso = e.row.tendauso;
		sv.vari.price = e.row.price;
		if (e.row.thamso == "") {
			fn_updateImage2Server("menuaction", {
				"command" : sv.vari.tendauso,
				"param" : "",
				"price" : sv.vari.price
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
					"price" : sv.vari.price
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