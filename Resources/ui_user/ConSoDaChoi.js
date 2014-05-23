module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		createVariable(sv);
		createUI(sv);
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
	sv.arr.ViewConSoDaChoi = [];
	sv.arr.LabelConSoDaChoi = [];
	sv.arr.ViewThoiGian = [];
	sv.arr.LabelThoiGian = [];
}

function createUI(sv) {

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

	sv.ui.CSDC = Ti.UI.createView({
		top : Ti.App.size(25),
		bottom : Ti.App.size(25),
		right : Ti.App.size(232),
		left : Ti.App.size(102),
	});

	sv.ui.LabelCSDC = Ti.UI.createLabel({
		text : 'Con số đã chơi',
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

		sv.arr.ViewConSoDaChoi[i] = Ti.UI.createView({
			left : Ti.App.size(100),
			width : Ti.App.size(390),
			height : Ti.App.size(80),
		});

		sv.arr.LabelConSoDaChoi[i] = Ti.UI.createLabel({
			text : '14',
			font : {
				fontSize : Ti.App.size(22),
				fontFamily : 'Aria',

			},
			color : Ti.App.Color.nauden,
		});

		sv.arr.ViewConSoDaChoi[i].add(sv.arr.LabelConSoDaChoi[i]);
		row.add(sv.arr.ViewConSoDaChoi[i]);

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
	sv.ui.ViewTruong.add(sv.ui.CSDC);
	sv.ui.ViewTruong.add(sv.ui.Line2);
	sv.ui.ViewTruong.add(sv.ui.TG);
	sv.ui.TT.add(sv.ui.LabelTT);
	sv.ui.CSDC.add(sv.ui.LabelCSDC);
	sv.ui.TG.add(sv.ui.LabelTG);

}

function createUI_Event(sv) {
	sv.fu.event_openwin = function(e) {
		Ti.API.info('open');
	};
	sv.fu.event_closewin = function(e) {

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv = null;
	};
}

