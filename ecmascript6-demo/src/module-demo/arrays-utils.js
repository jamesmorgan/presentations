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

export class Logger {

    constructor(name = 'logger', printDate = false){
        this.name = name;
        this.printDate = printDate;
    }

    debug(msg){
        this.printMsg('debug', msg);
    }

    info(msg){
        this.printMsg('info', msg);
    }

    warn(msg){
        this.printMsg('warn', msg);
    }

    error(msg){
        this.printMsg('error', msg);
    }

    printMsg(fnc, msg) {
        if(this.printDate){
            console[fnc](`[${this.date()}] [${this.name}] ${msg}`);
        } else {
            console[fnc](`[${this.name}] ${msg}`);
        }
    }

    date() {
        return moment().format('llll');
    }

}