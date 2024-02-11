function isFirstElementPrime(arr) {
    // Check if the array is empty
    if (arr.length === 0) {
        console.log("Array is empty.");
        return false;
    }

    // Get the first element of the array
    const num = arr[0];

    // Check if the number is less than 2
    if (num < 2) {
        console.log("The number is not prime because it is less than 2.");
        return false;
    }

    // Check if the number is divisible by any number less than it
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("The number is not prime.");
            return false;
        }
    }

    // If the number passes all checks, it is prime
    console.log("The number is prime.");
    return true;
}

