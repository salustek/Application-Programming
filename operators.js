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
operators();