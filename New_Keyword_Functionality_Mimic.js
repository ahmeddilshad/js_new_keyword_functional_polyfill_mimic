function New(fun) {
    const obj = Object.create(fun.prototype);
    return function() {
        var args = Array.prototype.slice.call(arguments);
        obj.constructor.apply(obj, args);
        return obj;
    }
}

function SomeFunction(arg1, arg2, arg3) {
    this.arg1 = arg1;
    this.arg2 = arg2;
    this.arg3 = arg3;
}


Some.prototype.checkProto = function(from) {
    console.log(this.name);
}

var newObjWithNew = New(SomeFunction)('newObjWithNew', 01, true);
var anotherNewObjWithNew = New(SomeFunction)('anotherNewObjWithNew', 02, false);
var newObj = new SomeFunction('newObj', 03, true);

