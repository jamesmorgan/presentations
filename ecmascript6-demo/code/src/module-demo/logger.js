"use strict";

/**
 * Basic logger
 */
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