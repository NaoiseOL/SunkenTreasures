async function handler(req, res) {
  const response = await fetch("https://crispy-memory-9v676gqvx4p36vq-8000.app.github.dev//createMeeting", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json"    }
  });

  const data = await response.json();
  res.status(200).json({ status: "ok", meeting: data });
}
export default handler;