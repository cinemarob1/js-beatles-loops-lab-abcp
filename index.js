function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (let i=0; i < musicians.length; i++){
    array.push(musicians[i] + ' plays ' + instruments[i]);
  }
  return array;
  }
  
function johnLennonFacts(facts){
  var funFacts = [];
  while (let i=0; i<facts.length) {
    funFacts.push(facts[i] + '!!!');
  }
  return funFacts;
}