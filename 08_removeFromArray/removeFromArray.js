const removeFromArray = function(arr, ...param) {
    param.forEach((value,id)=>{

        if(!arr.includes(value)) return;

        for(let i=0; i<arr.length; i++){
            if(arr[i]==value){
                arr.splice(i,1);
                i--;
            }
        }
    });

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
