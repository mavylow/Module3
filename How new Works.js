var myObj = {};
myObj.__proto__ = MyObject.prototype;
MyObject.apply(myObj, arguments);
