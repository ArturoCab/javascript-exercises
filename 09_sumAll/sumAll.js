function sum(n){
    return n*(n+1)/2;
}

const sumAll = function(a,b) {
    if(!(Number.isInteger(a) && Number.isInteger(b)))
        return "ERROR"
    if(a <0 || b<0)
        return "ERROR";
    var n=[a,b];
    n.sort();
    return sum(n[1])-sum(n[0]-1);
};

// Do not edit below this line
module.exports = sumAll;
