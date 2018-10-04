var cssClass = (function() {
  'use strict';

  // code goes here

  return {
    add,
    remove,
    toggle,
    has
  }
})();

function add(element, className) {
  element.classList.add(className);
}

function remove(element, className) {
  element.classList.remove(className);
}

function toggle(element, className) {
  element.classList.toggle(className);
}

function has(element, className) {
  return element.classList.contains(className);
}