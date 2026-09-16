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
arrow();