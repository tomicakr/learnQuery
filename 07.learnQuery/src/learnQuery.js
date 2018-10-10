function domSelector(selectors) {
  'use strict';

  //code goes here
  return Array.from(document.querySelectorAll(selectors));
};

function learnQuery(elementsSelector) {
  //code goes here

  const selection = domSelector(elementsSelector);

  const obj = {
    selection,
    cssProp,
    addClass,
    removeClass,
    append,
    after,
    before,
    prepend,
    on,
    off,
    trigger,
    delegate,
    eventListeners: []
  }

  function addClass(className) {
    selection.forEach((element) => {
      element.classList.add(className);
    });

    return obj;
  }

  function removeClass(className) {
    selection.forEach((element) => {
      element.classList.remove(className);
    });

    return obj;
  }

  function toggleClass(className) {
    selection.forEach((element) => {
      element.classList.toggle(className);
    });

    return obj;
  }

  function has(element, className) {
    return element.classList.contains(className);
  }

  function remove() {
    selection.forEach((element) => element.remove());

    return obj;
  }

  function append(element) {
    selection.forEach((targetElement) => {
      targetElement.insertAdjacentElement('beforeend', element);
    });

    return obj;
  }

  function after(element) {
    selection.forEach((targetElement) => {
      targetElement.insertAdjacentElement('afterend', element);
    });

    return obj;
  }

  function prepend(element) {
    selection.forEach((targetElement) => {
      targetElement.insertAdjacentElement('afterbegin', element);
    });

    return obj;
  }

  function before(element) {
    selection.forEach((targetElement) => {
      targetElement.insertAdjacentElement('beforebegin', element);
    });

    return obj;
  }

  function on(event, callback) {
    selection.forEach((element) => {
      const wrappedCallback = (evt) => callback(evt); // we wrap this so the function can be different every time
      this.eventListeners.push({ element, event, wrappedCallback, callback });
      element.addEventListener(event, wrappedCallback);
    });

    return obj;
  }

  function off(event, callback) {
    selection.forEach((element) => {
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
    });

    return obj;
  }

  function trigger(event) {
    selection.forEach((element) => {
      element.dispatchEvent(new CustomEvent(event));
    });

    return obj;
  }

  function delegate(className, event, callback) {
    selection.forEach((monitoredElement) => {
      const toDelegate = (e) => {
        let context = e.target;

        while (context && !context.classList.contains(className)) {
          if (context === monitoredElement && !monitoredElement.classList.contains(className)) return;
          context = context.parentNode;
        }

        callback.call(context, e);
      }

      on(monitoredElement, event, toDelegate);

    });

    return obj;
  }

  return obj;
}
