module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		create_ui(sv);
	})();

	return sv;
};
/**
 * Khởi tạo biến
 */
function createVariable(sv) {
	sv.arr.DaySo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];
	sv.arr.data = [];
	sv.arr.ViewSTT = [];
	sv.arr.STT = [];
	sv.arr.ViewXu = [];
	sv.arr.LabelXu = [];
	sv.arr.ViewDauSo = [];
	sv.arr.LabelDauSo = [];
	sv.arr.ViewThoiGian = [];
	sv.arr.LabelThoiGian = [];

}

function create_ui(sv) {

	sv.ui.ViewTong = Ti.UI.createView({
		backgroundColor : Ti.App.Color.white,
		// width : Ti.App.widthScreen,
		height : Ti.UI.FILL,
		top : Ti.App.size(0),
		left : 0
	});

	//Tao view Truong
	sv.ui.ViewTruong = Ti.UI.createView({
		top : Ti.App.size(0),
		width : Ti.App.WidthScreen,
		height : Ti.App.size(80),
	});

	sv.ui.TT = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(620),
		left : Ti.App.size(0),
	});

	sv.ui.LabelTT = Ti.UI.createLabel({
		text : 'TT',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.Line1 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		right : Ti.App.size(618),
		width : Ti.App.size(2),
	});
	sv.ui.XU = Titanium.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(420),
		left : Ti.App.size(98),
	});
	sv.ui.LabelXu = Ti.UI.createLabel({
		text : 'Xu',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.Line2 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		left : Ti.App.size(300),
		width : Ti.App.size(2),
	});
	sv.ui.DAUSO = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(232),
		left : Ti.App.size(298),
	});

	sv.ui.LabelDauSo = Ti.UI.createLabel({
		text : 'Đầu số',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.Line3 = Ti.UI.createView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(20),
		bottom : Ti.App.size(20),
		right : Ti.App.size(230),
		width : Ti.App.size(2),
	});

	sv.ui.TG = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(0),
		left : Ti.App.size(490),
	});

	sv.ui.LabelTG = Ti.UI.createLabel({
		text : 'Thời gian',
		font : {
			fontSize : Ti.App.size(26),
			fontFamily : 'Aria'
		},
		color : Ti.App.Color.nauden
	});

	sv.ui.ViewLine = Ti.UI.createView({
		height : Ti.App.size(2),
		top : Ti.App.size(80),
		backgroundColor : Ti.App.Color.nauden,
	});

	//Tao table view

	sv.ui.ViewDanhSach = Ti.UI.createTableView({
		backgroundColor : Ti.App.Color.magenta,
		top : Ti.App.size(82),
		left : 0
	});

	for (var i = 0; i < 15; i++) {

		var row = Ti.UI.createTableViewRow({
			width : Ti.App.size(720),
			height : Ti.App.size(80),
			left : 0,
			id : i,
			backgroundSelectedColor : 'black'
		});

		sv.arr.ViewSTT[i] = Ti.UI.createView({
			width : Ti.App.size(100),
			height : Ti.App.size(80),
			left : Ti.App.size(0),
		});

		sv.arr.STT[i] = Ti.UI.createLabel({
			text : sv.arr.DaySo[i],
			font : {
				fontSize : Ti.App.size(22),
				fontWeight : 'bold',
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewSTT[i].add(sv.arr.STT[i]);
		row.add(sv.arr.ViewSTT[i]);

		sv.arr.ViewXu[i] = Ti.UI.createView({
			left : Ti.App.size(100),
			width : Ti.App.size(200),
			height : Ti.App.size(80),
		});

		sv.arr.LabelXu[i] = Ti.UI.createLabel({
			text : '10.000',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',

			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewXu[i].add(sv.arr.LabelXu[i]);
		row.add(sv.arr.ViewXu[i]);

		sv.arr.ViewDauSo[i] = Ti.UI.createView({
			left : Ti.App.size(300),
			width : Ti.App.size(190),
			height : Ti.App.size(80),
		});

		sv.arr.LabelDauSo[i] = Ti.UI.createLabel({
			text : '8xxx',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewDauSo[i].add(sv.arr.LabelDauSo[i]);
		row.add(sv.arr.ViewDauSo[i]);

		sv.arr.ViewThoiGian[i] = Ti.UI.createView({
			left : Ti.App.size(490),
			width : Ti.App.size(230),
			height : Ti.App.size(80),
		});

		sv.arr.LabelThoiGian[i] = Ti.UI.createLabel({
			text : '14/04/1993',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',
			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewThoiGian[i].add(sv.arr.LabelThoiGian[i]);
		row.add(sv.arr.ViewThoiGian[i]);

		sv.arr.data.push(row);
	};
	sv.ui.ViewDanhSach.setData(sv.arr.data);

	createUI_Event(sv);

	sv.ui.ViewTong.add(sv.ui.ViewTruong);
	sv.ui.ViewTong.add(sv.ui.ViewLine);
	sv.ui.ViewTong.add(sv.ui.ViewDanhSach);

	sv.ui.ViewTruong.add(sv.ui.TT);
	sv.ui.ViewTruong.add(sv.ui.Line1);
	sv.ui.ViewTruong.add(sv.ui.DAUSO);
	sv.ui.ViewTruong.add(sv.ui.Line2);
	sv.ui.ViewTruong.add(sv.ui.TG);
	sv.ui.TT.add(sv.ui.LabelTT);
	sv.ui.DAUSO.add(sv.ui.LabelDauSo);
	sv.ui.TG.add(sv.ui.LabelTG);
	sv.ui.XU.add(sv.ui.LabelXu);
	sv.ui.ViewTruong.add(sv.ui.Line3);
	sv.ui.ViewTruong.add(sv.ui.XU);

}

function createUI_Event(sv) {
	sv.fu.event_btnclose = function(e) {
		sv.ui.windowkqsx.close();
	};
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open');
	};
	sv.fu.event_closewin = function(e) {
		sv.ui.windowkqsx.removeEventListener('open', sv.fu.event_openwin);
		sv.ui.windowkqsx.removeEventListener('close', sv.fu.event_closewin);
		sv.ui.ViewIconLeft.removeEventListener('click', sv.fu.event_btnclose);
		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

