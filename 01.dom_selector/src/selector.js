var domSelector = function(selectors) {
  'use strict';

  //code goes here
  return Array.from(document.querySelectorAll(selectors));
};