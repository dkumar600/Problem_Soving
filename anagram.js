let anagram = (s,g) => {
    let a = g.split("");
    if(s.length === g.length){
      for(let i = 0; i<s.length; i++){
        for(let j = 0; j<g.length; j++){
          if(s[i] === a[j]){
            a[j]=0;
          }
        }
      }
    } else{
      return `${g} and ${s} are Not Anagram`;
    }
    let i = 0;
    while(i<a.length){
      if(a[i] !== 0){
        return `${g} and ${s} are Not Anagram`;
      }
      i++;
    }
    return "Both are Anagram";
  }
  let anagram1 = (s,g) => {
    let ana = 0;
    let a = g.split("");
    if(s.length === g.length){
      for(let i = 0; i<g.length; i++){
        for(let j = 0; j<s.length; j++){
          if(s[i] === a[j]){
            a[j]=0;
            ana+=1;
            break;
          }
        }
      }
    } else{
      return `${g} and ${s} are Not Anagram`;
    }
    if(ana === s.length){
        return "Both are Anagram";
    } else{
        return `${g} and ${s} are Not Anagram`;
    }
    
  }
  console.log(anagram("good","o0gd"));
  console.log(anagram1("good","oogd"));