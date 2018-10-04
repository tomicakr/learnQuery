function cssProp(element, cssProperty, value) {
  'use strict';

  //code goes here

  if(typeof cssProperty === 'object') {
    for (const attr in cssProperty) {
      element.style[attr] = cssProperty[attr];
    }
  }

  else if(typeof value === 'undefined') {
    return element.style[cssProperty];
  }

  else {
    element.style[cssProperty] = value;
  }
}