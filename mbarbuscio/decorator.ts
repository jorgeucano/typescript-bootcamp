export function pilotReport(target: any){
  var original = target;

  function construct(constructor, args) {
    var c : any = function () {
      return constructor.apply(this, args);
    }
    c.prototype = constructor.prototype;
    return new c();
  }

  var f: any = function (...args) {
    console.log(`${args[0]} flying ${original.name} reporting`);
    return original.apply(this, args);
  }

  f.prototype = original.prototype;

  return f;
}
