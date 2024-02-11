function sumOfSquares(arr) {
    let sum = 0;
    
    // Iterate through the array and add the square of each element to the sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i];
    }
    
    return sum;
}

