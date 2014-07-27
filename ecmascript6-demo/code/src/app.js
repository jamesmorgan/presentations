

import { Logger } from './module-demo/logger';
import { merge, uppercaseArray, evens } from  './module-demo/arrays-utils';

var array1 = ['a','b','c','d'];
var array2 = ['e','f','g','h'];

var logger = new Logger('app-logger', true);

logger.debug( merge(array1,array2) );
logger.info( uppercaseArray( merge(array1, array2) ) );
logger.warn( evens( [0,1,2,3,4,5,6,7,8,9] ) );
logger.error("I'm an error!");

