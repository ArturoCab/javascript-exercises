const palindromes = function (phrase) {
    const pattern=".!, ";
    
    let reverse=phrase.split("")
                      .filter(x=>!pattern.includes(x))
                      .reverse()
                      .join("");
    
    phrase=phrase.split("")
          .filter(x=>!pattern.includes(x))
          .join("");

          //console.log("are these equal?", reverse, phrase, reverse.toUpperCase()==phrase.toUpperCase())

    return phrase.toUpperCase()==reverse.toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
