
const BASE_URL = "http://localhost:3000";

async function main() {
  const listRes = await fetch(`${BASE_URL}/api/tasks`);
  const [firstTask] = await listRes.json();
  if (!firstTask) {
    console.log("No tasks left to delete - run npm start again to reset.");
    return;
  }

  const res = await fetch(`${BASE_URL}/api/tasks/${firstTask.id}`, {
    method: "DELETE",
  });

  console.log("Status:", res.status, "(expect 204)");
  console.log("Content-Length header:", res.headers.get("content-length"));

  const text = await res.text();
  console.log("Body text:", JSON.stringify(text), "(expect empty string)");
}

main().catch((err) => {
  console.error("Is the server running? (npm start in backend/)");
  console.error(err.message);
});
