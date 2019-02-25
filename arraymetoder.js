//arraymetoder

//pop
var popArray = [5, "hello", 54, 17, 23];
popArray.pop();
popArray.pop();
popArray.pop();
console.log(popArray);

//push
popArray.push(12);
console.log(popArray);

//shift
popArray.shift();
console.log(popArray);

//unshift
popArray.unshift(2);
console.log(popArray);

//splice
let spliced = popArray.splice(1, 2);
console.log(spliced);
console.log(popArray);

//concat
var myArray1 = [1, 2, 3];
var myArray2 = [4, 5, 6];

let concated = myArray1.concat(myArray2);
console.log(concated);

//sort1
var sortingArray = [45, 23, -5, 12];
sortingArray.sort();
console.log(sortingArray);

//sort2
var crazySort = ["string", "hej", "what", "wordsyo"];
crazySort.sort();
console.log(crazySort);

//.reverse()
crazySort.reverse();
console.log(crazySort);