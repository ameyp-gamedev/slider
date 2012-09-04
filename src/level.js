// temporary, need to change this to an object too (probably)

var createLevel = function(gs, blocks) {
    var _blocks = [];
    var i, index;
    var block;
    var offset = gs.width / 8;

    for ( i = 0; i < blocks.length; i += 1 ) {
	index = parseInt(blocks[i].name.split("block")[1]);
	// blocks[i].pos = [(index % 4),Math.floor(index / 4)];
	blocks[i].pos = [2 * offset * (index % 4) + offset,
			 2 * offset * Math.floor(index / 4) + offset];
	// console.log("Position for " + blocks[i].name + " with index " + index + " is " + blocks[i].pos);

	block = Block( blocks[i] );
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
