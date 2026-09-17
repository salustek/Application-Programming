function numbers() {
  // 6 //
  //Math.random annab arvu vahemikus [0, 1)
  //math.floor ümardab alla, math.ceil ümardab üles
  const dice = Math.floor(Math.random() * 6 + 1); //liidame 1, et ei oleks võimalik saada 0
  console.log(`Täringu tulemus: ${dice}`);
  return dice;
}
numbers();