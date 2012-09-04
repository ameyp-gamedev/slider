// temporary, need to change this to an object too (probably)

var LevelManager = function() {
    var _blocks = [];
    var _activeBlockIndex = -1;

    var setActiveBlock = function(pos) {
	var index = pos[1] * 4 + pos[0];
	if ( index !== _activeBlockIndex ) {
	    if ( _activeBlockIndex != -1 ) {
		_blocks[_activeBlockIndex].deactivate();
	    }
	    _blocks[index].activate();
	    _activeBlockIndex = index;
	}
    };

    var createLevel = function(gs, blocks) {
	var i, index;
	var block;
	var data = {
	    offset: gs.width / 8,
	    setActiveBlock: setActiveBlock
	};

	for ( i = 0; i < blocks.length; i += 1 ) {
	    index = parseInt(blocks[i].name.split("block")[1]);
	    blocks[i].pos = [(index % 4),Math.floor(index / 4)];
	    // console.log("Position for " + blocks[i].name + " with index " + index + " is " + blocks[i].pos);

	    block = Block( data, blocks[i] );
	    _blocks.push( block );

	    gs.addEntity( block );
	}
	gs.launch();

	var update = function() {
	};

	gs.addEntity({
	    update: update
	});
    };

    return {
	createLevel: createLevel
    };
}();