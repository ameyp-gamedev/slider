var Block = function(spec, params) {
    var pos = [2 * spec.offset * params.pos[0] + spec.offset,
	       2 * spec.offset * params.pos[1] + spec.offset];
    var targets = params.targets;

    var p = new Sprite(params.sprite.anchor,
		       params.sprite.frames,
		       function() {
			   p.action(params.sprite.default);
		       });

    var activate = function() {
    };

    var deactivate = function() {
    };

    var getName = function() {
	return params.name;
    };

    var pointerBox = function() {
	var aabb = p.aabb(pos);
	return [aabb[0], aabb[1], aabb[0] + aabb[2], aabb[1] + aabb[3]];
    };

    var getPosIndex = function() {
	return params.pos;
    };

    var pointerMove = function() {
	spec.setActiveBlock(params.pos);
    };

    var pointerDown = function() {
    };

    var pointerUp = function() {
    };

    var draw = function(c) {
	p.draw(c, pos);
    };

    return {
	// entity related
	getName: getName,
	getPosIndex: getPosIndex,
	draw: draw,

	// mouse related
	pointerBox: pointerBox,
	pointerMove: pointerMove,
	pointerDown: pointerDown,
	pointerUp: pointerUp,

	// helpers
	activate: activate,
	deactivate: deactivate
    };
};