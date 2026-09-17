import { tervita, liida, } from "./moduleHelper.js";
import suur from "./moduleHelper.js";

function modules() {
  // 13 //
  //import ja export on moodulite jaoks
  //export võimaldab funktsiooni jms jagada teistele failidele
  //import võimaldab teise faili sisu kasutada oma failis
  //import on alati faili tipus, mitte funktsiooni sees

  //funktsioonid tervita ja liida on moduleHelper.js failist named exportidena imporditud
  console.log(tervita("Skev"));  // Tere, Skev!
  console.log(liida(2, 3));      // 5

  //suur on moduleHelper.js failist default exportina imporditud
  console.log(suur("tere"));  // TERE
}
modules();