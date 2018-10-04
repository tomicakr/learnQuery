function ajaxReq(url, options) {
  'use strict';
  // code goes here

  const req = new XMLHttpRequest();
  const { method, data } = options;

  const onSuccess = options.success.bind(options.context);
  const onFailure = options.failure.bind(options.context);
  const onComplete = options.complete.bind(options.context);

  req.setRequestHeader('Content-Type', 'application/json');
  req.open(method, url, true);

  req.onload = function (){
    if (this.status === 200) {
      onSuccess(JSON.parse(this.responseText), this.status, this);
    } else {
      onFailure(this, this.status, this.responseText);
    }
    onComplete(this, this.status);
  }
  
  req.send(JSON.stringify(data));
}