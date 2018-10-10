
var eventListener = (function () {
  'use strict';
  //code goes here
  const eventListeners = [];

  function on(element, event, callback) {
    const wrappedCallback = (evt) => callback(evt); // we wrap this so the function can be different every time
    eventListeners.push({ element, event, wrappedCallback, callback });
    element.addEventListener(event, wrappedCallback);
  }

  function off(element, event, callback) {
    eventListeners.forEach((evtListener) => {
      if (event === undefined && callback === undefined && evtListener.element === element) {
        element.removeEventListener(evtListener.event, evtListener.wrappedCallback);
      }

      else if (callback === undefined && evtListener.event === event && evtListener.element === element) {
        element.removeEventListener(event, evtListener.wrappedCallback);
      }

      if (evtListener.event === event && evtListener.element === element && evtListener.callback === callback) {
        element.removeEventListener(event, evtListener.wrappedCallback);
      }
    });
  }

  function trigger(element, event) {
    element.dispatchEvent(new CustomEvent(event));
  }

  function delegate(monitoredElement, className, event, callback) {
    const toDelegate = (e) => {
      let context = e.target;

      while (context && !context.classList.contains(className)) {
        if (context === monitoredElement && !monitoredElement.classList.contains(className)) return;
        context = context.parentNode;
      }

      callback.call(context, e);
    }

    on(monitoredElement, event, toDelegate);
  }

  return {
    on,
    off,
    trigger,
    delegate
  }
})();