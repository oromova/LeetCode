// 2666. Allow One Function Call

var once = function(fn) {
  let res;
  let called = false;
  return function(...args){
      if (!called){
          result=fn(...args);
          called= true;
          return result;
      }
  }
};
