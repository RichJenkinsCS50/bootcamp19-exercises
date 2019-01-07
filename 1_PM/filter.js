// Complete the implementation below such that all elements of the array
// that are not multiples of 7 are removed

const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];

const multOf7 =el => !(el % 7) && (typeof el === "number")

console.log(multOf7(false))

Array.prototype.filter = function(fun) {
  const arr = [7, 8, 15, 14, 13, 70, 44, 35, 88, 77, false, "7", "hi", null];
  this.forEach(multOf7(el) {

  }
};

const newArr = arr.filter(multOf7);

console.log(newArr);
