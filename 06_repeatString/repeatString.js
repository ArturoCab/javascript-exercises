const repeatString = function(str, times) {
    if(times<0){
        return "ERROR"
    }
    var s="";
    for(let i=0; i<times; i++){
        s+=str;
    }

    return s;
};

// Do not edit below this line
module.exports = repeatString;
