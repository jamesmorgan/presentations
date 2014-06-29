define(['./module-demo/arrays-utils'], function($__0) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  var $__1 = $traceurRuntime.assertObject($__0),
      Logger = $__1.Logger,
      merge = $__1.merge,
      uppercaseArray = $__1.uppercaseArray,
      evens = $__1.evens;
  var array1 = ['a', 'b', 'c', 'd'];
  var array2 = ['e', 'f', 'g', 'h'];
  var logger = new Logger('app-logger', true);
  logger.debug(merge(array1, array2));
  logger.info(uppercaseArray(merge(array1, array2)));
  logger.warn(evens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  logger.error("I'm an error!");
  return {};
});
