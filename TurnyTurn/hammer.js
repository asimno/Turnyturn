(function (cjs, an) {
  var p; // shortcut to reference prototypes
  var lib = {};
  var ss = {};
  var img = {};
  lib.ssMetadata = [];

  (lib.AnMovieClip = function () {
    this.actionFrames = [];
    this.ignorePause = false;
    this.gotoAndPlay = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndPlay.call(this, positionOrLabel);
    };
    this.play = function () {
      cjs.MovieClip.prototype.play.call(this);
    };
    this.gotoAndStop = function (positionOrLabel) {
      cjs.MovieClip.prototype.gotoAndStop.call(this, positionOrLabel);
    };
    this.stop = function () {
      cjs.MovieClip.prototype.stop.call(this);
    };
  }).prototype = p = new cjs.MovieClip();
  // symbols:

  (lib.hammeranim = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = true;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // MergedLayer_1
    this.shape = new cjs.Shape();
    this.shape.graphics
      .f("#7C808F")
      .s()
      .p("EgF+At6MgAthdDINXAAMgAtBdDQjEBQi+AAQjAAAi7hQg");
    this.shape.setTransform(-12.6, -241.075);

    this.shape_1 = new cjs.Shape();
    this.shape_1.graphics
      .f("#7C808F")
      .s()
      .p("EgFiAqTMgErhWRIUbAAMgEZBWRQi4Bsi2AAQi1AAi0hsg");
    this.shape_1.setTransform(-13.5, 32.2);

    this.shape_2 = new cjs.Shape();
    this.shape_2.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AJCLcIlLgCQh+AAhQgCIgpgCQhVADihABIhHABIkEABQkHACiDgCQjbgEiugPQiBgLifgWQhmgOi4gdQiIgVhHgOQhzgVhagbQgdgJgQgIQgYgLgOgRQgTgWgKgyQgYh6AJhsQAKh6AyheQA2hkBgg6IAGgEQBqg+BvAPQgbiZBViPQBViOCTgzQCSgyCgA0QCfAzBiB+QAvA+AVBCQAXBLgSBBQgWBWhjBNQgaAUg7AnQg4AlgcAVQgdAYgGAUQgEARAGAWIAQAmQAVAxAEAsQAEAzgUAoQgeA8haAjIg5AWIgRAGQguAQgbAOQAyA3BWAfQA6AVBnASQBFALAoABQA8ACAsgUIAKgEQAdgQAlggIBGg+QA9gnAdgWQAxgmAMgrIAGgZQAFgOAHgHQAPgOAkADQBWAHBRAkQAqAUAaAdQAeAjgKAjQBfgsBtApQBuAqAuBgQAtgCAXAJQARAIAKAOQAMAQgCAQIBXADIBYgDQgCgQAMgQQAKgOARgIQAXgJAtACQAuhgBugqQBtgpBfAsQgKgjAegjQAagdAqgUQBRgkBWgHQAkgDAPAOQAHAHAFAOIAGAZQAMArAxAmQAdAWA9AnIAtAnIAZAXQArAlAhAPQAsAUA8gCQAogBBFgLQBngSA6gVQBWgfAyg3QgbgOgugQQg9gWgNgGQgxgTgfgaQgagXgOgbQgUgoAEgzQAEgsAVgxIAQgmQAGgWgEgRQgGgUgdgYQgcgVg4glQg7gngagUQhjhNgWhWQgShBAXhLQAVhCAvg+QBih+CfgzQCgg0CSAyQCTAzBVCOQAUAhANAiQAuBvgVB2QBvgPBqA+QBkA7A4BnQAyBeAKB6QAJBsgYB6QgKAygTAWQgOARgYALQgQAIgdAJQhaAbhzAVQhHAOiIAVQi4AdhmAOQifAWiBALQiuAPjbAEIjBABIjJgBg"
      );
    this.shape_2.setTransform(0.025, 577.4881);

    this.shape_3 = new cjs.Shape();
    this.shape_3.graphics
      .f("#FCD261")
      .s()
      .p("EghgAGxIAA2uUAgFAQaAi8gQaIAAWuQxfJNwvAAQwxAAwCpNg");
    this.shape_3.setTransform(-12.475, 333.6125);

    this.shape_4 = new cjs.Shape();
    this.shape_4.graphics
      .f("#FD7753")
      .s()
      .p(
        "EgDAAw4IBHAAQCggBBWgDIApABQhpAHhoAAQhLAAhKgEgEAAlAvgQACgRgMgPQgKgPgRgHQgWgKgtADQguhhhugpQhtgphfArQAKgjgegjQgagdgqgTQhRgkhWgIQgkgDgPAOQgHAIgFAOIgGAYQgMArgxAmQgdAWg9AoIhGA9QglAggdAQQjYg+jWhZIA5gVQBagkAeg8QAUgngEgzQgEgtgVgwIgQgmQgGgWAEgRQAGgUAdgYQAcgWA4glQA7goAagUQBjhMAWhWQAShBgXhLQgVhCgvg+Qhih/ifgzQigg0iSAzQiTAzhVCNQhVCPAbCaQhvgPhqA+IgGAEIgC8uUAgFASZAi8gSZIAAYVQgNgigUghQhViNiTgzQiSgzigA0QifAzhiB/QgvA+gVBCQgXBLASBBQAWBWBjBMQAaAUA7AoQA4AlAcAWQAdAYAGAUQAEARgGAWIgQAmQgVAwgEAtQgEAzAUAnQAOAcAaAWQjBBUi/BAIgtgnQg9gogdgWQgxgmgMgrIgGgYQgFgOgHgIQgPgOgkADQhWAIhRAkQgqATgaAdQgeAjAKAjQhfgrhtApQhuApguBhQgtgDgXAKQgRAHgKAPQgMAPACARIhYADgEghggQmMAALggVQAJFwJoEIQJzENN0AAQN1AAJxkNQJbkBAZllMAAEAgDQxfIOwvAAQwxAAwCoOg"
      );
    this.shape_4.setTransform(-12.475, 337.7063);

    this.shape_5 = new cjs.Shape();
    this.shape_5.graphics
      .f("#D05E4F")
      .s()
      .p(
        "A3oKEQpnkIgKlwIAAgXIAAgMQASlrJfkEQJ0kKN0ABQN0gBJyEKQJgEEATFpIAAAZIAAAeQgYFlpbEBQpyEMt0AAQt0AAp0kMg"
      );
    this.shape_5.setTransform(-12.15, 23.35);

    this.shape_6 = new cjs.Shape();
    this.shape_6.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AJCLcIlLgCQihgBhWgDQhVADihABIlLACQkHACiDgCQjbgEiugPQiBgLifgWQhmgOi4gdQiIgVhHgOQhzgVhagbQgdgJgQgIQgYgLgOgRQgTgWgKgyQgYh6AJhsQAKh6AyheQA4hnBkg7QBTgxBXgBQAXAAAYADQgbiZBViPQBViOCTgzQCSgyCgA0QCfAzBiB+QAvA+AVBCQAXBLgSBBQgWBWhjBNQgaAUg7AnQg4AlgcAVQgdAYgGAUQgEARAGAWIAQAmQAVAxAEAsQAEAzgUAoQgOAcgcAXQgfAZgvATQgNAGg9AWQguAQgbAOQAyA3BWAfQA6AVBnASQBFALAoABQA8ACAsgUQAhgPArglIAwgrIAWgTQA9gnAdgWQAxgmAMgrIAGgZQAFgOAHgHQAPgOAkADQBWAHBRAkQAqAUAaAdQAeAjgKAjQBfgsBtApQBuAqAuBgQAtgCAXAJQARAIAKAOIAFAJQAGALgBAMIBXADIBYgDQgCgQALgOIABgCQAKgOARgIQAXgJAtACQAuhgBugqQBtgpBfAsQgKgjAegjQAagdAqgUQBRgkBWgHQAkgDAPAOQAHAHAFAOIAGAZQAMArAxAmIApAdIAxAgIBGA+QArAlAhAPQAsAUA8gCQAogBBFgLQBngSA6gVQBWgfAyg3QgbgOgugQQg9gWgNgGQhagjgeg8QgHgOgDgOQgIgdACgiQAEgsAVgxIAQgmQAGgWgEgRQgGgUgdgYQgcgVg4glQg7gngagUQhjhNgWhWQgShBAXhLQAVhCAvg+QBih+CfgzQCgg0CSAyQAsAQAnAYQBaA2A7BjQBVCPgbCZQBvgPBqA+QBkA7A4BnQAyBeAKB6QAJBsgYB6QgKAygTAWQgOARgYALQgQAIgdAJQhaAbhzAVQhHAOiIAVQi4AdhmAOQifAWiBALQiuAPjbAEIjBABIjJgBg"
      );
    this.shape_6.setTransform(0.025, 577.4881);

    this.shape_7 = new cjs.Shape();
    this.shape_7.graphics
      .f("#FCD261")
      .s()
      .p("A+oI2IAH5CQekN+emuEIAAZEQvWHhvVAAQvTAAvTndg");
    this.shape_7.setTransform(-12.275, 296.0751);

    this.shape_8 = new cjs.Shape();
    this.shape_8.graphics
      .f("#FD7753")
      .s()
      .p(
        "EAAdA1FQgLgOgRgIQgWgKgsADQgvhhhtgpQhtgphfAsQAKgkgfgiQgZgegqgTQhRgkhWgHQglgEgOAPQgHAHgFAOIgGAYQgMArgxAmQgdAXg9AnIgWATQjMg0jNhKQAcgXAOgdQAUgngFgzQgDgtgVgwIgQgmQgGgWAEgRQAGgUAdgYQAcgWA4glQA7gnAagVQBjhMAWhWQAShBgYhLQgUhCgvg+Qhjh/ifgyQigg1iRAzQiTAzhVCOQhWCOAcCaQgYgDgXAAIAH/qQeqO8eovAIAAYwQgngZgsgPQiSgzigA1QifAyhiB/QgwA+gUBCQgXBLARBBQAXBWBjBMQAaAVA6AnQA4AlAdAWQAdAYAFAUQAFARgHAWIgQAmQgVAwgDAtQgCAhAHAdQjWBajVBBIgpgeQgygmgMgrIgFgYQgFgOgIgHQgOgPgkAEQhXAHhQAkQgqATgaAeQgeAiAJAkQhfgshsApQhuApguBhQgtgDgXAKQgRAIgKAOIgBABQhfAHhfABIgFgJgA+ewnMAAJgkmQAHE5IzDiQI/DjMngBQMoABI8jjQIojbAWkwMAAAAkQQvXHDvWAAQvOAAvQm9g"
      );
    this.shape_8.setTransform(-12.65, 298.8);

    this.shape_9 = new cjs.Shape();
    this.shape_9.graphics
      .f("#D05E4F")
      .s()
      .p(
        "A1nIlQozjigGk5IAAgTIAAgJQAPk2IqjbQI/jjMoAAQMnAAI8DjQIqDbAVE0IAAAtQgXExooDbQo8DisnAAQsoAAo/jig"
      );
    this.shape_9.setTransform(-11.5, -42.75);

    this.shape_10 = new cjs.Shape();
    this.shape_10.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AJEKwQgEgIAHgIQAHgHALgDQAmgLBGAFQBNAHAggGQAjgGAzgXQBDgfARgGQA3gTBygGQBzgHA2gRQgbgMgOgcQgOgbAGgcQAGgcAYgUQASgPAVgEQgUgFgUgLQgbgPgJgRQgGgLgBgQQgBgIAAgKQADg4AZgxQARgeAUgJQASgHAhAIQBHAPAWAlQAGAKADAMQADANAAASQAogPAkAAQArAAAjAWQAmAYAKAmQADANABAcQABAbAEAOQAFARAMAPQAMAOAQAHQAnASAxgUQAjgOAvglICIhsQATgPABgMQACgTgggUQhOgvgYg5QgPgkAHgmQAHgoAcgVQgMgVglguIgCgDQgnAOgrAFIgiADQgNABgKADIgLADQgKAEgPAKIgaAOQgcANgtABQhJAChGgaQhHgZg2gxQgnghgDggQgDgVANgZQAIgQAUgZQgcgMgNgJQgWgOgIgSQgKgTACgdIAHgyQACgQAAgmQABgiADgTQAFgdANgWQAQgZAYgJIAOgEQAJgDAFgDQAIgFAIgLIAMgTQAXgfArgKQAogJAqAKQAmAKAqAYQAbAPAwAhQAlAaALASQAFAJADAJQAHAZgHAeQgIAegYAlIAgACIAvAFQAWADATAFQAGgzAlggQAtgoBPAAQBPAAA7AmQATAMAeAbQAgAdAQALQAhAXBjAmQBWAhAmAlQA5A5AMBoQANBwgvBpQAkgLAnATQAkATAVAkQAfA4gIBhQgIBcgiA1QgmA9hSAkQg7AbhhASQkHAylLAVQjTANmEAHIpQAJQgTAAgEgJgAyqKwQmEgHjTgNQlLgVkHgyQhhgSg7gbQhSgkgmg9Qgig1gIhcQgIhhAfg4QAVgkAkgTQAngTAkALQgvhpANhwQAMhoA5g5QAmglBWghQBjgmAhgXQAQgLAggdQAegbATgMQA7gmBPAAIACAAQBNABAtAnQAlAgAGAzQATgFAWgDQAagDA1gEQgYglgIgeQgKgpASggQALgSAlgaQAwghAbgPQAqgYAmgKQAqgKAoAJQArAKAXAfIAMATQAIALAIAFQAFADAJADIAOAEQAYAJAQAZQANAWAFAdQADATABAiQAAAmACAQIAHAyQACAdgKATQgIASgWAOQgNAJgcAMQAUAZAIAQQANAZgDAVQgDAggnAhQg2AxhHAZQhGAahJgCQgtgBgcgNIgagOQgPgKgKgEQgOgFgUgCIgigDQgrgFgngOIgCADQglAugMAVQAcAVAHAoQAHAmgPAkIgDAGQgaA2hJAsQggAUACATQABAMATAPICIBsQAvAlAjAOQAxAUAngSQAQgHAMgOQAMgPAFgRQAEgOABgbQABgcADgNQAJgiAfgXIAIgFQAjgWArAAQAkAAAoAPQAAghAMgUQAWglBHgPQAhgIASAHQAUAJARAeQAZAxADA4QABAcgJARQgJARgbAPQgOAIgOAFIgMADQAVAEASAPQAYAUAGAcQAGAcgOAbQgOAcgbAMQA2ARBzAHQByAGA3ATQARAGBDAfQAzAXAjAGQAgAGBNgHQBGgFAmALQALADAHAHQAHAIgEAIQgEAJgTAAIpQgJg"
      );
    this.shape_10.setTransform(0.025, 577.9923);

    this.shape_11 = new cjs.Shape();
    this.shape_11.graphics
      .f("#FCD261")
      .s()
      .p("A9kJlIAH6FQc+OGeEuPIAAaJQvIHKuzAAQuwAAuenFg");
    this.shape_11.setTransform(-12.25, 282.8439);

    this.shape_12 = new cjs.Shape();
    this.shape_12.graphics
      .f("#FD7753")
      .s()
      .p(
        "EgS2AztQANgFAPgIQAbgPAJgRQAJgRgBgcQgDg4gZgxQgRgegUgJQgSgHghAIQhIAPgVAlQgMAUgBAhQgogPgjAAQgrAAgkAWIgHAFQiSg8iRhJIACgGQAPgkgGgmQgHgogdgWQAMgVAmguIACgDQAnAOAqAFIAjADQAUACAOAFQAJAEAQAKIAaAOQAcANAsABQBKACBGgaQBHgZA2gxQAnghADggQADgVgNgZQgIgQgUgZQAcgMANgJQAVgOAJgSQAJgTgCgdIgGgyQgCgQgBgmQAAgigDgTQgFgdgNgWQgQgZgYgJIgOgEQgJgDgGgDQgHgFgIgLIgNgTQgWgfgrgKQgogJgqAKQgmAKgqAYQgbAPgwAhQglAagLASQgTAgALApQAIAeAYAlQg1AEgaADQgWADgTAFQgGgzglggQgtgnhOgBIAI8OQdAONeJuRIAAcEQgEgJgEgJQgMgSglgaQgvghgbgPQgqgYgngKQgpgKgoAJQgrAKgXAfIgNATQgHALgIAFQgFADgJADIgOAEQgYAJgQAZQgOAWgFAdQgDATAAAiQAAAmgDAQIgGAyQgCAdAKATQAIASAWAOQANAJAbAMQgTAZgJAQQgMAZACAVQAEAgAnAhQA2AxBHAZQBGAaBJgCQAtgBAcgNIAagOQAPgKAKgEIALgDIAACMQiSBJiRA/QgDgMgFgKQgWglhHgPQghgIgTAHQgTAJgRAeQgZAxgDA4QAAAKAAAIQrFEJq6AAQpWAApOjBgEAdIAnLQAZglAIgeIAABFIghgCgA9Zw0MAAJgl5QAHEeIfDOQIqDOMLAAQMNAAIojOQIUjKAVkVMAAAAlkQvIHJuzAAQutABuanCg"
      );
    this.shape_12.setTransform(-12.65, 284.7639);

    this.shape_13 = new cjs.Shape();
    this.shape_13.graphics
      .f("#D05E4F")
      .s()
      .p(
        "A02H1QofjOgHkeIAAgRIAAgJQAQkaIWjJQIqjOMMAAQMMAAIoDOQIXDJASEYIAAApQgUEWoVDJQooDPsMAAQsMAAoqjPg"
      );
    this.shape_13.setTransform(-11.475, -66.35);

    this.shape_14 = new cjs.Shape();
    this.shape_14.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "AJEKwQgEgIAHgIQAHgHALgDQAmgLBGAFQBNAHAggGQAjgGAzgXQBDgfARgGQA3gTBygGQBzgHA2gRQgbgMgOgcQgOgbAGgcQAGgcAYgUQASgPAVgEQgUgFgUgLQgbgPgJgRQgJgRABgcQADg4AZgxQARgeAUgJQASgHAhAIQBHAPAWAlQAMAUAAAhQAogPAkAAQArAAAjAWQAmAYAKAmQADANABAcQABAbAEAOQAFARAMAPQAMAOAQAHQAnASAxgUQAjgOAvglICIhsQATgPABgMQACgTgggUQhOgvgYg5QgPgkAHgmQAHgoAcgVQgMgVglguIgCgDQgnAOgrAFIgiADQgQABgMAEIgGACQgKAEgPAKIgaAOQgcANgtABQhJAChGgaQhHgZg2gxQgnghgDggQgDgVANgZQAIgQAUgZQgcgMgNgJQgWgOgIgSQgKgTACgdIAHgyQACgQAAgmQABgiADgTQAFgdANgWQAQgZAYgJIAOgEQAJgDAFgDQAIgFAIgLIAMgTQAXgfArgKQAogJAqAKQAmAKAqAYQAbAPAwAhQAlAaALASIADAHQAOAdgJAlIgFAPQgJAYgSAcIAbACIA0AFQAWADATAFQAGgzAlggQAtgoBPAAQBPAAA7AmQATAMAeAbQAgAdAQALQAhAXBjAmQBWAhAmAlQA5A5AMBoQANBwgvBpQAkgLAnATQAkATAVAkQAfA4gIBhQgIBcgiA1QgmA9hSAkQg7AbhhASQkHAylLAVQjTANmEAHIpQAJQgTAAgEgJgAyqKwQmEgHjTgNQlLgVkHgyQhhgSg7gbQhSgkgmg9Qgig1gIhcQgIhhAfg4QAVgkAkgTQAngTAkALQgvhpANhwQAMhoA5g5QAmglBWghQBjgmAhgXQAQgLAggdQAegbATgMQA7gmBPAAIAHAAQBKACArAmQAlAgAGAzQATgFAWgDQAagDA1gEQgYglgIgeQgKgpASggQALgSAlgaQAwghAbgPQAqgYAmgKQAqgKAoAJQArAKAXAfIAMATQAIALAIAFQAFADAJADIAOAEQAYAJAQAZQANAWAFAdQADATABAiQAAAmACAQIAHAyQACAdgKATQgIASgWAOQgNAJgcAMQAUAZAIAQQANAZgDAVQgDAggnAhQg2AxhHAZQhGAahJgCQgtgBgcgNIgagOQgPgKgKgEQgOgFgUgCIgigDQgrgFgngOIgCADQglAugMAVQAcAVAHAoQAEAWgDAVIgDAOIgGARQgYA5hOAvQggAUACATQABAMATAPICIBsQAvAlAjAOQAxAUAngSQAQgHAMgOQAMgPAFgRQAEgOABgbQABgcADgNQAKgmAmgYQAjgWArAAQAkAAAoAPQAAghAMgUQAWglBHgPQAhgIASAHQAUAJARAeQAZAxADA4QABAcgJARQgJARgbAPQgUALgUAFQAVAEASAPQAYAUAGAcQAGAcgOAbQgOAcgbAMQA2ARBzAHQByAGA3ATQARAGBDAfQAzAXAjAGQAgAGBNgHQBGgFAmALQALADAHAHQAHAIgEAIQgEAJgTAAIpQgJg"
      );
    this.shape_14.setTransform(0.025, 577.9923);

    this.shape_15 = new cjs.Shape();
    this.shape_15.graphics
      .f("#D05E4F")
      .s()
      .p(
        "A1lAPQlLgEiFgEIADgNQCGgFFHgEQIqgGMPAAQMNAAIrAGQIqAHAAAIQAAAJoqAGQorAHsNAAQsPAAoqgHg"
      );
    this.shape_15.setTransform(-8.075, 587.775);

    this.shape_16 = new cjs.Shape();
    this.shape_16.graphics
      .f("#FCD261")
      .s()
      .p(
        "AU5NQQorgGsOAAQsNAAorAGQorAHAAAJIAA6OQABgUIqgNQIrgQMNAAQMOAAIrAQQIqANABAUIAAaOQAAgJorgHg"
      );
    this.shape_16.setTransform(-12.6, 256.375);

    this.shape_17 = new cjs.Shape();
    this.shape_17.graphics
      .f("#FD7753")
      .s()
      .p(
        "EAU5AzzQorgHsOAAQsNAAorAHQlHAEiGAEQADgVgDgVQgIgogcgWQAMgVAlguIACgDQAnAOArAEIAiADQAVACANAGQAKAEAQAJIAaAPQAcANAsABQBJABBHgZQBGgaA3gwQAmgiADgfQADgWgNgYQgIgQgUgZQAcgMAOgJQAVgOAIgTQAKgSgCgdIgHgzQgCgQAAglQAAgjgEgTQgEgdgOgWQgQgYgYgJIgOgFQgJgCgFgEQgIgFgIgLIgMgTQgXgfgrgKQgogJgqALQglAJgrAYQgbAQgwAgQglAagKATQgTAfALApQAHAfAYAkQg0AEgaAEQgXADgTAEQgGgzglggQgrglhKgCIAA8cQAAgJIrgGQIrgHMNAAQMOAAIrAHQIrAGAAAJIAAcCIgEgGQgLgTglgaQgvgggbgQQgrgYgmgJQgqgLgnAJQgsAKgXAfIgMATQgHALgJAFQgFAEgIACIgPAFQgXAJgQAYQgOAWgFAdQgDATgBAjQAAAlgCAQIgHAzQgCAdAKASQAIATAWAOQANAJAcAMQgTAZgJAQQgNAYADAWQADAfAnAiQA3AwBGAaQBHAZBIgBQAtgBAcgNIAagPQAPgJAKgEIAHgCIAACaQAAgJorgGgEAdIAr3QASgcAKgYIAAA3IgcgDgAU5s/QorgPsOAAQsNAAorAPQoqAOgBAUMAAAgmMQAAgjIrgbQIrgaMNAAQMOAAIrAaQIrAbAAAjMAAAAmMQgBgUoqgOg"
      );
    this.shape_17.setTransform(-12.6, 254.725);

    this.shape_18 = new cjs.Shape();
    this.shape_18.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EAhIAJcQgDgJARgKIAngTQAVgMAMgOQAIgKAUguQAQgjAVgLQgSAAgNgPQgMgPAAgTQABgSALgPQAKgPAQgKQAXgOAugJQAdgGAQgHQAYgLAIgUQAKgXgPgbQgNgXgagTIgvggQgYgUgHgXIgGgXQgCgOgGgIQgMgRgmgHQgwgIgXgMQgngTgIgjQgBgHgBgSQAAgRgDgJQgFgTgUgQQgNgLgagNIhhgwQgngUgTgOQgegXgIgdQgKgdANglQAIgZAXgmQAohEAcggQAsgyAzgPQAtgOA3ALQAqAIA5AZQBKAfAxAfQA/AnAoAxQAtA3APBEQAPBIgbA9QAsgFArATQArASAaAkQAbAkARBCQAWBWgMA7QgPBJhFBHQgXAYgnAgIhBA3Qg2AygcAXQgxApgqATQgfAOhBAQIhmAaIgLABQgLAAgCgIgEghfAJjIhmgaQhBgQgfgOQgqgTgxgpQgcgXg2gyIhBg3QgngggXgYQhFhHgPhJQgMg7AWhWQARhCAbgkQAagkArgSQArgTAsAFQgbg9APhIQAPhEAtg3QAogxA/gnQAxgfBKgfQA5gZAqgIQA3gLAtAOQAzAPAsAyQAcAgAoBEQAXAmAIAZQANAlgKAdQgIAdgeAXQgTAOgnAUIhhAwQgaANgNALQgUAQgFATQgDAJAAARQgBASgBAHQgIAjgnATQgXAMgwAIQgmAHgMARQgGAIgCAOIgGAXQgHAXgYAUIgvAgQgaATgNAXQgPAbAKAXQAIAUAYALQAQAHAdAGQAuAJAXAOQAQAKAKAPQALAPABASQAAATgMAPQgNAPgSAAQAVALAQAjQAUAuAIAKQAMAOAVAMIAnATQARAKgDAJQgCAIgLAAIgLgBgAZMCdQghgXgIgZQgHgXAKgsQg6ADgzgVQgggOgLgTQgMgXAKgkQAShDA6gsQA1gpBJgIQASgCALAFQAFACAOAMQAPALAZALQApASAuARQAiAMAMALQAOALAJAXIAOApIAHAZQAEAPgBALQgEAbgdAWQAPAngKApQgFATgKAKQgIAIgWAHQg7ATghABIgKAAQg3AAgwgfgA68C8QghgBg7gTQgWgHgIgIQgKgKgFgTQgKgpAPgnQgdgWgEgbQgBgLAEgPIAHgZIAOgpQAJgXAOgLQAMgLAigMQAugRApgSQAZgLAPgLQAOgMAFgCQALgFASACQBJAIA1ApQA6AsASBDQAKAkgMAXQgLATggAOQgzAVg6gDQAKAsgHAXQgIAZghAXQgwAfg3AAIgKAAgAafm7QgvgBgPgbQgDgGgBgJIgDgCQgIgJgEgPQgDgSAHgTQACgFADgFIgCgCQgEgHADgKQAIgVAngIQAngJAVAKQAbANAOAyQANAvgQAYQgSAdgxAAIgDAAgA7knYQgQgYANgvQAOgyAbgNQAVgKAnAJQAnAIAIAVQADAKgEAHIgCACQADAFACAFQAHATgDASQgEAPgIAJIgDACQgBAJgDAGQgPAbgvABIgDAAQgxAAgSgdg"
      );
    this.shape_18.setTransform(0.025, 563.1912);

    this.shape_19 = new cjs.Shape();
    this.shape_19.graphics
      .f("#D05E4F")
      .s()
      .p(
        "AgVDzQodgHmug1QnPg3h2hbQgagUgHgTQgFgJADgLQANhFEag3QHIhiMhACQMxgCH3BkQFNBCANBMIAAAKQgEAWgdAWQh2BdnqAzQmjAvoGAAIg1AAg"
      );
    this.shape_19.setTransform(-13.9696, 447.2791);

    this.shape_20 = new cjs.Shape();
    this.shape_20.graphics
      .f("#FCD261")
      .s()
      .p(
        "A3lrJQAPhJE7hFQGqhdL6AAQL9AAHGBkQDuA1AwA8IAmaPQgjhEkPg6QnUhksKABQsJgBnUBkQkVA8gdBHg"
      );
    this.shape_20.setTransform(-13.475, 108.15);

    this.shape_21 = new cjs.Shape();
    this.shape_21.graphics
      .f("#FD7753")
      .s()
      .p(
        "EATwAyiQn4hksxACQsggCnJBiQkaA3gNBFMAA+glUQgGgSAGgNQAdhHEVg8QHUhkMJAAQMLAAHUBkQEOA6AkBEQAIAUgIAUMAA1AlkQgOhMlMhCgEgWjgwwQgCgLACgJQAUhHECg+QG3hmLjAAQLlAAG1BmQDvA6AmBAQALAWgLAZMAAzAk1Qgxg8jtg1QnHhkr9AAQr6AAmpBdQk7BFgQBJg"
      );
    this.shape_21.setTransform(-13.925, 109.375);

    this.shape_22 = new cjs.Shape();
    this.shape_22.graphics
      .f("#7C808F")
      .s()
      .p("AkzC+IiDnMQDVAhDqAAQDgAADOgfIiKHKQicBRiXAAQiYAAiVhRg");
    this.shape_22.setTransform(-12.6, 126.6125);

    this.shape_23 = new cjs.Shape();
    this.shape_23.graphics
      .f("#D05E4F")
      .s()
      .p(
        "AnAOTQk5g0kKh8QnsjfhtljQgmh/ASh3QAkkJEvjlQHxlwMsAAQMsAAHvFwQEcDVA1D2IAJA+QAJBpgiByQhsFjnvDfQkTB/lBAzQjOAfjfAAQjrAAjVghg"
      );
    this.shape_23.setTransform(-11.569, 8.05);

    this.shape_24 = new cjs.Shape();
    this.shape_24.graphics
      .f("#FCD261")
      .s()
      .p(
        "AR7K3Qh8hqiShJIgHgFQAAAAgBgBQAAAAgBAAQAAgBgBAAQgBAAAAAAQlui4n6AAQn4AAlsC2IgLAHQiWBLh/BqQjDCphAC6IgFAQICO2sQA6ixCkidQGGmCKdAGQKegEGIGEQCbCZA8CpICZXXQg3jXjhi/g"
      );
    this.shape_24.setTransform(-12.05, -328.5554);

    this.shape_25 = new cjs.Shape();
    this.shape_25.graphics
      .f("#FD7753")
      .s()
      .p(
        "A2UQNIAEgQQBBi6DDipQB+hqCXhLIALgHQFsi2H3AAQH7AAFuC4QAAAAABAAQAAABABAAQAAAAABAAQABABAAAAIAHAFQCSBJB8BqQDgC/A4DXMADdAhgQg1j2kcjVQnulwsuAAQsqAAnxFwQkwDlgjEKgEgRFgkxIAAgfQASjxCqjaQFAmcJAAEQI7gEFEGcQCoDcAQD2IDKeiQg8ipibiZQmJmEqdAEQqdgGmGGCQikCdg6Cxg"
      );
    this.shape_25.setTransform(-11.825, -325.6774);

    this.shape_26 = new cjs.Shape();
    this.shape_26.graphics
      .f("#FFFFFF")
      .s()
      .p(
        "EApsAFNQgugDgtgRQhVgig9hPQgpgzgHguQgDgVgHgFQgEgDgPgBQgxAAgsgXQgtgZgYgoQgYgrAGgyQAGg1AiggIARgPQALgJAFgHQAHgHAIgOQAJgRAEgFQAQgWAZgKQAagLAXAIIAOAFQAIACAGgBQAGgCAGgFIAKgKQAUgRAsgCQBBgBAmATQAYAMAQAWQARAWAAAaIAAAMQAAAHADAFQAEAIAMAFQAFACARADQAuAJAaAnQAPAXAFAgQAFAdgHAbQgIAegTASQAoAIAaAtQAOAZAOA4QAJAjABAVQADAfgLAXQgTAqg8ATQgkALgnAAIgRAAgEgrHAFCQg8gTgTgqQgLgXADgfQABgVAJgjQAOg4AOgZQAagtAogIQgTgSgIgeQgHgbAFgdQAFggAPgXQAagnAugJQARgDAFgCQAMgFAEgIQADgFAAgHIAAgMQAAgaARgWQAQgWAYgMQAmgTBBABQAsACAUARIAKAKQAGAFAGACQAGABAIgCIAOgFQAXgIAaALQAZAKAQAWQAEAFAJARQAIAOAHAHQAFAHALAJIARAPQAiAgAGA1QAGAygYArQgYAogtAZQgsAXgxAAQgPABgEADQgHAFgDAVQgHAugpAzQg9BPhVAiQgtARguADIgRAAQgnAAgkgLgAfQhUQgDgBgCgDQgDgFgJgIQgFgHgEgSQgBgEAAgFQACgGAEgBQAFgDgBgBQAXgGASACQANACAFAEQAEAFADAIIAEAOQADAPgEAEIgHADIgoALIgEAAIgBAAgA/UhUIgogLIgHgDQgEgEADgPIAEgOQADgIAEgFQAFgEANgCQASgCAXAGQgBABAFADQAEABACAGQAAAFgBAEQgEASgFAHQgJAIgDAFQgCADgDABIgBAAIgEAAg"
      );
    this.shape_26.setTransform(0.025, 522.396);

    this.timeline.addTween(
      cjs.Tween.get({})
        .to({ state: [{ t: this.shape }] })
        .to({ state: [{ t: this.shape_1 }] }, 1)
        .to(
          {
            state: [
              { t: this.shape_5 },
              { t: this.shape_4 },
              { t: this.shape_3 },
              { t: this.shape_2 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_9 },
              { t: this.shape_8 },
              { t: this.shape_7 },
              { t: this.shape_6 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_13 },
              { t: this.shape_12 },
              { t: this.shape_11 },
              { t: this.shape_10 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_17 },
              { t: this.shape_16 },
              { t: this.shape_15 },
              { t: this.shape_14 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_21 },
              { t: this.shape_20 },
              { t: this.shape_19 },
              { t: this.shape_18 },
            ],
          },
          1
        )
        .to(
          {
            state: [
              { t: this.shape_25 },
              { t: this.shape_24 },
              { t: this.shape_23 },
              { t: this.shape_22 },
              { t: this.shape_18 },
            ],
          },
          1
        )
        .to({ state: [{ t: this.shape_26 }] }, 1)
        .to({ state: [{ t: this.shape_26 }] }, 1)
        .to({ state: [] }, 1)
        .wait(1)
    );

    this._renderFirstFrame();
  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(
    -284.7,
    -650.8,
    569.5,
    1301.6999999999998
  );

  // stage content:
  (lib.hammer = function (mode, startPosition, loop, reversed) {
    if (loop == null) {
      loop = false;
    }
    if (reversed == null) {
      reversed = false;
    }
    var props = new Object();
    props.mode = mode;
    props.startPosition = startPosition;
    props.labels = {};
    props.loop = loop;
    props.reversed = reversed;
    cjs.MovieClip.apply(this, [props]);

    // hammer_anim
    this.instance = new lib.hammeranim("synched", 0);
    this.instance.setTransform(332.6, -92.35);

    this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

    this._renderFirstFrame();
  }).prototype = p = new lib.AnMovieClip();
  p.nominalBounds = new cjs.Rectangle(0, -423.2, 617.4, 981.7);
  // library properties:
  lib.properties = {
    id: "779F92B204E1A04BA8D0731011A47AA8",
    width: 640,
    height: 640,
    fps: 24,
    color: "#B5B8B3",
    opacity: 0.0,
    manifest: [],
    preloads: [],
  };

  // bootstrap callback support:

  (lib.Stage = function (canvas) {
    createjs.Stage.call(this, canvas);
  }).prototype = p = new createjs.Stage();

  p.setAutoPlay = function (autoPlay) {
    this.tickEnabled = autoPlay;
  };
  p.play = function () {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
  };
  p.stop = function (ms) {
    if (ms) this.seek(ms);
    this.tickEnabled = false;
  };
  p.seek = function (ms) {
    this.tickEnabled = true;
    this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
  };
  p.getDuration = function () {
    return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
  };

  p.getTimelinePosition = function () {
    return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
  };

  an.bootcompsLoaded = an.bootcompsLoaded || [];
  if (!an.bootstrapListeners) {
    an.bootstrapListeners = [];
  }

  an.bootstrapCallback = function (fnCallback) {
    an.bootstrapListeners.push(fnCallback);
    if (an.bootcompsLoaded.length > 0) {
      for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
        fnCallback(an.bootcompsLoaded[i]);
      }
    }
  };

  an.compositions = an.compositions || {};
  an.compositions["779F92B204E1A04BA8D0731011A47AA8"] = {
    getStage: function () {
      return exportRoot.stage;
    },
    getLibrary: function () {
      return lib;
    },
    getSpriteSheet: function () {
      return ss;
    },
    getImages: function () {
      return img;
    },
  };

  an.compositionLoaded = function (id) {
    an.bootcompsLoaded.push(id);
    for (var j = 0; j < an.bootstrapListeners.length; j++) {
      an.bootstrapListeners[j](id);
    }
  };

  an.getComposition = function (id) {
    return an.compositions[id];
  };

  an.makeResponsive = function (
    isResp,
    respDim,
    isScale,
    scaleType,
    domContainers
  ) {
    var lastW,
      lastH,
      lastS = 1;
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    function resizeCanvas() {
      var w = lib.properties.width,
        h = lib.properties.height;
      var iw = window.innerWidth,
        ih = window.innerHeight;
      var pRatio = window.devicePixelRatio || 1,
        xRatio = iw / w,
        yRatio = ih / h,
        sRatio = 1;
      if (isResp) {
        if (
          (respDim == "width" && lastW == iw) ||
          (respDim == "height" && lastH == ih)
        ) {
          sRatio = lastS;
        } else if (!isScale) {
          if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 1) {
          sRatio = Math.min(xRatio, yRatio);
        } else if (scaleType == 2) {
          sRatio = Math.max(xRatio, yRatio);
        }
      }
      domContainers[0].width = w * pRatio * sRatio;
      domContainers[0].height = h * pRatio * sRatio;
      domContainers.forEach(function (container) {
        container.style.width = "100%";
        container.style.height = "100%";
      });
      stage.scaleX = pRatio * sRatio;
      stage.scaleY = pRatio * sRatio;
      lastW = iw;
      lastH = ih;
      lastS = sRatio;
      stage.tickOnUpdate = false;
      stage.update();
      stage.tickOnUpdate = true;
    }
  };
  an.handleSoundStreamOnTick = function (event) {
    if (!event.paused) {
      var stageChild = stage.getChildAt(0);
      if (!stageChild.paused || stageChild.ignorePause) {
        stageChild.syncStreamSounds();
      }
    }
  };
  an.handleFilterCache = function (event) {
    if (!event.paused) {
      var target = event.target;
      if (target) {
        if (target.filterCacheList) {
          for (var index = 0; index < target.filterCacheList.length; index++) {
            var cacheInst = target.filterCacheList[index];
            if (
              cacheInst.startFrame <= target.currentFrame &&
              target.currentFrame <= cacheInst.endFrame
            ) {
              cacheInst.instance.cache(
                cacheInst.x,
                cacheInst.y,
                cacheInst.w,
                cacheInst.h
              );
            }
          }
        }
      }
    }
  };
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;

var canvas,
  stage,
  exportRoot,
  anim_container,
  dom_overlay_container,
  fnStartAnimation;
function init() {
  canvas = document.getElementById("canvas");
  anim_container = document.getElementById("animation_container");
  dom_overlay_container = document.getElementById("dom_overlay_container");
  var comp = AdobeAn.getComposition("779F92B204E1A04BA8D0731011A47AA8");
  var lib = comp.getLibrary();
  handleComplete({}, comp);
}
function handleComplete(evt, comp) {
  //This function is always called, irrespective of the content. You can use the variable "stage" after it is created in token create_stage.
  var lib = comp.getLibrary();
  var ss = comp.getSpriteSheet();
  exportRoot = new lib.hammer();
  stage = new lib.Stage(canvas);
  //Registers the "tick" event listener.
  fnStartAnimation = function () {
    stage.addChild(exportRoot);
    createjs.Ticker.framerate = lib.properties.fps;
    createjs.Ticker.addEventListener("tick", stage);
  };
  //Code to support hidpi screens and responsive scaling.
  AdobeAn.makeResponsive(false, "both", false, 1, [
    canvas,
    anim_container,
    dom_overlay_container,
  ]);
  AdobeAn.compositionLoaded(lib.properties.id);
  fnStartAnimation();
}
