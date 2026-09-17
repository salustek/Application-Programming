function destructuring() {
  // 12 //
  //object destructuring
  const inimene = { nimi: "Skev", vanus: 21, linn: "Tallinn" };
  const { nimi, vanus } = inimene;
  console.log(nimi, vanus); // Skev, 21

  //array destructuring
  const arvud = [10, 20, 30];
  const [esimene, teine] = arvud;
  console.log(esimene, teine); // 10 20

  //array kopeerimine
  const algneArray = [1, 2, 3];
  const koopiaArray = [...algneArray];
  koopiaArray.push(4);
  console.log(algneArray); //[1, 2, 3] - muutumatu
  console.log(koopiaArray); //[1, 2, 3, 4]

  //object kopeerimine
  const algneObjekt = { a: 1, b: 2 };
  const koopiaObjekt = { ...algneObjekt };
  koopiaObjekt.c = 3;
  console.log(algneObjekt); //{ a: 1, b: 2 }
  console.log(koopiaObjekt); //{ a: 1, b: 2, c: 3 }

  //uus array lisatud elemendiga
  const uusArray = [...algneArray, 4];
  console.log(uusArray); //[1, 2, 3, 4]

  //uus objekt muudetud väärtusega
  const uuendatudObjekt = { ...inimene, vanus: 25 };
  console.log(uuendatudObjekt); //{ nimi: "Skev", vanus: 25, linn: "Tallinn" }

  //const objekti muutmine
  const auto = { mark: "Toyota" };
  auto.mark = "Honda"; 
  console.log(auto); // { mark: "Honda" }


  //miks spread teeb shallow koopia
  const sisuga = { andmed: { arv: 1 } };
  const shallowKoopia = { ...sisuga };
  shallowKoopia.andmed.arv = 99;
  console.log(sisuga.andmed.arv); //99, muutus ka originaalobjektis
  //spread kopeerib ainult 1. taseme väärtused
  //kui väärtus on objekt/array, siis kopeeritakse ainult viide sellele, mitte kogu objekt/array
}
destructuring();
