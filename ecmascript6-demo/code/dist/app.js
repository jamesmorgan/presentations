define(['./module-demo/logger', './module-demo/arrays-utils'], function($__0,$__1) {
  "use strict";
  if (!$__0 || !$__0.__esModule)
    $__0 = {'default': $__0};
  if (!$__1 || !$__1.__esModule)
    $__1 = {'default': $__1};
  var Logger = $traceurRuntime.assertObject($__0).Logger;
  var $__2 = $traceurRuntime.assertObject($__1),
      merge = $__2.merge,
      uppercaseArray = $__2.uppercaseArray,
      evens = $__2.evens;
  var array1 = ['a', 'b', 'c', 'd'];
  var array2 = ['e', 'f', 'g', 'h'];
  var logger = new Logger('app-logger', true);
  logger.debug(merge(array1, array2));
  logger.info(uppercaseArray(merge(array1, array2)));
  logger.warn(evens([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
  logger.error("I'm an error!");
  return {};
});
