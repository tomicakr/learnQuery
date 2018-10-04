var dom = (function () {

  'use strict'
  // code goes here
  function val(element) {
    return element.value;
  }

  function remove(element) {
    element.remove();
  }

  function append(targetElement, element) {
    targetElement.insertAdjacentElement('beforeend', element);
  }

  function after(targetElement, element) {
    targetElement.insertAdjacentElement('afterend', element);
  }

  function prepend(targetElement, element) {
    targetElement.insertAdjacentElement('afterbegin', element);
  }

  function before(targetElement, element) {
    targetElement.insertAdjacentElement('beforebegin', element);
  }

  return {
    remove,
    append,
    after,
    prepend,
    before,
    val
  }
  
})();
