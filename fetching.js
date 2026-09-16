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
fetching();