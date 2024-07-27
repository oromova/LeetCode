var reduce = function(nums, fn, init) {
  let val = init;
  nums.forEach((n) => val=fn(val,n))
  return val   
};