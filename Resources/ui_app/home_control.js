function home_control() {
	var menutong = require('/ui_app/MenuTong');
	new (require('/ui-controller/AllData'));
	var db = Ti.Database.open('userinfo');
	db.execute('CREATE TABLE IF NOT EXISTS SaveInfo(username TEXT PRIMARY KEY, password TEXT,type INTERGER,balance INTERGER);');
	db.execute('CREATE TABLE IF NOT EXISTS DichVu(tendv TEXT PRIMARY KEY,dauso TEXT,noidung TEXT,thamso TEXT,gia INTERGER)');
	var sql = db.execute("SELECT * FROM SaveInfo");
	var dichvu = db.execute("SELECT * FROM DichVu");
	Ti.API.info('du lieu' + sql.getRowCount());
	if ((sql.isValidRow())&&(dichvu.isValidRow())) {
		// db.execute("DELETE FROM DichVu");
		Ti.API.info('*************user info:' + sql.fieldByName("username") + sql.fieldByName("balance") + sql.fieldByName("type") + sql.fieldByName("notifi"));
		var username = sql.fieldByName("username");
		var xhr = Titanium.Network.createHTTPClient();
		data = {
			"username" : username
		};
		xhr.onsendstream = function(e) {
			//ind.value = e.progress;
			Ti.API.info('ONSENDSTREAM - PROGRESS: ' + e.progress + ' ' + this.status + ' ' + this.readyState);
		};
		// open the client
		xhr.open('POST', 'http://bestteam.no-ip.biz:7788/api?cmd=getmenu');
		xhr.setRequestHeader("Content-Type", "application/json-rpc");
		Ti.API.info(JSON.stringify(data));
		xhr.send(JSON.stringify(data));
		xhr.onerror = function(e) {
			// Ti.API.info('IN ONERROR ecode' + e.code + ' estring ' + e.error);
			var home = new menutong();
			home.ui.win.open();

		};
		xhr.onload = function() {
			Ti.API.info('IN ONLOAD ' + this.status + ' readyState ' + this.readyState + " " + this.responseText);
			var dl = JSON.parse(this.responseText);
			Ti.API.info('du lieu' + dl);
			var jsonResuilt = JSON.parse(dl);
			if (dichvu.getRowCount()==0) {
				Ti.API.info('nhay vao day');
				for (var i = 0; i < (jsonResuilt.menus.length); i++) {
					if (jsonResuilt.menus[i].params) {
						Ti.API.info('tendv' + jsonResuilt.menus[i].action);
						Ti.API.info('name' + jsonResuilt.menus[i].name);
						Ti.API.info('gia' + jsonResuilt.menus[i].price);
						Ti.API.info('param' + jsonResuilt.menus[i].params);
						db.execute('INSERT INTO DichVu(tendv,dauso,noidung,thamso,gia) VALUES(?,?,?,?,?)', jsonResuilt.menus[i].name, jsonResuilt.menus[i].action, jsonResuilt.menus[i].servicenumber, jsonResuilt.menus[i].params, jsonResuilt.menus[i].price);
					} else {
						db.execute('INSERT INTO DichVu(tendv,dauso,noidung,thamso,gia) VALUES(?,?,?,?,?)', jsonResuilt.menus[i].name, jsonResuilt.menus[i].action, jsonResuilt.menus[i].servicenumber, "", jsonResuilt.menus[i].price);
					}

				}
			}
			var home = new menutong();
			home.ui.win.open();
		};
	} else {
		var home = new menutong();
		home.ui.win.open();
	}
	dichvu.close();
	sql.close();
	db.close();
}

module.exports = home_control;
