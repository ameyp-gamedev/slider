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
	console.log(params.name + " is active.");
    };

    var deactivate = function() {
    };

    var isEmpty = function() {
	return params.empty;
    };

    var getName = function() {
	return params.name;
    };

    var getPos = function() {
	return params.pos;
    };

    function setPos(newPos) {
	params.pos = newPos;
	pos = [2 * spec.offset * params.pos[0] + spec.offset,
	       2 * spec.offset * params.pos[1] + spec.offset];
    };

    var pointerBox = function() {
	var aabb = p.aabb(pos);
	return [aabb[0], aabb[1], aabb[0] + aabb[2], aabb[1] + aabb[3]];
    };

    var pointerMove = function() {
	spec.setActiveBlock( getPos() );
    };

    var pointerDown = function() {
    };

    var pointerUp = function() {
	spec.clickedOnBlock( getPos() );
    };

    var draw = function(c) {
	p.draw(c, pos);
    };

    return {
	// entity related
	getName: getName,
	getPos: getPos,
	setPos: setPos,
	draw: draw,

	// mouse related
	pointerBox: pointerBox,
	pointerMove: pointerMove,
	pointerDown: pointerDown,
	pointerUp: pointerUp,

	// helpers
	activate: activate,
	deactivate: deactivate,
	isEmpty: isEmpty
    };
};