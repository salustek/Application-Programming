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
strings();