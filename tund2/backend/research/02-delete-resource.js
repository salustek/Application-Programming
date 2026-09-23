
const BASE_URL = "http://localhost:3000";

async function main() {
  console.log("DELETE /api/tasks/2 (exists)...");
  let res = await fetch(`${BASE_URL}/api/tasks/2`, { method: "DELETE" });
  console.log("Status:", res.status, "(expect 204, no body)");

  console.log("\nGET /api/tasks (task 2 should be gone now):");
  console.log(await (await fetch(`${BASE_URL}/api/tasks`)).json());

  console.log("\nDELETE /api/tasks/2 again (already gone)...");
  res = await fetch(`${BASE_URL}/api/tasks/2`, { method: "DELETE" });
  console.log("Status:", res.status, "(expect 404)");
  console.log("Body:", await res.json());
}

main().catch((err) => {
  console.error("lol)");
  console.error(err.message);
});
