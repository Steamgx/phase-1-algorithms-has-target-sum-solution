function hasTargetSum(array, target) {
  const seen = new Set();

  // Iterate over the array
  for (const num of array) {
    const complement = target - num;  // Calculate the complement of the current number
    
    // Check if the complement is already in the seen set
    if (seen.has(complement)) {
      return true;  // Pair found, return true
    }

    // Add the current number to the seen set for future lookups
    seen.add(num);
  }

  // If no pair is found after the loop
  return false;
}

/* 
  Big O Time Complexity: O(n)
  - We iterate through the array once, and each operation on the set (lookup and insertion) takes O(1) time.
  
  Space Complexity: O(n)
  - In the worst case, we might store all n elements in the set.
*/

/* 
  Pseudocode:
  1. Initialize a set called `seen`.
  2. Loop through each number in the array:
     - Calculate `complement = target - num`.
     - If the complement is in `seen`, return true.
     - Add `num` to `seen`.
  3. Return false if no pair is found.
*/

/*
  Explanation:
  We use a set to store the numbers we've encountered so far. For each number in the array, we calculate the complement (the difference between the target and the current number). If the complement exists in the set, we return `true`. If not, we add the current number to the set and continue the loop. If the loop finishes and no pair is found, we return `false`.
*/

// Running custom tests
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // Expected: true (pair is 3 + 7)

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // Expected: true (pair is 19 + 6)

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // Expected: false (no pair sums to 4)
}

module.exports = hasTargetSum;

