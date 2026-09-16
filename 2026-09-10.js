import { tervita, liida, } from "./moduleHelper.js";
import suur from "./moduleHelper.js";

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

function operators() {
    // 3 //
    let a = "5";
    let b = 2;

    console.log(a + b);              // "52" — string + number = string
    console.log(Number(a) + b);      // 7   — muudab stringi numbriks ja liidab

    let hind = 10;
    hind += 5;                       // sama, mis hind = hind + 5, lihtsalt lühem viis kirjutada
    console.log(hind);               // 15

    let kordused = 0;
    kordused++;                      // suurendab väärtust 1 võrra
    console.log(kordused);           // 1

    console.log(10 % 3);             // 1  — jääk
    console.log(2 ** 4);             // 16 — astendamine

    let vigane = Number("banaan");
    console.log(vigane);             // NaN - Not a Number, kuna stringi "banaan" ei saa numbriks muuta
}

function strings() {
  // 4 //
  const rawName = "   Skev   ";
  //.trim() eemaldab tühikud
  //.toLowerCase() teeb kõik tähed väikseks
  const cleaned = rawName.trim().toLowerCase();

  const greeting = `Tere, ${cleaned}! Sinu nimi on ${cleaned.length} tähemärki pikk.`;

  console.log(greeting);
  console.log(cleaned.includes("skev")); //true - kontrollib kas string sisaldab küsitud tähte või sõna
}

function comparisons() {
  // 5 //
  //(tunnis tehtud näide)
  const user = {
  name: "Skev",
  age: 21,
  isLoggedIn: true,
  email: "" 
  };


  const isAdult = user.age >= 18;        
  const isMinor = user.age < 18;        
  const hasCorrectAge = user.age === 21; 


  if (!user.email) {
    console.log("Please add an email address.");
  }

  if (user.isLoggedIn && isAdult) {
    console.log(`Welcome back, ${user.name}! Full access granted.`);
  } else if (user.isLoggedIn && isMinor) {
    console.log(`Hi ${user.name}, you have limited access (under 18).`);
  } else if (!user.isLoggedIn) {
    console.log("Please log in to continue.");
  } else {
    console.log("Something went wrong.");
  }

  const statusMessage = isAdult ? "Standard account" : "Restricted account";
  console.log(statusMessage);
}

function numbers() {
  // 6 //
  //Math.random annab arvu vahemikus [0, 1)
  //math.floor ümardab alla, math.ceil ümardab üles
  const dice = Math.floor(Math.random() * 6 + 1); //liidame 1, et ei oleks võimalik saada 0
  console.log(`Täringu tulemus: ${dice}`);
  return dice;
}

function arrays() {
  // 7 //
  const names = ["Mari", "Jüri", "Kati"];
 
  names.push("Toomas");// lisab lõppu
  console.log(`Nimekiri: ${names}`);
  names.pop();// eemaldab viimasena lisatud nime ära
  names.push("Peeter");// lisab uue nime
 
  console.log(`Kas nimekirjas on "Kati"? ${names.includes("Kati")}`);
  
  for (let i = 0; i < names.length; i++) { // tsükkel, mis käib läbi kõik nimed
    console.log(`${i + 1}. ${names[i]}`);
  }
}

function objects() {
  // 8 //
  const user = {
    name: "Anna",
    address: {
      city: "Tallinn",
      zip: "10414"
    }
  };
 //phone jääb määramata
  const zip = user.address?.zip;
 
  const phone = user.phone ?? "puudub";
  const zipDisplay = zip ?? "määramata";
 
  console.log(`Kasutaja: ${user.name}`);
  console.log(`Linn: ${user.address?.city ?? "teadmata"}`);
  console.log(`Postiindeks: ${zipDisplay}`);
  console.log(`Telefon: ${phone}`);
  
  const visits = 0;
  console.log(`visits: ${visits ?? "pole"}`); // 0, sest 0 ei ole null/undefined
  console.log(`visits: ${visits || "pole"}`); // pole, sest 0 on falsy
}

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

function arrow() {
  // 10 //
  const numbers = [1, 2, 3, 4, 5];
 
  //Arrow function callback, mis antakse .forEach-ile
  numbers.forEach((n) => {
    console.log(`Arv ${n}, kahekordselt: ${n * 2}`);
  });
 
  //Sama, aga return teises kontekstis (map, mitte forEach)
  const doubled = numbers.map((n) => n * 2);
  console.log("Kahekordistatud massiiv:", doubled);
}

function methods() {
  // 11 //
  const products = [
    { name: "Klaviatuur", price: 25, inStock: true },
    { name: "Hiir", price: 15, inStock: false },
    { name: "Monitor", price: 120, inStock: true },
    { name: "Kõrvaklapid", price: 40, inStock: true }
  ];
  //lisab käibemaksu
  const withTax = products.map((p) => {
    p.priceWithTax = Math.round(p.price * 1.24 * 100) / 100;
    return p;
  });
  // .filter() — valib välja sobivad elemendid
  const available = products.filter((p) => p.inStock);
  // .find() — leiab esimese sobiva elemendi
  const monitor = products.find((p) => p.name === "Monitor");
  const notFound = products.find((p) => p.name === "Printer");
 
  console.log("Hindadega KM-iga:", withTax);
  console.log("Laos olevad tooted:", available.map((p) => p.name));
  console.log("Leitud toode:", monitor);
  console.log("Otsing, mida ei leitud:", notFound); // undefined
}

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
  //sest spread kopeerib ainult 1. taseme väärtused
  //kui väärtus on objekt/array, siis kopeeritakse ainult viide sellele, mitte kogu objekt/array
}

function modules() {
  // 13 //
  //import ja export on moodulite jaoks
  //export võimaldab funktsiooni/objekti/array jms jagada teistele failidele
  //import võimaldab teise faili sisu kasutada oma failis
  //import on alati faili tipus, mitte funktsiooni sees

  //funktsioonid tervita ja liida on moduleHelper.js failist named exportidena imporditud
  console.log(tervita("Skev"));  // Tere, Skev!
  console.log(liida(2, 3));      // 5

  //suur on moduleHelper.js failist default exportina imporditud
  console.log(suur("tere"));  // TERE
}

////////////////////////////////////////////////////////////////////
// 14 //
//hõlmab nii asynchronus() kui ka asyncExample()
function asynchronous() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "näide" }), 500);
  });
}

async function asyncExample() { //callida tuleb seda, et toimiks
  console.log("ootan...");
  const result = await asynchronous(); // parandatud viide
  console.log("tulemus:", result);
  return result;
}
////////////////////////////////////////////////////////////////////

async function fetching(kasutajaId) {
  // 15 //
  try {
    // andmete küsimine fetchiga
    const response = await fetch(`https://api.example.com/users/${kasutajaId}`);

    // fetch annab errori ainult võrguprobleemide korral, aga mitte error 404 v error 500 korral
    // response.ok lahendab selle
    if (!response.ok) {
      throw new Error(`Serveri viga: ${response.status} ${response.statusText}`);
    }

    //json loeb teksti ja teisendab selle objektiks
    const data = await response.json();

    console.log("Kasutaja andmed:", data);
    return data;

  } catch (error) {
    //catch püüab kinni nii võrguvead kui ka throw errorid
    console.error("Andmete laadimine ebaõnnestus:", error.message);
  }
}
