var Block = function(params) {
    var pos = params.pos;
    var targets = params.targets;

    var p = new Sprite(params.sprite.anchor,
		       params.sprite.frames,
		       function() {
			   p.action(params.sprite.default);
		       });
    var active = false;

    var get_name = function() {
	return params.name;
    };

    var pointerBox = function() {
	var aabb = p.aabb(pos);
	// console.log("AABB for " + params.name + " is " + aabb);
	var pb = [aabb[0], aabb[1], aabb[0] + aabb[2], aabb[1] + aabb[3]];
	// console.log("PB for " + params.name + " is " + pb);
	return pb;
    };

    var pointerMove = function() {
	console.log("pointerMove: " + get_name());
    };

    var pointerDown = function() {
	console.log("pointerDown: " + get_name());
    };

    var pointerUp = function() {
	console.log("pointerUp: " + get_name());
    };

    var draw = function(c) {
	p.draw(c, pos);
    };

    return {
	get_name: get_name,
	draw: draw,

	// mouse related
	pointerBox: pointerBox,
	pointerMove: pointerMove,
	pointerDown: pointerDown,
	pointerUp: pointerUp
    };
};