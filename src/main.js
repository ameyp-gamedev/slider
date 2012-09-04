var startGame = function () {
    var gs = new JSGameSoup("surface", 30);

    var levelData = [{
	name: "block0",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block0.png", 0]],
		active: [["img/block0.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block1",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block1.png", 0]],
		active: [["img/block1.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block2",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block2.png", 0]],
		active: [["img/block2.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block3",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block3.png", 0]],
		active: [["img/block3.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block4",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block4.png", 0]],
		active: [["img/block4.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block5",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block5.png", 0]],
		active: [["img/block5.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block6",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block6.png", 0]],
		active: [["img/block6.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block7",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block7.png", 0]],
		active: [["img/block7.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block8",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block8.png", 0]],
		active: [["img/block8.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block9",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block9.png", 0]],
		active: [["img/block9.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block10",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block10.png", 0]],
		active: [["img/block10.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block11",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block11.png", 0]],
		active: [["img/block11.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block12",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block12.png", 0]],
		active: [["img/block12.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block13",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block13.png", 0]],
		active: [["img/block13.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block14",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block14.png", 0]],
		active: [["img/block14.png", 0]]
	    },
	default: "inactive"
	},
	empty: false
    }, {
	name: "block15",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/empty.png", 0]],
		active: [["img/empty.png", 0]]
	    },
	default: "inactive"
	},
	empty: true
    }];

    // loadSprites();
    var order = [13, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 0, 14];
    LevelManager.createLevel(gs, levelData, order);
};

var loadSprites = function() {
    Sprite.preload([
	"img/block1.png",
	"img/block2.png",
	"img/block3.png",
	"img/block4.png",
	"img/block5.png",
	"img/block6.png",
	"img/block7.png",
	"img/block8.png",
	"img/block9.png",
	"img/block10.png",
	"img/block11.png",
	"img/block12.png",
	"img/block13.png",
	"img/block14.png",
	"img/block15.png",
	"img/block16.png"
    ]);
};