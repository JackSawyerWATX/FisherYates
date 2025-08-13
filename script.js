function generatePermutations(arr) {
    const permutations = [];
  
    function permute(arr, start) {
      if (start === arr.length - 1) {
        permutations.push([...arr]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        [arr[start], arr[i]] = [arr[i], arr[start]];
        permute(arr, start + 1);
        [arr[start], arr[i]] = [arr[i], arr[start]];
      }
    }
  
    permute(arr, 0);
    return permutations;
  }
  
  // Usage example:
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const permutations = generatePermutations(nums);
  
  // Log all the permutations to the console
  for (let i = 0; i < permutations.length; i++) {
    console.log(permutations[i]);
  }
  