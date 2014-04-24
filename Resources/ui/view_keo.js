//tg,ten2doi,ty le 1,tyle2,tyle3

module.exports = function(_top, tg, tendoi, tyle1, tyle2, tyle3) {
	var view_keo = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(380),
		left : Ti.App.size(40),
		borderColor : Ti.App.Color.xanhnhat,
		backgroundColor : Ti.App.Color.superwhite,
		borderWidth : 1,
		top : _top
	});
	for (var i = 0; i < 3; i++) {
		var line = Ti.UI.createView({
			width : set_widthline(i),
			height : 1,
			top : set_top(i),
			backgroundColor : Ti.App.Color.xanhnhat
		});
		view_keo.add(line);
	}
	var hang1 = Ti.UI.createView({
		top : 0,
		width : Ti.App.size(640),
		height : Ti.App.size(75),
		backgroundColor : 'transparent'
	});

	var lbldongho = Ti.UI.createImageView({
		image : '/assets/images/icon/icon-time.png',
		top : Ti.App.size(8),
		left : Ti.App.size(25),
		width : Ti.App.size(25),
		height : Ti.App.size(25),
	});
	hang1.add(lbldongho);
	var lbltg = Ti.UI.createLabel({
		text : tg + "'",
		top : Ti.App.size(40),
		left : Ti.App.size(20),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden
	});
	hang1.add(lbltg);
	var linehang = Ti.UI.createView({
		width : 1,
		height : Ti.App.size(60),
		bottom : 0,
		left : Ti.App.size(80),
		backgroundColor : Ti.App.Color.xanhnhat
	});
	hang1.add(linehang);
	var lbl_tendoi = Ti.UI.createLabel({
		text : tendoi[0] + '  vs  ' + tendoi[1],
		font : {
			fontSize : Ti.App.size(30)
		},
		left : Ti.App.size(80),
		textAlign : 'center',
		width : Ti.App.size(560)
	});
	hang1.add(lbl_tendoi);
	view_keo.add(hang1);
	//
	var hang2 = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(100),
		top : Ti.App.size(75)
	});
	var lbl_nc1 = Ti.UI.createLabel({
		text : 'Châu Á',
		left : Ti.App.size(10),
		font : {
			fontSize : Ti.App.size(30)
		},
		color : Ti.App.Color.nauden
	});
	hang2.add(lbl_nc1);
	var tyle11 = Ti.UI.createLabel({
		text : tyle1[0],
		left : Ti.App.size(200),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.gray,
		top : Ti.App.size(10)
	});
	hang2.add(tyle11);
	var tyle12 = Ti.UI.createLabel({
		text : tyle1[1],
		left : Ti.App.size(200),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.red,
		top : Ti.App.size(60)
	});
	hang2.add(tyle12);
	var tyle13 = Ti.UI.createLabel({
		text : tyle1[2],
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		top : Ti.App.size(60),
	});
	hang2.add(tyle13);
	view_keo.add(hang2);
	//
	var hang3 = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(100),
		top : Ti.App.size(175)
	});
	var lbl_nc2 = Ti.UI.createLabel({
		text : "Tài Xỉu",
		left : Ti.App.size(10),
		font : {
			fontSize : Ti.App.size(30),
		},
		color : Ti.App.Color.nauden
	});
	hang3.add(lbl_nc2);
	var tyle21 = Ti.UI.createLabel({
		text : tyle2[0],
		left : Ti.App.size(200),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.gray,
		top : Ti.App.size(10)
	});
	hang3.add(tyle21);
	var tyle22 = Ti.UI.createLabel({
		text : tyle2[1],
		left : Ti.App.size(200),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.red,
		top : Ti.App.size(60)
	});
	hang3.add(tyle22);
	var tyle33 = Ti.UI.createLabel({
		text : tyle2[2],
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
		top : Ti.App.size(60),
	});
	hang3.add(tyle33);
		var tyle24 = Ti.UI.createLabel({
		text : tyle2[3],
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.brown,
		top : Ti.App.size(10)
	});
	hang3.add(tyle24);
	view_keo.add(hang3);
	//
	var hang4 = Ti.UI.createView({
		width : Ti.App.size(640),
		height : Ti.App.size(100),
		top : Ti.App.size(275)
	});
	var lbl_nc3 = Ti.UI.createLabel({
		text :"Châu Âu",
		left : Ti.App.size(10),
		font : {
			fontSize : Ti.App.size(30),
		},
		color : Ti.App.Color.nauden
	});
	hang4.add(lbl_nc3);
	var tyle31 = Ti.UI.createLabel({
		text : tyle3[0],
		left : Ti.App.size(200),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
	});
	hang4.add(tyle31);
	var tyle32 = Ti.UI.createLabel({
		text : tyle3[1],
		left : Ti.App.size(355),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
	});
	hang4.add(tyle32);
	var tyle33 = Ti.UI.createLabel({
		text : tyle3[2],
		left : Ti.App.size(500),
		font : {
			fontSize : Ti.App.size(30),
			fontWeight : 'bold'
		},
		color : Ti.App.Color.nauden,
	});
	hang4.add(tyle33);
	view_keo.add(hang4);
	
	return view_keo;
};
function set_widthline(i) {
	if (i == 0) {
		return Ti.App.size(640);
	} else {
		return Ti.App.size(610);
	}
};

function set_top(i) {
	if (i == 0) {
		return Ti.App.size(75);
	} else {
		if (i == 1)
			return Ti.App.size(175);
		if (i == 2)
			return Ti.App.size(275);
	}
}
