function home_control() {
	new (require('/ui-controller/AllData'));
	// new (require('/ui-controller/bg_service_controller'));
	var menutong = require('/ui_app/MenuTong');
	var db = Ti.Database.open('userinfo');
	db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type INTERGER,balance INTERGER,notifi BOOL,dauso1 TEXT,dauso2 TEXT,dauso3 TEXT);');
	var sql = db.execute("SELECT * FROM SaveInfo");
	Ti.API.info('du lieu' + sql.getRowCount());
	if (sql.isValidRow()) {
		Ti.API.info('*************user info:'+sql.fieldByName("username")+sql.fieldByName("dauso1")+sql.fieldByName("dauso2")+sql.fieldByName("dauso3"));
		var username = sql.fieldByName("username");
		fn_updateImage2Server("getmenu", {
			"username" : username.toString()
		}, username);
		sql.close();
		db.close();
	} else {
		fn_updateImage2Server("getmenu", {
			"username" : ""
		}, "free");
		sql.close();
		db.close();
	}

	function fn_updateImage2Server(_cmd, data, _quyen) {
		var xhr = Titanium.Network.createHTTPClient();
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=' + _cmd);
		xhr.setRequestHeader("Content-Type", "application/json-rpc");
		// Ti.API.info(JSON.stringify(data));
		xhr.send(JSON.stringify(data));
		xhr.onerror = function(e) {
			// Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
			var home = new menutong("free");
			home.ui.win.open();

		};
		xhr.onload = function() {
			// Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
			var dl = JSON.parse(this.responseText);
			// Ti.API.info('du lieu' + dl);
			var jsonResuilt = JSON.parse(dl);
			var mangdv = {};
			mangdv.name = [];
			mangdv.dauso = [];
			mangdv.param = [];
			mangdv.price = [];
			// for (var i = 0; i < (jsonResuilt.menus.length); i++) {
				// mangdv.dauso.push(jsonResuilt.menus[i].action);
				// mangdv.name.push(jsonResuilt.menus[i].name);
				// mangdv.price.push(jsonResuilt.menus[i].price);
				// if (jsonResuilt.menus[i].params) {
					// // Ti.API.info('param' + jsonResuilt.menus[i].params);
					// mangdv.param[i] = jsonResuilt.menus[i].params;
				// } else {
					// mangdv.param[i] = "";
				// }
			// }
			// if (_quyen != "free") {
				// db.execute('UPDATE SaveInfo SET dauso1=? WHERE username=?', mangdv.dauso[0], _quyen);
				// db.execute('UPDATE SaveInfo SET dauso2=? WHERE username=?', mangdv.dauso[1], _quyen);
				// db.execute('UPDATE SaveInfo SET dauso3=? WHERE username=?', mangdv.dauso[2], _quyen);
			// }
			var home = new menutong(_quyen, mangdv);
			home.ui.win.open();
		};

	};

}

module.exports = home_control;
