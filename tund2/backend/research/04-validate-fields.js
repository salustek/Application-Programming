
const BASE_URL = "http://localhost:3000";

async function tryPatch(label, body) {
  const res = await fetch(`${BASE_URL}/api/tasks/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  console.log(`${label} -> status ${res.status}`, await res.json());
}

async function main() {
  await tryPatch("completed as string 'true' (wrong type)", { completed: "true" });
  await tryPatch("title is whitespace only", { title: "   " });
  await tryPatch("empty body (no recognized fields)", {});
  await tryPatch("valid update", { title: "Learn validation", completed: true });
}

main().catch((err) => {
  console.error("Is the server running? (npm start in backend/)");
  console.error(err.message);
});
