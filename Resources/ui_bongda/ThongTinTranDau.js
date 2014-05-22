module.exports = function() {
	var sv = {};
	sv.vari = {};
	sv.arr = {};
	sv.ui = {};
	sv.fu = {};
	sv.test = {};

	(function() {
		tao_bien(sv);
		tao_ui(sv);
	})();

	return sv;
};
function tao_bien(sv) {
	sv.vari = {};
	sv.arr = {};
	sv.arr.param1 = [{
		thoigian : '22:10',
		ngay : '22/7',
		tendoi1 : 'Manchester United',
		tendoi2 : 'Chealse',
		tyle : ['0', '1', '1/4'],
		ck : ['0.93', '0.97']
	}];
	sv.arr.data = [{
		title : 'Premier League',
	}, {
		title : 'Bundesliga',
	}, {
		title : 'V - League',
	}, {
		title : 'Korea League',
	}, {
		title : 'League 1',
	}];
	sv.arr.rows = [];
	sv.vari.row_height = Ti.App.size(100);
	sv.arr.arrow = [];
	sv.vari.trans = Titanium.UI.create2DMatrix();
	sv.vari.trans1 = sv.vari.trans.rotate(90);
	sv.vari.trans2 = sv.vari.trans.rotate(270);
};
function tao_ui(sv) {

	sv.ui.ViewTong = Ti.UI.createScrollView({
		backgroundColor : 'transparent',
		top : 0,
		left : 0,
		showVerticalScrollIndicator : 'true',
		height : Ti.UI.FILL,
		contentHeight : Ti.UI.FILL,
	});
	if (Ti.Platform.osname == 'android') {
		for (var i = 0; i < sv.arr.data.length; i++) {
			sv.ui.row = Ti.UI.createTableViewRow({
				expanded : false,
				height : sv.vari.row_height,
				width : Ti.App.size(720),
				backgroundColor : Ti.App.Color.magenta,
				id : i,
			});

			sv.ui.ViewChua = Ti.UI.createView({
				height : Ti.UI.FILL,
				width : Ti.App.size(720),
			});

			sv.ui.viewRow = Ti.UI.createView({
				height : sv.vari.row_height,
				top : 0,
				width : Ti.App.size(720),
				borderColor : Ti.App.Color.xanhnhat,
				borderWidth : set_border(i, sv),
				left : 0,
				bottom : 1,
			});

			sv.ui.lbl_tennc = Ti.UI.createLabel({
				left : Ti.App.size(120),
				text : sv.arr.data[i].title,
				width : Ti.App.size(260),
				font : {
					fontSize : Ti.App.size(30)
				},
				color : 'black'
			});

			sv.ui.lbl_co = Titanium.UI.createImageView({
				width : Ti.App.size(65),
				height : Ti.App.size(45),
				image : '/assets/images/icon/0' + (i + 1) + '.png',
				left : Ti.App.size(40)
			});

			sv.ui.lbl_tyle = Titanium.UI.createLabel({
				width : Ti.App.size(95),
				// height : Ti.App.size(100),
				text : 'Tỷ lệ',
				font : {
					fontSize : Ti.App.size(25)
				},
				left : Ti.App.size(475),
				color : 'black'
			});

			sv.ui.lbl_ck = Titanium.UI.createLabel({
				width : Ti.App.size(70),
				// height : Ti.App.size(100),
				left : Ti.App.size(570),
				text : 'C/K',
				font : {
					fontSize : Ti.App.size(25)
				},
				color : 'black'
			});

			sv.ui.arrow = Titanium.UI.createImageView({
				width : Ti.App.size(20),
				height : Ti.App.size(40),
				image : '/assets/images/icon/arrow-left.png',
				transform : sv.vari.trans2,
				top : Ti.App.size(20),
				left : Ti.App.size(650)
			});

			//////////////
			sv.ui.viewBack = Ti.UI.createView({
				left : 0,
				height : Ti.App.size(570),
				top : sv.vari.row_height,
				width : Ti.App.size(720),
				backgroundGradient : {
					type : 'linear',
					colors : [{
						color : Ti.App.Color.superwhite,
						position : 0.5
					}, {
						color : Ti.App.Color.superwhite,
						position : 0.5
					}]
				},
				bottom : 1
			});
			sv.ui.row.add(sv.ui.viewRow);
			sv.ui.viewRow.add(sv.ui.lbl_tennc);
			sv.ui.viewRow.add(sv.ui.lbl_co);
			sv.ui.viewRow.add(sv.ui.lbl_tyle);
			sv.ui.viewRow.add(sv.ui.lbl_ck);
			sv.ui.viewRow.add(sv.ui.arrow);
			sv.ui.row.add(sv.ui.viewBack);
			for ( j = 0; j < 3; j++) {
				sv.ui.vThongtinTD = tao_list(Ti.App.size(190 * j));
				sv.ui.vThongtinTD.setParam(sv.arr.param1[0]);
				sv.ui.viewBack.add(sv.ui.vThongtinTD);
			};
			sv.arr.rows.push(sv.ui.row);
			sv.arr.arrow.push(sv.ui.arrow);
		}
	} else {
		if (Ti.Platform.osname == 'iphone' || Ti.Platform.osname == 'ipad') {
			for (var i = 0; i < sv.arr.data.length; i++) {
				sv.ui.row = Ti.UI.createTableViewRow({
					expanded : false,
					height : sv.vari.row_height,
					width : Ti.App.size(720),
					id : i,
					backgroundColor : Ti.App.Color.magenta,
				});

				sv.ui.ViewChua = Ti.UI.createView({
					height : Ti.UI.FILL,
					width : Ti.App.size(720),
				});

				sv.ui.viewRow = Ti.UI.createView({
					height : sv.vari.row_height - 1,
					top : 0,
					width : Ti.App.size(720),
					borderColor : Ti.App.Color.xanhnhat,
					borderWidth : set_border(i, sv),
					left : 0,
					bottom : 1,
				});

				sv.ui.lbl_tennc = Ti.UI.createLabel({
					// height : Ti.UI.SIZE,
					left : Ti.App.size(120),
					text : sv.arr.data[i].title,
					width : Ti.App.size(720),
					font : {
						fontSize : Ti.App.size(30)
					},
					color : 'black'
				});

				sv.ui.lbl_co = Titanium.UI.createImageView({
					width : Ti.App.size(65),
					height : Ti.App.size(45),
					image : '/assets/images/icon/0' + (i + 1) + '.png',
					left : Ti.App.size(40)
				});

				sv.ui.lbl_tyle = Titanium.UI.createLabel({
					width : Ti.App.size(95),
					height : Ti.App.size(100),
					text : 'Tỷ lệ',
					font : {
						fontSize : Ti.App.size(25)
					},
					left : Ti.App.size(475),
					color : 'black'
				});

				sv.ui.lbl_ck = Titanium.UI.createLabel({
					width : Ti.App.size(70),
					height : Ti.App.size(100),
					left : Ti.App.size(570),
					text : 'C/K',
					font : {
						fontSize : Ti.App.size(25)
					},
					color : 'black'
				});

				sv.ui.arrow = Titanium.UI.createImageView({
					width : Ti.App.size(20),
					height : Ti.App.size(40),
					image : '/assets/images/icon/arrow-left.png',
					transform : sv.vari.trans2,
					top : Ti.App.size(20),
					left : Ti.App.size(650)
				});

				//////////////
				sv.ui.viewBack = Ti.UI.createView({
					left : 0,
					height : Ti.App.size(570),
					top : sv.vari.row_height,
					width : Ti.App.size(720),
					backgroundGradient : {
						type : 'linear',
						colors : [{
							color : Ti.App.Color.superwhite,
							position : 0.5
						}, {
							color : Ti.App.Color.superwhite,
							position : 0.5
						}]
					},
					// bottom:1
				});
				sv.ui.row.add(sv.ui.ViewChua);
				sv.ui.ViewChua.add(sv.ui.viewRow);
				sv.ui.viewRow.add(sv.ui.lbl_tennc);
				sv.ui.viewRow.add(sv.ui.lbl_co);
				sv.ui.viewRow.add(sv.ui.lbl_tyle);
				sv.ui.viewRow.add(sv.ui.lbl_ck);
				sv.ui.viewRow.add(sv.ui.arrow);
				sv.ui.ViewChua.add(sv.ui.viewBack);
				for ( j = 0; j < 3; j++) {
					sv.ui.vThongtinTD = tao_list(Ti.App.size(190 * j));
					sv.ui.vThongtinTD.setParam(sv.arr.param1[0]);
					sv.ui.viewBack.add(sv.ui.vThongtinTD);
				}
				sv.arr.rows.push(sv.ui.row);
				sv.arr.arrow.push(sv.ui.arrow);
			}
		}
	}
	tao_event(sv);
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.arr.rows[i].addEventListener('click', sv.fu.event_clickrow[i]);
	}
	sv.ui.tbl = Ti.UI.createTableView({
		data : sv.arr.rows,
		// height : Ti.UI.FILL,
		width : Ti.App.size(720),
		top : 0,
		separatorColor : 'transparent',
		backgroundColor : Ti.App.Color.magenta,
	});
	sv.ui.ViewTong.add(sv.ui.tbl);

};
function tao_event(sv) {
	sv.fu.event_clickrow = [];
	sv.fu.eventClickIconLeft = function(e) {
		sv.ui.Window.close();
	};
	for (var i = 0; i < sv.arr.data.length; i++) {
		sv.fu.event_clickrow[i] = function(e) {
			if (e.row.expanded) {
				e.row.expanded = false;
				e.row.setHeight(Ti.App.size(100));
				sv.arr.arrow[e.row.id].transform = sv.vari.trans2;
				sv.arr.arrow[e.row.id].top = Ti.App.size(25);

			} else {
				e.row.expanded = true;
				e.row.setHeight(Ti.App.size(670));
				sv.arr.arrow[e.row.id].transform = sv.vari.trans1;
				sv.arr.arrow[e.row.id].top = Ti.App.size(20);
			}
		};
	}

	sv.fu.eventOpenWindow = function() {
		Ti.API.info('Opened window');
	};

	sv.fu.eventCloseWindow = function(e) {
		for (var i = 0; i < sv.arr.data.length; i++) {
			sv.arr.rows[i].expanded = false;
			sv.arr.arrow[i].transform = sv.vari.trans2;
			sv.arr.arrow[i].top = Ti.App.size(25);
			sv.arr.rows[i].setHeight(Ti.App.size(100));
			sv.arr.rows[i].removeEventListener('click', sv.fu.event_clickrow[i]);
		}

		sv.vari = null;
		sv.arr = null;
		sv.ui = null;
		sv.fu = null;
		sv.test = null;
		sv = null;

		Ti.API.info('Closed window, sv=' + sv);
	};
};
function set_border(i, sv) {
	if (i == 0 || i % 2 == 0 || i == (sv.arr.data.length - 1)) {
		return 1;
	} else {
		return 0;
	}
};

function tao_list(_top) {
	var viewtong = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(190),
		backgroundColor : 'transparent',
		left : 0,
		top : _top,
		borderColor : Ti.App.Color.xanhnhat,
		borderWidth : 1
	});
	var hang1 = Ti.UI.createView({
		width : Ti.App.size(720),
		height : Ti.App.size(70),
		backgroundColor : 'transparent',
		left : 0,
		top : 0,
	});
	var hang2 = Ti.UI.createLabel({
		width : Ti.App.size(340),
		// height : Ti.App.size(50),
		left : Ti.App.size(140),
		text : 'VS',
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left',
		top : Ti.App.size(70)
	});
	var hang3 = Ti.UI.createView({
		top : Ti.App.size(120),
		width : Ti.App.size(720),
		height : Ti.App.size(50),
		left : 0,
		backgroundColor : 'transparent',
	});
	var lbl_thoigian = Ti.UI.createLabel({
		left : Ti.App.size(35),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		// height : Ti.App.size(70),
		width : Ti.App.size(85),
		textAlign : 'left',
	});

	var lbl_tendoi1 = Ti.UI.createLabel({
		width : Ti.App.size(340),
		// height : Ti.App.size(70),
		left : Ti.App.size(140),
		color : Ti.App.Color.nauden,
		textAlign : 'left',
		font : {
			fontSize : Ti.App.size(30)
		},
	});

	var lbl_tyle1 = Ti.UI.createLabel({
		width : Ti.App.size(40),
		left : Ti.App.size(480),
		// height : Ti.App.size(70),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left',
	});

	var lbl_ck1 = Ti.UI.createLabel({
		left : Ti.App.size(620),
		width : Ti.App.size(75),
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.brown,
				position : 0.5
			}, {
				color : Ti.App.Color.brown,
				position : 0.50
			}]
		},
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		height : Ti.App.size(40),
	});

	///

	///
	var lbl_thoigian3 = Ti.UI.createLabel({
		left : Ti.App.size(35),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden,
		// height : Ti.App.size(70),
		width : Ti.App.size(85),
		textAlign : 'left',
	});

	var lbl_tendoi2 = Ti.UI.createLabel({
		width : Ti.App.size(340),
		// height : Ti.App.size(70),
		left : Ti.App.size(140),
		color : Ti.App.Color.nauden,
		textAlign : 'left',
		font : {
			fontSize : Ti.App.size(30)
		},
	});

	var lbl_tyle2 = Ti.UI.createLabel({
		width : Ti.App.size(40),
		left : Ti.App.size(480),
		// height : Ti.App.size(70),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left',
	});

	var lbl_tyle3 = Ti.UI.createLabel({
		width : Ti.App.size(60),
		left : Ti.App.size(540),
		// height : Ti.App.size(70),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		textAlign : 'left',
	});

	var lbl_ck2 = Ti.UI.createLabel({
		left : Ti.App.size(620),
		width : Ti.App.size(75),
		backgroundGradient : {
			type : 'linear',
			colors : [{
				color : Ti.App.Color.brown,
				position : 0.5
			}, {
				color : Ti.App.Color.brown,
				position : 0.50
			}]
		},
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.superwhite,
		textAlign : 'center',
		height : Ti.App.size(40),
	});
	hang1.add(lbl_thoigian);
	hang1.add(lbl_tendoi1);
	hang1.add(lbl_tyle1);
	hang1.add(lbl_ck1);
	hang3.add(lbl_ck2);
	hang3.add(lbl_thoigian3);
	hang3.add(lbl_tendoi2);
	hang3.add(lbl_tyle2);
	hang3.add(lbl_tyle3);
	viewtong.add(hang1);
	viewtong.add(hang2);
	viewtong.add(hang3);
	viewtong.setParam = function(param1) {
		lbl_tyle1.text = param1.tyle[0];
		lbl_tendoi1.text = param1.tendoi1;
		lbl_thoigian.text = param1.thoigian;
		lbl_ck1.text = param1.ck[0];
		lbl_thoigian3.text = param1.ngay;
		lbl_tendoi2.text = param1.tendoi2;
		lbl_tyle2.text = param1.tyle[1];
		lbl_tyle3.text = param1.tyle[2];
		lbl_ck2.text = param1.ck[1];
	};
	return viewtong;
}
