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
  console.log("Ei leitud:", notFound); // undefined
}
methods();