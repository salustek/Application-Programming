function datatypes() {
  // 2 //
  //typeof ütleb ära, mis tüüpi väärtusega on tegemist
  console.log(typeof "tere");    // "string"
  console.log(typeof 5);         // "number"
  console.log(typeof true);      // "boolean"
  console.log(typeof {a: 1});    // "object"
    
  //null vs undefined
  //mõlemad tähendavad, et väärtus puudub, aga erineval moel
  let a;
  console.log(a); //undefined, sest väärtust pole määratud
  let b = null;
  console.log(b); //null, sest väärtus on kasutaja poolt määratud puuduvaks

  // "5" vs 5
  // "5" on string, 5 on number
  console.log("5" + 5); //"5" + 5 = "55" (string + number = string)

  //Array ehk massiiv on andmetüüp, mis võimaldab salvestada mitu väärtust ühte muutujasse
  //kuna array on objekt, siis typeof seda eraldi masiivina ei tunnista, selleks on Array.isArray()
  console.log(Array.isArray([1, 2, 3])); //true - tegu on massiiviga
  console.log(Array.isArray(null)); //false - null ei ole massiiv
}
datatypes();