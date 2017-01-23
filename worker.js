importScripts('libs/highlight.min.js');

(function () {
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}());