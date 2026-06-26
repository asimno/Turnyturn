(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Creature = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#292833").s().p("ABBAgQgFgGgBgIIgCglQAAgIAEgFQAFgFAIAAQAIAAAFAFQAHAFAAAIIAEAlQAAAIgFAGQgFAGgIAAQgJAAgGgGgAhdAgQgEgGAAgIIAEglQAAgIAGgFQAGgFAHAAQAJAAAEAFQAFAFAAAIIgCAlQAAAIgHAGQgFAGgJAAQgIAAgGgGg");
	this.shape.setTransform(-0.0002,-1.9001);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#292833").s().p("AB5AaIhGgOQgFgBgDgDQgDgDACgCIAAgCIAHgEIBBgVQAEgBADABIAFADQABAAAAABQAAAAABABQAAAAAAABQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBABIgnAPIAsAMIADAEQABAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgEADIgEABIgDAAgAh/AZIgDgDQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAABAAIADgEIAsgMIgngPQgBgBgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAgBABAAIAFgDQAEgBADABIBBAVIAHAEIAAACQABACgCADQgDADgFABIhGAOIgDAAIgEgBg");
	this.shape_1.setTransform(-0.1,-0.505);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#292833").s().p("AgLAMQgDgDgBgEIgBgFIAAAAQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_2.setTransform(4.7887,-1.8708,1.131,1.131);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcAdQgKgJgCgMQABAEADADQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgHAAgFAFQgEAEgBAGIAAgCQAAgQANgNQAMgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_3.setTransform(7.5878,-2.1818,1.131,1.131);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#292833").s().p("AgLAMQgDgDgBgEIgBgFIAAAAQAAgGAFgFQAFgFAGAAQAHAAAFAFQAFAFAAAGQAAAHgFAFQgFAFgHAAQgGAAgFgFg");
	this.shape_4.setTransform(-10.6113,-1.8708,1.131,1.131);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgcAdQgKgJgCgMQABAEADADQAFAFAHAAQAHAAAFgFQAFgFAAgHQAAgGgFgFQgFgFgHAAQgHAAgFAFQgEAEgBAGIAAgCQAAgQANgNQAMgMAQAAQARAAAMAMQANANAAAQQAAARgNAMQgMANgRAAQgQAAgMgNg");
	this.shape_5.setTransform(-7.8122,-2.1818,1.131,1.131);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_5,p:{skewY:0,x:-7.8122}},{t:this.shape_4,p:{skewY:0,x:-10.6113}},{t:this.shape_3,p:{skewY:0,x:7.5878}},{t:this.shape_2,p:{skewY:0,x:4.7887}}]},1).to({state:[{t:this.shape_4,p:{skewY:180,x:10.3113}},{t:this.shape_5,p:{skewY:180,x:7.5122}},{t:this.shape_3,p:{skewY:180,x:-7.8878}},{t:this.shape_2,p:{skewY:180,x:-5.0887}}]},1).wait(1));

	// Layer_1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FCD261").s().p("AgbCnQhGgBgwgwQgxgxAAhEIAAgBQAAhEAxgxQAwgwBGAAIA3AAQBGAAAwAwQAxAxgBBEIAAABQABBEgxAxQgwAwhGABg");

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FCD261").s().p("AgbCmQhGABgwgxQgxgwABhFIAAgBQgBhFAxgwQAwgxBGAAIA3AAQBGAAAwAxQAxAwgBBFIAAABQABBFgxAwQgwAxhGgBg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6}]}).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_7}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.4,-16.6,38.9,33.3);


// stage content:
(lib.bonky = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A5lZdQiEiEhniLIAAAAQm2pLAAsDIAAAAQAAu8KhqkIAAAAQKpqmO8AAIAAAAQO9AAKgKmIAAAAQKqKkAAO8IAAAAQAAL7myJGIAAAAQhvCViJCHIAAAAQqgKqu9AAIAAAAQu8AAqpqqgAVvqbQJFJBAAMwIAAAAQAAswpFpBIAAAAQo+pCsxAAIAAAAQswAApFJCIAAAAQo+JBAAMwIAAAAQAAswI+pBIAAAAQJFpCMwAAIAAAAQMxAAI+JCg");
	mask.setTransform(319.9999,319.9999);

	// Layer_2
	this.instance = new lib.Creature("single",1);
	this.instance.setTransform(321.15,638.6,11.6638,5.6278,0,0,0,0.1,0.1);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0.2,regY:0.2,scaleX:10.8156,scaleY:7.6896,x:322.7,y:505.55},2,cjs.Ease.quartIn).wait(1).to({regX:0,regY:0,scaleX:10.235,scaleY:13.0299,x:320.55,y:336.05,startPosition:0},0).to({scaleX:11.2556,scaleY:11.2556,x:320,y:369.1},4,cjs.Ease.backOut).wait(1).to({regY:0.1,scaleX:9.6233,scaleY:9.9539,x:320.55,y:387.6,startPosition:1},0).to({regY:0,scaleX:11.2556,scaleY:11.2556,x:320,y:369.1},4,cjs.Ease.backOut).to({y:769.1},5,cjs.Ease.quadIn).wait(1).to({y:369.1,startPosition:2},0).wait(1).to({regX:-0.7,regY:0.6,x:319.75,y:368.85},0).wait(1).to({regX:0.2,regY:-0.2,y:369.7},0).wait(1).to({regX:-0.1,regY:0.1,x:319.7,y:369.8},0).wait(1).to({regX:0,regY:0,x:320,y:369.1},0).to({y:769.1,startPosition:1},5,cjs.Ease.quadIn).wait(1).to({y:369.1,startPosition:3},0).wait(1).to({regX:-0.7,regY:0.6,x:319.75,y:368.85},0).wait(1).to({regX:0.2,regY:-0.2,y:369.7},0).wait(1).to({regX:-0.1,regY:0.1,x:319.7,y:369.8},0).wait(1).to({regX:0,regY:0,x:320,y:369.1},0).to({y:769.1,startPosition:1},5,cjs.Ease.quadIn).wait(1));

	// Layer_1_copy
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#7D7A86").s().p("AkXA6QAAhzBRhSQBThSBzAAQB0AABRBSQBTBSAABzQAABcg0BHQALgjAAgoQAAhjhHhFQhFhGhjAAQhiAAhGBGQhGBFAABjQAAAoAMAkQg1hHAAhdg");
	this.shape_1.setTransform(320,272.2471,8.251,8.251);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94909B").s().p("AjGCFQgPgQgNgRQgMgkAAgoQAAhjBGhGQBGhFBigBQBjABBFBFQBHBGAABjQAAAngLAjQgOASgRARQhRBTh0gBQhzABhThTg");
	this.shape_2.setTransform(320,373.2192,8.251,8.251);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#94909B").s().p("A5lRJQiEiEhniMQhjkpAAlOQAAswI+pCQJFpBMwAAQMxAAI+JBQJFJCAAMwQAAFKhfEhQhvCUiJCIQqgKpu9AAQu8AAqpqpg");
	this.shape_3.setTransform(320,373.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7D7A86").s().p("EgkGAHdQAAu8KhqlQKpqlO8AAQO9AAKgKlQKqKlAAO8QgBL6mxJGQBfkgAAlLQAAswpFpBQo+pCsxAAQswAApFJCQo+JBAAMwQAAFPBjEpQm2pKAAsDg");
	this.shape_4.setTransform(320,272.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(38));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(344.2,344.2,271.59999999999997,271.59999999999997);
// library properties:
lib.properties = {
	id: '7CB3D74FB872334CBE0D0F2952C2D734',
	width: 640,
	height: 640,
	fps: 24,
	color: "#B5B8B3",
	opacity: 0.00,
	manifest: [],
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
an.compositions['7CB3D74FB872334CBE0D0F2952C2D734'] = {
	getStage: function() { return exportRoot.stage; },
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
			container.style.width = '100%';				
			container.style.height = '100%';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;          
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;

      var canvas,
        stage,
        exportRoot,
        anim_container,
        dom_overlay_container,
        fnStartAnimation;
		var stageClock = new Map();
      function init(runTest) {
        canvas = document.getElementsByClassName("canvas");
        anim_container = document.getElementsByClassName("animation_container");
        dom_overlay_container = document.getElementsByClassName(
          "dom_overlay_container"
        );
        var comp = AdobeAn.getComposition("7CB3D74FB872334CBE0D0F2952C2D734");
		var lib = comp.getLibrary();

		createjs.Ticker.framerate = lib.properties.fps;
    	createjs.Ticker.addEventListener("tick", stageClockTick);

		return comp;
      }

	  function stageClockTick(){
		for (stage of stageClock.keys()){
			if (stageClock.get(stage)[1]>0){
				stageClock.get(stage)[1]-=1
				stageClock.get(stage)[0].update()
			} else {
				console.log("done "+stage);
				stageClock.delete(stage);
			}
		}
	  }

		function playToAndFrom(evt,comp,hole,toFrom) {
			if (toFrom[1]>=toFrom[0]){
				var numOfFrames=toFrom[1]-toFrom[0];
				var lib = comp.getLibrary();
				exportRoot = new lib.bonky();
				exportRoot.gotoAndPlay(toFrom[0]);
				stage = new lib.Stage(canvas.item(hole));
				stage.addChild(exportRoot);
				AdobeAn.makeResponsive(false, "both", false, 1, [
					canvas.item(hole),
					anim_container.item(hole),
					dom_overlay_container.item(hole),
				]);
				AdobeAn.compositionLoaded(lib.properties.id);

				stageClock.set(hole,[stage,numOfFrames]);
				console.log("added")
			}
		}