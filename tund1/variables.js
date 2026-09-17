//kõik teemad on eraldi functionid, sest tegin algul kõik ühte faili, hiljem lugesin et peab sorteerima

function variables() {
  // 1 //
  const nimi = "Skev"; //kasutatav, kui väärtus ei pea kunagi muutuma
  let vanus = 21; //kasutatav, kui väärtus võib muutuda
  //var on lihtsalt vanem viis muutujaid defineerida, muud võimalust lihtsalt ei olnud
  //let ja const töötavad ainult selle bloki sees, kus nad on defineeritud, var aga on globaalne
  if (true) {
    let a = 1;
    var b = 2;
  }
  console.log(a); //ei toimi, sest let toimib ainult oma bloki sees
  console.log(b); //toimib, sest var on globaalne

}
variables();