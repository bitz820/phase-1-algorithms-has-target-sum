// function hasTargetSum(array, target) {
//   // Write your algorithm here

//   for (let i = 0; i<array.length; i++){
//     for (let j = i+1; j< array.length; j++){
//       if (array[i]+array[j] === target)
//       return true
//     }
//     return false
//   }
// }
// for (let i=0; i<array.length; i++){
//   const comp = target - array[i];
//   for (let j= i+1; j<array.length; j++){
//     if (array[j] === comp)
//       return true
//     }
//   }
//   return false
// }

function hasTargetSum(arr, tar) {
  const seenNumbers = {}
  // iterate through an array.
  for (const num of arr) {
    const comp = tar - num;
    if (comp in seenNumbers) return true
    seenNumbers[num] = true
  }
  return false

}



/* 
for each index in an array, if target - index appears in teh array, then return true

*/


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true,
  }

  create an object to keep track of numbers we have already seen
  iterate through an array.
  for the current number, identify a completement that adds to the target (comp = target - current num)
  check if any key in our object is the complement
  if so return true, else return false

  (MINE)
  iterate through a second time.
  add the index of first iteration to the index of second iteration
  compare this sum to the target number.
  if they are deeply equal, return true

*/

/*
  Add written explanation of your solution here

  This problem will create a function that takes two arguments: one is an array of numbers and the second is the number that we wish to get back.

  If any two numbers in the array, when summed, equal the target number, we will return true otherwise, we will return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
