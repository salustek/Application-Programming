// 14 // 

function asynchronous() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: "näide" }), 500);
  });
}

async function asyncExample() { //callida tuleb seda
  console.log("ootan...");
  const result = await asynchronous(); // parandatud viide
  console.log("tulemus:", result);
  return result;
}
asyncExample();