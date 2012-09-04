// temporary, need to change this to an object too (probably)

var LevelManager = function() {
    var _blocks = [];
    var _activeBlockIndex = -1;

    var getBlockOrder = function() {
	var order = [];
	var i, index;

	for ( i = 0; i < _blocks.length; i += 1 ) {
	    order.push( getBlock( i ).getName() );
	}

	console.log("Order is " + order);
    };

    var getBlock = function(index) {
	var i, pos;

	for ( i = 0; i < _blocks.length; i += 1 ) {
	    pos =_blocks[i].getPos();
	    if ( index === pos[1] * 4 + pos[0] ) {
		return _blocks[i];
	    }
	}

	throw "Block with index " + index + " not found.";
    };

    var setActiveBlock = function(pos) {
	var index = pos[1] * 4 + pos[0];
	if ( index !== _activeBlockIndex ) {
	    if ( _activeBlockIndex != -1 ) {
		getBlock(_activeBlockIndex).deactivate();
	    }
	    getBlock(index).activate();
	    _activeBlockIndex = index;
	}
    };

    var getNeighbours = function(index) {
	var neighbours = [];
	if ( index % 4 != 0 ) {
	    neighbours.push( index - 1 );
	}
	if ( index % 4 != 3 ) {
	    neighbours.push( index + 1 );
	}
	if ( index > 3 ) {
	    neighbours.push( index - 4 );
	}
	if ( index < 12 ) {
	    neighbours.push( index + 4 );
	}

	return neighbours;
    };

    var swapBlocks = function(index1, index2) {
	var block1 = getBlock(index1);
	var block2 = getBlock(index2);
	var tempPos = block1.getPos();

	block1.setPos( [(index2 % 4), Math.floor(index2 / 4)] );
	block2.setPos( tempPos );
    };

    var clickedOnBlock = function(pos) {
	var index = pos[1] * 4 + pos[0];
	var neighbours = getNeighbours( index );
	var i;

	for ( i = 0; i < neighbours.length; i += 1 ) {
	    if ( getBlock(neighbours[i]).isEmpty() ) {
		swapBlocks( neighbours[i], index );
		break;
	    }
	}

	getBlockOrder();
    };

    var createLevel = function(gs, blocks, order) {
	var i, index;
	var block;
	var data = {
	    offset: gs.width / 8,
	    setActiveBlock: setActiveBlock,
	    clickedOnBlock: clickedOnBlock
	};

	// check length of order array
	if ( order.length < 16 ) {
	    alert("You need to specify the order for all 16 blocks");
	    return;
	}

	// detect duplicates
	var sortedArray = order.slice();
	sortedArray.sort(function( a, b ) {
	    return parseInt(a) > parseInt(b);
	});
	for ( i = 0; i < sortedArray.length - 1; i += 1 ) {
	    if ( sortedArray[i + 1] == sortedArray[i]) {
		alert( sortedArray[i] + " appears twice in the list." );
		return;
	    }
	}

	for ( i = 0; i < order.length; i += 1 ) {
	    //index = parseInt( blocks[order[i]].name.split( "block" )[1] );
	    index = order[i];
	    blocks[index].pos = [(i % 4), Math.floor( i / 4 )];
	    // console.log("Position for " + blocks[index].name + " with index " + index + " in order " + i + " is " + blocks[index].pos);

	    block = Block( data, blocks[index] );
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