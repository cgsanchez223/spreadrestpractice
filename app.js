function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }
  console.log(filterOutOdds(1,2,3,4,5)); // (2) [2, 4]

  const takeOutOdds = (...nums) => nums.filter(v => v % 2 === 0);
  console.log(takeOutOdds(1,2,3,4,5)); // (2) [2, 4]



  // findMin accepts a variable number of arguments and returns the smallest arguments.
  const findMin = (...mins) => Math.min(...mins);
  console.log(findMin(1,4,12,-3)); // -3
  console.log(findMin(1,-1)); // -1
  console.log(findMin(3,1)); // 1




  // mergeObjects accepts two objects and returns a new object which contains all the keys and values of the first object and second object
  const mergeObjects = (red, gold) => ({...red, ...gold});
  console.log(mergeObjects({red: 1, blue: 2}, {gold: 3, silver: 4}));



  // doubleAndReturnArgs accepts an array and a variable number of arguments. Should return a new array with original arra values and all of additional arguments doubled.
  const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v *2)];

console.log(doubleAndReturnArgs([1,2,3],4,4)); // [1, 2, 3, 8, 8]
console.log(doubleAndReturnArgs([2],10,4)); // [2, 20, 8]


/** remove a random element in the items array
and return a new array without that item. */
const items = ['axe', 'rope', 'notebook', 'sleeping bag', 'canned food'];

const removeRandom = items => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0, index), ...items.slice(index + 1)];
};

console.log(removeRandom('notebook')); // ['n', 'o', 't', 'e', 'o', 'o', 'k']



/** Return a new array with every item in array1 and array2. */
const big = ['lizard', 'dog', 'cat'];
const small = ['hippo', 'elephant', 'giraffe'];
const length = [...big, ...small];
console.log(length); // ['lizard', 'dog', 'cat', 'hippo', 'elephant', 'giraffe']

const extend = (big, small) => {
    return [...big, ...small];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
const gundam = {
    type : 'Rx-78',
    grade : 'perfect',
    origin : 'japan'
};
const addKeyVal = {...gundam, price: 109.99};
console.log(addKeyVal);

/** Return a new object with a key removed. */
const toys = ['hot wheels', 'beyblades', 'bionicles'];
const removalObject = {...toys, ...'BIONICLE'};
console.log(removalObject);


const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
};
console.log(removeKey({gundam}, origin));



/** Combine two objects and return a new object. */
const merge = {...gundam, ...toys};
console.log(merge);

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
}


/** Return a new object with a modified key and value. */
const revive = {...gundam, type: 'burning'}; 
console.log(revive);

const update = (obj, key, val) => {
    let newObj = { ...obj }
  newObj[key] = val;
  return newObj;
}

