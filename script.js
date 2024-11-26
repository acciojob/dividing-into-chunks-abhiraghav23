const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentSubarray = [];
  let currentSum = 0;

  for (let num of arr) {
    // If adding the current number exceeds the max sum, finalize the current subarray
    if (currentSum + num > n) {
      result.push(currentSubarray); // Push the current subarray to the result
      currentSubarray = []; // Start a new subarray
      currentSum = 0;
    }
    // Add the current number to the subarray
    currentSubarray.push(num);
    currentSum += num;
  }

  // Add the last subarray if not empty
  if (currentSubarray.length > 0) {
    result.push(currentSubarray);
  }

  return result;
};

// Prompt for user input
const n = parseInt(prompt("Enter n: "), 10);
alert(JSON.stringify(divide(arr, n)));

