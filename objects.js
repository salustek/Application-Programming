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
objects();