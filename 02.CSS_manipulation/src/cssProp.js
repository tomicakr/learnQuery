function cssProp(element, cssProperty, value) {
  'use strict';

  //code goes here

  if (typeof cssProperty === 'object') {
    const keys = Object.keys(cssProperty);

    for (var i = 0; i < keys.length; i++){
      element.style[keys[i]] = cssProperty[keys[i]];
    }
  }

  else if (value === undefined) {
    return element.style[cssProperty];
  }

  else {
    element.style[cssProperty] = value;
  }
}