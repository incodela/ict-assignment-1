function findMostFrequentItem(arr) {
    if (arr.length === 0) {
        return "Array is empty.";
    }

    // Create a hashmap to store the count of each item
    const countMap = {};
    let maxCount = 0;
    let mostFrequentItem;

    // Iterate through the array to count occurrences
    arr.forEach(item => {
        countMap[item] = (countMap[item] || 0) + 1;
        if (countMap[item] > maxCount) {
            maxCount = countMap[item];
            mostFrequentItem = item;
        }
    });

    return mostFrequentItem;
}


