// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var matchedElements = [];

  var testElements = function(element) {
    if (element.classList) {
      if (element.classList.contains(className)) {
        matchedElements.push(element);
      }
    }
    if (element.childNodes) {
      element.childNodes.forEach(function(item) {
        testElements(item);
      });
    }
  };

  testElements(document.body);
  return matchedElements;
};
