"use strict";

/**
 * Basic Array merging
 *
 * @param firstArray
 * @param secondArray
 * @returns {*|Array|string}
 */
export function merge(firstArray, secondArray) {
    return firstArray.concat(secondArray);
}

/**
 * Upper cases all elements in the Array
 *
 * @param stringArray
 */
export function uppercaseArray(stringArray) {
    return stringArray.map( a => {
        return a.toUpperCase();
    });
}

/**
 * Basic evens filter
 *
 * @param array
 * @returns {*}
 */
export function evens(array) {
    return array.filter( i => {
        return (i % 2 === 0)
    });
}