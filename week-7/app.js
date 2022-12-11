// Author -> Ankit Bhardwaj
// Code formatted by -> prettier
// Date -> 10/02/2022

// 1. . Write a JavaScript function to check whether an `input` is an array or not.

const is_array = element => Array.isArray(element);
// console.log(is_array("3455"));
// console.log(is_array([1, 2, 4]));
// console.log(is_array({ a: 1, b: 2 }));

// ------------------------------------------------------------------------------------------------------------------------

// 2. Write a JavaScript function to clone an array.

const array_Clone = arr => JSON.parse(JSON.stringify(arr));
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// ------------------------------------------------------------------------------------------------------------------------

// 3. Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.

const first = (arr, n = 1) =>
    n === 1 ? arr[0] : arr.filter((element, index) => index < n);
// console.log(first([7, 9, 0, -2]));
// console.log(first([], 3));
// console.log(first([7, 9, 0, -2], 3));
// console.log(first([7, 9, 0, -2], 6));
// console.log(first([7, 9, 0, -2], -3));

// ------------------------------------------------------------------------------------------------------------------------

// 4. Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array.

const last = (arr, n = 1) =>
    n === 1
        ? arr[arr.length - 1]
        : arr.filter((element, index) => index >= arr.length - n);
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2], 3));
// console.log(last([7, 9, 0, -2], 6));

// ------------------------------------------------------------------------------------------------------------------------

// 5. Write a simple JavaScript program to join all elements of the following array into a string.

const myColor = arr => arr.reduce((acc, curr) => acc + curr, "");
// console.log(myColor(["Apple", "Banana", "Grapes"]));

// ------------------------------------------------------------------------------------------------------------------------

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

const addDashes = num => {
    const numString = num.toString();
    let str = "";
    for (let i = 0; i < numString.length - 1; i++) {
        if (
            Number(numString[i]) % 2 === 0 &&
            Number(numString[i + 1]) % 2 === 0
        ) {
            str += `${numString[i]}-`;
        } else {
            str += numString[i];
        }
    }
    str += numString[numString.length - 1];
    return str;
};
// console.log(addDashes(103448));
// console.log(addDashes(4488));
// console.log(addDashes(5331));

// ------------------------------------------------------------------------------------------------------------------------

// 7.  Write a JavaScript program to sort the items of an array

const sortArray = arr => arr.sort((a, b) => a - b);
// console.log(sortArray([3, 8, 7, 6, 5, -4, 3, 2, 1]));

// ------------------------------------------------------------------------------------------------------------------------

// 8. Write a JavaScript program to find the most frequent item of an array.

const mostFrequent = arr => {
    const freqObj = arr.reduce((acc, curr) => {
        if (acc[curr] === undefined) {
            acc[curr] = 1;
        } else {
            acc[curr]++;
        }
        return acc;
    }, {});

    let ans = [null, 0];
    for (let key in freqObj) {
        if (ans[1] < freqObj[key]) {
            ans[1] = freqObj[key];
            ans[0] = key;
        }
    }
    return `${ans[0]} ( ${ans[1]} times )`;
};
// console.log(mostFrequent([3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3]));

// ------------------------------------------------------------------------------------------------------------------------

// 9. *****

const toggleCase = str => {
    let arr = [];
    for (let i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 90) {
            arr.push(str[i].toUpperCase());
        } else {
            arr.push(str[i].toLowerCase());
        }
    }
    return arr.join("");
};
console.log(toggleCase("tHE qUICK bROWN fOX"));

// ------------------------------------------------------------------------------------------------------------------------

// 10. Write a JavaScript program which prints the elements of the following array

const printArr = arr => {
    for (let i = 0; i < arr.length; i++) {
        console.log(`row ${i}`);
        for (let j = 0; j < arr[i].length; j++) {
            console.log(arr[i][j]);
        }
    }
};
// printArr([
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7],
// ]);

// ------------------------------------------------------------------------------------------------------------------------

// 11. Write a JavaScript program to find the sum of squares of a numeric vector

const squareArr = arr => arr.reduce((acc, curr) => (acc += curr * curr), 0);
// console.log(squareArr([1, 4]));
// console.log(squareArr([1, 3, 2]));

// ------------------------------------------------------------------------------------------------------------------------

// 12. . Write a JavaScript program to compute the sum and product of an array of integers

const sumAndProduct = arr => {
    let sum = arr.reduce((acc, curr) => (acc += curr), 0);
    let product = arr.reduce((acc, curr) => (acc *= curr), 1);
    return [sum, product];
};
// console.log(sumAndProduct([1, 2, 3, 4]));

// ------------------------------------------------------------------------------------------------------------------------

// 13. Write a JavaScript program to add items in an blank array and display the items

const addItems = (arr, ele) => {
    arr.push(ele);
    console.log(`Element ${arr.length - 1} = ${ele}`);
};

// ------------------------------------------------------------------------------------------------------------------------

// 14.Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const removeDuplicates = arr => {
    arr.sort((a, b) => a - b);
    let newArr = [];
    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index] != arr[index + 1]) {
            newArr.push(arr[index]);
        }
    }
    if (arr.length > 0 && arr[arr.length - 1] !== newArr[newArr.length - 1]) {
        newArr.push(arr[arr.length - 1]);
    }
    return newArr;
};
// console.log(removeDuplicates([2, 2, 2, 4, 5, 6, 1, 1]));

// ------------------------------------------------------------------------------------------------------------------------

// 15. Ordinal position ??

// ------------------------------------------------------------------------------------------------------------------------

// 16. Write a JavaScript program to find the leap years in a given range of years

const findLeapYears = (from, to) => {
    const leapYears = [];
    for (let year = from; year <= to; year++) {
        if (year % 4 === 0) {
            leapYears.push(year);
            year += 3;
        }
    }
    return leapYears;
};
// console.log(findLeapYears(2000, 2016));

// ------------------------------------------------------------------------------------------------------------------------

// 17. Write a JavaScript program to shuffle an array

// ------------------------------------------------------------------------------------------------------------------------

// 18. Write a JavaScript program to perform a binary search
const binSearch = (arr, key) => {
    let low = 0,
        high = arr.length - 1;
    console.log(arr, key);
    while (low <= high) {
        let mid = Math.floor(low + high / 2);
        console.log(low, mid, high);
        if (arr[mid] === key) return mid;
        else if (arr[mid] > key) high = mid - 1;
        else low = mid + 1;
    }
    return -1;
};
// console.log(binSearch([1, 2, 3, 4], 3));

// ------------------------------------------------------------------------------------------------------------------------

// 19. There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays
const sumOfElements = (arr1, arr2) =>
    arr1.map((ele, index) => arr1[index] + arr2[index]);

// console.log(sumOfElements([1, 2, 3, 4], [2, 2, 2, 2]));

// ------------------------------------------------------------------------------------------------------------------------

// 20.  Write a JavaScript program to find duplicate values in a JavaScript array

const duplicateValues = arr => {
    let freq = {};
    for (const item of arr) {
        if (freq[item] == undefined) {
            freq[item] = 1;
        } else {
            freq[item]++;
        }
    }

    let duplicates = [];
    for (const key in freq) {
        if (freq[key] > 1) {
            duplicates.push(key);
        }
        console.log(key);
    }
    return duplicates;
};
// console.log(duplicateValues([1, 1, 1, 2, 2, 3, 4, 4, 5, -2]));

// ------------------------------------------------------------------------------------------------------------------------

// 22. Write a JavaScript program to compute the union of two arrays

const union = (arr1, arr2) => [...arr1, ...arr2].sort((a, b) => a - b);
// console.log(union([1, 10, 12], [2, -2, 9]));

// ------------------------------------------------------------------------------------------------------------------------

// 23. Write a JavaScript function to find the difference of two arrays

// ------------------------------------------------------------------------------------------------------------------------

// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.

const removeWaste = arr => arr.filter(ele => ele);
// console.log(removeWaste([NaN, 0, 15, false, -22, "", undefined, 47, null]));
// all 6 values -> 0, false, undefined, null, "", NaN have falsy value

// ------------------------------------------------------------------------------------------------------------------------

// 25. Write a JavaScript function to sort the following array of objects by title value.

const sortByTitle = arr =>
    arr.sort((a, b) => {
        if (a.title > b.title) return 1;
        return -1;
    });
// console.log(
//     sortByTitle([
//         { author: "Bill Gates", title: "The Road Ahead", libraryID: 1254 },
//         { author: "Steve Jobs", title: "Walter Isaacson", libraryID: 4264 },
//         {
//             author: "Suzanne Collins",
//             title: "Mockingjay: The Final Book of The Hunger Games",
//             libraryID: 3245,
//         },
//     ])
// );

// ------------------------------------------------------------------------------------------------------------------------

// 26.  Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.

const targetPairSum = (arr, target) => {
    let ans = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                ans.push([i, j]);
            }
        }
    }
    return ans;
};
// console.log(targetPairSum([1, 3, 5, 2, 4], 6));

// ------------------------------------------------------------------------------------------------------------------------

// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array

const retrieveValue = arr => arr.filter(ele => ele);
// console.log(retrieveValue([NaN, 0, 15, false, -22, "", undefined, 47, null]));

// ------------------------------------------------------------------------------------------------------------------------

// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) on supplied bounds

const num_string_range = (char1, char2, jump) => {
    let ans = [];
    // To simplify, that the characters doesn't have two cases
    char1 = char1.toLowerCase();
    char2 = char2.toLowerCase();

    let num1 = char1.charCodeAt(0);
    let num2 = char2.charCodeAt(0);

    for (let num = num1; num <= num2; num += jump) {
        ans.push(String.fromCharCode(num));
    }
    return ans;
};
// console.log(num_string_range("a", "z", 2));

// ------------------------------------------------------------------------------------------------------------------------

// 31. Write a JavaScript function to remove a specific element from an array

const remove_array_element = (arr, remove) => arr.filter(ele => ele !== remove);
// console.log(remove_array_element([2, 5, 9, 6], 5));

// ------------------------------------------------------------------------------------------------------------------------

//32. Write a JavaScript function to find an array contains a specific element. Test data

const contains = (arr, key) => arr.some(ele => ele === key);
// console.log(contains([2, 5, 9, 6], 5));

// ------------------------------------------------------------------------------------------------------------------------

// 33. Write a JavaScript script to empty an array keeping the original

// ------------------------------------------------------------------------------------------------------------------------

// 34. Write a JavaScript function to get nth largest element from an unsorted array

const nthlargest = (arr, n) => {
    let arr2 = [...arr];
    arr2.sort((a, b) => b - a);
    return arr2[n - 1];
};
// console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));

// ------------------------------------------------------------------------------------------------------------------------

// 35. Write a JavaScript function to get a random item from an array

const pickRandomElement = arr =>
    arr[Math.ceil(Math.random() * (arr.length - 1))];
// console.log(pickRandomElement([1, 2, 3, 4]));

// ------------------------------------------------------------------------------------------------------------------------

// 36. Write a JavaScript function to create a specified number of elements with pre-filled numeric value array

const array_filled = (num1, num2) => {
    let arr = [];
    for (let num = 0; num < num1; num++) {
        arr[num] = num2;
    }
    return arr;
};
// console.log(array_filled(4, 11));
// console.log(array_filled(6, 0));

// ------------------------------------------------------------------------------------------------------------------------

// 37. Write a JavaScript function to create a specified number of elements with pre-filled string value array.

const array_filled2 = (num1, str) => {
    let arr = [];
    for (let num = 0; num < num1; num++) {
        arr[num] = str;
    }
    return arr;
};
// console.log(array_filled2(4, "password"));

// ------------------------------------------------------------------------------------------------------------------------

// 38. Write a JavaScript function to move an array element from one position to another

const move = (arr, index1, index2) => {
    let newArr = [...arr];

    if (index1 < 0) {
        index1 = arr.length + index1;
    }

    if (index2 < 0) {
        index2 = arr.length + index2;
    }
    newArr[index1] = arr[index2];
    newArr[index2] = arr[index1];
    arr = [...newArr];
    return arr;
};
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// console.log(move([10, 20, 30, 40, 50], -1, -2));

// ------------------------------------------------------------------------------------------------------------------------

// 39. Write a JavaScript function to filter false, null, 0 and blank values from an array

const filter_array_values = arr =>
    arr.filter(ele => ele !== null && ele !== 0 && ele !== false && ele !== "");
// console.log(filter_array_values([58, "", "abcd", true, null, false, 0]));

// ------------------------------------------------------------------------------------------------------------------------

// 40.Write a JavaScript function to generate an array of specified length, filled with integer numbers, increase by one from starting position.

const array_range = (num, freq) => {
    let arr = [];
    for (let i = 1; i <= freq; i++) {
        arr.push(num);
        num++;
    }
    return arr;
};
// console.log(array_range(1, 4));
// console.log(array_range(-6, 4));

// ------------------------------------------------------------------------------------------------------------------------

// 41. Write a JavaScript function to generate an array between two integers of 1 step length.

const rangeBetween = (num1, num2) => {
    let arr = [];

    if (num2 < num1) return arr;

    for (let num = num1; num <= num2; num++) {
        arr.push(num);
    }
    return arr;
};

// console.log(rangeBetween(4, 7));
// console.log(rangeBetween(-4, 7));

// ------------------------------------------------------------------------------------------------------------------------

// 42.
