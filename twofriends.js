(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"twofriends_atlas_", frames: [[0,0,6898,3189],[0,3191,931,414]]}
];


// symbols:



(lib.Bitmap19 = function() {
	this.initialize(ss["twofriends_atlas_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["twofriends_atlas_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("ישנן צרות גדולות יותר", "bold 300px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 368;
	this.text.lineWidth = 2412;
	this.text.parent = this;
	this.text.setTransform(131.764,18.6293,0.1012,0.1012);

	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(272.15,0,0.2923,0.2005,0,0,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(0,0,272.2,83), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8C362B").s().p("AkDbIQiLgGhKgUQhzgfg4hNQgqgzgOhXQgIgzAAhpIAA0zQAAjgAMhtQASi3A8iIQBPivCrirQA2g6AageQAvg1AUgtQAQgpAKhTQAJhQAQgnQAshrCShGQAlgTBdgkQBUgiArgWQBAFzAaC0QAYCyASBfQAdCUArB0QAWA6BACGQA5B3AYBJQAnCAAOChQAKCAgGCrQAAEZgsDnQgjDqh3EQQg5BqglA3Qg7BWhAAvQhnBJieAVQhIALhuAAQgyAAg5gDg");
	this.shape.setTransform(-38.0024,419.6006);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.8,245.8,141.6,347.7);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap19();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.2516,0.2516);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,1735.8,802.5), null);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("התחלה", "bold 50px 'Calibri'", "#FFFFFF");
	this.text.lineHeight = 63;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(38,-0.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.5,1,1).p("Aw2kNMAhtAAAIAAIbMghtAAAg");
	this.shape.setTransform(107.925,26.975);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#285102").s().p("Aw2EOIAAobMAhtAAAIAAIbg");
	this.shape_1.setTransform(107.925,26.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EDF7A6").s().p("Aw2EOIAAobMAhtAAAIAAIbg");
	this.shape_2.setTransform(107.925,26.975);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("Aw2EOIAAobMAhtAAAIAAIbg");
	this.shape_3.setTransform(107.925,26.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]}).to({state:[{t:this.shape_2},{t:this.shape},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.shape},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-2.8,217.9,69.3);


(lib.shoe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#98362B").ss(0.5,1,1).p("AgRATQAHgaAcgL");
	this.shape.setTransform(2.225,1.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AAogRIACADAAogRQACABACAAQgBACgBAAIADAFQABABABACQAYAegJAdQgEAJgPgBQgygWg4gtIAEgQQAjAgAoAWQACgQAbgZAAegbQgUgEgEASQAMgBAIgHIAEAGQgIACgDANQAPgGAIgIAAagVQACgDACgDIg1ghAAegPQAEgDAGABAAQAgQAWAMAYAJ");
	this.shape_1.setTransform(6.4459,6.1264);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EF2D35").s().p("AgzgIQAHgbAcgLIA1AhQgUgDgEAQQANAAAHgHIAEAGQgIABgDAOQAPgHAJgHIACAFQgaAZgCARQgogWgjghg");
	this.shape_2.setTransform(5.675,4.675);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AArAtQgygWg4gtIAEgQQAjAhAoAVQAWAMAYAJQgEAIgNAAIgCAAgAA+AlIAAAAgAAQAQQACgQAbgZIACADQAYAegJAdQgYgJgWgMgAAegfQAEgDAGABIACADIgCgDIAEABIgCACQgIAIgPAGQADgNAIgCgAAegrIgEAGQgIAHgMABQAEgSAUAEg");
	this.shape_3.setTransform(6.4459,7.7472);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,14.9,14.3);


(lib.runingchild = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#432D12").ss(0.5,1,1).p("ANYoVQATAqAQAvQAZBLAEADQBKIQiNGLAgBN1QEVANFnhAQAugIAvgJQBMh6AxiKAgBN1QvggwAywLQWPydF4NOAgBN1Qn0w3LjncQFrjUD/FdAOYluQr+n3BeUWQEBKbFcof");
	this.shape.setTransform(1215.9535,1102.5302);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#263238").ss(0.5,1,1).p("ACHjqQOiDIHTh0QCkEFkEDKQpMBkpMj8Qu9mguCJgQPGvgL8GVQA/AhA+Ar");
	this.shape_1.setTransform(1215.5717,970.5336);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#C67E4E").ss(0.5,1,1).p("EA2VA0RQMxuvE/w2QANgqAMgpEBIzASPQCXoeA8mpQdYkp2Y72Qg60DF6tNEhcwg3WQOrjwKsSPEhO5ge3QtFwAOli+Eg75gP3UAEsA4iBjTAV9QFZk1EdlF");
	this.shape_2.setTransform(895.3702,1448.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(0.5,1,1).p("EBvcATgQliC6meBNQM4pVEoq7QvhKEwnDMQSsqjP0y8Ug9QAT6g9PgHaUgk+AEkgJiBLbUgXBgxPgfjAamQhfaKPyL/IrvAAUgc2hItAQ2hkyQCkhZCkhVQABgBAAAAEBvcATgQk8R6ssSdUAwMgY1gJUhoCUiChhBQhutA5JEBvcATgQGSjTFGleEhsjhRGIAAgBIAAAAIABAAQIWq/IpjSQwDlAg9TREhsjhRGIAAgBEhsjhRHQq1xfuzROQKPkJPZEagEhZ8BfHIBRAAEhZ8BfHQODU0VutU");
	this.shape_3.setTransform(858.8263,689.9084);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#660000").s().p("Al2TzIgIgGIgGgIIgDgHIgEgHIgHgIIgPgPIgIgIIgDgHIgGgPIgGgPIAAgGQgugLgugIQgFgegEgfQgCgPAAgPIAAgeIAAgeQgKgPgNgLQgqgigtgeIgegeIg8g9QAAgPgFgNQgFgRgKgPQgKgPgNgMQgSgSgUgPIAAgeIAAg8IAAgfQAAgPgFgMQgPghgUgeIAAgeIAAg8IAAgeQAAgPgFgNQgPghgUgeIAAi0IAAktIAAiWIAfgdIAngfIAJg9QABgPAAgPIAAgeIAAgeQAFgPAHgPIAbg9QAHgOAFgPIAegfIAegeQAFgPACgPQADgPAAgPQAegtAggsQAXgfAbgcQBLhNBUhCIDTgeQAPgPARgMQASgNAUgKQEwg/EVgcQAZAFAWALQATAJAPAPIC0AUQAPAfARAdQAIAQALAPQAKAPAGAQQAEAJAAAKIAyAUQAKAPAFARQAKAcAFAeIATAcIAXAfQANARAGASQAEAMgFAPQgUAAgSgHQgMgEgMgHIgYBTQk/Q0swOvIgBAFQgBAEgCAEIgJANIgFACIgIABIgCABIgNABQgHgDgHgEg");
	this.shape_4.setTransform(1275.1264,1658.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AlXEeQhe0WL9H3QBKIQiNGLQicD0iIAAQiqAAiOlwg");
	this.shape_5.setTransform(1275.1549,1117.2092);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AuCjFQWPydF4NOQj/ldlrDUQrjHcHzQ3QvfgwAywLg");
	this.shape_6.setTransform(1211.48,1102.4204);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#592500").s().p("AlnMxQn1w3LlncQFpjUEAFdQASAqAQAvQAaBLAEADQr+n3BfUWQEAKbFcofQgyCKhLB6IhdARQkqA1jyAAQgxAAgvgCg");
	this.shape_7.setTransform(1251.8073,1109.329);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F9AF80").s().p("Eg9pASgQ1tNUuD00IBQAAIhQAAQvzr+Bf6KUAfjgamAXBAxPUAJjhLbAk9gElUA9PAHbA9QgT7QvzS9ytKjQQojLPgqFQknK7s5JVQGehNFji5Qk9R5ssSdQl6NNA6UCQWYb29YEqQg8GpiYIeIgTgdQgFgegJgcQgGgRgKgPIgygTQAAgLgDgIQgHgRgKgPQgKgPgJgPQgQgegPgfIi1gUQgPgOgSgKQgWgLgZgFQkWAckwA/QgVAKgSANQgRAMgPAPIjTAeQhUBChKBNQgbAcgXAfQggAtgfAtQAAAPgCAOQgDAPgFAQIgeAeIgeAeQgFAPgGAPIgcA8QgGAPgFAPIAAAeIAAAeQAAAQgCAPIgIA8IgnAfIgfAdIAACXIAAEtIAAC0QAUAfAOAgQAGANAAAPIAAAeIAAA8IAAAfQAUAeAOAgQAGANAAAPIAAAeIAAA8IAAAeQAUAPASASQAMANAKAPQAKAPAGAQQAEANAAAQIA8A8IAfAeQAtAeAqAjQANAKAKAQIAAAdIAAAeQAAAPACAQQADAeAFAeQAvAIAuALIAAAGIAFAPIAHAPIADAHIAHAIIAPAPIAIAIIAEAHIACAHIAGAIIAJAHQAGADAIADIAMgBIADAAQkdFFlZE1UhjTgV+gEsg4igEhQpADgQmMnjAAkqQAAlMHshlQnsBlAAFMQAAEqGMHjgEAhmgWvQgyQMPgAxQEWANFnhBIBdgRQBMh5AxiLQCNmLhKoRQgEgDgZhLQgQgvgTgqQidlhlTAAQnaAAs+KwgEhFJgGfIgDgFIgDgGIgCgDIgBgBIgEgHIAAgBIAAAAIgEgFQoxurrcAAIAAAAIAAAAQiYAAieAoIgDAAIADAAQCegoCYAAIAAAAIAAAAQLcAAIxOrIAEAFIAAAAIAAABIAEAHIABABIACADIADAGIADAFIAAAAgEAXWgivQOCphO+GhQJMD9JMhlQEEjKikkGQnTB0uijIQjeh1juAAQpJAAquLBg");
	this.shape_8.setTransform(906.5918,1228.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#636564").s().p("AszEJQOyxNK1ReQvXkaqQEJg");
	this.shape_9.setTransform(82,142.542);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#6A6A6A").s().p("AofHqQA9zQQCE/QooDToWK+g");
	this.shape_10.setTransform(218.45,121.7874);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#333333").s().p("Ehs1BldUgc2hIsAQ2hkzQCkhZClhVIABAAUButg5KCCgBBQUAJUBoCgwMAY1QMsycE9x6QljC5meBNQM5pVEnq7QvgKFwoDLQStqjPzy8Ug9QAT6g9PgHbUgk9AElgJjBLbUgXBgxPgfjAanQhfaJPzL/gEBoTAZ3QGSjTFFlfQlFFfmSDTgEAytAuhQA/AhA+ArQg+grg/ghQOiDJHTh1QCkEHkEDJQpMBlpMj9Qu+mhuCJhQPGvhL9GVg");
	this.shape_11.setTransform(904.5548,649.2898);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,1719.7,1851);


(lib.replay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("נגן שוב", "bold 50px 'Calibri'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 63;
	this.text.lineWidth = 160;
	this.text.parent = this;
	this.text.setTransform(109,-7.55);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#285102").s().p("Aw2EOIAAobMAhtAAAIAAIbg");
	this.shape.setTransform(108.025,21.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EDF7A6").s().p("Aw2EOIAAobMAhtAAAIAAIbg");
	this.shape_1.setTransform(108.025,27.325);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("Aw2EOIAAobMAhtAAAIAAIbg");
	this.shape_2.setTransform(107.925,26.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:109,y:-7.55,color:"#FFFFFF"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:109.1,y:-5.2,color:"#000000"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{x:108,y:-3.95,color:"#FFFFFF"}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-9.5,216,68.6);


(lib.open_handr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CE9F81").ss(0.5,1,1).p("AgCAAIAFAB");
	this.shape.setTransform(4.15,0.125);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CCA082").ss(0.5,1,1).p("AAXApQAOALAOgDQgBgcgfgWQAbAQASAUQAJgZglgeQAcAIgFgOQgHgMgKgIQgIgGgKgDQgUgIgZAAAgKAoQAIAPgJAIQgJgIgJgHQgCgDgCgBQgagZgFgXQgCgIABgIQABgGADgHQACgEADgEQAFgEAFgFQAJgIALgIAAXApQgKgJgKgQAgKAoQgEgDgDgHAAXApQAKAQgDAKQgIgDgJgDQgNgHgKgO");
	this.shape_1.setTransform(6.6214,6.65);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8C7A2").s().p("AANA9QgNgIgKgMQAIAOgJAHIgSgOIgEgFQgagYgFgWQgCgJABgIIAEgMIAFgIIAKgKIAUgQIAFADQAZAAAUAIQAKAEAIAFQAKAJAHALQAFAPgcgJQAlAegJAZQgSgUgbgQQAfAWABAcQgOACgOgKQgKgJgKgQQAKAQAKAJQAKAQgDAKIgRgGgAgKApQgEgEgDgGQADAGAEAEg");
	this.shape_2.setTransform(6.6214,6.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,15.3,15.3);


(lib.open_hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B96F48").ss(0.5,1,1).p("AgXhBIACABQAZAAAUAIQAKAEAIAGQAKAIAHALQAFAPgcgIQAlAdgJAZQgSgTgbgQQAfAVABAcQgOADgOgLQgKgJgKgQAgKAoQAIAOgJAIQgJgIgJgHQgCgCgCgCQgagZgFgWQgCgIABgIQABgHADgGQACgEADgEQAFgFAFgFQAJgHAKgHAgKAoQgEgEgDgGAAXAoQAKAQgDAKQgIgDgJgDQgNgHgKgN");
	this.shape.setTransform(6.6214,6.575);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F09A69").s().p("AANA8QgNgHgKgNQAIAOgJAIIgSgPIgEgEQgagZgFgWQgCgIABgIIAEgNIAFgIIAKgKIATgOIAEAAIACABQAZAAAUAIQAKAEAIAGQAKAIAHALQAFAPgcgIQAlAdgJAZQgSgTgbgQQAfAVABAcQgOADgOgLQgKgJgKgQQAKAQAKAJQAKAQgDAKIgRgGgAgKAoQgEgEgDgGQADAGAEAEg");
	this.shape_1.setTransform(6.6214,6.575);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,15.3,15.2);


(lib.LION = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgTikQAGgSAzgTQAXAFAWgBQATAAARgFQA8gSAjhMQg9ATg3AMQgWAEgWAEQAlAagIAiAAQj7QgRAiAnAQAAQj7QggAEgfABQgHAAgHAAABikJQAlAZgQAmAA2kBQgTADgTADAixEpIgkgfQAQg5AtgZ");
	this.shape.setTransform(4.75,-58.5875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#51140C").ss(2,1,1).p("AibtOQBaBpgMBeQCOCwgwDCACbNOIABAB");
	this.shape_1.setTransform(77.8875,4.85);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#943E20").ss(2,1,1).p("EgjLgR3QgXjTCxgzIAoh4QBEiZKHCZQCkgWAuCdQGXAKBbGDIAAABIgBAAQAAAAABgBIAAAAQA6AOBAATEgjLgR3QA2giBagcQBZggABhnQBeDMAmD8QARBsgOCdQA4AaAUAmA8uyFQAbASAZASQA3AoArAmQAeAcAYAbQBVhCgIhnQiNjxiMDxgEgn/gJbQAQAZAUAbQBegCAag1QAUAJAUAFQAPAFAOACQA0AHAvgWQATgJASgPQAYgSAXgcQALgNALgQQAOgUANgYQAIgOAHgPQAMACAKACQAmAKAPAZQANAYgHAmQgmAYgcAZQgPANgMANQgnAqgEAmQgOAcgYAIQggAMgygXQg3AEgoAEQgNABgSADQgnAHg/AOQgUAEgXAGQgvAjALBTQCdCzEdhtQA4iFBnhgQAIgJAIgHQA4gsBkA8QAGglgQgdA+wnpQAJAHAHAHQCdCShiEJIBahQQgLC4C1BaQAYAVAYATQAXARAYAOQCWBcCrgrQA8BHg8BHQA8A3gJBHQBMAiAfAaQAeAaAGAAQAkAlAZAxQgGC/hPgPA9ayhQAXAOAVAOAp6vhQAAABAAAAArIsgQgpIpGvkRQAgBShhA/QBzAuAUiDQBOCDjGBFQBTBkBmhkQgJBFg5AoQC9BPCXi8QgiBmgLBiQgSCWAiCMQAWBaAqBVQAUAoAZAnQgfDLBJB5QAZAqAlAgQjWDpkOA7QimB2BMAKQBqhmBXACAK6l8IgCA8IgJEbQR9FkGloRQDkAiA+kDQAxg1ATgvQAXg7gagxAp6vhQNFhjBZDoQFHClBTC0IgECHQLhKKMJohQhpifGfh+QBAgRAahCQAGgOAEgSAx4gaQjChjAPmQQAkpnKNCTAKvglIgKFWQidEVACEWQBfCwkqDkQh7DvkcBjQg6gogFgIQgViKEWhyAj9iXQgYAQgeALQAnBMAQBLQAcCNg1COQAgC3EBA0QAwA0AKA0ArFCFQAOAmAIAxQgHDZB/CKQCOAyA1CCQBpA6B9gwQBSBKA+gYQBThTgPhTAnSMAQAsgJAygEAh6JOQBkgRBcBMAAMIhQBiguAMheAkVE2QCgAxCviBAodPnQCMAoBWg7QAQgLAOgPIHuiSAodPnQgdAwgwANQgmALgygLQhRg8BRhbQASgaAXgWQBJhDB+gaAj6W0QACAdANAfQAgBOA0gsAj6W0QhQgBAbidAABTcQkFBMAKCMAEPNyQBEgDAcB0AodPnQgyiOB9hZAtVgJQBlATArB7A0qJnQAiAaAbAYQAXAVASAUQAjAnAQAiIAAAAQAlBQhFA5QghAbg6AWQhNgOg5g1QhWhQgpioQgyANgyh2QhihACei/QhChoBKgQAy8I1QA9AgApAjQAAAAAAAAQA2AwARA2QAUA9gcBHAtVgJQizAnhwg4QhaBxjciEQhTlKkNi0AzBD6QDZBsEjjhAyxOUQBPBFBLh3AppgOQhtgsh/AxApqQkQhFhIAWh/Ego7gMEQCkAMBwh6QAAAYgEAXQgJAygXApQgtBQhnAwQgQAHgQAGEgo7gMEQAaixEEhFQgHg9BDgxQAKgIAMgHEgm3gHFIgDgFEgo7gMEQgZApBVCA");
	this.shape_2.setTransform(225.8717,19.0767);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8E2844").s().p("AjRByQAQg6AtgZQAPAFAOACQA0AHAvgWIAkASIAAgpQAYgSAXgcQALgNALgQIAlAPIgKg7IAbATIAKgrQAmAJAOAZQAOAYgHAmIgogSIAAAuIgdgWQgOAYARASQgPANgMANQgnAqgEAmQgOAcgYAIQAMgrgighIg7BBQg3AEgoAEIggAFg");
	this.shape_3.setTransform(4.3801,-43.325);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C56128").s().p("ACUFOQANgOAPgNQAcgYAlgZQAHglgNgYQgPgZglgKQgLgCgLgCIgPAcQgOAYgOAVQgKAQgMANQgshriXg6QAEgXABgYQhxB6ijgMQAZiwEFhFQgIg9BDgyIAWgOQA1giBagcQBaggAAhnQBeDMAnD7QAQBsgOCdQhlAshHA3QAOgeg7gugAASgKQAFgSA0gTQAYAFAVgBQATAAARgFQA8gSAjhMQg9ATg3AMIgrAIIgnAGQghAEgdABIgPAAIAPAAQAdgBAhgEQgSAiAoAQQg0ATgFASgABLgvIAAAAg");
	this.shape_4.setTransform(1.0421,-74);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7E2416").s().p("ABKg4QguBQhlAvQAOi6CFA7g");
	this.shape_5.setTransform(-19.525,-49.7525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B24325").s().p("AiGgcQCiAMBxh7QgBAZgEAWQgIAygXApQiFg7gOC6IghAOQhViAAagog");
	this.shape_6.setTransform(-22.5941,-55.2625);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F89F39").s().p("Ag5gPQA3gMA8gTQgiBLg8ASQAQgmglgYg");
	this.shape_7.setTransform(20.325,-83.6125);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah/EMIA8hBQAjAhgMArQgLAEgNAAQgaAAghgPgAhkCfQATgJATgPIAAAqgAA7BeIAdAWIAAguIAoASQglAYgcAZQgSgTAOgYgAAFA8QAOgUANgYIAKA7gAAgAQIAQgcQALACAKACIgKArgAgVkSIAqgIQAmAZgQAmQgRAFgUABQAJgjgkgag");
	this.shape_8.setTransform(12.35,-56.9209);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#1D1410").s().p("AgIAaQgogQASgiIAlgFQAlAagJAhIgDAAQgUAAgUgEg");
	this.shape_9.setTransform(9.4728,-81.3729);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E38645").s().p("AkAD1QgMhTAvgkIAsgKQA+gNAngHIAggFQAogEA1gDQAzAWAggLQAYgJAOgbQAEgmAngqQA6AugOAeQhRA+gsBNQhvBDiIAAQhEAAhJgQgAiuB6IgDgGgAj3gbIAhgOQBmgvAuhRQAXgpAIgyQCYA6AsBsQgXAbgYATQgSAOgUAJQguAWgzgHQgPgCgPgEQgTgFgUgKQgaA1hfACIgkgzg");
	this.shape_10.setTransform(-5.3792,-38.4721);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#AC5E30").s().p("AgKCCQAbhGgTg9QgRg2g2gvIAAAAIBWgcQAkAlAZAwQgFCwhFAAIgKgBg");
	this.shape_11.setTransform(122.1625,92.6469);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#DC8143").s().p("AjFA/QgGhvBthRIAAAAQBNBQBMgFIAAAAQANAcAAAZQAAAugsAkQAsgkAAguQAAgZgNgcQBbAdAohLQATA+gcBFQhKB4hPhGQghAcg6AVQhMgNg6g2g");
	this.shape_12.setTransform(102.9009,102.5125);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#BA5D2C").s().p("ALWNFQhRg7BRhcQASgaAXgVQgFAfAAAcQAABVA0A3QgSAFgWAAQgXAAgZgGgAL6K6QAAgcAFgfQBJhDB+gbQhZBAAABbQAAAkAOApQgOgpAAgkQAAhbBZhAQAsgJAygEQB0Brg7B3QhWA7iMgoQgdAvgwAOQg0g3AAhVgAEHItIAAgBQgQgigjgmQAEg/BqgLIAAAAQA2AvARA2QgcA2g3AAQgWAAgZgIgABtHiIAAgBQAbgUAjgSQAXAVASAUQAjAmAQAiIgJABQhJAAhIhLgAEHIsIAAAAgAxwooQDgAwClhjQAshNBRg+QBIg4BlgsQA4AaAUAmQAQAdgGAlQhjg7g5ArQgIAHgIAJQhnBhg4CFQhrAphaAAQiTAAhihvg");
	this.shape_13.setTransform(82.5656,41.3416);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#51140C").s().p("A4EGBQiqAsiXhcQgYgOgXgSQgYgSgYgWQi1hZALi5IhaBPQBikHidiTIgQgOQAIgJAIgGQA5gsBjA7QAGgkgQgeQENC1BTFIQDcCGBahyQBwA5CzgpQBlAVArB6QjFCZiiAAQhPAAhGgkgAeOhKQAzi4CxgWQAZhQBpgoQgTAvgxA2Qg3Dli4AAQgYAAgbgEg");
	this.shape_14.setTransform(258.1625,5.5029);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A04323").s().p("ArYGpQBpA6B9gwQBSBKA/gYQBThTgPhTQgKg0gwg0QBjguAMheQATAoAZAoQgeDKBIB5InuCSQgPAPgQALQA7h2h0hrgA5RFPQgbgYgigaQAiAaAbAYQgjATgbAUQhRgfgohaQh9AAAfjiQBAg9hAhdQCXBbCqgrQA9BHg9BGQA8A4gIBGQBLAiAfAaQAfAaAFABIhXAbQgogjg+ggQA+AgAoAjQhqAMgEA/QgSgUgXgWgAp5gTQA1iOgciNQCngYCAg/QgSCWAjCNQiABdh3AAQguAAgsgOgAFMluIAIkbQCpF9N8geQD8grDMkHIAtBBQj8E8oAAAQlYAAnOiPg");
	this.shape_15.setTransform(261.4468,52.05);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E79661").s().p("AjFgHQAfgLAXgQQC9BOCXi7QghBmgMBhQh/BAinAYQgPhMgohLg");
	this.shape_16.setTransform(214.8,7.375);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#E5925A").s().p("AhNABQCmihgLCjQgDAqg4AiQgpgmg3gog");
	this.shape_17.setTransform(54.9867,-93.2735);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#B65D2D").s().p("AAJBaQA3gjADgqQALijimChIg0giQCMjyCMDyQAIBmhVBCQgYgbgegcg");
	this.shape_18.setTransform(56.0478,-94.2894);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8A2918").s().p("A5oLmQhSlKkNi0QgUgmg5gaQAOidgQhrQgmj8hfjMQAABohaAfQhaAdg2AhQgXjTCxgzIAoh4QBFiYKGCYQClgWAtCdQGYAKBbGEIgBAAQqMiTgkJlQgQGQDCBjQgpA1hFAAQhRAAh3hIgA5wFwQANgxAAgwQAAiOhsiCQACgMAAgMQAAhThPhcQBPBcAABTQAAAMgCAMQBsCCAACOQAAAwgNAxgA/nlwIAzAjQA4AoAqAmQAfAcAXAbQBWhBgJhoQhGh4hGAAQhGAAhGB5gA/nlwIgtgdIAtAdgAfrIAQhpifGfh+QA/gQAbhDQAZAxgXA7QhpAogZBPQiwAXgzC3g");
	this.shape_19.setTransform(244.4078,-59.7454);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#C96528").s().p("AmbTxIgCgTQABh/EDhrQkDBrgBB/IACATQg0ArghhOQgNgfgCgcIAAgKQAAiFD9hJQj9BJAACFIAAAKQhQgBAcieQhNgJCnh2QEOg7DWjqIADAAIAAAAIAAAAQBAABAbBsIABAEIgBgEQgbhshAgBIAAAAIAAAAIgDAAQglgggZgqQhIh4AejLQgYgngUgpQgrhVgVhYQgiiNARiWQAMhiAhhmQiXC7i+hPQA6gnAIhFQhlBjhUhjQCPgygBhRQAAgggWglIAAABIAAABIAAABIAAABIgBABIAAACQgQBZhAABIgBAAIAAAAQgWgBgdgKIgCgBQBJgwAAg5QAAgUgIgUIgBABQiNBZhaAAIgBAAIAAAAQi1AAAXllIABgBIAAgBIAAgGIAAgFIAAAFIAAAGIAAABIgBABQgXFlC1AAIAAAAIABAAQBaAACNhZIABgBQAIAUAAAUQAAA5hJAwIACABQAdAKAWABIAAAAIABAAQBAgBAQhZIAAgCIABgBIAAgBIAAgBIAAgBIAAgBQAWAlAAAgQABBRiPAyQBUBjBlhjQgIBFg6AnQgXAQgfALQAoBMAPBMQAdCOg2CMQAhC4EBAzQAwA0AKA0IgCgBIAAgBIgCgBIgDgCQhIg5hNAAIAAAAIAAAAQgSAAgTADQATgDASAAIAAAAIAAAAQBNAABIA5IADACIACABIAAABIACABQAPBThTBTQg+AZhThLQh8Awhqg6Qg1iBiOgzQh/iKAHjYQgIgwgNgnQgsh6hkgVIABAAIACgBIADgBQA/gXA7AAIABAAIAAAAQAzAAAxASIABAAIACABIADABIgDgBIgCgBIgBAAQgxgSgzAAIAAAAIgBAAQg7AAg/AXIgDABIgCABIgBAAQi0Aphwg5QjChjAQmQQAjpnKNCTIgBAAIACAAIAAAAQA6ANA/AUQg/gUg6gNQNFhkBYDpQFIClBSC0IgECHQLiKKMJohQjMEHj8ArQt7Aeipl9IABg8IgBA8IgJEbIgLFWQicEVABEVQBgCwkrDlQh6DvkcBjQg6gpgFgHgAozP0IABgBIABAAIABgCIABgBIAEgEQBihbBSgBIABAAIAAAAIADAAIgDAAIAAAAIgBAAQhSABhiBbIgEAEIgBABIgBACIgBAAIgBABgAmbTxIAAAAgA8VFoQgyAOgyh3Qhig/CejAQhChmBJgRQAXASAYAOQBBBdhBA9QgfDiB9AAQApBbBQAfQhtBRAGBwQhVhPgpipg");
	this.shape_20.setTransform(251.9172,48.018);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#943E20").ss(1,1,1).p("AgMj3QAGAKAGAGQAXAbAZgKAhih6QAXgOgegtIAAgBIABABQAhAQAAAuQAngugcghAgginQAOgWgMgiIAeAhIAAgpAhiDYIAVguQAPAaADAmIAbgrQAIAWABAhAgXD2QASgYAFgXQAVAVAIAbQAVgqgMggQAeAOgCAsIAIhAQAQgDAPAW");
	this.shape_21.setTransform(-43.05,-39.85);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("Ah7ozIgcgeAj3slQGHAQAcHUQh1GZk0jRAD9MmIAAAA");
	this.shape_22.setTransform(-33.95,-0.275);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(2,1,1).p("AArAsQA9gSAihLQg9ATg3AMQAlAYgQAmgAAHAyQATgBARgFAAWgSQgWAFgVADQAkAZgIAjAg7gEQgSAhAoAQQAXAFAVAAAg7gEQghAEgfAAQgHAAgHAAAgVgKQgTAEgTAC");
	this.shape_23.setTransform(-14.65,-83.3227);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#51140C").ss(1,1,1).p("EAkBgHuQApAkgTAhEAijgIkQBAAcAeAaQBMhtGUAhEgrTAHzIAGAVEgrgAJDIAXgM");
	this.shape_24.setTransform(276.075,57.9224);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#51140C").ss(2,1,1).p("AgbglQAKgMAMgEAg+BnQADhEBwhDQgigcgYAHQAOgrA2gG");
	this.shape_25.setTransform(70.55,-82.55);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#943E20").ss(2,1,1).p("A2M21QgCg/BQihQiLBLhSAUQkkg4iMBMIA9hkQjYBNiRCUQkMiCiQHOQBJhPCTAEQApCsB2BSIAABDQCbBPAXC7Qgnh9h+gaQCHCcAUCbQhDhrh8AbQB9AegeAxA2M21QgBADgBADAw01KIAEgCQCIg/ALh0QizBBhigtQi1gTglBJAtXxpQiAgSg6hNQBogTBDhvQhtgqhdAoEghmgRZQBUh6CiAkQB2BeghBwQgiAAgggDQiAgMhXg+QgbgTgXgYgEgkYgOmQBWA8B/AMEglIgFFQhOhXhxAQQANgvCZgwQBVAMA8AlQAfAUAZAaA3ACXIAjBBQAygEAyjPIAABqQA+hEgkiZQgKgqgQgwQAej4DihJA//gzQg8nwIgk8QFgg2D6EdQDjBrByAQAtXxpQgdAKgJAhQAcgEA3ARQh2A+gHBiQFPgGApCOQimg7gjBtQCMAFAADVQHrBGG1h1QEHguDGCRQAtAhAqArAtXxpQAcgJAvAOQgoAAgjgFgAMllkQAZAYAYAYQA1AzAzA1QF4GBD+GrQEXgMCjEWIDsDIQGoABioEJAMBnJQGZguInFOQF5BsFEANQBEAAAVgVQA/iNJCAfQgfAxgjAnQiwDBkbgxQmxCKokjrQmujrkKBLEAmSAWjQBAgGAIhhAX4NLQADAFADAFQBJB6B/BFQFPBqAuDdQD1FPBakHAJDECQAxDkgnCJQDtE5BkANQCHHmjQCvQg+A0hbAYQhWgBgpgfQg8h6BhimQA7iQg7ijQlJgciKlcQiFirkWhrQrMA2rLjjQj0Bzh+DNQBeDHheAlQCaB+gfCWQgFAXgIAXQhQAwg5hCAX+NVQA+gJA1gfEAieAS/QEFgzA3CwEAiUAUeQCsCMBSgHAJDECQBjB4BNBoQHtGfEegsAEChtQA4A8AzA6QB1CEBhB1Qm1BzmaAgAG4ZuQArA9Bag1AGUWNQAAACAAADQgECiAoA6AGUWNQiKhPA5DWQAPB0BmgaAJiVWQjGgxgIBoA3jBWIAjBBQh8AghnAxEgg3AA2QgmgQghgSQgggTgcgVQiJhugFjDQjcCuguB/QkmBRhmjdQgNghAHgbQAJglAwgZQAEACADACQAoAXAiAHIAAAAQA2AMAlgbQAXgRAQgbQAWgoAIg+EgmsAQhQAIgoAGgnQAUh9AGhwQAGhqgGhdQAci+DVirQA0g8AohDQAfgzAZg2QASgpAPgqEgixgAYQgFACgEACQjsB3hrCxQg8DUgaCcQgEAcgHAxQg1GWD7hFIAAgBQi9gOAwj/IgcgiIgdghEgjjAMjQBDAEAcBSQAiCRAyA6EglhAOXIAhBTIAgBTQBBAtAwAVQB3AzAIhuEgivAR/QAJBbiYgcQhHhJgPhfQgEgXAAgYAJiVWQDBg9AyExEgnKgUiQAFBEAOA6EgqTgRZQhwBAABBlQh1gDhnAqQAAAAgBAAQADAPAAAOQAAA6glAyQg2gKggg6EgvPgKqQgfAhgngSQg2gsgMiBEgvPgKqQASAEASgCIAAAAQAYgDAVgOQAPgJAOgQQAKgKAJgNQAIgKAJgKQACAAACgCEgvPgKqQAYAeASAfQBMB9gICIQAdhWBCApQAkgtAkAlEgwBgMEIAyBaEgvfgONQg+Aag6ArEgtjgEyIgDgiQACgKADgKEgs9gL9QAYAZAUAbQBRBwAMCIQgBANgFAnEgk+AS+QhjAagVh+QAFgdAFgb");
	this.shape_26.setTransform(245.225,10.05);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#9C4120").s().p("AD/GwQA7iQg7ijQlIgciKlcQiFiqkXhsQGbgfG0hzQAwDkgmCIQDtE5BkANQCHHmjQCvQgykxjBA9g");
	this.shape_27.setTransform(280.7469,103.45);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#660000").s().p("Ah0hLQAXgOgeguIABAAQAhAQAAAvQAogvgdggIAcAfQAOgWgMgjIAeAiIAAgpQAXAaAagJQBRBwAMCHIgHA0QgjglgkAtQhBgpgdBWQAIiJhMh7g");
	this.shape_28.setTransform(-41.25,-44.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8E2844").s().p("AgxAqQgFAWgSAYIgBAAQAAghgJgVIgDgiIAFgSQAdhXBCAqQAjguAkAlQgHA+gXAnQgPgXgQADIgIBAQABgsgcgNQALAggUAqQgJgcgVgUg");
	this.shape_29.setTransform(-38.1,-24.0547);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#B24325").s().p("Ag8AAQA5gqA+gZQACAOAAAOQABA5gmAyQg1gKgfg6g");
	this.shape_30.setTransform(-64.6124,-74.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("Ah2FcQASgYAFgXQAWAVAIAbQAVgqgMggQAdAOgBAsIAIhAQAQgDAOAWQgOAcgYARQgZATgiAAQgPAAgQgEgAjBE+IAVguQAPAaADAmIAbgrQAIAWABAhQgigHgpgXgAjHhPQAXgDAVgOQAcAhgnAuQAAgughgQgAjshRQATADARgBQAdAtgWAOQgTgfgYgegAibhgQAQgKAOgPQAMAigOAWgAh9h5QAKgLAIgNQAGAKAGAGQgGgGgGgKIASgTQAYAZATAbQgZAJgYgaIAAApgAhriRIAAAAgACnlXIArgIQAmAZgQAmQgRAFgUABQAJgjglgag");
	this.shape_31.setTransform(-33.5357,-50.0329);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgIAaQgogQASghIAlgGQAlAagJAhIgEAAQgTAAgUgEg");
	this.shape_32.setTransform(-17.524,-81.3727);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#A14323").s().p("AjRFCIgDgPQgfifAvhuQANgdASgZQgciGC6hOQBYiIBJAEQAhATAmAPQgpBDg0A8QjTCsgdC8QAHBegGBqQgxgqg1ADg");
	this.shape_33.setTransform(12.3512,48.0794);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#D97B3D").s().p("AhditIAcAiIAdAiQgxD+C9AOIAAAAQglALgeAAQiwAAAulbg");
	this.shape_34.setTransform(-12.8009,99.4571);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#BA5D2C").s().p("AWJHLQhaA1gqg9Qglg1AAiNIAAgaIAAgFQAIhoDGAxQg8BnAABVQAAA1AXAvQgXgvAAg1QAAhVA8hnQDBg9AyExQg9A0hcAZQhWgBgpgggASPFpQg5jVCKBOIAAAFIAAAaQAACNAlA1QgTAFgQAAQhGAAgNhfgATgDiIAAAAgAz4mPQAVgJAaACQCaB+gfCXQhkhphGilgA6dnrIAAAAQA0gDAxApQgGBwgUB9Qheg3ATjcg");
	this.shape_35.setTransform(160.8022,129.5011);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#51140C").s().p("AjZBHQATghgpgjQBLhtGUAhQiMCajPAAQg1AAg5gKg");
	this.shape_36.setTransform(530.5875,8.1802);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#E79661").s().p("AxyBQQBngxB7gfIAkBAQAygEAxjOIAABqQA+hDgjibQJVGDQ3kLQB1CEBgB0Qm0B0mbAfQiLAKiKAAQpBAApAi3g");
	this.shape_37.setTransform(189.1625,25.2263);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#A04323").s().p("EgkSADTIAABAQBfidHVkGQCFiDArjdQBVhyCxgvQjiBIgeD5QAQAwAKApQAkCbg+BDIAAhpQgyDNgyAFIgjhCIgjhAIAjBAQh8AhhnAwQj0B0h+DNQBeDGheAmQgbgDgUAJQhrjnCMjYgAWHi0QmujrkKBLQgzg1g1g0QF8hJFSCuQI1E9ElidQBEAAAVgVQBAAbAfAbQApAjgUAhQigA0iwAAQksAAlZiVg");
	this.shape_38.setTransform(269.1234,23.675);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#C96528").s().p("EAlqASrQgujdlPhpQh/hFhJh6QA+gKA1geQg1Aeg+AKIgGgKIAGAKQkeArntmeQhNhohjh4Qhhh0h1iFIhrh3IBrB3Qw3EMpVmEQgKgpgQgwQAej5DihIQixAvhVByQgrDdiFCDQnVEGhfCdIAAhAQiMDYBrDnQguATgSBLQgchRhDgEQBDAEAcBRQhsgbhQCMIghhTIAhBTQgqgXgqBDQgEgXAAgYIgGgVQAUh9AGhvQAGhqgGheQAci+DVirQA0g7AphDQAegyAZg3Qg8nxIgk7QFgg2D6EdQDjBrByAQQHqBFG2h0QEHgvDGCSQGZgvInFOQF5BtFEANQklCdo1k9QlSiul8BJIgxgvIAxAvQA1A0AzA1QF4GBD+GrQEXgMCjEVIDsDJQGoABioEJIgBgEQgriFimAAIAAAAIAAAAQgvAAg4ALIgDAAIADAAQA4gLAvAAIAAAAIAAAAQCmAAArCFIABAEQgIBghAAGIgJABIAAAAIgKgBQhNgHiQhyIgDgCIAAAAIgKgIIgBgBIABABIAKAIIAAAAIADACQCQByBNAHIAKABIAAAAIAJgBQgnB0hGAAQhYAAiKi8gA7YjiQASgpAPgrQgPArgSApgAR/osQgqgrgtghQAtAhAqArgEAq5ATzIAAAAgEAsBASNIAAAAgEglLAIhIALhMQAaicA8jUQBriwDsh4QAcAWAgASQhJgEhYCIQi7BNAdCGQgSARgNAmQgwBuAgCfIABAIIACAHQg0AEg4AwgEgq3gFUQgNghAHgaQE0DSB1maQgcnVmHgQQBngqB1ADQgBhlBwhAQBJhQCTAEQApCtB2BSIAABDQCbBPAXC7Qgnh9h+gaQCHCbAUCcQhDhrh8AbQB9AdgeAyQg8gmhVgLQiZAvgNAwQBxgQBOBXQjcCuguB/QhPAWhBAAQiyAAhKijgEgklgQnQAYAFAVAAQATgBARgFQA9gSAihMQg9ATg3AMIgrAIIgnAGQghAEgeABIgPAAIAPAAQAegBAhgEQgSAiAoAQgEgrugNKQg2gtgMiAQAgA6A2AKIAyBaQgUAVgYAAQgNAAgNgGgA42yTQAnhxhlgjQhcgSg8BcQgcgTgXgYQBUh6CiAkQB2BeghBwQgiAAgggDg");
	this.shape_39.setTransform(215.7208,27.594);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#E38645").s().p("ABsSZQhIhJgPhfQAPBfBIBJQhjAbgVh/IALg4IAWgMQAqhDAqAXQBRiMBrAbQAiCSAzA5Qgzg5giiSQAThLAtgTQBHClBkBpQgFAWgJAXQhPAwg5hCQgIBuh4gzQgvgUhBguIghhTIAhBTQBBAuAvAUQAIBGhXAAQgbAAgkgHgAiOLvIgdgiQA4gwA0gDIAAAAQgTDcBeA3IgNBQQi9gPAwj/gAElNUIAAAAgAo6kFQAKglAwgYIAGAEQApAWAiAIIAAAAQA2ALAkgbQAYgRAPgbQAXgoAHg+IAGgzQgLiIhShwQgTgbgYgaIAEgCIgEACIgSAUQgIANgKAKQgOAQgQAKQgVANgXADIgBAAIAAAAQgRACgTgEIgyhaQAmgyAAg6QAAgOgDgOIAAAAQGIAQAcHUQhNEQiiAAQhSAAhphIgAF2xSQA9hcBbASQBmAjgnBxQiAgNhXg9g");
	this.shape_40.setTransform(-2.2475,13.7139);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#852818").s().p("EglgANEQgggSgcgWIAJgFIgJAFQiJhugFjEQhOhWhxAQQANgwCZgwQBVAMA8AlQAegxh9geQB8gbBDBsQgUiciHicQB+AaAnB9QgXi6ibhPIAAhCQBWA8B/ALQh/gLhWg8Qh2hSgpitQgOg6gFhEQAFBEAOA6QiTgEhJBPQCQnNEMCCQCRiVDYhNIg9BkQCMhMEkA4QBSgTCLhMQhQCiADA/IgDAGIADgGQAkhJC1ASQBiAtCzhBQgLB1iIA+QBdgoBtAqQhDBwhoATQA6BNCAASQgdAJgJAiQAcgFA3ARQh2A+gHBjQFPgGApCMQimg6gjBsQCMAGAADVQhygQjjhrQj6kclgA2QogE6A8HwQgZA3gfAzQgmgPghgTgEgl6AGkQgZgbgfgUQAfAUAZAbgA/ygGQAChDBxhEIgBgBIAAAAIgBgBIgBAAIgBgBIAAAAQgYgTgUgBIAAAAIAAAAIgKACIAAAAIgBAAQAQgsA1gGQg1AGgQAsIABAAIAAAAIAKgCIAAAAIAAAAQAUABAYATIAAAAIABABIABAAIABABIAAAAIABABQhxBEgCBDgA/PiSQAKgMALgEQgLAEgKAMgEglIgEpQAXAYAbAUQBXA9CAANQAgADAiAAQAhhxh2hdQglgIghAAQhvAAhBBdgA0WoaIAEgCgEAj1ALqQA/iMJCAeQgfAxgkAnQmUghhLBtQgfgahAgcgEgn6gB1IAAAAg");
	this.shape_41.setTransform(267.825,-71.5875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#943E20").ss(1,1,1).p("AABAGIgBgL");
	this.shape_42.setTransform(0.7,-38.2625);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#000000").ss(1,1,1).p("AvmyGQA8gTAjhLQg+ATg3AMQgWAEgVAEQgTADgTADQghAEgfABQgHAAgHAAANPRQQD1ABgohjQhDhjgOiMQgBk/A9kMQF3oxo7jWQhrhhAgjvQABgJABgJANPRQQAAAAAAAAQAQA+gRBKAMOPdQAyAzAPBAAKqTlQAFiTCggCAKxN0QBLAugVBDAJGMyQBCAKgBA7AxNy3QgSAiAoAQQAXAFAVgBAwny9QAlAagJAiQAUAAARgFAv8zFQAmAZgQAm");
	this.shape_43.setTransform(101.5524,53.525);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#51140C").ss(2,1,1).p("Ag9i3QAfAwAXAuQBGCNgBCE");
	this.shape_44.setTransform(67.6012,-50.5);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#51140C").ss(1,1,1).p("AgHnVQBAgbAyBhAkljFQCkIFGUCcQAFj5hVjHQAmhdA9gk");
	this.shape_45.setTransform(67.6625,-12.4304);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#943E20").ss(2,1,1).p("A9DzwQheA1iLAHEgwdgMzQiMjuDNiTQiaiuKuArQFMBVHcjdQgtCMh2BDQIKgDEBiAQg8B0jWBQQFZBCDVhKIg6BWQG6ilDZjwQB6h4CjgTQBOiUGAB6QHtCBFoDeQNxEkFxkkQEcmBICgBQjFGBn6BgQq8FTt+lyQAwFXCIDkQAaAsAdAnEgnUgNpQAaAcAZAXQBJBBBGAXQAbAJAcAFQAdAGAeABEgnUgNpQDjkhCdErQgSBnh1AoEg0XgDxQBegCAag2QAkARAhAEQA0AHAvgWQATgJASgOQAkgcAfgtQAPgVANgXQABgBAAgCQAIgNAHgPQAMABAKADQAmAKAUAXQAUAXgTAoQgkAZgdAWQhHA6gRAyQg1AwgygWQg3ADgoAFQgoAEhdAVEgtMgBCQApg+A3g0QAIgJAIgGEgsPgPDQDxEUAlE/QAWDIg5DYEgnrgOmQAZA0gCAJA10JTQiShfkrkNQiRkMAVjrQAglcFlkVQGlhuEthyEgt3gQyQA3A3AxA4QjPA3g/BZAxzoPQgNAigGAhACvkyQAaALATATQFTCDFzg8ABpnlQATBXAzBcAB4u+Qg8EKAtDPAOF0rIAvgvQBmAyBqAsAKe4tQCPCEBYB+QE9HImOGJIIjAAQAmA7gJBIQCVAmB0g5QBQgqA4AqALXIwQg7loDcljQAQgWAagcQA7g+BFAVAU8rBQJpBXg4AqQB9AwA+F6QBrCWA9B4QBsDUgjByQhpBDhGgYABa6BQCMgPChAsAfhCgQACAZADAXQAbD0BpAlAfTH5IAuAXQAvAJA6gwAfTH5QAWATAYAEAdkDXQADAUAEASQAnDCBBA6AZ9lqQCTESAyFkQAMBVAHBYQBiDXAciXARbGIQAAAAAAAAQAYgMAZgJAV0lXQgRCLi+C4QAtB3hGBbIAAC1QBfAqBBBOQAIAKAHAKQgyBfg+APAPhHDQAHAKAGAIQB8CwBhgYAN4LSQhiBhgwi6QgIgggHgpQAXAeAWAYQA6BDAxAjQAEADAFADQBsBJBLhaQAFACAFACQBTAhA/h5AN9HrQAKATAKARQBXCPBHAjABjOZQg0iMBlg3QCrAxACCKQgUAQgWAJAAeNuQAkAaAhARAq/HYQG7A5hHC3QE9ghCiAvAtNMWQAMgvAPguQBDh0AwhtQBDiWAiiUQA6gBA5gTQFth1EplXAyWVfQgegDgbABQgWAAgUADQi9AaAgDqQATBkBpgnQgPgYgEglQgIhxCcglQATgEAUgEQAngGAtgCA0aahQAWAjAuAKQA9APBngcQA5gPBFgcQESikjbi3QgQktBAj4AAaSjQgshMA/hCQgUhIBKg0QBkAzBQgiAAaSjQgYANgVAOQiVhDitAHQjJkrkvhBADxRfQh+AWhZAuAhkQTQBMgIBFAKQBpAQBbA6QBshShGhjA10JTQgGBfAbCGQv+gziEpMQAGhWhBgzA4AZJQAqATBAAIA1fM4QAqDSCQEKQhWgEg/ALQkIAvgEB5QgXBdBdApQggjCCFgZAyCIYQk2ALBEAwEg0hgCLQgwAkAMBTQCdCxEdhsQASgpAVglQALgTANgSQD0BDA8AvAsegKQIFiiGCk5AyIm5QgnFTLIEAEg13gHOQAZiyEFhEQgHg9BDgyEg0XgDxIgKBmEg13gHOQgZApBVCAQAQAYAUAcEgzzgCPIgDgFQgUAEgXAFEg13gHOQCkAMBwh7QgCBNhIBWQgMBDiCAy");
	this.shape_46.setTransform(293.6558,4.6001);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B35C2D").s().p("AhngqQAXgNAagIQBeApBABNQgRAJgVAAQhFAAhkhqg");
	this.shape_47.setTransform(415.5875,48.1984);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#A04323").s().p("A5RXvQD1ABgnhjQhDhigOiMQgCk/A+kMQF2ozo6jUQhshhAgjvQgnFULJD/Qg5ATg7ACQgiCThCCWQG6A6hGC2QE8ghCjAvQhlA3A0CNQghgRgkgbQAkAbAhARQhJA0ATBIIgCgBIAAAAIgDAAQgjgFglAAIgBAAIAAAAQgcAAgcADIgEAAIgHABIAHgBIAEAAQAcgDAcAAIAAAAIABAAQAlAAAjAFIADAAIAAAAIACABQhABBAtBNQgYAMgWAOQiUhDitAHQjKkrkvhAQAMgwAQguQBCh0AxhtQgxBthCB0QgQAugMAwQg/D4APEtQDbC2kSCkQhFAcg5APQARhKgQg+gAm8NQIAAAAgAI7E/IAAmTQB6iYAqi6QjyAEkNiAQHIneoqp2QCPCDBYB/QCNDKAAC+QAADujdDaIIjAAQAeAwAAA4QAAAOgCAOQgRCKi+C5QAtB2hGBcIAAC1QgZAJgYAMIAAAAgARdmzQBRgrA4ArQg4grhRArQh0A4iVglQACgOAAgOQAAg4gegwIojAAQDdjaAAjuQAAi+iNjKIAwgwQBmAyBqAsQAvFXCIDkQAaAsAdAnQgdgngagsQJpBXg3AqQB8AwA+F6QBrCYA+B3QiJgQhiBnIgEgwIAEAwQg9gmg+BTIgHglIAHAlIgoAQQgzlliTkRgANUmgIAAAAg");
	this.shape_48.setTransform(348.0429,11.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#BA5D2C").s().p("A77MqQAEiTChgDIAAAAQAPA+gRBKQhEASgxAAQgaAAgUgEgAn4BwQgThHBJgzQgziNBkg3QCrAxACCKQgUAQgWAIQggAOgjAAIAAAAIgBAAQgxAAg3gaIgCgBIgFgCIgBAAIABAAIAFACIACABQA3AaAxAAIABAAIAAAAQAjAAAggOQBHBkhtBRQhag6hqgQQBqAQBaA6Qh9AWhaAuQgthMBAhCgAUvnqQgGhZgMhUIApgQQA9hTA9AmQBihnCJAQQBsDTgkBzQhoBChGgYQhqglgbj0QAbD0BqAlQg6AwgwgIIgtgYQhBg6gnjCQAnDCBBA6QgMA/gYAAQghAAg6h+g");
	this.shape_49.setTransform(348.6116,97.8881);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#D57C41").s().p("AyRJ2QgQgZgDgkIgBgMQAAhoCUgiIAogIQAxAzAPA/QigADgECTQgugLgWgigA0OI5QgFgiAAgeQAAiuCigWQAUgDAXgBQBLAvgWBDQiUAiAABoIABAMQADAkAQAZQgeALgXAAQg7AAgNhIgAyRJ2IAAAAgA13IeQgHgnAAggQAAiABrgUQhrAUAACAQAAAgAHAnQhegqAXhcQAEh5EJgvQBBAKgBA7QiiAWAACuQAAAeAFAiQhAgJgpgSgANumxQgIghgHgoQAXAdAWAZQA6BCAxAkIAJAGQgiAhgbAAQg2AAgfh6gAQAlYIgJgGQgxgkg6hCQAShLB8gNQAUgxBIgIQAygwA7gdIAAAAQCCCMBPgpIAQAUQgzBfg+APIgCAAQgLACgKAAIAAAAIgCAAQhTgBhliIIgFgIIgBgBIgDgEIgCgCIgBgCIABACIACACIADAEIABABIAFAIQBlCIBTABIACAAIAAAAQAKAAALgCIACAAQg+B4hUggIgKgEQhHgjhWiQQBWCQBHAjQgpAyg0AAQgqAAgwghgAOMnEIAAAAg");
	this.shape_50.setTransform(280.0426,111.3487);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#C66128").s().p("AACCFQBwgFgJh2Qhri9iKDgQgZgXgagbQDikhCdEqQgSBnh1ApQgcgGgbgJg");
	this.shape_51.setTransform(61.15,-82.2363);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#8E2844").s().p("AkBA5QBegCAag1QAkAQAhAFQA0AGAugWIAlASIAAgnQAkgdAfgtIAnANIgIgwQAHAFASACIAKgqQAmAJAUAXQAUAXgTAoIgogSIAAAiIgZgIIAAAoQhHA4gRAzQgJgHgigiIg8BCQg2ADgoAFQgoAEhdAVIgrAJg");
	this.shape_52.setTransform(-15.7413,-25.3);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#C96528").s().p("Aw0aGIAAAAQgPhAgxgzQAmgFAtgDQgtADgmAFIgoAIQAVhDhLguIAFAAIAAAAIADAAIABAAIACAAIAUAAIAGABIAUABIgUgBIgGgBIgUAAIgCAAIgBAAIgDAAIAAAAIgFAAQgWAAgUADQABg6hBgLQA+gKBWADQiQkKgqjRQgbiHAGhfQgMgJAAgHQAAgiD+gIQj+AIAAAiQAAAHAMAJQiShfkqkMQiSkNAWjqQAfldFlkUQGlhvEthxQG6imDZjvQB6h5CjgTQBOiUGBB6QHsCBFoDfQNxEkFxkkQEcmCIDgBQjGGBn5BhQq9FTt9lzQhqgshmgyIgwAwQhYh/iPiDQIpJ2nHHeQENCADxgEQgpC5h7CYIABGUQg7AdgyAwIgMgSIAMASQhIAIgUAxIgVgjIAVAjQh8ANgSBLQgWgZgXgdQg7lpDcljQAQgWAagcQlzA8lSiCQgTgUgbgLQgzhbgThXQgThaAAhkQAAiEAiiYQgiCYAACEQAABkATBaQmCE4oECiQIEiiGCk4QATBXAzBbQkpFYltB0QrIkAAnlTIADgSQAFghANgiQgNAigFAhIgDASQggDvBsBhQI6DUl3IzQg9EMACE/QANCMBEBiQAmBijwAAIgEAAgAOfiAIACgCQArgsAwAAIABAAIAAAAQAPAAAQAFIABAAIADABIgDgBIgBAAQgQgFgPAAIAAAAIgBAAQgwAAgrAsIgCACIAAAAgAGF4XIgDAAIgGgCIgBAAQhzgfhnAAIgBAAIAAAAQglAAgkAEQAkgEAlAAIAAAAIABAAQBnAABzAfIABAAIAGACIADAAgAPrIjIAAAAgEgtPAAKQApg9A4gzQAHgJAIgHQgIAHgHAJQg4AzgpA9QgNASgLAUQAHhzhOg+QASgzBGg5QAdgXAkgYQATgpgUgXQgUgXglgJQgLgDgMgCIgOAdIgCADQgNAWgPAVQgeAtglAdQgSAOgTAJQgPhiingVQBIhXADhMQhxB6ikgMQAaixEEhFQgHg9BDgxQA/haDPg3QDxEUAlE/QAWDIg5DYQg8gvj0hEgEgu7gJPQAXAFAWAAQATgBARgFQA8gSAjhMQg9ATg4AMIgqAIIgnAGQghAEgfABIgOAAIAOAAQAfgBAhgEQgSAiAoAQgABmmXIAAAAg");
	this.shape_53.setTransform(293.95,-3.1128);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#B14225").s().p("AiGgcQCiAMBxh7QgCBMhJBWQiEgMgJCBQhViBAagng");
	this.shape_54.setTransform(-37.5942,-38.75);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7E2416").s().p("ABHg5QgMBCiBAyQAJiACEAMg");
	this.shape_55.setTransform(-38.05,-30.6513);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#E38645").s().p("ApLGXQgMhTAwgkIArgJIADAFIgDgFQBdgVAogEQAogFA3gDQAyAWA1gwQBOA+gHB0QgWAmgRApQhrAphaAAQiTAAhihvgApBCGQCCgyAMhDQCmAWAQBhQgvAWg0gHQghgEgkgRQgaA2heACIgkg0gAFYmKQCKjiBrC+QAKB3hwAFQhGgYhJhAg");
	this.shape_56.setTransform(12.6676,-38.1706);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#DB8A39").s().p("Ag5gPQA3gMA8gTQgiBKg8ATQAQgmglgYg");
	this.shape_57.setTransform(5.325,-67.1);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ah/EQIA8hCQAjAiAIAGQgkAhgjAAQgQAAgQgHgAhkCiQATgJASgOIAAApgAA/BjIAZAIIAAgiIAoASQgkAZgdAWgAADBCQAPgVANgXIACgDIAOgbQAMABALADIgLAqQgSgCgGgFIAIAwgAAjAfIgCgMgAgUkOIApgIQAmAZgQAmQgRAFgTAAQAIgigjgag");
	this.shape_58.setTransform(-2.65,-40.791);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#852818").s().p("Ao/DWQglk+jxkUQgxg4g3g3QA3A3AxA4QjPA3g/BZQiMjuDNiTQiaivKuAsQFMBVHbjdQgtCMh2BDQheA1iKAHQCKgHBeg1QIKgDEBiAQg8B0jWBQQFZBCDVhKIg6BWQktBymlBuQlmEVgfFbQg8AlgmBeQBVDGgFD6QmVidikoGgAjcDYIAAgEQAAiChFiLIACgBQANgFAMAAIAAAAIAAAAQAwAAAmBIIABAAIAAABIABADIgBgDIAAgBIgBAAQgmhIgwAAIAAAAIAAAAQgMAAgNAFIgCABQgYgvgfgvQAfAvAYAvQBFCLAACCIAAAEgAnnjvQBJBABGAYQAaAJAdAFQAcAFAfACQgfgCgcgFQB1gpAShmQidkrjjEhIAAgCQAAgMgXgvQAXAvAAAMIAAACQAaAcAZAXgAkhg5IAAAAgAoakiIAAAAg");
	this.shape_59.setTransform(95.8718,-53.675);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#51140C").s().p("AoigqQAGhWhCgzQA6jZgXjIQCkIHGWCbQAEj4hUjHQAlheA9gkQgUDrCQEMQEqEMCTBfQgGBfAbCHQv9g0iEpLg");
	this.shape_60.setTransform(95.4,27.3875);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-17.524,y:-81.3727}},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_32,p:{x:-5.524,y:-64.8727}},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42}]},4).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-71.7,-171.1,711.7,351.4);


(lib.lhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B96F48").ss(0.5,1,1).p("AgaglQAagZAMAaQAOACAJAEIAAABQAHADAEAGQAFAGAAAIAgaglQgCAIgBAHQAAABAAABQgHAqAcgNQAAgGAKgHQAaAJAXgLQgBANgMAUQgjgFgIgIQgDgCAAgDAACgEQgEgKACgGQAAgBAAgBQAGgKAdACAgSAuQgIgDgIgHQgGgEgGgGQgKgZAPgVQABgBAAgBQADgDADgEQAEgEAEgEAgKAcQgEgIAJgGAgSAuQgMgZAUAHAANAwQANgGAMgPAgSAuQAQAIAPgGQgSgLgFgJ");
	this.shape.setTransform(5.075,5.039);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F09A69").s().p("AgSAuQgJgTAKAAIAAAAIABAAIAGABIAAAAIAAAAIAAAAIAAAAIgGgBIgBAAIAAAAQgKAAAJATQgIgDgIgHIgMgKQgKgZAPgVIABgCIAGgHIAIgIIgDAPIAAACIgBADIAAAAIAAABQgEAcAPAAIAAAAIAAAAQAEAAAFgCIACgBIAAgBQAAgGAKgGQALAEALAAIABAAIAAAAQAMAAAMgFIABAAIAAgBIABAAQgBANgMAUQgjgFgIgIQAIAIAjAFQgMAPgNAGQgSgLgFgJIgBgFQAAgFAGgEQgDgCAAgDQAAADADACQgGAEAAAFIABAFQAFAJASALQgHACgGAAQgJAAgJgEgAAmAbIAAAAgAgFAOIAAAAgAgTAMQgPAAAEgcIAAgBIAAAAIABgDIAAgCIADgPQAagZAMAaQAOACAJAEIgCAAIgHAAIAAAAIgBAAQgUAAgFAIIAAACIgBAEQAAAFADAHQgKAGAAAGIAAABIgCABQgFACgEAAIAAAAIAAAAgAgIAJIAAAAgAAYAAQgLAAgLgEQgDgHAAgFIABgEIAAgCQAFgIAUAAIABAAIAAAAIAHAAIACAAIAAABQAHADAEAGQAFAGAAAIIgBAAIAAABIgBAAQgMAFgMAAIAAAAIgBAAgAACgEIAAAAgAAjgeIAAAAg");
	this.shape_1.setTransform(5.075,5.039);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.2,12.1);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7B362B").s().p("AAAAFIgBgEIgBgBIAAAAIgCgBQADgBADgCIABACIACADIgBAAIgBABIgCACIgBABIAAAAIAAAAg");
	this.shape.setTransform(2.825,2.95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8C362B").s().p("AgKAbIgGgCIgDgFIgCgHIAAgEIgCgDQgFgGACgMIACgDQABgDADgBQADgBAIAAIAEgCIAHgEQAEgBAEABQAEACACAEIAGAGIADAFIABABIAAABQAEAGgFAEIgEADQADAGgFAGIgCACIgEADQgHAFgJAAIgHgBgAgDAAIABABIABABIAAABIABADQAAAAAAABQAAAAAAAAQAAAAAAAAQAAgBAAAAIABAAIADgCIABgBIAAAAIgCgDIAAgCQgEACgCAAg");
	this.shape_1.setTransform(2.783,2.78);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,5.6,5.6);


(lib.head_kik = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#512D06").ss(0.5,1,1).p("AgTgUQAegCAHAdAABATQALgaAGAOQABAGABAI");
	this.shape.setTransform(22.8,42.0155);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#C4A188").ss(0.5,1,1).p("AAogGQgYgtgbACQgLABgMAHQgCAJgBAHQgNBFBEAGQADAAADAA");
	this.shape_1.setTransform(22.6041,42.4685);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#543111").ss(0.5,1,1).p("AA/gJQAAAKgFAIQgEAJgHAAQgGAAgFgJQgEgIAAgKQAAgLAEgIQAFgHAGAAQAHAAAEAHQAFAIAAALgAgfAJQAAALgFAJQgEAHgHAAQgGAAgFgHQgEgJAAgLQAAgJAEgJQAFgIAGAAQAHAAAEAIQAFAJAAAJg");
	this.shape_2.setTransform(44.9,37.85);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AB7hpQACgHACgIAB7hLQAAAAABABQABADACADQADAHACAJAB7hMQgCgJABgJABBAIQApgJgWAlACEgzQAVApgVA4QgzAwg8ASIg1AJIgFAAQgJAAgJAAQgBAAgCAAIgGAAAhBB5QgCAAgBAAQgdAAgngaQgCgBgEgDAgTBDQAXAhBGgW");
	this.shape_3.setTransform(38.7063,40.3387);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#6F5C56").ss(0.5,1,1).p("AjfDrQASgPATgOQAegYAggWQCvh+DKhgQAKgFAJgFQgdgkhDgRQi7BSiRBmQgoAdglAfQgJBGATAugAkCBQQg7i0DXh1QAKgDAJgCQCVgnBSBd");
	this.shape_4.setTransform(27.1994,23.4489);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#36291E").ss(0.5,1,1).p("AjACQQgMACgNgpQAlgkAoggQCNhxC9hDQAZARADAa");
	this.shape_5.setTransform(23,20.9297);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#7A3729").ss(0.5,1,1).p("ACigrQAHgGAGgGQAQgWgKgcQAwAQAagxQgZAEgVgOQgKgGgOgMABGgKQAlgZAKg0QAJAigXAhQARABALgJAj+BmQAXAeAlAQQAlAPA3AEQAEAAAEAAIAAgLIAAgUAhJBQIAIARIAwhqIgFAwQAvgpAQg4QAEAbgHAU");
	this.shape_6.setTransform(33.975,33.825);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E160F").s().p("AgyAOQAkgjAnggQAEAdAWATQgoAcgkAeIgBABQgMAAgMgog");
	this.shape_7.setTransform(6.375,29.9547);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#7B5740").s().p("Ag3BxQAlgfAngdQAJA/AXAmQggAWgdAYIglAdQgTguAJhGgABLjfIATgFQiLBaApCQQgoAggkAkQg7i0DWh1g");
	this.shape_8.setTransform(9.3994,24.025);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgVAgQgJgOAAgVQAAgSAKgVIABgBIAAAAQAagLAUAYQAEALAAAQQAAAVgJAOQgJAQgNAAQgMAAgJgQgAgDgNQgEAIAAAKQAAALAEAIQAEAIAGAAQAHAAAEgIQAFgIAAgLQAAgKgFgIQgEgIgHAAQgGAAgEAIg");
	this.shape_9.setTransform(39.425,38.2771);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F8C7A2").s().p("AgaCJIgCAAIgHAAIgBAAIgDgBQgcAAgngaIgGgDIAAgUIAFAAIgFAAQhFgFAMhHIAEgOQALgIALAAQAdgDAXAsIAIASIAwhrIgFAyQAvgqAQg5QAEAcgHATQgKAHgKAMIAQgGIAAABQgLAVAAASQAAAVAKAOQAJAQANAAQANAAAJgQQAJgOAAgVQAAgQgFgLQgEgRgHgHQAlgZAKg0QAJAigXAgQARABALgJQgHAMgBASIAIgJQgIANAAATQAAATAIANQAJANALAAQAMAAAIgNQAJgNAAgTIgBgKQAVAogUA5Qg0Awg7ARIg2AKIgFAAIgCAAIgBAAIgBAAIAAAAIgOAAIAOAAIAAAAIABAAIABAAIACAAIgOAAIgEAAgAA2BmQASAAAYgGIACgBIAAAAIAFgCIgFACIAAAAIgCABQgYAGgSAAIAAAAIAAAAQgeAAgOgSIAAAAIAAgBIAAABIAAAAQAOASAeAAIAAAAIAAAAgAhuAoIABANIgBgNIAAAAIgBgBQgCgEgCAAIgBAAIAAAAQgFABgHAPIAAABIAAgBQAHgPAFgBIAAAAIABAAQACAAACAEIABABIAAAAIAAAAgABxA0IAAgBQASgdgWgBIAAAAIgBAAIgLACIgBAAIgBAAIgBABIABgBIABAAIABAAIALgCIABAAIAAAAQAWABgSAdIAAABgAhuAoIgBgBIAAgBQgHgagaAAIAAAAIAAAAIgFAAIAFAAIAAAAIAAAAQAaAAAHAaIAAABIABABIAAAAg");
	this.shape_10.setTransform(35.7855,38.75);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FBFEFE").s().p("AAQAhQgIgOAAgTQgBgSAJgNQAIgJALgGIABAAQAKAAAJAMIAAABIABABIADAGQAEAHABAJIAAABIAAAJQAAATgIAOQgJAOgLAAQgLAAgJgOgAAegKQgEAIAAAKQAAALAEAIQAFAIAHAAQAGAAAFgIQAEgIAAgLQAAgKgEgIQgFgIgGAAQgHAAgFAIgAg/AYIAAgHIAAgHQABgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQABADABAEQgBAEgBADQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgAAgAFIgCgGIACgHQAAgBAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQABADAAAEQAAADgBADQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_11.setTransform(45.5,36.125);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#543111").s().p("AguA0QgFgIAAgLQAAgLAFgIQAEgIAHAAQAGAAAFAIQAEAIAAALQAAALgEAIQgFAIgGAAQgHAAgEgIgAgtAQIgBAHIABAHQAAABABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBQACgDAAgEQAAgEgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAgAAwAhQgFgIAAgLQAAgLAFgHQAEgIAHAAQAGAAAFAIQAEAHAAALQAAALgEAIQgFAIgGAAQgHAAgEgIgAAxgCIgBAGIABAHQAAABABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBQACgDAAgEQAAgEgCgCQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAgAg+gPIgBAAIgRAGQALgNAKgGQAUgNAMAPQAHAHAEARQgUgYgaALgAAhgtQAJgRAWADIAJACIAAABIAAAAIAIAGIgKAEIgBABIAAgBQgKACgIAFQgLAFgIAJIgIAKQABgTAHgLg");
	this.shape_12.setTransform(43.775,35.453);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B19582").s().p("AjEBgQCRhmC7hSQBDARAdAkIgTAKQjKBgivB+QgXgmgJg/gAh7i5QCVgnBSBdQi8BDiOBxQgpiQCMhag");
	this.shape_13.setTransform(31.1769,19.7239);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#BC1D0A").s().p("AjnBwQAegYAggWQCvh9DKhhQAOAMAKAGQjABViOBkQgLAAgLAIIgEAPQgrAnAAAwQglgPgXgeg");
	this.shape_14.setTransform(31.675,32.85);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#584B40").s().p("AiyBCQCOhwC8hDQAYARADAaQi7BRiQBnQgXgTgDgdg");
	this.shape_15.setTransform(26.825,17.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#DA562F").s().p("AiECdQg3gDglgQQAAgwArgnQgMBHBFAFIAAAUIAAALIgIgBgAhnBGQgXgtgdADQCPhkC/hVQAVAOAZgEQgaAwgwgPQAKAcgQAVQgGAHgHAGQgWgDgJARQgLAJgRgBQAXgggJgiQgKA0glAZQgMgPgUANQAHgTgEgcQgPA5gwApIAFgxIgwBrg");
	this.shape_16.setTransform(36.975,34.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,61.5,54.5);


(lib.head_gfall_sad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#D16826").ss(0.5,1,1).p("AgDACIABAAQACAAABABQAHAAAIgDQABgBABAAQAAAAgBABQgGAEgFADQgPAJgGgPQgCgEAAgGQAFAJAJACg");
	this.shape.setTransform(45.625,28.5996);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAAAAIAAAB");
	this.shape_1.setTransform(35,45.4625);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJABQAGAKgDALAAJABQgPAFAEAPAgMgVQAPALAGAL");
	this.shape_2.setTransform(31.5391,34.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0777B7").ss(0.5,1,1).p("AgTgbQAAAAgBgBQgRgFgCAbQAhAmAjgDQAPgNgGgQ");
	this.shape_3.setTransform(22.3337,43.6644);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AABiBQgqAUgRAbQgOAWAEAaQADATALATQADAGAEAGQAAAEgBACQgHAfgbAGAgyBDQgGAMACAKQAAAEABACQAIAVApAOQgDgTAJgQQACgDADgEQAIgMAQgIQAFgEAGgDQAPgPAJgQQALgUAEgVQACgJAAgLQAAgKgBgLQgCgIgCgJQAAgBAAgCQgEgKgEgLAhRA8QAHAIAIACQAGAAAJgE");
	this.shape_4.setTransform(18.23,56);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgOQAJAdAMAB");
	this.shape_5.setTransform(17.925,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQACgBAJgE");
	this.shape_6.setTransform(18.5,22.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAcgRQAYgOAYgMQADgCADgBQBvg8B8gc");
	this.shape_7.setTransform(28.15,17.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B0947F").ss(0.5,1,1).p("ABvA0QAOgLAHgPQAFgKACgLQA+gZg2gWQAEgQgBgaAAYBTIAAAAQAHgCAZgGQAegHAQgJQAFgDAEgEABWAfQAZAGAAAPAirgCQAVAWAbARAhzAqQADACACABQABABAAAAQADABADABQAOAHAPAFQAKADAMAEQABAAAAAAQAGACAGABQA3AMAHACIABABAgng4QAsgUAGAkAABATQgOABgKgE");
	this.shape_8.setTransform(32.6123,37.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E39517").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHABAQAAQgLAcgWAHQgWAIgLgIQAHANgJATQgHARgGAIQgLANgLADAhYAdIAYgmIAAAXQAlgZACgrQAPAVgPAdQAVgIAGgGQAJgJADgFQAKgPAAgUQAEAcAJAOAiYCJIAdgz");
	this.shape_9.setTransform(42.625,30.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#745F4A").ss(1,1,1).p("AjaA1QgHgYABgaQABgrAWglQAgg1A3gZQADgCADgBQADgBADgBQAKgEAKgDQAMgEALgCQA8gPAkAKQAeAIAVAPQAIAGAHAHQAOAOAPAVAiQAwQgoAWgRASQgYA4AOAnQANgIAOgIQABgBABAAQAdgRAegQQAHgEAIgEQADgCADgBQCOhKC5hBQghgogmgRQgBAAgBgBQijA5hbArQgDACgDABQgOAHgLAG");
	this.shape_10.setTransform(32.4691,18.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AgKgQQAKAPALAS");
	this.shape_11.setTransform(46.8,9.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#479DD8").s().p("AiJASQACgbARAGIABAAIAGADIABABIAFADIABAAQAVAMAYAHQAGASgPANIgFAAQgiAAgegkgAB6geIgEgDIAAgDIAAgGIABgDIACgCIABgDQABgDADAAQADAAACAEIADAFIABACIACACQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQgEADgEAAIgEAAg");
	this.shape_12.setTransform(32.12,41.2357);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAUgRATQgMgUgEgQg");
	this.shape_13.setTransform(14.825,23.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#7B5741").s().p("Ag6BUQARgTAogWIAKgGQgJAuATAuIg6AgIgCABIgbARQgOgnAYg4gAhRgBQABgrAWglQAgg1A2gaIAGgCIAGgDIAUgHIAXgGQgNAJgKAJIgUASIgGAHQg6BAALBNQgcARgiAZQgHgXABgag");
	this.shape_14.setTransform(18.1941,18.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#513412").s().p("AgFAXQgGgCgBgHQgCgIADgIQACgKAFgFQAFgGAFACQAGABABAHQACAIgDAIQgDAKgFAFQgEAFgDAAIgCAAgAgEgIIgDAGIgBAGQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIADgDIACgFQABgFAAgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_15.setTransform(45.0044,32.7989);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgIAkQgcgVAdgxIAEgBQAEAQARgKIAFAIQADA5ghAAIgBAAgAABgMQgEAFgDAJQgDAJACAIQACAHAFACQAFABAFgGQAFgFADgKQACgIgCgIQgBgHgFgBIgDgBQgEAAgEAFgAgCAJIAAgHIACgFQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAAAQABABAAABQAAACgBAEIgDAGIgCADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBgAAIgiIADAAIABABIgEgBg");
	this.shape_16.setTransform(44.4807,32.2752);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8C6A3").s().p("AgjBvIAAgCIAAACIAAAAIhAgPIgMgDIAAAAIAcgzQAIADALAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQgcgOANg6QAsgUAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHQAJgJADgEQAKgPAAgUQAEAcAKANQADAGAGAEQgJAEgHAAIgBgBIgDAAIgBAAQgIgCgGgKIADALIgEABQgdAyAcAUQAjAAgDg5IgFgIIAKgIIADABQABAagEAQQA2AVg9AaQgDALgEAKQgIAPgNALQgBgPgZgGQAZAGABAPIgKAHQgPAJgeAHIggAIIAAAAIAAAAQABABABAAQAAAAABABQAAAAAAAAQAAAAgBAAIgCAAgAA5ARIgBADIgCABIgBADIAAAGIABADIAEADQAGACAGgEQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgCgCIgBgBIgCgGQgDgDgCAAQgEAAgBADgAg5AUIAAgHQAAgHgDgGQgGgMgQgLQAQALAGAMQADAGAAAHIAAAHgAhIATIgBgGQAAgKANgDQgNADAAAKIABAGgAA0BOIAAAAg");
	this.shape_17.setTransform(38.5873,34.4731);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D16826").s().p("AgPABIgCgKQAFAJAJACIABAAIADABQAHAAAJgDIABgBIgBABIgLAHQgGADgEAAQgHABgEgKg");
	this.shape_18.setTransform(45.625,28.5996);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FECE00").s().p("AigDdIgCgGQgBgKAFgMIAAgBIgBABQgIADgHAAQgHgCgIgIIAAgBQAagGAIgfIABgGIgIgMQgLgUgCgSQgFgbAPgWQBFgiACA9IAAAEIgCASIgCARIgCAFIgBAGIgMARQgOAXgHATIAAABQgGATADAQIABAGQAFATAUAQQgpgOgIgVgAkcB4QgDgDgBgFQAFAJAHAEQgFgCgDgDgAglgCQgQgFgOgHIgFgCIgBgBIgFgDQgHgYAMgYQACgGAEgGQA4hVEVhaIAXAAQgKAdgWAHQgXAHgLgIQAHAOgIATQgHARgHAIQgLAMgLADIgCgBIABgBIgCABQgFgEgEgGQgKgNgEgcQAAAUgKAPQgDAEgJAJQgHAHgVAHQAPgcgPgWQgBAsglAZIAAgYIgYAnQgHgkgrAUQgNA7AbAOIgbAyIgWgGg");
	this.shape_19.setTransform(28.9625,43.375);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FE9901").s().p("Ai6DjIgBgGQgDgQAGgTIAAgBQAHgTAOgXIAMgRIABgFIACgGIACgRIACgSIAAgEQgCg9hFAjQARgcArgTQAgAnAkgDIAIAUIABADIADASIABAVQABAKgCAKQgEAWgLATQgKAQgPAPIgLAHQgQAJgIAMIgFAHQgJAPADAUQgUgRgFgTgAiCgOIgFgEIgCgBQgbgQgVgYIgOgRIACgBIA7ghIAPgIIAGgDQCOhLC5hCQgJAMAPABQkVBbg4BUQgEAGgCAGQgMAYAHAZg");
	this.shape_20.setTransform(33.975,42.75);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B19482").s().p("AinBCIAZgNIAHgDQBbgsCig4IADABQAmARAhAnQi6BCiNBKIgHADIgPAIQgSguAIgugAiOhpIAHgHIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA7IgHADQgYANgXAOQgMhMA7hAg");
	this.shape_21.setTransform(35.8062,15.825);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#584A41").s().p("AiaAsQAXgPAYgMIAHgEQBug6B8gdIAVAiIgCgBQijA4haAsIgHADIgZANQgNgBgJgeg");
	this.shape_22.setTransform(32.35,14.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#479DD8").s().p("AiJASQACgbARAGIABAAIAGADIABABIAFADIABAAQAVAMAYAHQAGASgPANIgFAAQgiAAgegkgABlgQIgFgEIgCgBIgBgDQgBgFACgCIADgCIACgEQADgEAEAEIACAHIADAHQAAAFgDACIgEABIgDgBgAB6geIgEgDIAAgDIAAgGIABgDIACgCIABgDQABgDADAAQADAAACAEIADAFIABACIACACQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBABQAAAAAAABQgBABAAAAQAAAAgBABQAAAAgBAAQgEADgEAAIgEAAg");
	this.shape_23.setTransform(32.12,41.2357);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F8C6A3").s().p("AgjBvIAAgCIAAACIAAAAIhAgPIgMgDIAAAAIAcgzQAIADALAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQgcgOANg6QAsgUAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHQAJgJADgEQAKgPAAgUQAEAcAKANQADAGAGAEQgJAEgHAAIgBgBIgDAAIgBAAQgIgCgGgKIADALIgEABQgdAyAcAUQAjAAgDg5IgFgIIAKgIIADABQABAagEAQQA2AVg9AaQgDALgEAKQgIAPgNALQgBgPgZgGQAZAGABAPIgKAHQgPAJgeAHIggAIIAAAAIAAAAQABABABAAQAAAAABABQAAAAAAAAQAAAAgBAAIgCAAgAAiAeIgBADIgDADQgCACABAEIAAADIADACIAEAEQAEACADgDQAEgCAAgEIgDgIIgCgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgAA5ARIgBADIgCABIgBADIAAAGIABADIAEADQAGACAGgEQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgCgCIgBgBIgCgGQgDgDgCAAQgEAAgBADgAg5AUIAAgHQAAgHgDgGQgGgMgQgLQAQALAGAMQADAGAAAHIAAAHgAhIATIgBgGQAAgKANgDQgNADAAAKIABAGgAA0BOIAAAAg");
	this.shape_24.setTransform(38.5873,34.4731);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#479DD8").s().p("AiVASQACgbAQAGIACAAIAFADIACABIAFADIABAAQAVAMAYAHQAGASgQANIgFAAQghAAgegkgACGAbIgCgIIgCgHQgBgFACgCQACgDAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAIADAEIACABQADACAAADIgCAKQgBAEgBABIgFABQgFAAgCgCgABYgQIgEgEIgDgBIAAgDQgBgFACgCIADgCIABgEQAEgEAEAEIACAHIADAHQAAAFgEACIgDABIgEgBgABugeIgEgDIgBgDIAAgGIABgDIACgCIABgDQABgDAEAAQACAAADAEIACAFIABACIACACQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgEADgFAAIgDAAg");
	this.shape_25.setTransform(33.375,41.2357);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#B0947F").ss(0.5,1,1).p("ABvA0QAOgLAHgPQAFgKACgLQA+gZg2gWQAEgQgBgaABpA5QADgCADgDABWAfQAZAGAAAPAirgCQAVAWAbARAhzAqQADACACABQABABAAAAQADABADABQAOAHAPAFQAKADAMAEQABAAAAAAQAGACAGABQA3AMAHACIABABAAYBTIAAAAQAHgCAZgGQAXgFAOgHAgng4QAsgUAGAkAABATQgOABgKgE");
	this.shape_26.setTransform(32.6123,37.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#479DD8").s().p("AiVASQACgbAQAGIACAAIAFADIACABIAFADIABAAQAVAMAYAHQAGASgQANIgFAAQghAAgegkgABbArQgEgCgBgFIgBgHIABgIIAAgCQACgGAGABIADABIACAFIAAAGIADACQAEADgBAFQAAAFgFACQgCACgDAAQAAAAgBAAQgBgBAAAAQgBAAAAAAQgBgBAAAAgACGAbIgCgIIgCgHQgBgFACgCQACgDAFAAQABAAAAAAQABAAABAAQAAABABAAQAAAAAAAAIADAEIACABQADACAAADIgCAKQgBAEgBABIgFABQgFAAgCgCgABYgQIgEgEIgDgBIAAgDQgBgFACgCIADgCIABgEQAEgEAEAEIACAHIADAHQAAAFgEACIgDABIgEgBgABugeIgEgDIgBgDIAAgGIABgDIACgCIABgDQABgDAEAAQACAAADAEIACAFIABACIACACQABAAAAAAQAAABAAAAQAAABAAAAQAAABAAABQgBAAAAABQAAABgBAAQAAAAAAABQgBAAAAAAQgEADgFAAIgDAAg");
	this.shape_27.setTransform(33.375,41.2357);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#F8C6A3").s().p("AgjBvIAAgCIAAAAIAAAAIAAACIAAAAIhAgPIgMgDIAAAAIAcgzQAIADALAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQgcgOANg6QAsgUAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHQAJgJADgEQAKgPAAgUQAEAcAKANQADAGAGAEQgJAEgHAAIgBgBIgDAAIgBAAQgIgCgGgKIADALIgEABQgdAyAcAUQAjAAgDg5IgFgIIAKgIIADABQABAagEAQQA2AVg9AaQgDALgEAKQgIAPgNALQgBgPgZgGQAZAGABAPIgHAFIgDgBQgGgBgCAGIAAACQgPAHgWAFIggAIQABABABAAQAAAAABABQAAAAAAAAQAAAAgBAAIgCAAgAAiAeIgBADIgDADQgCACABAEIAAADIADACIAEAEQAEACADgDQAEgCAAgEIgDgIIgCgGQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAgBABgAA5ARIgBADIgCABIgBADIAAAGIABADIAEADQAGACAGgEQAAAAABgBQAAAAAAAAQABgBAAAAQAAgBABgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAgBgBIgCgCIgBgBIgCgGQgDgDgCAAQgEAAgBADgAg5AUIAAgHQAAgHgDgGQgGgMgQgLQAQALAGAMQADAGAAAHIAAAHgAhIATIgBgGQAAgKANgDQgNADAAAKIABAGgAA0BOIAAAAg");
	this.shape_28.setTransform(38.5873,34.4731);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_24},{t:this.shape_16},{t:this.shape_15},{t:this.shape_23},{t:this.shape_14},{t:this.shape_13},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape},{t:this.shape_8},{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_24},{t:this.shape_16},{t:this.shape_15},{t:this.shape_25},{t:this.shape_14},{t:this.shape_13},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape},{t:this.shape_8},{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_28},{t:this.shape_16},{t:this.shape_15},{t:this.shape_27},{t:this.shape_14},{t:this.shape_13},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape},{t:this.shape_26},{t:this.shape_7},{t:this.shape_5},{t:this.shape_6},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},2).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-1,58.8,71);


(lib.head_gfall = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAAAAIAAAB");
	this.shape.setTransform(35,45.4625);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJABQgPAFAEAPAAJABQAGAKgDALAgMgVQAPALAGAL");
	this.shape_1.setTransform(31.5391,34.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#0777B7").ss(0.5,1,1).p("AgTgbQAAAAgBgBQgRgFgCAbQAhAmAjgDQAPgNgGgQ");
	this.shape_2.setTransform(22.3337,43.6644);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AABiBQgqAUgRAbQgOAWAEAaQADATALATQADAGAEAGQAAAEgBACQgHAfgbAGAgyBDQgGAMACAKQAAAEABACQAIAVApAOQgDgTAJgQQACgDADgEQAIgMAQgIQAFgEAGgDQAPgPAJgQQALgUAEgVQACgJAAgLQAAgKgBgLQgCgIgCgJQAAgBAAgCQgEgKgEgLAhRA8QAHAIAIACQAGAAAJgE");
	this.shape_3.setTransform(18.23,56);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgOQAJAdAMAB");
	this.shape_4.setTransform(17.925,20.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQACgBAJgE");
	this.shape_5.setTransform(18.5,22.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAcgRQAYgOAYgMQADgCADgBQBvg8B8gc");
	this.shape_6.setTransform(28.15,17.325);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B0947F").ss(0.5,1,1).p("ABvA0QAOgLAHgPQAFgKACgLQA+gZg2gWQAEgQgBgaAAYBTIAAAAQAHgCAZgGQAegHAQgJQAFgDAEgEABWAfQADAQAWAFABhANQgFALgGAHQgMAOgNgCAirgCQAVAWAbARAhzAqQADACACABQABABAAAAQADABADABQAOAHAPAFQAKADAMAEQABAAAAAAQAGACAGABQA3AMAHACIABABAABATQgOABgKgEAgng4QAsgUAGAk");
	this.shape_7.setTransform(32.6123,37.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E39517").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHABAQAAQgLAcgWAHQgWAIgLgIQAHANgJATQgHARgGAIQgLANgLADAhYAdIAYgmIAAAXQAlgZACgrQAPAVgPAdQAVgIAGgGQAJgJADgFQAKgPAAgUQAEAcAJAOAiYCJIAdgz");
	this.shape_8.setTransform(42.625,30.15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#745F4A").ss(1,1,1).p("AiQAwQgoAWgRASQgYA4AOAnQANgIAOgIQABgBABAAQAdgRAegQQAHgEAIgEQADgCADgBQCOhKC5hBQghgogmgRQgBAAgBgBQijA5hbArQgDACgDABQgOAHgLAGAjaA1QgHgYABgaQABgrAWglQAgg1A3gZQADgCADgBQADgBADgBQAKgEAKgDQAMgEALgCQA8gPAkAKQAeAIAVAPQAIAGAHAHQAOAOAPAV");
	this.shape_9.setTransform(32.4691,18.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AgKgQQAKAPALAS");
	this.shape_10.setTransform(46.8,9.175);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#479DD8").s().p("AgngGQACgbARAFIABABIAFADIACABIAFADIABABQAUAMAYAHQAGAQgPANIgFABQghAAgegkg");
	this.shape_11.setTransform(22.3337,43.6644);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAUgRATQgMgUgEgQg");
	this.shape_12.setTransform(14.825,23.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B5741").s().p("Ag6BUQARgTAogWIAKgGQgJAuATAuIg6AgIgCABIgbARQgOgnAYg4gAhRgBQABgrAWglQAgg1A2gaIAGgCIAGgDIAUgHIAXgGQgNAJgKAJIgUASIgGAHQg6BAALBNQgcARgiAZQgHgXABgag");
	this.shape_13.setTransform(18.1941,18.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513412").s().p("AgFAXQgGgCgBgHQgCgIADgIQACgKAFgFQAFgGAFACQAGABABAHQACAIgDAIQgDAKgFAFQgEAFgDAAIgCAAgAgEgIIgDAGIgBAGQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIADgDIACgFQABgFAAgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_14.setTransform(45.0044,32.7989);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgIAkQgcgVAdgxQAHgCAHACIABAAIADAAQAHADAFAKQADA5ghAAIgBAAgAABgMQgEAFgDAJQgDAJACAIQACAHAFACQAFABAFgGQAFgFADgKQACgIgCgIQgBgHgFgBIgDgBQgEAAgEAFgAgCAJIAAgHIACgFQABgBAAAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAABQAAACgBAEIgDAGIgCADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_15.setTransform(44.4807,32.2679);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#F8C6A3").s().p("AgjBvIAAgCIAAACIAAAAIhAgPIgMgDIAAAAIAcgzQAIADALAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQgcgOANg6QAsgUAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHIAYAGQgHgCgIACQgdAyAcAUQAjAAgDg5IAIgPQABAagEAQQA2AVg9AaQgDALgEAKQgIAPgNALQgWgFgEgQQAGgHAGgLQgGALgGAHIgBABIAAAAQgJALgLAAIAAAAIAAAAIgDAAIADAAIAAAAIAAAAQALAAAJgLIAAAAIABgBQAEAQAWAFIgKAHQgPAJgeAHIggAIIAAAAIAAAAQABABABAAQAAAAABABQAAAAAAAAQAAAAgBAAIgCAAgAg5AUIAAgHQAAgHgDgGQADAGAAAHIAAAHgAhIATIgBgGQAAgKANgDQgGgMgQgLQAQALAGAMQgNADAAAKIABAGgAA0BOIAAAAgAAaA5IAAAAgAA2hLQAKgPAAgUQAEAcAKANQgKgIgOACg");
	this.shape_16.setTransform(38.5873,34.4731);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D16826").s().p("AAEAEIgDAAIgBgBIgXgEQAJgJADgFQAMgBAKAIQAFAIAIACIgJAOQgEgJgHgDg");
	this.shape_17.setTransform(45.2,28.4382);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FECE00").s().p("AigDdIgCgGQgBgKAFgMIAAgBIgBABQgIADgHAAQgHgCgIgIIAAgBQAagGAIgfIABgGIgIgMQgLgUgCgSQgFgbAPgWQBFgiACA9IAAAEIgCASIgCARIgCAFIgBAGIgMARQgOAXgHATIAAABQgGATADAQIABAGQAFATAUAQQgpgOgIgVgAkcB4QgDgDgBgFQAFAJAHAEQgFgCgDgDgAglgCQgQgFgOgHIgFgCIgBgBIgFgDQgHgYAMgYQACgGAEgGQA4hVEVhaIAXAAQgKAdgWAHQgXAHgLgIQAHAOgIATQgHARgHAIQgLAMgLADQgHgDgFgIQgKgNgEgcQAAAUgKAPQgDAEgJAJQgHAHgVAHQAPgcgPgWQgBAsglAZIAAgYIgYAnQgHgkgrAUQgNA7AbAOIgbAyIgWgGg");
	this.shape_18.setTransform(28.9625,43.375);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FE9901").s().p("Ai6DjIgBgGQgDgQAGgTIAAgBQAHgTAOgXIAMgRIABgFIACgGIACgRIACgSIAAgEQgCg9hFAjQARgcArgTQAgAnAkgDIAIAUIABADIADASIABAVQABAKgCAKQgEAWgLATQgKAQgPAPIgLAHQgQAJgIAMIgFAHQgJAPADAUQgUgRgFgTgAiCgOIgFgEIgCgBQgbgQgVgYIgOgRIACgBIA7ghIAPgIIAGgDQCOhLC5hCQgJAMAPABQkVBbg4BUQgEAGgCAGQgMAYAHAZg");
	this.shape_19.setTransform(33.975,42.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B19482").s().p("AinBCIAZgNIAHgDQBbgsCig4IADABQAmARAhAnQi6BCiNBKIgHADIgPAIQgSguAIgugAiOhpIAHgHIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA7IgHADQgYANgXAOQgMhMA7hAg");
	this.shape_20.setTransform(35.8062,15.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#584A41").s().p("AiaAsQAXgPAYgMIAHgEQBug6B8gdIAVAiIgCgBQijA4haAsIgHADIgZANQgNgBgJgeg");
	this.shape_21.setTransform(32.35,14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.1,-1,58.8,71);


(lib.head_g = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgUABQABgBACAAQAEAAAFAAQAPAAANAB");
	this.shape.setTransform(29.9,45.675);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B16D44").ss(0.5,1,1).p("AglgJIAQARAAmAGIAAACIAAAC");
	this.shape_1.setTransform(31.175,44.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJABQgPAFAEAPAAJABQAGAKgDALAgMgVQAPALAGAL");
	this.shape_2.setTransform(31.5391,34.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#0777B7").ss(0.5,1,1).p("AgLggQgQgLgJAbQAWAtAiAHQASgJgBgT");
	this.shape_3.setTransform(16.6058,40.0054);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AAjh8QguAJgXAVQgTARgDAbQgCATAGAWQABAHADAGQgCADgBACQgPAcgbgBAgkB9QAEglAtgOQAGgDAHgBQASgLAOgOQAPgQAKgUQAEgJACgJQADgKABgKQABgJAAgJQAAgBAAgCQAAgKgCgMAhAAzQgfAjAvAg");
	this.shape_4.setTransform(9.425,50.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgOQAJAdAMAB");
	this.shape_5.setTransform(17.925,20.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQACgBAJgE");
	this.shape_6.setTransform(18.5,22.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAcgRQAYgOAYgMQADgCADgBQBvg8B8gc");
	this.shape_7.setTransform(28.15,17.325);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAbBSQAFgCAbgGQAbgGAQgJQAUgNAKgUQAFgKACgLQA+gZg2gWQAEgQgBgaAhzAqQADACACABQADACAEABQAOAHAPAFQAKADAMAEQAHACAGABQA5ANAGACAABATQgOABgKgEAgng4QAsgUAGAkAirgCQAVAXAcAR");
	this.shape_8.setTransform(32.6123,37.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E39517").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHABAQAAQgLAcgWAHQgWAIgLgIQAHANgJATQgHARgGAIQgLANgLADAhYAdIAYgmIAAAXQAlgZACgrQAPAVgPAdQAVgIAGgGQAJgJADgFQAKgPAAgUQAEAcAJAOAiYCJIAdgz");
	this.shape_9.setTransform(42.625,30.15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#745F4A").ss(1,1,1).p("AiQAwQgoAWgRASQgYA4AOAnQANgIAOgIQABgBABAAQAdgRAegQQAHgEAIgEQADgCADgBQCOhKC5hBQghgogmgRQgBAAgBgBQijA5hbArQgDACgDABQgOAHgLAGAjaA1QgHgYABgaQABgrAWglQAgg1A3gZQADgCADgBQADgBADgBQAKgEAKgDQAMgEALgCQA8gPAkAKQAeAIAVAPQAIAGAHAHQAOAOAPAV");
	this.shape_10.setTransform(32.4691,18.325);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AgKgQQAKAPALAS");
	this.shape_11.setTransform(46.8,9.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#B19582").s().p("AgUABIADgBIAJAAQAPAAAOABg");
	this.shape_12.setTransform(29.9,45.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#479DD8").s().p("AgkgQQAJgbAQALQAUAYAcAQQABATgSAJQgigHgWgtg");
	this.shape_13.setTransform(16.6058,40.0054);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAUgRATQgMgUgEgQg");
	this.shape_14.setTransform(14.825,23.25);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#7B5741").s().p("Ag6BUQARgTAogWIAKgGQgJAuATAuIg6AgIgCABIgbARQgOgnAYg4gAhRgBQABgrAWglQAgg1A2gaIAGgCIAGgDIAUgHIAXgGQgNAJgKAJIgUASIgGAHQg6BAALBNQgcARgiAZQgHgXABgag");
	this.shape_15.setTransform(18.1941,18.775);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#513412").s().p("AgFAXQgGgCgBgHQgCgIADgIQACgKAFgFQAFgGAFACQAGABABAHQACAIgDAIQgDAKgFAFQgEAFgDAAIgCAAgAgEgIIgDAGIgBAGQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIADgDIACgFQABgFAAgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_16.setTransform(45.0044,32.7989);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AghAmIA6AAQgKAVgTAMQgiAAAFghgAADAAQgcgUAcgyQAIgBAIACIABAAIADAAQAHADAEAJQADA5giAAIAAAAgAAMgwQgFAGgCAJQgDAKACAHQABAIAGABQAFACAFgGQAFgGADgJQADgKgCgHQgBgHgGgCIgCAAQgEAAgFAEgAAIgZIABgHIADgHQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAABAAAAQABADgCAEIgCAHIgDACQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_17.setTransform(43.3104,35.8177);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F8C6A3").s().p("AhBBwQgNgCgRAAIgQgSIAMADIBAAPIAAACgAgjBuIAAgCIAAACIhAgPIgMgDIAcgzQgcgOANg6QAsgUAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHIAYAGQgHgCgIACQgdAyAcAUQAjAAgDg5IAIgPQABAagEAQQA2AVg9AaQgDALgEAKIg8AAQgEAhAhAAQgPAJgbAGIgfAIIgEABQABAAABABQAAAAABABQAAAAAAAAQAAAAgBAAIgCAAgAg/AsIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQAIADALAAIABAAIAAAAgAg5ATIAAgHQAAgHgDgGQADAGAAAHIAAAHgAhIASIgBgGQAAgKANgDQgGgMgQgLQAQALAGAMQgNADAAAKIABAGgAA2hMQAKgPAAgUQAEAcAKANQgKgIgOACg");
	this.shape_18.setTransform(38.5873,34.575);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D16826").s().p("AAEAEIgDAAIgBgBIgXgEQAJgJADgFQAMgBAKAIQAFAIAIACIgJAOQgEgJgHgDg");
	this.shape_19.setTransform(45.2,28.4382);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FECE00").s().p("AkECeQgRACgHgIQgDgDgCgGQAcABAPgcIACgFIgDgOQgHgWACgTQAEgbATgRQBMgOgOA6IgBADIgGASIgHAPIgCAFIgDAFIgQAOQgTASgMARIgBABQgZAnAPAhQgugfAegjgAglAdQgPgFgOgHIgHgDIgFgDQgHgXAMgYQADgGAEgGQA3hVEWhaIAWAAQgKAdgWAHQgWAHgMgIQAIAOgJATQgHARgHAIQgKAMgLADQgIgDgFgIQgKgNgDgcQAAAUgKAPQgEAEgIAJQgIAHgVAHQAQgcgQgWQgBAsglAZIAAgYIgYAnQgGgkgsAUQgNA7AcAOIgcAyIgWgHg");
	this.shape_20.setTransform(28.95,40.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FE9901").s().p("AjxDpIgKgGQgQghAagnIAAgBQAMgRATgSIAQgOIADgFIACgFIAHgQIAGgRIABgDQAOg7hMAOQAXgUAvgJQAWAtAjAHIACAWIAAADIgBARIgEAVQgCAKgEAJQgKAUgPAQQgOANgSALIgNAEQguAOgEAlIgCgBgAhdAJQgcgQgVgYIgOgRIACgBIA6ghIAPgIIAHgDQCNhKC6hCQgKAMAQAAQkVBbg4BVQgEAFgDAGQgMAYAHAYIgHgFg");
	this.shape_21.setTransform(29.7452,39.925);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B19482").s().p("AinBCIAZgNIAHgDQBbgsCig4IADABQAmARAhAnQi6BCiNBKIgHADIgPAIQgSguAIgugAiOhpIAHgHIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA7IgHADQgYANgXAOQgMhMA7hAg");
	this.shape_22.setTransform(35.8062,15.825);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#584A41").s().p("AiaAsQAXgPAYgMIAHgEQBug6B8gdIAVAiIgCgBQijA4haAsIgHADIgZANQgNgBgJgeg");
	this.shape_23.setTransform(32.35,14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,59.9,65.4);


(lib.Head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#9C624C").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHABAQAAQgLAcgWAHQgWAIgLgIQAHANgJATQgHARgGAIQgLANgLADAhYAdIAYgmIAAAXQAlgZACgrQAPAVgPAdQAVgIAGgGQAJgJADgFQAKgPAAgUQAEAcAJAOAiYCJIAdgz");
	this.shape.setTransform(42.625,30.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#B16D44").ss(0.5,1,1).p("AglgNIAQAQAAmABIAAACIAAAL");
	this.shape_1.setTransform(31.175,45.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgjgHQAFAAAEAAAAhAEQABADACAB");
	this.shape_2.setTransform(31.7,46.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJABQAGAKgDALAAJABQgPAFAEAPAgMgVQAPALAGAL");
	this.shape_3.setTransform(31.5391,34.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAcgRQAbgQAbgNQBvg8B8gc");
	this.shape_4.setTransform(28.15,17.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQACgBAJgE");
	this.shape_5.setTransform(18.5,22.775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgOQAJAdAMAB");
	this.shape_6.setTransform(17.925,20.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAiBSQAFgCAbgGQAbgGAPgJQAVgNAKgUQAEgKADgLQA9gZg2gWQAEgQgBgaAixgUIAFAFQAGAGAHAHQACACACAAQABABABABQAUATAXAUAhsAqQAFADAGADQAOAHAQAFQAJADANAEQAGACAGABQA6ANAFACAggg4QArgUAHAkAAIATQgPABgKgE");
	this.shape_7.setTransform(31.9873,37.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#745F4A").ss(1,1,1).p("AiQAwQgoAWgRASQgYA4AOAnQANgIAOgIIAAAAQABgBABAAQAAAAAAAAQAAAAAAAAQAdgRAegQQAKgGALgFQCOhKC5hBQghgogmgRQgBAAgBgBQijA5hbArQgRAIgOAIAjaA1QgHgYABgaQABgrAWglQAgg1A3gZQAGgDAGgCQAKgEAKgDQAMgEALgCQA8gPAkAKQAeAIAVAPQAIAGAHAHQAOAOAPAV");
	this.shape_8.setTransform(32.4691,18.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AgKgQQAKAPALAS");
	this.shape_9.setTransform(46.8,9.175);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D9542F").s().p("AiNB7QgPgFgOgHIgMgGQgIgeAUgeQA4hUEVhaIAXAAQgLAdgWAHQgWAHgLgIQAHAOgJATQgHARgGAIQgLAMgLADQgIgDgFgIQgJgNgEgcQAAAUgKAPQgDAEgJAJQgHAHgVAHQAPgcgPgWQgCAsgkAYIAAgXIgYAmQgGgjgtATQgNA7AdAOIgdAzIgWgHg");
	this.shape_10.setTransform(39.3482,30.775);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#BC1C0A").s().p("AiLB2IgrgoIgCgBIgDgEIgOgMIgFgGIAAAAIA7ghIAVgLQCOhJC5hCQgJAMAPAAQkVBbg4BUQgUAeAJAeIALAKIgNgLg");
	this.shape_11.setTransform(34.875,29.404);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAUgRATQgMgUgEgQg");
	this.shape_12.setTransform(14.825,23.25);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#7B5741").s().p("Ag6BUQARgTAogWIAKgGQgJAuATAuIg6AgIAAABIgBAAIgBAAIAAAAIgbARQgOgnAYg4gAhRgBQABgrAWglQAgg1A2gaIAMgFIAUgHIAXgGQgNAJgKAJIgUASQhBBDAMBRQgcARgiAZQgHgXABgag");
	this.shape_13.setTransform(18.1941,18.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#513412").s().p("AgFAXQgGgCgBgHQgCgIADgIQACgKAFgFQAFgGAFACQAGABABAHQACAIgDAIQgDAKgFAFQgEAFgDAAIgCAAgAgEgIIgDAGIgBAGQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIADgDIACgFQABgFAAgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_14.setTransform(45.0044,32.7989);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AghAmIA6AAQgKAVgTAMQgiAAAFghgAADAAQgcgUAcgyQAIgBAIACIABAAIADAAQAHADAEAJQADA5giAAIAAAAgAAMgwQgFAGgCAJQgDAKACAHQABAIAGABQAFACAFgGQAFgGADgJQADgKgCgHQgBgHgGgCIgCAAQgEAAgFAEgAAIgZIABgHIADgHQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABQAAABAAAAQABADgCAEIgCAHIgDACQAAAAgBAAQAAAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_15.setTransform(43.3104,35.8177);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D16826").s().p("AAEAEIgDAAIgBgBIgXgEQAJgJADgFQAMgBAKAIQAFAIAIACIgJAOQgEgJgHgDg");
	this.shape_16.setTransform(45.2,28.4382);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F8C6A3").s().p("AhfBpIgQgRIAMADIBAAOIAAALQgWgJgmgCgAgjBpIAAgBIAAABIhAgOIgMgDIAcgzQgcgOANg7QAsgTAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHIAYAGQgHgCgIABQgdAzAcATQAjABgDg5IAIgPQABAagEAQQA2AVg9AZQgDAMgEAKIg8AAQgEAgAhAAQgPAKgbAGIgfAIIgEABQABAAABABQAAAAABAAQAAABAAAAQAAAAgBAAIgCgBgAg/AoIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQAIADALAAIABAAIAAAAgAg5APIAAgHQAAgIgDgFQgGgNgQgKQAQAKAGANQADAFAAAIIAAAHgAhIAOIgBgGQAAgKANgDQgNADAAAKIABAGgAhvBYIAAAAgAA2hRQAKgOAAgVQAEAdAKANQgKgIgOABg");
	this.shape_17.setTransform(38.5873,35);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FE9901").s().p("AgCgCIAAAAIAFAFIgFgFg");
	this.shape_18.setTransform(14.4125,35.2109);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B19482").s().p("AinBCIAggQQBbgsCig4IADABQAmARAhAnQi6BCiNBKIgWALQgSguAIgugAiHhwIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA7QgcAOgaAQQgMhQBChDg");
	this.shape_19.setTransform(35.8077,15.825);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#584A41").s().p("AiaAsQAagRAcgOQBug6B8gdIAVAiIgCgBQijA4haAsIggAQQgNgBgJgeg");
	this.shape_20.setTransform(32.35,14.975);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,-1,49.9,49.1);


(lib.hand_box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CAA081").ss(0.5,1,1).p("AAFArQgNgTAAgWQABgFABgHQAEgOAJgPQABgCABgB");
	this.shape.setTransform(0.8742,6.175);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#CBA184").ss(0.5,1,1).p("AASgLQAOADALgFQAEgCADgEIAAAAAAHgsQAVgBAPAKQAEAGADAIAArATQAEgNACgQQABgCAAgDAgugtQAHgEAGgEQACgBADgBQAKgFAJgCQALgCAKACQANADALAMAAAA0QAOAEAQgIQAIgLAFgSAgxApQA0AqAbgjAAPAYQAUAEAIgJ");
	this.shape_1.setTransform(6.425,6.408);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F8C7A2").s().p("AgqApQgPgUABgVIACgNQAEgNAJgPIACgEIANgIIAFgCQAKgFAJgCQALgCAKACQANADALAMIAHAMQgNgJgRAAIgBAAIAAAAIgDAAIgCAAIACAAIADAAIAAAAIABAAQARAAANAJIAHAOIAAACIAAAAQgDAEgEACQgHADgIAAIAAAAIgBAAIgIAAIgBgBIABABIAIAAIABAAIAAAAQAIAAAHgDQAEgCADgEIAAAEIgBAFQgCAQgEANIAAAAIgBABQgGAFgLAAIAAAAIAAAAIgHAAIgCAAIgBgBIABABIACAAIAHAAIAAAAIAAAAQALAAAGgFIABgBIAAAAQgFASgIALIgCABQgJAEgJAAIAAAAIAAAAIgJgBIgBAAIABAAIAJABIAAAAIAAAAQAJAAAJgEIACgBQgMAQgSAAQgUAAgdgXgAA5gTIAAAAgAAygjIAAAAg");
	this.shape_2.setTransform(5.7242,6.408);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,13.5,14.8);


(lib.Hand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAwAVQAFgMAAgPIAAAAQAAgKgHgXQgZgOgxAMQgpAsAcAdQAGAHALAGQAFABAFABQgGgRADgGAgpAgQACgPABgDAAWAsQADgBACAAQAMgGAHgLQABgDABgCQgGAFgFgYQAFgFALgDAAWAsQgOgIACgOAAgARQAAgJAFgGAgOAvQAVACAPgF");
	this.shape.setTransform(5.3027,4.7591);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F8C6A3").s().p("AgOAvQgEgMAAgGIABgFIgBAFQAAAGAEAMIgKgCQgLgGgGgHQACgPABgDQgBADgCAPQgcgdApgsQAxgMAZAOQAHAXAAAKIAAAAQgLADgFAFQAFgFALgDQAAAPgFAMIAAAAIgCABIAAAAIAAAAQgFgBgDgRIAAgBIAAAAIgBgBIABABIAAAAIAAABQADARAFABIAAAAIAAAAIACgBIAAAAIgCAFQgHALgMAGIgFABQgMgHAAgLIAAgEIAAAEQAAALAMAHQgKAEgNAAIgNgBgAAgARQAAgJAFgGQgFAGAAAJgAA1gGIAAAAg");
	this.shape_1.setTransform(5.3027,4.7591);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,12.6,11.5);


(lib.chat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("לא נורא חבר", "bold 100px 'Calibri'");
	this.text.textAlign = "center";
	this.text.lineHeight = 124;
	this.text.lineWidth = 538;
	this.text.parent = this;
	this.text.setTransform(320.1,-95);

	this.instance = new lib.Bitmap6();
	this.instance.parent = this;
	this.instance.setTransform(-53,-164,0.8079,0.7057);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#660000").ss(0.5,1,1).p("AgJABQAJgBAKAA");
	this.shape.setTransform(275.0875,-44.0625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53,-164,752.1,292.2);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.shoe("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(6957.8,-2421.5,73.8364,73.8364,-68.7127,0,0,6.5,6.2);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(2337.1,-3828.4,73.8378,73.8378,66.2856,0,0,6.3,6.2);

	this.instance_2 = new lib.runingchild("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(6559.05,-6790.95,1,1,0,0,0,858.8,924.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B17141").ss(0.5,1,1).p("A+v63QRyW/P9wvQDZdYYXSH");
	this.shape.setTransform(6200,-6247.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(0.5,1,1).p("ECIqlCOQALgNAKgMECFvlC3IC7ApQCfDoI2ihEBlPkynQHJpoL3BYQANBRARBNQCMKHGmGbQXZb/MHYxQDrFVC3EqUA0iAHOASMALzQCZDIgaDWQBXDdhFDHUAisADqAhGAHKII9cSEgjokakQhGiyhSixUAnAgLYBTfAB4QFLm6LliGUATEAdCAJMAwOUAJhAi/AOfAdRQB9pPFjoxQGdqMLTpkQINlNvb5EEDRfkLXQ+QPUnuS7EB4tk4ZQJYiHGlnuEEzVkD/QBJi/ApjREFFPj6HQg0o4pMhAIn6AAQlRN8vtH8ICoCYIHQAAEDxUjJlQgtA2g4A4UgPxAiRAFIAXAQBYAUBZAUUBaCAStA4ugAeQKymCFGoeUAA2gaLgnWgsdQBA7Z44t3Im4AAItYAAQmqCWFQICQBPB5B7CPIJIAAICIAAEDxUjJlIDMAgED0OjPpQgXC9ijDHEEmHjynICoC4INuAAEE1ojGtQ4IAWjRuwQ9PARAPrhQFSqaPuDCQEQEDEgANIGAoQEEa/jjfQJShUCeJkEE9pjWGIC2EPEE1ojGtQDDgCCMgIEE1ojGtICqIcEE03jjHIIyNBEE93jjfIgONZEFGHjD3QBChYGGBYQG5CTN3kjEFCvjrnQApKGO3ACEj2gjEHQiogJioAHQ2uA42CSqQrQFWrQCKQxAO9dzndQEWgzFXhNEh6gjdXQAFACAFABUARBAFBBGFgGDQCNgNCQgMQhBEjhcElQFsElbZAUUgazA52gBiAaxUgMLAiMgQtAbZQgCAEgCAEIgCACQgBACgBACQh7DGh9DDQg6Bcg7BbUgemAi1gDtAT3UgVxAmfg3vAOhQsAlOkgQuQD/GYDpGeUATVAicAJjAlOQBZDwBYDXMhWxAP5UhyqhOCgo2gCeMAYghAgUAz0AeaA9sAOmQTOJ/JoJMQFRFCCZEzEhzAjjXQjpDEjtC/Ugw6AnOg7QAV/QugR7ugMFQ8DOYDIp8QQLk9OAsfEgjQjeWICAIvEAAAjRHQgFAMgGANUAf7AA7A0vgJUEgjokakQLpdUm0ehEgjokakUhWXgB6gbhAOXUguBAXEg4PAy6EhhgABYQMLHeL6F+UgrMAx8BLnAsoQdaP4ZlAoIeVYxQC6COCvCZQACACACABQFWEsEoFZQkROrVRjrQHCwoKpt5QbMKTZZVPQA4AvA4AwEkyNihnQ5PH0CsAcQjEKcWblGQFKhLGiiBQmiBolKBkEk2AiFnQ68BxLsqRQPdg2NsovICvg5QApgNApgOQAEgBAEgBQAfgLAfgKEk2AiFnUgdZAQCA0JgHSQBbgYBagcEkptiXNQAygPA0gQEk2AiFnQOBgWJ/lKEjjqBcjMArygN1EhhgABYUgOxBGmAqrAg7QRMNQaiHJQF7AqFoA9UAjPAF+AXaARyIFpEnEh3kC13QBihtBiiSUA1AgR1AxLghKEivAA2YQp0RNdUczUAPAA1pAU8Ab2EiYPCdfUARBApxAPqgRZEDlGiOmQAfCKAqCFEDn3iN+QgnCohBA/ECiviTGQAIwch4zlEBV3AQIUAhngwwAbBgvPUAP4gVcAAYgtzUAhwALWAhwgCnEBV3AQIQzlPu6zEiUg1KAIVg7wgd5EBV3AQIUApXAbJAJxAQnQD5iDDMADQG2AJDlJ3QiyGvjYGVMA4qArcUAeJBJ4AmXBBoMgzkAs0QBrHRAZG7ECRfCoYQAiEqBOEXUAJvAjLAlhApUQVkdgF4ZUECUVBQ8QsjXh0zR7QqVKbqANEECQEA54QrAd/4lVhQ3ZVWrnfKQmwG8mwjc");
	this.shape_1.setTransform(5056.0567,-4364);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EAAF88").s().p("ED/ABVWUglhgpUgJwgjLIBxBfIhxhfQhNkXgikpQAiEpBNEXQ5Y1O7NqTQKAtDKWqcQUzx7Mj3hMA4qArcUAeIBJ2AmYBBpMgzlAs0Ql35U1k9ggElN/hLpMAYghAgUAz0AeaA9sAOmQTOJ/JnJMQFSFCCZEzQiZkzlSlCMArygN0UATWAiaAJjAlPQBZDwBXDYMhWwAP3UhyqhOBgo2gCeg");
	this.shape_2.setTransform(4668.8,-3285.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B19482").s().p("EiKzAIwQ9U8yJ0xNUA3vgOgAVxgmgUgOxBGmAqrAg6QRMNQaiHKQF7ApFnA9UgxKAhKg1AAR1QhiCShiBuUgU8gb3gPAg1pgEBMsBJwQkolZlWkrIgEgEQiviZi6iOI+V4xQ5mgo9Zv4UhLngsnArMgx8UA7vAd5A1LgIVQazkiTlvuUApXAbJAJxAQnQD5iDDMAEQrAd/4lVfQ3ZVWrnfKQkgEpkhAAQiPAAiQhJg");
	this.shape_3.setTransform(4949.1655,-3777.625);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#AD8065").s().p("EiFvA/UQhXjXhZjwUgJkglPgTVgiaQjomej/mYQEfwvMBFPQp0RNdUcyUAO/A1pAU9Ab2QkmFHkuAAQrWAAsC9fgEBOgBHNQGwDcGwm8QLn/LXZ1VQYl1gLA9/QG1AIDmJ4QiyGvjYGVQsjXg0zR7QqWKbqANEQqoN4nCQpQkQAvjPAAQs7AADarvgEAELAguQlng9l7gqQ6inJxNtRUgqqgg5AOxhGmQMKHeL7F9UgrMAx9BLnAsnQdZP3ZmApIeVYxUgXbgRzgjPgF9g");
	this.shape_4.setTransform(4937.6,-3761.2859);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E7AF8A").s().p("EhptBMiQhaAbhbAYUg0JAHSAdZgQCQ69BxLtqRQPcg2NsouICwg5IBSgbIAIgDIA+gVIg+AVIgIADIhSAbIiwA5IhmAfQmiBnlKBkQ2aFHDEqdQisgcZOnzQEWg0FYhNQlYBNkWA0Q9zHcRBu9QLQiKLQlWQWCyqWtg4QBJgCBJAAIAAAAIABAAQBaAABaAEIAKAAIgKAAQhagEhaAAIgBAAIAAAAQhJAAhJACUA4Qgy5AuAgXEUAbggOXBWYAB7QLpdUm1egIkcAZUhGFAGDgRCgFBUgw6AnNg7OAV/QugR7ugMFQwmIhlsAAQj7AABSkEgEhptBMiQQKk9OBsgQuBMgwKE9gEiDSBElQOBgVJ/lLQp/FLuBAVgEA4WgTHQDti+DqjFQjqDFjtC+gEA4WgTHIgJgDIAJADg");
	this.shape_5.setTransform(3912.3101,-5658.1387);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F9AF80").s().p("EgAGAikQsH4x3Z7+QmmmbiMqGQJYiIGlnuQCfDoI2ihQRxXAP+wwQDadZYWSGQ+QPUnuS7Qi3kqjqlVg");
	this.shape_6.setTransform(6112.675,-6141.225);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EAAE89").s().p("EhPTAx5IixgoUgFIgXBAPxgiPQA4g4Atg2IDMAgUAisADpAhFAHKIipobQDCgCCMgIQiMAIjCACQ4IAVjRuvQ9PARAPrhQFSqaPuDCQEQEDEgANIGAoQIHQAAInQAAIioiYQPtn8FRt8IH5AAQJMBAA0I4IG4AAQY4N3hAbZUAnWAscgA2AaLQlGIdqyGDIizAAUg4IAAAhX0gSPgAKEd4Io98SgAbhjOQF2AAIoiwIAHgCIAQgGIATgGIAEgBIAHgCIgHACIgEABIgTAGIgQAGIgHACQooCwl2AAIgCAAIAAAAQjHAAiUgxQmGhZhCBZQBChZGGBZQCUAxDHAAIAAAAIACAAgAJUx/Ii2kPgAGe2OIAOtZIgONZIoxtBIIxNBgAwb7XIgDgNIgCgGIgBgHQiQoAnQAAIgBAAIAAAAQg8AAhBAIIgCAAIgEABIgDAAIgDABIADgBIADAAIAEgBIACAAQBBgIA8AAIAAAAIABAAQHQAACQIAIABAHIACAGIADANgEAbEghnQu3gDgpqFICIAAIiIAAQApKFO3ADgEgAtgv3QBOB5B7CPIJIAAIpIAAQh7iPhOh5QiVjjABicQAAjFDthUINYAAItYAAQjtBUAADFQgBCcCVDjgEgObgv3INuAAItuAAIioi4g");
	this.shape_7.setTransform(7047.5691,-5591.9633);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#745A46").s().p("EiSzCZPQr7l9sKnfUADtgT4Aemgi1IB1i2QB9jEB7jGIACgDIABgDIAFgHUAQtgbZAMLgiNUABigawAazg52IALgZIgLAZQ7ZgUlsklQBbklBBkjQG1+grp9UQhHiyhRiyUAnAgLYBTfAB4QFLm5LliHUATEAdCAJMAwOUAJgAi/AOgAdRQB9pPFjoxQGcqMLUpkQC2hzAAkOQAAn5qEwXUA0iAHOASMALzQCYDJgaDVQgXC9ijDHQgtA3g3A3UgPxAiRAFHAXAQAfCLArCDUghxACnghwgLVIABiEQAAvmhwyXQBwSXAAPmIgBCEUgAXAtzgP4AVbUgbBAvPghnAwxQzkPu6zEiQrmB1r5AAUgqtAAAguvgXZgEhDihGOUAeVAAAAvDgIPIAdgFIAWgEIAegGIgeAGIgWAEIgdAFUgvDAIPgeVAAAIgDAAIAAAAQjFAAi5gFQC5AFDFAAIAAAAIADAAgEA4Hha8UgJMgwOgTEgdCQHJpoL3BYQAMBRARBOQCMKGGnGbQXYb/MIYxQDrFVC3EqQKEQXAAH5QAAEOi2BzQrUJkmcKMQljIxh9JPUgOggdRgJggi/g");
	this.shape_8.setTransform(5525.7144,-5249.944);

	this.instance_3 = new lib.shoe("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(4341.85,427,1,1,0,0,0,6.5,6.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#5E4732").ss(1,1,1).p("EEsWhmeQiAA0hhCaQk5KDJZHNQCwmnSANHQB9hegdnSQvY1bn3DNgEEiyhJPQAjhBgQhgQhIi4D4j4QyK21Qah7QH3AgAaESEEoVhDwIljlfEEYahHkQhLhPhahNQCuuh2uh/QpcIiUcVOQj9WeStKSQsubFonagQAKANALANEEmFge4QBBi1BXibQDWl9FajrEErVg2QQjdJvAlIZEEYahHkQIwBZBojEEEYahHkQHeH4jDIcEFHRg5WQABACACABQCaCwCvDjQEBVnqcP9QijD4jaDkEE9tguoQheg7hOg+QmiIHKOKCEFCFhLgQMHLzm7GXEE7BgwhQn6mTC2oEQDNqkOHQGEEtVhSAQnrKgPLLgEiRagswQDKinDwimUAZ6gR8A2MgR9QB/gqCBgqEh8uABJQB6hzB6h2Eh8uABJUAH1AELBTMgieQBcg2Beg3EkqbBN2IEJg/EkhMBn1QJ+MEfk/yIOoxYUA7lgTgAwvguGEkCCAgMQE0gZE0AcEk4BBEpQnSBWonggQlAh/K4ohQKUAGJ0l2QV8zPV8h0UA7ng0iA77gdnEkqbBN2Q+RGuj2k1QlskqaNmcQHXhYGAjSEk4BBfJQvgHKFvEEQQ6CrPslNQAHgDAGgCQBkgiBjgmQOuluNoszEk4BBfJQI7hfMsjjEk4BBfJQyoDGiRl4UgBkgFVAkDgJMEDX/ga8QBqBuBpBuQXdYhThYkQj2S3mlLDEEhFgTgQMUSGJ8BaEFGCgNcUgInBS0gQGAiHUgxaAC0gjmgqUQ0IzF0+58QhDhThEhU");
	this.shape_9.setTransform(5170.7244,-5355.0879);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("EChUlPmICsh7ECRQlEOQg+jIgSi7Qs8AZlEJHECRQlEOIQErYEBagkphQBRhbBahYQL6ruU7ovUAXdAnIAGDAooUAWHBGdACZgIdQBvqnFbo/QBtWFhlTvQQ1TLGZgZQAvh9A0h6QL67le9vvQCGhECMhBQBXgpAvhCEDMskDSQL8srSoqUUAFchIDhPYASuEDDgj3xQRaZFn6FLQrfIVmXKlEDDgj3xQD9l/FPliUBAeA7HgH4ALPEDDgj3xQsV7I4r7IQqJsMjHqBEgTfj6BQCFCQB7CXUAS2AXAAEwAhSIAAABIA5HmMg//CIAQwGSwhaNQQKmGSKKFWUgmFBSGBgTAwiUAy2AACAcrAotQDkMxOchxQEfo1GLpwUAkPAM2AT1ASVUAXMA6eAmGAY8UAY+ArHgF+AT5MA0Ag+AUgjAgpKgjAhf2MhBXguOEgTfj6BIAAF7EAEgi8hIAtBHIDzF5UAYrAEmBVVgtGEgz6CxHQASjVi3j0UAiZgP2AVsgauQCZAsCeAoQABAAABABQGCBiGfBNEiJIBgIQnnnuoQn8QGOkYF1kkQcZVySkdqUAQvAmSAZWAP3EiJIBgIQpEK6sBMvQprKSsnK7EiJIBgIUAiMAipAVgAebMhDjA0SUiI2hiqgRKASKMASghNAUAyyAofBLgAXUEhRcChMQJyN1HLM9QMDkiAimVEiM8BHiUAufgkaAV+gwpUgWEBxmBgJAbVEDSgiKBIDqhQEC7SiczUgDAAlYgOyAc6UgkIA8OggYAtRUAm8AN3AcEAjpQN6D1DGHLQpJJpoOJJEBWACpeQVWnFJq+7UAxegxfABigRhECquDBEQDYDIC6DSEByqCh5UASsgdlAiTgmEEECNi1xIDFnLEAIHi9HQAiDvAXD3EgzvgB5UBfEAx3A5rghAEgTfj6BUAoegdHBIMgVM");
	this.shape_10.setTransform(4921.6,-4342.219);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EAAF88").s().p("EiLmBgUQlvkEPgnKQyoDGiRl4UgBkgFVAkDgJMIEJg/IkJA/Q+RGuj2k1QlskqaNmcQnSBWonggQlAh/K4ohQKUAGJ0l2QV8zPV8h0IAXgCIAAAAQCHgKCHAAIAAAAIABAAQCUAACUAMIADABIALABIAFAAIAHABIgHgBIgFAAIgLgBIgDgBQiUgMiUAAIgBAAIAAAAQiHAAiHAKIAAAAIgXACUA7ng0iA76gdnQjwCmjKCnQDKinDwimUAZ6gR8A2MgR9IEAhUUAS3AXBAEwAhSIAAAAIi6BtIgthGIAtBGUhTMAifgH1gELIAHgHQB3hxB2hyQh2Byh3BxIgHAHUgwvAuFg7kATgIuoRYQ/kfyp+sEIANgFQBkgiBjgmQOuluNoszQtoMzuuFuQhjAmhkAiIgNAFQqXDcq5AAQlnAAlvg6gEiB1BVGQI7hfMsjjQssDjo7BfgEiB1A6mQHXhYGAjSQmADSnXBYgEArrg8AIAAAAg");
	this.shape_11.setTransform(4004.7291,-5290.7629);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#AD8065").s().p("EhhcBJ9UgVggeagiMgipQnnnuoQn7QGOkYF1kkQcZVxSkdqUAQvAmSAZXAP2QgjGWsDEiQnKs+pzt1gEBGABSQQVXnFJp+7UAxegxeABigRhQN6D1DGHLQpJJooOJJUgiTAmEgSsAdlQmMJwkeI1QhwAOhmAAQriAAjIrOgEgJiApgQiegpiZgrUhgKgbWAWEhxlQKmGSKLFVUgmGBSIBgUAwhIgCgBg");
	this.shape_12.setTransform(5024,-3784);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#B19482").s().p("EhrhApMQyk9q8Y1yUAufgkZAV9gwqUgWEBxlBgKAbWUgVtAaugiZAP2QC4D0gSDUUgZXgP3gQvgmRgEgHBAu8UhgVgwgAmGhSIUBfDAx4A5rgg/UAm9AN2AcDAjqUgBhARggxfAxfQppe71XHFUgcqgougy1gACg");
	this.shape_13.setTransform(5008.175,-3818.775);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#745A46").s().p("EiSjCVLQqKlVqmmSQBatQQGywMBAAiH/QgXj4gijvIAAAAUgEwghSgS3gXBQh7iXiFiPUAofgdHBIMgVMQhaBYhRBbQBRhbBahYQL5rvU7ouQFEpIM8gYQASC6A+DIQDHKCKJMMQYqbIMWbIQL+RPAAH1QAADkieBoQrfIUmYKmQGYqmLfoUQCehoAAjkQAAn1r+xPQD9mAFPliUBAeA7IgH4ALOQgvBDhXAoQiMBBiGBEQ+9Pvr6bkQg0B6gvB+QmZAYw1zKQAwpeAAqCQAAq1g5reQA5LeAAK1QAAKCgwJeUgDAAlXgOyAc7UgkIA8OggYAtSQ29NI85AAUgrrAABg5OgeCgEBUcgbBQAfgBAQg4IABgBQBvqoFao+QlaI+hvKoIgBABQgQA4gfABIAAAAUgD7AAAgS4g73IgBgDIgEgMIgBgEIgHgXIgDgIIgMgoIgDgJIgCgFIgGgUIAAgBIgMgkIgEgPIgGgTUgGDgoogXdgnIUAXdAnIAGDAooIAGATIAEAPIAMAkIAAABIAGAUIACAFIADAJIAMAoIADAIIAHAXIABAEIAEAMIABADUAS4A72AD7AABIAAAAgEhPjgeBUAaZgAzBFKgj2IACAAIANgHIAQgIIBjg0IEeiWIADgBIAzgbIAOgHIAogVIgoAVIgOAHIgzAbIgDABIkeCWIhjA0IgQAIIgNAHIgCAAUhFKAj2gaZAAzIhMABIAAAAQizAAiRgbQCRAbCzAAIAAAAIBMgBg");
	this.shape_14.setTransform(5528.4432,-5309.1671);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#F9AF80").s().p("EDFQEUeUgmGgY8gXMg6eQDYDIC6DSQi6jSjYjIUgT1gSVgkPgM2UAStgdlAiSgmEMBBXAuOUAjABf2AjAApKMg0AA+AUAF/gT5gY/grHgElRvCE+MASghNAUAyzAofBLgAXUQMAsvJFq6UAiLAipAVhAebMhDkA0SUiI2hiqgRKASKgEjXPCM+QMoq7JrqSQprKSsoK7gEDcgheRQ0HzF0/57IiGinQL67le8vvIDTDbQXdYjThYjQIo6hMt7FQysqSD82eQ0b1NJbojQWvB/ivOhQBbBOBKBOQIxBaBojEIFiFeIlileQAihBgQhhQhHi4D3j4QyJ21QZh7QH3AhAaERQiAA0hhCaQhrDcAADHQAAF+GLEvQmLkvAAl+QAAjHBrjcQBhiaCAg0QH4jNPXVbQAdHTh9BdQMIL0m7GXIACADQCaCwCvDiQEBVnqcP9QijD5jaDjQDajjCjj5UgImBS2gQHAiGQjFALjBAAUgtiAAAghYgnrgEEAAhmxQGmrDD1y3IAVAaIgVgaQj1S3mmLDgEE7gieRQp7hasVyGQMVSGJ7BagEFC4i8pQmOmHgBlZQAAjeCjjLQBOA+BeA7Qheg7hOg+Ql0koAAlmQAAiBAwiIIABgDIACgGQBSkCC7gBIABAAIACAAQEYADIEJBIAAAAIAIAJIABABIAWAYIACADIAFAGIgFgGIgCgDIgWgYIgBgBIgIgJIAAAAQoEpBkYgDIgCAAIgBAAQi7ABhSECIgCAGIgBADQgwCIAACBQAAFmF0EoQijDLAADeQABFZGOGHgEEqQi9JQBBi0BYicQDVl9FajrQlaDrjVF9QgGhNAAhQQABnWC8oVQi8IVgBHWQAABQAGBNQhYCchBC0gEEhAjVhIAIgXQCyoPnVnuQHVHuiyIPIgIAXgEE5AjaRQqFnpAAnMQAAjpCljiQA7iNCpgBIAAAAIAkACQFJAbK5H2IAIAGIABAAIACABIADADIAAAAIAYARIgYgRIAAAAIgDgDIgCgBIgBAAIgIgGQq5n2lJgbIgkgCIAAAAQipAAg7COQilDiAADpQAAHMKFHpgEEspjCZIAAAAgEE/MjOyIAAAAgEB7wkuBQqJsMjGqBIQDrYUBPZgSugFdBIDQynKUr9MrQlPFij9F/QsV7I4r7Ig");
	this.shape_15.setTransform(5143.9702,-4342.219);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("EBbKA0IICHCoIjqBQQAvh+A0h6gEhzqAGmIC5htIA5HngECGBAI0QCGhDCMhCQBXgoAvhDIjFHMIjTjcgEiMYg3/QCFCPB7CXIkABVg");
	this.shape_16.setTransform(5695.3,-5584);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(0.5,1,1).p("EBGtlMbQE2p9MaAdICDDmQNujoFfqOUBEogPkAFoBHUQ2LL1tZPJUASZAdwgjTBB7QhSazmdV6QmcV6rnRAQh+DNiADLMAgeAUIQDstPM0nxECMHkDQQDblSEXk7ECCYjQYQEjoBHCnSQMfo0lPpsQkWorkwoaQso2Tvi0YMgYwgjwQBcgTBXgXECCYjQXQAAABAAAAIAAACQBMPSgaOVQgTDDgfC/ECCYjQXQAAACAAABMAAAAjpECCYjQYQAAABAAAAEBGtlMbUAUcAmCAH0An+UAJ9AlTAOzAZ9QCCo/EpoOEBGtlMbQ3wKN4qTuQEaiHEgiEEhLujphQC+hmDChmEhKSjxLIhcHqUgyAAa7ggEAa7UAF3Ar9BLiAWXUgOLAhIgWuAa0QvtSWAtJqQO2QQUjNMEhKSjxLQCWCMCOCSQUqVXJ2eAQBUEBBIEKEg0yixLIAABCQlmDJlRByQFfB3FYB/UAgCAL1Ab9AQYUBDRgA8gADAVJQLtHJHFKaQKlQZ1Ep4QgjgpglgrQgMgPgNgOEg/pirOQgEABgFACEg0yiwJIAAIxEiASgZbQg+C/gxC+UgQZA3zAVoAXfUAO+AvTgO+AiNQmLZMVrlsQJMBpI/BdIAATdEAq9AEkUgWUAVLgnrABFUgrWgDNgehgTmEgriB6rQABsDyR40UgnMgSVgRUg0LQSuiHGrpMEgriB6rQAUAmATAmQAxBgAvBhQELIzCeJpQjpN+RJEiIchzbQBQCtBACiQGBPMizJAQrfgOr8gsUAASAnegLSAqcUgR6AcMg1KgcMUhOcgZGgSkADGMgDAhHAUAd5AS1BHyACuIAATdEiCBgTeUgMuAx4AydAs6UAhoATEAPIAcTECDKiytQgECegHCdQgUAjgTAkEB7Qh9FUAjnAbaAT2AbgQGrJ6grTGQI7Hag7bGQoOILlIlbEAnliDbQUxD3OFImEgGKhoLQCHC+ClCuUAPeAQYAgdAHMQJTEOGFF6QQXDIqHqgQh2idiOiNQQkOnBYmdQD+l+0swLQLkD0KKJ1QOQERyf2AEA5NhgzQEPDCDiCwQABABABAAQAIAGAHAGEBAthuzIQ5OlEAzFhV7QHlD0FXFSECFtg7rIAAKgIrAFAQkDPKUDAWIFglgIFglgUATWgO9AEqAkdQCFKdDlDzECQNgiLQAyEiFHACQCuABD9hSQh0EEDQExQgtE3hfERQgjBjgoBdQAphGAih6ECcxge4QDWhEEOh/QiQFnC4DxQgNJkjDH8QAIFAAqDsQCnOvLPlsQEkm8hinrECa2gJ7QgQAkgRAkQgYM4IiicECWGgdnIAATMQC3DtB5jNEBlPhPzUgbfAr2gezAohUAdcAnoAK0AnoQCuBoCHBoQJhHYi2HYQlQDSljDKUgeZARVgm0ANvIneFFEgiyCRUUACEAP/AqbgifUAsSgWdAIuAAdQRLn+IKpyEA0NDCUQiLE0h8E1EAJfCVoQagYWMHd/UgWuA4LgELBRMUAl9AbWAXjgbWUAAngWUAXZg8MUAWLgzWgHLgeKMglzhFEEhwSi4rQZWFkXTH5ECCYjQWQCOPbhcOOEhKSjxLUAnugiGA43gbPEBBtjrLUg+4A27gnnADFEgnOi5WICcILEgnOi5WQnBFimjDrEhMZhxXUAfbAJUArgAFkEhbHCj6UAqiAG2Al3ACK");
	this.shape_17.setTransform(5272.274,-4395.5672);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#AD8065").s().p("EgQKBMIUACDAQAAqcgigUAsSgWdAIuAAdQRLn+IJpxQJhHXi1HYQlRDSljDKUgeYARWgm0ANuIneFFI8hTbQxJkiDpt+gEhJqAGIUgyegs5AMugx5QAxi+A/i/QO2QQUiNNQmqJNyuCGUARTA0LAnNASUQSQY1AAMCUgPJgcTghngTEg");
	this.shape_18.setTransform(5153.1296,-3952.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#B19482").s().p("EAN0BfwUgl2gCKgqjgG2Qo+hdpMhpQ1sFrGM5MUAO+giMgO+gvTUgVpgXeAQZg30UgMuAx5AyeAs5UAhnATEAPJAcTIAmBLQAyBgAuBiQELIzCfJoQifpokLozQguhigyhgIgmhLQAAsDyQ41UgnNgSUgRTg0KQSuiHGqpNUAeiATnArVADMUAnrgBEAWVgVLUAdbAnoAK1AnnQCtBoCHBoQoJJyxLH9UgIvgAcgsRAWcUgqcAiggCDgQAQjqN/RJEiIcizbQBPCtBBChQGAPNiyJAQrfgOr9gsg");
	this.shape_19.setTransform(5115.2422,-3901.75);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#E9AF8D").s().p("EhOzDiXUAELhRLAWug4MQsH9+6g4XQhAiihQitIHelFUAm0gNuAeZgRVMAlyBFDUAHLAeKgWLAzWUgXYA8NgAnAWTQrxNrvYAAQvYAAy/trgEgz6BZAQB8k0CLk1QiLE1h8E0gEA+ehxSQgqjugIlAQDDn8ANpkQhniHAAitQAAiHA/idQkOB/jWBFQDWhFEOh/Qg/CdAACHQAACtBnCHQgNJkjDH8QAIFAAqDuQoiCbAYs5IAhhHQh5DNi3juIAAzMIAEAAIAAAAIABAAQChAADhhFIAFgBIAAAAIAUgHIALgDIgLADIgUAHIAAAAIgFABQjhBFihAAIgBAAIAAAAIgEAAQlHgCgykiIFglgQFokWEYAAIABAAIAAAAQKpABDVZpIABAMQCFKdDlDzQjljziFqdIgBgMQjV5pqpgBIAAAAIgBAAQkYAAloEWIlgFgIlgFgQ0DgVEDvLILAlAIAAqgQDstPM0nxQs0HxjsNPMggegUHQCAjMB+jNQLnxAGc15UAjnAbaAT2AbfQGrJ7grTFQI7Hbg7bFQoOIMlIlcQBiHtkkG7QjIBmieAAQmXAAh5qogEA21h83QAphGAih6QBfkSAtk3QiFjDAAixQAAhjAphdQgpBdAABjQAACxCFDDQgtE3hfESQgjBigoBeIAAAAgEA+ehxSIAAAAg");
	this.shape_20.setTransform(5912.374,-3659.9161);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EAAF88").s().p("EgswDuuUhOcgZGgSkADGMgDAhHAUAd4AS1BHyACuIAAzdUAqjAG2Al2ACLUAARAndgLRAqcQo9OGxwAAQxxAA6luGgEgrGC6uIAAzdgEBt3hQ5QmFl6pTkOUggegHMgPfgQYQikiuiHi+QCHC+CkCuUgrfgFkgfbgJUUhLigWXgF2gr9UAgEga7AyAga7QC+hmDBhmQUrVXJ1eAQnBFimiDrIAAhCIAABCQlnDJlQByQFfB3FYB/UAgAAL1Ab/AQYUBDRgA8gADAVJQLsHJHGKaQKkQa1Dp4QSfV/uQkRQqLp1rjj0QUsQLj+F+QhYGdwlumQCPCMB2CdQHzIGn8AAQiXAAjwgugEBwChc6QlXlTnkj0QHkD0FXFTgEBw/hrHIADACIAPALIgPgLIgDgCQjhiwkPjCQEPDCDhCwgECBohwUIBIBVIhIhVIgZgdIAZAdgECBohwUIw5ulgEB6diHEQuFom0xj3QUxD3OFImgEgPwi7RIAJgDQ3Tn55WlkQZWFkXTH5IgJADgEgPni7UIAAAAgEgEwjAPg");
	this.shape_21.setTransform(4964.9002,-4292.5766);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#745A46").s().p("Ehp1ChmQ0jtNu2wQQgtpqPtyWUAWuga0AOLghIUAfbAJUArgAFkUAPeAQYAgdAHMQJUEOGEF6QQXDIqHqgQh2idiOiNQQkOnBYmdQD+l+0swLQLkD0KKJ1QOQERyf2AQVEJ4qlwZQnFqartnJUAADgVJhDQAA8Ugb+gQYggCgL0IAAoxQGkjrHAliICcILUAnogDFA+3g27Ug+3A27gnoADFQhHkLhVkAQp2+A0q1XQiOiSiWiMUAnugiHA43gbOQEaiHEgiEQkgCEkaCHQYrzuXvqNQE3p9MZAdICDDmQhWAXhdATMAYwAjwQPiUYMoWTQDblSEXk7UASZAdwgjTBB7QAHidAEieQBcuOiOvbIAAgBIAAAAIAAgBQEjoBHCnSQI0mOgBmpQAAiyhji3IgRgjQkOoZknoJQEnIJEOIZIARAjQBjC3AACyQABGpo0GOQnCHSkjIBIAAABIAAAAIAAADMAAAAjpIAnhHQhSaymdV6QmcV6rnRAQh+DNiADLUgbfAr2gezAoiUgWUAVLgnrABFUgrWgDNgehgTmgEBuxghmQCCo/EpoOQkpIOiCI/UgOzgZ9gJ9glTUgH0gn/gUcgmBUAUcAmBAH0An/UAJ9AlTAOzAZ9IAAAAgEB2OgVIQgECegHCdIgnBHQAfi/ATjDgEB2OgVIIAAAAgEB1cgyyIAAAAg");
	this.shape_22.setTransform(5355.0553,-5404.0616);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9AF80").s().p("A3XFLMgYwgjvQBcgSBXgXQNujpFfqOUBEngPjAFoBHSQ2LL2tZPIQkXE8jcFSQsn2Uvh0Yg");
	this.shape_23.setTransform(6138.4,-6361.1385);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("EBc/k5bQknncs5McQQhfcFfYMQYWGYUqGiQCkA0ChA2QX/IBPMHbIAALwEBM/j+7QGMhnOUDvEAjpkZtIAAAAQc01KLClkEgOVjkfQP17qS2uMQIMmKHHlOEC3LjTlQgGAVgGAVEC3LjTlIsMkWUgXNAYmAENAiaQJMDPJLC+EC6vjezQh0E5hwGVUA7RAR8AW5AKqQC3BWCTBOECTkjuPQQ42UaXsSUAOuhFshYiAOGQqHPBt5gBMAxgBJiEEJVi2/UAHAgbLARqgiRQDGseY6kiIWAAAQIlCThNGtQFcGdicIzQDRFCjMDCQgDACgCACEFMcj9zQBOBggLBQEFHvj7zQBNh8DggEEFI/kAzQCVBnBIBZEFLfkDTQFWFzKiBFEFdXjVTQATA4AKAxEFenjcLQATAyANAtQBADaiTDoEFecjlHQCCEJhXGSEFZHjsLQDkDfBxDlEFRfjX5QABAAAAAAQDjhuDUj0EFJzjWmQD+AgDuhzIAAJGQFPF+GJl+QBohngrjQEFCvjZLQDoCJDcAcUgGrAHeADHAs1QgLYwnlRYUhKEgGlhKFgX+IAJCTQxJg8w5i2UACpAvBgXnAjxUg3gBRuABCADOIAeADEFTXjybIAAFAEFWnj3LQFsEmCEFaEgeAkBbQBXBgBQBfQABABABACQAhAnAfAmQLPNyAzK7EgeAj8BIAAlaUAgHgS1AhigFdEgeAj8BQB0gmB1glEhXgjlbQCNhCCOhBQZErdcBpGEghLi8GQI125KBxgEjAQiBbQFxDcDaCvEiyehu0QARjegjkZQhFh+jQinEiyehu0QD0DDgGB+EhF8iyIUgYHAYLg6tAayQy/FeiBOSQAmMsjWDkQZcPcqcM0Qx6IImG7YQACCwrCCwIsgWgQpDEfAjnvIGwvwQTehDmO19QjPpUC1jvQGzFcg5F3QMgADBCs8Eh6AgA7QBOvbMyrlUAk1gysAXLhAUQG84vH50cEh6AgA7QD1CvD0CkQYVQWXsIgQMtPcbphGIIAHAUA2/ADvAhSggcUAoBAdrAWNAiiQDFgNCfBYQE2CrCmIqQiRELjPEUMA1gA5BQFEd2xERKUh1gBRjAHAAVdUgvPgLFgORggbQe9zKYD7WQMy0TVm20QMhKXJHJwEiaLAvAQhMDbhJDpEh6AgA7UgS3AJmgNUAmVUgMiA0DgqTAaBQphGUEBJsQIEGVHbGWQwWc319WUEjFwhtbQgFAGgFAHEjKAh0LQAlDiDhDbEjaQhfrItwfwQC0SiLssCEjaQhfrIHgWgEhTFjneUgf5AEJhUyBMqQ3TXHEzf5EiNUDWJMgtsAxLUgXxAR6g/vAUWQ51OM1bPEMgeQg1gQTbnNN1szUAgMgmlAxQgN1EjoQDLkQijApihAtEgbgB+EQKl2QXa2QEgbgB+EUgknA3tgp5AhzQgjCOguB9QirHNlEDoQp2g9weveEhyXAEYUgheAfogJLAmkUgP/AbzggBAdtQJdM2RDHKUAhUAeqAHsAR2QRFOfNKEsEjHBCZvUAgEAbaAT9AbbQC8C/CwCmEjCQiP7QNVFViKPWEA9BAPhQAFAQAZgNQEgDIESDLEAl+C6rQFiFSKfj5QKGtOLTrZQI8pBJrn4UAgCgU6AN+gSnEgbgB+EUAnTASdAVMAgDQBiG0DdDTEBLYCjdQNRJDKOIdECKDBXPQuuWI32ONUgajATAgi+AsHEArfi3bUAtaAXNAvkAIBEg/Ai57QjAD3j8D8QWdicOUniEhCWAdOUBCHAXuA9Qglb");
	this.shape_24.setTransform(5129.6678,-4393.9804);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#AD8065").s().p("EhqNBjVQiwili8jAUgT9gbaggEgbbQnbmVoEmWQkBpsJhmUUAqTgaAAMig0DUANTgmUAS4gJoQD1CwD0ClUgheAfngJLAmkUgP/AbzggBAdsQJdM2RDHKUAhUAeqAHsAR2QRFOfNKEsQirHNlEDoQp2g8wevfgEBJEBH3UAi/gsHAajgTAQX2uMOu2IQE2CsCmIpQiREMjPETUgN+ASmggCAU6QprH4o8JBQrTLaqGNNQkdBqjjAAQk1AAjNjDgEARGhAPIoAnAQ7oBHstvdUBCGAXuA9RglbQAFAQAZgNQEgDIESDMUgd3AdFgvTAAAQldAAlrgZg");
	this.shape_25.setTransform(4904.9849,-3659.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B19482").s().p("EhoBBYgUgHsgR2ghUgeqQxDnJpds3UAgBgdsAP/gbzUAJLgmkAhegfnQYUQWXtIgQMtPcbohHIIAHAUA3AADvAhSggbUAoAAdrAWOAihQDFgMCfBYQuuWH32OMUgajATAgi/AsHQjcjShim1UgVMggDgnUgSdQKl2PXb2QQ3bWQqlWPUgknA3ugp4AhyQgjCOguB9QtKksxFufg");
	this.shape_26.setTransform(4915.3875,-3676.8375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#745A46").s().p("EhiuCoIQ3sog4UwWQj0ikj1iwQBOvcMyrkUAk0gysAXMhATQG84vH40cQI125KCxgQgzq7rPtyIhAhNIgDgDQhPhfhXhgUAgHgS1AhhgFdQnGFOoMGKQy1OMv2bqQP27qS1uMQIMmKHGlOIAAAAQc11KLClkQM5sdEnHdMAxgBJiQCkA0CgA1QYAICPMHbQh1E5hwGVIsLkWUgXOAYmAEOAiaQJMDPJLC+IAJCTQxKg8w4i2UACpAvAgXnAjxUg3gBRvABCADOUglfAW5gnVAABQ46AA5qpNgEBoGgNTUgvkgICgtagXMUAtaAXMAvkAICgEBBHhx5QYXGYUqGiQ0qmi4XmYQlf4Nwg/bQQgfbFfYNIgFgCIhEgRIgBgBQpLiTlrAAIgCAAIAAAAQihAAh0AdIgBAAIgCAAIgFACIAFgCIACAAIABAAQB0gdChAAIAAAAIACAAQFrAAJLCTIABABIBEARIAFACIAAAAgEBBHhx5IAAAAg");
	this.shape_27.setTransform(5336.8,-5282.9558);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#EAAF88").s().p("EkRUA6YQTbnNN1szUAgMgmkAxQgN1QChgtCjgpQijApihAtQV92UQW83UAgEAbbAT9AbaQC8DACwClMgtsAxKUgXyAR6g/uAUWQ51OM1bPEgEBYLAzoQe9zJYD7XQMx0RVn20QMhKXJHJvQpHpvshqXQqOodtRpEQI7pAJsn5UAgCgU6AN+gSmMA1gA5AQFDd3xDRJUh1gBRjAHAAVcUgvPgLFgORggbg");
	this.shape_28.setTransform(4626.0941,-2992.8375);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9AF80").s().p("EkVgCGPQrsMCi0yiINw/wQkz/5XT3HUBUyhMpAf5gEJQiOBBiNBCQCNhCCOhBQZErdcBpGIDphLQLPNzAzK6QqBRgo1W4QuUHj2dCbQD8j7DAj4QjAD4j8D7UgYHAYLg6tAayQy/FeiBOSQAmMsjWDkQZcPcqcM0Qx6IImG7YQACCwrCCwIsgWgQjUBpiCAAQjgAAAWk5gEkVgCGPIGwvwIng2gIHgWggEkOwB2fQOwgyABs0QAAkFhhlVQhuk/AAjZQAAi8BUhvQGAE0ABFIQAAArgHAsIAHAAIAAAAIABAAQMMAABMsfIAAgFIABgFIABgPIgBAPIgBAFIAAAFQhMMfsMAAIgBAAIAAAAIgHAAQAHgsAAgrQgBlImAk0IAKgNIgKANQjhjbgljiQAlDiDhDbQhUBvAAC8QAADZBuE/QBhFVAAEFQgBM0uwAygEjqwBV3IAAgGQAAh8jui+QDuC+AAB8IAAAGgEjueBQ3IABgOQAFhEAAhKQAAihgYi7QhFh+jQinQATiIAAh8QAAsBrekmQLeEmAAMBQAAB8gTCIQjaivlxjcQFxDcDaCvQDQCnBFB+QAYC7AAChQAABKgFBEIgBAOgEkOwB2fgEkB6BScIAAAAgEBuWAo8QpLi+pMjPUgENgiZAXNgYmIMMEWIgMAqIAMgqUA7RAR8AW5AKpQC3BWCTBOQiThOi3hWUAHAgbJARqgiSQDGseY6kiIWAAAQIlCThNGtQFcGeicIyQiElZlsknQFsEnCEFZQDRFDjMDBQhxjljkjfQDkDfBxDlIgFAEIAFgEQCCEKhXGRQBADbiTDoQgKgygTg4QATA4AKAyQArDPhoBnQmJF+lPl+IAApFQjuByj+ggQjcgcjoiJQDoCJDcAcUgGrAHeADHAs0QgLYwnlRYUhKEgGkhKFgX/gEEVggYOIgBABIABgBQDjhuDUj0QjUD0jjBugEEjHgbBQgNgtgTgyQATAyANAtgEEXXgtwIAAlAgEERfg7YIACgTQAAhIhFhVQhIhZiVhnQCVBnBIBZQjgAFhNB7QBNh7DggFQBFBVAABIIgCATgEEfXg8wQqihFlWlzQFWFzKiBFgEjzFBEaIAAAAgEENzgW7IAAAAgEEicglcIAAAAgEBSfgwOMgxghJiQN5ABKHvBUBYigOFgOuBFrQ6XMTw4WTQihg2ikg0g");
	this.shape_29.setTransform(5513.6678,-5620.7127);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#000000").ss(1,1,1).p("EDT2j9eQACAAABABQCiAOB7ASIAAAFEDXqkFvIAsIyUAowAF3Ao5AM9QB4AgB/ApEGAPkmnQBGpHotiRUgtSgEBgM4AUAMgUfA33EFuqkvIQE8G6MgBuQABgLAIAEQGKG7hbIgQADALADATQAAADABADIAAABQA+GjhOD+QABAGABAHIAHAJEFuSkpGQACgBACgBEFqmkrkQCRBKBbBUQB3BsAZB+EFoikmcQCWhnDahDEFj6j+MQD+CVD+AeQAUADATABQABAAAAAAQEEAWEEhnIAAAIQAHgEAHgDQFZiuC9kVEFsdj7VQoUJ1ECThQDTbsmiQ8UhOeADIhNQgTHEF0mj8mQAAAAAOABEF0Yj6cQADAAADAAQDagcDOAgEF92kUQQFxEMBQELQBnO2kIKcQjnEhpdiRIg6qFEF3mkawIAYFQEF6ykhUQGcEpD3GEEF0mj8eIgOCCEhzFgSGQAGgJAGgJEhzZgSYQAKAJAKAJUBkjBe1BmLhiLUA6XAm7AdcAtZQACAAACAAQDoAKC/BEEiu9AU+UAibgM2AXRgibEiu9AU+UAnLgJ8AUtgdIEjF7AZdQBIAMAyAOQAuAMAwAUQKNh6JZjfEjLnAycQixmfj/mjQhrgBFUm8QEIlYErAYEjpZBTXQlEmmn+mDQABgBAAAAQAEgBgEgDUgWLgRvgtsgPjQgCAAgBgBUggXgKugX/gYOMgS1A/VUBDjAmdA/LAyfMBYIgYNQlsu8jEwTQgBgBAAgCQnh1Tws7dEj2aBGtQXVn+TesTEgXYBX+QACACBCBCQg2hMAKgLIAHgEEgXYBX+QAMgJAMgKQDpkJDrkBUAJcAR1AzMAQGQAJAGAKAGQfyUZK8cwUAaegm/AmsgZKQAAgBACgBQXFtbF51FEiaLCebQgFgHgWgIQAegBgDAQgEiZ1CeTQgDgEgTAMQKugWEbjEUgTdgZcgJSgjeQkb3w094gQmPorBdrvEiamCeMQpms+mduwEiLCCbBQCRi4gIjyUA9PgTdA0Sgo8EBQGgbIQAEADAEAEQDxDIDqCdEC1IBaIQGBmqF/m2QAIgJAIgJQjXpan6i2EB23CWyQJUnmJIolQO3t+N8ugQHkn3HeoKMA3GAuHMBBRCHiMg3pAi6Ug7lhMVgEugmhIADACEBRWCd3QACAFgEAHQABACABACEBRUCeDQgJAMgcATQFNMwKsgZQLRplK+qiUAioASmAcEAWdEC1GC3HQgGEOAjEgEgWUBZCQTVRTY1CSUAhrAJNAZzAoPEgPsBPhQV03yXOy4");
	this.shape_30.setTransform(5068.1979,-4154.3229);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(0.5,1,1).p("ECHIisSQAAAIABAIQAEAAADAAEBybikYQAoAGAIAHQACACgCADUANiAOeAIfAkFQUkABQoB0QAEAGAEAGEBybikYQBEgCAEgCECFIhyKQCjADBhAkIBEgXEBiVia5IAzgREBiVia5QHrlFIbkaQJTpCLbBYQAKBuA9CCQHoSYOwPgQJeM7GSJxQPPBqMxCwQKcvbYennIAGgEED24haaQgCADgBADQABABACABED21haUQgEAKgFAJQh/ELhvD+QAAABgBABQgBADgBAEUgRFAnJAGZAU+QAkCLA9CDQAEAIAEAIEDKIhrKIAQgKQbuF/QvLBECIQioSQN9mQLpqlUA92gQAANmBGxEiJIhBdQAogWApgXEiJIhBdQg6Aqg1ApEgG3hzKIg4AVQhhiJhniMUA2lgbTA2ngIcEALFg3TIADAJEALjg7AIAlgKEALjg7AQgLB3gTB2UgRyAkrgLUAu9QgCAHgCAHQgCAFgCAFUgT4AwjgbuAjVQyyYqiGH3QALAKAMAKUBk3BVpBgfhWQQAFgEAEgDIAAgBQTr6NQO9pUAfPgl/gBvhJFQdBEecHAXQAEAAAEAAEgHvhy1QVne6iVY7EgHvhy1UhhbAaBgf+AXXEhR3ghKQALgBAMgCQDIjAChi9EjTnAh1IAEAiQEqF9ClGRQAGAQAHAQEjMUAulQgCAAgBAAEjZXAb1QDPDOClDUEjoLAvbQAJAtALAtIHpV+IAXBCQPThAhTwoQjOpbBiqbEjgOBGzIAHgOEjoHAvRIgEAKQkp2MO21uUApZgteArdgXgEirwASyIAZgdEjFkAV7QgBAdgCAdEjFkAV7IFNEKQBAEpgSDnICSCwEi83AqVQAAgQAAgQQARsXIRlOQIalUALgKUBBKgb7AZGgYEUA0GgHVAo9gSeEjGhBASQAAAAAAABIACgBQgBAAgBAAgEi83Ap1QCBIwkRDQQbGLprnQCQxxGSlI3fEi/pAiVQg3Ker0ByEjOHAPFIIjG2EjSHgAaQNpAwhGVlEjndBXRQABDsEhAqQAIACAIABQDkAQLA1lQDaleKMglEjndBXRQgBiUBnjIQAFgKAFgKIFfquEjoLAvbMgOsAiiQCfK1LRiNIBqjUEBwIgmqUAgvALBAfxAFaEALFg3TUAd6g9tA5Wgl5");
	this.shape_31.setTransform(4869.6,-5253.3094);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AiND5IACgHIABgCQBvj9B+kLIArIxQh6gSihgOg");
	this.shape_32.setTransform(6438.525,-5801.425);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EAAF88").s().p("EC1jC/1IADACIgDgCQgejzAAjmIABhVIgBBVQAADmAeDzUgcEgWdgiogSmQJUnmJIolQO3t+N8ugQHkn3HeoKMA3GAuHMBBRCHiMg3pAi6Ug7lhMVgEugmhgEmFfBBvMAS1g/VUAX/AYOAgXAKuIADABUAtsAPjAWLARvQABAAAAABQABABAAAAQAAABgBAAQAAABgBAAQXVn+TesTQQsbdHhVTIABADQDEQTFsO8MhYIAYNUg/LgyfhDjgmdgEj2bBGuQH+GDFEGmQlEmmn+mDIABgBIgBABIAAAAgEDJOjBWUgGagU+ARFgnJQCiAOB7ASIAAAFIAAgFUAowAF3Ao5AM9QB4AgB/ApQh/gph4ggMAUfg33UAM4gUAAtSAEBQItCRhGJHQGKG7hbIgQADALADATIABAGIAAABQA+GjhOD+IACANQhQkLlxkMQFxEMBQELQBnO2kIKcQjnEhpdiRIg6qFIAGAAIAFgBQBigMBfAAIABAAIABAAQBsAABpAQIABAAIAEAAIAGABIgGgBIgEAAIgBAAQhpgQhsAAIgBAAIgBAAQhfAAhiAMIgFABIgGAAIAOiCIAOgHIgOgBQkEBnkEgWIgBAAIgngEQj+gej+iVQD+CVD+AeIAnAEQoUJ1ECThQDTbsmiQ8QrEAcrBAAUhDRAAAhCYgQbgEF00j8lQFZiuC9kVQi9EVlZCugEF3+kVgIgYlQgEGFFkWnQj3mEmckpQGcEpD3GEgEFwiklcQgZh+h3hsIAEgCIgEACQhbhUiRhKQCRBKBbBUQjaBDiWBnQCWhnDahDQB3BsAZB+gEGAGkmgIAAAAQAAgHAEgBIABAAIABAAIADABIAAAAIAAAAIgDgBIgBAAIgBAAQgEABAAAHIAAAAQsEhqlBmfIgXgfIAXAfQFBGfMEBqIAAAAgEFuSkpGIAAAAg");
	this.shape_33.setTransform(5068.1979,-4154.3229);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#AD8065").s().p("EBZcBWmQAcgTAJgMUgZzgoPghrgJNQ42iSzUxTQg2hMAKgLIAHgEIgHAEQDpkJDrkBUAJbAR1AzNAQGIATAMQfyUZK8cwUAaegm/AmsgZKIACgCQXFtbF51EQH6C2DXJZIgQASQl/G2mBGqQneIKnkH3Qt8Ogu3N+QpIIlpUHmQq+KirRJlIgoABQqNAAlEsYgEBaBBWHIACAEIgCgEQADgFAAgEIgBgDIABADQAAAEgDAFIAAAAgEiReBWfIADgBIACgBIAKgFIAAAAIACgBIACgBIABAAIAAAAIACABIgCgBIAAAAIgBAAIgCABIgCABIAAAAIgKAFIgCABIgDABQADgQgeABQpms+mduwQlsu8jEwTIgBgDQnh1Tws7cQixmfj/mjQhrgBFUm8QEIlYErAYQhdLvGPIrQU9YgEbXvUAJSAjeATdAZcQkbDEquAWIAAAAgEhqYhaCIAMgSIgMASIgUgSIAUASUgUtAdJgnLAJ8UAibgM2AXRgicUBk3BVpBgfhWQIAJgHQDxDIDqCdUgz/Ax9gziAAAUgxzAAAgxagungEhqYhaCIAAAAg");
	this.shape_34.setTransform(5012.4708,-3693.9393);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#B19482").s().p("EA1SAq+IgTgMUgzMgQGgJbgR1QVH3BWeycIBdhLIhdBLQ2eSc1HXBQjsEBjpEJIgXATUg0SAo8g9QATdQAIDyiRC4UgTdgZcgJRgjdQkc3w084fQmQosBervQBIAMAxAOQAvAMAwAUQKNh6JYjfUAnMgJ8AUsgdIUBkkBe0BmKhiLUA6YAm8AdcAtZIAEAAQDoAKC+BEQl4VE3GNbIgCACUgmrAZKgaeAm/Qq98w/y0Zg");
	this.shape_35.setTransform(5016.6384,-3702.15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#745A46").s().p("EimWCJfIgYgUQCGn3Sy4qUAbugjVAT5gwjIAEgKIAEgOUALTgu9ARzgkrIADAJIgDgJUAd6g9tA5Wgl5Ug5WAl5gd6A9tQAUh2ALh3QCV471p+6IA5gVIg5AVQhgiJhoiMUA2ngbTA2mgIcQHrlFIakaQApAGAHAHIACACIgBADUANhAOeAIgAkFUgIggkFgNhgOeIABgDIgCgCQgHgHgpgGQBEgCAFgCQgFAChEACQJTpCLcBYQAJBuA+CCQHnSYOwPgQJeM7GTJxIAHAMIgHgMQPPBqMwCwIgPAKIAPgKQbvF/QvLBIgJATQh/ELhvD+IgBACIgDAHIgDgBIADABUgRFAnJAGaAU+QAjCLA+CDQ8IgX9BkeUABvBJFgfOAl/QwOdpzraNIAAABIgIgHIAIAHIgJAHUgwaArSgxhAAAUgxLAAAgyQgqrgEBghgeKUgfwgFaggwgLBUAgwALBAfwAFagEhEihC7IAkgKgEBeSh3pQwoh00kgBQUkABQoB0gEA5Gh5eIBDgXIhDAXQhhgkijgDQCjADBhAkIAAAAgEASPii0IAzgRgEhFBg/OgECi0hZqIAAAAgEAiUisTIAAAAgEAiUisTIAAAAg");
	this.shape_36.setTransform(5382.25,-5202.6173);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#F9AF80").s().p("EgMZAj+QmSpxpes7QuwvfnnyYQN9mQLoqlUA92gQAANmBGwQ4eHnqdPbQswiwvPhqg");
	this.shape_37.setTransform(6064.95,-6198.6174);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EEAC87").s().p("EhtIBnQIgPgDQkhgrgCjrIAAgCQAAiUBmjGIALgVIFeqtIAXBCQOHg8AAuMQAAhNgGhUQiMmXAAm1QAAjRAgjYQEpF8ClGRIgDABIADgBIANAhIgNghQL0hyA3qdQg3Kdr0ByQilmRkpl8IgFgiIAFAiQimjUjPjOQDPDOCmDUQggDYAADRQAAG1CMGXQAGBUAABNQAAOMuHA8IgXhCIAHgOIgHAOInp1+IgUhaIAEgKIgEAKIAUBaIHpV+IleKtIgLAVQhmDGAACUIAAACIhqDUQrQCNigq1MAOsgiiQko2NO11uUApZgtdArdgXgIBRgtIhRAtUAf+gXXBhagaBQVpe6iVY7Ugo+ASeg0HAHVQDJjBCgi8QigC8jJDBIgXADIAXgDUgZGAYChBIAb9IAYgdIgYAdQgLAJobFVQoQFNgRMYQCBIwkSDQQbHLprnQCQxxGSlI3gIACgBIgDAAQqMAljaFfQq4VVjnAAIgFAAgEhHUA17IABggIgBAggEhKGAt7ICSCwIiSiwQAEg0AAg4QAAi+gyjmIlMkKQAFhnAAhfQAAyjspgtQMpAtAASjQAABfgFBnIokm2IIkG2IgEA6IAEg6IFMEKQAyDmAAC+QAAA4gEA0IAAAAgEgVUg0kQA2gqA5gpQg5Apg2AqgEhyoA7BIAAAAgEhWxA6KIAAAAgEhQAAhhgEg2MAeYg");
	this.shape_38.setTransform(4117.2989,-5327.4914);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#000000").ss(0.5,1,1).p("ECDNlTtQgFABgEACUAVgAmgAc1AnHQACgCACgCQABgDACgDQSR5zXqpJIAHAFEBwwlN6QgFgIgEgIQDsoqMvgYQCIBUADCLQMNj8IEoNUBRNADHgJQAzmEBwwlN6IAfgeEBB4kvEIgbAJQVWyNZ9syUAKBAQbAMFAovQACAGACAGEB9SkbMQE0DFEwDXQcETwZfc5QMrKlHSN/QABAEACAEQAqB3hwA5QgBAAgBABQjfB8jQCDQejaiU8YpIgPBUEC1WkGUIAHANQCUGtERF2IACADQIBLnnsJzEEGwjM0Qgji/K3rwUAK3gLvAkTABGQABABACABQIkEMgbGgQgBAAgBAAQFJDxh1I1QA2EYgyFuEE46ji2QEhEYK9DAEARukfYIAAgBQABAAAAABQAAAAgBAAgEAR1kamIgHkyEARvkfYQCCCQBqCWQhdgFiJARUgXSAClhFQAYXUg2GAf9gaiAmyQBvgEBpAJEAdbkJjIAcBpEABwjX7QL86kPv3EQQJ0aT5w+QwZBf/VOEEAVbkayQHCJNA+ICEg0LjMeQD/kbDskhEhVhgZTQh6higigtUgC7gD2AfUgp0UAYAgk3AI9gWMQI92MAkh2MARsg5DQAlhUAlhTEi7Kh5gQhMFilBEAIgLAIQhcQfM4CIQIeAJg4t3QXSoTgQv7QADgBACgBQB1pukvmsEhp9ATrIACAEQKU3XOErqQUiPTV9NoIAoAVQADACAFABUBccAgnAr7gi4UA9PAxjAe6AvJQBVAkCngfQgFATgFAUQIrF+ChHpQACgDACgCEhM8gTrIAWgYEhVhgZTQCrB3E8DKQASALASAMQANAIANAIQMsIEbCPrUAvhAblBN3gefQADgBAEgCQABABgBgCEhVhgZTQtHOqsUcoUgTmAcKgjZAPtQgCABgCABIgBAAQtQgthGQGQC5A2NXS0IAJgIEiXZiDNUA+gggiAkugovQeQhdXrqAEja/iLLIADgBQA6h6BeimQCpqmGNqKMAhIgReQJzjWJeAVEjlPiA0QABAAAAAAQgenUKtjDQlIK8RehmIABAAQiyGwoJBYQgCAAgCAAQp3gbhxmgIABgBQgBgIAAgDgEjbBh0MQpaBvmSosQAAgCAAgBQg1lYGTgQEjHhiKcQBXjBBljkQA5iDA2iNEjOpiB1QgBABgBABIADgCEjF5iBnIADAQEjChh7rQBslSlBgmEjHhiKcQCMCzgkGCEjOpiB1QDqjPDelYEi7Kh5gQABAIABgDEi7Kh5gQh8hAiEhjQnaAglQESQsnJDiml+QJXhQLxsLEitSh1UQl0A/oElLEi64iBEQGntmPjiNEi+tijUQC5IcnAFkEihvisnUgBIAerghugDFEhp7ATvUgH9ARfgx0Aa1QosCoFLHIUAUaAUVA3iBUdQpcKkmfl4QkhnFkQmoIAggREjCdB7zIAagWQNtIuEZHoEjCDB7dId96iUAQTAW9Af2AxsEk1dBFzQAUAIAUAIUggHASQALRAn9UBGEAnEA9KAufUAETAIVBONg0kEk0tBFzIgIAQUBbxAjdAXBAR9ElKdB/zQAZAOAZAPIgSAzEgNBB31QgMALgmAiUggaAcugpjAXvQgBAAgBABQhrCZh0DMEgDgButQlREnkLEdQAAAAgFAEQOzPLQuEMUAoMAP9AGcALcQRCPfGZPEQgUMAQjBEQImmFMHp9UAY6gUfAnvgk6QHRmwHxnSEgDgButUAI3APnAkPARQIA5AbUAVmAHQAUsAgUQGdNxGhjUQGijUBbCLIAGgJQOA1RfC1QUAlSgTOAF4gV3EAi9A+7Qx4Zu0lWEEE+Ti2JQgoE5BVDSQLqGAA0wUQCInMh1lQQgBgCAAgCEFFxjMUQEaDFBlEdEE+mi39QABAAABgBQgPA/gGA2QC9gcCNAfEE+mi39QgBAAAAAAQgBACAEgDEEvii4JQDBBNDoAGQAaABAeAAQDcgCEHhGEFFei9FQhsCNlMC7EEGijMsIAOgIMgKvA7UQPDNcE+M4ECo9iNTUBNtBRLArYAIHUAWxgGrgFUhR8IAAgBUgFPgioAIzgHkEDPajIsIjkGoECiBiUoIAJgEECpBiNZIgEAGUgT3A7MgpWA0SQpFPlqRPJIgJANQFHEOErGcECiBiUoQDgDvDcDmECeOiSwIAEAEECeOiSwQAAgDACgCIDxhzECeJiSyQACABADABECeJiSyIAHgDQAuiIA1iFQBHBNBHBNECfziXCQKz65d8ywEDByBs/QAGAEAGAFEC96CIjIAOAOMAzyAxKUANvAK2AmuCAMQADAHAEAHEB9CDBzIAdAXUAhjASRAVzAYKQAGAHAHAHECz6DlLQAWDvAlDrUgA6AX8A9sBaGQABACACACEEmXFE9IATgKEDxnFenUAl+AHDAOyggtEBCyjnMUAikAxBA4zAjZ");
	this.shape_39.setTransform(4889.4228,-4168.3104);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#EAAF88").s().p("EEEvCLqUg9shaGAA6gX8IANAOIgNgOQgljrgWjvQAWDvAlDrUgVzgYKghjgSQUAY6gUfAnvgk6MAzyAxKUANvAK2AmuCALQsLa673AAQmAAAmuhQgEizVAC2Ug9KguehGEgnEUgLRgn9AgHgSQUBbxAjdAXBAR9IgaAWIAagWQNtIuEZHoQkZnottouId96iUAQTAW9Af2AxsUhDhAtXgMcAAAQh+AAglhJgEiu7hXfIAAAAg");
	this.shape_40.setTransform(4767.0352,-2818.2354);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#B19482").s().p("EBISBd4UgUsggUgVmgHQIg5gbUgkOgRQgI4gPnQUl2DR45uQx4Zu0lWDQlREnkLEdIgFAEIgyAtUggaAcugpjAXvIgCABQhrCZh0DMUg3ihUdgUagUUQlLnIIsioUAx0ga1AH9gRfQKU3YOErqQUiPUV9NoIAoAVIAIADUBccAgnAr7gi4UA9PAxjAe6AvIQBVAkCngfIgKAnIgMgJIAMAJUgF4AV3glSATOQ/CVQuAVRIgGAJQhbiLmiDUQhRAphRAAQlPAAlNrGg");
	this.shape_41.setTransform(4969.3392,-3594.419);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#AD8065").s().p("EBMKBosQmZvExCvfUgGdgLcgoLgP9QwukMuzvLIAFgEQEKkdFSknUAI4APnAkOARQIA4AbUAVnAHQAUrAgUQGeNxGhjUQGhjUBbCLIAGgJQOB1RfC1QUAlRgTOAF4gV3QIsF+ChHpQnxHSnRGwIgPgOIAPAOUgnwAk6gY5AUfIgegXIAeAXQsHJ9omGFQwkhEAVsAgEh3mBa1IowttIAfgRIgfARUgf2gxsgQTgW9IAJgIIgJAIQtXyzi6g2QBGwGNRAtIAAAAIAFgCUAjZgPsATmgcLQMU8pNGuqQCsB3E7DKIAlAXIAaAQQMrIEbDPsUAviAblBN2gefIAGgDQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQFIEOErGcUgr8Ai4hccggnIgIgDIgngVQ19to0ivUQuELqqVXYUgH9ARfgxzAa1QosCoFKHIUAUaAUUA3jBUdQmFGyk2AAQisAAiViGgEh2VhIsIgBgEg");
	this.shape_42.setTransform(4968.75,-3576.725);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#F0AD83").s().p("EhPZBeyQs5iHBcwfIALgIQFBkABNljQh9hAiEhjQnZAhlQERQsoJEiml+QJXhRLxsKIAEAQIgEgQQAIhRAAhHQAAkQhwiOQBYjBBkjjQA6iEA1iNQg1CNg6CEQhkDjhYDBQjdFYjqDQQDqjQDdlYQBwCOAAEQQAABHgIBRQrxMKpXBRQpaBvmRosIgBgEQg1lYGUgPIAAACIAAAJIgBAAQBxGgJ3AbIAFABQIJhZCxmvIAAAAIgFAAQiLAMh0AAIAAAAIgBAAQshAAEGpOIAAAAIAGgMIABgEIABgBIACgEIgCAEIgBABIgBAEIgGAMIAAAAQkGJOMhAAIABAAIAAAAQB0AACLgMIAFAAIgDACIADgCQixGvoJBZIgFgBQp3gbhxmgIABAAIAAgJIAAgCIABAAQgfnVKujDIADgBQA5h6BfilQCpqnGMqJMAhIgReQJ0jXJeAVIA9gBIAAAAIABAAQBOAABMAHQhMgHhOAAIgBAAIAAAAIg9ABUAahgmxA2Fgf8UBFRgYXAXSgClQCKgSBcAFQHDJNA+ICQvwXEr7akQ3sKA+QBeQD/kbDskiQjsEij/EbUgkuAotg+fAgiQAgisAAieQAAmajbk2QDbE2AAGaQAACeggCsIgFADQAPP63SIUQA4NtoSAAIgLAAgEhIgBG3QA9AAA6gJIABAAIADgBIgDABIgBAAQg6AJg9AAIAAAAIgDAAQlCgBmhkGIgPgKIgDgCIgFgDIAFADIADACIAPAKQGhEGFCABIADAAIAAAAgEhUcBCnIAAgBIAAABIAAAAIgBAAIAAgGIAAAAIAAAAIAAAGIABAAIAAAAgEhb1BAWQAchWAAhCQgBjDjvgdQDvAdABDDQAABCgcBWgEhUMA6+QGotmPjiOQvjCOmoNmgEhYAArSQb8AABB73QhBb378AAIAAAAIAAAAQixAAjCgRIgGAAIAGAAQDCARCxAAIAAAAIAAAAgEhcIAmuQE+j9AAlZQAAiNg2idQA2CdAACNQAAFZk+D9gEgwsA40IAAAAg");
	this.shape_43.setTransform(4232.1673,-5371.751);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#745A46").s().p("EhhZCnFQ7CvsssoEIAWgYIgWAYIgagQIgkgXQk8jKirh3Qh6higigtUgC7gD2AfUgp0UAYAgk3AI9gWMQI92MAkh2MARtg5CIBKinQL86kPv3EIAcBpIgchpQQJ0aT4w+Qz4Q+wJUaQg+oCnCpNQhqiWiCiQQfVuEQYhfQVWyNZ9syIAfgeIgfAeIgJgQQDsoqMvgYQCIBUADCLIgJADUAVgAmgAc1AnHIAEgEQCUGtERF2IACADQIBLnnsJzQ5f858EzwQcETwZfc5QMrKlHSN/IADAIQAqB3hwA5IgCABQjfB8jQCDQ98Swqza4Qg1CFguCIIgHADUg4zgjYgikgxBUAikAxBA4zAjYIAFACIAEAEIgEgEIACgFIDxhzQDgDvDcDmUgT3A7MgpWA0SQpFPlqRPKIgJANQAAABAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIgHADUgo3AQBgghAAAQ9bAA2ltHgEBKrhxvIAEAMIgEgMUgMFgovgKBgQbUAKBAQbAMFAovQkwjXk0jFQE0DFEwDXIAAAAgEAFSiL6IAbgJgEBKrhxvIAAAAg");
	this.shape_44.setTransform(5274.5365,-5211.6336);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#F9AF80").s().p("Eg+3A8oIADgGIgDAGQjcjljgjwIAIgDIgIADIiOiaQKy64d9yxQeiaiU8YpIgQBVIAQhVMAKvg7TQgji/K3rwUAK2gLvAkTABGIAEACQIjEMgaGgIgCAAQqqi6kkkOIgRgPIARAPQEkEOKqC6QFJDxh2I1QA2EYgyFtIACAEQB0FRiIHLQgzQUrrmAQhUjSAnk4IAHgBQBWgNBLAAIABAAIABAAQBTAABHAPIAHABIgHgBQhHgPhTAAIgBAAIgBAAQhLAAhWANIgHABQAHg3AOg/IgCABQFMi7BsiMQhsCMlMC7QkHBGjbACIg4AAQjogHjBhNQDBBNDoAHIA4AAUgIzAHkAFPAioIAAABUAFUBR9gWyAGqUgrXgIHhNshRLgEAoMBSvQk9s4vDtcQPDNcE9M4gEBj6AFJQhlkdkajEQEaDEBlEdgEBWwAR+IAAAAgEhkxiJuIAJgDQMNj8IEoNUBRNADHgJQAzmQ3qJJyQZzIgEAGIgHgNIAHANIgDAEUgc2gnHgVggmggEgyYg8Lg");
	this.shape_45.setTransform(6373.1626,-5460.75);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#000000").ss(0.5,1,1).p("EArAlTZIgBAPICAC9QgXAKgYAKEAZglLFIADAGIABABQAAACABACQAFAMAFALQAZgKAZgLIg8gCIAEgDIAHgEEAZplK9QgFAAAAgBEAahlK4QgrgDgNgCEAZvlKjQHvTQJmSGIABADUAOfA7FAT/Ar8QA0mEGhpTMACIAjTIAAAEIADgJIgDAFUgALAZugNlAg5UAxsAGOAeUAJLIVxWJIAAgCQOgEiP5U+QADAEADAFEgZHkrZIhOBSUgujATcgvtAqQQCBBIB7BPIAAAAUAZkAQdAHLAjEQAAADABADEgNfkwRQlsCLnKD/QZz1OaRrOECKlkmlQAGgCAFgCEBmqkNZIg6ggEBdokCGIAIANEBdgkB5QAEgHAEgGQAYgkAYgkQMOTFAjHfQAEA9gIAxQgKALgLAKQABgEABgEQAMg9ALg+QDKysnpyDQNQvCWrqKUgHjg0XhAmgDpQosI6sxFeMAwpBOHEBeSkDXQADAEADAFQDYlFE6lGEBqyjmvIAOgqEBqgjlZQAJgnAHgnEBqvjmmQAAAAABgBEBqvjmmIADgJEAZjlK/QGZqjLDCYEh4/jspQANAHANAHIAAABIBND1QBXgvBYgwEh4ljsbQAAAAAAAAIAAABEh3YjolIAJAcEhXHi0pIAGAFIDIh5IAFgDIgFAGQAAgCAAgBEhUHi2pIANAGIAGADQChFqC7DmIAEADIAAAAIANAMEhXBi0kIIpHUEhifit5IAegaILAmREiAXicOIeWyFQkWWCrIUoEjNfitBQABACABABUAXAAxhAqJAthIA1hNEiufgZJIhwgYMAj7g0bQGvHQHNHKQCHbLSZWzQABABABABQDSOFF8LBQDHCBD1hdQCQnlm71EQEeE1D+YwQAAABAAABQAuGVHmkDQDTr3lZyLQFuJuAsNiQAAACABABQDnNUGtm/IAIigQgDnegfmfEiuvgZ5QAQAMhwAMQBJA3BJA2Eit/gX5IACAFQASAOASANQEjDWEhDGUBZ7A9lBLZgnzUAdHAqSALZAoqEitPgYJQgFAYgFAYUgGxAjSASoAhoIABAFUAWxAfPgFzA2MQACAPACAOQAqD4EGA4UAg9gEzAerACDUBB2ADtABwgHNEikXgRRIACAUQirWpHRYCQB8KwMaV/UAKOAq1gJUAaMEhahhQtQAZAqAJAaEhahhQtQAFAFAGAFUAwjAnbgMsAQmQECPTiOQ5QosA9iBqGEhJHg5hQN/PWEpRpEhD/gaFQDgJvBHO2QAAABAAAAEhSvgUxQBcDdBmCqEid/jEpQQWT+NSUdUAYHAlHANvAmaEiQjCDBIgCAcQpPMBLdG5QRxB6QJA6IDce6IACAREiOfCWWQAEAAAEABEhsfCY2IACAVUAuAACkAg5gFnQMIiFKWjLQADgBAEgBEjCfDF2IglEcUA35gNBAiKgFMUAyggDAADCAExEjJ/EEWICMgCIgsIiEjFfDK2QBOgSBNgSMgEvA6CMCNlgBeIAPAAEg6OEC2IgRBAECNcgogQAgsdEWj0QL8qUNKMUQACACACACQABABABACQPjSgIMg5QHChcDLqHQADgGADgFECVdgn4QIkHjETIwQEjEAAjk/QCCDdDHD4ECaeguqQCQFXHCDwQgxFcEbHjEC5fgN6QgDABgEAAEC5fgN6QAEADAEACECyYgTvIAEgOECsggRNIADgCQFqCmALlGQC1DYESCdECeZg2FQE+GIG5FcQA8OSHMIgEDDNglDQNpVp3XBgEBUwjPZIAIB5QHUqfOjunEBJAhvpIAQADQpfW8wBacUgS2AfHgb4Aj6QgBABgCABECeZg2FQAAgBABgBEBwxg85QADATAEASQD/FsGGE6QswRGIPEHQQSItGu0sQATAmBBA9QCZB1EUiwQCPiRCykhQB7jHCAkUEB0YhXhQmCMeCbOKMhBBgBVEApYBXmIAHALIACAEQA2AfAyAhQH/FZAQKYQriJctmHBMAjqBQzQAiCYAMMsQANMstlWTQtmWUgqB0QgMAMADgIQAahGgMAxQgCAHgDAKEgKPB/mQACACACACQgCASgCASEgKLB/qQA8A+AuBWQAAAAAAABQA2BnAgCKQBJE/hEGJEgJQB1OQgXFTgkFJEgdfCV2IgFASQEocYg2VLIGLLLIAIAQEgHfCF2QAKgDAKgDQSCkyPZn7EAZgB3WIAwBtEgJQB1OUAofgGUAL6gWFEgZ/DHWIANAVUgB8AwdgegAKuEgMfDD2QjzGujVISUgSKAtJgE+BboAwvM2UAKtA6jgDOAt1EAR1Fc1IArABEAR1Fc1UABngj2AHdgRbQHOw3A5isEgrfFb2IAwgPMA8kABOEARwFemQACg5ADg4EBXDiqSMATsg8UEhOUitNUAtSgOTA1agsZEjNdis+UAG+gQZBPHgrO");
	this.shape_46.setTransform(5462.4,-4216.575);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#B19482").s().p("EhThBH2UAJTgaLgKOgq2QsZ1+h8qwQnR4CCr2qUBZ7A9mBLZgnzUAdHAqSALYAopIgGgLIAGALIADAEQA2AfAxAhUgL5AWGgogAGTQAvqkAArPUAABglggIPgtEUAIPAtEgABAlgQAALPgvKkQgYFTgjFJQA8A+AtBWUgBwAHNhB0gDtUgesgCDgg8AEzQkHg4gpj4gEAyuBEmIAEgkIgEgEIAEAEIgEAkg");
	this.shape_47.setTransform(5072.2402,-3834.9875);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#AD8065").s().p("EguiBX4IgCgUIACAUQwKg5xwh7Qrdm4JOsBIADgcUAFyg2MgWwgfOIgBgFUgSoghoAGxgjTQEjDWEhDGQirWpHRYDQB7KwMaV/UAKOAq0gJTAaMIgEgdIAEAdQApD4EHA4UAg8gEzAesACDUBB0ADtABwgHNQgthWg8g+QAjlJAYlTUAoggGUAL5gWFQIAFZAQKYQriJctnHBIgvhtIAvBtQvZH7yDEyQggiKg1hnIgBgBIABABQA1BnAgCKIgTAGIATgGQBJE/hEGJQqWDLsHCEIAFgRIgFARQ2lD38vAAQtJAAubg0gEAgWBU1g");
	this.shape_48.setTransform(5066.1479,-3798.7624);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AMeYRIDIh4IAAACIAEgFQCiFqC7DmgA1F/kIAAAAQCBBIB7BPIivBfgA1G/lIABABIAAAAgA1F/kIAAAAg");
	this.shape_49.setTransform(4825.6125,-5527.6125);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#745A46").s().p("EiCOCOnIgDgUIADAUQkhjGkjjWIAJgwIgJAwIglgbIgCgFIACAFIiShtIBwAYIhwgYQBigKAAgLQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAgBgBAAQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAQAAALhiAKMAj8g0bQGuHQHNHKQCHbLSZWzIADACQDROGF9LBQDGCBD1hdQCQnlm71FQEfE1D9YxIAAACQAuGVHmkDQDTr3lZyMQFuJuAsNjIABAEQDnNTGtm/IAIigQgCnegfmfQCAKGIsg9QCPw6kCvTUAMrgQmgwignbIgMgKUgNvgmagYGglHIeVyEIgeAaIAegaILAmRIIpHUIAEAEIAAAAIANALIgNgLIAAAAUAtRgOUA1bgsZUg1bAsZgtRAOUIgEgEQi7jmihlqIgGgDUgHLgjEgZjgQcIgBgBQh6hOiBhIUAvsgqRAuigTcQHLj/FriLQlrCLnLD/QZz1OaSrNQHvTPJmSGIABAEUAOfA7EAT/Ar8QA0mDGhpUQHVqfOiumMgTsA8TIgDAFMgCIgjTMACIAjTUgAKAZtgNmAg5IgQgDIAQADQpfW9wBacUgS1AfGgb5Aj7IgCACQ9nPo/0AAUgxSAAAg2nglbgEhPZAb7QLI0oEW2BQkWWBrIUogEiOJCGDgEB5GgKoIADgFIgDAJgEB5GgKogEB5GgKogEB5JgKtgEgsOgNngEBNLiFkIgBgEQpmyGnvzPIAygWQgrgCgNgDIAHgEIgHAEIgFgBIAFABIgEADIgBgEIAAAAQGZqkLCCYICAC9IgvAUIAvgUMAwqBOHIgJANIAJgNIAvhIQDZlFE5lGQHpSDjKSsQAEA9gIAxIgUAVIABgHIAOgrIgOArQAMg+ALg+QginfsPzFQMPTFAiHfQgLA+gMA+IgDAJQuiOmnVKfIgIh5IAIB5QmhJUg0GDUgT/gr8gOfg7EgEB/2hiUIgHgNgEB2+gt7gECM4hHJIgBAHIgCACgECNPhJFIAAAAg");
	this.shape_50.setTransform(5244.1645,-5237.8868);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#F9AF80").s().p("Eguygf3QMwleIso6UBAmADpAHjA0XQ2sKJtPPCIg6ggIA6AgQk6FHjYFEIgGgJIAGAJIgwBIg");
	this.shape_51.setTransform(6049.8125,-6164.4);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EAAF88").s().p("EgqtEiPUAE+hboASKgtJImLrLQAIjTAAjfQAAy1j539QD5X9AAS1QAADfgIDTIgNgVIANAVUgB8AwdgegAKuMiNkABeMAEug6CUA35gNBAiLgFMIABARIgBgRQThhKMbAAIABAAIABAAQTiAAB/C4IABAAIAAAAIABACIAAABIAAgBIgBgCIAAAAIgBAAQh/i4ziAAIgBAAIgBAAQsbAAzhBKIjc+7UAt/AClAg6gFoQMHiEKWjLIAHgCIgHACQBEmJhJk/QSCkyPZn7MAjqBQzQAiCYANMsQAMMrtlWUQtlWTgrB1IAFgRQAMgygZBHQgDAIALgMQg5CsnOQ3UgHdARbgBnAj2gEgTdCZuIgIgQQDVoTDzmtQjzGtjVITgEgTlCZegEhJQgwuIgBgDQgstjlupuQFZSMjTL3QnmEDgumVIAAgCQj94xkfk1QG7VFiQHlQj1BcjGiAQl9rCjRuFIgDgDQyY2yiI7LQnNnKmunQIA0hNIg0BNUgqKgthgXAgxhUAG+gQZBPIgrOIAIAcIgIgcICuhfIABAAUAZjAQdAHLAjEIgNgGIANAGIAGADIgFADIgBgGIABAGIjIB5IgGgFIAGAFIrAGRI+VSFQtS0dwXz+QQXT+NSUdUAYGAlHANvAmaQAZAqAJAaQgJgagZgqIAMAKUAwiAnagMrAQnQECPTiPQ6QosA9iAqHIAAAAIAAgBQhIu2jgpvQDgJvBIO2IAAABIAAAAQAfGgACHeIgICgQiUCah8AAQjsAAiYovgEhPrhICQhmiqhcjdQBcDdBmCqgEg2chR6Qkqxpt/vWQN/PWEqRpgECyahNHIAEgOIgEAOQnLogg9uSQm5lck+mIIABgCIgBACQiAEUh6DHQizEhiPCRQkTCwiah1QhAg+gUglQAgsdEWj0IAHgGIAEgDQFXkkFmAAIABAAIABAAQGrAAHBGfIADACIANAMIAEAEIACACIAJALIAMAPIAJAKIAHAIIAFAGIAYAcQOEQaH2ACIACAAIAAAAQAYAAAWgCIABAAIACAAQNpVo3WBhQkSidi2jYgECslhKnQjHj5iCjcQjxmbAAk6QAAg2AHg0QnCjwiPlXQB6jHCAkUQE+GIG5FcQA9OSHLIgQgHDYiiAAQhSAAh6g4gECyahNHIAAAAgECiWhQ9QkTowoknjQCPiRCzkhQCPFXHCDwQgHA0AAA2QAAE6DxGbQgTCxhiAAQhPAAiChygEB2ehV5QoOkIMvxFQmGk7j/lrIgHglQgskDAAj5QgBpyEUo6QkUI6ABJyQAAD5AsEDMhBBgBVQQB6cJf28UAxsAGOAeUAJLIVxWJIAAgCQOgEiP5U+QjLKGnCBdIgCAAIgBAAQgWACgYAAIAAAAIgCAAQn2gCuEwaIgYgcIgFgGIgHgIIgJgKIgMgPIgJgLIgCgCIgEgEIgNgMIgDgCQnBmfmrAAIgBAAIgBAAQlmAAlXEkIgEADIgHAGQkWD0ggMdQkvOjpdAAQj/AAk1ikgECahhoCIAAAAg");
	this.shape_52.setTransform(5462.1625,-3849.3625);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#000000").ss(0.5,1,1).p("ECE9lHnQAXgYAXgZEBvDk6EQgBAAgBgDQAAgBgBgBQsIlbm5KmQgGAJgGAJQACAGAjgiIgFAYEBb/k0+QAMgFANgFUActBKkAWpBFNQC6o1Fbo3EA/hkkfQABgBAAgBQMBqFQcmYEA97kjIQAygsA0grEClzjzgIANANMBHVBE3QA2DZhQCzQgfAUggAVIh2GeIgDAJECg6jsLQgFgFgLgKQABgBABgCQCWjdC+jZECgsjsdQAHAJAHAJQABACACACECgqjsaQS7bOwNKvQgBABgBABIgCACQmjHqksHpQgBABgBACECE9lHnUBI4gaWgBqBSGQ5JNrtCO5EBvDk6EUAUtAohAc8AlGEBvDk6EQL2jMKEqXEEJEjYgIgQgaQD+piKVByEEYdiX0QnEh5iln6Q4BJsmpqUQi/37dnLeQBumlDDmQIrQ2yQBcmvDVAiEEUgjGOIABgJIrdyJEEUejGOIADgJEEUgjGOIAAAAQM2B6KUEjEEUTjGQQALACACAAEEUejGOQABAAABAAEEULjGRIATADEEULjGRQAFABADAAQAGABAFABEEXDjgwQACADACADQNJReHaPbEg28j/iIAHgDQBvCkBmCjQAGgBAGgBEg3Ej/gIAIgCIgmFsQB2gVCMgTQS8eRhTa9QgMDvglDsQABABAAABQAVB6CUB4QFegIFbgZUAz8gDtAw8gbREg28j/qIAAAIEgmmi/mQACgBABAAQCTg0CZg1Ejw7iARUAvfg+3AtwgdoUAs6gU5AvQgINEgU8i3AQgEAPgFAPEgini5zIAFAJEh60irIQAWgCAVgDQDhkODUkVEhSMAO/IA3BXUgSMA0DBTuAzkQADACAEACUAchAGLAoeAyzIDADgMAiggmgUA38gkqAD9gTiEhqkgAIIAGBJQhBGXhSGtUgApBJ9BhaAoHUAYoACWAi2AuzQAiBDADAEEhsdgBIQAEAHgPgDIALgEQgDgFgQgMQEtuZRY0PUAmag4iAbMhZ/EhsogBEQBlA7AlBKQMmIaMjG7UBQwAskBN4gv8QABAAABgBQAEgGAEgGIAPAOIAHAAEhsdgBIIBRgYEi4sB7bUAnkgf5AJXgX7QJZ3+C5ohQC5oiL1shEjw7iARQBXgDBOAKEjZ0hdwIAMgIQAKgQAKgQEkmThTNQ7PJsQHwDQQhmPTNy8QSjtHKPgbEkmThTNIBhglQBkglBtgqIB+gyQAEgCAEgBQCUg7CjhDEkdnhJMIAPgIEkdnhJMQ2PH4lej4Qj7k/W8pCEkkIg3wIAJALQmVBNmsAIQrBAjJEoXQNKjgIMnoQEzhsFkiQEkJggzUQAQgFAQgFIADgDQQNpdLwu2EkJggzUQgjG1VVsJQIfobSn81UA6wghRAkvgsEUAoEgFRArfgPIID/FzEkj/g3lUgYbAVBAy6gQwEkj/g3lQMhiXLKmgEi42B7iQAFgEAFgDEhXmDZ6Ugd8gRTgT5ggYQ0Gzl3avIQgBgBgBgBQoCj3EFl7QAHgKAHgJEi4kB7PQgEAGgEAGEi0tCXNIARgWEi0tCXNQlvmAmJmfQrDuBT9lkQbO7kPz3wUAJfg0KAWjgQvElTcEOHIAEACUgA3Bh3A39g0CUAmdgYUAqWgOVQACgBABAAUAkxgLhAtqg26QAKgNALgNEjbLDJWUggkAJSg5FAxnI+kJ6EjbcDJnQAJgIAIgJQXO4BPQ6IUAmxAolAU7ATHQXOVPBNlPQAPAJAPAJEjTsDHvQjzAsjsA7EgMQCAHQAIABAIABEhXmDZ6QB3j1A5lOUAjRgXtAlng5BQgBAAgBAAEiMsBD/QABgFABgFEhXcDZ/QgFgDgFgCQjIGdl4CiQgHADgHADEkcSE7+QgDgJAFACEEotin9Qg5kMlRivQ3rkjJTy2EEdMiX1QlClEETtHQDRCpI/gmQEbgTFzhGEEswiVFQrHBmkXkPQgDgEgDgDEEY7iYYIgeAkQCcABCTgCEFFXiRYQtVIFrSryEE3DiX+QlvCGkkAzEDsDioAIgHAZEDmdikAIDpC3MA1tAqDIAIAGEDmzikYIgWAYQC2h6CphtEEfzh3GQh6MQl2P+EEYdiX0QK9JgjnXOEDAdh0UUA0MAuNA+6AoRUAiDAHwgCSgpyIgBgIUgGUgvEAAwgd+UgD8glKgeJgNlECYUiMAIAAgHQABABAAAAQBp0Fh724ECYUiL6IABgGQAAgDAAgDQPuN8VdL4IABAAIABACIC7iEIAEgEECYTiLvQABgDAAgCQAAgDAAgDECYTiLvQABgMAAgMECYUiL0QAAgEAAgIIAAAGEC+oh1sQA/AoA2AwEC+lh1uQACABABABQJF47ew1ZEC9ghySQAhhtAnhtEBNbAMvIACACUBI0hmQACCgyQEBNVAM9IAXACUAgOAURAlMAz5QADADACADECTGBVJQBogRB+A7QEnCJG/JJQinEjkCFlUBCVA+LgMLAW3UgKbAXPg0LAdRUgMAAIlgyIAw1IAKAKEBebClfIAJAHISROPQlWFpkmGRQgDAEgDAEUgaiAj0giRAeFMArFAsZQgBABgBABEAveCxSQGcRPNpmrQABAAABgBQOkrvMbqgUArtgk7ARYgVeECZbCWnQ36LjwsRrEg21j/lUAu/gYEBHXgM2");
	this.shape_53.setTransform(5022.0854,-4329.5298);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#AD8065").s().p("Ehn6BheIAWgaIgWAaUgU6gTHgmxgolIARgWIgRAWQlvmAmJmfQrDuBT8lkQbO7jP03wUAJeg0KAWjgQwQBlA7AlBLQhAGXhTGtQBTmtBAmXQMnIaMjG6UgSMA0EBTtAzjIAGAEUAciAGLAofAyzIDADgMAiggmgUA38gkpAD9gTjQEnCKG/JJQinEikDFmUgRYAVdgrsAk7IgJgHIAJAHQsbKgukLvIgDABQtoGrmdxPIAmBHIgmhHUgi1guzgYpgCWUhhZgoGAAohJ9Qr0Mhi5IiQi5IhpZX+UgJYAX7gnkAf3IAJgLIgJALIgJAIIAJgIIgNAUQkFF7IBD3IADACQXaPHUFTlUAT6AgZAd8ARSQjIGel4CiIgOAGIAOgGQgPBChGAAQkeAAypxCgEh7kgtbIACgKIgCAKgEBAlA/3IAAAAgEinlAJ/IAAAAgEinlAJ/IAAAAg");
	this.shape_54.setTransform(4912.5096,-3603.6165);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#B19482").s().p("Eh3oA0zQ0Fzl3avHIgDgCQoCj3EFl7IAOgUUAnkgf3AJYgX7QJZ3+C5ohQC5oiL0shUgAoBJ9BhZAoGIgQgCIAQACIABAAUgllA5BgjSAXtQg5FNh2D1Ugd9gRSgT5ggZgEBHHA9kUgofgyzgcigGLIgGgEUhTtgzjASLg0EUBQvAslBN5gv8IACgBIAXABUAgPAUSAlMAz5IAFAGIgFgGQBogRB+A6UgD+ATjg37AkpMgigAmgg");
	this.shape_55.setTransform(4908.1379,-3590.8125);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EAAF88").s().p("EkThDkYIekp6UA5GgxnAgjgJTQDtg6DygsQjyAsjtA6QXO4BPQ6HUAmxAokAU7ATIUgtqA26gkxALgIgDABUgqWAOWgmdAYUIAAgBQgCgGACgBIAAAAIABAAIABABIgBgBIgBAAIAAAAQgCABACAGIAAABQzbSDslAAUgXqAAAAAkg/4gEiblCf2IARgSIgRASgEBp3DX+UAiRgeFAaigjzIAGgIQEmmSFWlpIyRuOUArtgk7ARYgVfUBCVA+LgMLAW4UgKbAXPg0LAdQUgMAAImgyHAw1gECwsCKDQQsxqX6rjQ36LjwsRqgEjkHhhXQMgiXLKmfQrKGfsgCXIgKgKIAKAKQmWBNmsAJQrAAjJDoYQNKjfIMnoQ2OH3lfj3Qj7k/W8pDIBhgkQBkglBtgqIB+gyIAIgDQCVg7CihDQiiBDiVA7IgIADIh+AyQhtAqhkAlIhhAkQ7PJtQHwDQQhmQTNy7QSjtHKPgbIAEAAIAogBIABAAIAAAAQA7AAA2AHIABAAIAGABIgGgBIgBAAQg2gHg7AAIAAAAIgBAAIgoABIgEAAUAvfg+3AtwgdoUAs6gU5AvQgIOQB1gUCMgTQS8eQhTa9IksBpIgCABUgrfAPIgoEAFRQDhkODUkUQjUEUjhEOIgrAGIArgGUgkuAsEg6xAhSIAUggIgUAgIgMAIIAMgIQync0ofIcQ1VMJAjm1IAhgLIACgCQQNpdLwu2QrwO2wNJdIgCACIghALQ2kHbnxAAQpwAANnrtgEjdwhy9QEzhtFkiPQlkCPkzBtIAPgIIgPAIIAAAAgEjdwhy9gEg6SjU/IAAAAg");
	this.shape_56.setTransform(4613.3688,-4062.18);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("EBjUBGpIgBgBQAhhtAohsQA+AoA2AvIi7CEgECMQAU6QC3h5CohuIh2GegEiAygGrIACgBIEshpQgMDwgkDrIAAACgEiRJhGnIAIgCQBuCkBmCjQiMATh1AUg");
	this.shape_57.setTransform(5599.3625,-5513.0875);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#F2AF81").s().p("EAqgBg8Ug+4goRg0NguNIAFgEIgFAEQg1gwg/gnQJF46ev1aIDpC3IgCAKIACgKMA1sAqCIAJAGIgJgGQDo3Nq9pgIBAAAIA6AAIAAAAIABAAIBeAAIBVAAIAGAGIACABIAEAEQDLDAGpAAIABAAIAAAAQCdAAC7gaIAMgCIAOAPQGmGwHSAAIABAAIAAAAQFBAAFWjMIABgBIAIgEIgIAEIgBABQlWDMlBAAIAAAAIgBAAQnSAAmmmwIgOgPQEkgzFviFQlvCFkkAzIgMACQi7AaidAAIAAAAIgBAAQmpAAjLjAIgEgEIgCgBIgGgGIhVAAIheAAIgBAAIAAAAIg6AAIhAAAIAegjIgeAjQnFh5iln6Q3/JsmpqTQi/38dmLeQBtmlDDmQIrO2yQBbmuDUAhILeSKIreyKIgPgaQD+phKVBxQNIRfHaPbQqUkks2h6IACgIIgDAIIgTgDIAIACIAMABIAAAAQM2B6KUEkUAeJANlAD8AlJUgAvAd9AGUAvFIAAAIUAB7AjPgX6AAAQkdAAlVhOgEAPBAj7QF1v/B6sQQh6MQl1P/gAUJ5BQiuivAAlEQAAkWB/mDIAGAFIABABQCsCEGTAAIABAAIAAAAQBaAABmgHIAGAAIAAAAIAEAAQEagTF0hGQl0BGkaATQg5kMlRiuQxCjSACqqQAAkLColTQioFTAAELQgCKqRCDSQFRCuA5EMIgEAAIAAAAIgGAAQhmAHhaAAIAAAAIgBAAQmTAAisiEIgBgBIgGgFQh/GDAAEWQAAFECuCvgEAjugWSIAAAAgEALdhHbIAAAAg");
	this.shape_58.setTransform(6718.3479,-5141.0504);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#745A46").s().p("EiRyCbbIg2hWIA2BWQsim7snoZIgFhKIAFBKQglhLhlg8QAPADgDgGIBQgYIhQAYQgEgFgQgNQEtuYRY0PUAmbg4iAbMhZ+QlcAZldAIQiVh4gVh7IAGAKIgGgKIAAgCQAkjrAMjwQBT69y8+QIAMgCIgMACQhlijhvikUAu+gYFBHYgM2QgzAsgzAsQAzgsAzgsIACgBQL/qGQcmXQG5qmMJFbIAAACIACADUAUtAogAc9AlHIgCADIAPAOIADAEIgDgEIgNgRQCVjdC+jaMBHVBE4QA2DZhQCzIg+AoIAHgYIgHAYQipBti3B6IAXgXIgXAXQ+vVapFY6IgEgCIAEACQgoBsghBtQ1cr3vut7QBo0Gh623IABgEQEsnoGknqIABgDIACgBQHek9ABodQAAp4qMurQKMOrAAJ4QgBIdneE9IgCABIgBADQmkHqksHoIgBAEQB6W3hoUGIgBgBIgBAXUgCDAyPhIzBmSIgDgCIADACIgJALIgCACUgoWAY2gpIAAAUgmQAAAgm6gVfgEBPRgaRQC6o1Fco3QlcI3i6I1UgWphFNgcshKkIgaAKIAagKIgBABIgOANIgCACQgPANgEAAIAAAAIgBgBIgBAAIAMgSIgMASIABAAIABABIAAAAQAEAAAPgNIACgCIAOgNIABgBIgGAYIAGgYUAcsBKkAWpBFNgEhVhgrcUAz9gDtAw6gbRUgw6AbRgz9ADtgEhVhgrcIAJgeIgJAegEBXngr9IAAAAgEhjEguugEAb8iqCIAAAAgEAb8iqCIAAAAg");
	this.shape_59.setTransform(5434.5497,-5219.688);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#F8AF80").s().p("Egukgc0QL3jMKDqYUBI3gaVgBqBSFQ5JNqtCO6Qi+DZiWDdUgc7glGgUtgoggEAIYAp8IgNgNg");
	this.shape_60.setTransform(6030.8676,-6155.1123);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{x:6559.05,y:-6790.95}},{t:this.instance_1,p:{regX:6.3,regY:6.2,scaleX:73.8378,scaleY:73.8378,rotation:66.2856,x:2337.1,y:-3828.4}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.8364,scaleY:73.8364,rotation:-68.7127,x:6957.8,y:-2421.5}}]}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_2,p:{x:6622,y:-6857.3}},{t:this.instance_3,p:{regY:6.1,scaleX:1,scaleY:1,rotation:0,x:4341.85,y:427}},{t:this.instance_1,p:{regX:6.5,regY:5.5,scaleX:86.8581,scaleY:86.8581,rotation:-63.9913,x:7004.8,y:-2377.65}},{t:this.instance,p:{regX:6.3,regY:6.4,scaleX:80.6721,scaleY:80.6721,rotation:69.9735,x:2733.1,y:-3646.3}}]},2).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:73.8378,scaleY:73.8378,rotation:-23.7144,x:5743.8,y:-1877.5}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.8378,scaleY:73.8378,rotation:66.2856,x:3795.55,y:-2986.95}},{t:this.instance_2,p:{x:6532.4,y:-6832.5}}]},3).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:73.837,scaleY:73.837,rotation:26.7434,x:2863.6,y:-2128.8}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.838,scaleY:73.838,rotation:13.7422,x:5361.8,y:-2247}},{t:this.instance_2,p:{x:6543.55,y:-6857.65}}]},2).to({state:[{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.instance_3,p:{regY:6.2,scaleX:73.8379,scaleY:73.8379,rotation:77.4365,x:2305.75,y:-3852.75}},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:73.8379,scaleY:73.8379,rotation:77.4365,x:2305.85,y:-3851.15}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.8359,scaleY:73.8359,rotation:-62.8591,x:7126.85,y:-2129.1}},{t:this.instance_2,p:{x:6543.55,y:-6806.45}}]},3).to({state:[{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:73.8379,scaleY:73.8379,rotation:77.4365,x:2518.65,y:-3433.95}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.8363,scaleY:73.8363,rotation:-54.6213,x:6855.8,y:-1862.5}},{t:this.instance_2,p:{x:6543.55,y:-6755.25}}]},2).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:73.8362,scaleY:73.8362,rotation:55.9919,x:3950.7,y:-2522.4}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.8357,scaleY:73.8357,rotation:-26.5963,x:5548.55,y:-1714.2}},{t:this.instance_2,p:{x:6569.15,y:-6780.85}}]},3).to({state:[{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:73.8358,scaleY:73.8358,rotation:23.8395,x:2857.6,y:-2131.4}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:73.8362,scaleY:73.8362,rotation:9.6255,x:5404.25,y:-2212.5}},{t:this.instance_2,p:{x:6569.15,y:-6780.85}}]},2).wait(3));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(1919.5,-7783.1,5828.1,8217.300000000001);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.head_g("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-235.05,15,1,1,0,0,0,28.9,31.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A0A19C").ss(0.5,1,1).p("AgTgdIAnA7");
	this.shape.setTransform(-248.175,73.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BA7049").ss(0.5,1,1).p("AggA4QAbgIAUgPQAdgWATggQACgFADgGQACgFACgFQABAAAAgBAhIgEIA+gfIAGgKIAGgK");
	this.shape_1.setTransform(-242.9,71.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A2A2A0").ss(0.5,1,1).p("AAPgfQgBgEgDAAQgDAEgCAEAAAgdQAAgFAAgGAAPgfQABAMgMAMQgDgKAFgKAAAgdIAGACAgGgmQgNAQAIAMQAGAKAFgdABHAJQACAJgGAFQhBAThAgBQgJgFABgLQAuAEAwgJQAXgEAYgHgAAYgaQgKAaAKAUAAYgaQAkAJALAaAAPgfQAIgCABAH");
	this.shape_2.setTransform(-214.5614,86.3526);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#98362B").ss(0.5,1,1).p("ADPASQgKAZAKAZAjOgzQAVgUAfAE");
	this.shape_3.setTransform(-242.35,82.0095);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("ACng0IBFgLIAMBRQgEABgDABQgKADACAEQgdgDgbAKgAiYAEIAAACIBVgqAieAJQADgBADgCAiUAVIAAAEIAAAFIAAAEQAGApgYAVQgIAGgMgJQgjgugahGIAMgMQAOAvAZApQAKgOAmgJAiUAVQABABABACQgBAAgBABAieAJIAAAIQAFgBAFAFAieARQgIgCgLAKQASACALgCAiYAEQgRgLgMANQAMAGALgDAiYAEIgfg3IBMguAjEA1QAOAWAQAV");
	this.shape_4.setTransform(-239.4,80.4991);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCA181").ss(0.5,1,1).p("AAMhGQAeAVALA7QAEAWACAcAg6gcQAZAFANAhQAHAVADAhQAAADABAE");
	this.shape_5.setTransform(-221.675,68.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#553C28").ss(0.5,1,1).p("AgsgwQABgLAEgGAgsAQIBXAZAg/AiIATAKIBGANIAlAJIABgO");
	this.shape_6.setTransform(-238.2,61.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#6F5E54").ss(0.5,1,1).p("ABZgPIAHgEIANAQIgLAHIhHArIghAUIgJgJIgHgIgAhsgxIAAAAQAKATALARQAbAlAmAaAA1hCIAkAz");
	this.shape_7.setTransform(-230.25,60.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B96F48").ss(0.5,1,1).p("AhJhPQAEAFAFAEQAaAdAeARQAPAIAQAGQAEACAFABQAagZANAaQANACAJAEAhrgEQAHAFAIAGQAAABABABQAqAhApALQAKACAKABQgKgZAPgWQAAgBABgBQACgDADgEQAEgDAFgEQgCAHgBAHQgBABAAABQgHArAdgNQgBgGALgIQgFgKADgGQAAgBAAgBQAGgJAdACIAAAAQAIADAEAGQAEAGAAAIAhsgVQAhgPALgiABHBOQAOgGAMgPQgjgFgJgIQgDgCAAgDAAMA4QAGAGAFAEQAIAHAIADQgLgZAUAHQgEgIAJgGAAnBMQARAIAPgGQgTgLgEgJAA8AZQAaAKAXgMQAAAOgMAU");
	this.shape_8.setTransform(-213.125,47.3333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#736153").ss(0.5,1,1).p("AgVgGIAAAaQAGAEAGADQARAHAUgNIAAgdAgVgGIgGAAIAAgSIA2gFIABAVAgVgGIAdAGIAUgI");
	this.shape_9.setTransform(-229.4,40.6622);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAdAmQgEgFACgPQAAgEABgEQABgHABgHQAEgTAKgSQAAgBABgBQAKgSAQgSAAjBHIAAgBQAAgJgGgXAAFB6QACgBACgBQANgGAGgLQABgCACgDQAEgLAAgQAguAjQABgJABgIQACgXAHgYQACgGACgGQAAgBABgBQAOgqAbgnAAPBeQAAgIAFgGQAFgGAKgDAgfB8QAWACAOgEQgOgJADgOAgfB8QgHgRADgGAg6BuQAGAHAKAGQAGABAFAAAg6BuQABgQACgCAguAjQgoAtAcAeAAfBiQgHAFgEgXAguAjQAygMAZAP");
	this.shape_10.setTransform(-245.5223,52.4308);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgbhnQAAgCAAgDQABgGAEgIQABgCABgCQAEgGACgEQAkAFAZAAIAKAGIACAQQAhAwAIArQACANAAAMQACAIAAAHQABAJABAIQAAAHAAAGQgBABABAAQgCAVgHATAA5hlIACgIAg5BoQAFgcAJgXQAAgBABAAQAUgyAmgdQACgKAEgJQACgDACgDQAFgIAIgHIAZgEIgHgeAAXhWIAeAFIAEgUAgbhnQAHgEAHgBQAHgBAFABQAOADAKATAhUg0QAVAqAkAHQA0gggCgzAhUg0IgHgGIgOAVQAEAIADABQAWAkAlAHQARgEgFgOAhUg0QAhgnAYgMABbBwQACgCADgBQALgHgKgJABbBwQgGARgJgNIAAgNQAHgDAIgEgABbBgQADgBADgCABMB0QAHgCAIgCAgIByQARABARgBQACAAADAAQAFgBAEgBQADAAACAAQAQgDAPgGAgICBQAQAAASgCQADAAADgBIgBgMAAgB+QAEAAAEgBQADgBADAAIgBgMAAuB8QARgEANgEAAuB8QgCAIgEABQgEABgEgIAgSCAIAAAAQABAAABAAQAEAAAEABQgIAQgHgSQADAAACABQgHgCABgOQAIABAIABAhCB+QgDgDgBgKQgBAAAAgBQACABABAAQAGADAFACQgFAMgEgEAhEBjIgDANAhSBpQAGAEAFADAg5BoIAAAOQAGACAHACQAKADALACAhPBaQAGAGAFADQAKAIABgDQAVAGAMACAgICBIAAgP");
	this.shape_11.setTransform(-234.475,42.8696);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#543A2B").ss(0.5,1,1).p("AgVgrQABAGAAAHAgrhBQAGABAEACQAJAFADAOQAmAbAJAPIAHgDIAKAOQgBAIgDAGQgKAdgbANAAAApQASgXAIgT");
	this.shape_12.setTransform(-224.45,36.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAAgEIAAAJ");
	this.shape_13.setTransform(-228.8,29.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EF2D35").s().p("AgqgjQAUgVAfAFIAeA3QgQgLgMANQALAGALgDIAAAIQgIgCgKAKQASACAKgCIAAAFQglAJgJAOQgZgpgOgvg");
	this.shape_14.setTransform(-258.675,80.4845);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF2D36").s().p("AgsAfQgKgZAKgYQAbgJAcACQgCgEAKgDQgNAQAIANQAGAJAFgdIAHADQgFAJADALQAMgNgBgMQAIgCABAHQgKAZAKAWQghAGgfAAIgegCg");
	this.shape_15.setTransform(-217.175,85.714);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#795642").s().p("AAaA+IhGgMIgTgLQANgGAGgLIACgFQAFgMAAgPIAAAAQAAgKgGgXQAAgKAEgHQgEAHAAAKQgEgEACgQIABgIIAKAHIABABQACAKACADIABAAQAJATAMARQAZAlAmAbIAIAIIAAAOgAAsAvIhYgZg");
	this.shape_16.setTransform(-238.2,60.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E7769").s().p("AggAOIAFAAQgGgBAAgKIAAgDIAQABIgBAOIgIgBIgBAAIAAAAIAAAAIABAAIAIABQgEAIgDAAQgEAAgDgJgAAWANIgBgNIABANIgGABQgRACgRgBIABgOQARABAQgBIAFgBIAKAAIAFgBIABALIgGACIgJABIAJgBIAGgCQgDAIgDABIgBAAQgEAAgEgGgAggAOIgWgFIgMgEIAAgOQAVAHAMACIAAADQAAAKAGABIgFAAgAhLANIgBgBQgCgDgCgJIAAgBIADABIALAFQgEAJgDAAIgCgBgAAlAKIgBgLQAQgDAOgFIABAMIgeAHgABDADIAOgDQgDAIgEAAQgDAAgEgFgAhCAFIAAAAgAhNAAIgDgBIACgMIgCAMIgLgGIACgPIALAJQALAHABgDIAAAOIgLgFgABDADIgBgMIAPgHIAAAQIgOADIAAAAgABRAAgABRAAIAAAAgABRgQIAHgEQAJAJgLAIIgFADgAghAAIAAAAgAhQgBIAAAAgAhCgJgABCgJg");
	this.shape_17.setTransform(-233.5299,54.2196);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F09A69").s().p("AjvB6IA+gfIAGgLIBJAOIgFALQgSAhgeAVQgVAPgbAJgACqgiIgBgCIAAgBIgBgCQgGgPAJAAIAAAAIAAAAIABAAIABAAIAFABIAAABIgBgFQAAgFAHgFQAIAJAjAEQgLAQgOAFQgTgLgFgIQAFAIATALQgHADgHAAQgJAAgJgEgACagtIgMgKQgDgJgBgKQAAgOAKgOIABgBIAFgIIAIgIIgCAQIgBABIAAABIAAACIgBACQgDAcAOAAIAAAAIAAAAIAJgCIAAAAIABAAIAAAAIAAgBIABAAIAAgBQABgFAKgHQgKAHgBAFIAAABIgBAAIAAABIAAAAIgBAAIAAAAIgJACIAAAAIAAAAQgOAAADgcIABgCIAAgCIAAgBIABgBIACgQQAbgZANAaQANACAJAEIgCAAIgHAAIAAAAIAAAAQgUAAgGAIIAAABIgBABIAAAFQAAAFADAHQgDgHAAgFIAAgFIABgBIAAgBQAGgIAUAAIAAAAIAAAAIAHAAIACAAIAAABQAHADAEAGQAFAGAAAJIgBAAIgBAAIgBABIgBAAIAAAAQgKAFgMAAIAAAAIAAAAQgKAAgKgDIgDgBIADABQAKADAKAAIAAAAIAAAAQAMAAAKgFIAAAAIABAAIABgBIABAAIABAAQgBANgMAUQgjgEgIgJQgEgCAAgDQAAADAEACQgHAFAAAFIABAFIAAgBIgFgBIgBAAIgBAAIAAAAIAAAAQgJAAAGAPIABACIAAABIABACQgIgEgIgHgADjg2IAAAAgAB6g6QgqgKgpgiIgCgBIgOgNIgBgRQAhgPAKgiQAbAdAeARQAQAIAQAHIAIACIgIAIIgFAIIgBABQgKAOAAAOQABAKADAJIgUgDgAC4hDIAAAAgAC0hIIAAAAgACih3IAAAAg");
	this.shape_18.setTransform(-226.2,58.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E15E2A").s().p("Ah2CBIAHgKIBHANIAAABIgFAKgABIhjQAcgOAKgdIAIAJQgKAighAPIgDgPg");
	this.shape_19.setTransform(-231.5,53.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8C6A3").s().p("AByDeQgDgggHgWQgNghgZgFIBHgrQAeAWALA7QAEAXACAcIhFALIgBgIgAiRB/QgEgMAAgGIABgFIgBAFQAAAGAEAMIgKgCQgLgGgGgHQACgPABgDQgBADgCAPQgcgdApgtIABgSQADgXAHgXIAEgNIAAgBQAOgqAdgnQAWAlAlAHQgQASgKATIAAABQgKASgEATIgDAOIgBAIQgCAQAEAEQAHAXAAAKIAAAAQgLADgFAGQAEASAEABIABABIABAAIABgBIgCAFQgHALgMAGIgFABQgMgHAAgLIAAgEIAAAEQAAALAMAHQgKADgOAAIgNAAgAhiBhQAAgJAFgGQgFAGAAAJgAhUAoIgBgBQgNgHgUAAIgBAAIAAAAQgRAAgXAGQAXgGARAAIAAAAIABAAQAUAAANAHIABABgAhsB8IAAAAgAhVBlQgEgBgEgSQAFgGALgDQAAAQgFAMIgBABIgBAAIgBgBgAhSBlIAAAAgAhNBJIAAAAgAAsjgQgZAAgkgFIBHAAIAAALg");
	this.shape_20.setTransform(-234.1973,52.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B5741").s().p("AhkBuIgLgJQAEgTAKgSIABgBQAJgTARgSQAQgEgEgPQA0gfgBgzIAcAFIAEgUIAHAeIgZAEQgHAHgFAIIgEAGQgEAJgCAKQgnAdgUAyIgBABQgJAXgEAcIgCAAQgCAAgIgFgABEgHQATgXAIgUQgIAUgTAXQgIgrgggwIgDgQQAGABAEACQAJAGADAOIABAMIgBgMQAnAaAJAPIAGgDIALAPIgEAOQgKAcgcAOIgCgZg");
	this.shape_21.setTransform(-231.3,41.7929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B19482").s().p("AAEC1IgHgIIBvhCIhvBCQgmgbgaglQgMgRgKgTQAEAEAFgMIANAEIAVAFQAHASAIgRQARABARgCIAGgBQAEAHAEAAQAEgCACgHIAegIQAJAMAGgQIAFgDIAjAzIAHgEIAOAQIgMAIIhHArIgiAUgAgfA9IgQgCQgMgCgVgGQAFgcAJgXIABAAQAUgzAngeQACgKAEgIIADgHQAFgHAIgHIAZgEIgHgeIACgIQAhAwAIArIACAaIACAPIACARIAAANIAAAAQgCAVgHASIgGAEIgPAHQgPAGgQADIgFAAIgJACIgFAAIgQAAIgSAAgAAfgtQALAAAMgHIABAAIABgBIAAAAIAAgeIgCgVIg2AFIAAASIAGAAIAAAbQAGAEAFADIABAAIABAAQAGACAGAAIAAAAIAAAAgAh5hRQgDgCgEgHIAOgVIAHAFQAhgmAYgMQAHgFAHAAQAHgBAFABQAPACAJATQgJgTgPgCQgFgBgHABQgHAAgHAFIAAgFQABgGAEgIIACgEIAGgKQAlAFAYgBIAKAGIACARIgCAIIgEAUIgegGQACAzg0AhQAFAPgRAEQglgHgWglgAgyg4QgkgIgVgqQAVAqAkAIgAAfgtQgGAAgGgCIgBAAIgBAAQgFgDgGgEIAAgbIAeAGIAUgIIAAAeIAAAAIgBABIgBAAQgMAHgLAAIAAAAIAAAAgAAkhLIgegGIgGAAIAAgSIA2gFIACAVIgUAIgAAGhRg");
	this.shape_22.setTransform(-232.175,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACVBjQgIgFAAgLQAuAEAygJQgLgVALgaQAjAJAMAbQgYAHgXAEQAXgEAYgHQABAJgGAFQg9ASg+AAIgHAAgAjeBcQgjgugahGIAMgMQAOAvAaApQAKgOAlgJIAAAEQAGApgXAVQgRgVgNgWQANAWARAVQgEACgEAAQgGAAgHgFgAjJBfIAAAAgADaAeIAFgIQAEAAAAAEQABAMgMAMQgCgKAEgKgADIAvQgIgMANgQIAIgCIgCALQgDAWgEAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBgACDg1IBFgLIANBRIgIACQgKADACAEQgdgDgbAKgAjVAYQALgKAIACQAFgBAFAFIAAAEIAAgEIACADIgCABIgNABIgQgBgADVARgAjYAFQAMgNAQALIABACIgBgCIgfg3IBMguIApA9IhVAqIgHADIgHABQgIAAgHgEg");
	this.shape_23.setTransform(-235.835,80.5776);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AgkB9QAEglAtgOQAGgDAHgBQASgLAOgOQAPgPAKgUQAEgKACgJQADgKABgKQABgJAAgJQAAgBAAgCQAAgKgCgMAAjh8QguAJgXAVQgTARgDAbQgCATAGAWQABAHADAGQgCADgBADQgPAbgbgBAhAAzQgfAjAvAg");
	this.shape_24.setTransform(-254.125,37);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#0777B7").ss(0.5,1,1).p("AgLggQgQgLgJAbQAWAtAiAHQASgJgBgT");
	this.shape_25.setTransform(-246.9442,26.1554);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgEADQABgBAJgE");
	this.shape_26.setTransform(-245.05,8.925);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgOQAJAdAMAA");
	this.shape_27.setTransform(-245.625,7.05);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJABQAGAKgDALAAJABQgPAFAEAPAgMgVQAPALAGAL");
	this.shape_28.setTransform(-232.0109,20.45);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAcgRQAYgOAYgMQADgCADgBQBvg8B7gc");
	this.shape_29.setTransform(-235.4,3.475);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#E39517").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHAAAQAAQgLAdgWAHQgWAHgLgIQAHAOgJATQgHARgGAIQgLAMgLADAhYAcIAYgmIAAAXQAlgYACgsQAPAWgPAcQAVgHAGgHQAJgJADgEQAKgPAAgUQAEAcAJANAiYCJIAdgz");
	this.shape_30.setTransform(-220.925,16.3);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AgKgQQAKAPALAS");
	this.shape_31.setTransform(-216.75,-4.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#745F4A").ss(1,1,1).p("AjaA1QgHgYABgaQABgrAWglQAgg1A3gZQADgCADgBQADgBADgBQAKgEAKgDQAMgEALgCQA8gPAkAKQAeAIAVAPQAIAGAHAHQAOAOAPAVAiQAwQgoAWgRASQgYA4AOAnQANgIAOgIQABgBABAAQAdgRAegQQAHgEAIgEQADgCADgBQCOhKC5hBQghgogmgRQgBAAgBgBQijA5hbArQgDACgDABQgOAHgLAG");
	this.shape_32.setTransform(-231.0809,4.475);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAbBSQAFgCAbgGQAbgGAQgJQAUgNAKgUQAFgKACgLQA+gZg2gWQAEgQgBgaAgng4QAsgUAGAkAhzAqQADACACABQADACAEABQAOAHAPAFQAKADAMAEQAHACAGABQA5ANAGACAABATQgOABgKgEAirgCQAVAXAcAR");
	this.shape_33.setTransform(-230.9377,23.225);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#A0A4A5").ss(0.5,1,1).p("AgvAhIAVhHIBKAJIgSBE");
	this.shape_34.setTransform(-222.6,82.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#C9A188").ss(0.5,1,1).p("AAZhKQADAGACAGQAcBCgUBHAgtgnQACAEADAEQAeAzgaAv");
	this.shape_35.setTransform(-221.5668,71.625);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#B1714E").ss(0.5,1,1).p("AgYhLQADAFACAFQASAgAWAYQANANAQAKQgDACgKANAgwAVQAgAqAhANQABgPAHgPQAFgKAHgI");
	this.shape_36.setTransform(-219.35,52.25);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAmABIAAACIAAADAAmAGIAAADIAAAGAglgNIAQAQ");
	this.shape_37.setTransform(-232.375,31.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#7C6953").ss(0.5,1,1).p("AgVgcIAxAAIAAAOAgcgQIAAAJIAHAAIAAAdQAgARASgXIgBgbIgXAKIgagG");
	this.shape_38.setTransform(-229.1,43.6863);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#583926").ss(0.5,1,1).p("AgWACIAtAOIgagUIgPgL");
	this.shape_39.setTransform(-234.65,66.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#77604E").ss(0.5,1,1).p("AAGixQANAHAJAOQAMASAGAcQABAIACAJQABANABAPQAAAGAAAHQAAASgBAUQgBAPgBAQQgBAFAAAFQgBAEgBAEQAAABAAABQgBADAAACIAhAxIhtBDQAKAGgBAOIA0gdIBHgjIgOgcIgJAFAgTA6QAAgBAAABQAHgBAIgBQABAAABAAQAOgDAPgFAgWApIADARAgWApQAJAAAJgBIACAQAAXAiIAEAOQAIgCAJgEAAXAiQAMgDAMgEAgEAoQANgDAOgDAhKA4IAAAAQACAAACAAQAFABAGABQAAgBABABAg7AqIABAOIAAACQABAAADAAQARABASgBAhKApIAAAPAhhA0QAJACAJABQACAAADABAhiAkQAIAAAGACQAFABAFACQAHAAAIABQATABASgCAhfChIAkAIIAkAJ");
	this.shape_40.setTransform(-229.05,52.65);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#AF714C").ss(0.5,1,1).p("AgMAzQBCgwANgpQABgGABgGAhEAEIA4gy");
	this.shape_41.setTransform(-242,74.675);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#98362B").ss(0.5,1,1).p("ACMA2QgHgbATgYAiWgaQANgYAfgD");
	this.shape_42.setTransform(-242.55,85.125);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("ADeBEQAAAKgNAHQg3AGhIgMIgEgQQAvALAvgBQAYAAAagFgACXANIACABQAAADAAAEIAGAEQgFAFADAOQALgOADgKACnASQADgBABAAQAAABAAACACnASIAEACIAEADQACAAACABQAkAPAHAdACsBJQgHgPAKgjACXANQgRAIAFARQALgGADgLACfAZQADgFAFgCACXANIg9gBAh8AAIgsgtQAGgGAGgGQABgBABgBIAeggIA4AvQgLANgMAKQgQAPgRAGQgTgHgIAOQAMAEAJgGQADgCADgDgAiAAMQAGgCAFADIABAEIABAFQABABAAACQAQAlgRAZQgGAIgOgFQgsgigqg7IAJgOQAZAoAiAgQASARAUAPAiCAFIACAHQgIAAgHAMQARgCAKgFAh1ANQACABABABQgBABgBABAiZA3QAGgPAggS");
	this.shape_43.setTransform(-236.3741,84.2594);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAkAcQgFgEgBgOQgBgCAAgCQAAgDAAgCQgBgFAAgFQAAgDAAgCQAAgXAHgXQADgJAFgKQADgHAEgHAAkAcQALAVADAJIAAAAAAzBWQABgDAAgEQAAgJgCgMAAfBzQACgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQgFAHgJgWQADgHAKgGAAjBWQgCgIAEgHAgEB+QAVgDAOgIQgQgFgBgOAglAqQgDgQgBgQQgBgQABgRQABgSAEgTQAFgZAJgZQADgIADgIAghB2QAHAFAMAEQAGgBAEAAQgJgPABgHAghB2QgCgQABgDAglAqQgeA1AiAXAglAqQAugXAbAJ");
	this.shape_44.setTransform(-241.7602,57.275);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#B96F48").ss(0.5,1,1).p("AAlgeIAAABQAIADAEAGQAEAGAAAIAgFAJQgdANAHgqQAAgBABgBQABgHACgIQAZgZANAaQANACAJAEAAEgEQgEgKACgGQAAgBAAgBQAGgKAdACAAEgEQAaAJAXgLQAAANgMAUAgCAOQgDgCAAgDQgBgGAKgHAgHAcQgEgIAJgGAg0ASQAPAOAFAEQAIAHAIADQgLgZAUAHAAPAwQAOgGAMgPQgjgFgIgIAAPAwQgSgLgEgJAgQAuQAQAIAPgG");
	this.shape_45.setTransform(-212.375,58.089);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#543A2B").ss(0.5,1,1).p("AgNghQAAAGgBAGAglhEQAXAOABAVQAWARAPAkQAFABADADQAFAFABAKQgEAJgFAGQgJALgMAEAAGApQAMgIAFgJ");
	this.shape_46.setTransform(-224.775,39.175);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AAeiGQASADAMAFQACADABABQADAPgFACQgDAPgGAHIgdACAgKiHQABgBABgBQAFAAADAAQARAAANACAgVhqQAGgCAEAAQAPAAAOAQQADAGACAFAhPgjQABgCAAgBQAXgqAUgRQAGgGAHgCQAAAAABgBQgBgSALgKAhPgjIgIgEIgBABIgIAXQAFAGADABQAeAeAlACQAQgLgHgNAhPgjQAdAjAmAAQAUgUAKgSQAMgXgHgUAAyB/QgDAIgDABQgEABgFgIABhB2QgFAQgKgOAgECBQgJATgGgUIAAgB");
	this.shape_47.setTransform(-234.575,45.5195);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#479DD8").s().p("AgkgQQAJgbAQALQAUAYAcAQQABATgSAJQgigHgWgtg");
	this.shape_48.setTransform(-246.9442,26.1554);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAUgRATQgMgTgEgRg");
	this.shape_49.setTransform(-248.725,9.4);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#513412").s().p("AgFAXQgGgCgBgHQgCgIADgIQACgKAFgFQAFgGAFACQAGABABAHQACAIgDAIQgDAKgFAFQgEAFgDAAIgCAAgAgEgIIgDAGIgBAGQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIADgDIACgFQABgFAAgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_50.setTransform(-218.5456,18.9489);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#D16826").s().p("AAEAEIgEAAIAAgBIgBAAIgWgEQAJgJADgFQANgBAKAIQAEAIAIACIgJAOQgEgJgHgDg");
	this.shape_51.setTransform(-218.35,14.5882);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FE9901").s().p("AjxDpIgKgGQgQghAagnIAAgBQAMgRATgSIAQgOIADgFIACgFIAHgQIAGgRIABgDQAOg7hMAOQAXgUAvgJQAWAtAjAHIACAWIAAADIgBARIgEAVQgCAKgEAJQgKAUgPAQQgOANgSALIgNAEQguAOgEAlIgCgBgAhdAJQgcgQgVgYIgOgRIACgBIA6ghIAPgIIAHgDQCNhKC6hCQgKAMAQAAQkVBbg4BVQgEAFgDAGQgMAYAHAYIgHgFg");
	this.shape_52.setTransform(-233.8048,26.075);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FECE00").s().p("AkDCeQgSACgHgIQgEgDAAgGQAbABAPgcIADgFIgFgOQgFgWACgTQACgbAUgRQBMgOgOA6IgBADIgGASIgHAPIgDAFIgCAFIgQAOQgUASgLARIAAABQgbAnARAhQgvgfAfgjgAglAdQgQgFgOgHIgGgDIgFgDQgHgXAMgYQACgGAEgGQA4hVEVhaIAXAAQgKAdgWAHQgXAHgKgIQAHAOgJATQgHARgHAIQgLAMgKADQgIgDgFgIQgKgNgDgcQgBAUgJAPQgEAEgJAJQgGAHgWAHQAPgcgPgWQgBAsglAZIAAgYIgYAnQgHgkgrAUQgNA7AbAOIgbAyIgWgHg");
	this.shape_53.setTransform(-234.6,26.325);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#584A41").s().p("AibAsQAYgPAYgMIAGgEQBvg6B7gdIAXAiIgDgBQiiA4hcAsIgGADIgZANQgNgBgKgeg");
	this.shape_54.setTransform(-231.2,1.125);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#7B5741").s().p("Ag6BUQARgTAogWIAKgGQgJAuATAuIg6AgIgCABIgbARQgOgnAYg4gAhRgBQABgrAWglQAgg1A2gaIAGgCIAGgDIAUgHIAXgGQgNAJgKAJIgUASIgGAHQg6BAALBNQgcARgiAZQgHgXABgag");
	this.shape_55.setTransform(-245.3559,4.925);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#EE773C").s().p("AglANIBGgiIAFANIhGAeIgFgJg");
	this.shape_56.setTransform(-222.375,66.25);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EC9865").s().p("AgwAQIACgeIABgmIAagSQASAgAWAYQANAOAQAJIgNAOQADgKgDAAIAAAJQgIAJgEAKQgIAPgBAQQgggPgggpg");
	this.shape_57.setTransform(-219.35,52.75);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#D0672C").s().p("AgMABQAMgEAIgKIAFAKIgZARIAAgNg");
	this.shape_58.setTransform(-222.65,46);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#75543E").s().p("AAGApQAMgIAFgJQgFAJgMAIIgDgRQgFgcgMgRIABgMQAWARAPAkQAFABADADQAFAFABAKQgEAJgFAGQgJALgMAEIgCgcgAgOgVQgJgOgNgHQAFgBgDgPIgDgEIAAgGQAXAOABAVIgBAMIAAAAg");
	this.shape_59.setTransform(-224.775,39.175);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#EF9B68").s().p("AhEAIIA4gyIAKgBQAWgDANgIIAkAIIgDAMQgMAphCAwg");
	this.shape_60.setTransform(-242,74.275);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#EB9C6C").s().p("AgjgGIAGgQQAdAeAkACIgGANQgkgFgdgYg");
	this.shape_61.setTransform(-240.425,46.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#795742").s().p("AgbCSQAAgKgDgLIAAgBQgCgJgMgVQgEgEgCgNIAAgEIARADIAAABQgCAfARAUQAIAQgCANgAg0A4IAAgEQAAgXAIgXQADgJAFgKIAGgNQARgLgIgOQAVgUAJgSQAMgXgGgUIAdgCQAGgHADgPIAAAiIgXAAQABALgHAOIgDAGIgBACIgDAEQgcAqgPAxQgIAZgEAbIgOgCgAARhnIABAAIgBgBIAAABg");
	this.shape_62.setTransform(-233.725,50.625);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#B19582").s().p("AggCAIAAgBIAEABIALABQgEAJgEAAQgEAAgDgKgAAWCBIAPgCQgDAIgDABIgBAAQgEAAgEgHgAgMCBIgEAAIAAgBIgBgPIAIABIAHAAIAAAAIAAAAIALgBIABAAIAEAAIAGAAIgGAAIgEAAIgBAAIgLABIAAAAIAAAAIgHAAIgIgBIgPgBIgKgDIAKADIAAAPIgFAAIgSgDIAAgGIgBgLIAOACQAEgbAIgZQAPgyAcgpIACgEIABgCIAEgGQAGgOgBgLIAXAAIAAgiQANAHAJANQAMASAGAdIADAQIACAbIAAAOIgBAmIgCAgIgBAJIgYAIIAEAOQgPAEgPADIgCgQIAcgFIgcAFIgRACIARgCIACAQIgCAAIgPACIAAAAIgCgQIACAQIgRABIgRgBgAAtALQAPgBAKgKIABgCIgBgbIgXAKIgbgHIAbAHIAXgKIABAbIgBACQgKAKgPABIAAAAIAAAAQgKgBgMgFIgBgBIgBAAIgBAAIAAgBIAAgdIAAAdIAAABIABAAIABAAIABABQAMAFAKABIAAAAIAAAAgAANgaIAHAAIgHAAIAAgIIAAAIgABGghIAAgNIgyAAIAyAAgAgQCBIgBAAIgLgBIgEgBIAAAAIAAgPIAPABIABAPIAAABIAAAAgAgRCBIAAAAgAAlB/IAAAAgABBBqIAYgIIgCAIIAAADIgBAFIgRAGgAggBwIAAAAgAAlBvgABZBiIAAAAgAhcgjIABgDQAXgqAUgRQAGgGAHgCIABgBQgBgSALgKIApAAQASADAMAFIADAEQADAPgFACQgDAPgGAHIgdACIgFgLIgBgBIgCgCIAAAAQgLgMgNgBIgBAAIAAAAIgBAAQgEAAgGACQAGgCAEAAIABAAIAAAAIABAAQANABALAMIAAAAIACACIABABIAFALQAHAUgMAXQgJASgVAUIgCAAQglAAgcgjgAgXiHIACgCIAJAAQAQAAANACg");
	this.shape_63.setTransform(-233.275,45.5195);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#B19381").s().p("AgpAwIgbgVQACgNgIgQQgRgTACgfIAAgBIAFAAIABAAIAAABQAGATAIgSIABAAIAEAAQASABARgBIABAAQAEAIAEgBQAEgBACgIIACAAQAPgDAPgEQAEAGADAAIABAAIAAAAQAEAAACgIIABAAIAAAAIAAAAIgBAAQgCAIgEAAIAAAAIgBAAQgDAAgEgGIAQgHIAiAyIhtBBIBthBIAIgGIAOAbIhHAjIg0AcQACgMgKgHg");
	this.shape_64.setTransform(-228.1156,63.65);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#785641").s().p("AAAASIgjgIIAEgCQAJgIAEgHIAAgBIACgFIABgFIABgHIAOALIAcAUIgugNIAuANQAKAHgCANg");
	this.shape_65.setTransform(-235.0833,67.8);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#EF2D35").s().p("ABhAxQgHgbATgXIA9ABQgRAIAFAQQALgGADgLIAGAEQgFAGADANQALgOADgJIAEACQgKAjAHAPIgLAAQgqAAgpgKgAjBgfQAOgYAegDIAsAuQgTgJgIAQQAMADAJgGIACAIQgIgBgHAMQARgCAKgGIABAFQggASgGAQQgigggZgpg");
	this.shape_66.setTransform(-238.275,85.6337);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F09A69").s().p("AgQAuIAAgBIgBgBIAAgCQgHgPAJAAIABAAIABAAIAFABIABAAIgBAAIgFgBIgBAAIgBAAQgJAAAHAPIAAACIABABIAAABQgIgDgIgHIgUgSQABgPAHgOIAGgJIABgCIAFgHIAAgBIAAgKQADABgDAKIAJgIIgDAPIgBACIAAAAIAAADIAAABQgEAcAOAAIAAAAIABAAIAIgCIAAAAIABgBIAAAAIABAAIABAAIAAgBQAAgGAJgGQgJAGAAAGIAAABIgBAAIgBAAIAAAAIgBABIAAAAIgIACIgBAAIAAAAQgOAAAEgcIAAgBIAAgDIAAAAIABgCIADgPQAZgZANAaQANACAJAEIgBAAIgIAAIAAAAIAAAAQgUAAgFAIIgBAAIAAACIgBAEQAAAFADAHQgDgHAAgFIABgEIAAgCIABAAQAFgIAUAAIAAAAIAAAAIAIAAIABAAIAAABQAIADAEAGQAEAGAAAIIgBABIAAAAIgCABIAAAAIAAAAQgLAEgMAAIAAAAIAAAAQgJAAgKgDIgEgBIAEABQAKADAJAAIAAAAIAAAAQAMAAALgEIAAAAIAAAAIACgBIAAAAIABgBQAAANgMAUQgjgFgIgIQgDgCAAgDQAAADADACQgGAEAAAFIABAFQAEAJASALQgHACgHAAQgIAAgJgEgAgHAcIgBgFQAAgFAGgEQAIAIAjAFQgMAPgOAGQgSgLgEgJgAApAbIAAAAgAgCAOIAAAAgAgFAJIAAAAgAAlgeIAAAAg");
	this.shape_67.setTransform(-212.375,58.089);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#F8C6A3").s().p("AAyFUQAbgvgfg0IBIgfQAcBDgVBHgAiTD3IgCgRIAAgBIAAABIACARQgigXAdg1QgDgPgBgQQgBgRABgRQACgTADgSQAFgZAKgZQAdAZAlAFQgFAKgDAKQgIAXAAAXIAAAEIABALIABAGIAAAEQACANAEAEQAMAVACAJIAAABQADALAAAKIgBAHIAAAAIgCABIgBAAIAAAAQgDAAgFgJIgBgDIgBgBIAAAAIAAgBIgBAAIAAgBIAAAAIgBgCIABACIAAAAIAAABIABAAIAAABIAAAAIABABIABADQAFAJADAAIAAAAIABAAIACgBIAAAAIgCAFIgBAEIgBACQgEAIgIAHIgFADQgPgGgBgOQABAOAPAGQgNAHgWADQgJgNAAgHIAAgBIAAABQAAAHAJANIgKABQgMgEgHgFgAhPDXIAAgFQAAgFACgFQgCAFAAAFIAAAFgAhNDIQADgHAKgFQgKAFgDAHgAiYCrIACgBQAhgPAWAAIABAAIAAAAQAIAAAHACIABAAIAAAAIAAAAIgBAAQgHgCgIAAIAAAAIgBAAQgWAAghAPIgCABgAhTD1IAAAAgAgMh6IAeAAIAAADIAAAFQgNgFgRgDgAgMh7QgNgCgQAAIgRgSIANADIA/APIg/gPIgNgDIAdgzQgdgOANg7QAtgUAFAkIAYgnIAAAYQAlgZACgsQAPAWgPAcQAVgHAHgHIAWAGQgHgCgHACQgdAyAdAVQAiAAgDg6IAJgPQABAagEAQQA2AWg+AaQgCALgFAKIg7AAQgFAhAiAAQgQAJgbAGIggAIIgDABQAFADgFgBIAAgCIAAACIAAACgAgJi/IAFAAIgFAAIgBAAIAAAAQgKAAgHgCIgCgBIACABQAHACAKAAIAAAAIABAAgAgEjYIABgHQAAgHgEgHQgGgMgQgLQAQALAGAMQAEAHAAAHIgBAHgAgTjZIAAgGQAAgKAMgEQgMAEAAAKIAAAGgABsk4QAKgPAAgUQAEAcAJANQgKgIgNACg");
	this.shape_68.setTransform(-230.3479,44.325);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AiHGHQgsgigqg8IAJgOQAZApAiAgQAGgPAggSIABADQAQAlgRAZQgUgPgSgRQASARAUAPQgEAFgHAAIgJgCgABSF8IgEgQQAvALAvgBQAYAAAagFQgaAFgYAAQgHgPAKgjIAEABQAkAPAHAdQAAAKgNAHQgTACgWAAQgnAAgvgIgACfFGQADgFAFgCQgFACgDAFIgGgEIAAgHIgCgBIACABIAAAHQgDALgLAGQgFgRARgIIg9gBIAVhIIBLAJIgTBFIAEgBIAAADIgEgCIAEACQgDAKgLAOQgDgOAFgFgAiAE5QAGgCAFADIABAEIgBgEIADACIgCACQgKAFgRACQAHgMAIAAgAiXE0QAIgPATAIIgsguIAMgMIACgCIAeggIA4AvQgLANgMAKQgQAPgRAHIgGAFQgFAEgIAAIgIgCgAB/kbIA8AAQgKAVgVAMQghAAAEghgACklBQgcgVAdgyQAHgBAGACIABAAIABAAIAEAAQAHADAFAJQADA6giAAIgBAAgACulyQgFAGgDAJQgDAKACAHQACAIAFABQAGACAFgGQAFgGADgJQACgKgCgHQgBgHgFgCIgDAAQgEAAgEAEgACqlbIAAgHIADgHQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQABABAAAAQAAADgBAEIgDAHIgDACQAAAAAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_69.setTransform(-236.3741,54.1544);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#B19482").s().p("AicEUQgEgBgFgGIAJgXIAAgBIAIAEQAdAkAmgBQAIAOgRALQgkgCgegfgAgqDoIAAgBIABABgAinhTIAZgNIAHgDQBbgsCig5IADABQAmAQAhAoQi6BCiNBKIgHADIgPAIQgSgtAIgugAiOkAIAHgHIATgSQALgJAMgJQA+gPAjAKQAdAJAVAOQAJAGAHAHQAOAOAPAVQh7AdhvA7IgHAEQgYAMgXAPQgMhOA7hAg");
	this.shape_70.setTransform(-227.7438,17.025);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-227.85,89.8,1,1,-29.9992,0,0,6.5,6.2);

	this.instance_2 = new lib.shoe("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-243.55,86.65,1,1,0,0,0,6.5,6.1);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AgkB9QAEglAtgPQAGgCAHgBQASgLAOgOQAPgQAKgUQAEgJACgJQADgKABgKQABgJAAgJQAAgBAAgCQAAgKgCgMAAjh8QguAIgXAWQgTARgDAbQgCATAGAWQABAHADAGQgCADgBACQgPAcgbgBAhAAzQgfAjAvAg");
	this.shape_71.setTransform(-253.575,35.95);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQACgBAJgE");
	this.shape_72.setTransform(-244.5,7.875);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgUABQABAAAAAAQABgBABAAQAFAAAEAAQAQAAANAB");
	this.shape_73.setTransform(-233.1125,30.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAmAGIAAACIAAACAglgJIAQAQIAAAB");
	this.shape_74.setTransform(-231.825,29.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgEgQQAhgaAdgRQAXgOAYgMQADgCAEgBQBug8B8gc");
	this.shape_75.setTransform(-234.85,2.425);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAbBSQAFgCAbgGQAbgGAQgJQAUgNAKgUQAFgKACgLQA+gZg2gWQAEgQgBgaAABATQgOABgKgEAgng4QAsgUAGAkAhzAqQADACACABQADACAEABQAOAHAPAFQAKADAMAEQAHACAGABQA5ANAGACAirgCQAVAXAcAR");
	this.shape_76.setTransform(-230.3877,22.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#E39517").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHAAAQAAQgLAdgWAHQgWAHgLgIQAHAOgJATQgHARgGAIQgLANgLACAhYAdIAYgnIAAAYQAlgZACgsQAPAWgPAcQAVgHAGgGQAJgJADgFQAKgPAAgUQAEAcAJANAiYCJIAdgz");
	this.shape_77.setTransform(-220.375,15.25);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#9FA2A1").ss(0.5,1,1).p("AgsAdIARhDIBHAAIgQBNg");
	this.shape_78.setTransform(-228.65,82.5);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#C7A088").ss(0.5,1,1).p("AAlg+QABAGACAFQAHBAgRAyAgkgyQABAGABAFQAGAugNA4");
	this.shape_79.setTransform(-227.1851,72.275);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#523524").ss(0.5,1,1).p("AAdhiQhKBUAVBw");
	this.shape_80.setTransform(-239.3797,43.45);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#B77140").ss(0.5,1,1).p("AAAgHIAAABIAAABIAAAFIAAAI");
	this.shape_81.setTransform(-227.9,31.25);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#53382D").ss(0.5,1,1).p("AgOgXQAbAUABAQIgIAL");
	this.shape_82.setTransform(-226.45,33.575);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#705E4F").ss(0.5,1,1).p("AgthoQATgZAVAFQAZAGAAAhIALABQABgBABgCQACgFADgGQADgGADgGQAHAKAHANQAkBEgMBpAAGiJQARAEAOAHQABABABAAQADAOgEANAgiiKQABgBABgBQAFAAAEAAAgthoQgCgDAAgDQgBgMAOgPAhNgrIgIAWQADAEADADQAaAXArgDQADAAACAAIAGgWAATg0IAoAAIAAARIgTAKIgcgHQADgKAEgKQAFgQAHgQAAJgUQABgCAAgBQABgEABgFAAJgUIAAAUQAqAKAIgQIAAgdAhNgrQARAcA9gBAAUhVQgBAagSArAhNgrQAQgoAQgVAAGB5QABAagFgIAADBrQgJg/APhA");
	this.shape_83.setTransform(-231.65,44.7047);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CE9E83").ss(0.5,1,1).p("AgfhWQgCAKgDAMQgIArAEArQABAIABAIQAEAfAHASAArBBQgFgJgCgIQgDgHgBgHQgJgmAKgqQACgJACgJ");
	this.shape_84.setTransform(-236.4,51.875);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#5C3B28").ss(0.5,1,1).p("AgNAhQgJAIADANIAoALAgNAhIAQAFAgDhAIgKBh");
	this.shape_85.setTransform(-240.8641,61.775);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#6C5F51").ss(0.5,1,1).p("ABdAnIAFgCIADAYAA6gvQAHgEAGgDIACAOABOgrQAGgEgBgNQgEACgIAEABOgrQgDABgCACAgOgoIASABQAFAAAEAAIAAAOQgDAAgEAAQgHAAgJgCAAagkIACAKAANgZQAIASAHgTAA7giQAHAQAHgWAA6gvIABANQgQAGgPACAANgnQAcAAARgIAhXg0QgEABgKgJQACAPAEAEQACACAIACAAQA3IBNgQABOgrIAPBS");
	this.shape_86.setTransform(-231.7,59.45);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#6D5F52").ss(0.5,1,1).p("Ag3AKIATgEIBJgLIATgE");
	this.shape_87.setTransform(-227.175,66.575);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAygRIAAAAQgDgJgLgVIAAAAQgGgCgBAAQgdgCglASQgCADgBADQgWApAWAWQADADAEADQABAAAAAAQAHAFALAEQAGgBAEAAQgJgPABgHAghAqQgCgQABgDAAzAKQABgDAAgEQAAgIgCgMAAaAnQAHgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQgFAHgJgVQADgHAKgGAAjAKQgCgIAEgGAgEAyQASgDAJgFQABgCACgBQgLgFgBgO");
	this.shape_88.setTransform(-235.0625,63.39);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#AA6E51").ss(0.5,1,1).p("AgdA4QAtg/AKgcQAEgKAAgK");
	this.shape_89.setTransform(-233.8472,72.825);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#94714E").ss(0.5,1,1).p("AAYgkIgFAHIgqBC");
	this.shape_90.setTransform(-240.725,71.325);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#9AA7A3").ss(0.5,1,1).p("AgPgtIgeA2IA4AlIAjg5QgHgDgHgDQgZgKgWgSg");
	this.shape_91.setTransform(-241.475,79.675);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#1E1510").s().p("AgpAEQAhgZAcgRQAJAeANABIgLAGQgnAWgRASQgMgTgEgQg");
	this.shape_92.setTransform(-248.175,8.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgSFhIARhEIBHAAIgQBOgAiUExIAeg3QAXASAZAKIAOAGIgjA6gABRj8IA7AAQgKAUgUANQgiAAAFghgAB2kiQgdgVAdgyQAHgCAHACIABAAIABAAIAEAAQAHADAEAKQADA6giAAIAAAAgAB/lTQgFAFgCAKQgDAJACAIQABAHAGACQAFABAFgGQAFgFADgKQADgJgCgIQgBgHgGgBIgCgBQgFAAgEAFgAB7k9IABgHIADgGQAAgBAAgBQABAAAAAAQABAAAAgBQAAAAABABQAAAAAAAAQAAAAABAAQAAABAAAAQAAABAAABQABACgCAFIgCAGIgDADQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBg");
	this.shape_93.setTransform(-231.163,50.095);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#D16826").s().p("AAEAEIgEAAIAAgBIgBAAIgWgEIAMgOQANgBAKAIQAEAIAIACIgJAOQgEgJgHgDg");
	this.shape_94.setTransform(-217.8,13.5382);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FECE00").s().p("AkECeQgRACgHgIQgDgDgBgGQAbABAPgcIADgFIgFgOQgFgWACgTQACgbAUgRQBMgOgOA6IgBADIgGASIgHAPIgDAFIgCAFIgQAOQgUASgLARIAAABQgaAnAQAhQgvgfAegjgAglAdQgQgFgOgHIgGgDIgFgDQgHgXAMgYQACgGAEgGQA5hVEVhaIAWAAQgKAdgWAHQgXAHgKgIQAGAOgIATQgHARgHAIQgLAMgKADQgIgDgFgIQgKgNgDgcQgBAUgJAPIgNANQgGAHgWAHQAPgcgPgWQgBAsglAZIAAgYIgYAnQgHgkgrAUQgNA7AbAOIgbAyIgWgHg");
	this.shape_95.setTransform(-234.05,25.275);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#584A41").s().p("AibAsQAYgPAYgMIAGgEQBvg6B8gdIAVAiIgCgBQijA4hbAsIgGADIgZANQgNgBgKgeg");
	this.shape_96.setTransform(-230.65,0.075);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#B19482").s().p("AinBCIAZgNIAHgDQBbgsCig4IADABQAmARAhAnQi6BCiNBKIgHADIgPAIQgSguAIgugAiOhpIAHgHIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA7IgHADQgYANgXAOQgMhMA7hAg");
	this.shape_97.setTransform(-227.1938,0.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#EB9A65").s().p("AgmABIBJgMQABAHADAEIhLAMIgCgLg");
	this.shape_98.setTransform(-227,67.125);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#775740").s().p("Ag6A2QgDgNAJgIIARAFIgRgFIAKhhQACACAIACQAEAfAHASQgWApAWAWIAHAGIABAAIgEAHgAA3gfIAAAAIgHgCIgGgRIARACQABATgDAAIgCgCg");
	this.shape_99.setTransform(-236.9808,61.775);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7C583D").s().p("AgZBeQgVhwBKhUIACAHQgQAUgOAoIgIAWIAGAHIgFAVQgJArAFAsIgBABQgEAAgJgJg");
	this.shape_100.setTransform(-239.2797,43.855);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#6D543C").s().p("AgHAAIgGANQAFgNgEgNIgBgBIAAgJQAaAUABAQIgIALQgGgNgHgLg");
	this.shape_101.setTransform(-226.45,33.575);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#7B5740").s().p("AgUBfQgKgnALgqIAEgRIAFgBIAGgWQARgsABgaIAMACIgNAgIgGAUIgCAJIgBACQgQBAALBAg");
	this.shape_102.setTransform(-231.0756,45.75);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#8A7869").s().p("AAXANIAAgNQAbAAARgIIACAMIgCgMIANgHIADAOIgDgOIAMgGQABANgGAEIgEADQgIAVgGgQQgQAGgQADIgCgLIACALQgDAJgEAAQgDAAgEgJgAAQANIgRgCIgEgMIASABIAKAAIAAANIgHAAgAhWgCQgDgEgCgPQAJAJAEgBIACAOQgIgBgCgCg");
	this.shape_103.setTransform(-232.6179,55.5003);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#EC9D62").s().p("AgkACIAFgVQAZAYArgDIgEASQgmgDgfgPg");
	this.shape_104.setTransform(-236.375,45.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B29483").s().p("AgkAEIgGgGIAIgWQAQAbA9gBIgGAXIgFAAIgKAAQgkAAgWgVg");
	this.shape_105.setTransform(-235.875,42.8414);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#E37C32").s().p("AgnABIAFgGQAGAEAMADIAKgBQARgBAJgGIAUgDQAAAJgEAKg");
	this.shape_106.setTransform(-234.8222,68.225);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#EF9B68").s().p("AgLAtQgYgKgXgSIArhDIBKAKQgKAbguBAIgOgGg");
	this.shape_107.setTransform(-237.15,73.375);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B19582").s().p("AgTC2IAJgCQAJgHADgJIAAgBIACgEIABgGIABgHQAAgJgCgMIAAAAQgDgJgKgVQAFAJgBgaIAGAAQAIARAHgSQAPgDAQgGQAHARAHgXIAFgCIAOBSIhMARIBMgRIAGgBIADAYIgTAEIhJAMIgTAEIADgDgAgHA/QgLg/ARhAIAAAUQAPAFALAAIAAAAIABAAQAQAAAFgKIABgBIAAgdIAAAdIgBABQgFAKgQAAIgBAAIAAAAQgLAAgPgFIAAgUIABgCIABgJIAGgUIApAAIAAAQIgTAKIgcgGIAcAGIATgKIAAgQIgpAAIANggIABgDIAFgLIgFALIgBADIgMgCIAAgBQAAgggZgGIAAAAIgBAAIgFAAIAAAAIgBAAQgQAAgPATIgBABIgBABIgCgHQgBgLAOgQIABgBIACgBIAJAAQAQAAANACQAQAEAPAIIACABQADANgFAOIAGgNQAIALAHANQAkBEgMBoIgMAHIgNAGQgRAIgcAAIgIAAgAhYhXQAPgoAQgUIABgBIABgBQAPgTAQAAIABAAIAAAAIAFAAIABAAIAAAAQAZAGAAAgIAAABQgBAagRAsIgEAAQg6AAgQgcgAgri4IAIAAIABABIgJAAIgCABIACgCgAgii3IAAAAg");
	this.shape_108.setTransform(-230.475,49.075);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F8C6A3").s().p("AgsFfQANg5gFguIBKgNQAGBBgRAzgAhxDxIgBgBIgCgRIAAgBIAAABIACARIgIgGQgVgWAVgqIADgGQAigQAbAAIABAAIAAAAIAGAAIAGACIABABQALAUACAJIAAABQADALAAAKIgBAHIgBAAIgCABIAAAAIAAAAQgFAAgHgRQADgHAKgFQgKAFgDAHQgDAFAAAFIABAFIgBgFQAAgFADgFQAHARAFAAIAAAAIAAAAIACgBIABAAIgCAFIgBAEIgBACQgEAIgIAHIgKADQgKgGgBgOQABAOAKAGIgDACQgJAGgSACQgJgNAAgHIAAgBIAAABQAAAHAJANIgKABQgMgEgGgEgAgsDBIAAAAgAiFB5IgCgPQgEgsAJgsQAfAQAmADQgKApAJAoIAEANIAHARIgGAAIAAAAIgBAAQgbAAgiAQIgDAGQgHgSgEgfgAgzCUIAAAAgAgoh9QgNgCgRgBIAAAAIgQgRIAMADIBAAOIAAADgAgKiAIAAgCIAAACIhAgOIgMgDIAcgzQAIADALAAIABAAIAAAAIACAAIAEAAIgEAAIgCAAIAAAAIgBAAQgLAAgIgDQgcgPANg7QAsgTAHAkIAXgnIAAAYQAlgaABgrQAPAVgPAdQAVgHAHgHIAWAGQgGgCgHABQgdAyAcAVQAjABgDg7IAIgOQABAZgEARQA2AWg9AZQgDAMgEAJIg8AAQgEAhAhAAQgPAJgbAHIgfAIIgDAAIgBAAIABABIAAABIgBAAgAggjaIAAgHQAAgIgDgHQgGgMgQgKQAQAKAGAMQgNAEAAALIABAFIgBgFQAAgLANgEQADAHAAAIIAAAHgAgKiAIAAAAgAgjjwIAAAAgABPk7QAKgOAAgVQAEAcAKAOQgKgIgOABg");
	this.shape_109.setTransform(-226.9127,43.525);

	this.instance_3 = new lib.lhand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-245.45,57.8,1.08,1.08,59.9998,0,0,5.2,5);

	this.instance_4 = new lib.Hand("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-217.65,59.6,1,1,-59.9996,0,0,5.3,4.8);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAmAGIAAACIAAACAglgJIAQAR");
	this.shape_110.setTransform(-230.525,30.15);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgTABQABgBABAAQAFAAAEAAQAEAAAEAAQALAAAKAB");
	this.shape_111.setTransform(-231.8,31.025);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AgMgVQAPALAGALQAGAKgDALAAJABQgPAFAEAP");
	this.shape_112.setTransform(-230.1609,19.65);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#533828").ss(0.5,1,1).p("AgNgXQAcAcgCAJQgCAIgFAC");
	this.shape_113.setTransform(-225.2462,33.65);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#ADA098").ss(0.5,1,1).p("ABWAyIBOAAAh7gxIA2AwIgxAtIgtg3g");
	this.shape_114.setTransform(-234.025,79.175);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgvgSQABgBACgCQAGgkAQAJQABgBACgBAAQgyQAJAEALAHQAEABADADAArgXIAAgMAASAFIAPAFQAJgQACgQQAAgHgBgGACBEdIAGgDABPD2IAJAQIAKAQAg2AsQghBIANBIAiGkVQABgBAKgG");
	this.shape_115.setTransform(-230.275,36.25);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#CBA485").ss(0.5,1,1).p("AgChVIACASQABADANAcQAJATAQAPQAGAEAIAFIAYARAhMg2QAFAIADAFQASAmAfAkAgTAhIAGAHQADADADADQAGAHAGAHQAAABABABIAaAY");
	this.shape_116.setTransform(-225.525,52.275);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#725D4B").ss(0.5,1,1).p("Ag1hdQAVAEASAfQAIANAGATIAaAAIAAAOAALhWIAAABQAIAKAFALQAbA3ADBYIAAAPAAIAAIAPgKIAGAfQgFAHgJAB");
	this.shape_117.setTransform(-227.025,42.575);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#695C50").ss(0.5,1,1).p("AAAABIABgB");
	this.shape_118.setTransform(-224.575,41.35);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#76634E").ss(0.5,1,1).p("AgoAtQgGgVgCgSQgEgcAFgSQACgJAFgGAgoAtIAJAWQAFABAEAAQAogCAdgZIAEgEQgCgGgCgGQgEgOgEgLAgoAtQAvACAigeAglg6QAIgJAPAA");
	this.shape_119.setTransform(-230.9191,39.975);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#B46E49").ss(0.5,1,1).p("AAmhKIAAABQhKBGgCA9AAbBKQAFgTAHgE");
	this.shape_120.setTransform(-244.625,47.15);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#4D3C2C").ss(0.5,1,1).p("AgKgFQAGASAEgBAgKgFIgTARQABADABADIAAABIAAgBQAHAPAJACAgKgFQANgUAbgJ");
	this.shape_121.setTransform(-238.05,37.925);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#644F3A").ss(0.5,1,1).p("AAahZQgOAQgJAQQgGAMgFAMQgXA0AIA3QACAKABAG");
	this.shape_122.setTransform(-238.3532,44.9);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#705C4B").ss(0.5,1,1).p("AAvg5QAHgBAKgEIAAABIAAAQQAFgBAHgCIAAAAAAvg5IACAPQAHAOAIgRAg1hIQgGgDgGgDIABALQAEADAFACQACACACABQAAAZAPgSQAGACAFACQAJADAJACQAEASALgRQATACAWgCAgHg3IAAAMAAHg6IABAQAg1hIQAIADAIACQAWAIAWABQAUABAUAAAg1hIIACANAglhDIABAPAAsA+IhdgaIgigKIgGAWIAhAHIBEARIAgAHgABaggIgnBQIgHAOAg3g+IgcBY");
	this.shape_123.setTransform(-233.925,61.8);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#543921").ss(0.5,1,1).p("AgsAWIAHANIAsgdIAmgXAglAHIBJgo");
	this.shape_124.setTransform(-225.025,65.85);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#9E9F9C").ss(0.5,1,1).p("AgwAhIAUhBQApAKAkgKIgUBB");
	this.shape_125.setTransform(-220.5,80.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#B46E47").ss(0.5,1,1).p("ABlhKQATAAAMAHQAoAYgWBoAidAbIA9g9IAHgGAA/gxQAFADAEAFQABABAAABIABAAQAaAjgcBBAhnBLQBDg0ANgjQACgGABgG");
	this.shape_126.setTransform(-230.6097,71.4984);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAVgRASQgMgTgEgRg");
	this.shape_127.setTransform(-246.875,8.6);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#D16826").s().p("AAEAEIgEAAIAAgBIgBAAIgWgEIAMgOQAMgBAKAIQAGAIAHACIgIAOQgFgJgHgDg");
	this.shape_128.setTransform(-216.5,13.7882);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FECE00").s().p("AkECeQgRACgHgIQgEgDgBgGQAcABAPgcIACgFIgDgOQgHgWACgTQAEgbATgRQBMgOgOA6IgBADIgGASIgHAPIgCAFIgDAFIgQAOQgTASgMARIgBABQgaAnAQAhQgugfAegjgAglAdQgPgFgOgHIgHgDIgFgDQgHgXAMgYQADgGAEgGQA3hVEVhaIAYAAQgLAdgWAHQgWAHgMgIQAHAOgIATQgHARgGAIQgLAMgMADQgHgDgFgIQgJgNgFgcQABAUgLAPIgLANQgIAHgUAHQAPgcgPgWQgCAsglAZIAAgYIgYAnQgGgkgsAUQgNA7AcAOIgcAyIgWgHg");
	this.shape_129.setTransform(-232.75,25.525);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#584A41").s().p("AiaAsQAXgPAYgMIAHgEQBug6B7gdIAWAiIgCgBQiiA4hbAsIgHADIgZANQgNgBgJgeg");
	this.shape_130.setTransform(-229.35,0.325);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#785840").s().p("AgFADQAAgGgBgGIgHgEIABgKQAbAcgBAJQgCAIgGACQgFgKgGgLg");
	this.shape_131.setTransform(-225.2712,33.65);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#F09A69").s().p("AgtA7QABg+BKhGIABAAIAAgBQAGAQAJACQgXA1AIA2QgHAEgFAUg");
	this.shape_132.setTransform(-243.875,47.15);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#644F3A").s().p("AgbASIAAAAIgCgGIASgRIABACIABABIAAACIABAAIABADQADAIADABIABAAIAAAAQgGALgFAMQgJgCgHgPgAgBAMQgDgBgDgIIgBgDIgBAAIAAgCIgBgBIgBgCQAOgUAbgJQgEAGgDAJQgOAPgJAQIAAAAIgBAAg");
	this.shape_133.setTransform(-238.05,37.925);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#F8C7A2").s().p("AhCAHIA9g9IBIAWQgNAjhCA0g");
	this.shape_134.setTransform(-239.725,73.5);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#EF9B68").s().p("AgqA+QAchCgagiQAXgSAigKQAoAYgWBoQgSAFgSAAQgUAAgVgFg");
	this.shape_135.setTransform(-219.1097,71.4125);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("ABJFfIAUhCQAqAKAkgKIgUBCgAixEgIApgmIA1AxIgxAugABtjwIA7AAQgKAUgUANQgiAAAFghgACSkWQgdgVAdgyQAHgCAHACIABAAIABAAIAEAAQAHADAEAKQADA6giAAIAAAAgACblHQgFAFgCAKQgDAJACAIQABAHAGACQAFABAFgGQAFgFADgKQADgJgCgIQgBgHgGgBIgCgBQgEAAgFAFgACXkxIABgHIADgGQAAgBABAAQAAgBAAAAQABAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQABACgCAFIgCAGIgDADQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAgBAAgBg");
	this.shape_136.setTransform(-232.688,49.12);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EC955D").s().p("AglgHIAHgGIBEAPIgDAMg");
	this.shape_137.setTransform(-236.525,68.775);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#EA7132").s().p("AgXASIgCgCIgIgJIAkgXQATgBAMAIQgiAJgXASg");
	this.shape_138.setTransform(-220.85,65.7484);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#7A563F").s().p("AgsApIAHgOIAmhQIAaAYIAJAPIAJAPIgmAZIgsAcgAglAbIBJgpg");
	this.shape_139.setTransform(-225.025,63.875);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#7F5540").s().p("AgJBaIgLgGIgDgQQgIg3AXg0QAFgMAGgLQAJgRAOgQQgEASAEAdQggBIAMBIIgPgGg");
	this.shape_140.setTransform(-238.3532,45.475);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#F8C6A3").s().p("AgRDtIgBgCIgNgOIgGgGIgGgHIAAAAQgfglgSgmQAoAAAdgaIAOAfQAJATAPAPQAGAFAIAFIAYARIgtA+gAg3gjIgKAAIgVgDIgJAAIgQgRIAMADIBAAOIAAADgAgjgmIAAgCIAAACIhAgOIgMgDIAcgzQAIADALAAIABAAIAAAAIACAAIAEAAIgEAAIgCAAIAAAAIgBAAQgLAAgIgDQgcgPANg7QAsgTAHAkIAYgnIAAAYQAkgaABgrQAPAVgPAdQAVgHAHgHIAWAFQgGgBgHABQgdAyAcAVQAjABgDg7IAIgOQABAZgEARQA2AWg9AZQgDAMgEAJIg8AAQgEAhAhAAQgPAJgbAHIgfAIIgEAAQABABABAAQAAABABAAQAAAAAAABQAAAAgBAAIgCgBgAg5iAIAAgHQAAgIgDgHQgGgMgQgKQAQAKAGAMQADAHAAAIIAAAHgAhIiCIgBgFQAAgLANgEQgNAEAAALIABAFgAgjgmIAAAAgAA2jhQAKgOAAgVQAEAcAKAOQgKgIgOABg");
	this.shape_141.setTransform(-223.1127,34.775);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#F49762").s().p("AglAIQAogBAcgYIAEgEIADASQgdAZgmAAIgIgOg");
	this.shape_142.setTransform(-229.35,45.9);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8C786A").s().p("AgMAMIAAgMIAAAMIgSgEIgLgEIgBgOIABAOQgPARAAgXIgCgOIACAOIgEgDIgJgFIgBgLIAMAFIAQAGQAWAHAWACIABAPQgFAIgEAAQgEAAgCgKgAAsANIgCgOIACAOQgWADgTgCIgBgPQAUABAUgBQAHAAAKgEIAAABIAAAPIAAgPIAGAGIAGAFIAAABIgGgGIAGAGIgMADQgEAJgEAAQgEAAgDgHgAADAOgAAsANgABHAIIAAAAgAgpAEg");
	this.shape_143.setTransform(-233.425,56.1139);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#B19582").s().p("AgDC6IhGgQIgggIIAFgVIAjAKIBcAaIABARgAhBCXQADgmAVgvIASAEQAEATALgRQATACAVgDQAIAPAIgRIALgDIAAAAIANANIgNgNIANANIACACIgoBRIgHAPgAhBCXgAgIA4QgXgCgXgGQgNhIAhhIQgEgeAFgRQACgJAEgGIAEgEQAFgjAQAJIACgDIgOAAIACgCIAJAAIAIAAIAUACIALAAQAKAEALAHIAGAFIAAAMIABAAQgCARgJARIgPgGIAPAGQAJgRACgRQAIALAFALQAbA2ACBZIAAAOQgPgOgJgTIgOgeQAJgCAFgGIgGggIACgDIgCADIgPAKIAPgKIAGAgQgFAGgJACIgDgSIgEgMIgJgaIAJAaIAEAMIgFAEQgcAZgoABIgKAAIgJgWIAGAAIAAAAIABAAQArAAAfgcQgfAcgrAAIgBAAIAAAAIgGAAQgFgWgCgRQACARAFAWIAJAWIAKAAIAIAOQARAkAfAlQgLAEgGABIgOAAIgZgBgABOhaIAAgNIgaAAQgGgTgIgNQgSgggUgDQgPAAgIAIQAIgIAPAAQAUADASAgQAIANAGATIAaAAgAgbg5IAAAAgABBhBIAAAAgABMhXg");
	this.shape_144.setTransform(-232.3,50.3);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#7E5542").s().p("AgcAnIAchXIADACQAAAZAPgSIALAEQgVAugDAmg");
	this.shape_145.setTransform(-239.425,60.475);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQABgBAJgE");
	this.shape_146.setTransform(-243.4,9.125);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgOQAJAcAMAC");
	this.shape_147.setTransform(-243.975,7.25);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgUABQACgBABAAQAFAAAEAAQAQAAANAB");
	this.shape_148.setTransform(-232.0375,32.025);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAmAGIAAACIAAACAglgJIAJAJIAHAI");
	this.shape_149.setTransform(-230.725,31.15);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJABQgPAFAEAPAgMgVQAPALAGALQAGAKgDAL");
	this.shape_150.setTransform(-230.3609,20.65);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAdgRQAXgOAYgMQADgCAEgBQBug8B8gc");
	this.shape_151.setTransform(-233.75,3.675);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAbBSQABAAABAAQABgBADAAQAIgDASgEQAbgGAQgJQAUgNAKgUQAFgKACgLQA+gZg2gWQAEgQgBgaAgng4QAsgUAGAkAABATQgOABgKgEAhzAqQADACACABQADACAEABQAOAHAPAFQAKADAMAEQAHACAGABQA5ANAGACAirgCQAVAXAcAR");
	this.shape_152.setTransform(-229.2877,23.425);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#523C2C").ss(0.5,1,1).p("AgGgTIAegRAgGgTIgRANQABAGACAEQAFAbAMAGAgGgTQgBAZAQAD");
	this.shape_153.setTransform(-239.375,38.8);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#B5724F").ss(0.5,1,1).p("Ag5AsQAcg9BDgwQAEgDAJgDAAIBIQANgfAlgg");
	this.shape_154.setTransform(-246.6,46.375);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#A9A8A1").ss(0.5,1,1).p("AAWg2IAkA7IhQAyIgjg+g");
	this.shape_155.setTransform(-249.75,78.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#C99976").ss(0.5,1,1).p("AggA6QBMgcAVg5QADgHACgIAhFgBQAvgQARgdQAEgGABgF");
	this.shape_156.setTransform(-240.6,72.75);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A2A49F").ss(0.5,1,1).p("AgpglIAOBZIBFgNIgNhZg");
	this.shape_157.setTransform(-216.35,80.85);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#B7703F").ss(0.5,1,1).p("AAMhHQAJAIAHAKQAdAnADBJAg7gbQAJADAHAGIBHgjAgrgSQAiAYgBBD");
	this.shape_158.setTransform(-219.4,69.85);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#4D372A").ss(0.5,1,1).p("Ag5ArIAjgVIBHgrIAJgGIgQgO");
	this.shape_159.setTransform(-223.1,64.85);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#4D372F").ss(0.5,1,1).p("AgCgCIAFAF");
	this.shape_160.setTransform(-229.125,68.85);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#5A4431").ss(0.5,1,1).p("AAQg2IAjAxIhlA8");
	this.shape_161.setTransform(-224.025,61.15);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#C99F80").ss(0.5,1,1).p("AhPgQQAFAFAFAFQAhAfAsAWQAaANAeAJQgGgcAWgpQgdgHgqgfQgFgEgNgMIgNgO");
	this.shape_162.setTransform(-223.175,48.225);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#6D5C48").ss(0.5,1,1).p("AA2ivIAFACIAEABQACADACADQAIALAGAMQATApADAsAAjiJIAVgBIALgcAAji0IAYAHAgXimIAIgOIAFgKAgXimQgFABgFADQgIAIgCAEQgEAOACALQAAAAAAABQABAIAEAKQAKAXAZAcIgFAFIAOAPQAHgCADABQAogPARglAgth8QgHAJgGAKQgJAOgFAPQgDAJgDAKQgDAOgBAPQgCAfAJAjQAFABAFADQAIADAIADQACAAADABQANAEANABIgBARABThKIABgOAA8hpIAYAAIAAARIgNAAAA8hpQgBgBAAAAAA8hpIALARAgFg3QAmgMAagnQgNgTgLgMQghglgZAIABlAjIAAgIABlAjQAGAJgGAKQgDACgDABAAxA1QAPgEAPgFIACASQADADACADQAJAFAAgQAAkA3IAAARQAHANAGgPQAQgDAQgFAAkA3QAGgBAHgBIAAARABfArIAAAOAhEA6QgDgBgEgCQgGgHACgNQACABACACAgEA4IgBARQAUABAVgCAgyBAQAQAFAPACQAHAVAHgTAhEA6QAAAZASgTAhBAqIgDAQIgaBQIAUAGIBnAfAgSA2QAHABAHABQATACAVgDAgxAwIgBAQAheCKIgJAYIAXAFIBGAPIAnAIIACgGIADgGIgFgDIAFgKIA0hhABPAsQALgEALgF");
	this.shape_163.setTransform(-232.5185,50.2);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#5F3B2E").ss(0.5,1,1).p("AgKgVQASARACAUIgFAG");
	this.shape_164.setTransform(-224.95,33.6625);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#F8C6A3").s().p("Ag4BwIgJAAQgNgCgRAAIgHgIIgJgKIAMADIBAAPIAAACgAgjBuIAAgCIAAACIhAgPIgMgDIAcgzQAIADALAAIABAAIAAAAIACAAIAEAAIgEAAIgCAAIAAAAIgBAAQgLAAgIgDQgcgOANg6QAsgUAHAkIAYgnIAAAYQAkgZABgsQAPAWgPAcQAVgHAHgHIAWAGQgGgCgHACQgdAyAcAUQAjAAgDg5IAIgPQABAagEAQQA2AVg9AaQgDALgEAKIg8AAQgEAhAhAAQgPAJgbAGIgaAGIgEACIgBAAIgEABIADACIAAAAIAAAAIgDAAgAg5ATIAAgHQAAgHgDgGQgGgMgQgLQAQALAGAMQgNADAAAKIABAGIgBgGQAAgKANgDQADAGAAAHIAAAHgAg8gBIAAAAgAA2hMQAKgPAAgUQAEAcAKANQgKgIgOACg");
	this.shape_165.setTransform(-223.3127,20.925);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#D16826").s().p("AAEAEIgEAAIAAgBIgBAAIgWgEIAMgOQAMgBAKAIQAFAIAIACIgJAOQgEgJgHgDg");
	this.shape_166.setTransform(-216.7,14.7882);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FECE00").s().p("AkECeQgRACgHgIQgDgDgCgGQAcABAPgcIACgFIgDgOQgHgWACgTQAEgbATgRQBMgOgOA6IgBADIgGASIgHAPIgCAFIgDAFIgQAOQgTASgMARIgBABQgZAnAPAhQgugfAegjgAglAdQgPgFgOgHIgHgDIgFgDQgHgXAMgYQADgGAEgGQA3hVEWhaIAWAAQgKAdgWAHQgWAHgMgIQAIAOgJATQgHARgHAIQgKAMgLADQgIgDgFgIQgKgNgEgcQABAUgKAPIgMANQgIAHgVAHQAQgcgQgWQgBAsglAZIAAgYIgYAnQgGgkgsAUQgNA7AcAOIgcAyIgWgHg");
	this.shape_167.setTransform(-232.95,26.525);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#584A41").s().p("AiaAsQAXgPAYgMIAHgEQBug6B8gdIAVAiIgCgBQijA4haAsIgHADIgZANQgNgBgJgeg");
	this.shape_168.setTransform(-229.55,1.325);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#EC7348").s().p("AgOgTIANgHQAEAbAMAGIgGAUQgMgPgLgfg");
	this.shape_169.setTransform(-241.3,41.8);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F89863").s().p("AglgCIAGgMIBFAOIgFAPg");
	this.shape_170.setTransform(-237.375,68.4);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#EF9B68").s().p("ABbBfIBIgjQAcAnAEBKIhHAOQABhDgigZgAjChLQAcg+BEgxQALAgANAPQgEAOAAAPQglAfgNAgg");
	this.shape_171.setTransform(-232.9,58.425);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#E47947").s().p("AgrARIBHgqQAIAHAIALIhHAhQgHgFgJgEg");
	this.shape_172.setTransform(-221,65.25);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("ACGEKIBHgOIAMBaIhGANgAjYELIBQguIAlA8IhSAxgAB3j0IA7AAQgJAUgVANQgiAAAFghgACckaQgdgVAdgyQAIgCAGACIABAAIABAAIAEAAQAHADAEAKQADA6ghAAIgBAAgACllLQgEAFgDAKQgDAJACAIQACAHAFACQAGABAEgGQAFgFAEgKQACgJgCgIQgBgHgGgBIgCgBQgEAAgFAFgACik1IAAgHIADgGQAAgBABAAQAAgBABAAQAAAAAAAAQABAAAAAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQABACgCAFIgCAGIgDADQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_173.setTransform(-233.9,50.52);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#7A563F").s().p("Ag6A+IADgGIgGgDIAGgKIA0hgQAIAGAAgRIAGgCIAiAxIAQAPIgIAEIhHAsIgjAVgAg3ArIBkg8g");
	this.shape_174.setTransform(-223.5,62.375);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#7B5740").s().p("AgaCNIAahPQAAAYARgSIgXBQgAASAzIgQgGIgJgEQgKgjADgeQAAgPAEgOIAGgUQAEgOAJgOQAFgKAIgJQABAIAEAKQgmBXAhBDIgEgBgAgVhqIgDgLIARgMIAegSQgDAPABALIABABQgIAJgFAKQgQgDAAgXIAAgCIAAACQAAAXAQADQgJAOgEAOQgMgFgFgcgAAJhlIAAAAgAAWh4IAAAAg");
	this.shape_175.setTransform(-239.3,49.85);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#8F786A").s().p("AgeANIAAgQIAAAQQgQgDgPgEIAAgQIAAAQQgSASAAgYIADgQIgDAQIgHgCQgHgIACgMIAEACIALAEIAPAGIAFABIAaAGIAOABIAAAQQgEAJgDAAQgEAAgDgKgAAYANIAAgQIANgCQAPgDAPgFIAWgJQAGAIgFALIgHACIAAgOIAAAOQABAQgJgGIgGgGIgCgQIACAQQgQAFgQADIAAgQIAAAQQgDAIgEAAQgDAAgDgGgAgQAOIAAgQQAUACAUgDIAAAQQgNACgMAAIgPgBgABFADgABTgBIAAAAg");
	this.shape_176.setTransform(-231.367,56.082);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#F8C7A2").s().p("AihB3QAvgRASgcIBGASQgUA7hOAcgABahNQgsgVgiggQAqgLASglIAUAPQApAfAdAIQgWAqAGAbQgegJgagNg");
	this.shape_177.setTransform(-231.4,60.675);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#F39B60").s().p("AgiAVQAngQARgjIANAOQgSAkgpALIgKgKg");
	this.shape_178.setTransform(-227.675,44.45);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#64452D").s().p("AgCgBIgEgGIgEgBIgFgBIAFgHIAAAAIACgEIAEgBQASARACAUIgFAGQgGgMgHgLg");
	this.shape_179.setTransform(-225.525,33.6625);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#B19582").s().p("AgJC2IhGgPIgXgFIAJgYIATAGIBnAfIAFADIgCAGIgDAGgAhKCQIAZhQQAPAFAQACQAHAVAHgTQATABAVgCQAHANAGgPQAQgDAQgFIAGAGIg0BhIgGAKgAhKCQgAgEA4IgOgCIgagFQgjhEAohXQAJAXAZAcQgZgcgJgXQgEgJgBgJIgBgBQgBgLADgOIAKgMQAFgDAGgBIAHgOIAGgKIAHAIIgJAAIgEACIAEgCIAJAAQAPAAANACIAKAAIAXAHIAFABIAEAGQAHALAGAMQAUApACAsIgTgQIABgOIAAgQIgZAAIgBgCIABACIALAQQgRAlgoAPIAAAAIgBAAIgBAAIgBAAIgCAAIgDABIgBAAIgBAAIgOgPIAFgFIgFAFIAOAPIABAAIABAAIADgBIACAAIABAAIABAAIABAAIAAAAIAKAKQAhAgAtAVIgBAIIgWAJQgPAGgPACIgNADQgNACgMAAIgPgBgAgFg3QAmgMAagnQgMgSgMgNIAAgBIgCgCQgZgbgUAAIgBAAIAAAAIgIABIgBAAIAAAAIAAAAIABAAIAIgBIAAAAIABAAQAUAAAZAbIACACIAAABQAMANAMASQgaAngmAMgAA4iJIgVAAIAVAAIAMgdgABHhYIAOAAIgBAOgABVhYIgOAAIgLgQIAZAAIAAAQgABHhYgABHhYg");
	this.shape_180.setTransform(-232.575,50.2);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgTABQABgBABAAQADAAADAAQACAAABAAQAQAAANAB");
	this.shape_181.setTransform(-233.05,29.525);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAmAGIAAACIAAACAglgJIAPAPIABAC");
	this.shape_182.setTransform(-231.775,28.65);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AgMgVQAPALAGALQgPAFAEAPAAJABQAGAKgDAL");
	this.shape_183.setTransform(-231.4109,18.15);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAbBSQACgBAGgBQAJgCAPgEQAbgGAQgJQAUgNAKgUQAFgKACgLQA+gZg2gWQAEgQgBgaAABATQgOABgKgEAgng4QAsgUAGAkAhzAqQADACACABQADACAEABQAOAHAPAFQAKADAMAEQAHACAGABQAJACAHACQAqAJAFACAirgCQAVAXAcAR");
	this.shape_184.setTransform(-230.3377,20.925);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#E39517").ss(0.5,1,1).p("AB8iIQgKAMAQABQAHAAAQAAQgLAdgWAHQgWAHgLgIQAHAOgJATQgHARgGAIQgLANgLACAhYAdIAYgnIAAAXQAlgYACgsQAPAWgPAcQAVgHAGgGQAJgJADgFQAKgPAAgUQAEAcAJANAiYCJIAdgz");
	this.shape_185.setTransform(-220.325,14);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#6F5C4D").ss(0.5,1,1).p("AAPgrIgeBX");
	this.shape_186.setTransform(-226.2,58.6);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#523524").ss(0.5,1,1).p("AAdhiQhKBUAVBx");
	this.shape_187.setTransform(-238.2797,41.75);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f().s("#9FA2A1").ss(0.5,1,1).p("AgrAdIAQhDIBIAAIgQBNg");
	this.shape_188.setTransform(-227.55,80.8);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAygRIAAAAQgDgJgLgVIAAAAQgGgCgBAAQgdgCglASQgCADgBADQgWApAWAWQADADAEADQABAAAAAAQAHAFALAEQAGgBAEAAQgJgPABgHAAlgEQADgHAKgGAghAqQgCgQABgDAAzAKQABgDAAgEQAAgIgCgMAAaAnQAHgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQgFAHgJgVAgEAyQASgDAJgFQABgCACgBQgLgFgBgOAAjAKQgCgIAEgG");
	this.shape_189.setTransform(-233.9625,61.69);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f().s("#6C5F51").ss(0.5,1,1).p("ABdAnIAFgCIAEAYAA7giQAHAQAHgWABOgrQgDABgCACAA6gwIABAOQgQAFgPADABHg2IACAOAA6gwQAHgEAGgCAgOgoIASABQAFAAAEAAIAAAOQgDAAgDAAQgIAAgJgCAAaglIACALAANgZQAJARAGgSAANgnQAcAAARgJAhXg1QgEABgKgIQACAPAEAEQACACAIACAAQA3IAMgCIBBgOABOgrQAGgEgBgNQgEABgIAFABOgrIAPBS");
	this.shape_190.setTransform(-230.6,57.75);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f().s("#CE9E83").ss(0.5,1,1).p("AgfhWQgCAKgCAMQgJArAEArQABAIABAIQAEAfAHASAArBBQgEgJgDgIQgCgHgCgHQgJgmAKgqQACgJACgJ");
	this.shape_191.setTransform(-235.3,50.175);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f().s("#53382D").ss(0.5,1,1).p("AgNgXQAaAUACAQIgIAL");
	this.shape_192.setTransform(-225.35,31.875);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f().s("#B77140").ss(0.5,1,1).p("AAAgGIAAAGIAAAH");
	this.shape_193.setTransform(-226.8,29.6375);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f().s("#705E4F").ss(0.5,1,1).p("AAWhrQAIADAIAEQABABABAAQADAOgFANQADgGADgGQAIAKAHANQAkBDgMBqAAUg7IAMABQAAgBABgCQADgFACgGAgthOQAUgZAUAFQAaAGgBAhQgBAagSAqAgkhtQABgBABgBAgthOQgCgDAAgDQgBgKAKgNAhNgRIgHAVQACAEAEADQAZAYAsgDQACAAADAAIAFgXAA8gJIgTAJIgcgGQgBAFgBADQgBABAAACIAAAUQApALAJgRgAANgGQADgKADgKIApAAIAAARAhNgRQARAbA9gBAhNgRQAQgoAQgV");
	this.shape_194.setTransform(-230.55,40.4125);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AgNFfIAQhEIBIAAIgQBOgAiPEuIAeg3QAXASAZALIAOAFIgjA7gABLj6IA8AAQgKAUgVANQghAAAEghgABwkgQgcgVAdgyQAHgCAGACIABAAIABAAIAEAAQAHADAFAKQADA6giAAIgBAAgAB6lRQgFAFgDAKQgDAJACAIQACAHAFACQAGABAFgGQAFgFADgKQACgJgCgIQgBgHgFgBIgCgBQgFAAgEAFgAB2k7IAAgHIADgGQABgBAAAAQABgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAQAAAAAAABQAAAAABAAQAAABAAABQAAACgBAFIgDAGIgDADQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAgBg");
	this.shape_195.setTransform(-230.588,48.62);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#D16826").s().p("AAEAEIgEAAIAAgBIgBAAIgWgEIAMgOQANgBAJAIQAGAIAHACIgIAOQgFgJgHgDg");
	this.shape_196.setTransform(-217.75,12.2882);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FECE00").s().p("AkDCeQgSACgHgIQgEgDgBgGQAcABAPgcIACgFIgDgOQgHgWACgTQAEgbATgRQBMgOgOA6IgBADIgGASIgHAPIgDAFIgCAFIgQAOQgTASgMARIgBABQgZAnAPAhQgugfAfgjgAglAdQgPgFgPgHIgGgDIgFgDQgHgXAMgYQADgGADgGQA5hVEUhaIAYAAQgLAdgWAHQgXAHgLgIQAHAOgIATQgHARgGAIQgLAMgMADQgHgDgFgIQgJgNgFgcQAAAUgKAPIgLANQgIAHgUAHQAPgcgPgWQgCAsglAZIAAgYIgYAnQgGgkgsAUQgNA7AcAOIgcAyIgWgHg");
	this.shape_197.setTransform(-234,24.025);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#B19482").s().p("AgQGIIABgHQAAgKgDgLIAAgBQgCgJgLgVQAFAJgBgaIAHAAQAIARAGgSQAPgDAQgGIgeBZIgNACIACgFgAinisIAZgMIAHgEQBbgsCig5IADABQAmARAhAoQi6BCiNBKIgHADIgPAIQgSguAIgugAiOlYIAHgHIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA8IgHAEQgYAMgXAPQgMhOA7hAg");
	this.shape_198.setTransform(-227.1438,23.55);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#7A5640").s().p("AAAgnQAFARAIgXIAEgCIAPBRIg/AOg");
	this.shape_199.setTransform(-224.55,58.175);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#F09A69").s().p("AgpA6QANg5gGgtIBKgNQAHBAgRAzg");
	this.shape_200.setTransform(-226.0851,71.125);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#EB9A65").s().p("AgmABIBJgMIAEALIhLAMIgCgLg");
	this.shape_201.setTransform(-225.9,65.425);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#775740").s().p("AAFAJIgBgBIgFgCIgHgQIARACQAAATgCAAIgCgCg");
	this.shape_202.setTransform(-230.8167,56.0297);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#F8C6A3").s().p("AhfFWQgZgKgXgSIArhEIBMAKQgLAbguBBIgOgGgAhgDvIgBAAIgBgRIAAgCIAAACIABARIgHgGQgWgWAWgqIADgGIABgBQAggPAbAAIABAAIAAAAIAGAAIAHACIAAAAQALAVADAJIAAAAQgKAGgDAHQADgHAKgGQACAMAAAJIgBAHIAAAAIgCACIAAAAIgBAAQgEgBgHgQQAHAQAEABIABAAIAAAAIACgCIAAAAIgBAGIgCAEIAAABQgEAJgJAHIgJACQgLgFgBgOQABAOALAFIgDADQgJAFgTADQgIgOAAgGIAAgCIAAACQAAAGAIAOIgKABQgLgEgHgFgAgcDPIgBgFQAAgGADgEQgDAEAAAGIABAFgAhzB4IgCgQQgFgsAJgrQAfAQAnACQgLAqAKAnIAEAOIAGARIgGAAIAAAAIgBAAQgbAAggAPIgBABIgDAGQgHgSgEgfgAgiCTIAAAAgAgHh6IgaAAQgNgCgRgBIgBgCIgPgPIAMADIARADIAvALIAAADgAgDh9IAAgCIAAACIgvgLIgRgDIgMgDIAcgzQAIADALAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQgcgPANg7QAsgTAHAkIAXgnIAAAYQAlgaABgrQAPAVgPAdQAVgHAHgHIAWAGQgGgCgHABQgdAyAcAVQAjABgDg7IAIgOQABAZgEARQA2AWg9AZQgDAMgEAJIg8AAQgEAhAhAAQgPAJgbAHIgYAGIgIACIgDAAQABABABAAQAAABABAAQAAAAAAABQAAAAgBAAIgCgBgAgZjXIAAgHQAAgIgDgHQgNAEAAALIABAFIgBgFQAAgLANgEQADAHAAAIIAAAHgAgcjtQgGgMgQgKQAQAKAGAMgABWk4QAKgOAAgVQAEAcAKAOQgKgIgOABg");
	this.shape_203.setTransform(-227.5627,41.975);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#8A7869").s().p("AAXANIAAgNQAbAAARgIIACAMQgQAGgQACIgCgKIACAKQgDAKgEAAQgDAAgEgJgAAXANIgHAAIgRgBIgEgNIASABIAKAAIAAANIAAAAgABFAEIgCgMIANgGIADANQgFAMgEAAQgDAAgCgHgABFAEgAhWgCQgDgEgCgPQAJAJAEgBIACAOQgIgBgCgCgABTgBgABQgOIAMgHQABANgGAEIgEADg");
	this.shape_204.setTransform(-231.5179,53.8003);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#EC9D62").s().p("AgkABIAFgUQAZAXArgDIgEATQgmgDgfgQg");
	this.shape_205.setTransform(-235.275,43.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#7B5740").s().p("AgUBgQgKgoALgpIAEgSIAFgBIAGgWQARgsABgaIAMACIgNAgIgGAUIgCAJIgBACQgQBAALBAg");
	this.shape_206.setTransform(-229.9756,44.05);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#6D543C").s().p("AgHAAIgGANQAEgNgDgNIgCgBIAAgJQAbAUABAQIgIALQgGgNgHgLg");
	this.shape_207.setTransform(-225.35,31.875);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B19582").s().p("AhpCwQgDgOAIgIIARAFIgRgFIAKhiQACACAIACQAEAfAHASQgVAqAVAWIAIAGIABABIgFAHgAgCCxIAJgDQAIgHAEgIIABgCIABgEIANgCIBAgOIAGgCIADAZIgTADIhKANIgTADIADgCgAAJA6QgJg+APhBIAAAUIAFABQANADAKAAIAAAAIAAAAQARAAAFgJIAAgBIAAgdIgTAKIgcgHIAHgUIAMggIACgDIAFgLIgFALIgCADIgLgBIAAgBQAAgggagGIgFgBIAAAAIgBAAQgPAAgOARIgBABIgCACIgBABIgCgGQgBgKAKgNIgHAAIADgCIAGAAIADAAQAQAAAMACIAbAAIAPAHIACABQADAOgEANIAGgMQAHAKAHANQAkBEgMBpIgMAGIgNAHQgRAIgbAAIgKAAgABBhUIAAgRIgoAAIAoAAgAArgtQgKAAgNgDIgFgBIAAgUIABgDIACgJIAcAHIATgKIAAAdIAAABQgFAJgRAAIAAAAIAAAAgAhHhcQAQgoAQgVIABgBIACgCIABgBQAOgRAPAAIABAAIAAAAIAFABQAaAGAAAgIAAABQgBAagSArIgEAAQg6AAgQgbgAgei4IABgCIACACIgDAAg");
	this.shape_208.setTransform(-231.1391,47.9125);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).to({state:[{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-245.3559,y:4.925}},{t:this.shape_54,p:{x:-231.2,y:1.125}},{t:this.shape_53},{t:this.shape_52,p:{x:-233.8048,y:26.075}},{t:this.shape_51},{t:this.shape_50,p:{x:-218.5456,y:18.9489}},{t:this.shape_49},{t:this.shape_48,p:{x:-246.9442,y:26.1554}},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32,p:{x:-231.0809,y:4.475}},{t:this.shape_31,p:{x:-216.75,y:-4.675}},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28,p:{x:-232.0109,y:20.45}},{t:this.shape_27,p:{x:-245.625,y:7.05}},{t:this.shape_26},{t:this.shape_25,p:{x:-246.9442,y:26.1554}},{t:this.shape_24}]},2).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106,p:{x:-234.8222,y:68.225}},{t:this.shape_105,p:{x:-235.875,y:42.8414}},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100,p:{x:-239.2797,y:43.855}},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97,p:{x:-227.1938,y:0.925}},{t:this.shape_55,p:{x:-244.8059,y:3.875}},{t:this.shape_96},{t:this.shape_95},{t:this.shape_52,p:{x:-233.2548,y:25.025}},{t:this.shape_94},{t:this.shape_93},{t:this.shape_50,p:{x:-217.9956,y:17.8989}},{t:this.shape_92,p:{x:-248.175,y:8.35}},{t:this.shape_48,p:{x:-246.3942,y:25.1054}},{t:this.shape_91,p:{x:-241.475,y:79.675}},{t:this.shape_90,p:{x:-240.725,y:71.325}},{t:this.shape_89,p:{x:-233.8472,y:72.825}},{t:this.shape_88},{t:this.shape_87,p:{x:-227.175,y:66.575}},{t:this.shape_86},{t:this.shape_85,p:{x:-240.8641,y:61.775}},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79,p:{x:-227.1851,y:72.275}},{t:this.shape_78},{t:this.shape_32,p:{x:-230.5309,y:3.425}},{t:this.shape_31,p:{x:-216.2,y:-5.725}},{t:this.shape_77,p:{x:-220.375,y:15.25}},{t:this.shape_76,p:{x:-230.3877,y:22.175}},{t:this.shape_75,p:{x:-234.85,y:2.425}},{t:this.shape_28,p:{x:-231.4609,y:19.4}},{t:this.shape_74},{t:this.shape_73},{t:this.shape_27,p:{x:-245.075,y:6}},{t:this.shape_72},{t:this.shape_25,p:{x:-246.3942,y:25.1054}},{t:this.shape_71,p:{x:-253.575,y:35.95}},{t:this.instance_2,p:{regY:6.1,scaleX:1,scaleY:1,rotation:0,x:-243.55,y:86.65}},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:1,scaleY:1,rotation:-29.9992,x:-227.85,y:89.8}}]},3).to({state:[{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_97,p:{x:-225.8938,y:1.175}},{t:this.shape_55,p:{x:-243.5059,y:4.125}},{t:this.shape_130},{t:this.shape_129},{t:this.shape_52,p:{x:-231.9548,y:25.275}},{t:this.shape_128},{t:this.shape_50,p:{x:-216.6956,y:18.1489}},{t:this.shape_127},{t:this.shape_48,p:{x:-245.0942,y:25.3554}},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_32,p:{x:-229.2309,y:3.675}},{t:this.shape_31,p:{x:-214.9,y:-5.475}},{t:this.shape_77,p:{x:-219.075,y:15.5}},{t:this.shape_76,p:{x:-229.0877,y:22.425}},{t:this.shape_75,p:{x:-233.55,y:2.675}},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_71,p:{x:-252.275,y:36.2}},{t:this.shape_25,p:{x:-245.0942,y:25.3554}},{t:this.shape_27,p:{x:-243.775,y:6.25}},{t:this.instance_2,p:{regY:6.3,scaleX:1.1154,scaleY:1.1154,rotation:14.9992,x:-250,y:85.15}},{t:this.instance_1,p:{regX:6.6,regY:6.4,scaleX:1.1153,scaleY:1.1153,rotation:-30.0012,x:-219.85,y:88.7}},{t:this.instance_4,p:{rotation:-59.9996,x:-217.65,y:59.6}},{t:this.instance_3,p:{regX:5.2,scaleX:1.08,scaleY:1.08,rotation:59.9998,x:-245.45,y:57.8}}]},3).to({state:[{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_97,p:{x:-226.0938,y:2.175}},{t:this.shape_55,p:{x:-243.7059,y:5.125}},{t:this.shape_168},{t:this.shape_167},{t:this.shape_52,p:{x:-232.1548,y:26.275}},{t:this.shape_166},{t:this.shape_50,p:{x:-216.8956,y:19.1489}},{t:this.shape_165},{t:this.shape_92,p:{x:-247.075,y:9.6}},{t:this.shape_48,p:{x:-245.2942,y:26.3554}},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_32,p:{x:-229.4309,y:4.675}},{t:this.shape_31,p:{x:-215.1,y:-4.475}},{t:this.shape_77,p:{x:-219.275,y:16.5}},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_25,p:{x:-245.2942,y:26.3554}},{t:this.shape_71,p:{x:-252.475,y:37.2}},{t:this.shape_147},{t:this.shape_146,p:{x:-243.4,y:9.125}},{t:this.instance_4,p:{rotation:-74.9987,x:-212.3,y:53.3}},{t:this.instance_2,p:{regY:6.3,scaleX:1,scaleY:1,rotation:-38.0541,x:-213.2,y:89.05}},{t:this.instance_1,p:{regX:6.5,regY:6.3,scaleX:1,scaleY:1,rotation:29.8955,x:-256.3,y:83.55}},{t:this.instance_3,p:{regX:5,scaleX:1,scaleY:1,rotation:90,x:-250.55,y:56.25}}]},3).to({state:[{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_100,p:{x:-238.1797,y:42.155}},{t:this.shape_105,p:{x:-234.775,y:41.1414}},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_106,p:{x:-233.7222,y:66.525}},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_55,p:{x:-244.7559,y:2.625}},{t:this.shape_54,p:{x:-230.6,y:-1.175}},{t:this.shape_197},{t:this.shape_52,p:{x:-233.2048,y:23.775}},{t:this.shape_196},{t:this.shape_195},{t:this.shape_50,p:{x:-217.9456,y:16.6489}},{t:this.shape_92,p:{x:-248.125,y:7.1}},{t:this.shape_48,p:{x:-246.3442,y:23.8554}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_85,p:{x:-239.7641,y:60.075}},{t:this.shape_91,p:{x:-240.375,y:77.975}},{t:this.shape_87,p:{x:-226.075,y:64.875}},{t:this.shape_79,p:{x:-226.0851,y:70.575}},{t:this.shape_90,p:{x:-239.625,y:69.625}},{t:this.shape_89,p:{x:-232.7472,y:71.125}},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_32,p:{x:-230.4809,y:2.175}},{t:this.shape_31,p:{x:-216.15,y:-6.975}},{t:this.shape_185},{t:this.shape_184},{t:this.shape_75,p:{x:-234.8,y:1.175}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_27,p:{x:-245.025,y:4.75}},{t:this.shape_146,p:{x:-244.45,y:6.625}},{t:this.shape_25,p:{x:-246.3442,y:23.8554}},{t:this.shape_71,p:{x:-253.525,y:34.7}},{t:this.instance_2,p:{regY:6.1,scaleX:1,scaleY:1,rotation:0,x:-242.45,y:84.95}},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:1,scaleY:1,rotation:-29.9992,x:-226.75,y:88.1}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-17.6,64,112.1);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Head("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(-235,15.5,1,1,0,0,0,28.9,31.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#A0A19C").ss(0.5,1,1).p("AgTgdIAnA7");
	this.shape.setTransform(-248.175,73.725);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#BA7049").ss(0.5,1,1).p("AggA4QAbgIAUgPQAdgWATggQACgFADgGQACgFACgFQABAAAAgBAhIgEIA+gfIAGgKIAGgK");
	this.shape_1.setTransform(-242.9,71.15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#A2A2A0").ss(0.5,1,1).p("AAPgfQgBgEgDAAQgDAEgCAEAAAgdQAAgFAAgGAAPgfQABAMgMAMQgDgKAFgKAgGgmQgNAQAIAMQAGAKAFgdIAGACABHAJQACAJgGAFQhBAThAgBQgJgFABgLQAuAEAwgJQAXgEAYgHgAAPgfQAIgCABAHQAkAJALAaAAYgaQgKAaAKAU");
	this.shape_2.setTransform(-214.5614,86.3526);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#98362B").ss(0.5,1,1).p("ADPASQgKAZAKAZAjOgzQAVgUAfAE");
	this.shape_3.setTransform(-242.35,82.0095);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("ACng0IBFgLIAMBRQgEABgDABQgKADACAEQgdgDgbAKgAiYAEIAAACIBVgqAieAJQADgBADgCAiUAVIAAAEIAAAFIAAAEQAGApgYAVQgIAGgMgJQgjgugahGIAMgMQAOAvAZApQAKgOAmgJAiUAVQABABABACQgBAAgBABAieAJIAAAIQAFgBAFAFAiYAEQgRgLgMANQAMAGALgDAieARQgIgCgLAKQASACALgCAiYAEIgfg3IBMguAjEA1QAOAWAQAV");
	this.shape_4.setTransform(-239.4,80.4991);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCA181").ss(0.5,1,1).p("AAMhGQAeAVALA7QAEAWACAcAg6gcQAZAFANAhQAHAVADAhQAAADABAE");
	this.shape_5.setTransform(-221.675,68.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#553C28").ss(0.5,1,1).p("AgsgwQABgLAEgGAg/AiIATAKIBGANIAlAJIABgOAgsAQIBXAZ");
	this.shape_6.setTransform(-238.2,61.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#6F5E54").ss(0.5,1,1).p("ABZgPIAHgEIANAQIgLAHIhHArIghAUIgJgJIgHgIAhsgxIAAAAQAKATALARQAbAlAmAaIBvhBAA1hCIAkAz");
	this.shape_7.setTransform(-230.25,60.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B96F48").ss(0.5,1,1).p("AhJhPQAEAFAFAEQAaAdAeARQAPAIAQAGQAEACAFABQAagZANAaQANACAJAEIAAAAQAIADAEAGQAEAGAAAIQAAAOgMAUQgjgFgJgIAhrgEQAHAFAIAGQAAABABABQAqAhApALQAKACAKABQgKgZAPgWQAAgBABgBQACgDADgEQAEgDAFgEQgCAHgBAHQgBABAAABQgHArAdgNQgBgGALgIQgFgKADgGQAAgBAAgBQAGgJAdACAhsgVQAhgPALgiABHBOQAOgGAMgPAAMA4QAGAGAFAEQAIAHAIADQgLgZAUAHQgEgIAJgGQgDgCAAgDABHBOQgTgLgEgJAAnBMQARAIAPgGAA8AZQAaAKAXgM");
	this.shape_8.setTransform(-213.125,47.3333);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#736153").ss(0.5,1,1).p("AgVgGIAAAaQAGAEAGADQARAHAUgNIAAgdAgVgGIgGAAIAAgSIA2gFIABAVAgVgGIAdAGIAUgI");
	this.shape_9.setTransform(-229.4,40.6622);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAdAmQgEgFACgPQAAgEABgEQABgHABgHQAEgTAKgSQAAgBABgBQAKgSAQgSAAjBHIAAgBQAAgJgGgXAAFB6QACgBACgBQANgGAGgLQABgCACgDQAEgLAAgQAguAjQABgJABgIQACgXAHgYQACgGACgGQAAgBABgBQAOgqAbgnAAPBeQAAgIAFgGAg6BuQAGAHAKAGQAGABAFAAQgHgRADgGAAFB6QgOgJADgOAgfB8QAWACAOgEAguAjQgoAtAcAeQABgQACgCAguAjQAygMAZAPAAfBiQgHAFgEgXQAFgGAKgD");
	this.shape_10.setTransform(-245.5223,52.4308);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgbhnQAAgCAAgDQABgGAEgIQABgCABgCQAEgGACgEQAkAFAZAAIAKAGIACAQQAhAwAIArQACANAAAMQACAIAAAHQABAJABAIQAAAHAAAGQgBABABAAQgCAVgHATAA5hlIACgIAg5BoQAFgcAJgXQAAgBABAAQAUgyAmgdQACgKAEgJQACgDACgDQAFgIAIgHIAZgEIgHgeAAXhWIAeAFIAEgUAgbhnQAHgEAHgBQAHgBAFABQAOADAKATAhUg0IgHgGIgOAVQAEAIADABQAWAkAlAHQARgEgFgOQA0gggCgzAhUg0QAVAqAkAHAhUg0QAhgnAYgMABbBwQgGARgJgNIAAgNQAHgDAIgEIAAAQQACgCADgBQALgHgKgJABbBgQADgBADgCABMB0QAHgCAIgCAAuB8IgBgMQAQgDAPgGAAfByQAFgBAEgBQADAAACAAAAgB+QAEAAAEgBQADgBADAAQgCAIgEABQgEABgEgIIgBgMAgICBQAQAAASgCQADAAADgBAgIByQARABARgBQACAAADAAAAuB8QARgEANgEAgSCAIAAAAQABAAABAAQAEAAAEABIAAgPAgYBwQAIABAIABAgXB/QADAAACABQgHgCABgOAhCB+QgDgDgBgKQgBAAAAgBQACABABAAQAGADAFACQAGACAHACQAKADALACAhEBjIgDANAhSBpQAGAEAFADAg5BoIAAAOQgFAMgEgEAhEBjQAKAIABgDQAVAGAMACAhPBaQAGAGAFADAgICBQgIAQgHgS");
	this.shape_11.setTransform(-234.475,42.8696);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#543A2B").ss(0.5,1,1).p("AgVgrQABAGAAAHAgrhBQAGABAEACQAJAFADAOQAmAbAJAPIAHgDIAKAOQgBAIgDAGQgKAdgbANAAAApQASgXAIgT");
	this.shape_12.setTransform(-224.45,36.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAAgEIAAAJ");
	this.shape_13.setTransform(-228.8,29.725);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EF2D35").s().p("AgqgjQAUgVAfAFIAeA3QgQgLgMANQALAGALgDIAAAIQgIgCgKAKQASACAKgCIAAAFQglAJgJAOQgZgpgOgvg");
	this.shape_14.setTransform(-258.675,80.4845);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EF2D36").s().p("AgsAfQgKgZAKgYQAbgJAcACQgCgEAKgDQgNAQAIANQAGAJAFgdIAHADQgFAJADALQAMgNgBgMQAIgCABAHQgKAZAKAWQghAGgfAAIgegCg");
	this.shape_15.setTransform(-217.175,85.714);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#795642").s().p("AAaA+IhGgMIgTgLQANgGAGgLIACgFQAFgMAAgPIAAAAQAAgKgGgXQAAgKAEgHQgEAHAAAKQgEgEACgQIABgIIAKAHIABABQACAKACADIABAAQAJATAMARQAZAlAmAbIAIAIIAAAOgAAsAvIhYgZg");
	this.shape_16.setTransform(-238.2,60.575);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8E7769").s().p("AggAOIAFAAQgGgBAAgKIAAgDIAQABQARABAQgBIAFgBIAKAAIAFgBQAQgDAOgFIABAMIgeAHIgBgLIABALIgGACIgJABIgBgNIABANIgGABQgRACgRgBIABgOIgBAOIgIgBIgBAAIAAAAIAAAAIABAAIAIABQgEAIgDAAQgEAAgDgJgAAWANIAJgBIAGgCQgDAIgDABIgBAAQgEAAgEgGgAggAOIgWgFIgMgEIAAgOQAVAHAMACIAAADQAAAKAGABIgFAAgAhLANIgBgBQgCgDgCgJIAAgBIADABIALAFQgEAJgDAAIgCgBgAAWANgAAlAKgABDADIAOgDIgOADIgBgMIAPgHIAAAQQgDAIgEAAQgDAAgEgFgAhNAAIgDgBIACgMIgCAMIgLgGIACgPIALAJQALAHABgDIAAAOIgLgFgABRAAgABRgQIAHgEQAJAJgLAIIgFADgAghAAIAAAAgAhQgBIAAAAg");
	this.shape_17.setTransform(-233.5299,54.2196);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F09A69").s().p("AjvB6IA+gfIAGgLIBJAOIgFALQgSAhgeAVQgVAPgbAJgACqgiIgBgCIAAgBIgBgCQgGgPAJAAIAAAAIAAAAIABAAIABAAIAFABIAAABIgBgFQAAgFAHgFQgEgCAAgDIAAgBQABgFAKgHQgDgHAAgFIAAgFIABgBIAAgBQAGgIAUAAIAAAAIAAAAIAHAAIACAAIAAABQAHADAEAGQAFAGAAAJIgBAAIgBAAIgBABIgBAAIAAAAQgKAFgMAAIAAAAIAAAAQgKAAgKgDIgDgBIADABQAKADAKAAIAAAAIAAAAQAMAAAKgFIAAAAIABAAIABgBIABAAIABAAQgBANgMAUQgjgEgIgJQAIAJAjAEQgLAQgOAFQgTgLgFgIQAFAIATALQgHADgHAAQgJAAgJgEgACagtIgMgKQgDgJgBgKQAAgOAKgOIABgBIAFgIIAIgIIgCAQIgBABIAAABIAAACIgBACQgDAcAOAAIAAAAIAAAAIAJgCIAAAAIABAAIAAAAIAAgBIABAAQAAADAEACQgHAFAAAFIABAFIAAgBIgFgBIgBAAIgBAAIAAAAIAAAAQgJAAAGAPIABACIAAABIABACQgIgEgIgHgAB6g6QgqgKgpgiIgCgBIgOgNIgBgRQAhgPAKgiQAbAdAeARQAQAIAQAHIAIACIgIAIIgFAIIgBABQgKAOAAAOQABAKADAJIgUgDgACphFQgOAAADgcIABgCIAAgCIAAgBIABgBIACgQQAbgZANAaQANACAJAEIgCAAIgHAAIAAAAIAAAAQgUAAgGAIIAAABIgBABIAAAFQAAAFADAHQgKAHgBAFIAAABIgBAAIAAABIAAAAIgBAAIAAAAIgJACIAAAAIAAAAgAC0hIIAAAAgADghwIAAAAgACih3IAAAAg");
	this.shape_18.setTransform(-226.2,58.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E15E2A").s().p("Ah2CBIAHgKIBHANIAAABIgFAKgABIhjQAcgOAKgdIAIAJQgKAighAPIgDgPg");
	this.shape_19.setTransform(-231.5,53.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#F8C6A3").s().p("AByDeQgDgggHgWQgNghgZgFIBHgrQAeAWALA7QAEAXACAcIhFALIgBgIgAiRB/QgEgMAAgGIABgFIgBAFQAAAGAEAMIgKgCQgLgGgGgHQACgPABgDQgBADgCAPQgcgdApgtQAXgGARAAIAAAAIABAAQAUAAANAHIABABQAHAXAAAKIAAAAQgLADgFAGQAEASAEABIABABIABAAIABgBIgCAFQgHALgMAGIgFABQgMgHAAgLIAAgEIAAAEQAAALAMAHQgKADgOAAIgNAAgAhiBhQAAgJAFgGQgFAGAAAJgAhsB8IAAAAgAhVBlQgEgBgEgSQAFgGALgDQAAAQgFAMIgBABIgBAAIgBgBgAhSBlIAAAAgAhVAnQgNgHgUAAIgBAAIAAAAQgRAAgXAGIABgSQADgXAHgXIAEgNIAAgBQAOgqAdgnQAWAlAlAHQgQASgKATIAAABQgKASgEATIgDAOIgBAIQgCAQAEAEIgBgBgAAsjgQgZAAgkgFIBHAAIAAALg");
	this.shape_20.setTransform(-234.1973,52.175);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#7B5741").s().p("AhkBuIgLgJQAEgTAKgSIABgBQAJgTARgSQAQgEgEgPQA0gfgBgzIAcAFIAEgUIAHAeIgZAEQgHAHgFAIIgEAGQgEAJgCAKQgnAdgUAyIgBABQgJAXgEAcIgCAAQgCAAgIgFgABEgHQgIgrgggwIgDgQQAGABAEACQAJAGADAOIABAMIgBgMQAnAaAJAPQgIAUgTAXQATgXAIgUIAGgDIALAPIgEAOQgKAcgcAOIgCgZg");
	this.shape_21.setTransform(-231.3,41.7929);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#B19482").s().p("AAEC1IgHgIQgmgbgaglQgMgRgKgTQAEAEAFgMIANAEIAVAFQAHASAIgRQARABARgCIAGgBQAEAHAEAAQAEgCACgHIAegIQAJAMAGgQIAFgDIAjAzIhvBCIBvhCIAHgEIAOAQIgMAIIhHArIgiAUgAgfA9IgQgCQgMgCgVgGQAFgcAJgXIABAAQAUgzAngeQACgKAEgIIADgHQAFgHAIgHIAZgEIgHgeIACgIQAhAwAIArIACAaIACAPIACARIAAANIAAAAQgCAVgHASIgGAEIgPAHQgPAGgQADIgFAAIgJACIgFAAIgQAAIgSAAgAAfgtQALAAAMgHIABAAIABgBIAAAAIAAgeIgCgVIg2AFIAAASIAGAAIAAAbQAGAEAFADIABAAIABAAQAGACAGAAIAAAAIAAAAgAh5hRQgDgCgEgHIAOgVIAHAFQAVAqAkAIQgkgIgVgqQAhgmAYgMQAHgFAHAAQAHgBAFABQAPACAJATQACAzg0AhQAFAPgRAEQglgHgWglgAAfgtQgGAAgGgCIgBAAIgBAAQgFgDgGgEIAAgbIAeAGIAUgIIAAAeIAAAAIgBABIgBAAQgMAHgLAAIAAAAIAAAAgAAkhLIgegGIgGAAIAAgSIA2gFIACAVIgUAIgAAGhRgAAAiMQgJgTgPgCQgFgBgHABQgHAAgHAFIAAgFQABgGAEgIIACgEIAGgKQAlAFAYgBIAKAGIACARIgCAIIgEAUg");
	this.shape_22.setTransform(-232.175,48.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACVBjQgIgFAAgLQAuAEAygJQgLgVALgaQAjAJAMAbQgYAHgXAEQAXgEAYgHQABAJgGAFQg9ASg+AAIgHAAgAjeBcQgjgugahGIAMgMQAOAvAaApQAKgOAlgJIAAAEQAGApgXAVQgRgVgNgWQANAWARAVQgEACgEAAQgGAAgHgFgAjJBfIAAAAgADaAeIAFgIQAEAAAAAEQABAMgMAMQgCgKAEgKgADIAvQgIgMANgQIAIgCIgCALQgDAWgEAAQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBgACDg1IBFgLIANBRIgIACQgKADACAEQgdgDgbAKgAjVAYQALgKAIACQAFgBAFAFIACADIgCABIAAgEIAAAEIgNABIgQgBgADVARgAjYAFQAMgNAQALIABACIgBgCIgfg3IBMguIApA9IhVAqIgHADIgHABQgIAAgHgEg");
	this.shape_23.setTransform(-235.835,80.5776);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#A0A4A5").ss(0.5,1,1).p("AgvAhIAVhHIBKAJIgSBE");
	this.shape_24.setTransform(-222.6,82.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#C9A188").ss(0.5,1,1).p("AAZhKQADAGACAGQAcBCgUBHAgtgnQACAEADAEQAeAzgaAv");
	this.shape_25.setTransform(-221.5668,71.625);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#B1714E").ss(0.5,1,1).p("AgYhLQADAFACAFQASAgAWAYQANANAQAKQgDACgKANAgwAVQAgAqAhANQABgPAHgPQAFgKAHgI");
	this.shape_26.setTransform(-219.35,52.25);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAAgDIAAADIAAAE");
	this.shape_27.setTransform(-228.55,32.425);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#7C6953").ss(0.5,1,1).p("AgVgcIAxAAIAAAOAgcgQIAAAJIAHAAIAAAdQAgARASgXIgBgbIgXAKIgagG");
	this.shape_28.setTransform(-229.1,43.6863);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#583926").ss(0.5,1,1).p("AgWACIAtAOIgagUIgPgL");
	this.shape_29.setTransform(-234.65,66.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#77604E").ss(0.5,1,1).p("AAGixQANAHAJAOQAMASAGAcQABAIACAJQABANABAPQAAAGAAAHQAAASgBAUQgBAPgBAQQgBAFAAAFQgBAEgBAEQAAABAAABQgBADAAACIAhAxIhtBDQAKAGgBAOIA0gdIBHgjIgOgcIgJAFAgWApQAJAAAJgBIACAQQAOgDAPgFAgWApIADARQAAgBAAABQAHgBAIgBQABAAABAAAAXAiIAEAOQAIgCAJgEAAXAiQAMgDAMgEAgEAoQANgDAOgDAg7AqIABAOIAAACAhKA4IAAAAQACAAACAAQAFABAGABQAAgBABABQABAAADAAQARABASgBAhKApIAAAPAhhA0QAJACAJABQACAAADABAhiAkQAIAAAGACQAFABAFACQAHAAAIABQATABASgCAhfChIAkAIIAkAJ");
	this.shape_30.setTransform(-229.05,52.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#AF714C").ss(0.5,1,1).p("AgMAzQBCgwANgpQABgGABgGAhEAEIA4gy");
	this.shape_31.setTransform(-242,74.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#98362B").ss(0.5,1,1).p("ACMA2QgHgbATgYAiWgaQANgYAfgD");
	this.shape_32.setTransform(-242.55,85.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("ADeBEQAAAKgNAHQg3AGhIgMIgEgQQAvALAvgBQAYAAAagFgACrAUIAEADQACAAACABQAkAPAHAdACXANIACABQAAADAAAEIAGAEQADgFAFgCIAEACACnASQADgBABAAQAAABAAACACfAZQgFAFADAOQALgOADgKACXANQgRAIAFARQALgGADgLACsBJQgHgPAKgjACXANIg9gBAh8AAIgsgtQAGgGAGgGQABgBABgBIAeggIA4AvQgLANgMAKQgQAPgRAGQgTgHgIAOQAMAEAJgGQADgCADgDgAiCAFIACAHQAGgCAFADQACABABABQgBABgBABIABAFQABABAAACQAQAlgRAZQgGAIgOgFQgsgigqg7IAJgOQAZAoAiAgQASARAUAPAh1ANIABAEAiAAMQgIAAgHAMQARgCAKgFAiZA3QAGgPAggS");
	this.shape_33.setTransform(-236.3741,84.2594);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAkAcQgFgEgBgOQgBgCAAgCQAAgDAAgCQgBgFAAgFQAAgDAAgCQAAgXAHgXQADgJAFgKQADgHAEgHAAkAcQALAVADAJIAAAAAAzBWQABgDAAgEQAAgJgCgMAAfBzQACgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQgFAHgJgWQADgHAKgGAAjBWQgCgIAEgHAgEB+QAVgDAOgIQgQgFgBgOAglAqQgDgQgBgQQgBgQABgRQABgSAEgTQAFgZAJgZQADgIADgIAghB2QgCgQABgDAglAqQgeA1AiAXQAHAFAMAEQAGgBAEAAQgJgPABgHAglAqQAugXAbAJ");
	this.shape_34.setTransform(-241.7602,57.275);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#B96F48").ss(0.5,1,1).p("AAlgeIAAABQAIADAEAGQAEAGAAAIAgFAJQgdANAHgqQAAgBABgBQABgHACgIQAZgZANAaQANACAJAEAAEgEQgEgKACgGQAAgBAAgBQAGgKAdACAAEgEQAaAJAXgLQAAANgMAUQgjgFgIgIAgHAcQgEgIAJgGQgDgCAAgDQgBgGAKgHAg0ASQAPAOAFAEQAIAHAIADQAQAIAPgGQgSgLgEgJAgQAuQgLgZAUAHAAPAwQAOgGAMgP");
	this.shape_35.setTransform(-212.375,58.089);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#543A2B").ss(0.5,1,1).p("AgNghQAAAGgBAGAglhEQAXAOABAVQAWARAPAkQAFABADADQAFAFABAKQgEAJgFAGQgJALgMAEAAGApQAMgIAFgJ");
	this.shape_36.setTransform(-224.775,39.175);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AAeiIQASADAMAGQACADABABQADAPgFABQgDAPgGAIIgdACAgVhrQgBgSALgLAhPglQABgBAAgCQAXgqAUgRQAGgFAHgDQAAAAABAAQAGgCAEAAQAPgBAOARQADAFACAGAhPglIgIgEIgBABIgIAXQAFAHADAAQAeAfAlABQAQgKgHgNAhPglQAdAlAmgBQAUgUAKgTQAMgWgHgUAAyB+QgDAIgDABQgEABgFgIABhB0QgFARgKgPAgECAQgJASgGgUIAAAA");
	this.shape_37.setTransform(-234.575,45.6695);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#EE773C").s().p("AglANIBGgiIAFANIhGAeIgFgJg");
	this.shape_38.setTransform(-222.375,66.25);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#EC9865").s().p("AgwAQIACgeIABgmIAagSQASAgAWAYQANAOAQAJIgNAOQADgKgDAAIAAAJQgIAJgEAKQgIAPgBAQQgggPgggpg");
	this.shape_39.setTransform(-219.35,52.75);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#D0672C").s().p("AgMABQAMgEAIgKIAFAKIgZARIAAgNg");
	this.shape_40.setTransform(-222.65,46);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#75543E").s().p("AAGApQAMgIAFgJQgFAJgMAIIgDgRQgFgcgMgRIABgMQAWARAPAkQAFABADADQAFAFABAKQgEAJgFAGQgJALgMAEIgCgcgAgOgVQgJgOgNgHQAFgBgDgPIgDgEIAAgGQAXAOABAVIgBAMIAAAAg");
	this.shape_41.setTransform(-224.775,39.175);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#EF9B68").s().p("AhEAIIA4gyIAKgBQAWgDANgIIAkAIIgDAMQgMAphCAwg");
	this.shape_42.setTransform(-242,74.275);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#EB9C6C").s().p("AgjgGIAGgQQAdAeAkACIgGANQgkgFgdgYg");
	this.shape_43.setTransform(-240.425,46.925);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#795742").s().p("AgbCSQAAgKgDgLIAAgBQgCgJgMgVQgEgEgCgNIAAgEIARADIAAABQgCAfARAUQAIAQgCANgAg0A4IAAgEQAAgXAIgXQADgJAFgKIAGgNQARgLgIgOQAVgUAJgSQAMgXgGgUIAdgCQAGgHADgPIAAAiIgXAAQABALgHAOIgDAGIgBACIgDAEQgcAqgPAxQgIAZgEAbIgOgCgAARhnIABAAIgBgBIAAABg");
	this.shape_44.setTransform(-233.725,50.625);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#B19582").s().p("AggB+IAAAAIAEAAIALACQgEAJgEAAQgEAAgDgLgAAWCAIAPgCQgDAIgDABIgBAAQgEAAgEgHgAgMCAIgEAAIAAgCIgBgOIAIAAIAHAAIAAAAIAAAAIALAAIABAAIAEAAIAGgBIgGABIgEAAIgBAAIgLAAIAAAAIAAAAIgHAAIgIAAIgPgBIgKgDIAKADIAAAPIgFgBIgSgDIAAgFIgBgLIAOACQAEgcAIgZQAPgyAcgpIACgEIABgBIAEgHQAGgOgBgKIAXAAIAAgjQANAHAJAOQAMARAGAdIADARIACAbIAAANIgBAmIgCAgIgBAKIgYAHIAEAOQgPAFgPADIgCgQIAcgGIgcAGIgRABIACARIgRAAIgRAAgAAtAJQAPAAAKgLIABgBIgBgcIgXAKIgbgGIAbAGIAXgKIABAcIgBABQgKALgPAAIAAAAIAAAAQgKAAgMgGIgBAAIgBAAIgBgBIAAAAIAAgdIAAAdIAAAAIABABIABAAIABAAQAMAGAKAAIAAAAIAAAAgAANgbIAHAAIgHAAIAAgJIAAAJgABGgiIAAgOIgyAAIAyAAgAAWCAIAAAAIgCgRIARgBIACAQIgCAAIgPACIAAAAgAgQCAIgBAAIgLgCIgEAAIAAAAIAAgPIAPABIABAOIAAACIAAAAgAAlB+IAAAAgABBBoIAYgHIgCAIIAAACIgBAFIgRAGgAAUBvgAggBvIAAAAgAAlBugABZBhIAAAAgAhcglIABgDQAXgqAUgRQAGgFAHgDIABAAQAGgCAEAAIABAAIAAAAIABAAQANAAALAMIAAABIACACIABABIAFALQAHAUgMAWQgJATgVAUIgCAAQglAAgcgkgAAFhdIgBgBIgCgCIAAgBQgLgMgNAAIgBAAIAAAAIgBAAQgEAAgGACQgBgSALgLIApAAQASADAMAGIADAEQADAPgFABQgDAPgGAIIgdACIgFgLg");
	this.shape_45.setTransform(-233.275,45.6695);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#B19381").s().p("AgpAwIgbgVQACgNgIgQQgRgTACgfIAAgBIAFAAIABAAIAAABQAGATAIgSIABAAIAEAAQASABARgBIABAAQAEAIAEgBQAEgBACgIIACAAQAPgDAPgEQAEAGADAAIABAAIAAAAQAEAAACgIIABAAIAAAAIAAAAIgBAAQgCAIgEAAIAAAAIgBAAQgDAAgEgGIAQgHIAiAyIhtBBIBthBIAIgGIAOAbIhHAjIg0AcQACgMgKgHg");
	this.shape_46.setTransform(-228.1156,63.65);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#785641").s().p("AAAASIgjgIIAEgCQAJgIAEgHIAAgBIACgFIABgFIABgHIAOALIAcAUIgugNIAuANQAKAHgCANg");
	this.shape_47.setTransform(-235.0833,67.8);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#EF2D35").s().p("ABhAxQgHgbATgXIA9ABQgRAIAFAQQALgGADgLIAGAEQgFAGADANQALgOADgJIAEACQgKAjAHAPIgLAAQgqAAgpgKgAjBgfQAOgYAegDIAsAuQgTgJgIAQQAMADAJgGIACAIQgIgBgHAMQARgCAKgGIABAFQggASgGAQQgigggZgpg");
	this.shape_48.setTransform(-238.275,85.6337);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#F09A69").s().p("AgQAuIAAgBIgBgBIAAgCQgHgPAJAAIABAAIAAAAIAAAAIABAAIAFABIABAAQAEAJASALQgHACgHAAQgIAAgJgEgAgHAcIgBgFQAAgFAGgEQgDgCAAgDQAAADADACQgGAEAAAFIABAFIgBAAIgFgBIgBAAIAAAAIAAAAIgBAAQgJAAAHAPIAAACIABABIAAABQgIgDgIgHIgUgSQABgPAHgOIAGgJIABgCIAFgHIAAgBIAAgKQADABgDAKIAJgIIgDAPIgBACIAAAAIAAADIAAABQgEAcAOAAIAAAAIABAAIAIgCIAAAAIABgBIAAAAIABAAIABAAIAAgBQAAgGAJgGQgJAGAAAGIAAABIgBAAIgBAAIAAAAIgBABIAAAAIgIACIgBAAIAAAAQgOAAAEgcIAAgBIAAgDIAAAAIABgCIADgPQAZgZANAaQANACAJAEIgBAAIgIAAIAAAAIAAAAQgUAAgFAIIgBAAIAAACIgBAEQAAAFADAHQgDgHAAgFIABgEIAAgCIABAAQAFgIAUAAIAAAAIAAAAIAIAAIABAAIAAABQAIADAEAGQAEAGAAAIIgBABIAAAAIgCABIAAAAIAAAAQgLAEgMAAIAAAAIAAAAQgJAAgKgDIgEgBIAEABQAKADAJAAIAAAAIAAAAQAMAAALgEIAAAAIAAAAIACgBIAAAAIABgBQAAANgMAUQgjgFgIgIQAIAIAjAFQgMAPgOAGQgSgLgEgJgAgFAJIAAAAgAAlgeIAAAAg");
	this.shape_49.setTransform(-212.375,58.089);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F8C6A3").s().p("ABDDjQAagvgeg0IBHgfQAcBEgUBHgAiDCHIgCgRIABgCIgBACIACARQgigXAeg1QgDgQgBgQQgBgRABgQQABgSAEgTQAFgZAJgZQAdAZAlAGQgFAKgDAJQgHAXAAAWIAAAFIABALIAAAFIABAEQABAOAFAEQALAVADAJIAAAAQACAMAAAJIgBAHIAAABIgCABIAAAAIgBAAQgDgBgFgJIgBgDIgBAAIAAAAIAAgBIAAgBIgBAAIAAgBIAAgBQADgHAKgGQgKAGgDAHIAAABIAAABIABAAIAAABIAAABIAAAAIABAAIABADQAFAJADABIABAAIAAAAIACgBIAAgBIgBAGIgCAEIAAABQgEAJgJAHIgEACQgQgFgBgOQABAOAQAFQgOAIgWADQgJgOAAgGIABgCIgBACQAAAGAJAOIgKABQgMgEgHgFgAg+BnIgBgFQAAgGADgEQgDAEAAAGIABAFgAiHA7IABgBQAhgPAWgBIABAAIAAAAQAIAAAHACIABABIABAAIgBAAIgBgBQgHgCgIAAIAAAAIgBAAQgWABghAPIgBABgAhCCEIAAAAgAg8BYIAAAAgAAEjrIAeAAIAAADIAAAGQgNgGgRgDg");
	this.shape_50.setTransform(-231.952,55.575);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AiHBaQgsgigqg7IAJgOQAZAoAiAgQASARAUAPQgEAFgHAAIgJgCgAiZA3QAGgPAggSIABADQAQAlgRAZQgUgPgSgRgABSBPIgEgQQAvALAvgBQgHgPAKgjIAEABQAkAPAHAdQgaAFgYAAQAYAAAagFQAAAKgNAHQgTACgWAAQgnAAgvgIgACfAZIgGgEIAAgHIgCgBIACABIAAAHQgDALgLAGQgFgRARgIIg9gBIAVhHIBLAJIgTBEIAEgBIAAADIgEgCIAEACQgDAKgLAOQgDgOAFgFgACfAZQADgFAFgCQgFACgDAFgAiAAMQAGgCAFADIABAEIgBgEIADACIgCACQgKAFgRACQAHgMAIAAgAh1ANIAAAAgAiXAHQAIgOATAHIgGAFQgFAEgIAAIgIgCgAiogtIAMgMIACgCIAeggIA4AvQgLANgMAKQgQAPgRAGg");
	this.shape_51.setTransform(-236.3741,84.2594);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#B19482").s().p("Ag0AGQgEAAgFgGIAJgXIAAgBIAIAEQAdAjAlAAQAIANgRALQgjgCgegfgAA9glIAAgBIABABg");
	this.shape_52.setTransform(-238.125,44);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(-227.85,89.8,1,1,-29.9992,0,0,6.5,6.2);

	this.instance_2 = new lib.shoe("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(-243.55,86.65,1,1,0,0,0,6.5,6.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#C4A188").ss(0.5,1,1).p("AgkgEIBIAJ");
	this.shape_53.setTransform(-229.45,85.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#9FA2A1").ss(0.5,1,1).p("AgsAdIARhDIBHAAIgQBN");
	this.shape_54.setTransform(-228.65,82.5);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#C7A088").ss(0.5,1,1).p("AAlg+QABAGACAFQAHBAgRAyAgkgyQABAGABAFQAGAugNA4");
	this.shape_55.setTransform(-227.1851,72.275);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#523524").ss(0.5,1,1).p("AAdhiQhKBUAVBw");
	this.shape_56.setTransform(-239.3797,43.45);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#B77140").ss(0.5,1,1).p("AAegGIAAAIIAAAIAgcgJIgCAG");
	this.shape_57.setTransform(-230.95,31.025);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#53382D").ss(0.5,1,1).p("AgOgXQAbAUABAQIgIAL");
	this.shape_58.setTransform(-226.45,33.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#705E4F").ss(0.5,1,1).p("AgthoQATgZAVAFQAZAGAAAhIALABQABgBABgCQACgFADgGQADgGADgGQAHAKAHANQAkBEgMBpAgthoQgCgDAAgDQgBgNAQgRQAFAAAEAAQAhAAAbAOQABABABAAQADAOgEANAhNgrIgIAWQADAEADADQAaAXArgDQADAAACAAIAGgWAATg0IAoAAIAAARIgTAKIgcgHQADgKAEgKQAFgQAHgQAAJgUQABgCAAgBQABgEABgFAAJgUIAAAUQAqAKAIgQIAAgdAAUhVQgBAagSArAhNgrQAQgoAQgVAhNgrQARAcA9gBAAGB5QABAagFgIAADBrQgJg/APhA");
	this.shape_59.setTransform(-231.65,44.7047);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#CE9E83").ss(0.5,1,1).p("AgfhWQgCAKgDAMQgIArAEArQABAIABAIQAEAfAHASAArBBQgFgJgCgIQgDgHgBgHQgJgmAKgqQACgJACgJ");
	this.shape_60.setTransform(-236.4,51.875);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#5C3B28").ss(0.5,1,1).p("AgNAhQgJAIADANIAoALAgNAhIAQAFAgDhAIgKBh");
	this.shape_61.setTransform(-240.8641,61.775);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#6C5F51").ss(0.5,1,1).p("ABdAnIAFgCIADAYABOgrQAGgEgBgNQgEACgIAEIACAOABOgrQgDABgCACAA6gvQAHgEAGgDAgOgoIASABQAFAAAEAAIAAAOQgDAAgEAAQgHAAgJgCAAagkIACAKAANgZQAIASAHgTAA7giQAHAQAHgWAA6gvIABANQgQAGgPACAANgnQAcAAARgIAhXg0QgEABgKgJQACAPAEAEQACACAIACAAQA3IBNgQABOgrIAPBS");
	this.shape_62.setTransform(-231.7,59.45);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#6D5F52").ss(0.5,1,1).p("Ag3AKIATgEIBJgLIATgE");
	this.shape_63.setTransform(-227.175,66.575);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAygRIAAAAQgDgJgLgVIAAAAQgGgCgBAAQgdgCglASQgCADgBADQgWApAWAWQADADAEADQABAAAAAAQAHAFALAEQAGgBAEAAQgJgPABgHAghAqQgCgQABgDAAzAKQABgDAAgEQAAgIgCgMAAaAnQAHgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQgFAHgJgVQADgHAKgGAAjAKQgCgIAEgGAgEAyQASgDAJgFQABgCACgBQgLgFgBgO");
	this.shape_64.setTransform(-235.0625,63.39);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#AA6E51").ss(0.5,1,1).p("AgdA4QAtg/AKgcQAEgKAAgK");
	this.shape_65.setTransform(-233.8472,72.825);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#94714E").ss(0.5,1,1).p("AAYgkIgFAHIgqBC");
	this.shape_66.setTransform(-240.725,71.325);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#9AA7A3").ss(0.5,1,1).p("AgPgtIgeA2IA4AlIAjg5QgHgDgHgDQgZgKgWgSg");
	this.shape_67.setTransform(-241.475,79.675);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAUAvIAShDIBIAAIgRBNgAhsgBIAeg3QAXASAYALIAPAFIgjA6g");
	this.shape_68.setTransform(-235.15,80.725);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#EB9A65").s().p("AgmABIBJgMQABAHADAEIhLAMIgCgLg");
	this.shape_69.setTransform(-227,67.125);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#775740").s().p("Ag6A2QgDgNAJgIIARAFIgRgFIAKhhQACACAIACQAEAfAHASQgWApAWAWIAHAGIABAAIgEAHgAA3gfIAAAAIgHgCIgGgRIARACQABATgDAAIgCgCg");
	this.shape_70.setTransform(-236.9808,61.775);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#7C583D").s().p("AgZBeQgVhwBKhUIACAHQgQAUgOAoIgIAWIAGAHIgFAVQgJArAFAsIgBABQgEAAgJgJg");
	this.shape_71.setTransform(-239.2797,43.855);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#6D543C").s().p("AgHAAIgGANQAFgNgEgNIgBgBIAAgJQAaAUABAQIgIALQgGgNgHgLg");
	this.shape_72.setTransform(-226.45,33.575);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#7B5740").s().p("AgUBfQgKgnALgqIAEgRIAFgBIAGgWQARgsABgaIAMACIgNAgIgGAUIgCAJIgBACQgQBAALBAg");
	this.shape_73.setTransform(-231.0756,45.75);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#8A7869").s().p("AAXANIAAgNQAbAAARgIIACAMIgCgMIANgHIADAOIgDgOIAMgGQABANgGAEIgEADQgIAVgGgQQgQAGgQADIgCgLIACALQgDAJgEAAQgDAAgEgJgAAQANIgRgCIgEgMIASABIAKAAIAAANIgHAAgAhWgCQgDgEgCgPQAJAJAEgBIACAOQgIgBgCgCg");
	this.shape_74.setTransform(-232.6179,55.5003);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#EC9D62").s().p("AgkACIAFgVQAZAYArgDIgEASQgmgDgfgPg");
	this.shape_75.setTransform(-236.375,45.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#B29483").s().p("AgkAEIgGgGIAIgWQAQAbA9gBIgGAXIgFAAIgKAAQgkAAgWgVg");
	this.shape_76.setTransform(-235.875,42.8414);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#E37C32").s().p("AgnABIAFgGQAGAEAMADIAKgBQARgBAJgGIAUgDQAAAJgEAKg");
	this.shape_77.setTransform(-234.8222,68.225);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#EF9B68").s().p("AgLAtQgYgKgXgSIArhDIBKAKQgKAbguBAIgOgGg");
	this.shape_78.setTransform(-237.15,73.375);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#B19582").s().p("AgTC2IAJgCQAJgHADgJIAAgBIACgEIABgGIABgHQAAgJgCgMIAAAAQgDgJgKgVQAFAJgBgaIAGAAQAIARAHgSQAPgDAQgGQAHARAHgXIAFgCIAOBSIhMARIBMgRIAGgBIADAYIgTAEIhJAMIgTAEIADgDgAgHA/QgLg/ARhAIAAAUQAPAFALAAIAAAAIABAAQAQAAAFgKIABgBIAAgdIAAAdIgBABQgFAKgQAAIgBAAIAAAAQgLAAgPgFIAAgUIABgCIABgJIAGgUIApAAIAAAQIgTAKIgcgGIAcAGIATgKIAAgQIgpAAIANggIABgDIAFgLIAGgNQAIALAHANQAkBEgMBoIgMAHIgNAGQgRAIgcAAIgIAAgAhYhXQAPgoAQgUIABgBIABgBQAPgTAQAAIABAAIAAAAIAFAAIABAAIAAAAQAZAGAAAgIAAABIAAgBQAAgggZgGIAAAAIgBAAIgFAAIAAAAIgBAAQgQAAgPATIgBABIgBABIgCgHQgBgMARgSIAJAAQAiAAAaAPIACABQADANgFAOIgFALIgBADIgMgCQgBAagRAsIgEAAQg6AAgQgcg");
	this.shape_79.setTransform(-230.475,49.075);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#F8C6A3").s().p("AAECmQANg4gFgvIBLgMQAGBBgRAygAhAA4IgBAAIgCgRIAAgCIAAACIACARIgIgGQgVgWAVgpIADgGQAigQAbAAIABAAIAAAAIAGAAIAFACIABAAQALAVACAJIAAAAQADALAAAJIgBAHIgBAAIgCACIAAAAIAAAAQgFgBgHgQQADgHAKgFQgKAFgDAHQgDAEAAAGIABAFIgBgFQAAgGADgEQAHAQAFABIAAAAIAAAAIACgCIABAAIgCAGIgBAEIgBABQgEAJgIAHIgJACQgKgFgBgOQABAOAKAFIgDADQgJAFgSADQgJgOAAgGIAAgCIAAACQAAAGAJAOIgKABQgMgEgGgFgAAEAJIAAAAgAhUg+IgCgQQgEgsAJgrQAfAQAmACQgKAqAJAnIAEAOIAHARIgGAAIAAAAIgBAAQgbAAgiAQIgDAGQgHgSgEgfgAgCgjIAAAAg");
	this.shape_80.setTransform(-231.8101,61.975);

	this.instance_3 = new lib.lhand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(-245.45,57.8,1.08,1.08,59.9998,0,0,5.2,5);

	this.instance_4 = new lib.Hand("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(-217.65,59.6,1,1,-59.9996,0,0,5.3,4.8);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#533828").ss(0.5,1,1).p("AgNgXQAcAcgCAJQgCAIgFAC");
	this.shape_81.setTransform(-225.2462,33.65);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#ADA098").ss(0.5,1,1).p("ABWAyIBOAAAh7gxIA2AwIgxAtIgtg3g");
	this.shape_82.setTransform(-234.025,79.175);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#745F4A").ss(0.5,1,1).p("AAPiJIAAgNAgJhtIAOAFQAJgRACgQQAAgGgBgHAhLiEQABgCACgCQAGgkAQAKQATgRAnAZQAEACADACABlCqIAGgDAAzCDIAJAQIAKAQAhShGQghBHANBI");
	this.shape_83.setTransform(-227.471,47.706);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#CBA485").ss(0.5,1,1).p("AgChVIACASQABADANAcQAJATAQAPQAGAEAIAFIAYARAhMg2QAFAIADAFQASAmAfAkAgTAhIAGAHQADADADADQAGAHAGAHQAAABABABIAaAY");
	this.shape_84.setTransform(-225.525,52.275);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#725D4B").ss(0.5,1,1).p("Ag1hdQAVAEASAfQAIANAGATIAaAAIAAAOAALhWIAAABQAIAKAFALQAbA3ADBYIAAAPAAIAAIAPgKIAGAfQgFAHgJAB");
	this.shape_85.setTransform(-227.025,42.575);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#695C50").ss(0.5,1,1).p("AAAABIABgB");
	this.shape_86.setTransform(-224.575,41.35);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#76634E").ss(0.5,1,1).p("AgoAtQgGgVgCgSQgEgcAFgSQACgJAFgGAgoAtIAJAWQAFABAEAAQAogCAdgZIAEgEQgCgGgCgGQgEgOgEgLAglg6QAIgJAPAAAgoAtQAvACAige");
	this.shape_87.setTransform(-230.9191,39.975);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#B46E49").ss(0.5,1,1).p("AAmhKIAAABQhKBGgCA9AAbBKQAFgTAHgE");
	this.shape_88.setTransform(-244.625,47.15);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#4D3C2C").ss(0.5,1,1).p("AgKgFQAGASAEgBAgKgFIgTARQABADABADIAAABIAAgBQAHAPAJACAgKgFQANgUAbgJ");
	this.shape_89.setTransform(-238.05,37.925);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#644F3A").ss(0.5,1,1).p("AAahZQgOAQgJAQQgGAMgFAMQgXA0AIA3QACAKABAG");
	this.shape_90.setTransform(-238.3532,44.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#705C4B").ss(0.5,1,1).p("AAvg5QAHgBAKgEIAAABIAAAQQAFgBAHgCIAAAAAAvg5IACAPQAHAOAIgRAg1hIQgGgDgGgDIABALQAEADAFACQACACACABAgkg0QAGACAFACQAJADAJACQAEASALgRQATACAWgCAgHg3IAAAMAAHg6IABAQAglhDIABAPAglhDQAWAIAWABQAUABAUAAAg1hIIACANQAAAZAPgSAg1hIQAIADAIACAhTAaIgGAWIAhAHIBEARIAgAHIAAgRIhdgagABaggIgnBQIgHAOAg3g+IgcBY");
	this.shape_91.setTransform(-233.925,61.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#543921").ss(0.5,1,1).p("AgsAWIAHANIAsgdIAmgXAglAHIBJgo");
	this.shape_92.setTransform(-225.025,65.85);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#9E9F9C").ss(0.5,1,1).p("AgwAhIAUhBQApAKAkgKIgUBB");
	this.shape_93.setTransform(-220.5,80.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f().s("#B46E47").ss(0.5,1,1).p("ABlhKQATAAAMAHQAoAYgWBoAidAbIA9g9IAHgGAA/gxQAFADAEAFQABABAAABIABAAQAaAjgcBBAhnBLQBDg0ANgjQACgGABgG");
	this.shape_94.setTransform(-230.6097,71.4984);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#785840").s().p("AgFADQAAgGgBgGIgHgEIABgKQAbAcgBAJQgCAIgGACQgFgKgGgLg");
	this.shape_95.setTransform(-225.2712,33.65);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#F09A69").s().p("AgtA7QABg+BKhGIABAAIAAgBQAGAQAJACQgXA1AIA2QgHAEgFAUg");
	this.shape_96.setTransform(-243.875,47.15);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#644F3A").s().p("AgbASIAAAAIgCgGIASgRIABACIABABIAAACIABAAIABADQADAIADABIABAAIAAAAQgGALgFAMQgJgCgHgPgAgBAMQgDgBgDgIIgBgDIgBAAIAAgCIgBgBIgBgCQAOgUAbgJQgEAGgDAJQgOAPgJAQIAAAAIgBAAg");
	this.shape_97.setTransform(-238.05,37.925);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#F8C7A2").s().p("AhCAHIA9g9IBIAWQgNAjhCA0g");
	this.shape_98.setTransform(-239.725,73.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#EF9B68").s().p("AgqA+QAchCgagiQAXgSAigKQAoAYgWBoQgSAFgSAAQgUAAgVgFg");
	this.shape_99.setTransform(-219.1097,71.4125);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("ABMAyIAUhBQArALAjgLIgUBBgAitgLIAogmIA2AwIgxAtg");
	this.shape_100.setTransform(-233.025,79.175);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#EC955D").s().p("AglgHIAHgGIBEAPIgDAMg");
	this.shape_101.setTransform(-236.525,68.775);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#EA7132").s().p("AgXASIgCgCIgIgJIAkgXQATgBAMAIQgiAJgXASg");
	this.shape_102.setTransform(-220.85,65.7484);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#7A563F").s().p("AgsApIAHgOIAmhQIAaAYIAJAPIAJAPIgmAZIgsAcgAglAbIBJgpg");
	this.shape_103.setTransform(-225.025,63.875);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7F5540").s().p("AgJBaIgLgGIgDgQQgIg3AXg0QAFgMAGgLQAJgRAOgQQgEASAEAdQggBIAMBIIgPgGg");
	this.shape_104.setTransform(-238.3532,45.475);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#F8C6A3").s().p("AACA1IgBgCIgMgOIgGgGIgGgGIAAgBQgfgkgSgmQAoAAAdgaIANAfQAJAUAQAOQAGAGAIAFIAYAPIgtA+g");
	this.shape_105.setTransform(-225.125,53.15);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#F49762").s().p("AglAIQAogBAcgYIAEgEIADASQgdAZgmAAIgIgOg");
	this.shape_106.setTransform(-229.35,45.9);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#8C786A").s().p("AgMAMIAAgMIAAAMIgSgEIgLgEIgBgOQAWAHAWACIABAPQgFAIgEAAQgEAAgCgKgAAsANIgCgOIACAOQgWADgTgCIgBgPQAUABAUgBQAHAAAKgEIAAABIAAAPIAAgPIAGAGIAGAGIgGgGIAGAFIAAABIgMADQgEAJgEAAQgEAAgDgHgAg4gCIgCgOIAQAGIABAOQgGAHgEAAQgFAAAAgNgAACgBIAAAAgAg8gFIgJgFIgBgLIAMAFIACAOIgEgDg");
	this.shape_107.setTransform(-233.425,56.1139);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#B19582").s().p("AgDC7IhGgQIgggIIAFgVIAjAKIBcAaIhcgaQADgnAVguIASAEQAEATALgRQATACAVgDQAIAPAIgRIALgDIANANIACACIgoBRIgHAPIABARgABIBQIAAAAgAA7BDIAAgBIANAOIgNgNgAA7BDIAAAAgAgIA5QgXgCgXgHQgNhHAhhIQACARAFAWQgFgWgCgRQgEgeAFgRQACgJAEgGIAEgEQAIgIAPAAQAUADASAgQAIANAGATIAagBIAAAOIAAgOIgaABQgGgTgIgNIAPAFQAJgRACgQQAIALAFAKQAbA3ACBZIAAAOQgPgOgJgTIgOgfQAJgBAFgGIgGghIACgCIgCACIgPAKIAPgKIAGAhQgFAGgJABIgDgRIgEgNIgJgZIAJAZIAEANIgFAEQgcAZgoABIgKAAIgJgWIAGAAIAAAAIABAAQArAAAfgdQgfAdgrAAIgBAAIAAAAIgGAAIAJAWIAKAAIAIAOQARAkAfAlQgLAEgGAAIgOABIgZgBgABBhAIAAAAgABMhXgAAmiGQgSgggUgDQgPAAgIAIQAFgkAQAKQATgRAoAZIAGAEIAAANIABAAQgCAQgJARgAAmiGg");
	this.shape_108.setTransform(-232.3,50.206);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#7E5542").s().p("AgcAnIAchXIADACQAAAZAPgSIALAEQgVAugDAmg");
	this.shape_109.setTransform(-239.425,60.475);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f().s("#523C2C").ss(0.5,1,1).p("AgGgTIAegRAgGgTIgRANQABAGACAEQAFAbAMAGAgGgTQgBAZAQAD");
	this.shape_110.setTransform(-239.375,38.8);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f().s("#B5724F").ss(0.5,1,1).p("Ag5AsQAcg9BDgwQAEgDAJgDAAIBIQANgfAlgg");
	this.shape_111.setTransform(-246.6,46.375);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f().s("#A9A8A1").ss(0.5,1,1).p("AAWg2IAkA7IhQAyIgjg+g");
	this.shape_112.setTransform(-249.75,78.05);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f().s("#C99976").ss(0.5,1,1).p("AhFgBQAvgQARgdQAEgGABgFAggA6QBMgcAVg5QADgHACgI");
	this.shape_113.setTransform(-240.6,72.75);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f().s("#A2A49F").ss(0.5,1,1).p("AgpglIAOBZIBFgNIgNhZg");
	this.shape_114.setTransform(-216.35,80.85);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#B7703F").ss(0.5,1,1).p("AAMhHQAJAIAHAKQAdAnADBJAg7gbQAJADAHAGQAiAYgBBDAgrgSIBHgj");
	this.shape_115.setTransform(-219.4,69.85);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#4D372A").ss(0.5,1,1).p("Ag5ArIAjgVIBHgrIAJgGIgQgO");
	this.shape_116.setTransform(-223.1,64.85);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#4D372F").ss(0.5,1,1).p("AgCgCIAFAF");
	this.shape_117.setTransform(-229.125,68.85);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#5A4431").ss(0.5,1,1).p("AAQg2IAjAxIhlA8");
	this.shape_118.setTransform(-224.025,61.15);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#C99F80").ss(0.5,1,1).p("AhPgQQAFAFAFAFQAhAfAsAWQAaANAeAJQgGgcAWgpQgdgHgqgfQgFgEgNgMIgNgO");
	this.shape_119.setTransform(-223.175,48.225);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#6D5C48").ss(0.5,1,1).p("AA2itIAFABIAEABQACADACADAAjiIIAVAAIALgdQAIAMAGAMQATAoADAsAgXilQgFABgFAEQgIAHgCAEQgEAPACAKQAAABAAAAQABAJAEAKQAKAWAZAdIgFAEIAOAPQAHgBADABQAogQARgkAgXilIAPgaIBDATAgth7QgHAKgGAKQgJAOgFAOQgDAKgDAKQgDAOgBAOQgCAfAJAjQAFACAFACIgDARQgDgCgEgBQgGgIACgMQACABACABAA8hnIAYAAIAAARIgNAAAA8hnQgBgBAAgBQgNgSgLgNQghgkgZAHAA8hnIALARABThIIABgOAgFg1QAmgNAagnABlAlQAGAIgGALQgDABgDABABlAlIAAgJAAxA2QAPgDAPgFIACARAAkA4IAAARQAHANAGgPQAQgDAQgFQADAEACACQAJAGAAgRAAxA2IAAARABfAsIAAAOAAkA4QAGgBAHgBAgxAxQACAAADABQANAEANACQAHABAHAAIgBARQAUACAVgDAgyBCQAQAEAPADQAHAUAHgTAgxAxIgBARAhBArQAIADAIADAhEA8QAAAYASgSAgSA4IgBARAheCLIgJAYIAXAFIBGAPIAnAJIACgHIADgGIgFgDAheCLIAUAGIBnAfIAFgKIA0hhAgEA5QATACAVgDAhEA8IgaBPABPAuQALgEALgF");
	this.shape_120.setTransform(-232.5185,50.075);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#5F3B2E").ss(0.5,1,1).p("AgKgWQATARADAWIgGAG");
	this.shape_121.setTransform(-225.05,33.575);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#EC7348").s().p("AgOgTIANgHQAEAbAMAGIgGAUQgMgPgLgfg");
	this.shape_122.setTransform(-241.3,41.8);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#F89863").s().p("AglgCIAGgMIBFAOIgFAPg");
	this.shape_123.setTransform(-237.375,68.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#EF9B68").s().p("ABbBfIBIgjQAcAnAEBKIhHAOQABhDgigZgAjChLQAcg+BEgxQALAgANAPQgEAOAAAPQglAfgNAgg");
	this.shape_124.setTransform(-232.9,58.425);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#E47947").s().p("AgrARIBHgqQAIAHAIALIhHAhQgHgFgJgEg");
	this.shape_125.setTransform(-221,65.25);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("ACGgVIBHgOIAMBZIhGANgAjYgUIBQguIAlA8IhSAwg");
	this.shape_126.setTransform(-233.9,79.3);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#7A563F").s().p("Ag6A+IADgGIgGgDIAGgKIA0hgQAIAGAAgRIAGgCIAiAxIAQAPIgIAEIhHAsIgjAVgAg3ArIBkg8g");
	this.shape_127.setTransform(-223.5,62.375);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#7B5740").s().p("AgaCNIAahPQAAAYARgSIgXBQgAASAzIgQgGIgJgEQgKgjADgeQAAgPAEgOIAGgUQAEgOAJgOQAFgKAIgJQABAIAEAKQgmBXAhBDIgEgBgAgVhqIgDgLIARgMIAegSQgDAPABALIABABQgIAJgFAKQgQgDAAgXIAAgCIAAACQAAAXAQADQgJAOgEAOQgMgFgFgcgAAJhlIAAAAgAAWh4IAAAAg");
	this.shape_128.setTransform(-239.3,49.85);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#8F786A").s().p("AgeANIAAgQIAAAQQgQgDgPgEIAAgQIAFABIAaAGIAOABIAAAQQgEAJgDAAQgEAAgDgKgAAYANIAAgQIAAAQQgVADgTgCIAAgQQAUACAUgDIANgCQAPgDAPgFIAWgJQAGAIgFALIgHACIAAgOIAAAOQABAQgJgGIgGgGIgCgQIACAQQgQAFgQADIAAgQIAAAQQgDAIgEAAQgDAAgDgGgAhPAAIADgQIAPAGIAAAQQgIAHgEAAQgGAAAAgNgABFADgAhWgCQgHgIACgMIAEACIALAEIgDAQIgHgCgABTgBIAAAAgAgQgCIAAAAgAhMgQIAAAAg");
	this.shape_129.setTransform(-231.367,56.082);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#F8C7A2").s().p("AihB3QAvgRASgcIBGASQgUA7hOAcgABahNQgsgVgiggQAqgLASglIAUAPQApAfAdAIQgWAqAGAbQgegJgagNg");
	this.shape_130.setTransform(-231.4,60.675);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#F39B60").s().p("AgiAVQAngQARgjIANAOQgSAkgpALIgKgKg");
	this.shape_131.setTransform(-227.675,44.45);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#64452D").s().p("AgCAAIgEgGIgEgBIgFgBIAJgOQAUARACAWIgFAGQgGgMgHgLg");
	this.shape_132.setTransform(-225.525,33.575);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#B19582").s().p("AgJC3IhGgPIgXgFIAJgYIATAGIBnAfIhngfIAZhPQAPAEAQADQAHAUAHgTQATACAVgDQAHANAGgPQAQgDAQgFIAGAGIg0BhIgGAKIAFADIgCAGIgDAHgAgEA5IgOgBIgagGQgjhEAohWQAJAWAZAdQgZgdgJgWQgEgKgBgJIgBgBQgBgKADgPIAKgLQAFgEAGgBIAOgaIBDATIAFABIAEAGIgMAdIgVAAIAVAAIAMgdQAHAMAGAMQAUAoACAsIgTgPIABgOIgBAOIgNgOIAOAAIAAgRIgZAAIgBgCIABACIALARQgRAkgoAQIAAAAIgBgBIgBAAIgBAAIgCAAIgDABIgBAAIgBAAIgOgPIAFgEIgFAEIAOAPIABAAIABAAIADgBIACAAIABAAIABAAIABABIAAAAIAKAKQAhAfAtAVIgBAJIgWAJQgPAFgPADIgNACQgNACgMAAIgPgBgAgFg1QAmgNAagnQgaAngmANgAAjiIQAMANAMASQgMgSgMgNIAAAAIgCgDQgZgbgUAAIgBAAIAAAAIgIABIgBAAIAAAAIAAAAIABAAIAIgBIAAAAIABAAQAUAAAZAbIACADIAAAAIAAAAgABHhWIgLgRIAZAAIAAARgABHhWgABHhWg");
	this.shape_133.setTransform(-232.575,50.075);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#C4A188").ss(0.5,1,1).p("AgkgEIBJAJ");
	this.shape_134.setTransform(-228.35,84.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f().s("#6F5C4D").ss(0.5,1,1).p("AAPgrIgeBX");
	this.shape_135.setTransform(-226.2,58.6);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f().s("#523524").ss(0.5,1,1).p("AAdhiQhKBUAVBx");
	this.shape_136.setTransform(-238.2797,41.75);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f().s("#9FA2A1").ss(0.5,1,1).p("AgrAdIAQhDIBIAAIgQBN");
	this.shape_137.setTransform(-227.55,80.8);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAygRIAAAAQgDgJgLgVIAAAAQgGgCgBAAQgdgCglASQgCADgBADQgWApAWAWQADADAEADQABAAAAAAQAHAFALAEQAGgBAEAAQgJgPABgHAAlgEQADgHAKgGAghAqQgCgQABgDAAzAKQABgDAAgEQAAgIgCgMAAaAnQAHgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQgFAHgJgVAgEAyQASgDAJgFQABgCACgBQgLgFgBgOAAjAKQgCgIAEgG");
	this.shape_138.setTransform(-233.9625,61.69);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f().s("#6C5F51").ss(0.5,1,1).p("ABdAnIAFgCIAEAYAA7giQgQAFgPADAA6gwIABAOQAHAQAHgWABOgrQgDABgCACAA6gwQAHgEAGgCIACAOAgOgoIASABQAFAAAEAAIAAAOQgDAAgDAAQgIAAgJgCAAaglIACALAANgZQAJARAGgSAANgnQAcAAARgJAhXg1QgEABgKgIQACAPAEAEQACACAIACAAQA3IAMgCIBBgOABOgrQAGgEgBgNQgEABgIAFABOgrIAPBS");
	this.shape_139.setTransform(-230.6,57.75);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f().s("#CE9E83").ss(0.5,1,1).p("AgfhWQgCAKgCAMQgJArAEArQABAIABAIQAEAfAHASAArBBQgEgJgDgIQgCgHgCgHQgJgmAKgqQACgJACgJ");
	this.shape_140.setTransform(-235.3,50.175);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f().s("#53382D").ss(0.5,1,1).p("AgNgXQAaAUACAQIgIAL");
	this.shape_141.setTransform(-225.35,31.875);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#B77140").ss(0.5,1,1).p("AAfgGIAAAIIAAAIAgbgJIgCAG");
	this.shape_142.setTransform(-229.85,29.325);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#705E4F").ss(0.5,1,1).p("AgthMQgCgDAAgEQgBgMAQgSQAFAAAFAAQAhAAAbAPQABAAABABQADANgFAOAAUg6IAMACQAAgCABgBQADgFACgGQADgHADgGQAIALAHANQAkBDgMBqAgthMQAUgZAUAEQAaAHgBAgQgBAagSArAhNgPIgHAUQACAFAEADQAZAYAsgDQACAAADAAIAFgXAANgEQgBAEgBAEQgBABAAABIAAAUQApAMAJgSIAAgcAANgEQADgKADgKIApAAIAAAQIgTAJgAhNgPQARAbA9gBAhNgPQAQgoAQgV");
	this.shape_143.setTransform(-230.55,40.25);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AAUAvIARhDIBIAAIgQBNgAhsgBIAdg3QAYASAYALIAPAFIgjA6g");
	this.shape_144.setTransform(-234.05,79.025);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#B19482").s().p("AgNAoIABgHQAAgKgCgLIAAgBQgDgJgKgTQAEAIgBgaIAIAAQAHASAHgTQAPgCAQgGIgfBXIgMACIABgFg");
	this.shape_145.setTransform(-227.5,58.725);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#7A5640").s().p("AAAgnQAFARAIgXIAEgCIAPBRIg/AOg");
	this.shape_146.setTransform(-224.55,58.175);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#F09A69").s().p("AgpA6QANg5gGgtIBKgNQAHBAgRAzg");
	this.shape_147.setTransform(-226.0851,71.125);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#EB9A65").s().p("AgmABIBJgMIAEALIhLAMIgCgLg");
	this.shape_148.setTransform(-225.9,65.425);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#775740").s().p("AAFAJIgBgBIgFgCIgHgQIARACQAAATgCAAIgCgCg");
	this.shape_149.setTransform(-230.8167,56.0297);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#F8C6A3").s().p("AgRCgQgZgLgXgSIArhDIBLAKQgLAbgtBBIgOgGgAgSA5IgBAAIgBgRIAAgCIAAACIABARIgHgHQgWgWAWgoIADgHIABAAQAggPAagBIABAAIAAAAIAGAAIAHADIAAAAQALAUADAJIAAABQgKAFgDAGQADgGAKgFQACAKAAAKIgBAHIAAAAIgCABIAAAAIgBAAQgEAAgHgRQAHARAEAAIABAAIAAAAIACgBIAAAAIgBAGIgCADIAAACQgEAJgJAGIgJADQgLgGgBgOQABAOALAGIgDADQgJAFgTADQgIgOAAgHIAAgBIAAABQAAAHAIAOIgJABQgLgEgHgFgAAxAYIgBgFQAAgFADgFQgDAFAAAFIABAFgAglg+IgCgPQgFgsAJgsQAfAQAmADQgLAqAKAnIAEAOIAGAQIgGAAIAAAAIgBAAQgaABggAPIgBAAIgDAHQgHgSgEgggAArgjIAAAAg");
	this.shape_150.setTransform(-235.375,60.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#8A7869").s().p("AAXANIAAgNQAbAAARgIIACAMQgQAGgQACIgCgKIACAKQgDAKgEAAQgDAAgEgJgAAQANIgRgBIgEgNIASABIAKAAIAAANIgHAAgABFAEIgCgMIANgGIADANQgFAMgEAAQgDAAgCgHgAhWgCQgDgEgCgPQAJAJAEgBIACAOQgIgBgCgCgAAXAAIAAAAgABTgBgABQgOIAMgHQABANgGAEIgEADgABDgIg");
	this.shape_151.setTransform(-231.5179,53.8003);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#EC9D62").s().p("AgkABIAFgUQAZAXArgDIgEATQgmgDgfgQg");
	this.shape_152.setTransform(-235.275,43.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#7B5740").s().p("AgUBgQgKgoALgpIAEgSIAFgBIAGgWQARgsABgaIAMACIgNAgIgGAUIgCAJIgBACQgQBAALBAg");
	this.shape_153.setTransform(-229.9756,44.05);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#6D543C").s().p("AgHAAIgGANQAEgNgDgNIgCgBIAAgJQAbAUABAQIgIALQgGgNgHgLg");
	this.shape_154.setTransform(-225.35,31.875);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#B19582").s().p("AhpCyQgDgOAIgIIARAFIgRgFIAKhiQACACAIACQAEAfAHASQgVAqAVAWIAIAGIABAAIgFAHgAgCCzIAJgDQAIgHAEgIIABgCIABgEIANgCIBAgPIAGgBIADAZIgTADIhKANIgTADIADgCgAAJA8QgJg/APhBIAAAVIAFABQANADAKAAIAAAAIAAAAQARAAAFgKIAAgBIAAgcIAAgRIgoAAIAoAAIAAARIgTAKIgcgHIAcAHIATgKIAAAcIAAABQgFAKgRAAIAAAAIAAAAQgKAAgNgDIgFgBIAAgVIABgCIACgJIAHgUIAMggIACgDIAFgLIAGgNQAHALAHANQAkBEgMBoIgMAHIgNAHQgRAHgbABIgKAAgAhHhaQAQgpAQgUIABgCIACgCIABAAQAOgRAPAAIABAAIAAAAIAFABQAaAFAAAgIAAABQgBAagSAsIgEAAQg6AAgQgbgAAaiFIAAgBQAAgggagFIgFgBIAAAAIgBAAQgPAAgOARIgBAAIgCACIgBACIgCgHQgBgMAQgSIAJAAQAhAAAbAPIACABQADANgEAOIgFALIgCADg");
	this.shape_155.setTransform(-231.1391,47.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regX:28.9,regY:31.6,x:-235,y:15.5}}]}).to({state:[{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance,p:{regX:33.8,regY:23.4,x:-229.6,y:9.8}}]},2).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77,p:{x:-234.8222,y:68.225}},{t:this.shape_76,p:{x:-235.875,y:42.8414}},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71,p:{x:-239.2797,y:43.855}},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67,p:{x:-241.475,y:79.675}},{t:this.shape_66,p:{x:-240.725,y:71.325}},{t:this.shape_65,p:{x:-233.8472,y:72.825}},{t:this.shape_64},{t:this.shape_63,p:{x:-227.175,y:66.575}},{t:this.shape_62},{t:this.shape_61,p:{x:-240.8641,y:61.775}},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55,p:{x:-227.1851,y:72.275}},{t:this.shape_54},{t:this.shape_53},{t:this.instance_2,p:{regY:6.1,scaleX:1,scaleY:1,rotation:0,x:-243.55,y:86.65}},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:1,scaleY:1,rotation:-29.9992,x:-227.85,y:89.8}},{t:this.instance,p:{regX:28.9,regY:31.6,x:-233.95,y:16.75}}]},5).to({state:[{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.instance_2,p:{regY:6.3,scaleX:1.1154,scaleY:1.1154,rotation:14.9992,x:-250,y:85.15}},{t:this.instance_1,p:{regX:6.6,regY:6.4,scaleX:1.1153,scaleY:1.1153,rotation:-30.0012,x:-219.85,y:88.7}},{t:this.instance_4,p:{rotation:-59.9996,x:-217.65,y:59.6}},{t:this.instance_3,p:{regX:5.2,scaleX:1.08,scaleY:1.08,rotation:59.9998,x:-245.45,y:57.8}},{t:this.instance,p:{regX:28.9,regY:31.6,x:-232.55,y:16.75}}]},2).to({state:[{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.instance,p:{regX:28.9,regY:31.6,x:-232.8,y:17.6}},{t:this.instance_4,p:{rotation:-74.9987,x:-212.3,y:53.3}},{t:this.instance_2,p:{regY:6.3,scaleX:1,scaleY:1,rotation:-38.0541,x:-213.2,y:89.05}},{t:this.instance_1,p:{regX:6.5,regY:6.3,scaleX:1,scaleY:1,rotation:29.8955,x:-256.3,y:83.55}},{t:this.instance_3,p:{regX:5,scaleX:1,scaleY:1,rotation:90,x:-250.55,y:56.25}}]},4).to({state:[{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_71,p:{x:-238.1797,y:42.155}},{t:this.shape_76,p:{x:-234.775,y:41.1414}},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_77,p:{x:-233.7222,y:66.525}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_61,p:{x:-239.7641,y:60.075}},{t:this.shape_67,p:{x:-240.375,y:77.975}},{t:this.shape_63,p:{x:-226.075,y:64.875}},{t:this.shape_55,p:{x:-226.0851,y:70.575}},{t:this.shape_66,p:{x:-239.625,y:69.625}},{t:this.shape_65,p:{x:-232.7472,y:71.125}},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.instance_2,p:{regY:6.1,scaleX:1,scaleY:1,rotation:0,x:-242.45,y:84.95}},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:1,scaleY:1,rotation:-29.9992,x:-226.75,y:88.1}},{t:this.instance,p:{regX:28.9,regY:31.6,x:-232.85,y:15.05}}]},2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-265.2,-17.5,64,112);


(lib.Scene_1_tzarot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// tzarot
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(901.7,302.7,1.0035,1.0042,0,0,0,141.8,47.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(447).to({_off:false},0).wait(1).to({regX:136.1,regY:41.5,scaleX:0.9966,x:881.6,y:296.6},0).wait(1).to({scaleX:0.9897,x:867.2},0).wait(1).to({scaleX:0.9828,x:852.8},0).wait(1).to({scaleX:0.9759,x:838.4},0).wait(1).to({scaleX:0.969,x:824},0).wait(1).to({scaleX:0.962,x:809.65},0).wait(1).to({scaleX:0.9551,x:795.25},0).wait(1).to({scaleX:0.9482,x:780.85},0).wait(1).to({scaleX:0.9413,x:766.45},0).wait(1).to({scaleX:0.9344,x:752.05},0).wait(1).to({scaleX:0.9275,x:737.7},0).wait(1).to({scaleX:0.9206,x:723.3},0).wait(1).to({scaleX:0.9137,x:708.9},0).wait(1).to({scaleX:0.9068,x:694.5},0).wait(1).to({scaleX:0.8998,x:680.1},0).wait(1).to({scaleX:0.8929,x:665.75},0).wait(1).to({scaleX:0.886,x:651.35},0).wait(1).to({scaleX:0.8791,x:636.95},0).wait(1).to({scaleX:0.8722,x:622.55},0).wait(1).to({scaleX:0.8653,x:608.2},0).wait(1).to({scaleX:0.8584,x:593.85},0).wait(1).to({scaleX:0.8515,x:579.45},0).wait(1).to({scaleX:0.8446,x:565.05},0).wait(1).to({scaleX:0.8377,x:550.65},0).wait(1).to({scaleX:0.8307,x:536.25},0).wait(1).to({scaleX:0.8238,x:521.85},0).wait(1).to({scaleX:0.8169,x:507.5},0).wait(1).to({scaleX:0.81,x:493.1},0).wait(1).to({scaleX:0.8031,x:478.7},0).wait(1).to({scaleX:0.7962,x:464.3},0).wait(1).to({scaleX:0.7893,x:449.9},0).wait(1).to({scaleX:0.7824,x:435.55},0).wait(1).to({scaleX:0.7755,x:421.15},0).wait(1).to({scaleX:0.7685,x:406.75},0).wait(1).to({scaleX:0.7616,x:392.35},0).wait(1).to({scaleX:0.7547,x:377.95},0).wait(1).to({scaleX:0.7478,x:363.6},0).wait(1).to({scaleX:0.7409,x:349.2},0).wait(1).to({scaleX:0.734,x:334.85},0).wait(1).to({scaleX:0.7271,x:320.45},0).wait(1).to({scaleX:0.7202,x:306.05},0).wait(1).to({scaleX:0.7133,x:291.65},0).wait(1).to({scaleX:0.7063,x:277.3},0).wait(1).to({scaleX:0.6994,x:262.9},0).wait(1).to({scaleX:0.6925,x:248.5},0).wait(1).to({scaleX:0.6856,x:234.1},0).wait(1).to({scaleX:0.6787,x:219.7},0).wait(1).to({scaleX:0.6718,x:205.35},0).wait(1).to({scaleX:0.6649,x:190.95},0).wait(1).to({scaleX:0.658,x:176.55},0).wait(1).to({scaleX:0.6511,x:162.15},0).wait(1).to({scaleX:0.6441,x:147.75},0).wait(1).to({scaleX:0.6372,x:133.4},0).wait(1).to({scaleX:0.6468,x:118.95},0).wait(1).to({scaleX:0.6564,x:104.45},0).wait(1).to({scaleX:0.6659,x:90},0).wait(1).to({scaleX:0.6755,x:75.55},0).wait(1).to({scaleX:0.6851,x:61.05},0).wait(1).to({scaleX:0.6946,x:46.55},0).wait(1).to({scaleX:0.7042,x:32.05},0).wait(1).to({scaleX:0.7114,x:17.6},0).wait(1).to({scaleX:0.7185,x:3.15},0).wait(1).to({scaleX:0.7257,x:-11.35},0).wait(1).to({scaleX:0.7329,x:-25.8},0).wait(1).to({scaleX:0.7401,x:-40.3},0).wait(1).to({scaleX:0.7472,x:-54.75},0).wait(1).to({scaleX:0.7544,x:-69.2},0).wait(1).to({scaleX:0.7616,x:-83.7},0).wait(1).to({scaleX:0.7688,x:-98.15},0).wait(1).to({scaleX:0.7759,x:-112.65},0).wait(1).to({scaleX:0.7831,x:-127.1},0).wait(1).to({scaleX:0.7903,x:-141.55},0).wait(1).to({scaleX:0.7975,x:-156},0).wait(1).to({scaleX:0.8046,x:-170.5},0).wait(1).to({scaleX:0.8118,x:-184.95},0).wait(1).to({scaleX:0.819,x:-199.45},0).wait(1).to({scaleX:0.8262,x:-213.9},0).wait(1).to({scaleX:0.8333,x:-228.4},0).wait(1).to({scaleX:0.8405,x:-242.85},0).wait(1).to({scaleX:0.8477,x:-257.35},0).wait(1).to({scaleX:0.8549,x:-271.8},0).wait(1).to({scaleX:0.862,x:-286.3},0).wait(1).to({scaleX:0.8692,x:-300.7},0).wait(1).to({scaleX:0.8764,x:-315.2},0).wait(1).to({scaleX:0.8836,x:-329.65},0).wait(1).to({scaleX:0.8907,x:-344.1},0).wait(1).to({scaleX:0.8979,x:-358.6},0).wait(1).to({scaleX:0.9051,x:-373.05},0).wait(1).to({scaleX:0.9123,x:-387.55},0).wait(1).to({scaleX:0.9194,x:-402},0).wait(1).to({scaleX:0.9266,x:-416.5},0).wait(1).to({scaleX:0.9338,x:-430.95},0).wait(1).to({scaleX:0.941,x:-445.45},0).wait(1).to({scaleX:0.9481,x:-459.85},0).wait(1).to({scaleX:0.9553,x:-474.35},0).wait(1).to({scaleX:0.9625,x:-488.8},0).wait(1).to({scaleX:0.9697,x:-503.3},0).wait(1).to({scaleX:0.9768,x:-517.75},0).wait(1).to({scaleX:0.984,x:-532.25},0).wait(1).to({scaleX:0.9912,x:-546.7},0).wait(1).to({scaleX:0.9984,x:-561.15},0).wait(1).to({scaleX:1.0055,x:-575.65},0).wait(1).to({scaleX:1.0127,x:-590.1},0).to({_off:true},1).wait(71).to({_off:false,regX:130.5,regY:36,scaleX:1,scaleY:1,x:-284.9,y:250.75},0).wait(1).to({regX:136.1,regY:41.5,scaleX:0.9995,x:-260.8,y:256.65},0).wait(1).to({scaleX:0.9991,x:-242.3,y:257.1},0).wait(1).to({scaleX:0.9986,x:-223.85,y:257.55},0).wait(1).to({scaleX:0.9982,x:-205.4,y:258},0).wait(1).to({scaleX:0.9977,x:-186.9,y:258.45},0).wait(1).to({scaleX:0.9973,x:-168.4,y:258.9},0).wait(1).to({scaleX:0.9968,x:-150,y:259.35},0).wait(1).to({scaleX:0.9964,x:-131.5,y:259.8},0).wait(1).to({scaleX:0.9959,x:-113,y:260.25},0).wait(1).to({scaleX:0.9955,x:-94.55,y:260.7},0).wait(1).to({scaleX:0.995,x:-76.1,y:261.15},0).wait(1).to({scaleX:0.9946,x:-57.6,y:261.55},0).wait(1).to({scaleX:0.9941,x:-39.15,y:262},0).wait(1).to({scaleX:0.9937,x:-20.65,y:262.45},0).wait(1).to({scaleX:0.9932,x:-2.15,y:262.9},0).wait(1).to({scaleX:0.9928,x:16.25,y:263.35},0).wait(1).to({scaleX:0.9923,x:34.75,y:263.8},0).wait(1).to({scaleX:0.9919,x:53.25,y:264.25},0).wait(1).to({scaleX:0.9914,x:71.7,y:264.7},0).wait(1).to({scaleX:0.991,x:90.15,y:265.15},0).wait(1).to({scaleX:0.9905,x:108.65,y:265.6},0).wait(1).to({scaleX:0.9901,x:127.1,y:266.05},0).wait(1).to({scaleX:0.9896,x:145.55,y:266.5},0).wait(1).to({scaleX:0.9892,x:164.05,y:266.9},0).wait(1).to({scaleX:0.9887,x:182.45,y:267.35},0).wait(1).to({scaleX:0.9883,x:200.95,y:267.8},0).wait(1).to({scaleX:0.9878,x:219.45,y:268.25},0).wait(1).to({scaleX:0.9874,x:237.9,y:268.7},0).wait(1).to({scaleX:0.9869,x:256.35,y:269.15},0).wait(1).to({scaleX:0.9865,x:274.85,y:269.6},0).wait(1).to({scaleX:0.986,x:293.3,y:270.05},0).wait(1).to({scaleX:0.9856,x:311.8,y:270.5},0).wait(1).to({scaleX:0.9851,x:330.3,y:270.95},0).wait(1).to({scaleX:0.9847,x:348.7,y:271.4},0).wait(1).to({scaleX:0.9842,x:367.2,y:271.85},0).wait(1).to({scaleX:0.9838,x:385.7,y:272.25},0).wait(1).to({scaleX:0.9833,x:404.15,y:272.7},0).wait(1).to({scaleX:0.9829,x:422.6,y:273.15},0).wait(1).to({scaleX:0.9824,x:441.1,y:273.6},0).wait(1).to({scaleX:0.982,x:459.55,y:274.05},0).wait(1).to({scaleX:0.9816,x:478.05,y:274.5},0).wait(1).to({scaleX:0.9811,x:496.55,y:274.95},0).wait(1).to({scaleX:0.9807,x:514.95,y:275.4},0).wait(1).to({scaleX:0.9802,x:533.45,y:275.85},0).wait(1).to({scaleX:0.9798,x:551.95,y:276.3},0).wait(1).to({scaleX:0.9793,x:570.4,y:276.75},0).wait(1).to({scaleX:0.9789,x:588.85,y:277.2},0).wait(1).to({scaleX:0.9784,x:607.35,y:277.6},0).wait(1).to({scaleX:0.978,x:625.85,y:278.05},0).wait(1).to({scaleX:0.9775,x:644.3,y:278.5},0).wait(1).to({scaleX:0.9771,x:662.8,y:278.95},0).wait(1).to({scaleX:0.9766,x:681.25,y:279.4},0).wait(1).to({scaleX:0.9762,x:699.7,y:279.85},0).wait(1).to({scaleX:0.9757,x:718.2,y:280.3},0).wait(1).to({scaleX:0.9753,x:736.7,y:280.75},0).wait(1).to({scaleX:0.9748,x:755.1,y:281.2},0).wait(1).to({scaleX:0.9744,x:773.6,y:281.65},0).wait(1).to({scaleX:0.9739,x:792.1,y:282.1},0).wait(1).to({scaleX:0.9735,x:810.55,y:282.55},0).wait(1).to({scaleX:0.973,x:829,y:282.95},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_stop_music = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// stop_music
	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.parent = this;
	this.replay.setTransform(-1.8,286.35,0.9999,0.9999,0,0,0,0.1,0.1);
	this.replay._off = true;
	new cjs.ButtonHelper(this.replay, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.replay).wait(767).to({_off:false},0).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_runing_boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// runing_boy
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(962.4,391.75,0.0216,0.0216,0,0,180,4644.4,-4743.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(445).to({_off:false},0).wait(1).to({regX:4762.8,regY:-3674.5,x:939.2,y:414.85},0).wait(1).to({regX:4628.3,regY:-4730.1,x:921.1,y:391.7},0).wait(1).to({regX:4762.8,regY:-3674.5,x:904,y:414.55},0).wait(1).to({x:889.8},0).wait(1).to({x:875.55},0).wait(1).to({x:861.35},0).wait(1).to({x:847.1},0).wait(1).to({x:832.85},0).wait(1).to({x:818.65},0).wait(1).to({x:804.4},0).wait(1).to({x:790.2},0).wait(1).to({x:775.95},0).wait(1).to({x:761.7},0).wait(1).to({x:747.5},0).wait(1).to({x:733.25},0).wait(1).to({x:719.05},0).wait(1).to({x:704.8},0).wait(1).to({x:690.6},0).wait(1).to({x:676.35},0).wait(1).to({x:662.1},0).wait(1).to({x:647.9},0).wait(1).to({x:633.65},0).wait(1).to({x:619.45},0).wait(1).to({x:605.2},0).wait(1).to({x:590.95},0).wait(1).to({x:576.75},0).wait(1).to({x:562.5},0).wait(1).to({x:548.3},0).wait(1).to({x:534.05},0).wait(1).to({x:519.8},0).wait(1).to({x:505.6},0).wait(1).to({x:491.35},0).wait(1).to({x:477.15},0).wait(1).to({x:462.9},0).wait(1).to({x:448.7},0).wait(1).to({x:434.45},0).wait(1).to({x:420.2},0).wait(1).to({x:406},0).wait(1).to({x:391.75},0).wait(1).to({x:377.55},0).wait(1).to({x:363.3},0).wait(1).to({x:349.05},0).wait(1).to({x:334.85},0).wait(1).to({x:320.6},0).wait(1).to({x:306.4},0).wait(1).to({x:292.15},0).wait(1).to({x:277.95},0).wait(1).to({x:263.7},0).wait(1).to({x:249.45},0).wait(1).to({x:235.25},0).wait(1).to({x:221},0).wait(1).to({x:206.8},0).wait(1).to({x:192.55},0).wait(1).to({x:178.3},0).wait(1).to({x:164.1},0).wait(1).to({x:149.85},0).wait(1).to({x:135.65},0).wait(1).to({x:121.4},0).wait(1).to({x:107.15},0).wait(1).to({x:92.95},0).wait(1).to({x:78.7},0).wait(1).to({x:64.5},0).wait(1).to({x:50.25},0).wait(1).to({x:36.05},0).wait(1).to({x:21.8},0).wait(1).to({x:7.55},0).wait(1).to({x:-6.65},0).wait(1).to({x:-20.9},0).wait(1).to({x:-35.1},0).wait(1).to({x:-49.35},0).wait(1).to({x:-63.6},0).wait(1).to({x:-77.8},0).wait(1).to({x:-92.05},0).wait(1).to({x:-106.2},0).wait(1).to({x:-120.45},0).wait(1).to({x:-134.65},0).wait(1).to({x:-148.9},0).wait(1).to({x:-163.15},0).wait(1).to({x:-177.35},0).wait(1).to({x:-191.6},0).wait(1).to({x:-205.8},0).wait(1).to({x:-220.05},0).wait(1).to({x:-234.3},0).wait(1).to({x:-248.5},0).wait(1).to({x:-262.75},0).wait(1).to({x:-276.95},0).wait(1).to({x:-291.2},0).wait(1).to({x:-305.45},0).wait(1).to({x:-319.65},0).wait(1).to({x:-333.9},0).wait(1).to({x:-348.1},0).wait(1).to({x:-362.35},0).wait(1).to({x:-376.55},0).wait(1).to({x:-390.8},0).wait(1).to({x:-405.05},0).wait(1).to({x:-419.25},0).wait(1).to({x:-433.5},0).wait(1).to({x:-447.7},0).wait(1).to({x:-461.95},0).wait(1).to({x:-476.2},0).wait(1).to({x:-490.4},0).wait(1).to({x:-504.65},0).wait(1).to({x:-518.85},0).wait(1).to({x:-533.1},0).wait(1).to({x:-547.3},0).to({_off:true},1).wait(71).to({_off:false,regX:4538.9,regY:-4593.6,skewY:0,x:-232.55,y:383.95},0).wait(1).to({regX:4762.8,regY:-3674.5,x:-186.15,y:409.15},0).wait(1).to({x:-144.65,y:414.45},0).wait(1).to({x:-126.55,y:414.4},0).wait(1).to({x:-108.45,y:414.35},0).wait(1).to({x:-90.35,y:414.3},0).wait(1).to({x:-72.25,y:414.25},0).wait(1).to({x:-54.2,y:414.2},0).wait(1).to({x:-36.1,y:414.15},0).wait(1).to({x:-18,y:414.1},0).wait(1).to({x:0.1,y:414.05},0).wait(1).to({x:18.15,y:414},0).wait(1).to({x:36.25,y:413.95},0).wait(1).to({x:54.35,y:413.9},0).wait(1).to({x:72.45,y:413.85},0).wait(1).to({x:90.55,y:413.8},0).wait(1).to({x:108.55,y:413.75},0).wait(1).to({x:126.65,y:413.7},0).wait(1).to({x:144.75,y:413.65},0).wait(1).to({x:162.85,y:413.6},0).wait(1).to({x:180.9,y:413.55},0).wait(1).to({x:199,y:413.5},0).wait(1).to({x:217.1,y:413.45},0).wait(1).to({x:235.2,y:413.4},0).wait(1).to({x:253.25,y:413.35},0).wait(1).to({x:271.35,y:413.3},0).wait(1).to({x:289.45,y:413.25},0).wait(1).to({x:307.55,y:413.2},0).wait(1).to({x:325.65,y:413.15},0).wait(1).to({x:343.7,y:413.1},0).wait(1).to({x:361.8,y:413.05},0).wait(1).to({x:379.9,y:413},0).wait(1).to({x:398,y:412.95},0).wait(1).to({x:416.05,y:412.9},0).wait(1).to({x:434.15,y:412.85},0).wait(1).to({x:452.25,y:412.8},0).wait(1).to({x:470.35,y:412.75},0).wait(1).to({x:488.45,y:412.7},0).wait(1).to({x:506.5,y:412.65},0).wait(1).to({x:524.6,y:412.6},0).wait(1).to({x:542.7,y:412.55},0).wait(1).to({x:560.8,y:412.5},0).wait(1).to({x:578.85,y:412.45},0).wait(1).to({x:596.95,y:412.4},0).wait(1).to({x:615.05,y:412.35},0).wait(1).to({x:633.15,y:412.3},0).wait(1).to({x:651.2,y:412.25},0).wait(1).to({x:669.3,y:412.2},0).wait(1).to({x:687.4,y:412.15},0).wait(1).to({x:705.5,y:412.1},0).wait(1).to({x:723.6,y:412.05},0).wait(1).to({x:741.65,y:412},0).wait(1).to({x:759.75,y:411.95},0).wait(1).to({x:777.85,y:411.9},0).wait(1).to({x:795.95,y:411.85},0).wait(1).to({x:814,y:411.8},0).wait(1).to({x:832.1,y:411.75},0).wait(1).to({x:850.2,y:411.7},0).wait(1).to({x:868.3,y:411.65},0).wait(1).to({x:886.35,y:411.6},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_LION = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// LION
	this.instance = new lib.LION();
	this.instance.parent = this;
	this.instance.setTransform(1212.45,381.1,0.464,0.464,0,0,0,225.8,19.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(447).to({_off:false},0).wait(1).to({regX:284.1,regY:4.6,x:1224.5,y:374.25},0).wait(1).to({x:1209.55},0).wait(1).to({x:1194.6},0).wait(1).to({x:1179.6},0).wait(1).to({x:1164.65},0).wait(1).to({x:1149.7},0).wait(1).to({x:1134.7},0).wait(1).to({x:1119.75},0).wait(1).to({x:1104.8},0).wait(1).to({x:1089.8},0).wait(1).to({x:1074.85},0).wait(1).to({x:1059.9},0).wait(1).to({x:1044.95},0).wait(1).to({x:1029.95},0).wait(1).to({x:1015},0).wait(1).to({x:1000.05},0).wait(1).to({x:985.05},0).wait(1).to({x:970.1},0).wait(1).to({x:955.15},0).wait(1).to({x:940.15},0).wait(1).to({x:925.2},0).wait(1).to({x:910.25},0).wait(1).to({x:895.3},0).wait(1).to({x:880.3},0).wait(1).to({x:865.35},0).wait(1).to({x:850.4},0).wait(1).to({x:835.4},0).wait(1).to({x:820.45},0).wait(1).to({x:805.5},0).wait(1).to({x:790.5},0).wait(1).to({x:775.55},0).wait(1).to({x:760.6},0).wait(1).to({x:745.65},0).wait(1).to({x:730.65},0).wait(1).to({x:715.7},0).wait(1).to({x:700.75},0).wait(1).to({x:685.75},0).wait(1).to({x:670.8},0).wait(1).to({x:655.85},0).wait(1).to({x:640.85},0).wait(1).to({x:625.9},0).wait(1).to({x:610.95},0).wait(1).to({x:596},0).wait(1).to({x:581},0).wait(1).to({x:566.05},0).wait(1).to({x:551.1},0).wait(1).to({x:536.1},0).wait(1).to({x:521.15},0).wait(1).to({x:506.2},0).wait(1).to({x:491.2},0).wait(1).to({x:476.25},0).wait(1).to({x:461.3},0).wait(1).to({x:446.35},0).wait(1).to({x:431.35},0).wait(1).to({x:416.4},0).wait(1).to({x:401.45},0).wait(1).to({x:386.45},0).wait(1).to({x:371.5},0).wait(1).to({x:356.55},0).wait(1).to({x:341.55},0).wait(1).to({x:326.6},0).wait(1).to({x:311.65},0).wait(1).to({x:296.7},0).wait(1).to({x:281.7},0).wait(1).to({x:266.75},0).wait(1).to({x:251.8},0).wait(1).to({x:236.8},0).wait(1).to({x:221.85},0).wait(1).to({x:206.9},0).wait(1).to({x:191.9},0).wait(1).to({x:176.95},0).wait(1).to({x:162},0).wait(1).to({x:147.05},0).wait(1).to({x:132.05},0).wait(1).to({x:117.15},0).wait(1).to({x:102.2},0).wait(1).to({x:87.2},0).wait(1).to({x:72.25},0).wait(1).to({x:57.3},0).wait(1).to({x:42.3},0).wait(1).to({x:27.35},0).wait(1).to({x:12.4},0).wait(1).to({x:-2.55},0).wait(1).to({x:-17.55},0).wait(1).to({x:-32.5},0).wait(1).to({x:-47.45},0).wait(1).to({x:-62.45},0).wait(1).to({x:-77.4},0).wait(1).to({x:-92.35},0).wait(1).to({x:-107.35},0).wait(1).to({x:-122.3},0).wait(1).to({x:-137.25},0).wait(1).to({x:-152.2},0).wait(1).to({x:-167.2},0).wait(1).to({x:-182.15},0).wait(1).to({x:-197.1},0).wait(1).to({x:-212.1},0).wait(1).to({x:-227.05},0).wait(1).to({x:-242},0).wait(1).to({x:-257},0).to({_off:true},1).wait(86).to({_off:false,regX:225.2,regY:19.4,skewY:180,x:-614.45,y:381.1},0).wait(1).to({regX:284.1,regY:4.6,x:-613.2,y:374.2},0).wait(1).to({x:-584.65},0).wait(1).to({x:-556.1},0).wait(1).to({x:-527.55},0).wait(1).to({x:-499},0).wait(1).to({x:-470.45},0).wait(1).to({x:-441.95},0).wait(1).to({x:-413.4},0).wait(1).to({x:-384.85},0).wait(1).to({x:-356.3},0).wait(1).to({x:-327.75},0).wait(1).to({x:-299.2},0).wait(1).to({x:-270.7},0).wait(1).to({x:-242.15},0).wait(1).to({x:-213.6},0).wait(1).to({x:-185.05},0).wait(1).to({x:-156.5},0).wait(1).to({x:-128},0).wait(1).to({x:-99.45},0).wait(1).to({x:-70.95},0).wait(1).to({x:-42.4},0).wait(1).to({x:-13.85},0).wait(1).to({x:14.7},0).wait(1).to({x:43.25},0).wait(1).to({x:71.8},0).wait(1).to({x:100.3},0).wait(1).to({x:128.85},0).wait(1).to({x:157.4},0).wait(1).to({x:185.95},0).wait(1).to({x:214.5},0).wait(1).to({x:243.05},0).wait(1).to({x:271.6},0).wait(1).to({x:300.1},0).wait(1).to({x:328.65},0).wait(1).to({x:357.2},0).wait(1).to({x:385.75},0).wait(1).to({x:414.3},0).wait(1).to({x:442.85},0).wait(1).to({x:471.35},0).wait(1).to({x:499.9},0).wait(1).to({x:528.45},0).wait(1).to({x:557},0).wait(1).to({x:585.55},0).wait(1).to({x:614.1},0).wait(1).to({x:642.65},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.start = new lib.start();
	this.start.name = "start";
	this.start.parent = this;
	this.start.setTransform(527.35,448.75,1,1,0,0,0,107.9,26.9);
	new cjs.ButtonHelper(this.start, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

}).prototype = getMCSymbolPrototype(lib.Scene_1_Layer_4, null, null);


(lib.Scene_1_girl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// girl
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(100.95,372.75,1,1,0,0,0,-233.3,36.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-233.6,regY:40.9,x:104.7,y:376.85},0).wait(1).to({x:104.9,y:376.8},0).wait(1).to({x:105.1},0).wait(1).to({x:105.3},0).wait(1).to({x:105.5},0).wait(1).to({x:105.7},0).wait(1).to({x:105.9},0).wait(1).to({x:108.6},0).wait(1).to({x:111.25,y:376.75},0).wait(1).to({x:113.95},0).wait(1).to({x:116.6},0).wait(1).to({x:119.25},0).wait(1).to({x:121.95},0).wait(1).to({x:124.6},0).wait(1).to({x:127.3},0).wait(1).to({x:129.95},0).wait(1).to({x:132.65,y:376.7},0).wait(1).to({x:135.3},0).wait(1).to({x:137.95},0).wait(1).to({x:140.65},0).wait(1).to({x:143.3},0).wait(1).to({x:146},0).wait(1).to({x:148.65},0).wait(1).to({x:151.35},0).wait(1).to({x:154,y:376.65},0).wait(1).to({x:156.65},0).wait(1).to({x:159.35},0).wait(1).to({x:162},0).wait(1).to({x:164.7},0).wait(1).to({x:167.35},0).wait(1).to({x:170.05},0).wait(1).to({x:172.7},0).wait(1).to({x:175.35,y:376.6},0).wait(1).to({x:178.05},0).wait(1).to({x:180.7},0).wait(1).to({x:183.4},0).wait(1).to({x:186.05},0).wait(1).to({x:188.75},0).wait(1).to({x:191.4},0).wait(1).to({x:194.05,y:376.55},0).wait(1).to({x:196.75},0).wait(1).to({x:199.4},0).wait(1).to({x:202.1},0).wait(1).to({x:204.75},0).wait(1).to({x:207.45},0).wait(1).to({x:210.1},0).wait(1).to({x:212.75},0).wait(1).to({x:215.45,y:376.5},0).wait(1).to({x:218.1},0).wait(1).to({x:220.8},0).wait(1).to({x:223.45},0).wait(1).to({x:226.15},0).wait(1).to({x:228.8},0).wait(1).to({x:231.45},0).wait(1).to({x:234.15},0).wait(1).to({x:236.8,y:376.45},0).wait(1).to({x:239.5},0).wait(1).to({x:242.15},0).wait(1).to({x:244.85},0).wait(1).to({x:247.5},0).wait(1).to({x:250.15},0).wait(1).to({x:252.85},0).wait(1).to({x:255.5},0).wait(1).to({x:258.2,y:376.4},0).wait(1).to({x:260.85},0).wait(1).to({x:263.55},0).wait(1).to({x:266.2},0).wait(1).to({x:268.85},0).wait(1).to({x:271.55},0).wait(1).to({x:274.2},0).wait(1).to({x:276.9},0).wait(1).to({x:279.55,y:376.35},0).wait(1).to({x:282.25},0).wait(1).to({x:284.9},0).wait(1).to({x:287.55},0).wait(1).to({x:290.25},0).wait(1).to({x:292.9},0).wait(1).to({x:295.6},0).wait(1).to({x:298.25},0).wait(1).to({x:300.95,y:376.3},0).wait(1).to({x:303.6},0).wait(1).to({x:306.25},0).wait(1).to({x:308.95},0).wait(1).to({x:311.6},0).wait(1).to({x:314.3},0).wait(1).to({x:316.95},0).wait(1).to({x:319.65},0).to({_off:true},1).wait(259).to({_off:false,regX:-229.3,regY:38.7,scaleX:1.1842,scaleY:1.1842,x:342,y:349.8},0).wait(1).to({regX:-233.6,regY:40.9,x:337.1,y:352.35},0).wait(1).to({x:337.3},0).wait(1).to({x:337.5},0).wait(1).to({x:337.75},0).wait(1).to({x:337.95},0).wait(1).to({x:338.15},0).wait(1).to({x:338.4},0).wait(1).to({x:338.6},0).wait(1).to({x:338.8},0).wait(1).to({x:339.05},0).wait(1).to({x:339.25},0).wait(1).to({x:339.45},0).wait(1).to({x:339.7},0).wait(1).to({x:339.9},0).wait(1).to({x:340.1},0).wait(1).to({x:340.35},0).wait(1).to({x:340.55},0).wait(1).to({x:340.75},0).wait(1).to({x:341},0).wait(1).to({x:341.2},0).wait(1).to({x:341.4},0).wait(1).to({x:341.65},0).wait(1).to({x:341.85},0).wait(1).to({x:342.05},0).wait(1).to({x:342.3},0).wait(1).to({x:342.5},0).wait(1).to({x:342.7},0).wait(1).to({x:342.95},0).wait(1).to({x:343.15},0).wait(1).to({x:343.35},0).wait(1).to({x:343.55},0).wait(1).to({x:343.8},0).wait(1).to({x:344},0).wait(1).to({x:344.2},0).wait(1).to({x:344.45},0).wait(1).to({x:344.65},0).wait(1).to({x:344.85},0).wait(1).to({x:345.1},0).wait(1).to({x:345.3},0).wait(1).to({x:345.5},0).wait(1).to({x:345.75},0).wait(1).to({x:345.95},0).wait(1).to({x:346.15},0).wait(1).to({x:346.4},0).wait(1).to({x:346.6},0).wait(1).to({x:346.8},0).wait(1).to({x:347.05},0).wait(1).to({x:347.25},0).wait(1).to({x:347.45},0).wait(1).to({x:347.7},0).wait(1).to({x:347.9},0).wait(1).to({x:348.1},0).wait(1).to({x:348.35},0).wait(1).to({x:348.55},0).wait(1).to({x:348.75},0).wait(1).to({x:349},0).wait(1).to({x:349.2},0).wait(1).to({x:349.4},0).wait(1).to({x:349.65},0).wait(1).to({x:349.85},0).wait(1).to({x:350.05},0).wait(1).to({x:350.25},0).wait(1).to({x:350.5},0).wait(1).to({x:350.7},0).wait(1).to({x:350.9},0).wait(1).to({x:351.15},0).wait(1).to({x:351.35},0).wait(1).to({x:351.55},0).wait(1).to({x:351.8},0).wait(1).to({x:352},0).wait(1).to({x:352.2},0).wait(1).to({x:352.45},0).wait(1).to({x:352.65},0).wait(1).to({x:352.85},0).wait(1).to({x:353.1},0).wait(1).to({x:353.3},0).wait(1).to({x:353.5},0).wait(1).to({x:353.75},0).wait(1).to({x:353.95},0).wait(1).to({x:354.15},0).wait(1).to({x:354.4},0).wait(1).to({x:354.6},0).wait(1).to({x:354.8},0).wait(1).to({x:355.05},0).wait(1).to({x:355.25},0).wait(1).to({x:355.45},0).wait(1).to({x:355.7},0).wait(1).to({x:355.9},0).wait(1).to({x:356.1},0).wait(1).to({x:356.35},0).wait(1).to({x:356.55},0).wait(1).to({x:356.75},0).wait(1).to({x:356.95},0).wait(1).to({x:357.2},0).wait(1).to({x:357.4},0).wait(1).to({x:357.6},0).wait(1).to({x:357.85},0).wait(1).to({x:358.05},0).wait(1).to({x:358.25},0).wait(1).to({x:358.5},0).wait(1).to({x:358.7},0).wait(1).to({x:358.9},0).wait(1).to({x:359.15},0).wait(1).to({x:359.35},0).wait(1).to({x:359.55},0).wait(1).to({x:359.8},0).wait(1).to({x:360},0).wait(1).to({x:360.2},0).wait(1).to({x:360.45},0).wait(1).to({x:360.65},0).wait(1).to({x:360.85},0).wait(1).to({x:361.1},0).wait(1).to({x:361.3},0).wait(1).to({x:361.5},0).wait(1).to({x:361.75},0).wait(1).to({x:361.95},0).wait(1).to({x:362.15},0).wait(1).to({x:362.4},0).wait(1).to({x:362.6},0).wait(1).to({x:362.8},0).wait(1).to({x:363.05},0).wait(1).to({x:363.25},0).wait(1).to({x:363.45},0).wait(1).to({x:363.65},0).wait(1).to({x:363.9},0).wait(1).to({x:364.1},0).wait(1).to({x:364.3},0).wait(1).to({x:364.55},0).wait(1).to({x:364.75},0).wait(1).to({x:364.95},0).wait(1).to({x:365.2},0).wait(1).to({x:365.4},0).wait(1).to({x:365.6},0).wait(1).to({x:365.85},0).wait(1).to({x:366.05},0).wait(1).to({x:366.25},0).wait(1).to({x:366.5},0).wait(1).to({x:366.7},0).wait(1).to({x:366.9},0).wait(1).to({x:367.15},0).wait(1).to({x:367.35},0).wait(1).to({x:367.55},0).wait(1).to({x:367.8},0).wait(1).to({x:368},0).wait(1).to({x:368.2},0).wait(1).to({x:368.45},0).wait(1).to({x:368.65},0).wait(1).to({x:368.85},0).wait(1).to({x:369.1},0).wait(1).to({x:369.3},0).wait(1).to({x:369.5},0).wait(1).to({x:369.7},0).wait(1).to({x:369.95},0).wait(1).to({x:370.15},0).wait(1).to({x:370.35},0).wait(1).to({x:370.6},0).wait(1).to({x:370.8},0).wait(1).to({x:371},0).wait(1).to({x:371.25},0).wait(1).to({x:371.45},0).wait(1).to({x:371.65},0).wait(1).to({x:371.9},0).wait(1).to({x:372.1},0).wait(1).to({x:372.3},0).wait(1).to({x:372.55},0).wait(1).to({x:372.75},0).wait(1).to({x:372.95},0).wait(1).to({x:373.2},0).wait(1).to({x:373.4},0).wait(1).to({x:373.6},0).wait(1).to({x:373.85},0).wait(1).to({x:374.05},0).wait(1).to({x:374.25},0).wait(1).to({x:374.5},0).wait(1).to({x:374.7},0).wait(1).to({x:374.9},0).wait(1).to({x:375.15},0).wait(1).to({x:375.35},0).wait(1).to({x:375.55},0).wait(1).to({x:375.8},0).wait(1).to({x:376},0).wait(1).to({x:376.2},0).wait(1).to({x:376.4},0).wait(1).to({x:376.65},0).wait(1).to({x:376.85},0).wait(1).to({x:377.05},0).wait(1).to({x:377.3},0).wait(1).to({x:377.5},0).wait(1).to({x:377.7},0).wait(1).to({x:377.95},0).wait(1).to({x:378.15},0).wait(1).to({x:378.35},0).wait(1).to({x:378.6},0).wait(1).to({x:378.8},0).wait(1).to({x:379},0).wait(1).to({x:379.25},0).wait(1).to({x:379.45},0).wait(1).to({x:379.65},0).wait(1).to({x:379.9},0).wait(1).to({x:380.1},0).wait(1).to({x:380.3},0).wait(1).to({x:380.55},0).wait(1).to({x:380.75},0).wait(1).to({x:380.95},0).wait(1).to({x:381.2},0).wait(1).to({x:381.4},0).wait(1).to({x:381.6},0).wait(1).to({x:381.85},0).wait(1).to({x:382.05},0).wait(1).to({x:382.25},0).wait(1).to({x:382.5},0).wait(1).to({x:382.7},0).wait(1).to({x:382.9},0).wait(1).to({x:383.1},0).wait(1).to({x:383.35},0).wait(1).to({x:383.55},0).wait(1).to({x:383.75},0).wait(1).to({x:384},0).wait(1).to({x:384.2},0).wait(1).to({x:384.4},0).wait(1).to({x:384.65},0).wait(1).to({x:384.85},0).wait(1).to({x:385.05},0).wait(1).to({x:385.3},0).wait(1).to({x:385.5},0).wait(1).to({x:385.7},0).wait(1).to({x:385.95},0).wait(1).to({x:386.15},0).wait(1).to({x:386.35},0).wait(1).to({x:386.6},0).wait(1).to({x:386.8},0).wait(1).to({x:387},0).wait(1).to({x:387.25},0).wait(1).to({x:387.45},0).wait(1).to({x:387.65},0).wait(1).to({x:387.9},0).wait(1).to({x:388.1},0).wait(1).to({x:388.3},0).wait(1).to({x:388.55},0).wait(1).to({x:388.75},0).wait(1).to({x:388.95},0).wait(1).to({x:389.2},0).wait(1).to({x:389.4},0).wait(1).to({x:389.6},0).wait(1).to({x:389.8},0).wait(1).to({x:390.05},0).wait(1).to({x:390.25},0).wait(1).to({x:390.45},0).wait(1).to({x:390.7},0).wait(1).to({x:390.9},0).wait(1).to({x:391.1},0).wait(1).to({x:391.35},0).wait(1).to({x:391.55},0).wait(1).to({x:391.75},0).wait(1).to({x:392},0).wait(1).to({x:392.2},0).wait(1).to({x:392.4},0).wait(1).to({x:392.65},0).wait(1).to({x:392.85},0).wait(1).to({x:393.05},0).wait(1).to({x:393.3},0).wait(1).to({x:393.5},0).wait(1).to({x:393.7},0).wait(1).to({x:393.95},0).wait(1).to({x:394.15},0).wait(1).to({x:394.35},0).wait(1).to({x:394.6},0).wait(1).to({x:394.8},0).wait(1).to({x:395},0).wait(1).to({x:395.25},0).wait(1).to({x:395.45},0).wait(1).to({x:395.65},0).wait(1).to({x:395.85},0).wait(1).to({x:396.1},0).wait(1).to({x:396.3},0).wait(1).to({x:396.5},0).wait(1).to({x:396.75},0).wait(1).to({x:396.95},0).wait(1).to({x:397.15},0).wait(1).to({x:397.4},0).wait(1).to({x:397.6},0).wait(1).to({x:397.8},0).wait(1).to({x:398.05},0).wait(1).to({x:398.25},0).wait(1).to({x:398.45},0).wait(1).to({x:398.7},0).wait(1).to({x:398.9},0).wait(1).to({x:399.1},0).wait(1).to({x:399.35},0).wait(1).to({x:399.55},0).wait(1).to({x:399.75},0).wait(1).to({x:400},0).wait(1).to({x:400.2},0).wait(1).to({x:400.4},0).wait(1).to({x:400.65},0).wait(1).to({x:400.85},0).wait(1).to({x:401.05},0).wait(1).to({x:401.3},0).wait(1).to({x:401.5},0).wait(1).to({x:401.7},0).wait(1).to({x:401.95},0).wait(1).to({x:402.15},0).wait(1).to({x:402.35},0).wait(1).to({x:402.55},0).wait(1).to({x:402.8},0).wait(1).to({x:403},0).wait(1).to({x:403.2},0).wait(1).to({x:403.45},0).wait(1).to({x:403.65},0).wait(1).to({x:403.85},0).wait(1).to({x:404.1},0).wait(1).to({x:404.3},0).wait(1).to({x:404.5},0).wait(1).to({x:404.75},0).wait(1).to({x:404.95},0).wait(1).to({x:405.15},0).wait(1).to({x:405.4},0).wait(1).to({x:405.6},0).wait(1).to({x:405.8},0).wait(1).to({x:406.05},0).wait(1).to({x:406.25},0).wait(1).to({x:406.45},0).wait(1).to({x:406.7},0).wait(1).to({x:406.9},0).wait(1).to({x:407.1},0).wait(1).to({x:407.35},0).wait(1).to({x:407.55},0).wait(1).to({x:407.75},0).wait(1).to({x:408},0).wait(1).to({x:408.2},0).wait(1).to({x:408.4},0).wait(1).to({x:408.65},0).wait(1).to({x:408.85},0).wait(1).to({x:409.05},0).wait(1).to({x:409.25},0).wait(1).to({x:409.5},0).wait(1).to({x:409.7},0).wait(1).to({x:409.9},0).wait(1).to({x:410.15},0).wait(1).to({x:410.35},0).wait(1).to({x:410.55},0).wait(1).to({x:410.8},0).wait(1).to({x:411},0).wait(1).to({x:411.2},0).wait(1).to({x:411.45},0).wait(1).to({x:411.65},0).wait(1).to({x:411.85},0).wait(1).to({x:412.1},0).wait(1).to({x:412.3},0).wait(1).to({x:412.5},0).wait(1).to({x:412.75},0).wait(1).to({x:412.95},0).wait(1).to({x:413.15},0).wait(1).to({x:413.4},0).wait(1).to({x:413.6},0).wait(1).to({x:413.8},0).wait(1).to({x:414.05},0).wait(1).to({x:414.25},0).wait(1).to({x:414.45},0).wait(1).to({x:414.7},0).wait(1).to({x:414.9},0).wait(1).to({x:415.1},0).wait(1).to({x:415.35},0).wait(1).to({x:415.55},0).wait(1).to({x:415.75},0).wait(1).to({x:415.95},0).wait(1).to({x:416.2},0).wait(1).to({x:416.4},0).wait(1).to({x:416.6},0).wait(1).to({x:416.85},0).wait(1).to({x:417.05},0).wait(1).to({x:417.25},0).wait(1).to({x:417.5},0).wait(1).to({x:417.7},0).wait(1).to({x:417.9},0).wait(1).to({x:418.15},0).wait(1).to({x:418.35},0).wait(1).to({x:418.55},0).wait(1).to({x:418.8},0).wait(1).to({x:419},0).wait(1).to({x:419.2},0).wait(1).to({x:419.45},0).wait(1).to({x:419.65},0).wait(1).to({x:419.85},0).wait(1).to({x:420.1},0).wait(1).to({x:420.3},0).wait(1).to({x:420.5},0).wait(1).to({x:420.75},0).wait(1).to({x:420.95},0).wait(1).to({x:421.15},0).wait(1).to({x:421.4},0).wait(1).to({x:421.6},0).wait(1).to({x:421.8},0).wait(1).to({x:422.05},0).wait(1).to({x:422.25},0).wait(1).to({x:422.45},0).wait(1).to({x:422.65},0).wait(1).to({x:422.9},0).wait(1).to({x:423.1},0).wait(1).to({x:423.3},0).wait(1).to({x:423.55},0).wait(1).to({x:423.75},0).wait(1).to({x:423.95},0).wait(1).to({x:424.2},0).wait(1).to({x:424.4},0).wait(1).to({x:424.6},0).wait(1).to({x:424.85},0).wait(1).to({x:425.05},0).wait(1).to({x:425.25},0).wait(1).to({x:425.5},0).wait(1).to({x:425.7},0).wait(1).to({x:425.9},0).wait(1).to({x:426.15},0).wait(1).to({x:426.35},0).wait(1).to({x:426.55},0).wait(1).to({x:426.8},0).wait(1).to({x:427},0).wait(1).to({x:427.2},0).wait(1).to({x:427.45},0).wait(1).to({x:427.65},0).wait(1).to({regX:-229,regY:38.7,x:433.05,y:349.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_falling = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// falling
	this.instance = new lib.shoe("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(301.3,422.95,0.9998,0.9998,-29.9982,0,0,6.5,6.6);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(285.7,419.85,0.9998,0.9998,0,0,0,6.8,6.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#6F5C56").ss(0.5,1,1).p("AgjgEIBIAJ");
	this.shape.setTransform(299.65,418.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#53382D").ss(0.5,1,1).p("AgNgXQAaAUACAQIgIAL");
	this.shape_1.setTransform(302.65,366.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#B77140").ss(0.5,1,1).p("AAAgHIAAABIAAACIAAAEIAAAI");
	this.shape_2.setTransform(301.2,364.15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AgKgQQAKAPALAS");
	this.shape_3.setTransform(312.9,327.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#523524").ss(0.5,1,1).p("AAdhiQhKBUAVBw");
	this.shape_4.setTransform(289.7203,376.35);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#94714E").ss(0.5,1,1).p("AAYgkIgFAHIgqBC");
	this.shape_5.setTransform(288.375,404.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#9FA2A1").ss(0.5,1,1).p("AgrAdIAQhDIBHAAIgPBN");
	this.shape_6.setTransform(300.45,415.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#9AA7A3").ss(0.5,1,1).p("AgPgtIgeA2IA4AlIAjg5QgHgDgHgDQgZgKgWgSg");
	this.shape_7.setTransform(287.625,412.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#5C3B28").ss(0.5,1,1).p("AgNAhIAQAFAgNAhQgJAIADANIAoALAgDhAIgKBh");
	this.shape_8.setTransform(288.2359,394.675);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#AA6E51").ss(0.5,1,1).p("AgdA4QAtg/AKgcQAEgKAAgK");
	this.shape_9.setTransform(295.2528,405.725);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#6D5F52").ss(0.5,1,1).p("Ag3AKIATgEIBJgLIATgE");
	this.shape_10.setTransform(301.925,399.475);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#C7A088").ss(0.5,1,1).p("AAlg+QABAGACAFQAHBAgRAyAgkgyQABAGABAFQAGAugNA4");
	this.shape_11.setTransform(301.9149,405.175);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AAygRIAAAAQgDgJgLgVIAAAAQgGgCgBAAQgdgCglASQgCADgBADQgWApAWAWQADADAEADQABAAAAAAQAHAFALAEQAGgBAEAAQASgDAJgFQABgCACgBQAHgBACgBQAJgHAEgJQAAgBAAAAQABgCABgCQAAgDABgDQABgDAAgEQAAgIgCgMgAAlgEQADgHAKgGAAaAnQgLgFgBgOAghAqQgCgQABgDAgEAyQgJgPABgHAAjAKQgCgIAEgGAAzAKQgFAHgJgV");
	this.shape_12.setTransform(294.0375,396.29);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#6C5F51").ss(0.5,1,1).p("AhXg1QgEABgJgJQACAPADAFQACACAIACAAaglIACALAAOgoIAAAPQgEAAgDAAQgIgBgJgBAA8gjQgQAGgQADAAOgoQAbAAARgIIACANQAGARAIgXAgOgpIASABQAGAAAEAAAAOgZQAIARAGgSABOgrQgCABgCABABHg2IADANABOgrQAGgEgBgOQgDACgJAFAA6gwQAIgEAFgCABdAmIAGgBIADAYAAQA3IBNgRABOgrIAPBR");
	this.shape_13.setTransform(297.4,392.35);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CE9E83").ss(0.5,1,1).p("AArBBQgEgJgDgIQgCgHgCgHQgJgmAKgqQACgJACgJAgfhWQgCAKgCAMQgKArAFArQABAIABAIQAEAfAHAS");
	this.shape_14.setTransform(292.7,384.775);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E39517").ss(0.5,1,1).p("AhYAdIAYgmIAAAXQAlgZACgrQAPAVgPAdQAVgHAGgHQAJgJADgFQAKgOAAgVQAEAcAJAOAB8iHQgKAMAQAAQAHABAQAAQgLAdgWAHQgWAHgLgIQAHAOgJASQgHARgGAIQgLANgLADAiYCIIAdgy");
	this.shape_15.setTransform(308.725,348.175);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAmAGIAAACIAAACAglgJIAQAQIAAAB");
	this.shape_16.setTransform(297.275,362.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#705E4F").ss(0.5,1,1).p("AgthoQgCgDAAgDQgBgMAOgPAAGiJQARADAPAIQABABAAAAQAEAOgFANQADgGADgGQAIAKAHANQAjBEgLBpAghiKIAAAAIABAAIAAAAQAAgBAAgBQAFAAAEAAAAUhVIAMABQAAgBABgCQADgFACgGAgthoQAUgZAUAFQAaAGgBAhQgBAagSArAAJgUIAAAUQAqAKAIgQIAAgdIgSAKIgcgHQADgKADgKIAoAAIAAARAAJgUQABgCABgBQABgEABgFAhNgrIgIAWQADAEAEADQAZAXArgDQADAAACAAIAGgWAAGB5QABAagFgIAhNgrQARAcA9gBAAEBrQgKg/APhAAhNgrQAQgoAQgVAATg0QAFgQAIgQ");
	this.shape_17.setTransform(297.45,377.6047);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgSAAQAAAAABAAQAEAAAFAAQAQAAANABAgUABQAAAAABAA");
	this.shape_18.setTransform(296,363.675);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#0777B7").ss(0.5,1,1).p("AgLgfQgQgMgJAcQAWAsAiAHQASgJgBgT");
	this.shape_19.setTransform(282.7058,358.0304);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AAJAAQAGAKgDAMAAJAAQgPAFAEAPAgMgVQAPAKAGAL");
	this.shape_20.setTransform(297.6391,352.35);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAbBSQAFgCAbgGQAbgGAQgKQAUgMAKgVQAFgJACgLQA+gZg2gWQAEgQgBgaAABATQgOABgKgEAgng4QAsgUAGAkAhzAqQADABACACQADABAEACQAOAGAPAFQAKAEAMAEQAHABAGACQA5ANAGABAirgCQAVAXAcAR");
	this.shape_21.setTransform(298.7123,355.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AAjh8QguAJgXAVQgTARgDAbQgCATAGAWQABAHADAGQgCADgBACQgPAcgbgBAgkB9QAEgmAtgOQAGgCAHgBQASgLAOgOQAPgQAKgUQAEgJACgJQADgKABgKQABgJAAgJQAAgBAAgCQAAgKgCgMAhAAzQgfAjAvAf");
	this.shape_22.setTransform(275.525,368.875);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgFADQABgBAJgE");
	this.shape_23.setTransform(284.6,340.825);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(0.5,1,1).p("AgKgPQAJAdAMAC");
	this.shape_24.setTransform(284.025,338.95);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#2F261D").ss(1,1,1).p("AieBiQgMgTgFgQQAigaAcgRQAYgOAYgMQADgCAEgBQBug8B8gc");
	this.shape_25.setTransform(294.25,335.375);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#745F4A").ss(1,1,1).p("AjaA1QgHgYABgaQABgrAWglQAgg1A3gZQADgCADgBQADgBADgBQAKgEAKgDQAMgEALgCQA8gPAkAKQAeAIAVAPQAIAGAHAHQAOAOAPAVAiQAwQgoAWgRASQgYA4AOAnQANgIAOgIQABgBABAAQAdgRAegQQAHgEAIgEQADgCADgBQCOhKC5hBQghgogmgRQgBAAgBgBQijA5hbArQgDACgDABQgOAHgLAG");
	this.shape_26.setTransform(298.5691,336.375);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#6D543C").s().p("AgHAAIgGANQAFgNgDgNIgCgBIAAgJQAaAUACAQIgJALQgGgNgHgLg");
	this.shape_27.setTransform(302.65,366.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#513412").s().p("AgFAXQgGgCgBgHQgCgIADgIQACgKAFgFQAFgGAFACQAGABABAHQACAIgDAIQgDAKgFAFQgEAFgDAAIgCAAgAgEgIIgDAGIgBAGQAAABABAAQAAABAAAAQAAABAAAAQABAAAAABIADgDIACgFQABgFAAgCQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAAAAAAAIgBgBQAAAAAAABQAAAAgBAAQAAAAAAABQgBAAAAABg");
	this.shape_28.setTransform(311.1044,350.8489);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgSFhIARhEIBHAAIgQBOgAiUEwIAeg3QAXASAZALIAOAFIgjA7gABRj9IA7AAQgKAVgUAMQgiAAAFghgAB2kiQgdgVAdgyQAGgCAGACIACAAIAGAAQAHADAEAKQADA6giAAIAAAAgAB/lTQgFAFgCAKQgDAJACAIQABAHAGACQAFABAFgGQAFgFADgKQADgJgCgIQgBgHgGgBIgCAAQgFAAgEAEgAB7k9IABgHIADgGQAAgBAAAAQABgBAAAAQABAAAAAAQAAAAABAAQAAAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQABACgCAFIgCAGIgDADQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAgBg");
	this.shape_29.setTransform(297.937,383.0125);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#D16826").s().p("AAEAEIgFAAIgCgBIgUgEQAJgJADgFQANgBAKAIQAEAIAIACIgJAOQgEgJgHgDg");
	this.shape_30.setTransform(311.3,346.4882);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EF9B68").s().p("AgLAtQgZgKgWgSIArhDIBKAKQgKAbguBAIgOgGg");
	this.shape_31.setTransform(291.95,406.275);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#E37C32").s().p("AgnABIAFgGQAGAEAMADIAKgBQARgBAJgGIAUgDQAAAJgEAKg");
	this.shape_32.setTransform(294.2778,401.125);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#EB9A65").s().p("AglABIBIgMIADALIhKAMIgBgLg");
	this.shape_33.setTransform(302.1,400.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#775740").s().p("Ag6A2QgDgNAJgIIARAFIgRgFIAKhhQACACAIACQAEAfAHASQgWApAWAWIAHAGIABAAIgEAHgAA3gfIAAAAIgHgCIgGgRIARACQABATgDAAIgCgCg");
	this.shape_34.setTransform(292.1192,394.675);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#8A7869").s().p("AAXAOIAAgOQAbAAARgIIANgHIADAOIgDgOIAMgGQABANgGAFIgEACQgIAVgGgQIgCgMIACAMQgQAGgQACIgCgKIACAKQgDAKgEAAQgDAAgEgIgAAQAOIgRgDIgEgMIASABIAKAAIAAAOIgHAAgAhWgCQgDgEgCgPQAJAJAEgBIACAOQgIgBgCgCgAAXAAIAAAAg");
	this.shape_35.setTransform(296.4821,388.4003);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#EC9D62").s().p("AgkACIAFgVQAZAYArgDIgEASQgmgDgfgPg");
	this.shape_36.setTransform(292.725,378.1);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#B29483").s().p("AgkAEIgGgGIAIgWQAQAbA9gBIgGAXIgFAAIgKAAQgkAAgWgVg");
	this.shape_37.setTransform(293.225,375.7414);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#7B5740").s().p("AgUBfQgKgnALgqIAEgRIAFgBIAGgWQARgrABgaIAMABIgNAgIgGAUIgCAJIgBACQgQBBALA+g");
	this.shape_38.setTransform(298.0244,378.65);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#7C583D").s().p("AgZBeQgVhwBKhUIACAHQgQAUgOAoIgIAWIAGAHIgFAVQgJArAFAsIgBABQgEAAgJgJg");
	this.shape_39.setTransform(289.8203,376.755);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#B19582").s().p("AgTC2IAJgCQAJgHADgJIAAgBIACgEIABgGIABgHQAAgJgCgMIAAAAQgDgJgKgVQAFAJgBgaIAGAAQAIARAHgSQAPgDAQgGQAHARAHgXIAFgCIAOBSIAGgBIADAYIgTAEIhJAMIgTAEIADgDgAAECfIBMgRgAgHA/QgLg/ARhAIAAAUIAAAAIACABIADABQAMADAJAAIAAAAIABAAQAQAAAFgKIABgBIAAgdIAAgQIgpAAIANggIABgDIAFgLIgFALIgBADIgMgCIAAgBQAAgggZgGIAAAAIgBAAIgFAAIAAAAIgBAAQgQAAgPATIgCACIgCgHQgBgLAOgQIABAAIAAAAIABgBIAAAAIABgCIAIAAIABABIgJAAIgBABIABgBIAJAAQAQAAANACQAQAEAPAIIACABQADANgFAOIAGgNQAIALAHANQAkBEgMBoIgMAHIgNAGQgRAIgcAAIgIAAgAAZgnQgJAAgMgDIgDgBIgCgBIAAAAIAAgUIABgCIABgJIAcAGIATgKIAAAdIgBABQgFAKgQAAIgBAAIAAAAgAhYhXQAPgoAQgUIACgCQAPgTAQAAIABAAIAAAAIAFAAIABAAIAAAAQAZAGAAAgIAAABQgBAagRAsIgEAAQg6AAgQgcgAABhLIAGgUIApAAIAAAQIgTAKgAABhLgAAwhPg");
	this.shape_40.setTransform(298.625,381.975);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#479DD8").s().p("AgkgPQAJgcAQAMQAUAYAcAPQABATgSAJQgigHgWgsg");
	this.shape_41.setTransform(282.7058,358.0304);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#F8C6A3").s().p("AgsFeQANg4gFguIBKgNQAGBBgRAygAhxDxIgBgBIgCgRIAAgBIAAABIACARIgIgGQgVgWAVgqIADgGIABgBQAhgPAbAAIABAAIAAAAIAGAAIAGACIABABQALAUACAJIAAAAQgKAGgDAHQADgHAKgGQADAMAAAKIgBAGIgDACQgEAAgIgQIAAgBIAAABQAIAQAEAAIADgCIgCAGIgBAEIgBACQgEAIgIAHIgKADQgKgGgBgOQABAOAKAGIgDACQgJAGgSACQgJgOAAgGIAAgCIAAACQAAAGAJAOIgKABQgMgEgGgEgAguDQIgBgFQAAgFADgFQgDAFAAAFIABAFgAgdDQIAAAAgAiFB5IgCgPQgEgsAJgsQAfAQAmACQgKAqAJAnIAEAOIAHARIgGAAIAAAAIgBAAQgbAAghAPIgBABIgDAGQgHgSgEgfgAgzCUIAAAAgAgoh+QgNgCgRAAIAAAAIgQgSIAMADIBAAPIAAACgAgKiAIAAgCIAAACIhAgPIgMgDIAcgyQAIADALAAIABAAIAAAAIAGAAIgGAAIAAAAIgBAAQgLAAgIgDQgcgOANg8QAsgTAHAkIAXgnIAAAYQAlgaABgrQAPAWgPAcQAVgHAHgHIAUAFQgGgBgFABQgdAzAcAUQAjABgDg6IAIgPQABAagEAQQA2AWg9AZQgDAMgEAJIg8AAQgEAhAhAAQgPAJgbAHIgfAIIgDAAIgBAAIABABIAAACIgBgBgAggjaIAAgHQAAgIgDgGQgGgNgQgKQAQAKAGANQADAGAAAIIAAAHgAgvjbIgBgGQAAgLANgDQgNADAAALIABAGgABPk7QAKgOAAgVQAEAcAKAOQgKgIgOABg");
	this.shape_42.setTransform(302.1873,376.45);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FECE00").s().p("AkDCeQgSABgHgHQgEgEAAgFQAbABAPgcIADgFIgFgOQgFgWACgTQACgbAUgRQBMgOgOA6IgBADIgGASIgHAPIgDAFIgCAFIgQAOQgUASgLARIAAABQgbAnARAhQgvgfAfgjgAglAdQgQgGgOgGIgGgDIgFgDQgHgXAMgYQACgGAEgGQA4hUEVhbIAXABQgKAcgWAIQgXAGgKgHQAHANgJATQgHARgHAIQgLAMgKAEQgIgEgFgIQgKgNgDgcQgBAVgJAOQgEAFgJAIQgGAHgWAIQAPgdgPgWQgBAsglAaIAAgZIgYAoQgHgkgrATQgNA7AbAPIgbAxIgWgHg");
	this.shape_43.setTransform(295.05,358.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FE9901").s().p("AjxDpIgKgGQgQgiAagmIAAgBQAMgSATgRIAQgPIADgEIACgGIAHgPIAGgRIABgEQAOg6hMAOQAXgUAvgJQAWAtAjAHIACAVIAAAEIgBARIgEAVQgCAJgEAKQgKATgPARQgOANgSALIgNADQguAOgEAmIgCgBgAhdAJQgcgPgVgZIgOgRIACgBIA6ggIAPgIIAHgEQCNhKC6hCQgKAMAQAAQkVBbg4BVQgEAGgDAGQgMAXAHAXIgHgEg");
	this.shape_44.setTransform(295.8452,357.95);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#1E1510").s().p("AgpADQAhgYAcgRQAJAeANABIgLAHQgnAUgRATQgMgUgEgQg");
	this.shape_45.setTransform(280.925,341.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#584A41").s().p("AibAsQAYgPAYgMIAGgEQBvg6B7gdIAXAiIgDgBQiiA4hcAsIgGADIgZANQgNgBgKgeg");
	this.shape_46.setTransform(298.45,333.025);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#7B5741").s().p("Ag6BUQARgTAogWIAKgGQgJAuATAuIg6AgIgCABIgbARQgOgnAYg4gAhRgBQABgrAWglQAgg1A2gaIAGgCIAGgDIAUgHIAXgGQgNAJgKAJIgUASIgGAHQg6BAALBNQgcARgiAZQgHgXABgag");
	this.shape_47.setTransform(284.2941,336.825);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#B19482").s().p("AinBCIAZgNIAHgDQBbgsCig4IADABQAmARAhAnQi6BCiNBKIgHADIgPAIQgSguAIgugAiOhpIAHgHIATgSQALgKAMgIQA+gPAjAKQAdAIAVAPQAJAGAHAHQAOAOAPAVQh7AchvA7IgHADQgYANgXAOQgMhMA7hAg");
	this.shape_48.setTransform(301.9062,333.875);

	this.instance_2 = new lib.head_gfall("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(295,349.9,0.9945,0.9945,0.9433,0,0,29.1,31.9);

	this.instance_3 = new lib.lhand("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(310.95,377.95,1.0387,1.0394,-29.9994,0,0,5,5.3);

	this.instance_4 = new lib.Hand("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(306.4,386.5,0.9999,0.9999,-90,0,0,5.2,4.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AADAXIAMADAgQgiQAkAbgDAiIgCgBAgCAhQAQAIABgP");
	this.shape_49.setTransform(289.5401,420.7422);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f().s("#BB7B57").ss(0.5,1,1).p("AAZg6QADAEABAHQADAgg8BK");
	this.shape_50.setTransform(295.6821,404.95);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#B1B1AF").ss(0.5,1,1).p("AA0gSIARADIgxA+IgNgGgAAHApIhLgdIA4g6QAcAbAkAB");
	this.shape_51.setTransform(285.9,412.525);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AA7g3QAAAHgCAHQgLBCgoAlAgPg9QABAFAAAHQgEAhgoAy");
	this.shape_52.setTransform(290.525,404.425);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f().s("#503522").ss(0.5,1,1).p("AAFgsIgFA+IAIADIgBAYIgOgB");
	this.shape_53.setTransform(299.025,394.65);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f().s("#6D5D50").ss(0.5,1,1).p("ABRCXIACAYIgSgCIhKgGIgzgFIgHgVIAQABgAhSANQAYhiBGhZABQBPIABBI");
	this.shape_54.setTransform(289.925,381.525);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f().s("#53392A").ss(0.5,1,1).p("AgGg/QADBnAKAY");
	this.shape_55.setTransform(282.375,389.225);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f().s("#B86D43").ss(0.5,1,1).p("AgngkIAHAJQADAAACAAQAPAAASgJAAoAgIhIgBIgEAG");
	this.shape_56.setTransform(305.625,379.375);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#CE9F81").ss(0.5,1,1).p("AA/gCQgbACgTgKQgKgKgBgUQAAgKABgLAhBgqQADArAXAdQAJAKAKAFQARAMAbADQATACAXgB");
	this.shape_57.setTransform(295.575,383.4167);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f().s("#503321").ss(0.5,1,1).p("AgGgYQAOAWgBAVIgMAG");
	this.shape_58.setTransform(301.478,367.575);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgJhcQAEgCAEgCQAkgTAOAuIAUAEQAGgHAGgMQAGANAEAOQAIAbgBAeQAAAfADAqAgFh1IATgRQALABAJACQAkAIAUARQgEANgFAJAAzghIAgAIIAAAOAAzghQgBAJgBALIAMAIIAWgGAAvgFIgCATQASANANgLIAHgbAAxgNQgBAEgBAEAgmBmQASAFATgBIAAASQACAWAQgZAg6BtQgDAWASgRIAFgMAg3BgQAIADAJADAg3BgIgDANAgrByQAVAGAVAEAgHAAQAaAFAcgKAgTATQAfAOAhgTAAxhFQAEAOgCAWAhbBgQAVAIAMAFAhkBGQAgATANAH");
	this.shape_59.setTransform(291.775,375.8079);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAAAKIABgT");
	this.shape_60.setTransform(300.85,364.075);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#E45C2A").s().p("AgIgGIAQABQADAFAAAGIgVABIACgNg");
	this.shape_61.setTransform(297.4,399.55);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#F09A67").s().p("AgaA9QAngmAMhBIAXgBQADAgg8BLgAgvgyQABgHgBgGIBKAHIgCAOIgRABQgcAAgbgJg");
	this.shape_62.setTransform(293.7571,404.55);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AAHApIAtg7IARADIgyA+gAAHApIhLgdIA4g6QAcAbAkABIgtA7g");
	this.shape_63.setTransform(285.9,412.525);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#7C5842").s().p("AgGAvIgBgYIgBhHIAOAHIgFA+IAJADIgBAYg");
	this.shape_64.setTransform(298.9,394.3);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#8E7769").s().p("AApAWQgWgEgUgGIAEgMIgEAMQgSARAEgWIACgMIgCAMIghgMIgKgaQAgATANAHIAQAFQASAFAUgBIAAASIAAgSQAJAKAJAFQgIANgFAAQgEAAgBgKg");
	this.shape_65.setTransform(287.55,386.0329);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#7A5640").s().p("AAABAQgLgYgDhoIAJAaIAFANQADA0AMAmg");
	this.shape_66.setTransform(283.175,389.275);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#F09A69").s().p("AAABiIAEg7QAPAAATgJIAiBGgAhHhjIA5AEIgCAVQgTgRgkgIg");
	this.shape_67.setTransform(302.425,372.625);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#EA7842").s().p("AgFgkIAGAJIAFAAIgFA5IgDAHQgDgpAAggg");
	this.shape_68.setTransform(302.225,379.4);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#F8C6A3").s().p("AhXCCQApg0ADghQAiAMAmgDQgMBCgnAmQgkgBgdgbgAAug1QgcgEgRgLQgJgGgJgKQgXgcgDgtQAiAMAlgKQABAVAKAKQATAKAbgDIADBBIgPAAIgbgBg");
	this.shape_69.setTransform(293.375,394.875);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#F19967").s().p("AgkAGIAIgNQAfANAhgSIgBAUQgRAFgQAAQgTAAgTgHg");
	this.shape_70.setTransform(292.65,378.5023);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#B19482").s().p("AAvC2IhKgHIg0gFIgHgUIAQABQgMgmgEg1IgFgNIAhANQgDAWASgRQAVAGAVAEQACAXAQgZQARALAcAEIABBIIiFgJICFAJIABAXgAgmA1IgRgGQgNgGgggUQAXhhBIhZIATgRIAUADQAkAHAUARQgEANgFAJQgGAMgGAIIgUgFIAUAFQAGgIAGgMQAGANAEAPQAIAagBAeQAAAgADApQgbADgTgKQgKgKgBgUIABgUIABAAQAJAGAIABIAAAAIAAAAQAHgBAFgEIAAAAIAAAAIABAAIAHgcIAAgOIgggJIABgMQAAgOgDgKQADAKAAAOIgBAMIgCAVIgCAIIACgIIAMAIIAWgGIgHAcIgBAAIAAAAIAAAAQgFAEgHABIAAAAIAAAAQgIgBgJgGIgBAAIACgUIgEABIgBABIgCAAIgBABQgQAEgOAAIAAAAIAAAAQgJAAgHgBQAHABAJAAIAAAAIAAAAQAOAAAQgEIABgBIACAAIABgBIAEgBIgCAUQghATgfgPIgIAOQADAsAXAcIgIABQgPAAgOgFgAAxh2IgBgDIAAgBQgKgcgTAAIgBAAIAAAAQgIAAgKAFIAAAAIgBABIgIAEIAIgEIABgBIAAAAQAKgFAIAAIAAAAIABAAQATAAAKAcIAAABIABADgAAtghIAAAAgAAxg9IACgVIAgAJIAAAOIgWAGgAAzhSg");
	this.shape_71.setTransform(291.775,380.675);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#7B5741").s().p("AgLgCQAFgJAEgNQAPAWgBAVIgMAGQgEgPgHgMg");
	this.shape_72.setTransform(301.028,367.575);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AgSgPIACATIAUASQAXgKgMgh");
	this.shape_73.setTransform(287.942,419.075);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#8E3B3E").ss(0.5,1,1).p("AgGACQAGgDAHAA");
	this.shape_74.setTransform(280.525,408.475);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#ACA193").ss(0.5,1,1).p("AA7AnIAAgBAALgbIgsAGIAwBBIAhgGIALAAIgbg7Ag6gZQADgRAJgBIgCAO");
	this.shape_75.setTransform(284.55,413.1);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#CFA48A").ss(0.5,1,1).p("AAMhDQAFACAEACQA9AcghA+QgzAmg5AD");
	this.shape_76.setTransform(296.5324,410.175);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#B96F48").ss(0.5,1,1).p("Aghg8QAHADADACQA2ANADA4QgPAlgYAK");
	this.shape_77.setTransform(302,406.75);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#6C5D4E").ss(0.5,1,1).p("AhbgpQgQAMAOAOQACABACACQgEAOAQgGQANAHAPAHAhbggQAEADAEADIgGAOAhTgaQAEAEAEADQADACACABIgHAMABQAiQAHAAAIAAQAEgGABgIQABgHgCgKABOATIACAPABBAiQADAQAMgQABCAXIgBALABCAXQAHgBAFgDQALgFADgMAAKAcQAHAWAKgUQASADAUABAAbATIAAALAALAQIgBAMAALAQQAJACAHABQAYAGAPgCAgcADIgGANQAVAIAXAEAgrgDQAIADAHADQAXAJAQAEAgrgDIgGANQACAVANgPAhGgQQAPAHAMAG");
	this.shape_78.setTransform(285.5024,397.1688);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#53392A").ss(0.5,1,1).p("AhahVQgXAkAAAmQAAAEABAFAhIhfQggA4AIAxAgaidQAGgKAPgEABOAyIANACIABgKIAbADIgJATAhzAOQgPBVBCAqQATAMAZAJQALADAKADQAIACAJACQiJgoAVhr");
	this.shape_79.setTransform(287.6785,394.175);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f().s("#E59A26").ss(0.5,1,1).p("AAwhuQgtgBgZAPQgjAUgBAyQAGA3gygGQgCAUAagCQgYA0AkAOQAIADAKABQgGgZAsgJQAWgGASgJQAJgFAJgGQAggXAOglQAIgXABgZ");
	this.shape_80.setTransform(275.5708,379.4468);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f().s("#007BBF").ss(0.5,1,1).p("AgRggQgLABgGANQAAABgBACQAVAtAfADQACAAABABQAJgCAHgQ");
	this.shape_81.setTransform(283.9,370.3);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f().s("#B8684D").ss(0.5,1,1).p("AgUAPQAXACASgHQgJgJgEgQ");
	this.shape_82.setTransform(301.35,394.2579);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f().s("#DDAE8C").ss(0.5,1,1).p("AgIgaIAFAIQAPgYACgQIBCAdQgIAXgLARQgNARgQANQgOALgRAGQgDAAgDAAQgEAAgDAAQgngGgVgpQgDgHgEgH");
	this.shape_83.setTransform(296.025,391.6);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f().s("#4F3B29").ss(0.5,1,1).p("AgFgNQALAFAAAW");
	this.shape_84.setTransform(297.3,379);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f().s("#6D5E54").ss(0.5,1,1).p("AAuiNQAEAMACAMQAAAEAAAEQAAAOgEAOIgCARIgRAGIAJANIAIgTAAEh8QAMAFAOACQAJgKAHgOQACgHACgIQgjgYgegJQgUADgKAYQAEAGAFAFQAQARAYAKQAKAYAFAQQABAHABAGIAIANAg0guIAHAaQAFAAAFAAQAdgBAdgPQAGgDAGgEQABgBACgBAAThUIAdADAg0guQgohgA4gJAg0guQAoAGAhgfAALCyIgDAKIATACIAhhaIAKgbIgXgIIgDAJgAgVC0QAUACAMgE");
	this.shape_85.setTransform(291.6917,393.325);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f().s("#AA7257").ss(0.5,1,1).p("AAlANIgGAJAgigKIgCgL");
	this.shape_86.setTransform(293.65,375.375);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f().s("#CC9D7A").ss(0.5,1,1).p("AB6g6QAAAJgDAJQgDAKgIALQATAOgFAKQgMARgYgCQgLAPgOAJAh6ANQApAXAhAMQBDAXAqgbAAqAHQACASgIAKQAHAOASgFAAkAjQgHAJgRAC");
	this.shape_87.setTransform(302.244,371.8718);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f().s("#4D320D").ss(0.5,1,1).p("AA9gFQAFADADACQAIALgFAPQgIgRgTAEAhJAHQAJgKALADQgBAGgHAIAhFgZQAKAFAEAHQADAGgBAH");
	this.shape_88.setTransform(303.2926,367.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f().s("#C59E7F").ss(0.5,1,1).p("AAaAKQAFgJgBgIQAAgCgBgDQgDgKgMgLQgdgXgNAnQgBACAAABQgCAaAJAOQAHANAPAD");
	this.shape_89.setTransform(296.7395,366.81);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f().s("#312919").ss(0.5,1,1).p("AjDAnQgJgRAEgUQAngIAngHQCbgeCiAGQAJAQgDAX");
	this.shape_90.setTransform(299.751,349.8671);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f().s("#6D5B48").ss(0.5,1,1).p("AjUAQQARiRDBgJQAJAAAJACQB+AWApBbAjzCKQAPgCAPgDQAfgHAlgFQCbgYDbgCQAHgCAHAAQgLglgrgoQiggHifAcQgmAHgnAJQgjAkgBAxg");
	this.shape_91.setTransform(300.95,348.45);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#D59C31").ss(0.5,1,1).p("AhkAZQATAEAPgGQAFgDAFgEQALgKAHgRQAFATgEARQgCAIgEAHQAGABAGgBQADAAACAAQAlgFAUgwQAsAVAagiQgQABgLgJQgEgDgDgC");
	this.shape_92.setTransform(317.125,362.0333);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#DB9D22").ss(0.5,1,1).p("AjggnQADAKAFAJQAIARAKAOQAKAPANANQAHgeAWgUQAzgwCDgCQBdAEBggPAgXgCIAggbIgDAYQAlgNAUgjQAEAbgRAOAivAnQAOAMAQAKQAMAHANAFIAtgl");
	this.shape_93.setTransform(302.05,365.825);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#F09A69").s().p("AghgfIAJgbQA3AOADA3QgPAlgYALQAgg+g8gcg");
	this.shape_94.setTransform(302,407);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#E53228").s().p("AgcAGIABgOQAHgEAGAAQASAMAZAIIgrAFg");
	this.shape_95.setTransform(282.65,409.575);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FDFDFD").s().p("AAQAtIgBgUIgwhBIArgGIAWAGIAcA8IgLgBIgiAGIAigGQAMAhgYALgAgug+IgBAOIgLAFQADgSAJgBg");
	this.shape_96.setTransform(284.55,415);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#DA7953").s().p("AgIAMIAIgbIAJAFIgJAaIgIgEg");
	this.shape_97.setTransform(298.625,402.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#E89F74").s().p("AAMgsIAJAFQgUBAgVAUg");
	this.shape_98.setTransform(296.5,407.85);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#755641").s().p("AgWAKQAEgGABgGIANABIABgKIAZADIgJASIgVgHIgEAJg");
	this.shape_99.setTransform(297.3,399.55);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#7C5841").s().p("AAzCCIgWgGQgZgJgSgMQhCgqAPhUIAEADQgDAPAQgGQgVBqCJAnIgRgEgAg2giIgIgGIgBgJQAAgmAXgkIASgKQggA4AIAyIgIgHg");
	this.shape_100.setTransform(282.6535,397.95);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#8E7A6A").s().p("ABBAiQgUgBgSgDQgKAUgHgWIABgMIgBAMQgXgEgVgIQgNAPgCgVIAGgNIgGANIgcgOIAHgMIAbANIAPAGIgGANIAGgNQAXAJAQAEIAQADIAAALIAAgLQAYAGAPgCIgBALIABgLQAHgBAFgDIACAPIgCgPQALgFADgMIAHABQACAKgBAHQgBAIgEAGIgPAAQgGAIgDAAQgEAAgCgIgAhZgMIAGgOIAIAHIAFADIgHAMQgEACgEAAQgGAAACgKgAhdgPQgOgOAQgMIAAAJIAIAGIgGAOIgEgDgAhGgQIAAAAg");
	this.shape_101.setTransform(285.5024,397.1688);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#D16729").s().p("AgQgKIAKgHQAKgBAIAJQgCAJgEAGIAMAAIgKAMQgFgRgTgLg");
	this.shape_102.setTransform(312.15,365.45);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#489ED6").s().p("AARAhQgfgDgVgtIABgDQAGgOALgBQALAPAMANQANALARAKQgHAQgJACIgDgBg");
	this.shape_103.setTransform(283.9,370.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#7B5741").s().p("AgBAPQgCgMgEgKIAEgQQALAGAAAVQgCARgHADIAAgJg");
	this.shape_104.setTransform(297.075,379.975);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#B19482").s().p("AgIAbQgFgRgKgWQAMAEANADQAJgKAHgOQAEAMABAMIABAHQAAANgEAPg");
	this.shape_105.setTransform(294.5,382.15);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#EC9C66").s().p("AgUAPQAQgNAMgRQAEAQAJAJQgNAGgQAAIgMgBg");
	this.shape_106.setTransform(301.35,394.2579);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#F89B63").s().p("AgdAAQAdAAAegPQgTAbghAEIgHgQg");
	this.shape_107.setTransform(291.025,391.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FECF00").s().p("AkdBcQgZACABgUQAyAGgGg4QABgxAkgUQB4ALh+BnQg1AfAPA6QglgOAYg0gAhWgXQgRgKgNgMQAHgeAWgVQAygwCEgCQBcAEBggPQALAJAQgBQgaAjgsgWQgUAxgmAFIgFAAIgMAAQAEgHACgIQAEgRgFgUQgHASgLAKIgKAHQgPAGgTgEQARgOgEgbQgTAjgmANIADgYIghAbQgDgKgMgLQgdgXgNAnIgBADQgCAbAJAOIgtAlQgNgFgLgHg");
	this.shape_108.setTransform(296.2208,374.325);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#F8C7A2").s().p("AhpEbIgcg9IASAFQAUABAMgEIgDAKIATADQAXgVAUhBQA8AcghA/QgzAmg5ADgAg4BXIgHAAQgngGgVgoQAigEATgcIALgGIAFAHQAQgXACgQIBBAdQgIAWgLASQgMASgQAMQgOALgRAGIgHAAgAglh4QghgLgpgYIAtglIABABQAHAMAOAEQgOgEgHgMIgBgBQgJgOACgbIABgDQANgnAeAXQAMAMADAKIABAEIAAADQAAAHgEAIQAEgIAAgHIAAgDIgBgEIAggcIgDAYQAmgNATgjQAEAbgRAPQATADAPgGQAUAMAFASIAKgNIAFAAQAAAIgDAJQgDALgIAKQATAOgFAMQgMARgYgCQgLAOgOAKIgBAAIAAAAIgHABIAAAAIgBAAQgLAAgFgKIAAAAQAGgJAAgOIAAgFIAAAFQAAAOgGAJIAAAAQAFAKALAAIABAAIAAAAIAHgBIAAAAIABAAQgXAOgeAAQgZAAgfgLgAAXh5QARgCAHgJQgHAJgRACgABei8QABgFAAgFQAAgJgFgGIgHgGIAHAGQAFAGAAAJQAAAFgBAFIgBgBQgGgNgOAAIAAAAIgBAAIgEABIgBAAIgBAAIABAAIABAAIAEgBIABAAIAAAAQAOAAAGANIABABgAgojIQAHgIABgHIAAAAIgEAAIAAAAIAAAAQgIAAgHAHIAAABIAAgBQAHgHAIAAIAAAAIAAAAIAEAAIAAAAQgBAHgHAIgAggjXIABgFQAAgEgCgEQgEgHgLgFQALAFAEAHQACAEAAAEIgBAFgAhtiPIgCgMQApAYAhALIgGAKQgkgXgegKgAhvibIAAAAgABnj6QALgKAHgSQAFAUgEARQgHgJgMAAg");
	this.shape_109.setTransform(301.144,388.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FE9B01").s().p("AkUCfQgOg7A1geQB+hoh5gLQAagOAtABIgBADQAVAuAgADIADABQgBAXgIAXQgOAmggAYIgSAKQgSAKgXAGQgsAJAGAZQgKgCgIgCgAiPhIQgKgPgIgRIgIgUQAfgHAlgFQCbgYDbgCIAHAFQhgAQhdgEQiDACgzAvQgWAVgHAeQgNgMgKgPg");
	this.shape_110.setTransform(296.5693,374.275);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#584B40").s().p("AihgFQCbgeChAGQAJAQgDAXQiggHieAcQgFgPABgVg");
	this.shape_111.setTransform(303.7042,349.0921);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B19582").s().p("AhYGCIADgKIAhhoIghBoQgNADgUgBQiKgoAVhrIAbAPQACAVAOgPQAVAIAXAEQAIAWAJgUQATADAUABQACAQANgQIAPAAIAKACIADgJIAXAHIgKAcIghBagAiCD/IgRgDQgQgEgXgJIgPgHIgbgNIgFgDQgIgyAgg4QAggYAOgmQAGgKAPgEQAKgXAUgEQAfAKAjAXIgEAQQgHAOgJAKQgOgDgMgEQgZgKgQgSIgJgLIAJALQAQASAZAKQAKAXAFAQIACANIgCgNIAdAEIAKAGQgDAQgQAXIgEgHIADgCIAIgUIgRAGIgIgNIAIANIAJAOIgDACIgMAHQgeAOgdACIAHAPQAVAoAmAGQgDAMgKAFQgFADgIABIgIAAQgNAAgRgEgAiOCwIAKABIgKgBIgHgZIABAAIAMABIAAAAIABAAQAggBAcgaQgcAaggABIgBAAIAAAAIgMgBIgBAAQgRgoAAgZQABgjAggGQggAGgBAjQAAAZARAogAgyCEIACgQgAg6CYIgJgOIARgGIgIAUgAiGjVQCfgcCgAHQArAoALAlQgHAAgHACQjbACibAYQgCgaARg6gAAMmDQB+AWApBbQiigGibAeQAThxCDgYg");
	this.shape_112.setTransform(301.3868,373.575);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#1E160F").s().p("AgngJQAmgKAngGQgBAWAFAOIhMAQQgJgRAEgTg");
	this.shape_113.setTransform(283.7385,351.1);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#7B5740").s().p("AhdA1IBNgQQgRA7ACAZQglAFggAHIgdAGQABgyAjgkgABviJQAKAAAJABQiEAYgSBwQgnAHgnAKQARiSDAgIg");
	this.shape_114.setTransform(289.6,348.45);

	this.instance_5 = new lib.heart("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(298.25,416.5,0.9093,0.4681,-29.9981,0,0,3,3.5);

	this.instance_6 = new lib.open_handr("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(322.45,413.85,0.8796,0.8796,0,0,0,6.7,6.8);

	this.instance_7 = new lib.open_hand("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(325.8,408.2,0.7802,0.7802,-14.9981,0,0,6.9,6.8);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f().s("#B96F48").ss(0.5,1,1).p("AgyhHIACAGIAnBVIBJAOIgfAlIgBABAg/g1IANAk");
	this.shape_115.setTransform(316.825,400.725);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f().s("#4D320D").ss(0.5,1,1).p("AgNAFQANAAAFAKQAGgFADgFQABgHgCgL");
	this.shape_116.setTransform(320.0281,384.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f().s("#CE9F81").ss(0.5,1,1).p("AgXhSIAKARIAKARIAlA+QAYAUAPACIAHAEAhPghQAAABABABQA8BlAZAHQAaAHADgBQADAAACAA");
	this.shape_117.setTransform(312.15,403.8268);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f().s("#8D3F2A").ss(0.5,1,1).p("AgIgNIAMAAAgOAOIAeAA");
	this.shape_118.setTransform(280.4,405);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f().s("#A0A9AA").ss(0.5,1,1).p("AAHA0QAJAEAIACIAWgrAgEArIgBhMIAMAFAgfgpIAGgbQgIAAgMAMAgEArQABAQgMAKQATgBADgQAgEArQAFAFAGAE");
	this.shape_119.setTransform(282.025,410.55);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f().s("#C39F83").ss(0.5,1,1).p("AhTAJQB+AxAfgrQAIgMACgSQAAgJgBgK");
	this.shape_120.setTransform(292.75,415.3978);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f().s("#B36C49").ss(0.5,1,1).p("AAQgmQAOAqgwAj");
	this.shape_121.setTransform(301.9818,413);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#0477BE").ss(0.5,1,1).p("AAPAiQgNAJgKgJQgTgaAZgtQAKgCAJAF");
	this.shape_122.setTransform(306.5898,378.6734);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#E79422").ss(0.5,1,1).p("Ah7AiQABAHADAIQARgbBLAxQATADARAAQAQABAPgCQAdgDAWgLQAEgDAEgCQAMgIAJgKAA/hIQBGBEhxAGQhzgSgcAyQgIgnAzgRQgSgSASgIQAXApAzgxQAigWAjAGQAgAGAfAf");
	this.shape_123.setTransform(293.7458,378.5334);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#725F4F").ss(0.5,1,1).p("AhigxQgCgDgBgDQABgMAKgEQAEAHADAHQADAGADAFQAIAPAJAOQAEAFAEAGQAOAQAPANQAGAFAGAEIgLAPQAQAIAQAFQACAWAPgUQAKABAKAAIAAgLIAAgDQALgGAKgIQAUgQARgTAhigxIAPgIAATAwQAHACAIABQAGABAHAAAATAwIgJAMAAiAzIgHALAhcgkIAPgKAhcgkQABADABACQAHAOAIAMIAAAAQgQAJAYACQgBgBAAgBIAQgKAhLgFIAPgMAgXAXIgMAPQgEAVARgMAhDAGQAPATARANAgLAgQAOAKAQAGAhigxQgQATAWgG");
	this.shape_124.setTransform(293.6503,400.7206);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#6F5846").ss(0.5,1,1).p("AArgeIAJAHIAJAHIgUANIhTAyIgJAGIgJgXgAAPg0IAVARIAHAF");
	this.shape_125.setTransform(296.925,412.325);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#573A27").ss(0.5,1,1).p("AhthGQAhgwBDgcACPhGQAHgEgBgKABIBCIAIgFIAPARIgPAHIgPAIAAxAkIAXAeAh4g2QgiApAHArQAEANAIAOQADAGAEAHQAOAVAZAXQAOAMARANQAFAEAHAEAAxBRIAXgP");
	this.shape_126.setTransform(295.5893,400.65);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#6B5D4B").ss(0.5,1,1).p("AAuhIIgOgOQgTACgQAHQgEACgEACIAAABIAEAaAghAsQAAgBAAAAQgvhIAlgPQABgBABAAQAPgJAPAGQACABABAAQAAABABAAQACABADACQAOAIATAfQAFAIAGAKIACACIAPARQgBACgBADQgQAfgjALQgGACgGABAAqAOQgFALgKAJQgHAFgIAEQgPAKgUAFQgFgIgFgGIgNALQAMAhAXgBIAFgEAA3gNIAGgCAAfgEIAYgJAAsAQQARgNgGgQAgbA7IAVAY");
	this.shape_127.setTransform(304.0474,391.7032);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#59330F").ss(0.5,1,1).p("AgMgNQAQANgHARQASgGgCgb");
	this.shape_128.setTransform(326.1142,395);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#CCA082").ss(0.5,1,1).p("AhkAWIAFADIAHADIAGgUQABACABADQAWAoAiAKQAGACAIACQALACANAAQAGAAAGgBQACACABABQATASAPgHQAKgGgBgWQAWgCAUgQAhxhTQACAKACAKQAEAUAHARQAHASAJAPIAAABAgZAoIAPAbAgqAdQAJAHAIAEQAUAHAMgT");
	this.shape_129.setTransform(320,392.823);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f().s("#DD9A2A").ss(0.5,1,1).p("AghAMIAdAAQgHALgPACQgBAAgCAAQACABABABQAnASAogKQgOAQgkAEQAOAKAMAFQAIAEAJAAQAQACASgHQgNATgQAKQgGADACAIQAqAhAogbQAUAxApgHQgMgHgBgRAi8g/QAFgEAHgEQAwgaBMApQAHAEAIAFQAFADAGAEQAdATAhAbQBIBRBFAuAi8g/QgBAPADAPQACALAEAMAiaidQgVAagIAdQgGATABAUACwBxQAAALABAJ");
	this.shape_130.setTransform(326.7464,385.5384);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f().s("#DB9D22").ss(0.5,1,1).p("AgmgFIAWAEIA3AH");
	this.shape_131.setTransform(312.475,385.025);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f().s("#C59E7F").ss(0.5,1,1).p("AAMAhQAAgBACgBQAFgBAEgEIAAAAQACgBABgCQABgBABAAQABgCABgBQACgEACgGQAAgBAAgBQABgEAAgDQABgCAAgEQgBgDAAgEQgBgGgDgDQAAgBgBgBIAAAAQgCgEgEgBQgBgBAAAAIAAAAQgDgCgDAAQgCAAgCAAQgFAAgIACQgBABgCABQgBAAgBAAQgBABgBABQgWAQgEAPQgBACAAACQgDAMAGAL");
	this.shape_132.setTransform(319.8526,384.7125);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f().s("#312919").ss(0.5,1,1).p("AilhuQAFgTARgLQAiAUAiAWQCCBZBvB1QgEASgUAP");
	this.shape_133.setTransform(334.65,376.125);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f().s("#6D5B48").ss(0.5,1,1).p("AhqinQByhcCPCAQAIAHAFAIQBKBogjBdAjWhlQAJAFAJAGQADACAEADQAcASAdAVQAIAGAHAFQATAOATAPQBiBMBzBuQAJAIAKAJQAHAFAEAFQASgjgDg6Qhth1iEhbQgggXgigUQgzAAgjAkg");
	this.shape_134.setTransform(330.9094,378.8392);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#F89B63").s().p("AglAaIgBgCIAGgFQAigLAQgeIALARQgWAfgrACIgBgCgAAdgFIgLgRIACgFIAFADIAOAjgAASgWg");
	this.shape_135.setTransform(307.9,397.8);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F09A69").s().p("AAaBEIAAgBQgPgDgXgTIgmg/IgNgkIAGAEIAHgVIACAGIAnBUIBJAPIgfAkIgHgDIAHADIgBABgAAhBGg");
	this.shape_136.setTransform(316.825,400.75);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EF2D35").s().p("AgPAOIAGgbIANAAQAEANAIAOg");
	this.shape_137.setTransform(280.4,405);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FDFDFD").s().p("AgMAoIgMgJIgBhMIANAFQANAVAZAWIgWArQgHgCgJgEg");
	this.shape_138.setTransform(284.025,411.725);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FA996A").s().p("AAqgZIAAATIhTAgg");
	this.shape_139.setTransform(296.875,414.475);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#EC9D65").s().p("AgIAHIAAgRIASgMIgJgIIAPgIQAOAqgwAjQAJgMABgUg");
	this.shape_140.setTransform(301.9818,413);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#4B9ADB").s().p("AgIAiQgTgaAZgtQAKgCAJAFQgFATAAAUQAAAOADAPQgHAFgGAAQgFAAgFgFg");
	this.shape_141.setTransform(306.5898,378.6734);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#795840").s().p("Ag+B2QgZgWgOgWIgHgMQgIgOgEgNQgHgrAigpIADAGQgQATAWgGIACAFQgtAkAyBMIAuA4IgfgZgABTBbIgHgGIAXgPIgXAPIgVgRIAAgKIAAgDIAVgOIAXAdIAIgFIAPARIgPAIIgPAIgAhShBQAhgxBCgbQARAAAOgBQhPAbgsBAIgHgOg");
	this.shape_142.setTransform(292.858,400.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#8B796A").s().p("AAnA8IAJgMIgJAMQgRgFgQgIIALgPIgLAPQgQAMAEgVIALgPIgLAPQgRgNgPgTIgBgCIAQgKQAOAQAOANIAMAJQAPAKAQAGIAPADIAOABIAAALQgLAAgKgBIAHgLIgHALQgHAKgEAAQgEAAgCgMgAgugFIAAAAQgIgMgHgOIgCgFIAPgKIASAdIAHALIgQAKIABACQgYgCAQgJgAgugFIAQgMgAgXgGIAAAAgAhFgxIAPgIIAGALIgPAKIgIACQgKAAAMgPgAhIg3QABgMAKgEIAHAOIgPAIIgDgGgAg2g5IAAAAg");
	this.shape_143.setTransform(290.7503,400.7206);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#77533C").s().p("AAEAYIgFgDIgOgQQAPgNgEgRIAEgBQAHASAJAPIAAAAIgGAUgAgBAHQAFgEAAgHIAAgCIAAACQAAAHgFAEg");
	this.shape_144.setTransform(310.075,392.875);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#F8C7A2").s().p("Aj7ChIAWgrIAfAZIAMAJIAIAXIAKgGIBVghQgCATgJAMQgOAUgkAAQgoAAhDgagAAhByQgbgHg7hnQAsgCAVgfIAKARIAmA/QAYATAPADIAAABIAGADIgmAqIgFABIgBAAQgEAAgYgGgACGgCIgDgCIgNABQgNAAgMgDIgOgbQAFACAFAAIAAAAIABAAQALAAAJgLIABgBIAAgBIAAAAIAAAAIAAABIgBABQgJALgLAAIgBAAIAAAAQgFAAgFgCQgIgDgJgHQAJAHAIADIAOAbIgNgEQgjgKgVgoIgDgFQgIgQgHgSQgGgSgFgTIgDgUIAUADIgUgDIAUAAIAAADIA4AIIgBAIQAAAIAFAIQgFgIAAgIIABgIIABgEQAEgPAXgQIACgCIACgBIADgBQAIgDAFABIAEAAIAGABIAAAAIABABQAEACADADIAAABIABABQACAEABAGIABAGIgBAHIgBAIIAAACQgCAFgCAEIgCADIgCABIgDAEIAAAAQgEADgFABIgCACIACgCQAFgBAEgDIAAAAIADgEIACgBIACgDQACgEACgFIAAAAIAAALIAdAAQgGAKgPADIgDAAIADACQAoARAogJQgOAPglAFQAPAKAMAFQALAWgLATIARgCQgTAQgWABQAAAWgJAFQgFACgEAAQgMAAgNgMgACigiQARgFAAgWIAAgHIAAAHQAAAWgRAFQACgFAAgFQAAgMgLgJQALAJAAAMQAAAFgCAFgACAhpIABgCIgDgBIACADgABtiJQAHgFACgFIABgGIgCgNIACANIgBAGQgCAFgHAFIAAgBQgGgIgLgBIAAAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAIAAAAQALABAGAIIAAABIAAAAgADZhHQARABASgGQgNASgQAKQAHgIgNgPgAgIicg");
	this.shape_145.setTransform(309.55,400.1603);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FECF00").s().p("AEGBsQgoAbgqghQgCgIAGgDQAQgKANgTQgSAHgQgCQgJAAgIgEQgMgFgOgKQAkgEAOgQQgoAKgogSIAAgCQAPgCAHgLIgdAAIAAgKIgBAAIABgCIABgIIAAgGIgBgHQgBgGgCgDIgBgCIAAAAQgDgEgDgBIgBgBIgBAAIgGgCIgEAAQgFAAgHACIgEACIgCAAIgCACQgWAQgFAQIgBAEIg3gIIABgEIgWAAIgGgXQgDgPABgPIAMgIQAvgaBMApIAPAJIALAHQAeATAhAcQBIBQBFAuQABARAMAHIgKABQgiAAgRgrgABXAeIADACIgBACIgCgEgAkVhjQgSgSASgIQAXApAzgxQAjgWAjAGQBGBEhxAHQh0gTgcAzQgIgoAzgRg");
	this.shape_146.setTransform(313.4458,386.2156);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#DA6814").s().p("AgLgUQAIAEAHAAQANAQgIAHQgFADABAIIgQADQALgTgLgWg");
	this.shape_147.setTransform(330.8774,394.625);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FE9B01").s().p("ACuATQgggbgegTIgLgIIgPgIQhMgqgwAbIgMAIQAAgVAGgTQAHgdAWgZIAHAEQAbASAdAWIAPALIAmAcQBjBNBzBtQAAALABAJQhGguhIhQgAi2ARQgRgBgUgDQhKgwgRAbIgEgOQAcgzB0ASQBwgHhGhDQAhAFAeAfQgZAuAUAaQgJALgMAHIgJADIABABQgWAMgdADIgXABIgJAAg");
	this.shape_148.setTransform(312.85,384.275);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#1E160F").s().p("AgsgGQAFgSARgLQAhAUAiAVQgRAQgHAOQgfgWgigUg");
	this.shape_149.setTransform(322.525,365.675);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#584B40").s().p("AiEhYQAHgPAQgQQCDBZBvB1QgFASgTAPQhth2iEhag");
	this.shape_150.setTransform(337.95,378.225);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#7B5740").s().p("AikAoIgHgEIgRgMQAjgiAzgBQAhAUAhAWQg2AegQATQgegWgcgSgAgNABQghgVgjgUQByhdCPCBQAIAGAFAHQhvhLhbBDg");
	this.shape_151.setTransform(328.375,366.1642);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#B19582").s().p("AkJD6IBog9IhoA9IgMgJIgtg4QgzhMAuglQAGAOAIALIAAABQgPAJAYADQAOATARAMQgEAWASgNQAPAJASAEQACAXAPgUQAKABAKgBIAVARIAHAGIAJAHIAJAHIgUAMIhUA0IgJAGgAjLCbIgPgEQgQgFgPgKIgMgJQgPgNgNgSIgIgLIgSgdIgFgKQArg/BRgbQAdgDAWgMIAIgFQARgHATgCIAOAPIAEAUQAEATAHASIgGABIgYAJQgTgfgPgIIgFgCIgEgbIAEAbIgBgBIABABIAFACQAPAIATAfIAYgJQAGAQgRAOIAPAQIgCAFQgQAfgjALIgNAEIANgEIgGAFIABADIABABQgSAUgUARIgUAOIAAADIgOgBgAiTBkIACAAIAFgDIgVgZIAVAZIgFADIgCAAIAAAAIAAAAQgVAAgLgeIgBgCIANgLIAKAOQAUgEAQgKIAPgKQAKgIAFgMIACADIgCgDIgLgSIALASQgFAMgKAIIgPAKQgQAKgUAEIgKgOIAAgBQgagoAAgWQAAgSAQgHQgQAHAAASQAAAWAaAoIAAABIgNALIABACQALAeAVAAIAAAAIAAAAgAiogkQgFACgEADIACgBQAPgIAPAGIADABQgHgGgHAAQgGAAgGADgAiMBhgAEgBSIgTgSQhzhshjhOIgmgcIgPgLQARgTA1geQCFBbBtB2QADA6gSAiQgEgFgHgEgAhbAbIAAAAgAiNggIAAAAgABgjwQBbhEBwBMQBKBpgjBdQhvh2iDhYgAiRg8IAIgEIgIAFgAiJhAIAAAAg");
	this.shape_152.setTransform(317.4061,390.3625);

	this.instance_8 = new lib.head_gfall_sad("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(298.15,355.85,0.9999,0.9999,15.4453,0,0,29.4,34.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f().s("#B4724C").ss(0.5,1,1).p("AghgnIALAJIAhgJAgQAnQAegBAUgN");
	this.shape_153.setTransform(306.6,382.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f().s("#A9A2A5").ss(0.5,1,1).p("AgRAdIAdAOIAAgNIABgGIAGgzIgdgPg");
	this.shape_154.setTransform(285.4,406.625);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f().s("#B36F47").ss(0.5,1,1).p("AgGAAIANAC");
	this.shape_155.setTransform(287.3,411.05);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f().s("#B17049").ss(0.5,1,1).p("AAggfQAPBIhQgL");
	this.shape_156.setTransform(300.2851,409.322);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f().s("#A1A29F").ss(0.5,1,1).p("AAQgiIAjAxQgVAVgaAAIg2g5QAZABAcgP");
	this.shape_157.setTransform(296.275,405.975);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f().s("#7B5742").ss(0.5,1,1).p("AAAABIABgB");
	this.shape_158.setTransform(301.25,381.3);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f().s("#6F5A4B").ss(0.5,1,1).p("AAAgjIgOBAIgCAHIAWAAIAKgt");
	this.shape_159.setTransform(302.85,399.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f().s("#6B5749").ss(0.5,1,1).p("AhJgIQgEgDgDgCQgMgKAMgLQAFAEAFAEIgDASQABAQAMgIQANAHAPAFAhGgaQAHAFAHAEQAOAJARAGQAFACAHABIgEAPQAVAFAaACAg4gRIgEARAgZgCIgHAOQAEAUALgQAAuAJQAPAAAPgBAAvAXQATAAAVgBAAuAJIABAOAAfAIIgBAPQAJAXAIgXAAfAIQAIABAHAAAgNABQAUAFAYAC");
	this.shape_160.setTransform(291.2,389.7563);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f().s("#51382B").ss(0.5,1,1).p("AAAitQhbBIABBjAhHBkQAbAtBAAKQALACAMABQAHAAAHAAQARABARgBAhHBkQgDAoAiAiAhaARQACA2ARAd");
	this.shape_161.setTransform(292.2495,386.625);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f().s("#CF9E82").ss(0.5,1,1).p("AghiIIAKANIAPAUIAWAgIAvA/QAoAIAAAmQgCAUgFANAhkhrQAFAJAHAJQAVAhAVAZQAGAHAFAHQAUAXATARQAAAPAGAJQAEAGAFAEQADACADABQAIAIgNATQgBAFABADQABAPAKgGQACgBABgCQACgBADgDQAPACALgDQATgGAKgTABRAdQARARgEAZAApAxQAPAjgRANAA9AmQATAbgPAfAgUCJIAUgNIAfgUAAEAXQAOgdArgC");
	this.shape_162.setTransform(303.5,393.775);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f().s("#C77242").ss(0.5,1,1).p("AAZAQIAFgLAgcgPIgBAH");
	this.shape_163.setTransform(298.925,367.075);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f().s("#634331").ss(0.5,1,1).p("AgIgcIARAvIgKAK");
	this.shape_164.setTransform(302.825,370.475);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f().s("#6F5A48").ss(0.5,1,1).p("AAtgmQAEgJACgJQgCgBgCgCQgagRgcgHQgFgCgGgCQgWAPgFATIAJAHQgHACgGAEQgLAIgCAJQgHAhAaAyIAKAXQAmgDAdgZQAFgEAEgEIgEgKAAcAMIAbAGIAAAPIgIACIAAAfAAjAcIAEAJAAvAjIgIACAAtgmQAJALAFAPQAHAWgBAeQgBAWgFAaAAGgZIAZAHQAJgJAFgLAAcAMQAEAIADAIAAGgZQALAOALAXAgrA8QAtACAhgiAgkguQAWgFAUAa");
	this.shape_165.setTransform(296.7401,374.65);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#F8C6A3").s().p("AgdgIIABgHQAigCAYAWIgFALQgZgQgdgIg");
	this.shape_166.setTransform(298.925,367.0627);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#7A563F").s().p("Ag4gkQAaAsBAAKIAYADQgdAPgZgCIgeADQgigiAEgng");
	this.shape_167.setTransform(290.7837,400.325);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#EF9B68").s().p("AgOCoIgCgcQAaAAAVgVIAVgNQANA/g8AAIgTgBgAh0CZIAAgMIABgGIANAVgAArh5QAFgaABgVIALAJIAigJIAXBAQgUAOgfABg");
	this.shape_168.setTransform(298.3,395.572);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AhYAdIAHhHIAeAPIgGAzIgBAGIAAANgAgMgcQAYACAdgPIANAAIAjAxQgVAVgaAAg");
	this.shape_169.setTransform(292.475,406.625);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#F69867").s().p("AgJAXIAJgtQAEAGAGAEIgKAjg");
	this.shape_170.setTransform(304.475,400.85);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#F8C7A2").s().p("Ag9BQQARABARgBIgBAHIAXAAIAJABIAJglIAGADQADADAAAEQAAAIgIALIgBAFIABAEQAAAKAFAAIAAAAIABAAIAEgBIAAAAIAAAAIgEABIgBAAIAAAAQgFAAAAgKIgBgEIABgFQAIgLAAgIQAAgEgDgDIgGgDQgGgEgDgGQgGgKAAgOQAOgeArgBQgrABgOAeQgTgRgUgYIgLgNQgVgagVggQAkgEAdgeIAPAUIAWAfIAvBAQAnAIABAmQgCATgGAOIABgLQAAgSgNgOQANAOAAASIgBALQgJATgTAFQAGgNAAgNQAAgQgKgPQAKAPAAAQQAAANgGANQgMAEgOgCQAJgHAAgOQAAgLgHgQQAHAQAAALQAAAOgJAHIgFAEIgEADIgdATIgVANgAA7BZIAAAAg");
	this.shape_171.setTransform(304.125,394.425);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#F69562").s().p("AgmAFQAmgDAdgZIAKAOQgdAdgjAEIgNgTg");
	this.shape_172.setTransform(297.225,382.45);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#7B5742").s().p("AhTB2QgRgdgCg2IAGAFQACARAMgIQgCBaBcAiQhAgKgbgtgAhmAOQgBhhBbhIIAJAHQgHABgGAFQgLAIgCAJQg8A5gEBaIgJgIgABOiMQAEgJACgJIgEgDIAFgLIASAxIgLAKQgFgQgJgLg");
	this.shape_173.setTransform(293.4495,384.85);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#8B7767").s().p("AAeAXIABgPIAPABIAegBIALAOIgpABIAAgOIAAAOQgDAMgEAAQgEAAgFgMgAAuAXgAggAMIAGgOIANADIgEAPQgFAHgDAAQgFAAgCgLgAgRAQIAEgPQAUAFAYACIgBAPQgagCgVgFgAg8AAIAEgRIgEARQgMAIgBgQIACgSIAPAJQAOAJAQAGIgGAOQgPgFgNgHgAgagCIAAAAgAhQgNQgNgKANgLIAJAIIgCASIgHgFgAhHgaIAAAAg");
	this.shape_174.setTransform(291.2,389.7563);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#B19582").s().p("ABFC6IACgHQgSABgRAAIgNgBIgXgDQhdghADhaQAMAHAPAFQAEATAMgPQAVAFAaABQAIAXAIgWIAogCQAVAZATARQAAAOAGAKIgKAugABHCzIAOhBgAAAA9QgXgCgVgFIgMgFQgRgFgOgJIgOgJQAEhaA7g6QgBAHAAAIQAAAeAVAnQgVgnAAgeQAAgIABgHQACgJALgIQAHgEAGgBIgJgHQAFgUAWgOIALADQAcAHAaARIAFADQgCAJgEAJQAJAMAFAPQAHAWgCAeQgBAWgFAaIgPgUIADgCIgDACIgJgNIAIgIIgDgJIgEgJIAEAJIADAJIgIAIQgeAaglACIgKgXIAGAAIAAAAIABAAQAmAAAegdIABgBIACgBIgCABIgBABQgeAdgmAAIgBAAIAAAAIgGAAIAKAXIALASQAWAgAUAaIgeABIgPgBgABHggIAAgeIAIgDIAAgOIgagHIAaAHIAAAOIgIADIgHACIAHgCgAA8hFIgHgRIAHARgAA1hWQgLgXgLgPIgBAAIABAAQALAPALAXIAAAAgAA4h0QAIgKAGgLQgGALgIAKIgagIIAAAAIgBgBIAAAAIAAgBIgBAAIAAgBIAAAAQgQgSgQAAIgBAAIAAAAIgHABIAHgBIAAAAIABAAQAQAAAQASIAAAAIAAABIABAAIAAABIAAAAIABABIAAAAIAaAIgAgSgmIAAAAg");
	this.shape_175.setTransform(294.275,384.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f().s("#53392A").ss(0.5,1,1).p("AgbhIQAiB4AWAZ");
	this.shape_176.setTransform(273.4,373.175);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AgdglQA0AUAHApIgDAAAAIAmQAXAEgEgSAAMAYIAPAA");
	this.shape_177.setTransform(291.575,408.1872);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f().s("#B1B1AF").ss(0.5,1,1).p("AA4glIAVgCIgnBZIgQgEIhigJIAwhWQApAXArgLgAAWAuIAihT");
	this.shape_178.setTransform(284.775,399.375);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f().s("#CB9D83").ss(0.5,1,1).p("Agjg9QACAHACAHQAHAoggBJAA2hNQABAJABAIQAHBRgjA5");
	this.shape_179.setTransform(287.5662,387.825);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f().s("#BB7B57").ss(0.5,1,1).p("AAHhOQAFAFADAIQAOAlgvBr");
	this.shape_180.setTransform(294.3081,387.525);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f().s("#503522").ss(0.5,1,1).p("AgOg1IANBMIAKAAIAHAcIgTAD");
	this.shape_181.setTransform(295.4,374.225);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f().s("#6D5D50").ss(0.5,1,1).p("AByCZIAIAaIgUAEIhaAQIg+AKIgOgVIATgEgABaBEIAYBVAh5ApQgFh6A5h/");
	this.shape_182.setTransform(282.7584,361.75);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f().s("#CE9F81").ss(0.5,1,1).p("AhdgYQARAzAlAaQAOAJANADQAXAIAigFQAWgDAbgJABHgSQggAMgZgGQgOgJgHgXQgDgLgDgO");
	this.shape_183.setTransform(287.325,361.6844);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f().s("#B86D43").ss(0.5,1,1).p("Ag5gjIALAIQADAAADgBQASgFATgRAA6AVIhWAVIgDAJ");
	this.shape_184.setTransform(297.55,354.725);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f().s("#503321").ss(0.5,1,1).p("AgOgbQAYAUAFAZIgNAL");
	this.shape_185.setTransform(288.925,341.9);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f().s("#B16D44").ss(0.5,1,1).p("AACANIgDgZ");
	this.shape_186.setTransform(287.2,337.775);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AhCiFIASgbQAOgBALgBQAsgCAcAOQgBAPgCANQALANAJAQQARAcAKAkQAJAlARAwAANheIAYgBQAGgLADgQAg+hmQADgFAFgDQAlgiAeAyQAJAPAFAaIAoAAIAEARAg6CEQALACALABAgmCWIACgPQAYAAAUgHIAGAVQALAZAKgiAg6CEIABARQAEAbAPgaQAbABAZgCAh2B1QArAMARADAhkCQQAbAEAQABAAegcIARAGIAYgOAAbg1QACAMABANQAAAFABAFIAEAXQAZAJALgPIAAgjAgfAFQAggCAegVAgnAfQApAHAhgh");
	this.shape_187.setTransform(282.475,354.1628);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAWAuIAihTIgiBTIhigJIAwhWQApAXArgLIAVgCIgnBZg");
	this.shape_188.setTransform(284.775,399.375);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F09A67").s().p("AAfg8IAbgIQAOAlgwBrIgVACQAjg5gHhRgAg4gvIgEgOIBZgQIACARQgjAOglAAIgPgBg");
	this.shape_189.setTransform(290.0581,387.825);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#E45C2A").s().p("AgOgFIAUgFQAFAGADAHIgaAIIgCgQg");
	this.shape_190.setTransform(294.4,380.7);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#7C5842").s().p("AgBAdIgYhUIAVADIAMBMIALAAIAHAdIgUADg");
	this.shape_191.setTransform(294.375,374.075);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#7A5640").s().p("AglhIIATAbIAJANQAVA9AaApIgTADQgUgZgkh4g");
	this.shape_192.setTransform(274.35,373.175);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#8E7769").s().p("AgPAJIgBgQQALACAKABIgCAOQgHANgEAAQgFAAgCgOgAA4AJIgGgUIAGAUQgaACgbgBIACgOQAYAAAVgHQAOAJANACQgGAUgGAAQgFAAgEgLgAg6AEIgSgaQArAMARADIABAQIgrgFgAgQgHIAAAAg");
	this.shape_193.setTransform(278.275,368.1568);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#F19967").s().p("AgqAWIAFgTQApAHAhggQACAOAEAKQglAVgmAAIgKgBg");
	this.shape_194.setTransform(282.25,356.967);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#F8C6A3").s().p("Ag2CzQAghKgHgoQArAEAsgRQAIBSgjA5QgOADgOAAQgcAAgdgPgAgMhSQgNgEgOgJQglgagRgzQAsADAqgYQAHAYAOAJQAZAFAggLIAXBLQgbAIgWAEQgNABgLAAQgTAAgOgEg");
	this.shape_195.setTransform(287.325,376.542);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#EA7842").s().p("AgOgqIAMAIIAFgBIAMBGIgDAIQgQgvgKgmg");
	this.shape_196.setTransform(293.225,355.475);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#7B5741").s().p("AgQAAQADgMAAgQQAZAVAFAYIgOAMQgHgQgMgNg");
	this.shape_197.setTransform(288.75,341.9);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#F09A69").s().p("AASApQARgFATgRIA+BIIhWAVgAhzhhIBFgOIAEAZQgcgOgtADg");
	this.shape_198.setTransform(291.725,347.725);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#B19482").s().p("AhADKIATgDQgagpgWg+IgKgNIArAFQAEAbAPgaQAbABAZgCQALAZAKgiQAZAIAhgFIAYBVIifAgICfggIAIAbIgUAEIhaAPIg+ALgAgnBKQgLgBgLgCQgRgDgrgMQgFh6A5iAIASgbIAZgCQAsgCAcAOQgBAPgCANQALANAJAQQARAcAKAkQAJAmARAwQgfALgZgGQgPgIgHgXQgEgLgCgOQAIADAHAAIABAAIAAAAQAMAAAIgJIAAgBIAAgjIAAAjIAAABQgIAJgMAAIAAAAIgBAAQgHAAgIgDIgEgYQgdAWghACQAhgCAdgWIAEAYQggAhgqgHIgFATQARAzAjAaQgTAHgWAAIgDAAgAAbhZIABAKIgBgKIgDgZIADAZgAAshTIAYgOIgYAOIgRgGIARAGgAAKibQAJAPAFAaIAoAAIAEARIgEgRIgoAAQgFgagJgPIAYgBQAGgLADgQQgDAQgGALIgYABgAAKibIgCgDIAAgBIgBgBQgQgZgSAAIgBAAIAAAAQgOAAgPAOQgFADgDAFQADgFAFgDQAPgOAOAAIAAAAIABAAQASAAAQAZIABABIAAABIACADIAAAAgAAgg3IAAAAg");
	this.shape_199.setTransform(282.7584,360.2811);

	this.instance_9 = new lib.Symbol5("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(288.15,393.85,0.0061,0.0061,0,16.5756,-163.4244,-53.3,437.6);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AANheIAYgBQAGgLADgQQALANAJAQQARAcAKAkQAJAlARAwAhCiFIASgbQAOgBALgBQAsgCAcAOQgBAPgCANAg+hmQADgFAFgDQAlgiAeAyQAJAPAFAaIAoAAIAEARAg6CEIABARQAEAbAPgaIACgPQAYAAAUgHIAGAVQALAZAKgiAg6CEQALACALABAh2B1QArAMARADAhkCQQAbAEAQABAAbg1QACAMABANQAAAFABAFIAEAXQAZAJALgPIAAgjAAegcIARAGIAYgOAgfAFQAggCAegVAgnAfQApAHAhghAgmCWQAbABAZgC");
	this.shape_200.setTransform(282.475,354.1628);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#8E7769").s().p("AgPAJIgBgQQALACAKABQAYAAAVgHIAGAUQgaACgbgBIACgOIgCAOQgHANgEAAQgFAAgCgOgAA4AJIgGgUQAOAJANACQgGAUgGAAQgFAAgEgLgAA4AJgAg6AEIgSgaQArAMARADIABAQIgrgFg");
	this.shape_201.setTransform(278.275,368.1568);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#B19482").s().p("AhADKIATgDQgagpgWg+IgKgNIArAFQAEAbAPgaQAbABAZgCQALAZAKgiQAZAIAhgFIAYBVIifAgICfggIAIAbIgUAEIhaAPIg+ALgAgnBKQgLgBgLgCQgRgDgrgMQgFh6A5iAIASgbIAZgCQAsgCAcAOQgBAPgCANQALANAJAQQARAcAKAkQAJAmARAwQgfALgZgGQgPgIgHgXQgEgLgCgOQAIADAHAAIABAAIAAAAQAMAAAIgJIAAgBIAAgjIgEgRIgoAAQgFgagJgPQAJAPAFAaIADAZIABAKIgBgKIARAGIAYgOIAAAjIAAABQgIAJgMAAIAAAAIgBAAQgHAAgIgDIgEgYIAEAYQggAhgqgHIgFATQARAzAjAaQgTAHgWAAIgDAAgAgig3QAhgCAdgWQgdAWghACgAAKibIAYgBQAGgLADgQQgDAQgGALIgYABIgCgDIAAgBIgBgBQgQgZgSAAIgBAAIAAAAQgOAAgPAOQgFADgDAFQADgFAFgDQAPgOAOAAIAAAAIABAAQASAAAQAZIABABIAAABIACADIAAAAgAAgg3IAAAAgAAshTIgRgGIgDgZIAoAAIAEARIgYAOgAAbhZg");
	this.shape_202.setTransform(282.7584,360.2811);

	this.instance_10 = new lib.Symbol5("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(287.65,394.85,0.0058,0.0058,0,15.0573,-164.9427,-50.4,485.1);

	this.instance_11 = new lib.Symbol5("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(287.55,395.85,0.0058,0.0058,0,14.9508,-165.0492,-60.2,492.9);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AAMAYIAPAAAAIAmQAXAEgEgSAgdglQA0AUAHApIgDAA");
	this.shape_203.setTransform(291.575,408.1872);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AA2hNQABAJABAIQAHBRgjA5Agjg9QACAHACAHQAHAoggBJ");
	this.shape_204.setTransform(287.5662,387.825);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AhCiFIASgbQAOgBALgBQAsgCAcAOQgBAPgCANQALANAJAQQARAcAKAkQAJAlARAwAANheIAYgBQAGgLADgQAg+hmQADgFAFgDQAlgiAeAyQAJAPAFAaIAoAAIAEARAg5CVQAEAbAPgaIACgPQAYAAAUgHIAGAVQALAZAKgiAg6CEQALACALABAg6CEIABARAhkCQQAbAEAQABAh2B1QArAMARADAAbg1QACAMABANQAAAFABAFIAEAXQAZAJALgPIAAgjAAegcIARAGIAYgOAgmCWQAbABAZgCAgnAfQApAHAhghAgfAFQAggCAegV");
	this.shape_205.setTransform(282.475,354.1628);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#F09A67").s().p("AAfg8IAbgIQAOAlgwBrIgVACQAjg5gHhRgAg4gvIgEgOIBZgQIACARQgjAOglAAIgPgBgAAfg8IAAAAg");
	this.shape_206.setTransform(290.0581,387.825);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#8E7769").s().p("AgPAJIgBgQIABAQIgrgFIgSgaQArAMARADQALACAKABIgCAOQgHANgEAAQgFAAgCgOgAA4AJIgGgUIAGAUQgaACgbgBIACgOQAYAAAVgHQAOAJANACQgGAUgGAAQgFAAgEgLg");
	this.shape_207.setTransform(278.275,368.1568);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#B19482").s().p("AhADKIATgDQgagpgWg+IgKgNIArAFQAEAbAPgaQAbABAZgCQALAZAKgiQAZAIAhgFIAYBVIifAgICfggIAIAbIgUAEIhaAPIg+ALgAgnBKQgLgBgLgCQgRgDgrgMQgFh6A5iAIASgbIAZgCQAsgCAcAOQgBAPgCANQALANAJAQQARAcAKAkQAJAmARAwQgfALgZgGQgPgIgHgXQgEgLgCgOQAIADAHAAIABAAIAAAAQAMAAAIgJIAAgBIAAgjIgEgRIgoAAQgFgagJgPIAYgBQAGgLADgQQgDAQgGALIgYABIgCgDIAAgBIgBgBQgQgZgSAAIgBAAIAAAAQgOAAgPAOQgFADgDAFQADgFAFgDQAPgOAOAAIAAAAIABAAQASAAAQAZIABABIAAABIACADQAJAPAFAaIAoAAIAEARIgYAOIgRgGIgDgZIADAZIABAKQgdAWghACQAhgCAdgWIgBgKIARAGIAYgOIAAAjIAAABQgIAJgMAAIAAAAIgBAAQgHAAgIgDIgEgYIAEAYQggAhgqgHIgFATQARAzAjAaQgTAHgWAAIgDAAgAAgg3IAAAAgAAbhZgAAKibIAAAAg");
	this.shape_208.setTransform(282.7584,360.2811);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f().s("#6F5C56").ss(0.5,1,1).p("AgsgFIBZAL");
	this.shape_209.setTransform(350,405.55);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f().s("#53382D").ss(0.5,1,1).p("AgRgcQAhAZACATIgKAN");
	this.shape_210.setTransform(353.7,341.075);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f().s("#B77140").ss(0.5,1,1).p("AAAgJIAAABIAAACIAAAGIAAAK");
	this.shape_211.setTransform(351.9,338.225);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f().s("#000000").ss(1,1,1).p("AgNgUQANATAOAW");
	this.shape_212.setTransform(366.325,292.675);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f().s("#523524").ss(0.5,1,1).p("AAkh4QhbBnAaCK");
	this.shape_213.setTransform(337.7898,353.25);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f().s("#94714E").ss(0.5,1,1).p("AAdgtIgFAIIg0BT");
	this.shape_214.setTransform(336.125,387.6);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f().s("#9FA2A1").ss(0.5,1,1).p("Ag2AkIAVhTIBYAAIgUBf");
	this.shape_215.setTransform(350.975,401.35);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f().s("#9AA7A3").ss(0.5,1,1).p("AgTg4IglBDIBGAuIArhHQgJgDgJgEQgfgNgbgWg");
	this.shape_216.setTransform(335.2,397.9);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f().s("#5C3B28").ss(0.5,1,1).p("AgRAoIAUAHAgRAoQgKAKADARIAxANAgFhPIgMB3");
	this.shape_217.setTransform(335.9546,375.825);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f().s("#AA6E51").ss(0.5,1,1).p("AgkBFQA3hOANgiQAFgMAAgN");
	this.shape_218.setTransform(344.6023,389.425);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f().s("#6D5F52").ss(0.5,1,1).p("AhEAMIAYgEIBagPIAXgE");
	this.shape_219.setTransform(352.825,381.75);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f().s("#C7A088").ss(0.5,1,1).p("AAuhNQABAIADAGQAIBPgVA+Agsg+QABAHACAHQAGA5gQBF");
	this.shape_220.setTransform(352.7853,388.75);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f().s("#CC9F80").ss(0.5,1,1).p("AA9gVIAAgBQgDgLgNgZIgBgBQgHgCgBAAQgkgDguAXQgCADgCAEQgaAzAaAbQAEADAFAEQgCgUABgDAgpAzQABAAABABQAIAFAOAFQAHAAAFgBQgMgSACgIAAtgGQAEgIAMgHAAgAwQAJgCACgBQALgJAFgKQAAgBAAgBQACgCAAgDQABgDABgEQABgEAAgEQAAgLgDgOAgFA9QAWgDALgHQACgCACgBQgNgHgBgRAArAMQgDgKAFgIAA/AMQgGAIgMga");
	this.shape_221.setTransform(343.0875,377.8125);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f().s("#6C5F51").ss(0.5,1,1).p("AAQgxIAAASQgEAAgEAAQgKgBgLgCAAggtIACANAAQgfQAKAVAIgWAgSgyIAWABQAHAAAFAAQAjAAAUgKIACAQQAIAVAKgcABgg1QAIgFgCgRQgEADgKAFIADARABgg1QgDABgCACABHg7QAKgFAHgDABJgrQgTAIgUADAhshBQgFABgLgLQACATAEAFQADADAKACAByAvIAHgCIAEAfAATBEIBfgVABgg1IASBk");
	this.shape_222.setTransform(347.25,372.975);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f().s("#CE9E83").ss(0.5,1,1).p("AA0BQQgFgLgDgKQgDgIgCgJQgMgvANgzQADgMACgLAgnhqQgCANgDAOQgLA1AFA2QABAJACAKQAFAmAIAW");
	this.shape_223.setTransform(341.4583,363.625);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f().s("#E39517").ss(0.5,1,1).p("ACZinQgMAPATAAQAJABATAAQgNAkgbAIQgcAJgNgKQAJARgLAXQgJAVgIAKQgNAPgOAEAhsAjIAdgvIAAAdQAugfACg1QASAagSAjQAagIAHgJQALgLAEgGQAMgSAAgZQAFAjAMAQAi7CoIAjg/");
	this.shape_224.setTransform(361.175,318.525);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAvAHIAAACIAAADAgugLIAUAUIAAAA");
	this.shape_225.setTransform(347.075,336.575);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f().s("#705E4F").ss(0.5,1,1).p("AgpiqIAAAAIABgBIAAAAQAAgBABgBQAGAAAFAAAg3iAQgCgEgBgEQgBgOARgTAAIipQAVAEARAKQACABABAAQAEARgGAQQAEgIADgHQAKANAIAQQAtBUgPCBAAnhnQABgCABgCQADgHADgHAAZhpIAOACAg3iAQAYgfAZAGQAfAHAAApQgBAggXA1AAMgZIAAAYQAzAOAKgVIAAgkAAYhAIAxAAIAAAUIgXANIgigIQADgNAFgMQAGgUAJgTAheg1IgKAbQAEAFADADQAgAdA1gDQADAAADgBIAHgbAAMgZQABgCAAgBQABgGACgFAAECEQgLhOAThPAheg1QAUAjBLgCAAICVQABAggGgKAheg1QATgyAUgZ");
	this.shape_226.setTransform(347.2891,354.8047);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgXAAQAAAAACAAQAFAAAGAAQATAAAQACAgYACQAAgBAAAA");
	this.shape_227.setTransform(345.525,337.65);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f().s("#0777B7").ss(0.5,1,1).p("AgOgnQgTgOgMAhQAcA4AqAIQAWgLgBgX");
	this.shape_228.setTransform(329.1298,330.6687);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f().s("#4C2F0D").ss(0.5,1,1).p("AALABQgSAGAEASAALABQAHAMgDAOAgPgaQATANAHAO");
	this.shape_229.setTransform(347.5333,323.625);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f().s("#B0947F").ss(0.5,1,1).p("AAhBlQAHgCAhgIQAhgIATgKQAZgQANgaQAFgLADgOQBMgfhCgbQAFgUgCgfAiOA0QADACADACQAEACAEABQASAJATAFQAMAFAPAFQAIABAHACQBHAQAHACAjTgDQAaAdAiAUAABAXQgSACgMgFAgwhGQA2gXAIAs");
	this.shape_230.setTransform(348.8517,327.05);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f().s("#DF6F03").ss(0.5,1,1).p("AgsCaQAEguA4gRQAIgCAIgDQAXgNAQgRQATgUAMgYQAFgLADgLQADgNACgNQABgKAAgMQAAgBAAgCQAAgNgCgOAAriZQg4AKgdAbQgYAVgDAiQgDAXAIAcQABAHADAIQgBAEgCADQgSAigigBAhPBAQgmAqA5An");
	this.shape_231.setTransform(320.3,344);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f().s("#745F4A").ss(0.5,1,1).p("AgGAEQABgCAMgF");
	this.shape_232.setTransform(331.475,309.45);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f().s("#000000").ss(0.5,1,1).p("AgNgSQAMAkAPAB");
	this.shape_233.setTransform(330.75,307.125);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f().s("#2F261D").ss(1,1,1).p("AjDB5QgPgYgFgUQApgfAjgVQAdgSAdgOQAEgDAEgCQCJhJCYgj");
	this.shape_234.setTransform(343.35,302.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f().s("#745F4A").ss(1,1,1).p("AkMBBQgKgdACghQABg0AcguQAnhBBDggQAEgCADgBQAEgCAEgBQAMgFAMgDQAPgFAOgDQBLgSAsAMQAkAKAaASQALAIAIAIQARASATAZAiyA7QgxAbgVAWQgeBFASAxQAQgLARgKQACAAABgBQAjgUAlgUQAJgFAJgFQAEgCAEgCQCvhbDlhRQgpgxgvgUQgCgBgBgBQjIBHhxA1QgEACgEACQgQAIgOAI");
	this.shape_235.setTransform(348.6898,303.9639);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#6D543C").s().p("AgJAAIgHAQQAFgQgDgQIgDgCIAAgKQAhAZACATIgKANQgIgQgJgNg");
	this.shape_236.setTransform(353.7,341.075);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#513412").s().p("AgHAcQgGgCgCgJQgDgKAEgKQADgMAGgHQAGgGAHABQAHACABAJQACAJgDALQgDALgHAHQgEAGgFAAIgDAAgAgFgLIgEAIIgBAIQAAABABABQAAAAAAABQAAAAABABQAAAAAAAAIAEgDQACgDABgEQABgFAAgDQAAgBAAgBQAAgBAAAAQgBgBAAAAQAAAAgBAAIAAAAQAAAAgBAAQAAAAAAAAQgBABAAAAQgBABAAAAg");
	this.shape_237.setTransform(364.1087,321.782);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgXGzIAVhUIBYAAIgUBggAi3F3IAlhDQAcAWAfANIASAGIgrBJgABkk3IBJAAQgNAZgZAQQgpAAAGgpgACRlmQgjgaAkg9QAGgCAIACIACAAIAIAAQAIAEAGAMQAEBHgqAAIgBAAgACdmiQgGAHgDALQgEAMACAJQACAJAHACQAHACAGgHQAGgHAEgMQADgLgDgKQgBgIgHgCIgCgBQgGAAgFAGgACYmGIAAgJIAEgIQABgBAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAAAAAQABABAAAAQAAABAAABQAAAAABABQAAADgCAGQgBAFgCADIgDADQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBg");
	this.shape_238.setTransform(347.8922,361.425);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#D16826").s().p("AAFAEIgGAAIgDAAIgYgGIAOgRQAQgCAMAKQAGAKAJADIgKASQgGgMgIgEg");
	this.shape_239.setTransform(364.35,316.4083);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#EF9B68").s().p("AgNA4QgfgNgcgWIA1hSIBcALQgNAig4BPIgRgHg");
	this.shape_240.setTransform(340.525,390.1);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#E37C32").s().p("AgwABIAFgIQAIAGAOAEIANgBQAVgDAMgGIAYgFQAAAMgFANg");
	this.shape_241.setTransform(343.4023,383.775);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#EB9A65").s().p("AguABIBagOQABAHACAGIhbAPIgCgOg");
	this.shape_242.setTransform(353.025,382.4);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#775740").s().p("AhHBDQgEgRAKgKIAVAHIgVgHIANh3QACACAKADQAFAmAJAWQgbAzAbAbIAJAHIABABIgFAIgABEgmIAAgBIgIgCQgFgLgDgKIAVACQABAYgDAAQgBAAAAAAQAAAAAAAAQgBgBAAAAQAAgBgBAAg");
	this.shape_243.setTransform(340.7368,375.825);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#8A7869").s().p("AAcAQIAAgQIAAAQIgJAAIgUgCQgEgIgBgIIAWACIAMAAQAiAAAVgKIABAPQgTAHgTADIgDgNIADANQgEAMgFAAQgEAAgFgLgABUAFIgBgPIAQgIIAOgIQACAQgIAFIgFADIgDgQIADAQQgGAQgFAAQgDAAgEgJgABUAFgAhqgCQgEgGgDgSQAMALAFgBIACASQgKgCgCgCg");
	this.shape_244.setTransform(346.1125,368.1003);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#EC9D62").s().p("AgsACIAFgaQAgAdA0gDIgFAXQgugEgmgTg");
	this.shape_245.setTransform(341.475,355.425);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#B29483").s().p("AgtAEIgHgHIAKgbQAUAiBLgCIgIAcIgGABIgLAAQgtAAgcgbg");
	this.shape_246.setTransform(342.075,352.5183);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#7B5740").s().p("AgZB1QgMgwANgzIAFgWIAGAAIAIgdQAWg1ABggIAOACQgJATgGAVIgIAYIgDALIgBADQgTBPAMBOg");
	this.shape_247.setTransform(347.987,356.1);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#7C583D").s().p("AgfB0QgaiKBchoQAAAFACADQgUAagSAxIgKAbIAIAJIgGAZQgLA2AGA2IgBABQgFAAgLgLg");
	this.shape_248.setTransform(337.9148,353.7542);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#B19582").s().p("AgYDhIALgEQALgJAEgKIABgBIABgGIACgGIABgJQAAgMgDgOIAAAAQgCgMgNgZQAGALgBghIAIAAQAJAWAJgXQASgDAUgHQAIAUAKgcIAFgCIASBlIAHgCIAEAeIgYAFIhaAPIgYAEIAEgCgAAEDDIBfgUgAgKBOQgMhOAUhPIAAAZIABAAIABAAIAAAAIADABQAQAEAMAAIABAAIAAAAQATAAAHgLIABgBIAAgkIAAgUIgyAAQAGgVAJgTIACgEIAGgOIgGAOIgCAEIgOgCIAAgBQAAgogfgHIgHgBIgBAAIAAAAQgUABgTAWIAAABIAAAAIgBAAIAAABIgBABQgCgEgBgEQgBgOARgTIABAAIAAAAIABgBIAAgBIABgCIALAAIABABIgMAAIgBABIABgBIAMAAQAUAAAQADQAUAFARAJIADACQAEAQgGAQIAIgPQAJANAJAQQAsBUgPCBIgOAIIgQAIQgWAKghAAIgMAAgAAfgxQgMAAgQgEIgDgBIAAAAIgBAAIgBAAIAAgZIABgDIACgLIAIgYIAyAAIAAAUIgYAMIgigIIAiAIIAYgMIAAAkIgBABQgHALgTAAIAAAAIgBAAgAhthrQATgxAUgaIABgBIAAgBIABAAIAAAAIAAgBQATgWAUgBIAAAAIABAAIAHABQAfAHAAAoIAAABQgBAggWA1IgGABQhGAAgUgigAA7hhg");
	this.shape_249.setTransform(348.75,360.2);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#479DD8").s().p("AgtgUQAMghATAOQAaAdAiAUQABAXgWALQgqgIgcg4g");
	this.shape_250.setTransform(329.1298,330.6687);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#F8C6A3").s().p("Ag2GwQAQhGgHg5IBbgPQAIBQgVA+gAiMEpIgBgBIgCgUIAAgDIAAADIACAUIgJgHQgbgbAbg0QgJgXgFgmIgCgTQgGg2ALg2QAmAUAwAEQgNAyAMAxQABAJAEAIQADAKAFALIAIACIAAAAQAOAaADALIAAAAQgNAIgDAIQADgIANgIQADAPAAALIgBAJIgBAAIAAAAIAAABIgCABIgBAAIAAAAQgFgBgHgPIgBgBIAAgBIgBgCIAAgBIAAAAIAAAAIAAABIABACIAAABIABABQAHAPAFABIAAAAIABAAIACgBIAAgBIAAAAIABAAIgCAHIgCAFIgBACQgFAKgKAJIgMADQgNgHgBgRQABARANAHIgDADQgMAGgWAEQgLgQAAgJIAAgBIAAABQAAAJALAQIgNABQgOgFgIgFgAg5EAIgBgGQAAgGAEgGQgEAGAAAGIABAGgAiTDKIgDAIIADgIIABAAIABAAIACgBIACgBQAmgSAgAAIAAAAIAAAAIAIABIgIgBIAAAAIAAAAQggAAgmASIgCABIgCABIgBAAIgBAAIAAAAgAhEElIAAAAgAgyibQgQgCgUgBIgBAAIgUgVIAQADQBIAQAHACIAAADgAgMieIAAgCIAAACQgHgChIgQIgQgDIAkg/QAJAEANAAIAAAAIAAAAIAIAAIABgBIgBABIgIAAIAAAAIAAAAQgNAAgJgEQgkgSAQhIQA3gYAIAsIAdgwIAAAeQAtggACg2QATAbgTAjQAagIAJgKIAYAHQgHgBgHABQgkA+AkAaQAqAAgEhHIALgSQABAfgFAVQBDAahMAgQgDAOgGAMIhJAAQgGAoAqAAQgTALgiAJQggAHgGADIgDAAIgBAAIABABIAAACIgBgBgAgokNIABgJQAAgJgFgIQAFAIAAAJIgBAJgAg7kPIgBgGQAAgOAQgEQgHgPgUgNQAUANAHAPQgQAEAAAOIABAGgABimEQAMgSAAgZQAFAjALAQQgMgKgQACg");
	this.shape_251.setTransform(353.135,353.35);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FECE00").s().p("AlADDQgVACgJgKQgEgEgCgHQAiABATgiIACgHIgEgQQgIgcADgXQADghAYgWQBegRgRBIIgCAEIgGAVIgJAUIgEAGIgDAGIgTARQgYAWgOAVIgBABQggAxATAoQg4gnAlgqgAguAjQgTgGgSgIIgIgEIgFgDQgJgdAOgeIAIgOQBFhpFWhvIAcAAQgNAkgaAJQgcAIgOgKQAJASgLAWQgIAVgJAKQgNAQgOADQgJgDgGgKQgMgRgEgiQAAAZgNASIgOAQQgJAJgaAJQATgjgTgbQgCA2guAfIAAgdIgdAwQgIgtg2AYQgQBJAiASIgiA+IgbgKg");
	this.shape_252.setTransform(344.35,330.875);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FE9901").s().p("AkpEfIgNgIQgUgoAggxIABgBQAOgUAYgWIAUgSIADgGIADgGIAJgUIAHgVIABgEQARhIhdARQAcgZA5gLQAcA5ArAHIADAbIAAAEIgCAVQgBAOgDAMIgIAYQgMAYgTATQgRASgXANIgPAEQg5ASgFAtIgCgBgAhzAMQgigUgbgeIgRgVIACgCIBIgoIATgJIAIgFQCvhbDkhSQgMAPATABQlVBwhFBoIgIAPQgPAdAJAdIgJgFg");
	this.shape_253.setTransform(345.3058,330.55);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#1E1510").s().p("AgzAEQApgeAigVQAMAlAQACQgMAGgBACQgxAZgVAXQgPgYgFgUg");
	this.shape_254.setTransform(326.95,310);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#584A41").s().p("Ai/A2QAdgSAegPIAIgFQCIhICYgjIAcApIgEgBQjIBFhwA2IgIAEIgfAQQgQgBgMglg");
	this.shape_255.setTransform(348.525,299.825);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#7B5741").s().p("AhIBnQAVgXAxgbQABgBAMgHQgLA5AXA4IhHAoIgDACIghAUQgSgwAehFgAhkgBQABg2AcgtQAnhCBCgfIAHgDIAIgDIAYgJIAdgHQgQAKgNAMIgYAWIgIAJQhHBOAOBfQgjAVgpAfQgKgdACgfg");
	this.shape_256.setTransform(331.0898,304.525);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#B19482").s().p("AjNBSIAegQIAIgEQBxg2DIhGIADACQAvAUApAwQjlBSivBbIgIAEIgSAKQgXg5ALg4gAiviCIAIgJIAYgWQANgLAQgLQBMgSArAMQAkAKAaASQALAIAIAIQARASATAZQiXAkiKBIIgIAEQgdAQgdARQgOheBIhPg");
	this.shape_257.setTransform(352.7867,300.8639);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AAEAYIAMAEAgRgmQAnAegEAlIgCgBAgCAjQASAJAAgQ");
	this.shape_258.setTransform(340.593,408.012);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f().s("#BB7B57").ss(0.5,1,1).p("AAbhAQADAFABAHQADAkhBBR");
	this.shape_259.setTransform(347.3065,390.8);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f().s("#B1B1AF").ss(0.5,1,1).p("AA5gTIASADIg2BDIgNgGgAAIAtIhSgfIA9hAQAfAeAnAB");
	this.shape_260.setTransform(336.625,399.05);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AgQhDQABAGgBAHQgDAkgtA3ABBg8QgBAHgCAIQgMBIgsAp");
	this.shape_261.setTransform(341.675,390.225);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f().s("#503522").ss(0.5,1,1).p("AAFgwIgFBEIAJADIgBAaIgQgB");
	this.shape_262.setTransform(350.95,379.55);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f().s("#6D5D50").ss(0.5,1,1).p("ABZClIABAaIgTgCIhRgHIg4gGIgHgWIARABgABXBWIACBPAhZAOQAZhrBNhh");
	this.shape_263.setTransform(341.025,365.25);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f().s("#53392A").ss(0.5,1,1).p("AgHhFQAEBxALAa");
	this.shape_264.setTransform(332.8,373.65);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f().s("#B86D43").ss(0.5,1,1).p("AAsAjIhPgCIgEAIAgrgnIAIAJQADAAADAAQAQAAATgK");
	this.shape_265.setTransform(358.15,362.925);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f().s("#CE9F81").ss(0.5,1,1).p("ABFgCQgeACgVgLQgKgLgBgWQAAgKABgMAhHguQADAvAaAfQAKALAKAGQATANAdAEQAVACAZgB");
	this.shape_266.setTransform(347.175,367.3167);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f().s("#503321").ss(0.5,1,1).p("AgHgaQAQAYgBAXIgNAG");
	this.shape_267.setTransform(353.6028,350.05);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AgGh/IAVgTQANABAJADQAnAIAWASQgFAOgFAKQAHAOAEAQQAJAdgBAhQAAAiAEAuAA1hLIAWAFQAGgJAHgNAA1gOQgBAEgBAFIgCAVQATANAPgLIAIgeAA4gkQgCAKgBAMIANAJIAZgHAA4gkIAjAJIAAAPAA1hLQAFAPgCAYAgKhkQAEgDAFgBQAngWAPAzAg8BpIgDAOQgEAYATgTQAYAHAXAEQACAZARgcAg8BpQAIADAKADQATAGAWgCIAAAUAhjBpQAWAJAOAFAhuBMQAjAVAPAIAgVAVQAiAPAkgUAgIAAQAdAGAegLAgwB8IAGgN");
	this.shape_268.setTransform(343.05,359.0272);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f().s("#B16D44").ss(0.5,1,1).p("AAAALIABgV");
	this.shape_269.setTransform(352.925,346.225);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#E45C2A").s().p("AgJgHIASACQADAFABAHIgZAAIADgOg");
	this.shape_270.setTransform(349.175,384.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#F09A67").s().p("AgcBCQAqgpANhHQgpAEglgNQAAgHgBgGIBRAHIgCAPIAZgBQADAjhBBRg");
	this.shape_271.setTransform(345.2065,390.375);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AAIAsIAxhAIASADIg2BEgAAIAsIhSgeIA9hAQAfAdAnABIgxBAg");
	this.shape_272.setTransform(336.625,399.05);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#7C5842").s().p("AgHAzIgBgZIgChOIARAIIgHBEIAKACIgBAbg");
	this.shape_273.setTransform(350.8,379.175);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#8E7769").s().p("AAsAYIAAgUQAKALAKAGQgIAOgGAAQgEAAgCgLgAgBANIAEgNIgEANQgTASADgYIADgNIARAGQAUAGAVgCIAAAUQgXgFgWgGgAg1gGIgKgcIAxAcIgDANIgkgNgAAsAEgAgOgGIAAAAg");
	this.shape_274.setTransform(338.425,370.1772);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#7A5640").s().p("AAABFQgMgagEhwIALAcIAFAOQADA5AOApg");
	this.shape_275.setTransform(333.675,373.7);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#F09A69").s().p("AAABrIAFhAQAQAAAUgKIAmBMgAhOhsIA/AEIgDAXQgVgTgngIg");
	this.shape_276.setTransform(354.65,355.575);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#EA7842").s().p("AgGgnIAHAJIAGAAIgGA/IgDAIQgEguAAgig");
	this.shape_277.setTransform(354.425,362.95);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#F8C6A3").s().p("AhfCNQAtg3ADglQAlANApgEQgMBJgrApQgngBgggegAAyg6QgegEgTgNQgJgFgKgMQgagfgDgwQAlANApgKQABAVAKALQAVALAegCIADBGIgQAAIgegBg");
	this.shape_278.setTransform(344.775,379.8);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#F19967").s().p("AgnAGIAJgOQAhAPAlgUIgBAWQgTAFgRAAQgVAAgVgIg");
	this.shape_279.setTransform(343.975,361.9596);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#B19482").s().p("AAzDGIhRgHIg4gFIgHgXIARABQgOgogEg7IgFgNIAkAOQgEAYAUgTQAXAHAXAEQACAZARgcQATANAeAEIACBOIiRgKICRAKIABAagAgqA6IgSgGIgxgdQAZhqBOhhIAVgTQAMABAKADQAnAIAVASQgDAOgGAKQAHAOAEAQQAJAdgBAhQAAAjADAtQgeACgUgLQgLgLgBgVIABgWIAAAAIACABQAJAGAIAAIAAAAIABAAQAHAAAFgEIABgBIAIgfIAAgPIgigJIAAgMQAAgQgDgLQgKgkgXAAIAAAAIAAAAQgKAAgKAGIgBABQgFABgEADQAEgDAFgBIABgBQAKgGAKAAIAAAAIAAAAQAXAAAKAkQADALAAAQIAAAMIgDAWIAOAJIAXgHIgIAfIgBABQgGAEgGAAIgBAAIAAAAQgIAAgJgGIgCgBIAAAAIADgWIgDABIgBAAQgTAHgSAAIgBAAIAAAAIgQgBIAAgBIgCAAIACAAIAAABIAQABIAAAAIABAAQASAAATgHIABAAIADgBIgDAWQglAUgggPIgJAPQADAvAZAfIgLABQgPAAgPgFgAA0g6IABgJIgBAJgABLh7QAGgJAHgNQgHANgGAJIgWgFgAAxgkIAAAAgAA1hDIADgWIAiAJIAAAPIgXAHgABahBgAA4hZg");
	this.shape_280.setTransform(343.05,364.325);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#7B5741").s().p("AgMgCQAGgKAEgOQAQAYgBAWIgNAHQgFgQgHgNg");
	this.shape_281.setTransform(353.1278,350.05);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AgUgQIACAUIAWAVQAagMgOgl");
	this.shape_282.setTransform(343.542,412.325);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f().s("#8E3B3E").ss(0.5,1,1).p("AgHADQAHgEAIgB");
	this.shape_283.setTransform(335.3,400.6);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f().s("#ACA193").ss(0.5,1,1).p("AAMgeIgxAGIA2BJIAlgIIAMABIgfhBABCArIAAgBAhBgbQAEgUAKgBIgCAQ");
	this.shape_284.setTransform(339.775,405.725);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f().s("#CFA48A").ss(0.5,1,1).p("AANhLQAGADAFACQBDAfglBFQg5Aqg/AE");
	this.shape_285.setTransform(353.0436,402.475);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f().s("#B96F48").ss(0.5,1,1).p("AgkhDQAHAEADABQA9AQACA9QgQApgbAM");
	this.shape_286.setTransform(359.1,398.675);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f().s("#6C5D4E").ss(0.5,1,1).p("AhNgSIgIAOQAPAHAQAIQACAXAPgRQAXAJAZAFAhcgdQAFAEAEAEQADACADABQAQAIAOAHQAJADAHADIgGAOAhjgOQgEAQASgGAhkgkQADAEAFADIgHAPAhlguQgRANAPAQQACABACACAgvgDIgHAOAAeAVIAAAMQAUADAXABQACATAOgSQAIAAAJgBQAEgGABgJQABgIgCgLAAMASIgBANQAIAYALgWAAMASQAKACAIABQAaAGARgCIAAAMAgfADQAaAKARAFABXAVIACARABXAVQAMgGADgNABJAZQAIgBAGgD");
	this.shape_287.setTransform(340.8205,388.0688);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f().s("#53392A").ss(0.5,1,1).p("AgdiuQAHgLARgEAhjheQgaAoAAAqQAAAFABAFAhQhpQgkA+AJA3ABXA4IAOACIABgMIAeAEIgKAVAh/APQgRBfBJAuQAVANAcAKQAMAEALADQAJACAKACQiYgrAXh3");
	this.shape_288.setTransform(343.2403,384.725);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f().s("#E59A26").ss(0.5,1,1).p("AA1h6QgxgBgcAQQgoAXgBA3QAHA9g3gHQgCAWAcgCQgaA6AoAQQAIACAMACQgHgcAxgKQAYgGAVgLQAJgFAKgGQAjgaAQgqQAJgZABgb");
	this.shape_289.setTransform(329.8184,368.4471);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f().s("#007BBF").ss(0.5,1,1).p("AgSgkQgNABgHAOQAAACgBACQAXAyAjADQACAAABABQAKgBAIgS");
	this.shape_290.setTransform(339.05,358.3);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f().s("#B8684D").ss(0.5,1,1).p("AgWARQAaACATgHQgKgKgFgS");
	this.shape_291.setTransform(358.375,384.8313);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f().s("#DDAE8C").ss(0.5,1,1).p("AgJgcIAFAIQARgaADgSIBIAgQgIAZgNATQgNAUgSAOQgQAMgTAHQgDAAgEAAQgEAAgEgBQgqgGgYgtQgDgIgEgI");
	this.shape_292.setTransform(352.475,381.875);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f().s("#4F3B29").ss(0.5,1,1).p("AgFgPQAMAHAAAY");
	this.shape_293.setTransform(353.9,367.95);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f().s("#6D5E54").ss(0.5,1,1).p("AAzicQACgIADgJQgogaghgLQgWAEgLAaQAFAHAFAFAAFiJQANAFAPACQAKgLAIgPQAFAMABAOQAAAFABAEQAAAPgFAQIgCASIgTAHIAKAPIAJgWAg6gzIAIAcQAGABAFAAQAggCAhgQQAGgEAGgEQACgBACgBAAVheIAgAEAAVheQABAIABAHIAJAOAAMDFIgEALIAVADIAmhkIAKgfIgZgIIgEAKgAAFiJQALAaAFARAg6gzQAtAHAkgjAg6gzQgshqA+gLQASATAbAMAgXDHQAWACANgE");
	this.shape_294.setTransform(347.6868,383.825);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f().s("#AA7257").ss(0.5,1,1).p("AApAOIgHALAgngLIgBgN");
	this.shape_295.setTransform(349.85,363.925);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f().s("#CC9D7A").ss(0.5,1,1).p("AiHAOQAtAaAlANQBKAaAvgeAAnAmQgHALgTACAAvAIQABATgJALQAIAQAVgFACHhAQAAAJgDAKQgEAMgIALQAUAQgFALQgOATgagCQgMAQgPAL");
	this.shape_296.setTransform(359.374,360.0536);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f().s("#4D320D").ss(0.5,1,1).p("AhNgcQAMAGAEAHQADAHgBAIAhRAIQAKgLAMADQgBAHgIAIABEgFQAFADADACQAJANgFAQQgJgTgWAE");
	this.shape_297.setTransform(360.5293,354.875);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f().s("#C59E7F").ss(0.5,1,1).p("AAcALQAGgKgBgIQAAgDgBgDQgDgLgNgNQghgZgPArQAAACAAACQgCAdAKAPQAHAOAQAE");
	this.shape_298.setTransform(353.2655,354.4404);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f().s("#312919").ss(0.5,1,1).p("AjYArQgKgSAFgXQAqgJAsgIQCrghC0AHQAKASgEAZ");
	this.shape_299.setTransform(356.6005,335.6564);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f().s("#6D5B48").ss(0.5,1,1).p("AkNCZQAQgDARgCQAjgIAogGQCsgaDzgDQAIgCAIAAQgNgogwgtQixgIivAfQgrAIgrAJQgnAogBA3gAjqASQATihDVgKQAKAAAKACQCMAZAtBl");
	this.shape_300.setTransform(357.925,334.1);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f().s("#D59C31").ss(0.5,1,1).p("AhvAcQAVAEAQgHQAGgDAGgFQAMgLAIgTQAFAWgEASQgCAJgFAIQAHABAGAAQADAAADgBQAqgFAVg1QAxAXAcgmQgRACgLgLQgFgDgEgD");
	this.shape_301.setTransform(375.85,349.1333);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f().s("#DB9D22").ss(0.5,1,1).p("AgagCIAkgeIgEAaQAqgOAWgnQAEAegTAQAjCArQAPANATALQAMAIAPAGIAygpAjCArQAIghAZgWQA3g1CSgCQBnAEBqgRAj4grQADALAFAKQAJATALAQQAMAQAOAO");
	this.shape_302.setTransform(359.175,353.325);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#F09A69").s().p("AgkgjIAKgeQA9AQACA+QgQAogaANQAjhGhCgfg");
	this.shape_303.setTransform(359.1,398.95);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#E53228").s().p("AggAHIACgPQAHgFAIgBQAUANAcAKIgxAGg");
	this.shape_304.setTransform(337.675,401.8);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FDFDFD").s().p("AASAxIgBgVIAlgIIglAIIg2hJIAxgGIAXAHIAfBBIgMgBQAOAmgbAMgAgzhFIgCAQIgMAFQAEgUAKgBg");
	this.shape_305.setTransform(339.775,407.825);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#DA7953").s().p("AgJANIAJgeIAKAGIgKAdIgJgFg");
	this.shape_306.setTransform(355.375,393.625);

	this.shape_307 = new cjs.Shape();
	this.shape_307.graphics.f("#E89F74").s().p("AANgxIALAFQgXBIgYAWg");
	this.shape_307.setTransform(353,399.9);

	this.shape_308 = new cjs.Shape();
	this.shape_308.graphics.f("#755641").s().p("AgYALQAEgGABgIIAOACIABgMIAdAEIgKAVIgYgJIgEAKg");
	this.shape_308.setTransform(353.9,390.7);

	this.shape_309 = new cjs.Shape();
	this.shape_309.graphics.f("#7C5841").s().p("AA4CQIgXgHQgcgKgUgNQhKguARheIAFAEQgEARASgIQgYB2CZArIgUgEgAg8glIgJgHIAAgKQAAgqAZgoIATgLQgjA+AJA4IgJgIg");
	this.shape_309.setTransform(337.6653,388.925);

	this.shape_310 = new cjs.Shape();
	this.shape_310.graphics.f("#8E7A6A").s().p("ABJAlIAAgMIAAAMQgXgBgUgDIAAgMIAAAMQgLAWgIgYQgZgFgXgJQgPARgCgXIAHgOIAQAGIgGAOIAGgOQAaAKARAFIgBANIABgNQAKACAIABQAaAGARgCQAIgBAGgDIACARIgCgRQAMgGADgNIAIABQACALgBAIQgBAJgEAGIgRABQgHAJgEAAQgEAAgBgKgAg2ALIgfgPIAIgOIAeAPIgHAOIAAAAgAhjgOIgEgDQgPgQARgNIABAKIAIAHIAJAIIAGADIgIAOQgFACgEAAQgHAAACgMgAhjgOIAHgPg");
	this.shape_310.setTransform(340.8205,388.0688);

	this.shape_311 = new cjs.Shape();
	this.shape_311.graphics.f("#D16729").s().p("AgTgMIAMgIQAMABAIAJQgCAKgFAGQAHABAHAAIgMAOQgEgUgXgNg");
	this.shape_311.setTransform(370.35,352.9);

	this.shape_312 = new cjs.Shape();
	this.shape_312.graphics.f("#489ED6").s().p("AATAlQgigFgYgxIABgEQAHgOANgBQALAQANAPQAQAMASALQgIARgKACIgDAAg");
	this.shape_312.setTransform(339.05,358.3);

	this.shape_313 = new cjs.Shape();
	this.shape_313.graphics.f("#7B5741").s().p("AgBARQgCgOgFgLIAFgRQAMAGAAAYQgCASgIADIAAgJg");
	this.shape_313.setTransform(353.65,369.025);

	this.shape_314 = new cjs.Shape();
	this.shape_314.graphics.f("#B19482").s().p("AgKAdQgEgRgMgZQANAFAPACQAKgLAHgPQAGAMABAOIAAAIQABAPgFAQg");
	this.shape_314.setTransform(350.8,371.425);

	this.shape_315 = new cjs.Shape();
	this.shape_315.graphics.f("#EC9C66").s().p("AgWARQASgPAMgSQAFASAKAKQgOAFgSAAIgNAAg");
	this.shape_315.setTransform(358.375,384.8313);

	this.shape_316 = new cjs.Shape();
	this.shape_316.graphics.f("#F89B63").s().p("AggABQAggBAhgQQgVAegkADIgIgQg");
	this.shape_316.setTransform(346.95,381.45);

	this.shape_317 = new cjs.Shape();
	this.shape_317.graphics.f("#FECF00").s().p("Ak7BmQgdACACgXQA4AIgHg+QABg3AngWQCGAMiMBzQg6AiAQBBQgpgRAbg5gAhfgaQgTgLgPgNQAIgiAZgXQA3g1CSgCQBnAFBqgRQAMAKARgBQgcAngxgZQgWA3gqAFIgGABQgGAAgHgBQAFgIACgJQAEgSgFgXQgIAUgMALIgMAIQgQAHgVgEQATgQgEgeQgWAmgqAPIAEgaIglAeQgDgLgNgNQghgZgPArIAAADQgCAeAKAQIgyApQgPgGgMgIg");
	this.shape_317.setTransform(352.6934,362.75);

	this.shape_318 = new cjs.Shape();
	this.shape_318.graphics.f("#F8C7A2").s().p("Ah1E4IgehBIATADQAWACAOgDIgDAKIAVADQAZgWAXhJQBCAfglBGQg5Aqg/ADgAg+BhIgIgBQgrgGgXguQAlgDAVgfIANgHIAFAIQASgZACgSIBIAfQgJAZgMAUQgNATgSAPQgPALgTAIIgIAAgAgpiFQglgNgtgaIAygoQAIANAQAFQgQgFgIgNQgKgQACgeIABgEQAPgrAhAZQANANAEAMIABAFIAAADQAAAIgFAJQAFgJAAgIIAAgDIgBgFIAjgfIgDAaQApgOAWgnQAFAegTARQAUAEARgIQAXAOAEAUIAMgOIAGgBQgBAKgDAJQgEAMgIAMQAVAQgFAMQgOATgagDQgNARgPAKIgBABIAAAAIgIABIAAAAIAAAAQgMAAgGgKIgBgCQAHgJAAgQIAAgGIAAAGQAAAQgHAJQgIAKgSACQASgCAIgKIABACQAGAKAMAAIAAAAIAAAAIAIgBIAAAAIABgBQgZARghAAQgcAAgjgNgABojRQACgFAAgGQAAgJgGgIIgIgHIAIAHQAGAIAAAJQAAAGgCAFIgBAAQgHgPgPAAIgBAAIAAAAIgGABIgBAAIABAAIAGgBIAAAAIABAAQAPAAAHAPIABAAgAgsjeQAIgJABgHIgBgBIAAAAIAAAAIgEAAIAAAAIAAAAQgIAAgHAHIgCACIAAABIAAgBIACgCQAHgHAIAAIAAAAIAAAAIAEAAIAAAAIAAAAIABABQgBAHgIAJgAgjjuIAAgGQAAgEgCgFQgEgHgMgGQAMAGAEAHQACAFAAAEIAAAGgAh5ieIgCgOQAtAaAlANIgHALQgngagigKgABQiJIAAAAgAA0iTIAAAAgABykWQAMgKAIgUQAGAXgFARQgIgJgNgBg");
	this.shape_318.setTransform(358.149,378.7);

	this.shape_319 = new cjs.Shape();
	this.shape_319.graphics.f("#FE9B01").s().p("AkyCwQgQhBA7giQCLhyiFgMQAdgQAxAAIgBAEQAYAyAjAFIADAAQgBAagJAaQgQAqgjAaIgTALQgVALgZAGQgxAKAHAdIgUgFgAifhQQgLgRgJgSQgFgLgEgLQAjgIAogGQCsgaDzgDIAIAGQhrARhmgEQiSACg4A1QgYAXgIAiQgPgPgLgQg");
	this.shape_319.setTransform(353.1032,362.7);

	this.shape_320 = new cjs.Shape();
	this.shape_320.graphics.f("#584B40").s().p("AiygGQCsgiCyAIQAKARgDAaQixgIiwAfQgFgQABgYg");
	this.shape_320.setTransform(360.9877,334.8064);

	this.shape_321 = new cjs.Shape();
	this.shape_321.graphics.f("#B19582").s().p("AhiGrIADgLIAlhzIglBzQgOAEgWgCQiZgrAXh3IAfAQQACAXAPgQQAXAJAaAEQAIAZALgWQAUADAXABQACASAOgSIARAAIALACIADgKIAaAIIgLAfIglBkgAiREaQgIAAgKgDQgSgEgagLIgQgHIgegPIgGgCQgJg4Akg+QAjgaAQgrQAHgLARgEQAEAHAGAFQgGgFgEgHQAKgaAXgEQAiALAnAaIgFARQgHAPgKALQgQgCgNgFQALAaAFARIAhAEIAKAHQgCASgSAaIgFgJIADgCIgJgPIAJAPIgDACIgNAIQghAQghACIgKgBIgIgcIAOABIAAAAIABAAQAkAAAfgdQgfAdgkAAIgBAAIAAAAIgOgBQgSgsAAgcQgBgnAlgGQARATAcAMQgcgMgRgTQglAGABAnQAAAcASAsIAIAcIAKABIAIAQQAXAtArAHQgDANgMAGQgGADgIABIgIAAQgPAAgUgFgAhBCoIAKgWgAg3CSIgTAHIATgHIACgSgAhTCLIAJAOIgJgOIgDgPIADAPgAilCnIAAAAgAiUjsQCvgfCxAIQAwAsANApQgIAAgIACQjzADisAaQgBgdAThAgAANmtQCMAZAtBlQi0gIirAiQAVh+CRgag");
	this.shape_321.setTransform(358.419,361.925);

	this.shape_322 = new cjs.Shape();
	this.shape_322.graphics.f("#1E160F").s().p("AgsgKQArgLArgHQgBAZAFAPQgrAIgpAJQgKgSAEgVg");
	this.shape_322.setTransform(338.8802,337.025);

	this.shape_323 = new cjs.Shape();
	this.shape_323.graphics.f("#7B5740").s().p("AhnA6QAqgJAsgIQgUBBACAcQgpAGgiAIIghAGQAAg3AogpgAB6iYQALAAALACQiSAagUB8QgsAHgqALQATihDTgJg");
	this.shape_323.setTransform(345.35,334.1);

	this.shape_324 = new cjs.Shape();
	this.shape_324.graphics.f().s("#B96F48").ss(0.5,1,1).p("Ag+hXIADAGIAwBpIBZASIglAtIgCABAhOhCIAQAt");
	this.shape_324.setTransform(377.35,394.925);

	this.shape_325 = new cjs.Shape();
	this.shape_325.graphics.f().s("#4D320D").ss(0.5,1,1).p("AgRAGQAQAAAHAMQAHgFAEgHQABgIgCgP");
	this.shape_325.setTransform(381.3,375.45);

	this.shape_326 = new cjs.Shape();
	this.shape_326.graphics.f().s("#CE9F81").ss(0.5,1,1).p("AhigpQAAABABABQBKB9AfAJQAgAIAEgBQAEgBACAAAgdhmIANAVIAMAVIAuBNQAdAYATADIAIAF");
	this.shape_326.setTransform(371.6,398.7515);

	this.shape_327 = new cjs.Shape();
	this.shape_327.graphics.f().s("#8D3F2A").ss(0.5,1,1).p("AgLgQIAQAAAgSARIAlAA");
	this.shape_327.setTransform(332.55,400.175);

	this.shape_328 = new cjs.Shape();
	this.shape_328.graphics.f().s("#A0A9AA").ss(0.5,1,1).p("AgmgyIAHgiQgKAAgOAPAgFA1QABAUgOAMQAXgBAEgUQAKAFAKACIAbg1AgFA1QAHAGAHAFAgFA1IgBhdIAOAF");
	this.shape_328.setTransform(334.525,407);

	this.shape_329 = new cjs.Shape();
	this.shape_329.graphics.f().s("#C39F83").ss(0.5,1,1).p("AhmALQCaA8Amg1QALgPACgWQAAgLgBgM");
	this.shape_329.setTransform(347.725,412.9859);

	this.shape_330 = new cjs.Shape();
	this.shape_330.graphics.f().s("#B36C49").ss(0.5,1,1).p("AATguQASA0g7Ap");
	this.shape_330.setTransform(359.0726,410.025);

	this.shape_331 = new cjs.Shape();
	this.shape_331.graphics.f().s("#0477BE").ss(0.5,1,1).p("AASAqQgQALgMgLQgXggAeg3QANgDALAG");
	this.shape_331.setTransform(364.7556,367.7901);

	this.shape_332 = new cjs.Shape();
	this.shape_332.graphics.f().s("#E79422").ss(0.5,1,1).p("ABNhZQAnAHAmAmAiYAqQgKgxA/gVQgWgWAWgKQAcAzA/g8QAqgcArAIQBWBTiLAIQiOgWgiA+QACAJADAJQAVghBcA8QAYAEAUAAQAVABARgCQAlgEAbgOQAFgDAFgDQAOgJALgN");
	this.shape_332.setTransform(348.9565,367.6161);

	this.shape_333 = new cjs.Shape();
	this.shape_333.graphics.f().s("#725F4F").ss(0.5,1,1).p("Ah5g8IATgKQADAHAEAGQALATALARQAEAGAGAHQAQAVATAQIgPARQgFAbAVgPQAUAKAUAGQADAbASgYQAMABANgBIAAgNIAAgDQANgIAMgKQAYgUAWgYAh5g8QgCgEgBgEQABgOANgFQAEAIAEAJAhxgsQABADACADQAIARAKAOIAAABQgTALAdADQgBgCgBgBIAVgNAhcgHIATgOAh5g8QgTAXAbgHIASgNAAYA7QAIACAKACIgIAOAgcAdQAHAGAHAFIgNASAgOAoQASAMAUAHIgLAPAAqA/QAIABAJAAAhSAIQASAXAVAP");
	this.shape_333.setTransform(348.8283,394.9272);

	this.shape_334 = new cjs.Shape();
	this.shape_334.graphics.f().s("#6F5846").ss(0.5,1,1).p("AA1glIALAJIALAIIgYAQIhnA+IgLAIIgLgdgAAShBIAaAWIAJAG");
	this.shape_334.setTransform(352.875,409.2);

	this.shape_335 = new cjs.Shape();
	this.shape_335.graphics.f().s("#573A27").ss(0.5,1,1).p("AiGhWQAog8BTgiACwhWQAJgFgCgMABZBRIAJgGIASAUIgSAKIgSAKAA8AsIAdAlAA8BjIAdgSAiUhDQgqAzAJA1QAFAQAJARQAEAIAFAIQASAaAeAcQARAOAVAQQAHAFAIAG");
	this.shape_335.setTransform(351.2245,394.825);

	this.shape_336 = new cjs.Shape();
	this.shape_336.graphics.f().s("#6B5D4B").ss(0.5,1,1).p("AA4hYIgRgSQgYACgTAJQgFACgFADIAAABIAFAhAgpA2QAAgBAAAAQg6hYAtgTQACgBABgBQASgKATAHQACABABAAIAAABQABAAABABQADABADACQASAKAXAmIAegLIAHgCAA2AUIASAVQgBADgBADQgUAmgrANQgHADgIACAgpA2IgQAOQAOApAdgCIAGgEAAzARQgGAOgMALQgJAGgJAFQgTANgZAFQgGgJgGgIAgiBJIAaAeAAzARIADADQAVgQgHgUAAmgFQAGAKAHAM");
	this.shape_336.setTransform(361.6372,383.8276);

	this.shape_337 = new cjs.Shape();
	this.shape_337.graphics.f().s("#59330F").ss(0.5,1,1).p("AgPgRQAUARgJAVQAXgIgDgh");
	this.shape_337.setTransform(388.7667,387.875);

	this.shape_338 = new cjs.Shape();
	this.shape_338.graphics.f().s("#CCA082").ss(0.5,1,1).p("AiLhmQACAMADAMQAFAYAIAWQAJAWALATIAAAAAh7AbIAGADIAIAEIAIgZQABADACADQAaAyAqAMQAIADAJACQANADARAAQAHgBAIAAQACACACABQAWAWATgJQANgGgCgcQAcgCAYgUAgfAxIASAhAgfAxQAYAIAPgWAgzAkQALAIAJAF");
	this.shape_338.setTransform(381.275,385.2036);

	this.shape_339 = new cjs.Shape();
	this.shape_339.graphics.f().s("#DD9A2A").ss(0.5,1,1).p("AjohNQAHgGAIgEQA7ghBeAzQAIAFAKAGQAGAEAIAFQAjAXApAiQBYBjBVA4Ai+jBQgaAfgKAkQgHAXABAaQgBARAEATQACAOAFAPAgqAPIAkAAQgIANgSADQgCAAgDAAQADABACACQAwAVAwgMQgRATgsAGQASAMAPAGQAJAFALAAQAUACAWgIQgQAXgUAMQgHAEACAKQA0ApAxghQAZA7AygIQgPgJgBgVADYCLQAAANABAL");
	this.shape_339.setTransform(389.5719,376.2224);

	this.shape_340 = new cjs.Shape();
	this.shape_340.graphics.f().s("#DB9D22").ss(0.5,1,1).p("AgvgGIAbAEIBEAJ");
	this.shape_340.setTransform(372,375.6);

	this.shape_341 = new cjs.Shape();
	this.shape_341.graphics.f().s("#C59E7F").ss(0.5,1,1).p("AAPAoQAAgBACgBQAGgBAFgFIABAAQACgBACgDQAAgBABAAQACgCABgCQADgFACgGQAAgCAAgBQABgFABgEQAAgDAAgFQAAgDgBgFQgBgHgDgEQgBgCAAAAIAAgBQgEgEgEgCQgBgBAAAAIgBAAQgDgCgEAAQgDgBgCABQgGgBgJADQgCABgCABQgCAAgBABQgCAAAAACQgbAUgGASQAAACgBADQgEAPAIAO");
	this.shape_341.setTransform(381.0717,375.2125);

	this.shape_342 = new cjs.Shape();
	this.shape_342.graphics.f().s("#312919").ss(0.5,1,1).p("AjLiIQAGgXAUgNQArAYApAbQChBtCICQQgFAXgYAS");
	this.shape_342.setTransform(399.275,364.675);

	this.shape_343 = new cjs.Shape();
	this.shape_343.graphics.f().s("#6D5B48").ss(0.5,1,1).p("AkHh9QAKAHAMAHQAEADAEADQAjAWAkAbQAJAGAJAHQAXARAYASQB4BeCOCHQAMALALALQAJAFAFAGQAWgqgDhIQiGiQijhwQgogcgpgZQg/ABgrArgAiDjNQCNhyCwCeQAKAJAGAJQBbCAgrBy");
	this.shape_343.setTransform(394.6874,367.986);

	this.shape_344 = new cjs.Shape();
	this.shape_344.graphics.f("#F89B63").s().p("AgtAhIgBgDIAGgHQAqgNAUglIADgGIAGADIAQAsIgMgUIgNgVIANAVQgaAmg2ACIAAgBg");
	this.shape_344.setTransform(366.375,391.325);

	this.shape_345 = new cjs.Shape();
	this.shape_345.graphics.f("#F09A69").s().p("AAgBTIABgBIAIAFIgIgFQgTgCgcgYIgwhOIgPgsIAHAEIAIgZIADAGIAwBpIBZASIglAtIgBABg");
	this.shape_345.setTransform(377.35,394.95);

	this.shape_346 = new cjs.Shape();
	this.shape_346.graphics.f("#EF2D35").s().p("AgSARIAHghIAQAAQAEAQAKARg");
	this.shape_346.setTransform(332.55,400.175);

	this.shape_347 = new cjs.Shape();
	this.shape_347.graphics.f("#FDFDFD").s().p("AgPAxIgOgLIgChdIAPAFQARAbAeAaIgbA1QgIgCgLgFg");
	this.shape_347.setTransform(337,408.475);

	this.shape_348 = new cjs.Shape();
	this.shape_348.graphics.f("#FA996A").s().p("AAzgfIABAXIhnAng");
	this.shape_348.setTransform(352.8,411.85);

	this.shape_349 = new cjs.Shape();
	this.shape_349.graphics.f("#EC9D65").s().p("AgKAJIAAgVIAXgQIgLgIIARgKQASA0g7ApQAKgOACgYg");
	this.shape_349.setTransform(359.0726,410.025);

	this.shape_350 = new cjs.Shape();
	this.shape_350.graphics.f("#4B9ADB").s().p("AgKAqQgXggAeg3QANgDALAGQgHAYABAYQgBASAEASQgIAFgHAAQgHAAgGgFg");
	this.shape_350.setTransform(364.7556,367.7901);

	this.shape_351 = new cjs.Shape();
	this.shape_351.graphics.f("#795840").s().p("AhMCSQgfgcgRgaIgJgQQgKgRgEgQQgKg1ArgzIADAIQgTAXAagHIADAGQg4AtA+BdIA4BFIglgegABnBwIgJgHIAcgSIgcASIgagVIAAgNIAAgDQANgIAMgKIAdAlIAJgGIATAUIgTAKIgRAKgAhlhQQApg8BRgiQAVABARgCQhiAhg1BPIgJgRg");
	this.shape_351.setTransform(347.8632,394.225);

	this.shape_352 = new cjs.Shape();
	this.shape_352.graphics.f("#8B796A").s().p("AAxBKIAKgPIgKAPQgWgGgTgKIANgSQASAMAUAHIASAEIgIAOQgIALgFAAQgGAAgBgOgABFBNIAIgOIARABIAAANIgIAAIgRAAgABFBNgAgIAuIAOgRIgOARQgVgPgRgXIgCgDIAUgNQARAVARAQIAPALIgNASQgIAFgDAAQgIAAADgRgAg5gGIAAgBQgKgOgIgRIgDgGIATgNIAVAkIgTAOIATgOIAKANIgUANIACADQgegDATgLgAhVg8IATgKIAHANIgTANIgKACQgMAAAPgSgAhOgsgAhYhEQAAgOANgFIAJARIgTAKIgDgIgAhChGIAAAAg");
	this.shape_352.setTransform(345.2783,394.9272);

	this.shape_353 = new cjs.Shape();
	this.shape_353.graphics.f("#77533C").s().p("AAFAeIgGgEIgSgUQAUgQgHgUIAGgDQAJAXALATIAAAAIgIAZgAgBAJQAGgFAAgIIAAgEIAAAEQAAAIgGAFg");
	this.shape_353.setTransform(369.05,385.25);

	this.shape_354 = new cjs.Shape();
	this.shape_354.graphics.f("#F8C7A2").s().p("Ak1DHIAbg1IAmAeIAPALIAKAcIAMgHIBogpQgCAYgKAOQgSAZgsAAQgyAAhSgfgAAoCMQgggIhJh/QA2gCAagmIAMAVIAvBNQAeAYASADIgBABIAIAEIgvA0IgGABIAAAAQgGAAgegIgACkgCIgDgDIgPABQgRAAgOgDIgSghIAAAAQAHACAFAAIABAAIAAAAQAOAAALgOIAAAAIACgCIgCACIAAAAQgLAOgOAAIAAAAIgBAAQgFAAgHgCIAAAAIASAhQgJgCgIgDQgrgMgagyIgCgGQgLgUgJgWQgHgWgGgYIgEgYIAZAEIgZgEIAaAAIgBAEIBEAKIgBAJQAAAKAGAKQgGgKAAgKIABgJIACgFQAFgTAcgUQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAIACgBIAFgCQAJgDAHABIAEAAQAEAAAEACIAAAAIACABQAEACADAEIAAABIABACQADAEACAHIABAIIAAAIIgCAKIAAADIAAAAIAAANIAkAAQgIANgSADIgFAAIAFADQAwAVAxgMQgRATgsAGQARAMAPAGQAOAcgOAXIAWgDQgYAUgcACQACAbgNAGQgFADgGAAQgOAAgRgPgABhgoQgKgFgLgIQALAIAKAFgADHgqQAVgHAAgbIgBgHIABAHQAAAbgVAHQADgHAAgGQAAgOgOgLQAOALAAAOQAAAGgDAHgACdiBIABgCIgDgCIACAEgACQiXIgCACIACgCQAGgBAFgFIAAAAIAFgEIABgBIADgEQACgFADgGQgDAGgCAFIgDAEIgBABIgFAEIAAAAQgFAFgGABgACHipQAHgFAEgHIABgHQAAgHgCgKQACAKAAAHIgBAHQgEAHgHAFIgBgBIgBgBQgGgKgOAAIAAAAIAAAAIgBAAIgBAAIABAAIABAAIAAAAIAAAAQAOAAAGAKIABABIABABIAAAAgAEMhYQAUACAVgIQgPAXgUAMQAJgKgPgTg");
	this.shape_354.setTransform(368.4,394.2234);

	this.shape_355 = new cjs.Shape();
	this.shape_355.graphics.f("#FECF00").s().p("AFBCFQgwAig0gpQgCgLAHgDQAUgNAPgWQgWAIgUgCQgKgBgKgEQgPgGgSgNQAtgFARgTQgxAMgxgWIAAgCQATgEAIgMIgkAAIAAgNIgBAAIABgCIABgKIABgIIgBgIQgCgIgDgEIgBgCIAAAAQgDgFgEgCIgCgBIAAAAQgEgCgEAAIgFAAQgGAAgJADIgFACIgCAAQgBABAAAAQAAAAgBAAQAAABAAAAQAAAAgBABQgbATgFATIgCAFIhDgJIAAgFIgbAAQgEgPgDgOQgDgSAAgSIAPgKQA6ggBeAzIASAKIAOAJQAkAYApAiQBZBiBVA5QABAVAPAJIgMABQgqAAgWg1gABqAlIAEACIgBADIgDgFgAlWh6QgVgWAVgKQAcAyA/g7QAsgcAqAIQBWBTiLAJQiOgXgjA/QgKgyA/gVg");
	this.shape_355.setTransform(373.2065,377.0585);

	this.shape_356 = new cjs.Shape();
	this.shape_356.graphics.f("#DA6814").s().p("AgOgZQAJAFAKABQAQASgKAKQgHADACAKIgUAEQANgYgNgbg");
	this.shape_356.setTransform(394.652,387.4);

	this.shape_357 = new cjs.Shape();
	this.shape_357.graphics.f("#FE9B01").s().p("ADXAXQgpghgkgYIgOgJIgSgKQhegzg6AgIgPAKQgBgZAHgYQAKgjAaggIAIAGQAiAWAkAbIASANIAvAjQB5BeCOCHQAAAOABALQhVg5hYhjgAjgAVQgVgBgYgEQhcg7gVAhIgFgRQAig/CPAXQCLgJhWhTQAnAHAmAmQgeA4AXAgQgLANgOAJIgLAEIABACQgbAOglADQgOACgQAAIgIAAg");
	this.shape_357.setTransform(372.475,374.675);

	this.shape_358 = new cjs.Shape();
	this.shape_358.graphics.f("#1E160F").s().p("Ag2gIQAGgWAVgOQApAZApAaQgUAUgJARQgmgbgqgZg");
	this.shape_358.setTransform(384.35,351.8);

	this.shape_359 = new cjs.Shape();
	this.shape_359.graphics.f("#584B40").s().p("AijhtQAJgSAUgTQChBsCICRQgFAWgYASQiGiRijhvg");
	this.shape_359.setTransform(403.35,367.25);

	this.shape_360 = new cjs.Shape();
	this.shape_360.graphics.f("#7B5740").s().p("AjKAxIgIgFIgWgOQArgrA/gBQApAZAoAbQhCAlgUAXQgkgagjgXgAgQABQgpgagrgZQCNhyCwCeQAKAIAGAJQiJhchwBSg");
	this.shape_360.setTransform(391.575,352.411);

	this.shape_361 = new cjs.Shape();
	this.shape_361.graphics.f("#B19582").s().p("AlGEzIgPgKIg4hGQg+hcA4gvQAIASAKAOIAAAAQgTAMAeADQARAYAVAPQgFAaAWgPQATAKAWAGQACAcASgZQANABAMAAIAaAVIAJAGIiABLICAhLIALAJIALAJIgYAPIhoA/IgLAIgAj6C/IgSgFQgUgHgSgMIgPgLQgSgQgRgVIgKgOIgVgkIgHgNQA1hNBjgiQAlgDAbgOIAKgHQAUgIAXgDIASASIAFAZQAFAYAIAVIgHACIgdALQgYgmgTgKIgFgDIgFggIAFAgIgCgBIAAAAQgPgNgQAKQgHACgFAEQgUAJAAAVQAAAbAgAyIABACIgBgCQgggyAAgbQAAgVAUgJIADgBQASgLATAIIADABIAAAAIACABIAFADQATAKAYAmIAdgLQAHAUgUARIASAUIgDAGQgUAmgrAOIgPAEIAPgEIgGAGIABADIAAACQgVAZgZAUQgMAJgNAIIAAAEIgRgBgAi1B8IACAAIAHgFIgageIAaAeIgHAFIgCAAIAAAAIAAAAQgbAAgNgoIAQgNIALARQAagGATgMIASgMQANgKAGgOIADADIgDgDIgNgXIANAXQgGAOgNAKIgSAMQgTAMgaAGIgLgRIgQANQANAoAbAAIAAAAIAAAAgAisB3gAFiBlIgXgWQiOiGh5hfIgvgjIgSgNQAUgYBCgkQCkBwCGCRQADBHgWAqQgFgGgJgFgAitgoIAAAAgAB2koQBxhTCJBeQBbCAgrBzQiIiRiihtgAizhKIALgFIgKAHgAiohPIAAAAg");
	this.shape_361.setTransform(378.0585,382.1734);

	this.shape_362 = new cjs.Shape();
	this.shape_362.graphics.f().s("#B4724C").ss(0.5,1,1).p("AgqgxIAOAMIAqgMAgUAyQAmgCAZgR");
	this.shape_362.setTransform(360.825,377.625);

	this.shape_363 = new cjs.Shape();
	this.shape_363.graphics.f().s("#A9A2A5").ss(0.5,1,1).p("AgXAlIAmARIAAgQIABgHIAHhBIgkgTg");
	this.shape_363.setTransform(334.1,407.9);

	this.shape_364 = new cjs.Shape();
	this.shape_364.graphics.f().s("#B36F47").ss(0.5,1,1).p("AgIgBIARAD");
	this.shape_364.setTransform(336.5,413.475);

	this.shape_365 = new cjs.Shape();
	this.shape_365.graphics.f().s("#B17049").ss(0.5,1,1).p("AAognQATBbhlgO");
	this.shape_365.setTransform(352.867,411.2925);

	this.shape_366 = new cjs.Shape();
	this.shape_366.graphics.f().s("#A1A29F").ss(0.5,1,1).p("AAVgrIArA+QgaAagiAAIhDhIQAfACAjgT");
	this.shape_366.setTransform(347.8,407.075);

	this.shape_367 = new cjs.Shape();
	this.shape_367.graphics.f().s("#7B5742").ss(0.5,1,1).p("AgBABIADgB");
	this.shape_367.setTransform(354.075,375.975);

	this.shape_368 = new cjs.Shape();
	this.shape_368.graphics.f().s("#6F5A4B").ss(0.5,1,1).p("AAAgsIgSBQIgCAJIAcAAIANg5");
	this.shape_368.setTransform(356.075,398.925);

	this.shape_369 = new cjs.Shape();
	this.shape_369.graphics.f().s("#6B5749").ss(0.5,1,1).p("AhdgLQgEgDgDgDQgRgMARgOQAGAFAFAFQAJAGAKAGQARAKAVAIIgIASQAEAZAPgUQAaAHAhACQALAdAKgdQAYAAAbgCAhdgLQADAVAPgKQAQAIATAHAgggDQAHACAIACIgEATAhGgVIgFAVAhZghIgEAWAAnAKQAKABAJABIABARAAnAKIgBATAA6AMQATAAATgCAgRABQAaAHAeAC");
	this.shape_369.setTransform(341.4,386.6563);

	this.shape_370 = new cjs.Shape();
	this.shape_370.graphics.f().s("#51382B").ss(0.5,1,1).p("AhyAVQADBEAVAlQAiA4BRANQAOACAPABQAIABAJAAQAWABAWgCAgBjaQhyBaABB9AhaB+QgEAyArAr");
	this.shape_370.setTransform(342.7246,382.7);

	this.shape_371 = new cjs.Shape();
	this.shape_371.graphics.f().s("#CF9E82").ss(0.5,1,1).p("AgpisIAMARIATAZIAdAoIA7BQAh/iHQAIAMAIALQAbApAaAgQAHAJAHAIQAaAeAXAVQASglA3gCQAxAKABAwQgCAZgIARABSB5QAYgHAMgYABNAwQAYAigTAnAAFAdQAAATAIALQAEAIAIAFQADACAEACQAKAKgQAXQgBAHABAEQAAATANgHQACgDADgBQACgCADgDAgZCtIAZgRIAngYAA1A+QASAsgWARQATACAOgEABmAkQAWAWgGAg");
	this.shape_371.setTransform(356.9,391.7);

	this.shape_372 = new cjs.Shape();
	this.shape_372.graphics.f().s("#C77242").ss(0.5,1,1).p("AgjgTIgCAJAAfAUIAHgO");
	this.shape_372.setTransform(351.15,358.075);

	this.shape_373 = new cjs.Shape();
	this.shape_373.graphics.f().s("#634331").ss(0.5,1,1).p("AgKgkIAWA8IgNAN");
	this.shape_373.setTransform(356.05,362.35);

	this.shape_374 = new cjs.Shape();
	this.shape_374.graphics.f().s("#6F5A48").ss(0.5,1,1).p("AA5gxQAFgLADgLQgDgCgDgCQghgVgjgKQgHgCgHgBQgcARgGAZIALAJQgIABgIAGQgOAKgDALQgJAqAiA/IAMAdQAwgDAlghQAGgFAFgFIgFgMAAHghIAgAKQALgMAHgOQALAPAHATQAIAbgBAmQgCAbgGAhAAHghQAPATAOAdQAEAJAEALIAFALAAkAPIAhAHIAAATIgKADIgKACAA7AsIAAAmAg2BLQA4ADAqgrAgug6QAcgHAZAg");
	this.shape_374.setTransform(348.391,367.625);

	this.shape_375 = new cjs.Shape();
	this.shape_375.graphics.f("#F8C6A3").s().p("AglgKIABgJQAsgDAdAcIgGAOQgfgVglgJg");
	this.shape_375.setTransform(351.15,358.0562);

	this.shape_376 = new cjs.Shape();
	this.shape_376.graphics.f("#7A563F").s().p("AhHguQAhA4BRANIAeADQgkATgggCIgmAEQgrgrAFgyg");
	this.shape_376.setTransform(340.8787,399.95);

	this.shape_377 = new cjs.Shape();
	this.shape_377.graphics.f("#EF9B68").s().p("AgRDTIgDgjQAhAAAagaIAbgRQAQBQhLAAQgLAAgNgCgAiSDBIAAgQIABgHIARAbgAA2iYQAGghACgbIAOALIArgLIAdBRQgZARgnABg");
	this.shape_377.setTransform(350.35,393.9675);

	this.shape_378 = new cjs.Shape();
	this.shape_378.graphics.f("#FFFFFF").s().p("AhwAlIAKhaIAlATIgGBAIgCAIIAAAQgAgPgjQAfABAjgSIARABIAsA+QgaAagiAAg");
	this.shape_378.setTransform(343,407.9);

	this.shape_379 = new cjs.Shape();
	this.shape_379.graphics.f("#F69867").s().p("AgLAcIALg5QAFAIAHAFIgMAug");
	this.shape_379.setTransform(358.125,400.625);

	this.shape_380 = new cjs.Shape();
	this.shape_380.graphics.f("#F8C7A2").s().p("AhOBlQAWABAWgCIgCAJIAdAAIALACIANgvIAHAEQADADAAAGQAAAJgJAPIgBAGIABAFQAAANAGAAIABAAIAAAAIAFgBIAAAAIAAgBIAAAAIglAZIgbAQgAAYB9QgGAAAAgNIgBgFIABgGQAJgPAAgJQAAgGgDgDIgHgEQgIgFgFgIQgGgMAAgSQARglA3gCQAwAKACAwQgDAZgHARIABgNQAAgYgRgRQARARAAAYIgBANQgMAXgYAHQAIgRAAgQQAAgUgNgTQANATAAAUQAAAQgIARQgPAFgSgDQAMgJAAgRQAAgOgIgUQAIAUAAAOQAAARgMAJIgFAFIgGAEIAAAAIAAABIAAAAIgFABIAAAAIgBAAgABuBSIAAAAgAg0geIgOgRQgagggbgpQAugFAkgmIATAZIAcAoIA8BQQg3ACgRAlQgYgVgagegABGgSg");
	this.shape_380.setTransform(357.7,392.525);

	this.shape_381 = new cjs.Shape();
	this.shape_381.graphics.f("#F69562").s().p("AgwAGQAwgDAlggIAMARQgkAlgtAFIgQgYg");
	this.shape_381.setTransform(349,377.425);

	this.shape_382 = new cjs.Shape();
	this.shape_382.graphics.f("#7B5742").s().p("AhpCUQgVgkgDhEIAIAGQACAXAQgLQgEByB1AqQhRgNgig5gAiBATQgBh8ByhaIAMAJQgJABgIAGQgOAKgCALQhLBIgFByIgMgJgABiixQAGgLACgMIgGgDIAHgOIAXA9IgOANQgGgTgMgPg");
	this.shape_382.setTransform(344.2246,380.45);

	this.shape_383 = new cjs.Shape();
	this.shape_383.graphics.f("#8B7767").s().p("AAmAdIABgTIATACIAmgCIAOARQgcACgYAAIAAgRIAAARQgEAPgFAAQgFAAgGgPgAA6AdgAgpAPIAIgSIARAEQAZAHAeACIgBATQghgCgagHIAFgTIgFATQgHAJgEAAQgGAAgDgOgAhLAAIAFgVQARAKAUAIIgIASQgSgHgQgIgAhdgLIAEgWIgEAWIgHgGQgRgMARgOIALAKIATAMIgFAVQgFADgEAAQgHAAgCgOgAhGgVIAAAAg");
	this.shape_383.setTransform(341.4,386.6563);

	this.shape_384 = new cjs.Shape();
	this.shape_384.graphics.f("#B19582").s().p("ABXDqIACgJIAShRIgSBRQgWACgVgBIgRgBIgdgDQh1gqADhyQAQAJATAGQAEAZAPgTQAbAGAhACQAKAdAKgcQAYAAAbgCQAaAeAYAWQAAASAIAMIgNA6gAAABNQgdgDgagHIgQgFQgVgHgRgLIgTgMQAGhyBKhIQgCAJAAAKQAAAlAbAyIAMAdIgMgdIAHAAIAAAAIABAAQAyAAAmgmIABgBIABAAIAAgBIgIgUIAhAHIAAATIgKADIAKgDIAAgTIghgHQgOgegPgTQAPATAOAeIAIAUIAAABIgBAAIgBABQgmAmgyAAIgBAAIAAAAIgHAAQgbgyAAglQAAgKACgJQADgLAOgKQAIgGAIgBIgLgJQAGgZAbgRIAOADQAkAKAhAVIAGAEQgDALgFALQALAPAHATQAIAcgBAmQgCAbgGAhIgTgZIAEgDIAAgmIgKACIAFAMIgLAKQglAhgwADIAPAXQAbApAaAgIgmABIgTgBgABQhNIgFgLgABGiTQALgMAHgOQgHAOgLAMIgggKIgCgDQgVgXgUAAIAAAAIgBAAIgHAAIgBABIgBAAIABAAIABgBIAHAAIABAAIAAAAQAUAAAVAXIACADIAgAKgABWgmIgMgRIALgKIgFgMIAKgCIAAAmIgEADgAgXgwIAAAAgABLhYIAAAAgABDhsg");
	this.shape_384.setTransform(345.275,380.025);

	this.shape_385 = new cjs.Shape();
	this.shape_385.graphics.f().s("#503522").ss(0.5,1,1).p("AgPg1IAOBMIAKAAIAHAcIgTAD");
	this.shape_385.setTransform(353.55,373.625);

	this.shape_386 = new cjs.Shape();
	this.shape_386.graphics.f().s("#6D5D50").ss(0.5,1,1).p("AByCZIAIAaIgUAEIhaAQIg+ALIgOgWIATgEgABaBEIAYBVAh5ApQgFh6A5h/");
	this.shape_386.setTransform(340.9084,361.15);

	this.shape_387 = new cjs.Shape();
	this.shape_387.graphics.f().s("#CE9F81").ss(0.5,1,1).p("ABHgSQggAMgZgGQgOgJgHgXQgDgLgDgOAhdgYQARAzAlAaQAOAJANADQAXAIAigFQAWgDAbgJ");
	this.shape_387.setTransform(345.475,361.0844);

	this.shape_388 = new cjs.Shape();
	this.shape_388.graphics.f().s("#B86D43").ss(0.5,1,1).p("Ag5gjIAMAIQADAAACgBQASgFATgRAA6AVIhVAVIgDAJ");
	this.shape_388.setTransform(355.7,354.125);

	this.shape_389 = new cjs.Shape();
	this.shape_389.graphics.f().s("#6F5D4F").ss(0.5,1,1).p("AhCiFIASgbQAOgBALgBQAsgCAcAOQgBAPgCANAg+hmQADgFAFgDQAlgiAeAyIAYgBQAGgLADgQQALANAJAQQARAcAKAkQAJAlARAwAAjAFQAZAJALgPIAAgjAAegcIARAGIAYgOAAbg1IAoAAIAEARAAegcQAAAFABAFIAEAXAAbg1QACAMABANAgfAFQAggCAegVAgnAfQApAHAhghAgmCWIACgPQAYAAAUgHIAGAVQALAZAKgiAg6CEIABARQAEAbAPgaQAbABAZgCAg6CEQALACALABAhkCQQAbAEAQABAh2B1QArAMARADAANheQAJAPAFAa");
	this.shape_389.setTransform(340.625,353.5628);

	this.shape_390 = new cjs.Shape();
	this.shape_390.graphics.f("#E45C2A").s().p("AgOgGIAUgDQAFAFADAGIgaAIIgCgQg");
	this.shape_390.setTransform(352.55,380.1);

	this.shape_391 = new cjs.Shape();
	this.shape_391.graphics.f("#8E7769").s().p("AgPAJIgBgQIABAQIgrgFIgSgaQArAMARADQALACAKABQAYAAAVgHQAOAJANACQgKAigLgZIgGgUIAGAUQgaACgbgBIACgOIgCAOQgHANgEAAQgFAAgCgOg");
	this.shape_391.setTransform(336.425,367.5568);

	this.shape_392 = new cjs.Shape();
	this.shape_392.graphics.f("#F19967").s().p("AgqAWIAFgTQApAHAhggQADAOADAKQglAVgmAAIgKgBg");
	this.shape_392.setTransform(340.4,356.367);

	this.shape_393 = new cjs.Shape();
	this.shape_393.graphics.f("#7B5741").s().p("AgQAAQACgMABgPQAZAUAFAZIgOALQgIgQgLgNg");
	this.shape_393.setTransform(346.9,341.3);

	this.shape_394 = new cjs.Shape();
	this.shape_394.graphics.f("#B19482").s().p("AhADKIATgDQgagpgWg+IgKgNIArAFQAEAbAPgaQAbABAZgCQALAZAKgiQAZAIAhgFIAYBVIAIAbIgUAEIhaAPIg+ALgAgtDHICfgggAgnBKQgLgBgLgCQgRgDgrgMQgFh6A5iAIASgbIAZgCQAsgCAcAOQgBAPgCANQgDAQgGALIgYABIgBgCQgRgcgTAAIgBAAIAAAAQgNAAgPANIgBABIAAAAQgFADgDAFQADgFAFgDIAAAAIABgBQAPgNANAAIAAAAIABAAQATAAARAcIABACIAYgBQAGgLADgQQALANAJAQQARAcAKAkQAJAmARAwQgfALgZgGQgPgIgHgXQgEgLgCgOQAIADAHAAIABAAIAAAAQAMAAAIgJIAAgBIAAgjIgEgRIgoAAIADAZIgDgZIAoAAIAEARIgYAOIgRgGIABAKIgBgKIARAGIAYgOIAAAjIAAABQgIAJgMAAIAAAAIgBAAQgHAAgIgDIgEgYIAEAYQggAhgqgHIgFATQARAzAjAaQgTAHgWAAIgDAAgAgig3QAhgCAdgWQgdAWghACgAAYhyQgFgagJgPQAJAPAFAag");
	this.shape_394.setTransform(340.9084,359.6811);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_1,p:{regX:6.8,regY:6.5,scaleX:0.9998,scaleY:0.9998,rotation:0,x:285.7,y:419.85}},{t:this.instance,p:{regY:6.6,scaleX:0.9998,scaleY:0.9998,rotation:-29.9982,x:301.3,y:422.95,regX:6.5}}]},88).to({state:[{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.instance_4,p:{regY:4.9,rotation:-90,x:306.4,y:386.5,regX:5.2,scaleX:0.9999,scaleY:0.9999}},{t:this.instance_3,p:{regX:5,regY:5.3,scaleX:1.0387,scaleY:1.0394,rotation:-29.9994,x:310.95,y:377.95}},{t:this.instance_2,p:{regX:29.1,regY:31.9,scaleX:0.9945,scaleY:0.9945,rotation:0.9433,x:295,y:349.9}},{t:this.instance,p:{regY:6.3,scaleX:0.9999,scaleY:0.9999,rotation:-14.9991,x:282.5,y:419.15,regX:6.5}}]},9).to({state:[{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.instance_3,p:{regX:5.1,regY:5.2,scaleX:0.9999,scaleY:0.9999,rotation:-44.7354,x:306.8,y:391.15}},{t:this.instance_4,p:{regY:4.8,rotation:-165.265,x:302.4,y:383.65,regX:5.2,scaleX:0.9999,scaleY:0.9999}},{t:this.instance,p:{regY:6.3,scaleX:0.9999,scaleY:0.9999,rotation:14.2231,x:281.35,y:416.9,regX:6.7}}]},14).to({state:[{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.instance,p:{regY:6,scaleX:0.9999,scaleY:0.9999,rotation:44.9994,x:278.3,y:411.25,regX:6.6}},{t:this.instance_7,p:{regX:6.9,scaleX:0.7802,scaleY:0.7802,rotation:-14.9981,x:325.8,y:408.2}},{t:this.instance_6,p:{scaleX:0.8796,scaleY:0.8796,x:322.45,y:413.85}},{t:this.instance_5,p:{regX:3,regY:3.5,scaleX:0.9093,scaleY:0.4681,rotation:-29.9981,x:298.25,y:416.5}}]},10).to({state:[{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.instance_1,p:{regX:6.6,regY:6.2,scaleX:0.9999,scaleY:0.9999,rotation:14.9984,x:292.1,y:410}},{t:this.instance,p:{regY:6,scaleX:0.9999,scaleY:0.9999,rotation:61.65,x:280.4,y:406.65,regX:6.8}},{t:this.instance_3,p:{regX:5,regY:5.2,scaleX:0.9999,scaleY:0.9999,rotation:-37.4547,x:312.9,y:380.55}},{t:this.instance_8,p:{regY:34.5,scaleX:0.9999,scaleY:0.9999,rotation:15.4453,x:298.15,y:355.85,startPosition:0,regX:29.4}}]},12).to({state:[{t:this.shape_199},{t:this.shape_198,p:{x:291.725,y:347.725}},{t:this.shape_197},{t:this.shape_196,p:{x:293.225,y:355.475}},{t:this.shape_195,p:{x:287.325,y:376.542}},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192,p:{x:274.35,y:373.175}},{t:this.shape_191,p:{x:294.375,y:374.075}},{t:this.shape_190},{t:this.shape_189,p:{x:290.0581,y:387.825}},{t:this.shape_188,p:{x:284.775,y:399.375}},{t:this.shape_187},{t:this.shape_186,p:{x:287.2,y:337.775}},{t:this.shape_185,p:{x:288.925,y:341.9}},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180,p:{x:294.3081,y:387.525}},{t:this.shape_179,p:{x:287.5662,y:387.825}},{t:this.shape_178,p:{x:284.775,y:399.375}},{t:this.shape_177},{t:this.shape_176,p:{x:273.4,y:373.175}},{t:this.instance_4,p:{regY:5.1,rotation:-104.9972,x:301.25,y:362.15,regX:4.8,scaleX:1.2181,scaleY:1.2181}},{t:this.instance_3,p:{regX:5,regY:5.7,scaleX:1.2654,scaleY:1.2663,rotation:-44.9995,x:303.85,y:350.65}},{t:this.instance,p:{regY:6.7,scaleX:1.2181,scaleY:1.2181,rotation:-29.9998,x:283.25,y:408.1,regX:6.5}},{t:this.instance_5,p:{regX:3.4,regY:3.1,scaleX:1.0471,scaleY:1.5661,rotation:7.9535,x:291,y:388.5}},{t:this.instance_8,p:{regY:34.8,scaleX:1.2181,scaleY:1.2181,rotation:0,x:280.1,y:325.2,startPosition:0,regX:29.4}}]},13).to({state:[{t:this.shape_197},{t:this.shape_202},{t:this.shape_198,p:{x:291.725,y:347.725}},{t:this.shape_192,p:{x:274.35,y:373.175}},{t:this.shape_201},{t:this.shape_195,p:{x:287.325,y:376.542}},{t:this.shape_194},{t:this.shape_196,p:{x:293.225,y:355.475}},{t:this.shape_191,p:{x:294.375,y:374.075}},{t:this.shape_190},{t:this.shape_189,p:{x:290.0581,y:387.825}},{t:this.shape_188,p:{x:284.775,y:399.375}},{t:this.shape_200},{t:this.shape_185,p:{x:288.925,y:341.9}},{t:this.shape_186,p:{x:287.2,y:337.775}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_176,p:{x:273.4,y:373.175}},{t:this.shape_184},{t:this.shape_180,p:{x:294.3081,y:387.525}},{t:this.shape_181},{t:this.shape_179,p:{x:287.5662,y:387.825}},{t:this.shape_178,p:{x:284.775,y:399.375}},{t:this.shape_177},{t:this.instance_4,p:{regY:5.1,rotation:-104.9972,x:301.25,y:362.15,regX:4.8,scaleX:1.2181,scaleY:1.2181}},{t:this.instance_3,p:{regX:5,regY:5.7,scaleX:1.2654,scaleY:1.2663,rotation:-44.9995,x:303.85,y:350.65}},{t:this.instance,p:{regY:6.7,scaleX:1.2181,scaleY:1.2181,rotation:-29.9998,x:283.25,y:408.1,regX:6.5}},{t:this.instance_5,p:{regX:3.4,regY:3.1,scaleX:1.0471,scaleY:1.5661,rotation:7.9535,x:291,y:388.5}},{t:this.instance_8,p:{regY:34.8,scaleX:1.2181,scaleY:1.2181,rotation:0,x:280.1,y:325.2,startPosition:1,regX:29.4}},{t:this.instance_9,p:{regX:-53.3,regY:437.6,scaleX:0.0061,scaleY:0.0061,skewX:16.5756,skewY:-163.4244,x:288.15,y:393.85}}]},51).to({state:[{t:this.shape_197},{t:this.shape_202},{t:this.shape_198,p:{x:291.725,y:347.725}},{t:this.shape_192,p:{x:274.35,y:373.175}},{t:this.shape_201},{t:this.shape_195,p:{x:287.325,y:376.542}},{t:this.shape_194},{t:this.shape_196,p:{x:293.225,y:355.475}},{t:this.shape_191,p:{x:294.375,y:374.075}},{t:this.shape_190},{t:this.shape_189,p:{x:290.0581,y:387.825}},{t:this.shape_188,p:{x:284.775,y:399.375}},{t:this.shape_185,p:{x:288.925,y:341.9}},{t:this.shape_200},{t:this.shape_186,p:{x:287.2,y:337.775}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_176,p:{x:273.4,y:373.175}},{t:this.shape_184},{t:this.shape_181},{t:this.shape_180,p:{x:294.3081,y:387.525}},{t:this.shape_179,p:{x:287.5662,y:387.825}},{t:this.shape_178,p:{x:284.775,y:399.375}},{t:this.shape_177},{t:this.instance_4,p:{regY:5.1,rotation:-104.9972,x:301.25,y:362.15,regX:4.8,scaleX:1.2181,scaleY:1.2181}},{t:this.instance_3,p:{regX:5,regY:5.7,scaleX:1.2654,scaleY:1.2663,rotation:-44.9995,x:303.85,y:350.65}},{t:this.instance,p:{regY:6.7,scaleX:1.2181,scaleY:1.2181,rotation:-29.9998,x:283.25,y:408.1,regX:6.5}},{t:this.instance_5,p:{regX:3.4,regY:3.1,scaleX:1.0471,scaleY:1.5661,rotation:7.9535,x:291,y:388.5}},{t:this.instance_8,p:{regY:34.8,scaleX:1.2181,scaleY:1.2181,rotation:0,x:280.1,y:325.2,startPosition:5,regX:29.4}},{t:this.instance_10,p:{regX:-50.4,regY:485.1,skewX:15.0573,skewY:-164.9427,x:287.65,y:394.85}},{t:this.instance_9,p:{regX:-211.9,regY:559.5,scaleX:0.0058,scaleY:0.0058,skewX:14.9508,skewY:-165.0492,x:287.8,y:392.45}}]},21).to({state:[{t:this.shape_198,p:{x:291.725,y:347.725}},{t:this.shape_208},{t:this.shape_197},{t:this.shape_192,p:{x:274.35,y:373.175}},{t:this.shape_207},{t:this.shape_195,p:{x:287.325,y:376.542}},{t:this.shape_194},{t:this.shape_196,p:{x:293.225,y:355.475}},{t:this.shape_191,p:{x:294.375,y:374.075}},{t:this.shape_190},{t:this.shape_206},{t:this.shape_188,p:{x:284.775,y:399.375}},{t:this.shape_186,p:{x:287.2,y:337.775}},{t:this.shape_205},{t:this.shape_185,p:{x:288.925,y:341.9}},{t:this.shape_183},{t:this.shape_182},{t:this.shape_176,p:{x:273.4,y:373.175}},{t:this.shape_184},{t:this.shape_181},{t:this.shape_180,p:{x:294.3081,y:387.525}},{t:this.shape_204},{t:this.shape_178,p:{x:284.775,y:399.375}},{t:this.shape_203,p:{x:291.575,y:408.1872}},{t:this.instance_4,p:{regY:5.1,rotation:-104.9972,x:301.25,y:362.15,regX:4.8,scaleX:1.2181,scaleY:1.2181}},{t:this.instance_3,p:{regX:5,regY:5.7,scaleX:1.2654,scaleY:1.2663,rotation:-44.9995,x:303.85,y:350.65}},{t:this.instance,p:{regY:6.7,scaleX:1.2181,scaleY:1.2181,rotation:-29.9998,x:283.25,y:408.1,regX:6.5}},{t:this.instance_5,p:{regX:3.4,regY:3.1,scaleX:1.0471,scaleY:1.5661,rotation:7.9535,x:291,y:388.5}},{t:this.instance_8,p:{regY:34.8,scaleX:1.2181,scaleY:1.2181,rotation:0,x:280.1,y:325.2,startPosition:4,regX:29.4}},{t:this.instance_11},{t:this.instance_10,p:{regX:-54.3,regY:479.5,skewX:14.7358,skewY:-165.2642,x:286.7,y:393.3}},{t:this.instance_9,p:{regX:-232.3,regY:576.3,scaleX:0.0058,scaleY:0.0058,skewX:14.7358,skewY:-165.2642,x:287.5,y:390.05}}]},36).to({state:[{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.instance_1,p:{regX:6.5,regY:6.2,scaleX:1.2318,scaleY:1.2318,rotation:0,x:332.55,y:406.5}},{t:this.instance,p:{regY:6.3,scaleX:1.2318,scaleY:1.2318,rotation:-29.9989,x:351.95,y:410.35,regX:6.5}}]},27).to({state:[{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.instance_4,p:{regY:5.3,rotation:-90,x:359.5,y:371.15,regX:4.7,scaleX:1.0901,scaleY:1.0901}},{t:this.instance_3,p:{regX:5.2,regY:5.9,scaleX:1.1325,scaleY:1.1333,rotation:-29.9963,x:364.55,y:361.75}},{t:this.instance_2,p:{regX:29.6,regY:32.5,scaleX:1.0842,scaleY:1.0842,rotation:0.9354,x:347.05,y:331.25}},{t:this.instance,p:{regY:6.9,scaleX:1.09,scaleY:1.09,rotation:-14.9949,x:333.4,y:406.75,regX:6.8}}]},3).to({state:[{t:this.shape_323},{t:this.shape_322},{t:this.shape_321},{t:this.shape_320},{t:this.shape_319},{t:this.shape_318},{t:this.shape_317},{t:this.shape_316},{t:this.shape_315},{t:this.shape_314},{t:this.shape_313},{t:this.shape_312},{t:this.shape_311},{t:this.shape_310},{t:this.shape_309},{t:this.shape_308},{t:this.shape_307},{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.instance_3,p:{regX:5.2,regY:5.3,scaleX:1.1077,scaleY:1.1077,rotation:-44.7355,x:364.7,y:381.45}},{t:this.instance_4,p:{regY:4.7,rotation:-165.2654,x:359.75,y:373.25,regX:5.1,scaleX:1.1077,scaleY:1.1077}},{t:this.instance,p:{regY:6.3,scaleX:1.1077,scaleY:1.1077,rotation:14.2225,x:336.4,y:410.05,regX:6.8}}]},7).to({state:[{t:this.shape_361},{t:this.shape_360},{t:this.shape_359},{t:this.shape_358},{t:this.shape_357},{t:this.shape_356},{t:this.shape_355},{t:this.shape_354},{t:this.shape_353},{t:this.shape_352},{t:this.shape_351},{t:this.shape_350},{t:this.shape_349},{t:this.shape_348},{t:this.shape_347},{t:this.shape_346},{t:this.shape_345},{t:this.shape_344},{t:this.shape_343},{t:this.shape_342},{t:this.shape_341},{t:this.shape_340},{t:this.shape_339},{t:this.shape_338},{t:this.shape_337},{t:this.shape_336},{t:this.shape_335},{t:this.shape_334},{t:this.shape_333},{t:this.shape_332},{t:this.shape_331},{t:this.shape_330},{t:this.shape_329},{t:this.shape_328},{t:this.shape_327},{t:this.shape_326},{t:this.shape_325},{t:this.shape_324},{t:this.instance,p:{regY:6,scaleX:1.2303,scaleY:1.2303,rotation:44.999,x:329.95,y:407.8,regX:6.5}},{t:this.instance_7,p:{regX:6.8,scaleX:0.96,scaleY:0.96,rotation:-14.9979,x:388.4,y:404.2}},{t:this.instance_6,p:{scaleX:1.0823,scaleY:1.0823,x:384.3,y:411.05}},{t:this.instance_5,p:{regX:3,regY:3.3,scaleX:1.1189,scaleY:0.5761,rotation:-29.996,x:354.55,y:414.25}}]},5).to({state:[{t:this.shape_384},{t:this.shape_383},{t:this.shape_382},{t:this.shape_381},{t:this.shape_380},{t:this.shape_379},{t:this.shape_378},{t:this.shape_377},{t:this.shape_376},{t:this.shape_375},{t:this.shape_374},{t:this.shape_373},{t:this.shape_372},{t:this.shape_371},{t:this.shape_370},{t:this.shape_369},{t:this.shape_368},{t:this.shape_367},{t:this.shape_366},{t:this.shape_365},{t:this.shape_364},{t:this.shape_363},{t:this.shape_362},{t:this.instance_1,p:{regX:6.7,regY:6.2,scaleX:1.26,scaleY:1.26,rotation:14.9985,x:342.75,y:412.1}},{t:this.instance,p:{regY:6,scaleX:1.2599,scaleY:1.2599,rotation:61.6503,x:327.85,y:407.85,regX:6.8}},{t:this.instance_3,p:{regX:5,regY:5.2,scaleX:1.26,scaleY:1.26,rotation:-37.4547,x:368.85,y:374.95}},{t:this.instance_8,p:{regY:34.5,scaleX:1.26,scaleY:1.26,rotation:15.4453,x:350.2,y:343.8,startPosition:0,regX:29.4}}]},6).to({state:[{t:this.shape_394},{t:this.shape_198,p:{x:349.875,y:347.125}},{t:this.shape_393},{t:this.shape_196,p:{x:351.375,y:354.875}},{t:this.shape_195,p:{x:345.475,y:375.942}},{t:this.shape_392},{t:this.shape_391},{t:this.shape_192,p:{x:332.5,y:372.575}},{t:this.shape_191,p:{x:352.525,y:373.475}},{t:this.shape_390},{t:this.shape_189,p:{x:348.2081,y:387.225}},{t:this.shape_188,p:{x:342.925,y:398.775}},{t:this.shape_389},{t:this.shape_186,p:{x:345.35,y:337.175}},{t:this.shape_185,p:{x:347.075,y:341.3}},{t:this.shape_388},{t:this.shape_387},{t:this.shape_386},{t:this.shape_385},{t:this.shape_180,p:{x:352.4581,y:386.925}},{t:this.shape_179,p:{x:345.7162,y:387.225}},{t:this.shape_178,p:{x:342.925,y:398.775}},{t:this.shape_203,p:{x:349.725,y:407.5872}},{t:this.shape_176,p:{x:331.55,y:372.575}},{t:this.instance_4,p:{regY:5.6,rotation:-104.9914,x:360.35,y:361.65,regX:3.9,scaleX:1.2175,scaleY:1.2175}},{t:this.instance_3,p:{regX:5,regY:6.7,scaleX:1.2651,scaleY:1.266,rotation:-44.9995,x:363,y:350.15}},{t:this.instance,p:{regY:7.7,scaleX:1.2175,scaleY:1.2175,rotation:-30.0021,x:342.4,y:407.55,regX:6.8}},{t:this.instance_5,p:{regX:4.4,regY:3.6,scaleX:1.0465,scaleY:1.5656,rotation:7.9463,x:350.1,y:388.05}},{t:this.instance_8,p:{regY:35.5,scaleX:1.2176,scaleY:1.2176,rotation:0,x:339.3,y:324.6,startPosition:0,regX:30.2}}]},7).wait(40));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_chat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// chat
	this.instance = new lib.chat("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(322.5,262.95,0.1504,0.1504,0,0,0,292.6,-14.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(351).to({_off:false},0).wait(1).to({regX:323.1,regY:-17.9,x:327.3,y:262.45},0).wait(1).to({x:327.5},0).wait(1).to({x:327.75},0).wait(1).to({x:327.95},0).wait(1).to({x:328.15},0).wait(1).to({x:328.4},0).wait(1).to({x:328.6},0).wait(1).to({x:328.8},0).wait(1).to({x:329.05},0).wait(1).to({x:329.25},0).wait(1).to({x:329.5},0).wait(1).to({x:329.7},0).wait(1).to({x:329.9},0).wait(1).to({x:330.15},0).wait(1).to({x:330.35},0).wait(1).to({x:330.55},0).wait(1).to({x:330.8},0).wait(1).to({x:331},0).wait(1).to({x:331.25},0).wait(1).to({x:331.45},0).wait(1).to({x:331.65},0).wait(1).to({x:331.9},0).wait(1).to({x:332.1},0).wait(1).to({x:332.3},0).wait(1).to({x:332.55},0).wait(1).to({x:332.75},0).wait(1).to({x:333},0).wait(1).to({x:333.2},0).wait(1).to({x:333.4},0).wait(1).to({x:333.65},0).wait(1).to({x:333.85},0).wait(1).to({x:334.05},0).wait(1).to({x:334.3},0).wait(1).to({x:334.5},0).wait(1).to({x:334.75},0).wait(1).to({x:334.95},0).wait(1).to({x:335.15},0).wait(1).to({x:335.4},0).wait(1).to({x:335.6},0).wait(1).to({x:335.8},0).wait(1).to({x:336.05},0).wait(1).to({x:336.25},0).wait(1).to({x:336.5},0).wait(1).to({x:336.7},0).wait(1).to({x:336.9},0).wait(1).to({x:337.15},0).wait(1).to({x:337.35},0).wait(1).to({x:337.55},0).wait(1).to({x:337.8},0).wait(1).to({x:338},0).wait(1).to({x:338.25},0).wait(1).to({x:338.45},0).wait(1).to({x:338.65},0).wait(1).to({x:338.9},0).wait(1).to({x:339.1},0).wait(1).to({x:339.3},0).wait(1).to({x:339.55},0).wait(1).to({x:339.75},0).wait(1).to({x:340},0).wait(1).to({x:340.2},0).wait(1).to({x:340.4},0).wait(1).to({x:340.65},0).wait(1).to({x:340.85},0).wait(1).to({x:341.05},0).wait(1).to({x:341.3},0).wait(1).to({x:341.5},0).wait(1).to({x:341.75},0).wait(1).to({x:341.95},0).wait(1).to({x:342.15},0).wait(1).to({x:342.4},0).wait(1).to({x:342.6},0).wait(1).to({x:342.8},0).wait(1).to({x:343.05},0).wait(1).to({x:343.25},0).wait(1).to({x:343.5},0).wait(1).to({x:343.7},0).wait(1).to({x:343.9},0).wait(1).to({x:344.15},0).wait(1).to({x:344.35},0).wait(1).to({x:344.55},0).wait(1).to({x:344.8},0).wait(1).to({x:345},0).wait(1).to({x:345.2},0).wait(1).to({x:345.45},0).wait(1).to({x:345.65},0).wait(1).to({x:345.9},0).wait(1).to({x:346.1},0).wait(1).to({x:346.3},0).wait(1).to({x:346.55},0).wait(1).to({x:346.75},0).wait(1).to({x:346.95},0).wait(1).to({x:347.2},0).wait(1).to({x:347.4},0).wait(1).to({x:347.65},0).wait(1).to({x:347.85},0).wait(1).to({x:348.05},0).wait(1).to({x:348.3},0).wait(1).to({x:348.5},0).wait(1).to({x:348.7},0).wait(1).to({x:348.95},0).wait(1).to({x:349.15},0).wait(1).to({x:349.4},0).wait(1).to({x:349.6},0).wait(1).to({x:349.8},0).wait(1).to({x:350.05},0).wait(1).to({x:350.25},0).wait(1).to({x:350.45},0).wait(1).to({x:350.7},0).wait(1).to({x:350.9},0).wait(1).to({x:351.15},0).wait(1).to({x:351.35},0).wait(1).to({x:351.55},0).wait(1).to({x:351.8},0).wait(1).to({x:352},0).wait(1).to({x:352.2},0).wait(1).to({x:352.45},0).wait(1).to({x:352.65},0).wait(1).to({x:352.9},0).wait(1).to({x:353.1},0).wait(1).to({x:353.3},0).wait(1).to({x:353.55},0).wait(1).to({x:353.75},0).wait(1).to({x:353.95},0).wait(1).to({x:354.2},0).wait(1).to({x:354.4},0).wait(1).to({x:354.65},0).wait(1).to({x:354.85},0).wait(1).to({x:355.05},0).wait(1).to({x:355.3},0).wait(1).to({x:355.5},0).wait(1).to({x:355.7},0).wait(1).to({x:355.95},0).wait(1).to({x:356.15},0).wait(1).to({x:356.4},0).wait(1).to({x:356.6},0).wait(1).to({x:356.8},0).wait(1).to({x:357.05},0).wait(1).to({x:357.25},0).wait(1).to({x:357.45},0).wait(1).to({x:357.7},0).wait(1).to({x:357.9},0).wait(1).to({x:358.15},0).wait(1).to({x:358.35},0).wait(1).to({x:358.55},0).wait(1).to({x:358.8},0).wait(1).to({x:359},0).wait(1).to({x:359.2},0).wait(1).to({x:359.45},0).wait(1).to({x:359.65},0).wait(1).to({x:359.9},0).wait(1).to({x:360.1},0).wait(1).to({x:360.3},0).wait(1).to({x:360.55},0).wait(1).to({x:360.75},0).wait(1).to({x:360.95},0).wait(1).to({x:361.2},0).wait(1).to({x:361.4},0).wait(1).to({x:361.65},0).wait(1).to({x:361.85},0).wait(1).to({x:362.05},0).wait(1).to({x:362.3},0).wait(1).to({x:362.5},0).wait(1).to({x:362.7},0).wait(1).to({x:362.95},0).wait(1).to({x:363.15},0).wait(1).to({x:363.35},0).wait(1).to({x:363.6},0).wait(1).to({x:363.8},0).wait(1).to({x:364.05},0).wait(1).to({x:364.25},0).wait(1).to({x:364.45},0).wait(1).to({x:364.7},0).wait(1).to({x:364.9},0).wait(1).to({x:365.1},0).wait(1).to({x:365.35},0).wait(1).to({x:365.55},0).wait(1).to({x:365.8},0).wait(1).to({x:366},0).wait(1).to({x:366.2},0).wait(1).to({x:366.45},0).wait(1).to({x:366.65},0).wait(1).to({x:366.85},0).wait(1).to({x:367.1},0).wait(1).to({x:367.3},0).wait(1).to({x:367.55},0).wait(1).to({x:367.75},0).wait(1).to({x:367.95},0).wait(1).to({x:368.2},0).wait(1).to({x:368.4},0).wait(1).to({x:368.6},0).wait(1).to({x:368.85},0).wait(1).to({x:369.05},0).wait(1).to({x:369.3},0).wait(1).to({x:369.5},0).wait(1).to({x:369.7},0).wait(1).to({x:369.95},0).wait(1).to({x:370.15},0).wait(1).to({x:370.35},0).wait(1).to({x:370.6},0).wait(1).to({x:370.8},0).wait(1).to({x:371.05},0).wait(1).to({x:371.25},0).wait(1).to({x:371.45},0).wait(1).to({x:371.7},0).wait(1).to({x:371.9},0).wait(1).to({x:372.1},0).wait(1).to({x:372.35},0).wait(1).to({x:372.55},0).wait(1).to({x:372.8},0).wait(1).to({x:373},0).wait(1).to({x:373.2},0).wait(1).to({x:373.45},0).wait(1).to({x:373.65},0).wait(1).to({x:373.85},0).wait(1).to({x:374.1},0).wait(1).to({x:374.3},0).wait(1).to({x:374.55},0).wait(1).to({x:374.75},0).wait(1).to({x:374.95},0).wait(1).to({x:375.2},0).wait(1).to({x:375.4},0).wait(1).to({x:375.6},0).wait(1).to({x:375.85},0).wait(1).to({x:376.05},0).wait(1).to({x:376.3},0).wait(1).to({x:376.5},0).wait(1).to({x:376.7},0).wait(1).to({x:376.95},0).wait(1).to({x:377.15},0).wait(1).to({x:377.35},0).wait(1).to({x:377.6},0).wait(1).to({x:377.8},0).wait(1).to({x:378.05},0).wait(1).to({x:378.25},0).wait(1).to({x:378.45},0).wait(1).to({x:378.7},0).wait(1).to({x:378.9},0).wait(1).to({x:379.1},0).wait(1).to({x:379.35},0).wait(1).to({x:379.55},0).wait(1).to({x:379.8},0).wait(1).to({x:380},0).wait(1).to({x:380.2},0).wait(1).to({x:380.45},0).wait(1).to({x:380.65},0).wait(1).to({x:380.85},0).wait(1).to({x:381.1},0).wait(1).to({x:381.3},0).wait(1).to({x:381.5},0).wait(1).to({x:381.75},0).wait(1).to({x:381.95},0).wait(1).to({x:382.2},0).wait(1).to({x:382.4},0).wait(1).to({x:382.6},0).wait(1).to({x:382.85},0).wait(1).to({x:383.05},0).wait(1).to({x:383.25},0).wait(1).to({x:383.5},0).wait(1).to({x:383.7},0).wait(1).to({x:383.95},0).wait(1).to({x:384.15},0).wait(1).to({x:384.35},0).wait(1).to({x:384.6},0).wait(1).to({x:384.8},0).wait(1).to({x:385},0).wait(1).to({x:385.25},0).wait(1).to({x:385.45},0).wait(1).to({x:385.7},0).wait(1).to({x:385.9},0).wait(1).to({x:386.1},0).wait(1).to({x:386.35},0).wait(1).to({x:386.55},0).wait(1).to({x:386.75},0).wait(1).to({x:387},0).wait(1).to({x:387.2},0).wait(1).to({x:387.45},0).wait(1).to({x:387.65},0).wait(1).to({x:387.85},0).wait(1).to({x:388.1},0).wait(1).to({x:388.3},0).wait(1).to({x:388.5},0).wait(1).to({x:388.75},0).wait(1).to({x:388.95},0).wait(1).to({x:389.2},0).wait(1).to({x:389.4},0).wait(1).to({x:389.6},0).wait(1).to({x:389.85},0).wait(1).to({x:390.05},0).wait(1).to({x:390.25},0).wait(1).to({x:390.5},0).wait(1).to({x:390.7},0).wait(1).to({x:390.95},0).wait(1).to({x:391.15},0).wait(1).to({x:391.35},0).wait(1).to({x:391.6},0).wait(1).to({x:391.8},0).wait(1).to({x:392},0).wait(1).to({x:392.25},0).wait(1).to({x:392.45},0).wait(1).to({x:392.7},0).wait(1).to({x:392.9},0).wait(1).to({x:393.1},0).wait(1).to({x:393.35},0).wait(1).to({x:393.55},0).wait(1).to({x:393.75},0).wait(1).to({x:394},0).wait(1).to({x:394.2},0).wait(1).to({x:394.45},0).wait(1).to({x:394.65},0).wait(1).to({x:394.85},0).wait(1).to({x:395.1},0).wait(1).to({x:395.3},0).wait(1).to({x:395.5},0).wait(1).to({x:395.75},0).wait(1).to({x:395.95},0).wait(1).to({x:396.2},0).wait(1).to({x:396.4},0).wait(1).to({x:396.6},0).wait(1).to({x:396.85},0).wait(1).to({x:397.05},0).wait(1).to({x:397.25},0).wait(1).to({x:397.5},0).wait(1).to({x:397.7},0).wait(1).to({x:397.95},0).wait(1).to({x:398.15},0).wait(1).to({x:398.35},0).wait(1).to({x:398.6},0).wait(1).to({x:398.8},0).wait(1).to({x:399},0).wait(1).to({x:399.25},0).wait(1).to({x:399.45},0).wait(1).to({x:399.65},0).wait(1).to({x:399.9},0).wait(1).to({x:400.1},0).wait(1).to({x:400.35},0).wait(1).to({x:400.55},0).wait(1).to({x:400.75},0).wait(1).to({x:401},0).wait(1).to({x:401.2},0).wait(1).to({x:401.4},0).wait(1).to({x:401.65},0).wait(1).to({x:401.85},0).wait(1).to({x:402.1},0).wait(1).to({x:402.3},0).wait(1).to({x:402.5},0).wait(1).to({x:402.75},0).wait(1).to({x:402.95},0).wait(1).to({x:403.15},0).wait(1).to({x:403.4},0).wait(1).to({x:403.6},0).wait(1).to({x:403.85},0).wait(1).to({x:404.05},0).wait(1).to({x:404.25},0).wait(1).to({x:404.5},0).wait(1).to({x:404.7},0).wait(1).to({x:404.9},0).wait(1).to({x:405.15},0).wait(1).to({x:405.35},0).wait(1).to({x:405.6},0).wait(1).to({x:405.8},0).wait(1).to({x:406},0).wait(1).to({x:406.25},0).wait(1).to({x:406.45},0).wait(1).to({x:406.65},0).wait(1).to({x:406.9},0).wait(1).to({x:407.1},0).wait(1).to({x:407.35},0).wait(1).to({x:407.55},0).wait(1).to({x:407.75},0).wait(1).to({x:408},0).wait(1).to({x:408.2},0).wait(1).to({x:408.4},0).wait(1).to({x:408.65},0).wait(1).to({x:408.85},0).wait(1).to({x:409.1},0).wait(1).to({x:409.3},0).wait(1).to({x:409.5},0).wait(1).to({x:409.75},0).wait(1).to({x:409.95},0).wait(1).to({x:410.15},0).wait(1).to({x:410.4},0).wait(1).to({x:410.6},0).wait(1).to({x:410.85},0).wait(1).to({x:411.05},0).wait(1).to({x:411.25},0).wait(1).to({x:411.5},0).wait(1).to({x:411.7},0).wait(1).to({x:411.9},0).wait(1).to({x:412.15},0).wait(1).to({x:412.35},0).wait(1).to({x:412.6},0).wait(1).to({x:412.8},0).wait(1).to({x:413},0).wait(1).to({x:413.25},0).wait(1).to({x:413.45},0).wait(1).to({x:413.65},0).wait(1).to({x:413.9},0).wait(1).to({x:414.1},0).wait(1).to({x:414.35},0).wait(1).to({x:414.55},0).wait(1).to({x:414.75},0).wait(1).to({x:415},0).wait(1).to({x:415.2},0).wait(1).to({x:415.4},0).wait(1).to({x:415.65},0).wait(1).to({x:415.85},0).wait(1).to({x:416.1},0).wait(1).to({x:416.3},0).wait(1).to({x:416.5},0).wait(1).to({x:416.75},0).wait(1).to({x:416.95},0).wait(1).to({x:417.15},0).wait(1).to({x:417.4},0).wait(1).to({x:417.6},0).wait(1).to({x:417.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy_cicking = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boy_cicking
	this.instance = new lib.shoe("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(250.6,404.45,1.2637,1.2637,24.1873,0,0,6.6,6.3);

	this.instance_1 = new lib.shoe("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(291.9,409.7,1.3305,1.3305,-29.9991,0,0,6.5,6.3);

	this.instance_2 = new lib.lhand("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(295.05,365.9,1.3332,1.3332,-7.2985,0,0,5.1,5.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#C4A17D").ss(0.5,1,1).p("AhKAJQA4gkAFgiQABgJgDgJABLhJQAAALgBAIQgFBQhcA2");
	this.shape.setTransform(264.025,390.85);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#A1A2A3").ss(0.5,1,1).p("AighDIAzBGIg/AsIgvhKgAB2ABIAJA8IBdAHIgRhVIhWAOQAAACABACg");
	this.shape_1.setTransform(272.675,398.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CBA184").ss(0.5,1,1).p("AiMixQAIAEAGAEQACABACABQAJAHAHAHQAHAIADAKQAEANgFAPQgCAGgEAHQgEAGgFAHQgBABAAAAAhyiCQAMASgBASAiJhoQAFAOAKAHQADACAFABIABAAAiXhDQANgDAQgGQACgBADgBQACgBACgBAiqhZQAHATAMADAjJhXQADAOAPAJQAOACASgFABdAVQAFAFAEAHQAXAmAJBrAjZiJQgJBEArAFACugQQAFAIACAFQAgBHAHBf");
	this.shape_2.setTransform(270.9971,380.425);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#BC6D3F").ss(0.5,1,1).p("AgWAkIAthH");
	this.shape_3.setTransform(290.925,363.975);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#B37242").ss(0.5,1,1).p("AgchbQAEAKADAGQAaBDAtAdAgxAtQAbAoAbAH");
	this.shape_4.setTransform(288.175,358.325);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#563722").ss(0.5,1,1).p("AgRg8QgKgNgQgGIgEASQAYAUADAQQAHACAEgGQACgDACgFQgFgNgHgKgAAhAlIAIgGIAIAXQgCAEgCADQgKANgMAGAAhAlQgJg0gpgtAAQAwIARgL");
	this.shape_5.setTransform(280.8,343);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#563B2B").ss(0.5,1,1).p("AAGgKQgCgIACgJAACiLQgIA7AIAqAgEBAQgDAnADAl");
	this.shape_6.setTransform(259.6558,366.05);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#CAA081").ss(0.5,1,1).p("AApA6QgVgoAagqQAEgIAGgHAgFhiQgIAIgGAIQg8BMAnBdQADAGADAGAgfBiQAKgXAUgKQADgCAFgBIADgBQANgEASABQACAAACAA");
	this.shape_7.setTransform(252.3779,356.85);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#6E5D4A").ss(0.5,1,1).p("AiqiTIgEgFIgUAWQADAGADAGQAZAsAmAPQAEACAFABIAJgLIAJgLAA1jbQgGAggTAXQgXgGgTgJQgKgFgJgFQgFgIgGgFQgLgHgMgBQAAgTAjgTQAKAAAMACAgJj1QAbAFAjAVQAtCQgPCIQAGgBAFgCQAJgEAIgFQAIgGAGgIIAAAFQADAOgDAJIA4BuIAFgDIAJAUIgSAJIhQAmIgVAKIgMgYIAIgDIgTgmIgHAsIAFABIAAAWIgqgDIhagGIgogCIABgaIAGAAIAQAAICQAOAhDjSQgqgDg9BCQAYA1AwAQQBYhKgXglABci7QARAmAJAnQAEAQACARQACAKABAKQAEAugGAuAAmhfIAFgBIAAgWIhCgEIAAAXIAGACIAAAiQAcAZAcgZgAgRhhIAgAKIAXgIAgcA/IABAUQAKAeAKgcQAXACAZgDAgIBBIABAUAgcA/QAKABAKABQAYACAZgBQAIgBAJgBIAAARQABAAABAAIAAAAQASgDATgGQAPAXACgXQABgCAAgDQAFgCAFgCAhCBKQATAGAUADAhAA4QASAFASACAhAA4IgCASAApBCIAAASQALAXAGgaAByBDIAAAFAByBDQAAAAABAAAA6BAQAMgBANgCABvAxIADASABeA6IADAOAhrAhQAEAKABACQAFAEADAAQACAAACgBQADABAEACIgBAQQAFAfANgYAheAxQgEAJAGAGQACAAACABQABABADABAhTAzQAKADAJACABIDcIBtgv");
	this.shape_8.setTransform(270.65,358.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#B06F4D").ss(0.5,1,1).p("AgCgKQACATACABQABAAAAAB");
	this.shape_9.setTransform(269.3,333.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#36291E").ss(0.5,1,1).p("AjACQQgMACgNgpQAlgkAoggQCNhxC9hDQAYARAEAa");
	this.shape_10.setTransform(267.55,303.5297);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#6F5C56").ss(0.5,1,1).p("AkCBQQg7i0DXh1QAKgDAJgCQCVgnBSBdAjfDrQASgPATgOQAegYAggWQCvh+DKhgQAKgFAJgFQgdgkhDgRQi7BSiRBmQgoAdglAfQgJBGATAug");
	this.shape_11.setTransform(271.7494,306.0489);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#512D06").ss(0.5,1,1).p("AASAHQABAGABAIAgTgUQAegCAHAdAAAATQAMgaAGAO");
	this.shape_12.setTransform(267.35,324.6155);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#C4A188").ss(0.5,1,1).p("AAogGQgYgtgbACQgLABgMAHQgCAJgBAHQgNBFBEAGQADAAADAA");
	this.shape_13.setTransform(267.1541,325.0685);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#7A3729").ss(0.5,1,1).p("ACigrQAHgGAGgGQAQgWgKgcQAwAQAagxQgZAEgVgOQgKgGgOgMABGgKQAlgZAKg0QAJAigXAhQARABALgJAhJBQIAIARIAwhqIgFAwQAvgpAQg4QAEAbgHAUAj+BmQAXAeAlAQQAoAQA8ADIAAgLIAAgU");
	this.shape_14.setTransform(278.525,316.425);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#543111").ss(0.5,1,1).p("AgfAJQAAALgEAIQgFAIgHAAQgGAAgEgIQgFgIAAgLQAAgKAFgIQAEgIAGAAQAHAAAFAIQAEAIAAAKgAA/gJQAAAKgEAIQgFAIgGAAQgHAAgEgIQgFgIAAgKQAAgLAFgIQAEgIAHAAQAGAAAFAIQAEAIAAALg");
	this.shape_15.setTransform(289.45,320.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AB7hpQACgHACgIAB7hLQABAAAAABQABADACADQADAHACAJAB7hMQgCgJABgJABBAIQApgJgWAlACEgzQAVApgVA4QhYBThwgIQggAAgqgeAgTBDQAXAhBGgW");
	this.shape_16.setTransform(283.2563,322.9354);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F59A63").s().p("AiDAaQABgJgCgJIBaAGIAAATgAAtAFIBRglIAHANIhPAkQgEgIgFgEg");
	this.shape_17.setTransform(275.775,382.05);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EF9B68").s().p("AgxAlIAAgFQAGgugFgvQAUgIAHgOQAaBDAtAcIgtBIQgbgHgbgog");
	this.shape_18.setTransform(288.175,359.15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E27A42").s().p("AgOAAQANgGAIgMIAHAQQgGANgTAIIgDgTg");
	this.shape_19.setTransform(284.5,351.05);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#88634E").s().p("AgLBUQgDglADgnIAEgBIABgBQAIgFAEgLQgGAsADAygAAAhCQgCgJACgIQAFAFADAAQgFAIAHAGIADACIgEAPQgDgKgGgJg");
	this.shape_20.setTransform(260.3558,371.675);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8F766A").s().p("AgqAQQgUgDgTgGQgNAYgFgfIABgPIATAFIgCARIACgRQASAFASACIABATIgBgTIAUACIABATQgFAOgFAAQgFAAgFgQgAAaARIAAgRIARgCIAAAQQgDAOgEAAQgFAAgFgLgAgWASIgBgTQAYABAZAAIAAARQgRACgPAAIgQgBgABSAFIgDgNIADANQgTAGgSADIAAAAIgCAAIAAgQIAZgDIALgDQAJgEAIgFIADARIgDgRQAIgGAGgIIAAAFQADAOgDAJIgKADIgBAAIAAAFQgBAMgEAAQgFAAgHgMgABSAFgAhngBIgDgBQgHgGAEgJIAEgBIAHADIgBAPIgEgBgAAaAAgAArgCg");
	this.shape_21.setTransform(272.1245,365.5134);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EE9C66").s().p("AgegBIgBAAQgDgCgCgUQApAdAgAAIgEASQgjgUgcgFg");
	this.shape_22.setTransform(272.675,334.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#85604F").s().p("Ah5CLIgFgLQgJgqAJg7IAJgMQBYhJgXglIATAKQgIBEgsAfQgsAwAUBRIgEABQgCAAgGgFgABjgPIAQgLIgQALQgJgngRgnIADgHQgEgOgHgJQApAsAJA1IAIgGIAIAYIgEAGQgJAMgNAGQgCgQgEgPgAA9hYQgCgRgZgUIAEgSQAQAGALAOQAHAJAEAOIgDAHQgEAFgGAAIgCAAgABBh7IAAAAg");
	this.shape_23.setTransform(272.525,349.375);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#F19761").s().p("AglgUIAOgQQAXAqAmAQIgKAPQgogRgZgog");
	this.shape_24.setTransform(254.175,350.65);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#BC1D0A").s().p("AjnBwQAegYAggWQCvh9DKhiQAOANAKAGQjABViOBkQgLAAgLAIIgEAPQgrAnAAAwQglgPgXgeg");
	this.shape_25.setTransform(276.225,315.45);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#B19582").s().p("AgiH3IhbgGIgogCIABgaIAGAAIAQAAQgEgxAGgtIABgGIABgEQAGgPgFgNIAFgPIADACQAGAfANgYQATAGAUADQAJAeALgcQAYACAZgDQAKAXAGgaIABAAIABAAQASgDASgGQAQAXACgXIAAgFIALgEIA4BuIhtAvIBtgvIAEgDIAKAUIgSAJIhRAmIgUAKIgMgYIAIgDIgTgmIgHAsIiQgOICQAOIAFABIAAAWgAg0FCIgUgCQgSgCgSgFIgTgFIgHgDQgVhQAtgxQAsggAIhDIgTgKQAXAlhYBKQgwgQgYg1QA9hCAqADQAMABALAHQAGAFAFAIQgFgIgGgFQgLgHgMgBQAAgTAjgTQAKAAALACIACABQAbAFAjAVQgGAggSAXQgXgGgUgJQAUAJAXAGQASgXAGggQAZAUACAQQAIABAEgFQAQAmAKAnQAEAQACARIADAUQAEAugGAvQgGAIgIAGQgIAFgJAEIgLADQADgkAAgkQAAhnghhqQAhBqAABnQAAAkgDAkIgaADIgQACIgVAAIgcgBgAg9DBQAcAZAdgZIgBggIAEgBIAAgWIhCgEIAAAXIAGACIAAAigAAnE+IAAAAgAg9DBIAAgiIgGgCIAAgXIBCAEIAAAWIgEABIABAgQgOANgPAAQgOAAgOgNgAgdCpIAYgIIgYAIIgggKIAgAKgAipDFQgmgPgZgsIgGgMIAUgWIAEAFQAYA1AwAQIgJALIgJALIgJgDgAgFChgAjWBtIAAAAgAi9jTQCRhnC6hSQBEARAdAkIgTAKQjKBhiwB+QgWgmgJg/gAh0ntQCVgnBSBdQi8BDiOByQgpiRCMhag");
	this.shape_26.setTransform(275.05,333.1489);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#7B5740").s().p("Ag3BxQAlgfAngdQAJA/AXAmQggAWgdAYIglAdQgTguAJhGgABLjfIATgFQiLBaApCQQgoAggkAkQg7i0DWh1g");
	this.shape_27.setTransform(253.9494,306.625);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#584B40").s().p("AiyBCQCOhwC8hDQAYARADAZQi7BSiQBnQgXgTgDgdg");
	this.shape_28.setTransform(271.375,300.55);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#1E160F").s().p("AgyAOQAkgjAnggQAEAdAWATQgoAcgkAeIgBABQgMAAgMgog");
	this.shape_29.setTransform(250.925,312.5547);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#DA562F").s().p("AjgCKQAAgwArgnQgMBGBFAGIAAAUIAAALQg8gDgogRgAhnBGQgXgtgdADQCPhkC/hVQAVAOAZgEQgaAwgwgPQAKAcgQAVQgGAHgHAGQgWgDgJARQgLAJgRgBQAXgggJgiQgKA0glAZQgMgPgUANQAHgTgEgcQgPA5gwApIAFgxIgwBrg");
	this.shape_30.setTransform(281.525,317.35);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#F8C7A2").s().p("AibGBQA4gkAFgjIBYAIQgFBRhdA1gABbExIBPglQAfBIAHBfIhWAPQgIhrgXgmgAjCDPQgPgJgDgOQADAOAPAJQgrgFAJhEQAKgWATgKIAJgEIADgBIADAAIAAgBQAJgCAMAAIABAAIAAAAIADAAIAEAAIAEAAIANAIIAEACQAKAHAGAHQAIAIADAKQAEANgFAPIgHANIAAgEQAAgQgKgQQAKAQAAAQIAAAEIgJANIgBABIAAAAQgFgBgEgCQgKgHgFgOQAFAOAKAHQAEACAFABIAAAAIgDACIgGACQgPAGgNADQgMgDgHgTQAHATAMADQgOAEgLAAIgHgBgAjtB7QgnhdA7hMQAaApAoAQQgaArAWAoIgEAAIgDAAIAAAAIgBAAQgMAAgJACIAAABIgDAAIgDABQgHACgFADQgUAKgKAWIgFgMgAAqi1QgfAAgpgeIAAgUIAFAAIgFAAQhFgFAMhGIAEgQQALgIALAAQAdgDAXAuIAIARIAvhrIgFAxQAwgqAQg4QAEAbgHAUQgKAGgLAMIARgGIAAABQgLAVAAASQAAAWAKAPQAJAPANAAQANAAAJgPQAJgPAAgWQAAgPgFgMQgEgQgHgIQAlgZAKg0QAJAigXAhQARABALgJQgHALgBASIAIgJQgIANAAATQAAATAIAOQAJAOALAAQAMAAAIgOQAJgOAAgTIgBgKQAVApgUA5QhRBLhlAAIgUAAgACJjXQASAAAXgHIACgBIAAAAIAFgBIgFABIAAAAIgCABQgXAHgSAAIgBAAIAAAAQgdAAgOgSIAAAAIgBgCIABACIAAAAQAOASAdAAIAAAAIABAAgAgckWIABAOIgBgOQgHgcgbAAIAAAAIAAAAIgFAAIAFAAIAAAAIAAAAQAbAAAHAcgADDkKQASgegWAAIAAAAIgBAAIgLABIgBAAIgBAAIgBABIABgBIABAAIABAAIALgBIABAAIAAAAQAWAAgSAegAgukKIAAgBIABgBIAAgBQAGgNAFgBIAAAAIAAAAQADAAACAFIAAAAIABAAIgBAAIAAAAQgCgFgDAAIAAAAIAAAAQgFABgGANIAAABIgBABIAAABg");
	this.shape_31.setTransform(272.1342,353.225);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FBFEFE").s().p("AAQAhQgJgOAAgTQAAgSAJgNQAIgJAKgGIACAAQALAAAIAMIAAABIABABIADAGQAEAHABAJIAAABIAAAJQABATgJAOQgJAOgLAAQgMAAgIgOgAAfgKQgFAIAAAKQAAALAFAIQAEAIAHAAQAGAAAEgIQAFgIAAgLQAAgKgFgIQgEgIgGAAQgHAAgEAIgAg/AYIgBgHIABgHQABgBAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACADgBAEQABAEgCADQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgAAgAFIgBgGIABgHQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQACADAAAEQAAADgCADQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBg");
	this.shape_32.setTransform(290.05,318.725);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AB/G3IgJg8IgBgEIBWgPIARBWgAjbFeIA7goIAzBHIg/AsgABbltQgJgPAAgWQAAgSAKgVIABgBIAAAAQAbgLAUAYQAEAMAAAPQAAAWgJAPQgJAPgNAAQgNAAgJgPgABtmbQgEAIAAALQAAALAEAIQAFAIAGAAQAHAAAEgIQAFgIAAgLQAAgLgFgIQgEgIgHAAQgGAAgFAIg");
	this.shape_33.setTransform(272.675,360.7271);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#543111").s().p("AguA0QgFgIAAgLQAAgLAFgIQAEgIAHAAQAGAAAFAIQAEAIAAALQAAALgEAIQgFAIgGAAQgHAAgEgIgAgtAQIgBAHIABAHQAAABABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBQACgDAAgEQAAgEgCgDQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAgAAwAhQgFgIAAgLQAAgLAFgHQAEgIAHAAQAGAAAFAIQAEAHAAALQAAALgEAIQgFAIgGAAQgHAAgEgIgAAxgCIgBAGIABAHQAAABABABQAAAAAAABQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBQACgDAAgEQAAgEgCgCQAAAAAAgBQgBAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBABAAAAgAg+gPIgBAAIgRAGQALgNAKgGQAUgNAMAPQAHAHAEARQgUgYgaALgAAhgtQAJgRAWADIAJACIAAABIAAAAIAIAGIgKAEIgBABIAAgBQgKACgIAFQgLAFgIAJIgIAKQABgTAHgLg");
	this.shape_34.setTransform(288.325,318.053);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("ABLAlIAAhDIBYAAIAABHgAiOgrIgUBFIBXARIASg/g");
	this.shape_35.setTransform(276.125,400.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#C4A17D").ss(0.5,1,1).p("AgfhLQAAAFAAAFQgCA9gWA5AA4hGQgBAIAAAEQgBBKgZA8");
	this.shape_36.setTransform(267.45,390.525);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#A1A2A3").ss(0.5,1,1).p("AgtgDIBcAH");
	this.shape_37.setTransform(288.8,404.925);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#563B2B").ss(0.5,1,1).p("AAGgKQgCgIACgJAACiLQgIA7AIAqAgEBAQgDAoADAk");
	this.shape_38.setTransform(260.3558,366);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#CBA184").ss(0.5,1,1).p("AiGisQAIAEAGAEQACABACABQAJAHAHAHQAHAIADAKQAEANgFAPQgCAGgEAHAhsh9QAMASgBASQgEAGgFAHQgBABAAAAAiRg+QANgDAQgGQACgBADgBQACgBACgBAiDhjQAFAOAKAHQADACAFABIABAAAikhUQAHATAMADAixg7QAOACASgFAjDhSQADAOAPAJABmAZIAEAHIAQAWIADB3AjTiEQgJBEArAFADVCtIgDiHQgDgUgMgRQgGgHgHgH");
	this.shape_39.setTransform(271.0721,379.875);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#CAA081").ss(0.5,1,1).p("AApA6QgVgoAagqQAEgHAGgIAgFhiQgIAIgGAIQg8BNAnBcQADAGADAGAgfBiQAKgWAUgKQABgCABAAIAAAAQABAAAAAAQABgBABAAIABAAQABgBABAAIACAAQAAgBABAAQANgEASABQACAAACAA");
	this.shape_40.setTransform(253.0779,356.8);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#6E5D4A").ss(0.5,1,1).p("AiqiTIgEgFIgUAWQADAGADAGQAZAsAmAPQAEACAFABIAJgLIAJgLQBYhKgXglAhDjSQAAgTAjgTQAKAAAMACAA1jbQgGAggTAXQgXgGgTgJQgKgFgJgFQgFgIgGgFQgLgHgMgBQgqgDg9BCQAYA1AwAQAgJj1QAbAFAjAVQAtCQgPCIQAFgBAGgCQAJgEAIgFIACASIABAFQAAgCAAgDQAFgCAGgCAAmhfIAFgBIAAgWIhCgEIAAAXIAGACIAAAiQAcAZAcgZgAgRhhIAgAKIAXgIAgIBBIABAUQAXACAZgDQALAXAGgaQABAAABAAIAAAAQASgDASgGQAPAXADgXAgcA/IABAUQAKAeAKgcAgcA/QAKABAKABQAYACAZgBQAIgBAJgBIAAARAhAA4IgCASQATAGAUADAhAA4QASAFASACAApBCIAAASABxBDQABAAAAAAAA6BAQAMgBANgCABeA6IACAOAhrAhQAEAKABACQAGAEACAAQACAAACgBQAEABADACIgBAQQAFAfANgYAheAxQgEAJAHAGQABAAACABQACABACABAAuDiIAFABIAAAWIgigCIhXgGIgzgDIABgaIAGAAIAQAAgABIDcIgTgmIgHAsAC0CtIAFgDIAKAUIgPAHIhRAnIgXALIgMgYIAIgDgAhTAzQAKADAJACABbi7QARAmAJAnQAEAQADARQABAKABAKQAFAugGAuIAAAFQACAOgCAJIA3BuABvAxQAHgGAHgI");
	this.shape_41.setTransform(271.325,358.775);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#563722").ss(0.5,1,1).p("AgRg8QgKgNgQgGIgEASQAYAUADAQQAHACAEgGQACgDABgFQgEgNgHgKgAAgAlIAIgGIAIAXQgCAEgCADQgJANgNAGAAQAwIAQgLQgJg0gogt");
	this.shape_42.setTransform(281.475,342.95);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#B06F4D").ss(0.5,1,1).p("AgCgKQACATACACQABAAAAAA");
	this.shape_43.setTransform(270,333.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#512D06").ss(0.5,1,1).p("AASAHQABAGABAIAABATQALgaAGAOAgTgUQAegCAHAd");
	this.shape_44.setTransform(268.05,324.5655);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#6F5C56").ss(0.5,1,1).p("AkCBQQg7i0DXh1QAKgDAJgCQCVgnBSBdAjfDrQASgPATgOQAegYAggWQCvh+DKhgQAJgFAKgFQgdgkhEgRQi6BSiRBmQgoAdglAfQgJBGATAug");
	this.shape_45.setTransform(272.4244,305.9989);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#543111").ss(0.5,1,1).p("AgfAKQAAALgFAIQgEAIgHAAQgGAAgFgIQgEgIAAgLQAAgKAEgIQAFgJAGAAQAHAAAEAJQAFAIAAAKgAA/gIQAAAKgFAIQgEAIgGAAQgHAAgFgIQgEgIAAgKQAAgLAEgIQAFgIAHAAQAGAAAEAIQAFAIAAALg");
	this.shape_46.setTransform(290.1,320.4);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AB7hpQACgHACgIAB7hLQAAAAABABQABADACADQADAHACAJAB7hMQgCgJABgJABBAIQApgJgWAlACEgzQAVApgVA4QhYBThwgIQgfAAgqgeAgTBDQAXAhBGgW");
	this.shape_47.setTransform(283.9313,322.8854);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#36291E").ss(0.5,1,1).p("Ai/CQQgNACgMgpQAkgkAoggQCNhxC9hDQAYARADAa");
	this.shape_48.setTransform(268.225,303.4797);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f().s("#7A3729").ss(0.5,1,1).p("ACigrQAHgGAFgGQARgWgKgcQAwAQAZgxQgZAEgUgOQgKgGgOgMABGgKQAlgZAKg0QAJAigXAhQAQABAMgJAhIBQIAHARIAwhqIgFAwQAugpARg4QAEAbgHAUAj9BmQAXAeAlAQQAnAQA8ADIAAgLIAAgU");
	this.shape_49.setTransform(279.2,316.375);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#F49867").s().p("AgtAQIBPgmIAMAPIhXAeg");
	this.shape_50.setTransform(285.9,380.775);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#ED9A66").s().p("AgrABIAAgJIBXAGIgBALg");
	this.shape_51.setTransform(268.65,383.775);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#EF9B68").s().p("AgxAlIAAgFQAGgugFguQAUgJAHgOQAaBDAtAdIgtBHQgbgHgbgog");
	this.shape_52.setTransform(288.825,359.1);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#E27A42").s().p("AgOAAQANgGAJgNIAGARQgGANgTAJIgDgUg");
	this.shape_53.setTransform(285.15,351);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#8F766A").s().p("AgqAQIAAgTIAAATQgTgDgTgGIACgRQASAFASACIAUACIAAATQgFAOgFAAQgFAAgFgQgAAbARIgBgRIABARQgaADgXgCIAAgTQAYABAYAAIARgCIABAQQgEAOgEAAQgEAAgFgLgAgWASgAhjAAIACgPIATAFIgCARQgGAKgEAAQgGAAgDgRgABSAFIgDgNQAJgEAIgFQAIgGAGgIIAAAFQADAOgDAJIgKADIgBAAIgDgRIADARIAAAFQgBAMgFAAQgEAAgHgMgAArgCIAZgDIALgDIADANQgSAGgSADIgBAAIgBAAgAhngBIgDgBQgHgGAFgJIAEgBIAHADIgCAPIgEgBgAhhgPIAAAAg");
	this.shape_54.setTransform(272.7995,365.4634);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#F19761").s().p("AglgUIAOgQQAXArAmAPIgKAPQgogSgZgng");
	this.shape_55.setTransform(254.875,350.6);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#85604F").s().p("Ah5CLIgFgLQgJgqAJg7IAJgMQBYhJgXglIATAKQgIBEgrAfQgtAwAVBRIgFABQgCAAgGgFgABigPIARgLIAIgGIAIAYIgEAGQgKAMgMAGQgDgQgEgPgABIhdIAEgHQgFgOgGgJQApAsAJA1IgRALQgJgngRgngAA+hYQgDgRgYgUIADgSQARAGAKAOQAGAJAFAOIgEAHQgDAFgFAAIgCAAgABBh7IAAAAg");
	this.shape_56.setTransform(273.2,349.325);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#EE9C66").s().p("AgegBIgBgBQgDgBgCgUQApAdAgAAIgEASQgjgVgcgEg");
	this.shape_57.setTransform(273.375,334.35);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#BC1D0A").s().p("AjnBvQAegXAggWQCvh9DKhiQAOANAKAGQjABWiNBiQgLABgMAIIgDAQQgrAmgBAwQglgPgXgfg");
	this.shape_58.setTransform(276.9,315.4);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#B19582").s().p("AgaH4IhYgGIgzgDIABgaIAGAAIAQAAQgDgxAFgtIACgGIABgEQAFgPgEgNIAEgPIAEACQAFAfANgYQATAGAUADQAKAeAKgcQAYACAZgDQAKAXAGgaIACAAIAAAAQASgDASgGQAPAXADgXIAAgFIALgEIA3BuIhsAvIgTgmIgHAsIiQgOICQAOIAFABIAAAWgAAUHgIAIgDIBsgvIAFgDIAKAUIgPAHIhRAnIgXALgAg0FCIgUgCQgSgCgSgFIgTgFIgHgDQgUhQAsgxQAsggAIhDIgTgKQAXAlhYBKQgwgQgYg1QAYA1AwAQIgJALIgJALIgJgDQgmgPgZgsIgGgMIAUgWIAEAFQA9hCAqADQAAgTAjgTQAKAAAMACIABABQAcAFAiAVQgGAggSAXQgXgGgUgJQAUAJAXAGQASgXAGggQAZAUACAQQAHABAEgFQARAmAJAnQAEAQADARIACAUQAFAugGAvQgHAIgHAGQgIAFgJAEIgLADQAEgjAAgiQAAhogihsQAiBsAABoQAAAigEAjIgZADIgQACIgVAAIgdgBgAg9DBQAdAZAcgZIgBggIAFgBIAAgWIhDgEIAAAXIAGACIAAAigAhYA2QAGAFAFAIQgFgIgGgFQgLgHgMgBQAMABALAHgAg9DBIAAgiIgGgCIAAgXIBDAEIAAAWIgFABIABAgQgOANgOAAQgPAAgOgNgAgcCpIAXgIIgXAIIghgKIAhAKgAiOCyIAAAAgAgFChgAi9jTQCRhnC6hSQBEARAdAkIgTAKQjKBhivB+QgXgmgJg/gAh0ntQCVgnBSBdQi8BDiOByQgpiRCMhag");
	this.shape_59.setTransform(275.725,333.0989);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AiiGpIAUhGIBVAXIgSBAgABLG0IAAhEIBYAAIAABIgAA/lqQgJgOAAgWQAAgSAKgVIABgBIAAAAQAbgLAUAYQAEALAAAQQAAAWgJAOQgJAQgNAAQgNAAgJgQgABRmYQgEAIAAALQAAALAEAIQAFAIAGAAQAHAAAEgIQAFgIAAgLQAAgLgFgIQgEgIgHAAQgGAAgFAIg");
	this.shape_60.setTransform(276.125,360.3021);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#F8C7A2").s().p("AhtGuQAXg7ABg8IBXAHQgCBKgYA9gABsG7IgEh3IgPgWIBYgfQAMARADAUIAECHgAjCDSQgPgJgDgOQADAOAPAJQgrgFAJhEQAKgWATgKIAEgBIAAgBIABAAIACgBIABAAIABgBIACAAIABgBIACAAIAAAAIABAAQAKgDALAAIABAAIAAAAIAHABIAEAAIANAHIAEADQAKAGAGAHQAIAJADAKQAEAMgFAQIgHAMIABgEQAAgQgLgQQALAQAAAQIgBAEIgJAOIgBABIAAAAQgFgBgEgDQgKgHgFgOQAFAOAKAHQAEADAFABIAAAAIgDABIgGACQgPAHgNACQgMgDgHgSQAHASAMADQgOAEgLAAIgHgBgAh9DDgAjtB+QgnhdA7hMQAaApAoARQgaAqAWApIgHgBIAAAAIgBAAQgLAAgKADIgBAAIAAAAIgCAAIgBABIgCAAIgBABIgBAAIgCABIgBAAIAAABIgHACQgUAKgKAWIgFgMgAAqiyQgfAAgpgeIAAgTIAFAAIgFAAQhFgGAMhGIAEgQQALgIALAAQAdgCAXAtIAIARIAvhrIgFAxQAvgpAQg5QAFAbgIAUQgJAGgLAMIARgFIgBABQgKAUAAASQAAAWAJAPQAJAQANAAQANAAAJgQQAJgPAAgWQAAgPgEgMQgFgQgGgIQAlgZAJg0QAKAigXAhQAQABALgJQgGALgCATIAIgKQgIAOAAASQAAAUAJANQAIAOAMAAQALAAAJgOQAIgNAAgUIAAgKQAVAqgVA5QhQBLhlAAIgUgBgACIjUQASAAAYgHIAEgBIACgBIABAAIgBAAIgCABIgEABQgYAHgSAAIAAAAIgBAAQgdAAgOgTIgBgBIABABQAOATAdAAIABAAIAAAAgAgckTIABAOIgBgOIAAgBIgBgBQgHgZgagBIAAAAIAAAAIgFAAIAFAAIAAAAIAAAAQAaABAHAZIABABIAAABQgCgFgDAAIAAAAIgBAAQgEABgFAKIgBABIAAABIAAABIgBABIgBACIAAABIAAgBIABgCIABgBIAAgBIAAgBIABgBQAFgKAEgBIABAAIAAAAQADAAACAFIAAAAgADDkGQASgfgXAAIAAAAIAAAAQgGAAgIACQAIgCAGAAIAAAAIAAAAQAXAAgSAfgAgckTIAAAAg");
	this.shape_61.setTransform(272.8092,352.85);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FBFEFE").s().p("AAQAhQgJgOAAgTQABgSAHgNQAJgJAKgGIACAAQAKAAAJAMIABABIAAABIADAGQAEAHABAJIAAABIABAJQAAATgJAOQgIAOgMAAQgMAAgIgOgAAfgKQgFAIAAAKQAAALAFAIQAEAIAGAAQAHAAAEgIQAFgIAAgLQAAgKgFgIQgEgIgHAAQgGAAgEAIgAg/AYIgBgHIABgHQABgBAAgBQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABABAAABQABADAAAEQAAAEgBADQAAAAgBABQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAgBgBAAgAAgAFIgBgGIABgHQAAgBAAgBQABAAAAgBQABAAAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAABQABADABAEQgBADgBADQAAAAgBABQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAgBAAAAg");
	this.shape_62.setTransform(290.7,318.675);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#584B40").s().p("AiyBDQCOhyC7hCQAZARADAZQi7BSiQBnQgXgTgDgcg");
	this.shape_63.setTransform(272.05,300.5);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#DA562F").s().p("AjgCKQABgwArgmQgNBFBFAGIAAATIAAAMQg8gDgogRgAhmBHQgYgugcACQCOhiC/hWQAUANAZgDQgZAxgwgQQAKAcgRAWQgFAGgHAGQgWgDgKASQgLAIgQAAQAXghgJgjQgKA1glAZQgNgPgTAOQAHgVgFgbQgPA5gvAoIAFgvIgwBqg");
	this.shape_64.setTransform(282.2,317.3);

	this.instance_3 = new lib.hand_box("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(272.9,364.25,1,1,0,0,0,5.8,6.5);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f().s("#A1A29F").ss(0.5,1,1).p("AggALIBHAzIgmA7IhJgvgAACg8IBHg8");
	this.shape_65.setTransform(280.175,384.95);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f().s("#B9733E").ss(0.5,1,1).p("AAAgEIAAAK");
	this.shape_66.setTransform(260.1,333.4);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f().s("#563C29").ss(0.5,1,1).p("AgggoQARASAJAUIAMgKIAEgEQAAgEgCgEQgGgRgSgNAgeg3IgGANAAIgYQAQAYANA4");
	this.shape_67.setTransform(270.275,341.075);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f().s("#503C21").ss(0.5,1,1).p("AgCASIALgLIgFgYIgGAEIgGAE");
	this.shape_68.setTransform(274.25,348.075);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f().s("#BA6F40").ss(0.5,1,1).p("AhKhzQADAPAEAKQAVA4AvAjQAmgIAKAgQAaAIAEAUQAGANgIAPQgGAMgPANAgtA2IgFAQAgBAMQgjA2AjgBQAOgJAIgOIAAgBQABgCABgBQAOgTAqAiAgtA2QANgiAhgTAgEBZQAAgQAMAEQADAGAGAHAhQgUIAjBKAAVAqQABgCABgCAAtBoQAFAGAGgEAAVAqQABAHAEAGQAMAVAnAFAAmByIADACIAPgKAAaA3QgcACAKAU");
	this.shape_69.setTransform(282.5833,360.4);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f().s("#C79F81").ss(0.5,1,1).p("AhOg0QAEANAFAMQAXA3AsAZQASALAVAHQASAFAYgBIAAhVQgmgDgcguQgCgDgCgEIgCgI");
	this.shape_70.setTransform(261.225,360.3833);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f().s("#6C5E50").ss(0.5,1,1).p("AhugDQgDgJgCgIQgchoAzgTQAMgBAGAAQARAAAOATQAOAUAKArIAtAAIAAAZIgEACIAAAjQgJAMgXgCABMiBQARAmAJAkQADAOADAOQACAMABALIAOgKABvgEQADAegCAeAgNgeIACADIAIAVQgEAEgFADQggAYg2gBQgDAAgCAAQgDgBgDAAIgMgcQAFABAGABQA4ADApgeQAAgBABAAIABAEAgOgkIAOALIAWgKAgOgkQAAADABADAhiCAQgCgBgBgBQgJgGgFgHQgGgHgCgJQAIAGAJAEQAEACAEACQAKAEAKADQATAEASAEIATAEIAAASQATABAUgBAhiCAIAAABQAAAaASgSQARAGAWADAgpB+IAAAUQAGAWANgUAhiBvIAAARAhOB2IgCATAgTg+QACAMADAOAAlicQAjBuABBj");
	this.shape_71.setTransform(263.2006,352.7444);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f().s("#6A5648").ss(0.5,1,1).p("AAJhLIBTgFIAuATIAQAGIAGgGIAcAPIgJAIIhNBAIgfAbIgdgLIAIgGQgjgGgcgQIgKAqIiNgLIgMgBIgLgBIAAAaIAuADIBYAHIAmADIADgaIgLAAAAyAkIBohb");
	this.shape_72.setTransform(268.275,375.55);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f().s("#715F4E").ss(0.5,1,1).p("AgSAXQABABACABQAYALAeAGIAYgxQgCgBgCgBQgZgPgngNQgHgCgGgCQgfANgNAYQAHAEAGAF");
	this.shape_73.setTransform(260.7,337.775);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f().s("#C4A17D").ss(0.5,1,1).p("AhNgQQgBANAAADQgBBLgZA8AilgXIAAARQgCA8gWA6AA+AKQAbglAIgiQgIgIgLAAACbiGIACACQAGAFAFAFQArAwgpBJIgkA9");
	this.shape_74.setTransform(270.6756,385.125);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AgfgrIgUBFIBdASQAJgfACghg");
	this.shape_75.setTransform(254.9,400.75);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f().s("#563722").ss(0.5,1,1).p("AAHiSQgFAIgCAIQgMA3ALAwAAGgMQgRBIAIBX");
	this.shape_76.setTransform(250.9729,365.275);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f().s("#543111").ss(0.5,1,1).p("AA/gIQAAAKgEAIQgFAIgGAAQgHAAgEgIQgFgIAAgKQAAgLAFgIQAEgIAHAAQAGAAAFAIQAEAIAAALgAgfAKQAAALgEAIQgFAIgHAAQgGAAgEgIQgFgIAAgLQAAgKAFgIQAEgJAGAAQAHAAAFAJQAEAIAAAKg");
	this.shape_77.setTransform(279.95,320.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AB7hpQACgIACgIAB7hMQAAABABAAQABADACADQADAIACAJAB7hNQgCgJABgJACEgzQAVApgVA4QhRBMhmgBQgHAAgHAAQgCgBgBAAQgdAAgngaQgCgBgEgDABBAHQApgJgWAmAgTBDQAXAgBGgW");
	this.shape_78.setTransform(273.7563,323.4006);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#7A3729").ss(0.5,1,1).p("ACigrQAHgGAGgGQAQgWgKgcQAwAQAagxQgZAEgVgOQgKgGgOgMAhJBQIAIARIAwhqIgFAwQAvgpAQg4QAEAbgHAUABGgKQAlgZAKg0QAJAigXAhQARABALgJAj+BmQAXAeAlAQQAlAPA3AEQAEAAAEAAIAAgLIAAgU");
	this.shape_79.setTransform(269.025,316.875);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#EE975E").s().p("AgsAdIBLhAIADABIALALIhGA7QgIgIgLABg");
	this.shape_80.setTransform(283,375.25);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#F4976A").s().p("AgrAFIAAgQIBXAHIgBAQg");
	this.shape_81.setTransform(258.5,383.925);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#EF9A67").s().p("AAnBmIgDgCIAKgIIgcgPQgGgHgDgFQgDgGAAgEQAAgLAUgCQAMAVAoAGQgGALgPANIAAAAIgBABIgEABIAAAAIAAAAQgDAAgCgCIgBgBIABABQACACADAAIAAAAIAAAAIAEgBIABgBIAAAAIgQALgAgEBNQAAgNAIAAIAAAAIAAAAIAEAAIAAABIABAAQADAFAGAHIgHAGgAASBNIAAAAgAgEBNIgugTIAFgQIgjhKQACgegDgfIAOgKQAVA4AvAlQggARgOAjQAOgjAggRQAmgKAKAhQAbAHADAUQAGAOgHAPQgogGgMgVQgUACAAALQAAAEADAGIgBAAIAAgBIgEAAIAAAAIAAAAQgIAAAAANgAgCA1IABAAQAOgJAJgPQABAHADAGQgDgGgBgHIACgEIgCAEIAAAAQgJAPgOAJIgBAAQggAAAggzIABgCIgBACQggAzAgAAIAAAAgABPAoIgGgFQgUgPgNgBIgDAAIAAAAQgHAAgFAFIgBABIAAAAIAAAAIAAAAIAAAAIABgBQAFgFAHAAIAAAAIADAAQANABAUAPIAGAFgAAJBBIAAAAg");
	this.shape_82.setTransform(282.5083,361.625);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#EB7D3B").s().p("AgIgFIAKgLQADAOAEAJIgOAKIgDgWg");
	this.shape_83.setTransform(274.875,350.525);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#E4A074").s().p("AgigHIAAgMQAmAZAcAAIADABIgGANQgZgPgmgMg");
	this.shape_84.setTransform(263.625,334.8);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#79563F").s().p("AAaAsIAGgEIAGgFIAFAaIgLALIgGgcgAAaAsQgJgjgRglIAFgEIgCgIQAQAZANA3IgGAEIAAAAgAgmg4IgEgCIAGgNIAOAAQAUAOAFARIACAIIgFAEIgLAJQgKgTgRgSg");
	this.shape_85.setTransform(270.825,342.7);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#85634D").s().p("AgKCSQgIhWAShIQAFAHAJAFQgOBIABBLgAgHgcQgLgwANg3QACgHADgIIAFARIgKgCIALAdIAGABQgIAqAFApIgQgKg");
	this.shape_86.setTransform(251.6479,365.325);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#ED9D6B").s().p("AgkAXIgJgXQA1AAAggXIACAJIAEAHQgfAfgqAAIgJgBg");
	this.shape_87.setTransform(257.925,355.2203);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#8F776A").s().p("AAMATIAAgUIATADQASALAWAHQgWABgSgBIAAgSIAAASQgHAKgEAAQgFAAgDgLgAgaAKIABgTIgBATQgTASAAgbIAAAAIgDgBQgIgGgGgIQgFgHgDgIIARAKIAIADIAUAHIAlAIIAAAUQgWgDgQgGgAgtABIAAgRgAAMgBIAAAAg");
	this.shape_88.setTransform(257.875,365.4694);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#B19582").s().p("AggH1IhYgHIgvgEIAAgZIALABIAMABQgChLAPhIIADACIAAAAQAAAbASgSQARAGAWADQAGAWANgVQATABAVgBQARAFAYgBIAAhWQglgDgcguIgEgHIABAAIAAAAIABAAIAAAAIABAAIAAAAIAAAAIAAAAIABAAIAAAAIABABIAAAAIABAAIAAAAIABAAIAAAAQASgBAIgJIAAgBIAAgjIgWAJIgPgLIABAGIgBgGIAPALIAWgJIAAAjIAAABQgIAJgSABIAAAAIgBAAIAAAAIgBAAIAAAAIgBgBIAAAAIgBAAIAAAAIAAAAIAAAAIgBAAIAAAAIgBAAIAAAAIgBAAIgCgIIAJgIIgIgVIgCgEIABgBIABAFIgBgFIgBABIgCABQgiAbgvAAIAAAAIAAAAIgOgBIAOABIAAAAIAAAAQAvAAAigbIACgBIACAEIAIAVIgJAIQggAYg2gCIgFAAIgGAAIgMgdIALABIgFgRQgchoAzgSIASgBIgNgKQAMgYAfgNIAOAEQAnANAYAPIAEACIgWAyQgegGgZgLIgDgCIADACQAZALAeAGIAWgyQARASAKAUIAMgKQARAmAJAjIAGAcIADAYQADAegCAeIAjBLIgFAQIhTAFIBTgFIAuATIAQAHIAHgGIAcAOIgKAIIhMBCIgfAbIgdgLIAHgGQgigHgegQIgJAqIiNgKICNAKIALABIgEAZgABGHKIBohcgAArD3QgBhlgjhuQAjBuABBlgAgDCcIgEACIAEgCIAAgaIguAAIAFAaIgFgaIAuAAgAhJBDQAOAUAKArQgKgrgOgUIAAAAIgBAAIAAgBQgNgRgQAAIAAAAIgBAAIAAAAIAAAAIABAAIAAAAQAQAAANARIAAABIABAAIAAAAgAhHE/IglgIIgUgHIgIgDQgFgpAIgrIAFAAIAJAZQAXA4AsAZgAAHAkIAAAAgAjEjRQCRhnC7hSQBDARAdAkIgTAKQjKBhivB+QgXgmgJg/gAh7nrQCVgnBSBdQi8BDiOByQgpiRCMhag");
	this.shape_89.setTransform(266.2269,333.3739);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AirGoIAUhFIBVAXQgCAigJAfgAA8E7IApg/IBHAzIgmA7gAA3lqQgKgPAAgWQAAgSALgVIAAgBIABAAQAagLAUAYQAFAMgBAPQAAAWgJAPQgIAPgOAAQgNAAgIgPgABJmYQgFAIAAALQAAALAFAIQAEAIAHAAQAGAAAEgIQAFgIAAgLQAAgLgFgIQgEgIgGAAQgHAAgEAIg");
	this.shape_90.setTransform(266.85,360.8521);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FBFEFE").s().p("AAQAhQgJgOABgTQAAgSAHgNQAJgJALgGIABAAQALAAAIAMIABABIAAABIADAGQADAHACAJIAAABIABAJQAAATgJAOQgIAOgMAAQgLAAgJgOgAAegKQgEAIAAAKQAAALAEAIQAFAIAGAAQAHAAAFgIQAEgIAAgLQAAgKgEgIQgFgIgHAAQgGAAgFAIgAg+AYIgBgHIABgHQAAgBAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABABQAAAAAAAAQABABAAABQACADAAAEQAAAEgCADQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBgAAfAFIgBgGIABgHQABgBAAgBQABAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAABQACADgBAEQABADgCADQAAABgBAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_91.setTransform(280.55,319.175);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#F8C7A2").s().p("Ai9GuQAWg6ACg9IBXAHQgBBKgZA9gAA+FIQAbgmAIgjIBHg8QArAvgpBKIgkA+gAg4CNQgWgGgSgMQgtgZgXg4QAxAEAjgjQAbAtAnADIAABXIgIAAQgUAAgOgFgAgUixIgOAAIgDgBQgdAAgngaIgGgEIAAgUIAGAAIgGAAQhFgFANhGIADgQQAMgHALgBQAcgDAYAuIAHASIAwhsIgFAxQAvgqAQg4QAFAbgIAUQgJAGgLANIARgHIgBABQgKAVAAATQAAAVAJAPQAJAPANAAQANAAAJgPQAJgPAAgVQAAgQgEgLQgFgRgGgHQAlgZAJg1QAKAigXAhQAQABALgJQgGALgCASIAIgJQgIANAAAUQAAASAJAOQAIAOAMAAQALAAAJgOQAIgOAAgSIAAgKQAVApgVA4QhQBMhlAAIgCAAgAA4jUQASAAAYgHIABAAIABAAIAFgCIgFACIgBAAIgBAAQgYAHgSAAIAAAAIAAAAQgeAAgOgTIAAAAIgBAAIABAAIAAAAQAOATAeAAIAAAAIAAAAgAhtkTIACAOIgCgOIAAAAIAAAAQgCgFgDAAIAAAAIgBAAQgEABgHAPIgBABIABgBQAHgPAEgBIABAAIAAAAQADAAACAFIAAAAIAAAAIAAAAgABzkHIAAAAQARgegWAAIAAAAIAAAAIgLABIgBABIgBAAIgBAAIABAAIABAAIABgBIALgBIAAAAIAAAAQAWAAgRAeIAAAAgAhtkTIAAgBIAAgBQgHgZgagBIgBAAIAAAAIgEABIAEgBIAAAAIABAAQAaABAHAZIAAABIAAABIAAAAg");
	this.shape_92.setTransform(270.6756,353.35);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#584B40").s().p("AiyBCQCOhwC8hDQAYARADAaQi7BRiQBnQgXgTgDgdg");
	this.shape_93.setTransform(261.875,301);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#DA562F").s().p("AiECdQg3gDglgQQAAgwArgnQgMBHBFAFIAAAUIAAALIgIgBgAhnBGQgXgtgdADQCPhkC/hVQAVAOAZgEQgaAwgwgPQAKAcgQAVQgGAHgHAGQgWgDgJARQgLAJgRgBQAXgggJgiQgKA0glAZQgMgPgUANQAHgTgEgcQgPA5gwApIAFgxIgwBrg");
	this.shape_94.setTransform(272.025,317.8);

	this.instance_4 = new lib.head_kik("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(250.8,309.35,0.9999,0.9999,-16.6106,0,0,29.9,26.6);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f().s("#BA6F43").ss(0.5,1,1).p("Ah0hJQAIAHAJAHQA0AlA7ADQAkgaAPAaQAegGAOALQAKAIAAARQgBAOgGAUQgDAGgGAMAAxAEQgBgDgBgDAAxAXQAAgBABgBQABgIgCgJQAGAHAHAFQAXAOAggTAAnBDQAMgGgBgFQgEgHAKgGQgJgGACgOAAMgHQAAA1AWgFQAMgGADgMAAyAVQACgJAKAEABCBJQgNgKgDgHABuAtQgpAIgNgKAAxAEQAGgXA0AFAAMBJQgZgyAZgq");
	this.shape_95.setTransform(283.2511,349.7);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f().s("#BD7344").ss(0.5,1,1).p("AhBgWQARgWADgWABCBDQhAgHgygb");
	this.shape_96.setTransform(277.825,350.375);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f().s("#533C2A").ss(0.5,1,1).p("Ag2gkQAPAQAVAJQAGgBADgFQACgEAAgGQAbAJAWAdAAuA/QAQgRAAgSQAAgFgBgFIgRgOQgBAEgBADAAdAhQAJgJAEgNAg9g+QArANALAW");
	this.shape_97.setTransform(265.325,339.55);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f().s("#BB6E3D").ss(0.5,1,1).p("AgfAHIAAgSIA/AAIAAAX");
	this.shape_98.setTransform(255.9,334.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f().s("#99A2A6").ss(0.5,1,1).p("AgzgjIBWgQIARBWIhWARg");
	this.shape_99.setTransform(305.225,374.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f().s("#B76F43").ss(0.5,1,1).p("Ahog1QAMgFAKgEQASgGARgDQBRgRAnA0QAZAwAHAwAhNAcQAFgDAFgBQAggLAhgBQAPAeAFAj");
	this.shape_100.setTransform(298.2,363.2921);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f().s("#564129").ss(0.5,1,1).p("AAMA8QgYg/ABg4");
	this.shape_101.setTransform(250.323,359.125);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f().s("#C9A488").ss(0.5,1,1).p("AhagRQAGAMAHAHQAfAoApAOQAHADAIACQAUAEAVAAQAUgBAUgFAgRhAQACADACADQAEAEADAFQAdAkAzgN");
	this.shape_102.setTransform(261.525,359.0275);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f().s("#6F5D4E").ss(0.5,1,1).p("ACOgrIhfAnAgzAFQACAAACgBAhoAhIgEgUQAKAAALgBQACANAAAIQAAAVgTgVgAh7AMQgIAJAbAMAh7AMQAEAAAFAAQADAAADABAgdAaQAAgHgCgKAgwAbQAUAYgBgZQAYgBAOgMAhXAMQASgCASgFQABAOACAIAhVAhIAlgGAiNAJIASAD");
	this.shape_103.setTransform(265.725,364.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f().s("#A3A3A1").ss(0.5,1,1).p("AgggrIgUBFIBdASQAKgfACghg");
	this.shape_104.setTransform(259.3,400.5);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f().s("#C4A17D").ss(0.5,1,1).p("AgfhOIAAAQQgCA9gWA6AA4hIQgBAOAAADQgBBKgZA8");
	this.shape_105.setTransform(261.675,390.45);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f().s("#6A5648").ss(0.5,1,1).p("Ai4gqQgGgKgFgJQg5hjAugVQAHgFAHgBIgOgFQAJgcARgSQAKgBAKgBQAkgDAcAIQAEABADABAjAi7QAPgEAPAJQAoAIAbgCIAGg5QBMBhAOBsIAogbIAFgDQgKgcgMgZQgFgKgGgKQAAgCgBgBQgJgPgIgOQgSgbgVgYAi4gqQgCABgCAAIALAXQADAAADgBQAEAAAEAAQAtgIAdgnQADgFADgFIgNgXQgDADgCACAhBh2IgVAUIgSgDQABADACAEAhBh2IAJAnQgGAOgXAEAh0h9QAGALAGANAi4gqQAwgQAjgkAAUDYIidgMIgLgBIAAAaIAuADIBYAHIAlADIADgaIgGAAIAfg5ICRg3IADAKIAcgKIgLgkIgbhRIgFgPIgBgEIgaALIAAAFIAnB4Ah0h9IAtgMIAGATAiii2QAXAOAXArACdgQIgtAV");
	this.shape_106.setTransform(268.7602,359.2841);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f().s("#563722").ss(0.5,1,1).p("AADg8QgCAJgBAJQgEAwAEA3");
	this.shape_107.setTransform(254.981,373.625);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#E97A3E").s().p("AgOAIIgCgCQAQgQAAgSIAQAOQgCAVgRAWIgLgVg");
	this.shape_108.setTransform(271.6,345.225);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#755842").s().p("AADAPQAJgIAEgMQgEAMgJAIQgRgZgVgYQACgFAAgFQAcAIAVAfIACgIIARAOIABAKQAAARgQARIgRgeg");
	this.shape_109.setTransform(267.925,341.3);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#7B5A42").s().p("AgTAAIgHgBIAAgYQAqANALAVQAAAGgCAEQgDAFgGABQgUgJgPgQg");
	this.shape_110.setTransform(261.825,335.85);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#F29F6B").s().p("AgfAHIAAgSIA/AAIAAAXQgcgIgjADg");
	this.shape_111.setTransform(255.9,334.5);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#B09582").s().p("AABBRIgGgJQAXgEAGgOIgJgnIAJAnQgGAOgXAEIgEgFIAGgKIgNgXIgFAFIgDgHIATADIAUgUIgHgSIgsALQgXgqgWgOIABAAIACABIACAAIACAAIABAAQAZAFAUAAIACAAIAAAAIAHAAIADAAIACAAIAGg5QAOAQAVAJQAGgBADgFQAVAYASAbIARAdIACACIALAUQAMAZAKAcIgFADIgoAbQgQhrhKhhQBKBhAQBrQgNADgMAAQgiAAgWgbgAgYAgIgMgYIAsgLIAHASIgUAUgAgYAggAgcgqQgUAAgZgFIgBAAIgCAAIgCAAIgCgBIgBAAQgPgJgPAEIgPgFQAJgcARgSIAVgCQAkgDAcAIIAHACIgGA5IgCAAIgDAAIgHAAIAAAAIgCAAgAgIhjIAAAAg");
	this.shape_112.setTransform(260.725,345.8952);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#E87A40").s().p("AgSgkIAVgIIAQBVIgLAEg");
	this.shape_113.setTransform(289.575,361.525);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#EF9B68").s().p("ABQBHQghABggALIgPhVQARgHARgDQBTgRAmA0QAZAwAHAxIhXAQQgFgigPgfgAgbgIQAMgFAAgFIgBgBQAEAHAMAKIgVAHgAg2gCQgNgZAAgXQAAgXANgWQgNAWAAAXQAAAXANAZQhAgHg0gaIAGgEQgLgbgMgZQASgWADgWQA0AlA8ADQAkgaAPAaQAdgGAOALIgPgBIgBAAIAAAAQgjAAgGASIAAAAIAAACIAAgCIAAAAQAGgSAjAAIAAAAIABAAIAPABQAKAIAAASIgBABIgBAAIgBABQgQAJgOAAIgBAAIAAAAQgLAAgJgGIAAAAQgHgFgGgHIgCgHIACAHQACAJgBAIQACgJAKAEIAAAAQAJAGALAAIAAAAIABAAQAOAAAQgJIABgBIABAAIABgBQAAAOgHAUIgDABIgBAAQgPADgLAAIgBAAIAAAAQgOAAgHgFIgBgBIAAAAQgHgFAAgJIAAgGIABgCIgBACQgCAMgNAGIgDAAIgBAAIAAAAQgSgBAAgwQAAAwASABIAAAAIABAAIADAAQANgGACgMIAAAGQAAAJAHAFQgHAEAAAFIABAEIgBgEQAAgFAHgEIAAAAIABABQAHAFAOAAIAAAAIABAAQALAAAPgDIABAAIADgBIgJASQgRADgRAHQgMgKgEgHIABABQAAAFgMAFIgBgFIgaALIAAAAgAAAgCIAAAAgAgQgTIAAAAgAArgeIAAAAg");
	this.shape_114.setTransform(289.95,357.325);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#83634C").s().p("AAQA9IgRgCQgYg/ABg5IALATIgEABIALAXIAGgBQAAAqAZAnIgJgBg");
	this.shape_115.setTransform(251.673,359.275);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#F29C61").s().p("AgpANQAsgHAcgnIAEAGIAHAJQgXAigvASQgHgJgGgMg");
	this.shape_116.setTransform(256.625,355.9);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#857665").s().p("AgtAJIgFgTIAVgBQADAMAAAIQgBALgEAAQgFAAgJgLgAAKADQgDgHAAgOQAAAOADAHIgkAGQAAgIgDgMQATgCARgFIAEgBIAPAFIADAQQAAANgFAAQgFAAgJgMgAhBgLIAJAAIAGABIAFATQgbgLAHgJgAAKADIAAAAgAAagOQAUAEAWAAQgQALgXABIgDgQgAgdgLIAAAAgAAagOIAAAAg");
	this.shape_117.setTransform(259.8935,366.625);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#B29580").s().p("AAEA/Igmh3IAAgGIAagLIABAFIAFAOIAaBRIALAlIgcAJg");
	this.shape_118.setTransform(287.975,363.3);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#B19582").s().p("AABDVIhXgHIgvgEIAAgZIALABICeALIiegLQgFg3AGgxIACgSQATAVAAgVIAlgGQAUAYgBgZQAYgBAPgMQATgBAUgFIgCgMIBfgmIAtgWIAoB3IiRA4IgfA4IAGABIgEAZgAiBAjQgZgmgBgqIAIgBIgIABIgGAAIgMgXIAEAAIgLgTQg4hjAtgWQAIgEAHgCQAPgDAPAJQAWAOAXAqIAMAZIADAHIAFgFIANAXIgGAJQgcAogtAHQAGAMAHAIQAfAnApAOIgEABQgSAFgSACIgVABIgGgBgAiphEQAwgRAjgjQgjAjgwARg");
	this.shape_119.setTransform(267.2102,361.901);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AkZCfIAUhFIBVAXQgCAigJAfgACxigIBXgRIASBXIhXARg");
	this.shape_120.setTransform(282.25,387.1);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#F8C7A2").s().p("Ag8DHQAWg7ACg8IBWAGQgBBMgZA8gAADhuIgOgEQgpgPgggnQAxgSAXgjQAcAkAzgNIAPBKIADAMQgVAFgTABIgFAAQgTAAgSgEg");
	this.shape_121.setTransform(262.175,376.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f().s("#A4A39B").ss(0.5,1,1).p("AgqAxIgBhXIBXgKIAABXg");
	this.shape_122.setTransform(314.15,355.85);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f().s("#564129").ss(0.5,1,1).p("AAMA9QgYg/ABg5");
	this.shape_123.setTransform(256.123,358.4);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f().s("#563722").ss(0.5,1,1).p("AADg7QgCAJgBAIQgEAxAEA2");
	this.shape_124.setTransform(260.781,372.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f().s("#6F5D4E").ss(0.5,1,1).p("AgzAGQACgBACgBAgwAbQAUAYgBgZQAAgHgCgKAgzAGQABANACAIAgdAaQAYAAAOgNAhsANQAKAAALgBQACAOAAAIQAAAUgTgUgAh7AMQAEABAFAAQADAAADAAAh7AMQgIAJAbANAiNAJIASADAhXAMQASgBASgFAhVAiIAlgHACOgrIhfAn");
	this.shape_125.setTransform(271.525,363.5);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f().s("#BA6F43").ss(0.5,1,1).p("AAuhBQgIgNAIgGQgDgFgCgFQgCgDAAgCQAAgEACgEQAGgOAqgGQAKAFAFANAgDhqQAOBDAVgRQAOgQgFgWAgDhqQAKgfAnAMQAbgLAQAJABrhJQABgOgCgRQgBgCgBgDABrhJQgdAagggSQAAAOAGAIQALANAggFQAKgOACgYgAAuhUQAhABAZgaAiOh+QALAGANAEQA3AVA8gLQgHAuAYAlQAbAIASgCQAYgCAMgQAA7gRQgcgIAVgSAAZCEQAGgFAHgFQAugfBPgCAgDAsQAKgHAMgGQA6gbBVgDAiigmQBkAmBMgX");
	this.shape_126.setTransform(293.55,351.8349);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f().s("#C9A488").ss(0.5,1,1).p("AgRhAQACACACADQAEAFADAEQAdAlAzgNAhagRQAGAMAHAHQAfAoApAOQAHADAIACQAUAEAVAAQAUgBAUgF");
	this.shape_127.setTransform(267.325,358.3025);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f().s("#6A5648").ss(0.5,1,1).p("AjAi7IgOgFQAJgcARgSQAKgBAKgBQAkgDAcAIQAEABADABAjAi7QAPgEAPAJQAXAOAXAqIAtgMIAGAUIgVATIgSgCQABADACAEAi4gqQgGgKgFgJQg5hjAugWQAHgEAHgBAiii2QAoAHAbgCIAGg4QBMBgAOBtIAtgfQgIgYgLgXQgCgDgBgCQgBgCgBgCQgEgJgFgIQAAgBgBgBQgEgHgDgFQgFgJgFgJQgSgagVgYAi4gqQgCAAgCABIALAXQADAAADgBQAEAAAEAAQAtgIAdgoQADgEADgFIgNgXQgDACgCADAhBh2IAJAnQgGAOgXAEAAUDXIidgLIgLgBIAAAZIAuAEIBYAHIAlACIADgZIgGgBIAfg4ICRg3IADAKIAcgKIgMgnIgdhYIgDgJIgaALIAAAFIAnB4Ai4gqQAwgRAjgjACdgQIgtAVAh0h+QAGALAGAO");
	this.shape_128.setTransform(274.5602,358.5591);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f().s("#533C2A").ss(0.5,1,1).p("AhAgtQAPAQAVAJQAGgBADgFQACgEABgGQgCgEgDgEQAhAEAjAXAAeApQAPgTACgnQAMgJANAUQgBAugYAgAhHhHQAjAKAPAR");
	this.shape_129.setTransform(272.075,339.775);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#E97A40").s().p("AgVAmIgCgEQAXgfABguQALAGAMAEQgCAygoAbIgDgGg");
	this.shape_130.setTransform(279.2,343.5);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#7B573E").s().p("AAOAqIgCgDIgHgMQAPgTACgmQANgJAMAUQgBAugXAfIgJgQgAAFAbIgKgRQgRgagWgYQACgEABgFIgFgIQAiAEAiAXQgCAmgPATIAAAAg");
	this.shape_131.setTransform(274.55,341.125);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#E57A45").s().p("AgUglQALgHALgFIATBZQgHAFgGAFg");
	this.shape_132.setTransform(295.275,360);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AklD3IAUhFIBWAXQgCAigJAfgADOj/IBXgKIAABYIhWAKg");
	this.shape_133.setTransform(289.2,377.55);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#B29580").s().p("AAEA/Igmh3IAAgGIAagLIADAKIAcBXIAMAoIgcAKg");
	this.shape_134.setTransform(293.775,362.6);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#857665").s().p("AgtAJIgFgTIAFATQgbgLAHgJIAJAAIAGABIAVgBQATgCARgFIAEgBIAPAFQAUAEAWAAQgQALgXABQAAAZgTgYQgDgHAAgOQAAAOADAHIgkAGQAAgIgDgMQADAMAAAIQgBALgEAAQgFAAgJgLgAAdACIgDgQIADAQgAgaAJIAAAAg");
	this.shape_135.setTransform(265.6935,365.925);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#F8C7A2").s().p("Ag8DHQAWg7ACg8IBWAHQgBBKgZA9gAADhtIgOgFQgpgOgggoQAxgRAXgkQAcAlAzgNIAPBJIADANQgVAEgTABIgFABQgTAAgSgEg");
	this.shape_136.setTransform(267.975,375.45);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#EF9B68").s().p("AATAkQA6gbBVgDIABBYQhPACguAfgAiighQAqgbACgzQA3AVA8gLQAKgfAnAMQAbgLAQAJQgqAGgGAOIgCAGIABACIABAFIAFAKQgEADAAAFQAAAEAEAHIAAADQAAAMAGAHQgGgHAAgMIAAgDIACAAIAAAAQAMAHALAAIABAAIAAAAQARAAAQgNIABgBIABgBQgCAYgKAOIgCAAIgOABIAAAAIAAAAQgSAAgIgJIgBAAIABAAQAIAJASAAIAAAAIAAAAIAOgBIACAAQgMAQgXACQgRgEAAgJQAAgGAJgHQgJAHAAAGQAAAJARAEQgUACgagIQgTgdAAgiIACgUIABAFIABACQAKAuAPAAIAAAAIAAAAQAEAAADgCIABgBQAKgLAAgPIgBgMIABAMQAAAPgKALIgBABQgDACgEAAIAAAAIAAAAQgPAAgKguIgBgCIgBgFIgCAUQAAAiATAdQgcAJggAAQg2AAg+gYgAA8gMIAAAAgAAOgSIAAAAgABHg1QgLAAgMgHIAAAAIgCAAQgEgHAAgEQAAgFAEgDIgFgKIgBgFIgBgCIACgGQAGgOAqgGQAKAFAGANIABAFQACARgBAOIgBABIgBABQgQANgRAAIAAAAIgBAAgAAzhPQAdAAAXgXIACgCIgCACQgXAXgdAAIgBAAIAAAAIgCAAIgCAAIACAAIACAAIAAAAIABAAgAAug8IAAAAgABZh6IAAAAg");
	this.shape_137.setTransform(293.55,351.3349);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#B19582").s().p("AABDVIhXgHIgvgEIAAgZIALABICeALIiegLQgFg2AGgxIACgSQATAVAAgVIAlgHQAUAYgBgYQAYgBAPgNQATgBAUgFIgCgMIBfgmIAtgWIAoB4IiRA3IgfA4IAGABIgEAZgAiBAkQgZgmgBgrIAIAAIgIAAIgGABIgMgXIAEgBIgLgTQg4hjAtgWQAIgEAHgBQAPgEAPAJQAWAOAXAqIAMAZIADAHIAFgFIANAXIgGAJQgcAogtAIQAGALAHAJQAfAmApAPIgEABQgSAFgSABIgVABIgGAAgAiphEQAwgRAjgjQgjAjgwARg");
	this.shape_138.setTransform(273.0102,361.174);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#F29C61").s().p("AgpAOQAsgIAcgnIAEAGIAHAJQgXAigvASQgHgJgGgLg");
	this.shape_139.setTransform(262.425,355.175);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#B09582").s().p("AABBRIgGgJQAXgEAGgOIgJgnIAJAnQgGAOgXAEIgEgGIAGgJIgNgXIgFAFIgDgHIATACIAUgTIgHgTIgsALQgXgpgWgOIABAAIACAAIACABIACAAIABAAQAZAEAUAAIACAAIAAAAIAHAAIADAAIACAAIAGg4QBKBgAQBsQgNADgMAAQgiAAgWgbgAgIhjIgGA4IgCAAIgDAAIgHAAIAAAAIgCAAQgUAAgZgEIgBAAIgCAAIgCgBIgCAAIgBAAQgPgJgPAEIgPgFQAJgcARgSIAVgCQAkgDAcAIIAHACQAOAQAVAJQAGgBADgFQAVAYASAaIAKASIAHAMIACABIAJARIACAEIACAFQALAXAJAYIgtAfQgQhshKhggAgYAgIgMgZIAsgLIAHATIgUATgAgYAgg");
	this.shape_140.setTransform(266.525,345.1935);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#7B5A42").s().p("AgTAAIgHgBIAAgXQAiAJAOARIAFAHQAAAGgCAEQgDAFgGABQgUgIgPgRg");
	this.shape_141.setTransform(267.625,335.15);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f().s("#C4A17D").ss(0.5,1,1).p("AA4hGQgBAIAAAEQgBBKgZA8AgfhLQAAAFAAAFQgBA9gXA5");
	this.shape_142.setTransform(253.65,389.175);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f().s("#563B2B").ss(0.5,1,1).p("AAGgJQgCgJACgIAACiLQgIA8AIApAgEBBQgDAnADAk");
	this.shape_143.setTransform(246.5558,364.675);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f().s("#CBA184").ss(0.5,1,1).p("Aixg6QAOABASgFQANgDAQgGQACgBADgBQACAAACgCAjTiEQgJBEArAGAikhTQAHASAMADAjDhSQADAOAPAKAiGisQAIAEAGAEQACABACABQAJAHAHAHQAHAIADAKQAEANgFAPQgCAGgEAHQgEAGgFAHQgBABAAAAAiDhiQAFANAKAHQADACAFABIABAAAhsh9QAMASgBASADWCtIgEiHQgDgUgMgRQgFgHgHgHABmAZIAFAGIAPAWIAEB4");
	this.shape_144.setTransform(257.2971,378.55);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f().s("#CAA081").ss(0.5,1,1).p("AgfBiQAKgWAUgKQABgCABAAIAAAAQABAAAAAAQABgBABAAIABAAQABgBABAAIACgBQAAAAABAAQANgEASABQgVgoAagqQAEgIAGgHAgFhiQgIAIgGAIQg8BNAnBcQADAGADAGAApA6QACAAACAA");
	this.shape_145.setTransform(239.2779,355.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f().s("#6E5D4A").ss(0.5,1,1).p("AiriTIgDgFIgUAWQADAGADAGQAYAsAmAPQAFACAFABIAJgLIAJgLQBXhKgWglQgFgIgHgFQgKgHgMgBQgBgTAkgTQAKAAALACAA1jbQgGAggTAXQgYgGgTgJQgJgFgJgFAAmhfIAFgBIAAgWIhCgEIAAAXIAFACIAAAiQAdAZAcgZgAgKj1QAcAFAjAVQAtCQgPCIQAFgBAGgCIACAOQAPAXADgXQAAgCAAgDABbi7QARAmAKAnQADAQADARQACAKAAAKQAFAugGAuIAAAFQADAOgDAJIA4BuIAFgDIAJAUIgPAHIhRAnIgXALIgMgYIAHgDIBugvABvAxIACASIABAFABxBDQABAAAAAAQAFgCAGgCABvAxQAHgGAHgIAA6BAQAMgBANgCAA6BRQABAAAAAAIABAAQASgDASgGABeA6QAJgEAIgFAA6BAIAAARAgShhIAgAKIAYgIAhTAzIgCAQQAGAfANgYQATAGATADAheAxQgFAJAHAGQACAAABABQACABACABAheAxQACAAACgBQADABAEACQAJADAKACIgCASAhrAhQAEAKAAACQAGAEADAAAgIBVQAYACAZgDQALAXAGgaAgIBBQAYACAZgBIAAASAgIBBIAAAUAgcA/IAAAUQAKAeAKgcAgcA/QAKABAKABAhAA4QASAFASACABHDcIgSgmIgHAsIAFAAIAAAWIgigCIhXgFIgzgEIABgZIAGAAIAPAAICRAOAApBCQAIgBAJgBAiriTQAZA1AwAQAhDjSQgqgDg+BC");
	this.shape_146.setTransform(257.55,357.45);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f().s("#563722").ss(0.5,1,1).p("AgRg7QgLgOgQgGIgEASQAZAUACARQAIABAEgGQACgDABgFQgEgNgHgJgAAgAlIAIgGIAIAYQgCADgCADQgJANgNAGAAQAwIAQgLQgJg0gogs");
	this.shape_147.setTransform(267.7,341.65);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f().s("#512D06").ss(0.5,1,1).p("AATAHQAAAGABAIAABATQALgaAHAOAgTgUQAfgCAHAd");
	this.shape_148.setTransform(254.25,323.2655);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f().s("#543111").ss(0.5,1,1).p("AgfAJQAAALgFAIQgEAIgHAAQgGAAgFgIQgEgIAAgLQAAgKAEgIQAFgIAGAAQAHAAAEAIQAFAIAAAKgAA/gJQAAAKgFAIQgEAJgGAAQgHAAgFgJQgEgIAAgKQAAgLAEgIQAFgIAHAAQAGAAAEAIQAFAIAAALg");
	this.shape_149.setTransform(276.35,319.1);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f().s("#CB9D83").ss(0.5,1,1).p("AB7hpQACgHACgIAB7hLQAAAAABABQABADACADQADAHACAJAB7hMQgCgJABgJABBAIQApgJgWAlACEgzQAVApgVA4QhYBThwgIQggAAgqgeAgTBDQAXAhBGgW");
	this.shape_150.setTransform(270.1563,321.5854);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#F49867").s().p("AguAQIBQgmIANAPIhYAdg");
	this.shape_151.setTransform(272.15,379.45);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#E27A42").s().p("AgOAAQANgGAJgMIAHAQQgHANgTAIIgDgTg");
	this.shape_152.setTransform(271.4,349.7);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#88634E").s().p("AgLBTQgDgjADgnIAEgCIABgBQAIgFAEgKQgGAsADAwgAAAhBQgCgKACgHQAFAEADAAQgFAIAHAHIADABIgEAPQgDgKgGgIg");
	this.shape_153.setTransform(247.2558,370.3);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#8F766A").s().p("AgqAQIgBgTIAUACQAYABAZAAIARgCIAAAQQgGAagLgXIAAgRIAAARQgZADgXgCIgBgTIABATQgFAOgFAAQgFAAgFgQgAhjAAIABgPIATAFIgCARQgFAKgFAAQgFAAgDgRgAAaARgABSAFIgDgNQAJgEAIgFIADARIgDgRQAIgGAGgIIAAAFQADAOgDAJIgKADIgBAAIAAAFQgBAMgEAAQgFAAgHgMgAhRAHIACgRQASAFASACIABATQgUgDgTgGgAArgCIAZgDIALgDIADANQgTAGgSADIAAAAIgCAAgABSAFgAhjAAIgEgBIgDgBQgHgGAEgJIAEgBIAHADIgBAPIAAAAgAgrgDIAAAAg");
	this.shape_154.setTransform(259.0245,364.1634);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#BC1D0A").s().p("AjnBwQAegYAggWQCvh9DKhhQAOAMAKAGQjABViOBkQgLAAgLAIIgEAPQgrAnAAAxQglgQgXgeg");
	this.shape_155.setTransform(263.125,314.1);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#B19582").s().p("AgaH3IhYgFIgzgEIABgZIAGAAIAPAAICRAOIiRgOQgDgxAGgtIACgGIABgEQAEgPgDgNIADgPIAFACQAFAfANgYQATAGATADQAKAeAKgcQAYACAagDQAKAXAGgaIACAAIAAAAQASgDATgGQAOAXADgXIABgFIAKgEIA3BuIAGgDIAJAUIgPAHIhRAnIgXALIgMgYIAHgDIgSgmIgHAsIAFAAIAAAWgAAbHdIBtgvgAg0FCIgUgCQgSgCgSgFIgTgFIgHgDQgVhQAtgxQAsggAHhDIgSgKQgFgIgHgFQgKgHgMgBQAMABAKAHQAHAFAFAIQAXAlhYBKQgwgQgZg1QA+hCAqADQgBgTAkgTQAKAAAMACIAAABQAcAFAjAVQAhBrAABnQAAAjgEAkIgYADIgQACIgWAAIgcgBgAg+DBQAdAZAdgZIgCggIAGgBIAAgWIhDgEIAAAXIAFACIAAAigAgPBcQASgXAGggQgGAggSAXQgXgGgVgJQAVAJAXAGgAAqD3QAAhnghhrQAYAUADAQQAHABAEgFQASAmAIAnQAEAQADARIACAUQAFAugGAvQgGAIgIAGQgIAFgJAEIgMADQAEgkAAgjgAg+DBIAAgiIAiAKIAWgIIACAgQgOANgPAAQgOAAgPgNgAiqDFQgmgPgYgsIgGgMIAUgWIADAFQAZA1AwAQIgJALIgJALIgKgDgAiOCyIAAAAgAgcCpIgigKIgFgCIAAgXIBDAEIAAAWIgGABIgWAIgAgGChgAg+CfgAi9jTQCQhnC8hSQBDARAdAkIgTAKQjLBhivB+QgWgmgJg/gAh0ntQCVgnBSBdQi8BDiOByQgqiRCNhag");
	this.shape_156.setTransform(261.95,331.7739);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AiiGpIAUhGIBVAXIgSBAgABLG0IAAhEIBYAAIAABIgABAlpQgKgPAAgWQAAgSALgVIAAgBIABAAQAagLAUAYQAFAMgBAPQAAAWgJAPQgIAPgOAAQgNAAgIgPgABSmXQgFAIAAALQAAALAFAIQAEAIAHAAQAGAAAEgIQAFgIAAgLQAAgLgFgIQgEgIgGAAQgHAAgEAIg");
	this.shape_157.setTransform(262.35,358.9771);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#F8C7A2").s().p("AhtGuQAXg7ABg9IBXAIQgCBKgYA9gABsG7IgDh3IgQgWIBZgfQAMARADAUIADCHgAjCDTQgPgKgDgOQADAOAPAKQgrgGAJhDQAKgXATgKIADgBIABgBIABAAIACAAIABgBIABAAIACgBIABAAIADgBIAAAAQAJgCAMAAIABAAIAAAAIADAAIAEAAIAEAAIANAHIAEADQAKAGAGAHQAIAJADAKQAEANgFAPIgHAMIAAgEQAAgQgKgPQAKAPAAAQIAAAEIgJAOIgBABIAAAAIgBAAQgEgBgEgDQgKgGgFgOQAFAOAKAGQAEADAEABIABAAIAAAAIgDABIgGADQgPAGgNADQgMgDgHgTQAHATAMADQgOADgLAAIgHAAgAjtB/QgnheA7hLQAaAoAoARQgaAqAWApIgEAAIgDAAIAAAAIgBAAQgMAAgJACIAAAAIgDABIgBAAIgCABIgBAAIgBABIgCAAIgBAAIgBABIgGACQgUAKgKAXIgFgMgAibBiIAAAAgAAqiyQgfAAgpgeIAAgTQhFgGAMhGIAEgQQALgHALgBQAdgCAXAtIAIASIAvhsIgFAxQAwgpAQg5QAEAbgHAUQgKAGgLANIARgGIAAABQgLAVAAASQAAAWAKAOQAJAQANAAQANAAAJgQQAJgOAAgWQAAgQgFgLQgEgRgHgHQAlgZAKg1QAJAjgXAgQARABALgJQgHALgBATIAIgKQgIAOAAATQAAATAIANQAJAOALAAQAMAAAIgOQAJgNAAgTIgBgKQAVApgUA5QhRBLhlAAIgUgBgACIjUQASAAAYgHIACAAIAAAAIAFgCIgFACIAAAAIgCAAQgYAHgSAAIAAAAIAAAAQgeAAgOgSIAAgBIAAAAIAAAAIAAABQAOASAeAAIAAAAIAAAAgAgZjjIgFAAIAFAAgAgckSIABANIgBgNIgBgBIAAgCQgHgZgaAAIAAAAIAAAAIgFAAIAFAAIAAAAIAAAAQAaAAAHAZIAAACIABABIAAAAgADDkGIABgBQARgegWAAIAAAAIgBAAIgLACIgBAAIAAAAIgCAAIACAAIAAAAIABAAIALgCIABAAIAAAAQAWAAgRAeIgBABgAgukGIAAgCQAHgPAFgBIAAAAIABAAQACABACAEIABABIAAAAIAAAAIgBgBQgCgEgCgBIgBAAIAAAAQgFABgHAPIAAACg");
	this.shape_158.setTransform(259.0342,351.525);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#DA562F").s().p("AjgCLQAAgxArgnQgMBGBFAGIAAAUIAAALQg8gDgogQgAhnBGQgXgtgdADQCPhkC/hVQAVAOAZgEQgaAwgwgPQAKAcgQAVQgGAHgHAGQgWgDgJARQgLAJgRgBQAXgggJgiQgKA0glAZQgMgPgUANQAHgTgEgcQgPA5gwApIAFgxIgwBrg");
	this.shape_159.setTransform(268.425,316);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_34,p:{x:288.325,y:318.053}},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29,p:{x:250.925,y:312.5547}},{t:this.shape_28,p:{x:271.375,y:300.55}},{t:this.shape_27,p:{x:253.9494,y:306.625}},{t:this.shape_26},{t:this.shape_25,p:{x:276.225,y:315.45}},{t:this.shape_24,p:{x:254.175,y:350.65}},{t:this.shape_23,p:{x:272.525,y:349.375}},{t:this.shape_22,p:{x:272.675,y:334.4}},{t:this.shape_21},{t:this.shape_20,p:{x:260.3558,y:371.675}},{t:this.shape_19},{t:this.shape_18,p:{x:288.175,y:359.15}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14,p:{x:278.525,y:316.425}},{t:this.shape_13,p:{x:267.1541,y:325.0685}},{t:this.shape_12,p:{x:267.35,y:324.6155}},{t:this.shape_11,p:{x:271.7494,y:306.0489}},{t:this.shape_10,p:{x:267.55,y:303.5297}},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4,p:{x:288.175,y:358.325}},{t:this.shape_3,p:{x:290.925,y:363.975}},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2,p:{regX:5.1,regY:5.2,scaleX:1.3332,scaleY:1.3332,rotation:-7.2985,x:295.05,y:365.9}},{t:this.instance_1,p:{regX:6.5,regY:6.3,scaleX:1.3305,scaleY:1.3305,rotation:-29.9991,x:291.9,y:409.7}},{t:this.instance,p:{regX:6.6,regY:6.3,scaleX:1.2637,scaleY:1.2637,rotation:24.1873,x:250.6,y:404.45}}]},278).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_34,p:{x:288.975,y:318.003}},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_27,p:{x:254.6494,y:306.575}},{t:this.shape_29,p:{x:251.625,y:312.5047}},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_20,p:{x:261.0558,y:371.625}},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51,p:{x:268.65,y:383.775}},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_13,p:{x:267.8541,y:325.0185}},{t:this.shape_44},{t:this.shape_43,p:{x:270,y:333.05}},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_4,p:{x:288.825,y:358.275}},{t:this.shape_3,p:{x:291.575,y:363.925}},{t:this.shape_37,p:{x:288.8,y:404.925}},{t:this.shape_36},{t:this.shape_35,p:{x:276.125,y:400.2}},{t:this.instance_2,p:{regX:5.3,regY:5.5,scaleX:1.3331,scaleY:1.3331,rotation:-7.2956,x:296,y:365.9}},{t:this.instance_1,p:{regX:6.6,regY:6.5,scaleX:1.3303,scaleY:1.3303,rotation:-29.9996,x:290.85,y:409.55}},{t:this.instance,p:{regX:6.8,regY:6.6,scaleX:1.2635,scaleY:1.2635,rotation:-20.812,x:265.85,y:409.1}}]},3).to({state:[{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_34,p:{x:278.825,y:318.503}},{t:this.shape_91,p:{x:280.55,y:319.175}},{t:this.shape_90},{t:this.shape_89},{t:this.shape_25,p:{x:266.725,y:315.9}},{t:this.shape_27,p:{x:244.4494,y:307.075}},{t:this.shape_29,p:{x:241.425,y:313.0047}},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81,p:{x:258.5,y:383.925}},{t:this.shape_80},{t:this.shape_79},{t:this.shape_10,p:{x:258.05,y:303.9797}},{t:this.shape_78},{t:this.shape_77},{t:this.shape_11,p:{x:262.2494,y:306.4989}},{t:this.shape_13,p:{x:257.6541,y:325.5185}},{t:this.shape_12,p:{x:257.85,y:325.0655}},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.instance_1,p:{regX:6.7,regY:6.3,scaleX:1.2637,scaleY:1.2637,rotation:-20.8129,x:255.45,y:409.55}},{t:this.instance_3,p:{regY:6.5,scaleX:1,scaleY:1,rotation:0,x:272.9,y:364.25,regX:5.8}},{t:this.instance,p:{regX:6.5,regY:6.2,scaleX:1.31,scaleY:1.31,rotation:0,x:276.25,y:399.9}}]},4).to({state:[{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_81,p:{x:262.9,y:383.675}},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115,p:{x:251.673,y:359.275}},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111,p:{x:255.9,y:334.5}},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105,p:{x:261.675,y:390.45}},{t:this.shape_104,p:{x:259.3,y:400.5}},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98,p:{x:255.9,y:334.5}},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.instance_1,p:{regX:6.7,regY:6.5,scaleX:1.2635,scaleY:1.2635,rotation:-20.8123,x:259.9,y:409.6}},{t:this.instance_4,p:{regX:29.9,regY:26.6,scaleX:0.9999,scaleY:0.9999,rotation:-16.6106,x:250.8}},{t:this.instance_3,p:{regY:6.7,scaleX:0.9999,scaleY:0.9999,rotation:-22.7211,x:274.55,y:359.7,regX:5.8}},{t:this.instance,p:{regX:6.4,regY:6.5,scaleX:1.2577,scaleY:1.2577,rotation:-44.9995,x:309.25,y:383.75}}]},2).to({state:[{t:this.shape_141},{t:this.shape_140},{t:this.shape_111,p:{x:261.7,y:333.8}},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_115,p:{x:257.473,y:358.55}},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_81,p:{x:268.7,y:382.925}},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_98,p:{x:261.7,y:333.8}},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_105,p:{x:267.475,y:389.7}},{t:this.shape_104,p:{x:265.1,y:399.75}},{t:this.shape_122},{t:this.instance_1,p:{regX:7.3,regY:7.8,scaleX:1.2627,scaleY:1.2627,rotation:-20.8082,x:266.35,y:409.6}},{t:this.instance_4,p:{regX:30.8,regY:28.2,scaleX:0.9994,scaleY:0.9994,rotation:-16.5953,x:257.25}},{t:this.instance_3,p:{regY:8.4,scaleX:0.9994,scaleY:0.9994,rotation:-22.7089,x:281,y:359.75,regX:6.5}},{t:this.instance,p:{regX:4.7,regY:6.7,scaleX:1.2567,scaleY:1.2567,rotation:-122.4726,x:324.5,y:353.75}}]},2).to({state:[{t:this.shape_159},{t:this.shape_28,p:{x:258.275,y:299.2}},{t:this.shape_34,p:{x:275.225,y:316.703}},{t:this.shape_91,p:{x:276.95,y:317.375}},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_27,p:{x:240.8494,y:305.275}},{t:this.shape_29,p:{x:237.825,y:311.2047}},{t:this.shape_22,p:{x:259.575,y:333.05}},{t:this.shape_23,p:{x:259.425,y:348.025}},{t:this.shape_24,p:{x:241.075,y:349.3}},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_18,p:{x:275.075,y:357.8}},{t:this.shape_51,p:{x:254.85,y:382.425}},{t:this.shape_151},{t:this.shape_14,p:{x:265.425,y:315.075}},{t:this.shape_10,p:{x:254.45,y:302.1797}},{t:this.shape_150},{t:this.shape_149},{t:this.shape_11,p:{x:258.6494,y:304.6989}},{t:this.shape_13,p:{x:254.0541,y:323.7185}},{t:this.shape_148},{t:this.shape_43,p:{x:256.2,y:331.75}},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_4,p:{x:275.075,y:356.975}},{t:this.shape_3,p:{x:277.825,y:362.625}},{t:this.shape_37,p:{x:275.05,y:403.575}},{t:this.shape_142},{t:this.shape_35,p:{x:262.35,y:398.85}},{t:this.instance_2,p:{regX:5.5,regY:5.8,scaleX:1.3328,scaleY:1.3328,rotation:-7.2923,x:282.55,y:364.6}},{t:this.instance_1,p:{regX:6.7,regY:6.9,scaleX:1.3301,scaleY:1.3301,rotation:-30.0006,x:277.5,y:408.3}},{t:this.instance,p:{regX:7,regY:7,scaleX:1.2632,scaleY:1.2632,rotation:-20.8109,x:252.5,y:407.8}}]},4).wait(54));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_boy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// boy
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(30.95,372.55,1,1,0,0,0,-233.3,37.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:-233.6,regY:41,x:15.85,y:376.45},0).wait(1).to({x:17.9},0).wait(1).to({x:19.95},0).wait(1).to({x:22.05},0).wait(1).to({x:24.1},0).wait(1).to({x:26.15},0).wait(1).to({x:28.25},0).wait(1).to({x:30.3},0).wait(1).to({x:32.35},0).wait(1).to({x:34.45},0).wait(1).to({x:36.5},0).wait(1).to({x:38.55},0).wait(1).to({x:40.65},0).wait(1).to({x:42.7},0).wait(1).to({x:44.75},0).wait(1).to({x:46.85},0).wait(1).to({x:48.9},0).wait(1).to({x:50.95},0).wait(1).to({x:53.05},0).wait(1).to({x:55.1},0).wait(1).to({x:57.15},0).wait(1).to({x:59.25},0).wait(1).to({x:61.3},0).wait(1).to({x:63.35},0).wait(1).to({x:65.45},0).wait(1).to({x:67.5},0).wait(1).to({x:69.55},0).wait(1).to({x:71.6},0).wait(1).to({x:73.7},0).wait(1).to({x:75.75},0).wait(1).to({x:77.8},0).wait(1).to({x:79.9},0).wait(1).to({x:81.95},0).wait(1).to({x:84},0).wait(1).to({x:86.1},0).wait(1).to({x:88.15},0).wait(1).to({x:90.2},0).wait(1).to({x:91},0).wait(1).to({x:91.8},0).wait(1).to({x:92.55},0).wait(1).to({x:93.35},0).wait(1).to({x:94.1},0).wait(1).to({x:94.9},0).wait(1).to({x:95.65},0).wait(1).to({x:96.45},0).wait(1).to({x:97.25},0).wait(1).to({x:98},0).wait(1).to({x:98.8},0).wait(1).to({x:99.55},0).wait(1).to({x:100.35},0).wait(1).to({x:101.1},0).wait(1).to({x:101.9},0).wait(1).to({x:102.7},0).wait(1).to({x:103.45},0).wait(1).to({x:104.25},0).wait(1).to({x:105},0).wait(1).to({x:105.8},0).wait(1).to({x:106.55},0).wait(1).to({x:107.35},0).wait(1).to({x:108.15},0).wait(1).to({x:108.9},0).wait(1).to({x:109.7},0).wait(1).to({x:110.45},0).wait(1).to({x:111.25},0).wait(1).to({x:112},0).wait(1).to({x:112.8},0).wait(1).to({x:113.6},0).wait(1).to({x:114.35},0).wait(1).to({x:115.15},0).wait(1).to({x:115.9},0).wait(1).to({x:113.2},0).wait(1).to({x:110.55},0).wait(1).to({x:107.85},0).wait(1).to({x:105.15},0).wait(1).to({x:102.45},0).wait(1).to({x:99.75},0).wait(1).to({x:97.05},0).wait(1).to({x:94.35},0).wait(1).to({x:91.65},0).wait(1).to({x:88.95},0).wait(1).to({x:86.25},0).wait(1).to({x:83.55},0).wait(1).to({x:80.85},0).wait(1).to({x:78.15},0).wait(1).to({x:75.45},0).wait(1).to({x:72.75},0).wait(1).to({x:70.1},0).to({_off:true},1).wait(259).to({_off:false,regX:-231.8,regY:37.9,scaleX:1.2713,scaleY:1.2713,x:271.3,y:345.35},0).wait(1).to({regX:-233.6,regY:41,x:269.25,y:349.2},0).wait(1).to({x:269.45},0).wait(1).to({x:269.7},0).wait(1).to({x:269.9},0).wait(1).to({x:270.1},0).wait(1).to({x:270.3},0).wait(1).to({x:270.55},0).wait(1).to({x:270.75},0).wait(1).to({x:270.95},0).wait(1).to({x:271.2},0).wait(1).to({x:271.4},0).wait(1).to({x:271.6},0).wait(1).to({x:271.85},0).wait(1).to({x:272.05},0).wait(1).to({x:272.25},0).wait(1).to({x:272.5},0).wait(1).to({x:272.7},0).wait(1).to({x:272.9},0).wait(1).to({x:273.15},0).wait(1).to({x:273.35},0).wait(1).to({x:273.55},0).wait(1).to({x:273.8},0).wait(1).to({x:274},0).wait(1).to({x:274.2},0).wait(1).to({x:274.45},0).wait(1).to({x:274.65},0).wait(1).to({x:274.85},0).wait(1).to({x:275.1},0).wait(1).to({x:275.3},0).wait(1).to({x:275.5},0).wait(1).to({x:275.75},0).wait(1).to({x:275.95},0).wait(1).to({x:276.15},0).wait(1).to({x:276.4},0).wait(1).to({x:276.6},0).wait(1).to({x:276.8},0).wait(1).to({x:277},0).wait(1).to({x:277.25},0).wait(1).to({x:277.45},0).wait(1).to({x:277.65},0).wait(1).to({x:277.9},0).wait(1).to({x:278.1},0).wait(1).to({x:278.3},0).wait(1).to({x:278.55},0).wait(1).to({x:278.75},0).wait(1).to({x:278.95},0).wait(1).to({x:279.2},0).wait(1).to({x:279.4},0).wait(1).to({x:279.6},0).wait(1).to({x:279.85},0).wait(1).to({x:280.05},0).wait(1).to({x:280.25},0).wait(1).to({x:280.5},0).wait(1).to({x:280.7},0).wait(1).to({x:280.9},0).wait(1).to({x:281.15},0).wait(1).to({x:281.35},0).wait(1).to({x:281.55},0).wait(1).to({x:281.8},0).wait(1).to({x:282},0).wait(1).to({x:282.2},0).wait(1).to({x:282.45},0).wait(1).to({x:282.65},0).wait(1).to({x:282.85},0).wait(1).to({x:283.1},0).wait(1).to({x:283.3},0).wait(1).to({x:283.5},0).wait(1).to({x:283.7},0).wait(1).to({x:283.95},0).wait(1).to({x:284.15},0).wait(1).to({x:284.35},0).wait(1).to({x:284.6},0).wait(1).to({x:284.8},0).wait(1).to({x:285},0).wait(1).to({x:285.25},0).wait(1).to({x:285.45},0).wait(1).to({x:285.65},0).wait(1).to({x:285.9},0).wait(1).to({x:286.1},0).wait(1).to({x:286.3},0).wait(1).to({x:286.55},0).wait(1).to({x:286.75},0).wait(1).to({x:286.95},0).wait(1).to({x:287.2},0).wait(1).to({x:287.4},0).wait(1).to({x:287.6},0).wait(1).to({x:287.85},0).wait(1).to({x:288.05},0).wait(1).to({x:288.25},0).wait(1).to({x:288.5},0).wait(1).to({x:288.7},0).wait(1).to({x:288.9},0).wait(1).to({x:289.15},0).wait(1).to({x:289.35},0).wait(1).to({x:289.55},0).wait(1).to({x:289.8},0).wait(1).to({x:290},0).wait(1).to({x:290.2},0).wait(1).to({x:290.4},0).wait(1).to({x:290.65},0).wait(1).to({x:290.85},0).wait(1).to({x:291.05},0).wait(1).to({x:291.3},0).wait(1).to({x:291.5},0).wait(1).to({x:291.7},0).wait(1).to({x:291.95},0).wait(1).to({x:292.15},0).wait(1).to({x:292.35},0).wait(1).to({x:292.6},0).wait(1).to({x:292.8},0).wait(1).to({x:293},0).wait(1).to({x:293.25},0).wait(1).to({x:293.45},0).wait(1).to({x:293.65},0).wait(1).to({x:293.9},0).wait(1).to({x:294.1},0).wait(1).to({x:294.3},0).wait(1).to({x:294.55},0).wait(1).to({x:294.75},0).wait(1).to({x:294.95},0).wait(1).to({x:295.2},0).wait(1).to({x:295.4},0).wait(1).to({x:295.6},0).wait(1).to({x:295.85},0).wait(1).to({x:296.05},0).wait(1).to({x:296.25},0).wait(1).to({x:296.45},0).wait(1).to({x:296.7},0).wait(1).to({x:296.9},0).wait(1).to({x:297.1},0).wait(1).to({x:297.35},0).wait(1).to({x:297.55},0).wait(1).to({x:297.75},0).wait(1).to({x:298},0).wait(1).to({x:298.2},0).wait(1).to({x:298.4},0).wait(1).to({x:298.65},0).wait(1).to({x:298.85},0).wait(1).to({x:299.05},0).wait(1).to({x:299.3},0).wait(1).to({x:299.5},0).wait(1).to({x:299.7},0).wait(1).to({x:299.95},0).wait(1).to({x:300.15},0).wait(1).to({x:300.35},0).wait(1).to({x:300.6},0).wait(1).to({x:300.8},0).wait(1).to({x:301},0).wait(1).to({x:301.25},0).wait(1).to({x:301.45},0).wait(1).to({x:301.65},0).wait(1).to({x:301.9},0).wait(1).to({x:302.1},0).wait(1).to({x:302.3},0).wait(1).to({x:302.55},0).wait(1).to({x:302.75},0).wait(1).to({x:302.95},0).wait(1).to({x:303.15},0).wait(1).to({x:303.4},0).wait(1).to({x:303.6},0).wait(1).to({x:303.8},0).wait(1).to({x:304.05},0).wait(1).to({x:304.25},0).wait(1).to({x:304.45},0).wait(1).to({x:304.7},0).wait(1).to({x:304.9},0).wait(1).to({x:305.1},0).wait(1).to({x:305.35},0).wait(1).to({x:305.55},0).wait(1).to({x:305.75},0).wait(1).to({x:306},0).wait(1).to({x:306.2},0).wait(1).to({x:306.4},0).wait(1).to({x:306.65},0).wait(1).to({x:306.85},0).wait(1).to({x:307.05},0).wait(1).to({x:307.3},0).wait(1).to({x:307.5},0).wait(1).to({x:307.7},0).wait(1).to({x:307.95},0).wait(1).to({x:308.15},0).wait(1).to({x:308.35},0).wait(1).to({x:308.6},0).wait(1).to({x:308.8},0).wait(1).to({x:309},0).wait(1).to({x:309.25},0).wait(1).to({x:309.45},0).wait(1).to({x:309.65},0).wait(1).to({x:309.85},0).wait(1).to({x:310.1},0).wait(1).to({x:310.3},0).wait(1).to({x:310.5},0).wait(1).to({x:310.75},0).wait(1).to({x:310.95},0).wait(1).to({x:311.15},0).wait(1).to({x:311.4},0).wait(1).to({x:311.6},0).wait(1).to({x:311.8},0).wait(1).to({x:312.05},0).wait(1).to({x:312.25},0).wait(1).to({x:312.45},0).wait(1).to({x:312.7},0).wait(1).to({x:312.9},0).wait(1).to({x:313.1},0).wait(1).to({x:313.35},0).wait(1).to({x:313.55},0).wait(1).to({x:313.75},0).wait(1).to({x:314},0).wait(1).to({x:314.2},0).wait(1).to({x:314.4},0).wait(1).to({x:314.65},0).wait(1).to({x:314.85},0).wait(1).to({x:315.05},0).wait(1).to({x:315.3},0).wait(1).to({x:315.5},0).wait(1).to({x:315.7},0).wait(1).to({x:315.95},0).wait(1).to({x:316.15},0).wait(1).to({x:316.35},0).wait(1).to({x:316.55},0).wait(1).to({x:316.8},0).wait(1).to({x:317},0).wait(1).to({x:317.2},0).wait(1).to({x:317.45},0).wait(1).to({x:317.65},0).wait(1).to({x:317.85},0).wait(1).to({x:318.1},0).wait(1).to({x:318.3},0).wait(1).to({x:318.5},0).wait(1).to({x:318.75},0).wait(1).to({x:318.95},0).wait(1).to({x:319.15},0).wait(1).to({x:319.4},0).wait(1).to({x:319.6},0).wait(1).to({x:319.8},0).wait(1).to({x:320.05},0).wait(1).to({x:320.25},0).wait(1).to({x:320.45},0).wait(1).to({x:320.7},0).wait(1).to({x:320.9},0).wait(1).to({x:321.1},0).wait(1).to({x:321.35},0).wait(1).to({x:321.55},0).wait(1).to({x:321.75},0).wait(1).to({x:322},0).wait(1).to({x:322.2},0).wait(1).to({x:322.4},0).wait(1).to({x:322.65},0).wait(1).to({x:322.85},0).wait(1).to({x:323.05},0).wait(1).to({x:323.25},0).wait(1).to({x:323.5},0).wait(1).to({x:323.7},0).wait(1).to({x:323.9},0).wait(1).to({x:324.15},0).wait(1).to({x:324.35},0).wait(1).to({x:324.55},0).wait(1).to({x:324.8},0).wait(1).to({x:325},0).wait(1).to({x:325.2},0).wait(1).to({x:325.45},0).wait(1).to({x:325.65},0).wait(1).to({x:325.85},0).wait(1).to({x:326.1},0).wait(1).to({x:326.3},0).wait(1).to({x:326.5},0).wait(1).to({x:326.75},0).wait(1).to({x:326.95},0).wait(1).to({x:327.15},0).wait(1).to({x:327.4},0).wait(1).to({x:327.6},0).wait(1).to({x:327.8},0).wait(1).to({x:328.05},0).wait(1).to({x:328.25},0).wait(1).to({x:328.45},0).wait(1).to({x:328.7},0).wait(1).to({x:328.9},0).wait(1).to({x:329.1},0).wait(1).to({x:329.3},0).wait(1).to({x:329.55},0).wait(1).to({x:329.75},0).wait(1).to({x:329.95},0).wait(1).to({x:330.2},0).wait(1).to({x:330.4},0).wait(1).to({x:330.6},0).wait(1).to({x:330.85},0).wait(1).to({x:331.05},0).wait(1).to({x:331.25},0).wait(1).to({x:331.5},0).wait(1).to({x:331.7},0).wait(1).to({x:331.9},0).wait(1).to({x:332.15},0).wait(1).to({x:332.35},0).wait(1).to({x:332.55},0).wait(1).to({x:332.8},0).wait(1).to({x:333},0).wait(1).to({x:333.2},0).wait(1).to({x:333.45},0).wait(1).to({x:333.65},0).wait(1).to({x:333.85},0).wait(1).to({x:334.1},0).wait(1).to({x:334.3},0).wait(1).to({x:334.5},0).wait(1).to({x:334.75},0).wait(1).to({x:334.95},0).wait(1).to({x:335.15},0).wait(1).to({x:335.4},0).wait(1).to({x:335.6},0).wait(1).to({x:335.8},0).wait(1).to({x:336},0).wait(1).to({x:336.25},0).wait(1).to({x:336.45},0).wait(1).to({x:336.65},0).wait(1).to({x:336.9},0).wait(1).to({x:337.1},0).wait(1).to({x:337.3},0).wait(1).to({x:337.55},0).wait(1).to({x:337.75},0).wait(1).to({x:337.95},0).wait(1).to({x:338.2},0).wait(1).to({x:338.4},0).wait(1).to({x:338.6},0).wait(1).to({x:338.85},0).wait(1).to({x:339.05},0).wait(1).to({x:339.25},0).wait(1).to({x:339.5},0).wait(1).to({x:339.7},0).wait(1).to({x:339.9},0).wait(1).to({x:340.15},0).wait(1).to({x:340.35},0).wait(1).to({x:340.55},0).wait(1).to({x:340.8},0).wait(1).to({x:341},0).wait(1).to({x:341.2},0).wait(1).to({x:341.45},0).wait(1).to({x:341.65},0).wait(1).to({x:341.85},0).wait(1).to({x:342.1},0).wait(1).to({x:342.3},0).wait(1).to({x:342.5},0).wait(1).to({x:342.7},0).wait(1).to({x:342.95},0).wait(1).to({x:343.15},0).wait(1).to({x:343.35},0).wait(1).to({x:343.6},0).wait(1).to({x:343.8},0).wait(1).to({x:344},0).wait(1).to({x:344.25},0).wait(1).to({x:344.45},0).wait(1).to({x:344.65},0).wait(1).to({x:344.9},0).wait(1).to({x:345.1},0).wait(1).to({x:345.3},0).wait(1).to({x:345.55},0).wait(1).to({x:345.75},0).wait(1).to({x:345.95},0).wait(1).to({x:346.2},0).wait(1).to({x:346.4},0).wait(1).to({x:346.6},0).wait(1).to({x:346.85},0).wait(1).to({x:347.05},0).wait(1).to({x:347.25},0).wait(1).to({x:347.5},0).wait(1).to({x:347.7},0).wait(1).to({x:347.9},0).wait(1).to({x:348.15},0).wait(1).to({x:348.35},0).wait(1).to({x:348.55},0).wait(1).to({x:348.8},0).wait(1).to({x:349},0).wait(1).to({x:349.2},0).wait(1).to({x:349.4},0).wait(1).to({x:349.65},0).wait(1).to({x:349.85},0).wait(1).to({x:350.05},0).wait(1).to({x:350.3},0).wait(1).to({x:350.5},0).wait(1).to({x:350.7},0).wait(1).to({x:350.95},0).wait(1).to({x:351.15},0).wait(1).to({x:351.35},0).wait(1).to({x:351.6},0).wait(1).to({x:351.8},0).wait(1).to({x:352},0).wait(1).to({x:352.25},0).wait(1).to({x:352.45},0).wait(1).to({x:352.65},0).wait(1).to({x:352.9},0).wait(1).to({x:353.1},0).wait(1).to({x:353.3},0).wait(1).to({x:353.55},0).wait(1).to({x:353.75},0).wait(1).to({x:353.95},0).wait(1).to({x:354.2},0).wait(1).to({x:354.4},0).wait(1).to({x:354.6},0).wait(1).to({x:354.85},0).wait(1).to({x:355.05},0).wait(1).to({x:355.25},0).wait(1).to({x:355.45},0).wait(1).to({x:355.7},0).wait(1).to({x:355.9},0).wait(1).to({x:356.1},0).wait(1).to({x:356.35},0).wait(1).to({x:356.55},0).wait(1).to({x:356.75},0).wait(1).to({x:357},0).wait(1).to({x:357.2},0).wait(1).to({x:357.4},0).wait(1).to({x:357.65},0).wait(1).to({x:357.85},0).wait(1).to({x:358.05},0).wait(1).to({x:358.3},0).wait(1).to({x:358.5},0).wait(1).to({x:358.7},0).wait(1).to({x:358.95},0).wait(1).to({x:359.15},0).wait(1).to({x:359.35},0).wait(1).to({x:359.6},0).wait(1).to({x:359.8},0).wait(1).to({regX:-231.6,regY:37.9,x:362.2,y:345.35},0).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_background = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// background
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(491.3,275.9,1,1,0,0,0,860.6,406);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:867.9,regY:401.2,x:497.3,y:271.1},0).wait(1).to({x:495.95},0).wait(1).to({x:494.6},0).wait(1).to({x:493.25},0).wait(1).to({x:491.9},0).wait(1).to({x:490.55},0).wait(1).to({x:489.2},0).wait(1).to({x:487.85},0).wait(1).to({x:486.5},0).wait(1).to({x:485.15},0).wait(1).to({x:483.8},0).wait(1).to({x:482.45},0).wait(1).to({x:481.1},0).wait(1).to({x:479.75},0).wait(1).to({x:478.4},0).wait(1).to({x:477.05},0).wait(1).to({x:475.7},0).wait(1).to({x:474.4},0).wait(1).to({x:473.05},0).wait(1).to({x:471.7},0).wait(1).to({x:470.35},0).wait(1).to({x:469},0).wait(1).to({x:467.65},0).wait(1).to({x:466.3},0).wait(1).to({x:464.95},0).wait(1).to({x:463.6},0).wait(1).to({x:462.25},0).wait(1).to({x:460.9},0).wait(1).to({x:459.55},0).wait(1).to({x:458.2},0).wait(1).to({x:456.85},0).wait(1).to({x:455.5},0).wait(1).to({x:454.15},0).wait(1).to({x:452.8},0).wait(1).to({x:451.5},0).wait(1).to({x:450.15},0).wait(1).to({x:448.8},0).wait(1).to({x:447.45},0).wait(1).to({x:446.1},0).wait(1).to({x:444.75},0).wait(1).to({x:443.4},0).wait(1).to({x:442.05},0).wait(1).to({x:440.7},0).wait(1).to({x:439.35},0).wait(1).to({x:438},0).wait(1).to({x:436.65},0).wait(1).to({x:435.3},0).wait(1).to({x:433.95},0).wait(1).to({x:432.6},0).wait(1).to({x:431.25},0).wait(1).to({x:429.9},0).wait(1).to({x:428.55},0).wait(1).to({x:427.25},0).wait(1).to({x:425.9},0).wait(1).to({x:424.55},0).wait(1).to({x:423.2},0).wait(1).to({x:421.85},0).wait(1).to({x:420.5},0).wait(1).to({x:419.15},0).wait(1).to({x:417.8},0).wait(1).to({x:416.45},0).wait(1).to({x:415.1},0).wait(1).to({x:413.75},0).wait(1).to({x:412.4},0).wait(1).to({x:411.05},0).wait(1).to({x:409.7},0).wait(1).to({x:408.35},0).wait(1).to({x:407},0).wait(1).to({x:405.65},0).wait(1).to({x:404.35},0).wait(1).to({x:403},0).wait(1).to({x:401.65},0).wait(1).to({x:400.3},0).wait(1).to({x:398.95},0).wait(1).to({x:397.6},0).wait(1).to({x:396.25},0).wait(1).to({x:394.9},0).wait(1).to({x:393.55},0).wait(1).to({x:392.2},0).wait(1).to({x:390.85},0).wait(1).to({x:389.5},0).wait(1).to({x:388.15},0).wait(1).to({x:386.8},0).wait(1).to({x:385.45},0).wait(1).to({x:384.1},0).wait(1).to({x:382.75},0).wait(1).to({x:381.4},0).wait(1).to({regX:860.6,regY:406,x:374.1,y:275.9},0).wait(260).to({regX:867.9,regY:401.2,x:380.6,y:271.1},0).wait(1).to({x:379.75},0).wait(1).to({x:378.9},0).wait(1).to({x:378.05},0).wait(1).to({x:377.2},0).wait(1).to({x:376.35},0).wait(1).to({x:375.5},0).wait(1).to({x:374.65},0).wait(1).to({x:373.8},0).wait(1).to({x:372.95},0).wait(1).to({x:372.1},0).wait(1).to({x:371.25},0).wait(1).to({x:370.4},0).wait(1).to({x:369.55},0).wait(1).to({x:368.7},0).wait(1).to({x:367.85},0).wait(1).to({x:367},0).wait(1).to({x:366.15},0).wait(1).to({x:365.3},0).wait(1).to({x:364.5},0).wait(1).to({x:363.65},0).wait(1).to({x:362.8},0).wait(1).to({x:361.95},0).wait(1).to({x:361.1},0).wait(1).to({x:360.25},0).wait(1).to({x:359.4},0).wait(1).to({x:358.55},0).wait(1).to({x:357.7},0).wait(1).to({x:356.85},0).wait(1).to({x:356},0).wait(1).to({x:355.15},0).wait(1).to({x:354.3},0).wait(1).to({x:353.45},0).wait(1).to({x:352.6},0).wait(1).to({x:351.75},0).wait(1).to({x:350.9},0).wait(1).to({x:350.05},0).wait(1).to({x:349.2},0).wait(1).to({x:348.4},0).wait(1).to({x:347.55},0).wait(1).to({x:346.7},0).wait(1).to({x:345.85},0).wait(1).to({x:345},0).wait(1).to({x:344.15},0).wait(1).to({x:343.3},0).wait(1).to({x:342.45},0).wait(1).to({x:341.6},0).wait(1).to({x:340.75},0).wait(1).to({x:339.9},0).wait(1).to({x:339.05},0).wait(1).to({x:338.2},0).wait(1).to({x:337.35},0).wait(1).to({x:336.5},0).wait(1).to({x:335.65},0).wait(1).to({x:334.8},0).wait(1).to({x:333.95},0).wait(1).to({x:333.1},0).wait(1).to({x:332.3},0).wait(1).to({x:331.45},0).wait(1).to({x:330.6},0).wait(1).to({x:329.75},0).wait(1).to({x:328.9},0).wait(1).to({x:328.05},0).wait(1).to({x:327.2},0).wait(1).to({x:326.35},0).wait(1).to({x:325.5},0).wait(1).to({x:324.65},0).wait(1).to({x:323.8},0).wait(1).to({x:322.95},0).wait(1).to({x:322.1},0).wait(1).to({x:321.25},0).wait(1).to({x:320.4},0).wait(1).to({x:319.55},0).wait(1).to({x:318.7},0).wait(1).to({x:317.85},0).wait(1).to({x:317},0).wait(1).to({x:316.2},0).wait(1).to({x:315.35},0).wait(1).to({x:314.5},0).wait(1).to({x:313.65},0).wait(1).to({x:312.8},0).wait(1).to({x:311.95},0).wait(1).to({x:311.1},0).wait(1).to({x:310.25},0).wait(1).to({x:309.4},0).wait(1).to({x:308.55},0).wait(1).to({x:307.7},0).wait(1).to({x:306.85},0).wait(1).to({x:306},0).wait(1).to({x:305.15},0).wait(1).to({x:304.3},0).wait(1).to({x:303.45},0).wait(1).to({x:302.6},0).wait(1).to({x:301.75},0).wait(1).to({x:300.9},0).wait(1).to({x:300.05},0).wait(1).to({x:299.25},0).wait(1).to({x:298.4},0).wait(1).to({x:297.55},0).wait(1).to({x:296.7},0).wait(1).to({x:295.85},0).wait(1).to({x:295},0).wait(1).to({x:294.15},0).wait(1).to({x:293.3},0).wait(1).to({x:292.45},0).wait(1).to({x:291.6},0).wait(1).to({x:290.75},0).wait(1).to({x:289.9},0).wait(1).to({x:289.05},0).wait(1).to({x:288.2},0).wait(1).to({x:287.35},0).wait(1).to({x:286.5},0).wait(1).to({x:285.65},0).wait(1).to({x:284.8},0).wait(1).to({x:283.95},0).wait(1).to({x:283.15},0).wait(1).to({x:282.3},0).wait(1).to({x:281.45},0).wait(1).to({x:280.6},0).wait(1).to({x:279.75},0).wait(1).to({x:278.9},0).wait(1).to({x:278.05},0).wait(1).to({x:277.2},0).wait(1).to({x:276.35},0).wait(1).to({x:275.5},0).wait(1).to({x:274.65},0).wait(1).to({x:273.8},0).wait(1).to({x:272.95},0).wait(1).to({x:272.1},0).wait(1).to({x:271.25},0).wait(1).to({x:270.4},0).wait(1).to({x:269.55},0).wait(1).to({x:268.7},0).wait(1).to({x:267.85},0).wait(1).to({x:267.05},0).wait(1).to({x:266.2},0).wait(1).to({x:265.35},0).wait(1).to({x:264.5},0).wait(1).to({x:263.65},0).wait(1).to({x:262.8},0).wait(1).to({x:261.95},0).wait(1).to({x:261.1},0).wait(1).to({x:260.25},0).wait(1).to({x:259.4},0).wait(1).to({x:258.55},0).wait(1).to({x:257.7},0).wait(1).to({x:256.85},0).wait(1).to({x:256},0).wait(1).to({x:255.15},0).wait(1).to({x:254.3},0).wait(1).to({x:253.45},0).wait(1).to({x:252.6},0).wait(1).to({x:251.75},0).wait(1).to({x:250.95},0).wait(1).to({x:250.1},0).wait(1).to({x:249.25},0).wait(1).to({x:248.4},0).wait(1).to({x:247.55},0).wait(1).to({x:246.7},0).wait(1).to({x:245.85},0).wait(1).to({x:245},0).wait(1).to({x:244.15},0).wait(1).to({x:243.3},0).wait(1).to({x:242.45},0).wait(1).to({x:241.6},0).wait(1).to({x:240.75},0).wait(1).to({x:239.9},0).wait(1).to({x:239.05},0).wait(1).to({x:238.2},0).wait(1).to({x:237.35},0).wait(1).to({x:236.5},0).wait(1).to({x:235.65},0).wait(1).to({x:234.8},0).wait(1).to({x:234},0).wait(1).to({x:233.15},0).wait(1).to({x:232.3},0).wait(1).to({x:231.45},0).wait(1).to({x:230.6},0).wait(1).to({x:229.75},0).wait(1).to({x:228.9},0).wait(1).to({x:228.05},0).wait(1).to({x:227.2},0).wait(1).to({x:226.35},0).wait(1).to({x:225.5},0).wait(1).to({x:224.65},0).wait(1).to({x:223.8},0).wait(1).to({x:222.95},0).wait(1).to({x:222.1},0).wait(1).to({x:221.25},0).wait(1).to({x:220.4},0).wait(1).to({x:219.55},0).wait(1).to({x:218.7},0).wait(1).to({x:217.9},0).wait(1).to({x:217.05},0).wait(1).to({x:216.2},0).wait(1).to({x:215.35},0).wait(1).to({x:214.5},0).wait(1).to({x:213.65},0).wait(1).to({x:212.8},0).wait(1).to({x:211.95},0).wait(1).to({x:211.1},0).wait(1).to({x:210.25},0).wait(1).to({x:209.4},0).wait(1).to({x:208.55},0).wait(1).to({x:207.7},0).wait(1).to({x:206.85},0).wait(1).to({x:206},0).wait(1).to({x:205.15},0).wait(1).to({x:204.3},0).wait(1).to({x:203.45},0).wait(1).to({x:202.6},0).wait(1).to({x:201.8},0).wait(1).to({x:200.95},0).wait(1).to({x:200.1},0).wait(1).to({x:199.25},0).wait(1).to({x:198.4},0).wait(1).to({x:197.55},0).wait(1).to({x:196.7},0).wait(1).to({x:195.85},0).wait(1).to({x:195},0).wait(1).to({x:194.15},0).wait(1).to({x:193.3},0).wait(1).to({x:192.45},0).wait(1).to({x:191.6},0).wait(1).to({x:190.75},0).wait(1).to({x:189.9},0).wait(1).to({x:189.05},0).wait(1).to({x:188.2},0).wait(1).to({x:187.35},0).wait(1).to({x:186.5},0).wait(1).to({x:185.7},0).wait(1).to({x:184.85},0).wait(1).to({x:184},0).wait(1).to({x:183.15},0).wait(1).to({x:182.3},0).wait(1).to({x:181.45},0).wait(1).to({x:180.6},0).wait(1).to({x:179.75},0).wait(1).to({x:178.9},0).wait(1).to({x:178.05},0).wait(1).to({x:177.2},0).wait(1).to({x:176.35},0).wait(1).to({x:175.5},0).wait(1).to({x:174.65},0).wait(1).to({x:173.8},0).wait(1).to({x:172.95},0).wait(1).to({x:172.1},0).wait(1).to({x:171.25},0).wait(1).to({x:170.4},0).wait(1).to({x:169.55},0).wait(1).to({x:168.75},0).wait(1).to({x:167.9},0).wait(1).to({x:167.05},0).wait(1).to({x:166.2},0).wait(1).to({x:165.35},0).wait(1).to({x:164.5},0).wait(1).to({x:163.65},0).wait(1).to({x:162.8},0).wait(1).to({x:161.95},0).wait(1).to({x:161.1},0).wait(1).to({x:160.25},0).wait(1).to({x:159.4},0).wait(1).to({x:158.55},0).wait(1).to({x:157.7},0).wait(1).to({x:156.85},0).wait(1).to({x:156},0).wait(1).to({x:155.15},0).wait(1).to({x:154.3},0).wait(1).to({x:153.45},0).wait(1).to({x:152.65},0).wait(1).to({x:151.8},0).wait(1).to({x:150.95},0).wait(1).to({x:150.1},0).wait(1).to({x:149.25},0).wait(1).to({x:148.4},0).wait(1).to({x:147.55},0).wait(1).to({x:146.7},0).wait(1).to({x:145.85},0).wait(1).to({x:145},0).wait(1).to({x:144.15},0).wait(1).to({x:143.3},0).wait(1).to({x:142.45},0).wait(1).to({x:141.6},0).wait(1).to({x:140.75},0).wait(1).to({x:139.9},0).wait(1).to({x:139.05},0).wait(1).to({x:138.2},0).wait(1).to({x:137.35},0).wait(1).to({x:136.55},0).wait(1).to({x:135.7},0).wait(1).to({x:134.85},0).wait(1).to({x:134},0).wait(1).to({x:133.15},0).wait(1).to({x:132.3},0).wait(1).to({x:131.45},0).wait(1).to({x:130.6},0).wait(1).to({x:129.75},0).wait(1).to({x:128.9},0).wait(1).to({x:128.05},0).wait(1).to({x:127.2},0).wait(1).to({x:126.35},0).wait(1).to({x:125.5},0).wait(1).to({x:124.65},0).wait(1).to({x:123.8},0).wait(1).to({x:122.95},0).wait(1).to({x:122.1},0).wait(1).to({x:121.25},0).wait(1).to({x:120.45},0).wait(1).to({x:119.6},0).wait(1).to({x:118.75},0).wait(1).to({x:117.9},0).wait(1).to({x:117.05},0).wait(1).to({x:116.2},0).wait(1).to({x:115.35},0).wait(1).to({x:114.5},0).wait(1).to({x:113.65},0).wait(1).to({x:112.8},0).wait(1).to({x:111.95},0).wait(1).to({x:111.1},0).wait(1).to({x:110.25},0).wait(1).to({x:109.4},0).wait(1).to({x:108.55},0).wait(1).to({x:107.7},0).wait(1).to({x:106.85},0).wait(1).to({x:106},0).wait(1).to({x:105.15},0).wait(1).to({x:104.3},0).wait(1).to({x:103.5},0).wait(1).to({x:102.65},0).wait(1).to({x:101.8},0).wait(1).to({x:100.95},0).wait(1).to({x:100.1},0).wait(1).to({x:99.25},0).wait(1).to({x:98.4},0).wait(1).to({x:97.55},0).wait(1).to({x:96.7},0).wait(1).to({x:95.85},0).wait(1).to({x:95},0).wait(1).to({x:94.15},0).wait(1).to({x:93.3},0).wait(1).to({x:92.45},0).wait(1).to({x:91.6},0).wait(1).to({x:90.75},0).wait(1).to({x:89.9},0).wait(1).to({x:89.05},0).wait(1).to({x:88.2},0).wait(1).to({x:87.4},0).wait(1).to({x:86.55},0).wait(1).to({x:85.7},0).wait(1).to({x:84.85},0).wait(1).to({x:84},0).wait(1).to({x:83.15},0).wait(1).to({x:82.3},0).wait(1).to({x:81.45},0).wait(1).to({x:80.6},0).wait(1).to({x:79.75},0).wait(1).to({x:78.9},0).wait(1).to({x:78.05},0).wait(1).to({x:77.2},0).wait(1).to({x:76.35},0).wait(1).to({x:75.5},0).wait(1).to({x:74.65},0).wait(1).to({x:73.8},0).wait(1).to({x:72.95},0).wait(1).to({x:72.1},0).wait(1).to({x:71.3},0).wait(1).to({x:70.45},0).wait(1).to({x:69.6},0).wait(1).to({x:68.75},0).wait(1).to({x:67.9},0).wait(1).to({x:67.05},0).wait(1).to({x:66.2},0).wait(1).to({x:65.35},0).wait(1).to({x:64.5},0).wait(1).to({x:63.65},0).wait(1).to({x:62.8},0).wait(1).to({x:61.95},0).wait(1).to({x:61.1},0).wait(1).to({x:60.25},0).wait(1).to({x:59.4},0).wait(1).to({x:58.55},0).wait(1).to({x:57.7},0).wait(1).to({x:56.85},0).wait(1).to({x:56},0).wait(1).to({x:55.2},0).wait(1).to({x:54.35},0).wait(1).to({x:53.5},0).wait(1).to({x:52.65},0).wait(1).to({x:51.8},0).wait(1).to({x:50.95},0).wait(1).to({x:50.1},0).wait(1).to({x:49.25},0).wait(1).to({x:48.4},0).wait(1).to({x:47.55},0).wait(1).to({x:46.7},0).wait(1).to({x:45.85},0).wait(1).to({x:45},0).wait(1).to({x:44.15},0).wait(1).to({x:43.3},0).wait(1).to({x:42.45},0).wait(1).to({x:41.6},0).wait(1).to({x:40.75},0).wait(1).to({x:39.9},0).wait(1).to({x:39.05},0).wait(1).to({x:38.25},0).wait(1).to({x:37.4},0).wait(1).to({x:36.55},0).wait(1).to({x:35.7},0).wait(1).to({x:34.85},0).wait(1).to({x:34},0).wait(1).to({x:33.15},0).wait(1).to({x:32.3},0).wait(1).to({x:31.45},0).wait(1).to({x:30.6},0).wait(1).to({x:29.75},0).wait(1).to({x:28.9},0).wait(1).to({x:28.05},0).wait(1).to({x:27.2},0).wait(1).to({x:26.35},0).wait(1).to({x:25.5},0).wait(1).to({regX:860.6,regY:406,x:17.35,y:275.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.twofriends = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.Layer_4.start;
		var self = this;
		self.stop();
		
		self.start.addEventListener("click", clickPlayStart);
		
		function clickPlayStart()
		{
			self.gotoAndPlay(1);
			createjs.Sound.play("song");
		}
	}
	this.frame_1 = function() {
		playSound("song");
	}
	this.frame_767 = function() {
		this.replay = this.stop_music.replay;
		var self = this;
		self.stop();
		
		self.replay.addEventListener("click", clickRestart);
		
		function clickRestart()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_770 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(766).call(this.frame_767).wait(3).call(this.frame_770).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(320.05,240,0.9972,0.9972);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(13).to({_off:false},0).wait(1).to({scaleX:0.9928,scaleY:0.9928,x:319.9958,y:240.7909},0).wait(1).to({scaleX:0.9884,scaleY:0.9884,x:319.9415,y:241.5818},0).wait(1).to({scaleX:0.984,scaleY:0.984,x:319.8873,y:242.3727},0).wait(1).to({scaleX:0.9796,scaleY:0.9796,x:319.833,y:243.1636},0).wait(1).to({scaleX:0.9752,scaleY:0.9752,x:319.7788,y:243.9546},0).wait(1).to({scaleX:0.9709,scaleY:0.9709,x:319.7246,y:244.7455},0).wait(1).to({scaleX:0.9665,scaleY:0.9665,x:319.6703,y:245.5364},0).wait(1).to({scaleX:0.9621,scaleY:0.9621,x:319.6161,y:246.3273},0).wait(1).to({scaleX:0.9577,scaleY:0.9577,x:319.5618,y:247.1182},0).wait(1).to({scaleX:0.9533,scaleY:0.9533,x:319.5076,y:247.9091},0).wait(1).to({scaleX:0.9489,scaleY:0.9489,x:319.4533,y:248.7},0).wait(1).to({scaleX:0.9445,scaleY:0.9445,x:319.3991,y:249.4909},0).wait(1).to({scaleX:0.9402,scaleY:0.9402,x:319.3449,y:250.2818},0).wait(1).to({scaleX:0.9358,scaleY:0.9358,x:319.2906,y:251.0727},0).wait(1).to({scaleX:0.9314,scaleY:0.9314,x:319.2364,y:251.8636},0).wait(1).to({scaleX:0.927,scaleY:0.927,x:319.1821,y:252.6546},0).wait(1).to({scaleX:0.9226,scaleY:0.9226,x:319.1279,y:253.4455},0).wait(1).to({scaleX:0.9182,scaleY:0.9182,x:319.0736,y:254.2364},0).wait(1).to({scaleX:0.9139,scaleY:0.9139,x:319.0194,y:255.0273},0).wait(1).to({scaleX:0.9095,scaleY:0.9095,x:318.9652,y:255.8182},0).wait(1).to({scaleX:0.9051,scaleY:0.9051,x:318.9109,y:256.6091},0).wait(1).to({scaleX:0.9007,scaleY:0.9007,x:318.8567,y:257.4},0).wait(1).to({scaleX:0.8963,scaleY:0.8963,x:318.8024,y:258.1909},0).wait(1).to({scaleX:0.8919,scaleY:0.8919,x:318.7482,y:258.9818},0).wait(1).to({scaleX:0.8875,scaleY:0.8875,x:318.6939,y:259.7727},0).wait(1).to({scaleX:0.8832,scaleY:0.8832,x:318.6397,y:260.5636},0).wait(1).to({scaleX:0.8788,scaleY:0.8788,x:318.5855,y:261.3546},0).wait(1).to({scaleX:0.8744,scaleY:0.8744,x:318.5312,y:262.1455},0).wait(1).to({scaleX:0.87,scaleY:0.87,x:318.477,y:262.9364},0).wait(1).to({scaleX:0.8656,scaleY:0.8656,x:318.4227,y:263.7273},0).wait(1).to({scaleX:0.8612,scaleY:0.8612,x:318.3685,y:264.5182},0).wait(1).to({scaleX:0.8569,scaleY:0.8569,x:318.3142,y:265.3091},0).wait(1).to({scaleX:0.8525,scaleY:0.8525,x:318.26,y:266.1},0).wait(1).to({scaleX:0.8481,scaleY:0.8481,x:318.2058,y:266.8909},0).wait(1).to({scaleX:0.8437,scaleY:0.8437,x:318.1515,y:267.6818},0).wait(1).to({scaleX:0.8393,scaleY:0.8393,x:318.0973,y:268.4727},0).wait(1).to({scaleX:0.8349,scaleY:0.8349,x:318.043,y:269.2636},0).wait(1).to({scaleX:0.8305,scaleY:0.8305,x:317.9888,y:270.0546},0).wait(1).to({scaleX:0.8262,scaleY:0.8262,x:317.9346,y:270.8455},0).wait(1).to({scaleX:0.8218,scaleY:0.8218,x:317.8803,y:271.6364},0).wait(1).to({scaleX:0.8174,scaleY:0.8174,x:317.8261,y:272.4273},0).wait(1).to({scaleX:0.813,scaleY:0.813,x:317.7718,y:273.2182},0).wait(1).to({scaleX:0.8086,scaleY:0.8086,x:317.7176,y:274.0091},0).wait(1).to({scaleX:0.8042,scaleY:0.8042,x:317.6633,y:274.8},0).wait(1).to({scaleX:0.7999,scaleY:0.7999,x:317.6091,y:275.5909},0).wait(1).to({scaleX:0.7955,scaleY:0.7955,x:317.5549,y:276.3818},0).wait(1).to({scaleX:0.7911,scaleY:0.7911,x:317.5006,y:277.1727},0).wait(1).to({scaleX:0.7867,scaleY:0.7867,x:317.4464,y:277.9636},0).wait(1).to({scaleX:0.7823,scaleY:0.7823,x:317.3921,y:278.7546},0).wait(1).to({scaleX:0.7779,scaleY:0.7779,x:317.3379,y:279.5455},0).wait(1).to({scaleX:0.7735,scaleY:0.7735,x:317.2836,y:280.3364},0).wait(1).to({scaleX:0.7692,scaleY:0.7692,x:317.2294,y:281.1273},0).wait(1).to({scaleX:0.7648,scaleY:0.7648,x:317.1751,y:281.9182},0).wait(1).to({scaleX:0.7604,scaleY:0.7604,x:317.1209,y:282.7091},0).wait(1).to({scaleX:0.756,scaleY:0.756,x:317.0667,y:283.5},0).wait(1).to({scaleX:0.7516,scaleY:0.7516,x:317.0124,y:284.2909},0).wait(1).to({scaleX:0.7472,scaleY:0.7472,x:316.9582,y:285.0818},0).wait(1).to({scaleX:0.7429,scaleY:0.7429,x:316.9039,y:285.8727},0).wait(1).to({scaleX:0.7385,scaleY:0.7385,x:316.8497,y:286.6636},0).wait(1).to({scaleX:0.7341,scaleY:0.7341,x:316.7955,y:287.4546},0).wait(1).to({scaleX:0.7297,scaleY:0.7297,x:316.7412,y:288.2455},0).wait(1).to({scaleX:0.7253,scaleY:0.7253,x:316.687,y:289.0364},0).wait(1).to({scaleX:0.7209,scaleY:0.7209,x:316.6327,y:289.8273},0).wait(1).to({scaleX:0.7165,scaleY:0.7165,x:316.5785,y:290.6182},0).wait(1).to({scaleX:0.7122,scaleY:0.7122,x:316.5242,y:291.4091},0).wait(1).to({scaleX:0.7078,scaleY:0.7078,x:316.47,y:292.2},0).wait(1).to({scaleX:0.7034,scaleY:0.7034,x:316.4158,y:292.9909},0).wait(1).to({scaleX:0.699,scaleY:0.699,x:316.3615,y:293.7818},0).wait(1).to({scaleX:0.6946,scaleY:0.6946,x:316.3073,y:294.5727},0).wait(1).to({scaleX:0.6902,scaleY:0.6902,x:316.253,y:295.3636},0).wait(1).to({scaleX:0.6859,scaleY:0.6859,x:316.1988,y:296.1545},0).wait(1).to({scaleX:0.6815,scaleY:0.6815,x:316.1446,y:296.9455},0).wait(1).to({scaleX:0.6771,scaleY:0.6771,x:316.0903,y:297.7364},0).wait(1).to({scaleX:0.6727,scaleY:0.6727,x:316.0361,y:298.5273},0).wait(1).to({scaleX:0.6683,scaleY:0.6683,x:315.9818,y:299.3182},0).wait(1).to({scaleX:0.6639,scaleY:0.6639,x:315.9276,y:300.1091},0).wait(1).to({scaleX:0.6595,scaleY:0.6595,x:315.8733,y:300.9},0).wait(1).to({scaleX:0.6552,scaleY:0.6552,x:315.8191,y:301.6909},0).wait(1).to({scaleX:0.6508,scaleY:0.6508,x:315.7649,y:302.4818},0).wait(1).to({scaleX:0.6464,scaleY:0.6464,x:315.7106,y:303.2727},0).wait(1).to({scaleX:0.642,scaleY:0.642,x:315.6564,y:304.0636},0).wait(1).to({scaleX:0.6376,scaleY:0.6376,x:315.6021,y:304.8546},0).wait(1).to({scaleX:0.6332,scaleY:0.6332,x:315.5479,y:305.6455},0).wait(1).to({scaleX:0.6289,scaleY:0.6289,x:315.4936,y:306.4364},0).wait(1).to({scaleX:0.6245,scaleY:0.6245,x:315.4394,y:307.2273},0).wait(1).to({scaleX:0.6201,scaleY:0.6201,x:315.3852,y:308.0182},0).wait(1).to({scaleX:0.6157,scaleY:0.6157,x:315.3309,y:308.8091},0).wait(1).to({scaleX:0.6113,scaleY:0.6113,x:315.2767,y:309.6},0).wait(1).to({scaleX:0.6069,scaleY:0.6069,x:315.2224,y:310.3909},0).wait(1).to({scaleX:0.6025,scaleY:0.6025,x:315.1682,y:311.1818},0).wait(1).to({scaleX:0.5982,scaleY:0.5982,x:315.1139,y:311.9727},0).wait(1).to({scaleX:0.5938,scaleY:0.5938,x:315.0597,y:312.7636},0).wait(1).to({scaleX:0.5894,scaleY:0.5894,x:315.0055,y:313.5546},0).wait(1).to({scaleX:0.585,scaleY:0.585,x:314.9512,y:314.3455},0).wait(1).to({scaleX:0.5806,scaleY:0.5806,x:314.897,y:315.1364},0).wait(1).to({scaleX:0.5762,scaleY:0.5762,x:314.8427,y:315.9273},0).wait(1).to({scaleX:0.5719,scaleY:0.5719,x:314.7885,y:316.7182},0).wait(1).to({scaleX:0.5675,scaleY:0.5675,x:314.7342,y:317.5091},0).wait(1).to({scaleX:0.5631,scaleY:0.5631,x:314.68,y:318.3},0).wait(1).to({scaleX:0.5587,scaleY:0.5587,x:314.6258,y:319.0909},0).wait(1).to({scaleX:0.5543,scaleY:0.5543,x:314.5715,y:319.8818},0).wait(1).to({scaleX:0.5499,scaleY:0.5499,x:314.5173,y:320.6727},0).wait(1).to({scaleX:0.5455,scaleY:0.5455,x:314.463,y:321.4636},0).wait(1).to({scaleX:0.5412,scaleY:0.5412,x:314.4088,y:322.2546},0).wait(1).to({scaleX:0.5368,scaleY:0.5368,x:314.3546,y:323.0455},0).wait(1).to({scaleX:0.5324,scaleY:0.5324,x:314.3003,y:323.8364},0).wait(1).to({scaleX:0.528,scaleY:0.528,x:314.2461,y:324.6273},0).wait(1).to({scaleX:0.5236,scaleY:0.5236,x:314.1918,y:325.4182},0).wait(1).to({scaleX:0.5192,scaleY:0.5192,x:314.1376,y:326.2091},0).wait(1).to({scaleX:0.5149,scaleY:0.5149,x:314.0833,y:327},0).wait(1).to({scaleX:0.5105,scaleY:0.5105,x:314.0291,y:327.7909},0).wait(1).to({scaleX:0.5061,scaleY:0.5061,x:313.9749,y:328.5818},0).wait(1).to({scaleX:0.5017,scaleY:0.5017,x:313.9206,y:329.3727},0).wait(1).to({scaleX:0.4973,scaleY:0.4973,x:313.8664,y:330.1636},0).wait(1).to({scaleX:0.4929,scaleY:0.4929,x:313.8121,y:330.9546},0).wait(1).to({scaleX:0.4885,scaleY:0.4885,x:313.7579,y:331.7455},0).wait(1).to({scaleX:0.4842,scaleY:0.4842,x:313.7036,y:332.5364},0).wait(1).to({scaleX:0.4798,scaleY:0.4798,x:313.6494,y:333.3273},0).wait(1).to({scaleX:0.4754,scaleY:0.4754,x:313.5952,y:334.1182},0).wait(1).to({scaleX:0.471,scaleY:0.471,x:313.5409,y:334.9091},0).wait(1).to({scaleX:0.4666,scaleY:0.4666,x:313.4867,y:335.7},0).wait(1).to({scaleX:0.4622,scaleY:0.4622,x:313.4324,y:336.4909},0).wait(1).to({scaleX:0.4579,scaleY:0.4579,x:313.3782,y:337.2818},0).wait(1).to({scaleX:0.4535,scaleY:0.4535,x:313.3239,y:338.0727},0).wait(1).to({scaleX:0.4491,scaleY:0.4491,x:313.2697,y:338.8636},0).wait(1).to({scaleX:0.4447,scaleY:0.4447,x:313.2154,y:339.6545},0).wait(1).to({scaleX:0.4403,scaleY:0.4403,x:313.1612,y:340.4455},0).wait(1).to({scaleX:0.4359,scaleY:0.4359,x:313.107,y:341.2364},0).wait(1).to({scaleX:0.4315,scaleY:0.4315,x:313.0527,y:342.0273},0).wait(1).to({scaleX:0.4272,scaleY:0.4272,x:312.9985,y:342.8182},0).wait(1).to({scaleX:0.4228,scaleY:0.4228,x:312.9442,y:343.6091},0).wait(1).to({scaleX:0.4184,scaleY:0.4184,x:312.89,y:344.4},0).wait(1).to({scaleX:0.414,scaleY:0.414,x:312.8358,y:345.1909},0).wait(1).to({scaleX:0.4096,scaleY:0.4096,x:312.7815,y:345.9818},0).wait(1).to({scaleX:0.4052,scaleY:0.4052,x:312.7273,y:346.7727},0).wait(1).to({scaleX:0.4009,scaleY:0.4009,x:312.673,y:347.5636},0).wait(1).to({scaleX:0.3965,scaleY:0.3965,x:312.6188,y:348.3546},0).wait(1).to({scaleX:0.3921,scaleY:0.3921,x:312.5646,y:349.1455},0).wait(1).to({scaleX:0.3877,scaleY:0.3877,x:312.5103,y:349.9364},0).wait(1).to({scaleX:0.3833,scaleY:0.3833,x:312.4561,y:350.7273},0).wait(1).to({scaleX:0.3789,scaleY:0.3789,x:312.4018,y:351.5182},0).wait(1).to({scaleX:0.3745,scaleY:0.3745,x:312.3476,y:352.3091},0).wait(1).to({scaleX:0.3702,scaleY:0.3702,x:312.2933,y:353.1},0).wait(1).to({scaleX:0.3658,scaleY:0.3658,x:312.2391,y:353.8909},0).wait(1).to({scaleX:0.3614,scaleY:0.3614,x:312.1849,y:354.6818},0).wait(1).to({scaleX:0.357,scaleY:0.357,x:312.1306,y:355.4727},0).wait(1).to({scaleX:0.3526,scaleY:0.3526,x:312.0764,y:356.2636},0).wait(1).to({scaleX:0.3482,scaleY:0.3482,x:312.0221,y:357.0546},0).wait(1).to({scaleX:0.3439,scaleY:0.3439,x:311.9679,y:357.8455},0).wait(1).to({scaleX:0.3395,scaleY:0.3395,x:311.9136,y:358.6364},0).wait(1).to({scaleX:0.3351,scaleY:0.3351,x:311.8594,y:359.4273},0).wait(1).to({scaleX:0.3307,scaleY:0.3307,x:311.8052,y:360.2182},0).wait(1).to({scaleX:0.3263,scaleY:0.3263,x:311.7509,y:361.0091},0).wait(1).to({scaleX:0.3219,scaleY:0.3219,x:311.6967,y:361.8},0).wait(1).to({scaleX:0.3175,scaleY:0.3175,x:311.6424,y:362.5909},0).wait(1).to({scaleX:0.3132,scaleY:0.3132,x:311.5882,y:363.3818},0).wait(1).to({scaleX:0.3088,scaleY:0.3088,x:311.5339,y:364.1727},0).wait(1).to({scaleX:0.3044,scaleY:0.3044,x:311.4797,y:364.9636},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:311.4255,y:365.7546},0).wait(1).to({scaleX:0.2956,scaleY:0.2956,x:311.3712,y:366.5455},0).wait(1).to({scaleX:0.2912,scaleY:0.2912,x:311.317,y:367.3364},0).wait(1).to({scaleX:0.2869,scaleY:0.2869,x:311.2627,y:368.1273},0).wait(1).to({scaleX:0.2825,scaleY:0.2825,x:311.2085,y:368.9182},0).wait(1).to({scaleX:0.2781,scaleY:0.2781,x:311.1542,y:369.7091},0).wait(1).to({scaleX:0.2737,scaleY:0.2737,x:311.1,y:370.5},0).wait(1).to({regX:3.4,regY:3.4,scaleX:0.0444,scaleY:0.0444,x:290.55,y:395.55},0).wait(1).to({regX:0,regY:0,x:290.3999,y:395.3999},0).wait(96).to({scaleX:1.2333,scaleY:1.2333,x:320,y:240,visible:true},0).to({_off:true},493).wait(2));

	// stop_music_obj_
	this.stop_music = new lib.Scene_1_stop_music();
	this.stop_music.name = "stop_music";
	this.stop_music.parent = this;
	this.stop_music.depth = 0;
	this.stop_music.isAttachedToCamera = 0
	this.stop_music.isAttachedToMask = 0
	this.stop_music.layerDepth = 0
	this.stop_music.layerIndex = 0
	this.stop_music.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.stop_music).wait(767).to({_off:true},2).wait(2));

	// Layer_4_obj_
	this.Layer_4 = new lib.Scene_1_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.setTransform(527.4,453.7,1,1,0,0,0,527.4,453.7);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 1
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).to({_off:true},1).wait(770));

	// runing_boy_obj_
	this.runing_boy = new lib.Scene_1_runing_boy();
	this.runing_boy.name = "runing_boy";
	this.runing_boy.parent = this;
	this.runing_boy.depth = 0;
	this.runing_boy.isAttachedToCamera = 0
	this.runing_boy.isAttachedToMask = 0
	this.runing_boy.layerDepth = 0
	this.runing_boy.layerIndex = 2
	this.runing_boy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.runing_boy).wait(446).to({regX:206.2,regY:409.3,x:206.2,y:409.3},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:206.2,regY:409.3,x:206.2,y:409.3},0).wait(103).to({regX:0,regY:0,x:0,y:0},0).wait(72).to({regX:206.2,regY:409.3,x:206.2,y:409.3},0).wait(58).to({_off:true},1).wait(89));

	// LION_obj_
	this.LION = new lib.Scene_1_LION();
	this.LION.name = "LION";
	this.LION.parent = this;
	this.LION.depth = 0;
	this.LION.isAttachedToCamera = 0
	this.LION.isAttachedToMask = 0
	this.LION.layerDepth = 0
	this.LION.layerIndex = 3
	this.LION.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.LION).wait(448).to({regX:298.9,regY:374.3,x:298.9,y:374.3},0).wait(100).to({regX:0,regY:0,x:0,y:0},0).wait(87).to({regX:298.9,regY:374.3,x:298.9,y:374.3},0).wait(44).to({_off:true},1).wait(91));

	// boy_cicking_obj_
	this.boy_cicking = new lib.Scene_1_boy_cicking();
	this.boy_cicking.name = "boy_cicking";
	this.boy_cicking.parent = this;
	this.boy_cicking.depth = 0;
	this.boy_cicking.isAttachedToCamera = 0
	this.boy_cicking.isAttachedToMask = 0
	this.boy_cicking.layerDepth = 0
	this.boy_cicking.layerIndex = 4
	this.boy_cicking.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy_cicking).wait(293).to({_off:true},54).wait(424));

	// falling_obj_
	this.falling = new lib.Scene_1_falling();
	this.falling.name = "falling";
	this.falling.parent = this;
	this.falling.depth = 0;
	this.falling.isAttachedToCamera = 0
	this.falling.isAttachedToMask = 0
	this.falling.layerDepth = 0
	this.falling.layerIndex = 5
	this.falling.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.falling).wait(309).to({_off:true},40).wait(422));

	// tzarot_obj_
	this.tzarot = new lib.Scene_1_tzarot();
	this.tzarot.name = "tzarot";
	this.tzarot.parent = this;
	this.tzarot.depth = 0;
	this.tzarot.isAttachedToCamera = 0
	this.tzarot.isAttachedToMask = 0
	this.tzarot.layerDepth = 0
	this.tzarot.layerIndex = 6
	this.tzarot.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tzarot).wait(448).to({regX:152.3,regY:276.5,x:152.3,y:276.5},0).wait(103).to({regX:0,regY:0,x:0,y:0},0).wait(72).to({regX:152.3,regY:276.5,x:152.3,y:276.5},0).wait(59).to({_off:true},1).wait(88));

	// girl_obj_
	this.girl = new lib.Scene_1_girl();
	this.girl.name = "girl";
	this.girl.parent = this;
	this.girl.setTransform(101,372.8,1,1,0,0,0,101,372.8);
	this.girl.depth = 0;
	this.girl.isAttachedToCamera = 0
	this.girl.isAttachedToMask = 0
	this.girl.layerDepth = 0
	this.girl.layerIndex = 7
	this.girl.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.girl).wait(1).to({regX:267.1,regY:359.3,x:267.1,y:359.3},0).wait(87).to({regX:101,regY:372.8,x:101,y:372.8},0).wait(260).to({regX:267.1,regY:359.3,x:267.1,y:359.3},0).wait(420).to({regX:101,regY:372.8,x:101,y:372.8},0).to({_off:true},1).wait(2));

	// chat_obj_
	this.chat = new lib.Scene_1_chat();
	this.chat.name = "chat";
	this.chat.parent = this;
	this.chat.depth = 0;
	this.chat.isAttachedToCamera = 0
	this.chat.isAttachedToMask = 0
	this.chat.layerDepth = 0
	this.chat.layerIndex = 8
	this.chat.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.chat).wait(352).to({regX:372.5,regY:262.5,x:372.5,y:262.5},0).wait(414).to({_off:true},1).wait(4));

	// boy_obj_
	this.boy = new lib.Scene_1_boy();
	this.boy.name = "boy";
	this.boy.parent = this;
	this.boy.setTransform(31,372.5,1,1,0,0,0,31,372.5);
	this.boy.depth = 0;
	this.boy.isAttachedToCamera = 0
	this.boy.isAttachedToMask = 0
	this.boy.layerDepth = 0
	this.boy.layerIndex = 9
	this.boy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.boy).wait(1).to({regX:192.1,regY:355,x:192.1,y:355},0).wait(87).to({regX:31,regY:372.5,x:31,y:372.5},0).wait(260).to({regX:192.1,regY:355,x:192.1,y:355},0).wait(420).to({regX:31,regY:372.5,x:31,y:372.5},0).to({_off:true},1).wait(2));

	// background_obj_
	this.background = new lib.Scene_1_background();
	this.background.name = "background";
	this.background.parent = this;
	this.background.setTransform(498.6,271.1,1,1,0,0,0,498.6,271.1);
	this.background.depth = 0;
	this.background.isAttachedToCamera = 0
	this.background.isAttachedToMask = 0
	this.background.layerDepth = 0
	this.background.layerIndex = 10
	this.background.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.background).wait(1).to({regX:261.6,x:261.6},0).wait(87).to({regX:498.6,x:498.6},0).wait(260).to({regX:261.6,x:261.6},0).wait(420).to({regX:498.6,x:498.6},0).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-523.2,0,1889.7,672.4);
// library properties:
lib.properties = {
	id: '2C0A86BDD45DCD469A6DF3ADFF3E2D24',
	width: 640,
	height: 480,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/twofriends_atlas_.png", id:"twofriends_atlas_"},
		{src:"sounds/song.mp3", id:"song"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['2C0A86BDD45DCD469A6DF3ADFF3E2D24'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;