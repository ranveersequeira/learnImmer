//NOTE:
//Immutability is the principle of not changing the original data, but instead creating new copies with modifications.


// Mutable approach (bad)
const mutableArray = [1, 2, 3];
mutableArray.push(4); // Modifies the original array

// Immutable approach (good)
const immutableArray = [1, 2, 3];
const newArray = [...immutableArray, 4];




//WHY WE NEED TO FOCUS ON Immutability
//How react rendering works
//REFER The Premitive and Non Premitive components


// With mutable data
// const oldObject = { count: 0 };
// const newObject = oldObject;
// newObject.count = 1;

// oldObject === newObject // true, React might miss this change





// With immutable data
const oldObject = { count: 0 };
const newObject = { ...oldObject, count: 1 };

oldObject === newObject // false, React knows it needs to update
