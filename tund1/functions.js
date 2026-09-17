function functions() {
  // 9 //
  //funktsiooni deklareerimine
  function tervitus(name, greeting = "Tere") {
    return `${greeting}, ${name}!`;
  }
  //funktsiooni väljakutsumine default argumendiga 
  console.log(tervitus("Skev")); //Tere, Skev!
  //funktsiooni väljakutsumine muudetud argumendiga
  console.log(tervitus("Skev", "Hommik"));
  //funktsioon ilma returnita
  function ilmaReturnita(x) {
    console.log(x * 2); //trükib väärtuse ekraanile, aga ei tagasta seda
  }
  
  let tulemus = ilmaReturnita(5); //funktsiooni väljakutsumine
  console.log(tulemus); //undefined, sest funktsioonil pole returni
}
functions();