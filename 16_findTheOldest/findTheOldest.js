const findTheOldest = function(array) {
    array=array
    .sort((a,b)=>{
        let f=new Date().getFullYear();
        
        let x=("yearOfDeath" in b)?b.yearOfDeath:f;
        let y=("yearOfDeath" in a)?a.yearOfDeath:f;
        
        return (x-b.yearOfBirth)-(y-a.yearOfBirth);
    })
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
