// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // stringifiable objects
  if (typeof obj === 'number' || typeof obj === 'boolean') {
    return (obj.toString());
  } else if (typeof obj === 'string') {
    return '"' + obj + '"';
  // unstringifiable objects	
  } else if (obj === null) {
    return 'null';
  }	else if (obj === undefined) {
    return;
  } else if (obj.constructor === Function) {
    return;
  }

  //Arrays
  if (obj.constructor === Array) {
    if (obj.length > 0) {
      var converted = [];
      for (var i = 0; i < obj.length; i++) {
        converted.push(stringifyJSON(obj[i]));
      }
      return '[' + converted.join() + ']';
    }
    return '[]';
  }

  if (obj.constructor === Object) {
    var converted = '';
    var keys = Object.keys(obj);

    if (keys.length > 0) {
      for (var i = 0; i < keys.length; i++) {
        if ((keys[i] === undefined) || (obj[keys[i]] === undefined)) {
          return '{}';
        } else if (i === (keys.length - 1)) {
          converted += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]);
        } else {
          converted += stringifyJSON(keys[i]) + ':' + stringifyJSON(obj[keys[i]]) + ',';
        }  				
      }
      return '{' + converted + '}';
    }
    return '{}';
  }
};
