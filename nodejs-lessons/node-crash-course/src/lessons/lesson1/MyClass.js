MyClass = function() {
    this.a = 'hello';
    this.b = 'world';
}
MyClass.prototype.a = 'Joan';
MyClass.prototype.c = 12;

obj = new MyClass();

console.log(obj.d);