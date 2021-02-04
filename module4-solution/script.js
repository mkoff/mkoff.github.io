(function () {

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var a = 0; a < names.length; a++) {

  if (names[a][0].toLowerCase() === 'j') {
    byeSpeaker.speak(names[a]);
  } else {
    helloSpeaker.speak(names[a]);
  }

}

})();
