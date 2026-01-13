const add = function(a, b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  if(arr.length==0) return 0;
  let val=arr.reduce((acc, cur)=>{
    return acc+=cur;
  },0);

  return val;
};

const multiply = function(arr) {
  if(arr.length==0) return 0;
  let val=arr.reduce((acc, cur)=>{
    return acc*=cur;
  },1);

  return val;
};

const power = function(base,exp) {
  if(exp==0) return 1;
  let acc=base;
  for(let i=1; i<exp; i++){
    acc*=base;
  }
	return acc;
};

const factorial = function(a) {
  if(a==0) return 1;
  if(a==1) return 1;
  let acc=a;
	
  for(let iterator=a-1; iterator>1; iterator--){
    acc*=iterator;
  }
  return acc;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
