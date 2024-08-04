// 2635. Apply Transform Over Each Element in Array

var map = function(arr, fn) {
  const res = [];
  arr.forEach((element, index) => {
    res[index] = fn(element, index);
  });
  return res;
};
