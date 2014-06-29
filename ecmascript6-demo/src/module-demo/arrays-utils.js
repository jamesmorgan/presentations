"use strict";

/*
 * export: a module can export a value with a name.
 */

/**
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
 * @param stringArray
 */
export function uppercaseArray(stringArray) {
    return stringArray.forEach( a => {
        return a.toUpperCase();
    })
}

/**
 * Basic evens filter
 * @param array
 * @returns {*}
 */
export function evens(array) {
    return array.filter( i => {
        return (i % 2 === 0)
    });
}
