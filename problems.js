function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    return arr.filter((_, i) => i % 2 === 1);
}

function oddIndices(arr) {
    // Return an array containing all the odd indices in the array
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    return arr.filter((_, i) => i % 2 === 1).reverse();
}

function oddReverse(arr) {
    // Return an array containing all the odd indices starting from the end
    const result = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
    const result =[]
    for (let i = 1; i < arr.length; i*=2) {
        result.push(arr[i]);
    }
    return result;
}
function secondPower(arr) {
    // Return an array containing all indices that are powers of 2
   return arr.filter((_, i) => (i & (i - 1)) === 0);
}


function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    const result = [];
    for (let i = 1; i < arr.length; i *= n) {
        result.push(arr[i]);
    }
    return result;
}

function nthPower(arr, n) {
    // Return an array containing all indices that are powers of n
    return arr.filter((_, i) => i > 0 && Math.pow(n, Math.floor(Math.log(i) / Math.log(n))) === i);
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
   return arr.filter((_, i) => i < Math.ceil(arr.length / 2));
}

function firstHalf(arr) {
    // Return an array containing the first half of an array
    // Include middle index on odd length arr
    const mid = Math.ceil(arr.length / 2);
    return arr.slice(0, mid);
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
    const mid = Math.floor(arr.length / 2);
    return arr.slice(mid);
}

function secondHalf(arr) {
    // Return an array containing the second half of an array
    // Exclude middle index on odd length arr
   return arr.filter((_, i) => i >= Math.floor(arr.length / 2));
}

module.exports = {
    oddIndices,
    oddReverse,
    secondPower,
    nthPower,
    firstHalf,
    secondHalf
}