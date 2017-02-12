// snippet-loader.js
var contentURL  = chrome.extension.getURL ("snippet-loader.html");

var div  = document.createElement ("div");

document.body.insertBefore (div, document.body.firstChild);

console.log("content loaded");

$(document).ready(function () {
    $(div).load(contentURL);
});