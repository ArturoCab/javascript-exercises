const fibonacci = function(index) {
    console.log({index});
    index=Number.parseInt(index);
    console.log({index});
    if(index<0) return "OOPS";
    if(index==0) return 0;
    if(index<=2) return 1;
    var previous=[1,1];
    var result;

    for(let i=2; i<index; i++){
        result=previous[0]+previous[1];
        previous[0]=previous[1];
        previous[1]=result;
    }

    return result;
};

// Do not edit below this line
module.exports = fibonacci;
