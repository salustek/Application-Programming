
const BASE_URL = "http://localhost:3000";

async function main() {
  console.log("Before PATCH:");
  console.log(await (await fetch(`${BASE_URL}/api/tasks/1`)).json());

  console.log("\nPATCH { completed: true } (title omitted on purpose)...");
  const res = await fetch(`${BASE_URL}/api/tasks/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed: true }),
  });
  console.log("Status:", res.status);
  console.log("Body:", await res.json());

  console.log("\nAfter PATCH:");
  console.log(await (await fetch(`${BASE_URL}/api/tasks/1`)).json());
}

main().catch((err) => {
  console.error("lol");
  console.error(err.message);
});
