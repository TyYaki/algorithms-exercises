/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }

  const middle = Math.floor(nums.length / 2);
  const numsFirstHalf = nums.slice(0, middle);
  const numsSecondHalf = nums.slice(middle);

  const sortedFirstHalf = mergeSort(numsFirstHalf);
  const sortedSecondHalf = mergeSort(numsSecondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);
};

const merge = (sortedFirstHalf, sortedSecondHalf) => {
  const results = [];

  while (sortedFirstHalf.length && sortedSecondHalf.length) {
    if (sortedFirstHalf[0] <= sortedSecondHalf[0]) {
      results.push(sortedFirstHalf.shift());
    } else {
      results.push(sortedSecondHalf.shift());
    }
  }
  return results.concat(sortedFirstHalf, sortedSecondHalf);
};

// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
