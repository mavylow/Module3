// name = 'The Window';

// let alpha = {
//     name : 'My Alpha',
//     getNameFunc : function() {
//         return function() {
//             return this.name;
//         }.bind(this);
//     }
// };
name = "The Window";

let alpha = {
  name: "My Alpha",
  getNameFunc: function () {
    return this.name;
  },
};
