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
arrays();