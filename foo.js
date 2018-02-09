var _ = require('./myUnderscore');

let foo = _.has({a: 1, b: { c: '233'}, c: 3}, ["b", "c"]);

console.log(foo);