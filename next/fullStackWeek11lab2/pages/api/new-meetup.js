async function handler(req, res) {
  const response = await fetch("http://localhost:8000/createMeeting", {
    method: "POST",
    body: JSON.stringify(req.body),
    headers: {
      "Content-Type": "application/json"    }
  });

  const data = await response.json();
  res.status(200).json({ status: "ok", meeting: data });
}
export default handler;