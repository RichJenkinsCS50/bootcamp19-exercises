// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = arr.map(el => el * 3)
console.log(triple)

Array.prototype.map = function(fun) {
  fun(this)
}
