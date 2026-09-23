
const BASE_URL = "http://localhost:3000";

async function main() {
  console.log("GET /api/tasks/1 (valid, exists)...");
  let res = await fetch(`${BASE_URL}/api/tasks/1`);
  console.log("Status:", res.status, await res.json());

  console.log("\nGET /api/tasks/abc (not a number)...");
  res = await fetch(`${BASE_URL}/api/tasks/abc`);
  console.log("Status:", res.status, "(expect 400)", await res.json());

  console.log("\nGET /api/tasks/999 (valid number, doesn't exist)...");
  res = await fetch(`${BASE_URL}/api/tasks/999`);
  console.log("Status:", res.status, "(expect 404)", await res.json());
}

main().catch((err) => {
  console.error("lol");
  console.error(err.message);
});
