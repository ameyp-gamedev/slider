var startGame = function () {
    var gs = new JSGameSoup("surface", 30);

    var levelData = [{
	name: "block0",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block0.png", 0]],
		inactive: [["img/block0.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block1",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block1.png", 0]],
		inactive: [["img/block1.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block2",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block2.png", 0]],
		inactive: [["img/block2.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block3",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block3.png", 0]],
		inactive: [["img/block3.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block4",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block4.png", 0]],
		inactive: [["img/block4.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block5",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block5.png", 0]],
		inactive: [["img/block5.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block6",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block6.png", 0]],
		inactive: [["img/block6.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block7",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block7.png", 0]],
		inactive: [["img/block7.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block8",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block8.png", 0]],
		inactive: [["img/block8.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block9",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block9.png", 0]],
		inactive: [["img/block9.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block10",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block10.png", 0]],
		inactive: [["img/block10.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block11",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block11.png", 0]],
		inactive: [["img/block11.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block12",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block12.png", 0]],
		inactive: [["img/block12.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block13",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block13.png", 0]],
		inactive: [["img/block13.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block14",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block14.png", 0]],
		inactive: [["img/block14.png", 0]]
	    },
	default: "inactive"
	}
    }, {
	name: "block15",
	sprite: {
	    anchor: ["center", "center"],
	    frames: {
		inactive: [["img/block15.png", 0]],
		inactive: [["img/block15.png", 0]]
	    },
	default: "inactive"
	}
    }];

    // loadSprites();
    createLevel(gs, levelData);
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