function disemvowel(str) {
    console.log("str: ", str);
    let vowels = ["a", "e", "i", "o", "u"];
    let noVowels = "";
    
    for (let i=0; i<str.length; i++) {
      console.log("str: ", str[i]);
      let k=0;
      for (let j=0; j<vowels.length; j++) {
          // index of -1 does not contain
          // loop through all vowels
          // if -1 for all then add to noVowels
        if (str[i].toLowerCase() != vowels[j]) {
            // keep score
            k+=1;
            if (k == vowels.length) {
                noVowels+=str[i];
            } 
            
      }}
      // using k to discount
    }
    console.log("noVowels: ", noVowels);
    return noVowels;
  }

  let str = `What are you, a communist?"), "Wht r y,  cmmnst?`;
  disemvowel(str);