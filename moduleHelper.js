//named export — võib olla mitu samas failis, imporditakse loogeliste sulgudega {}
export function tervita(nimi) {
  return `Tere, ${nimi}!`;
}

//named export — teine näide samast failist
export function liida(a, b) {
  return a + b;
}

//default export — failis võib olla ainult üks, imporditakse ilma {}
export default function suur(sõna) {
  return sõna.toUpperCase();
}
