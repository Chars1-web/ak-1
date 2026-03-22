import express from "express";
import fetch from "node-fetch";
import Papa from "papaparse";

const app = express();
const PORT = process.env.PORT || 3000;

const https://docs.google.com/spreadsheets/d/e/2PACX-1vSe6mW01Q2kgWDNkm-= "https://docs.google.com/spreadsheets/d/e/2PACX-1vSe6mW01Q2kgWDNkm-WDUtJziEmKHcpvvP-TKHy84jTjTXE_qIjEQZPDDPb36Xqn5k8t5-kpB6ipq1N/pub?gid=712264809&single=true&output=csv"; // Google Sheet CSV link

app.get("/api/sheet", async (req, res) => {
  const response = await fetch(https://docs.google.com/spreadsheets/d/e/2PACX-1vSe6mW01Q2kgWDNkm-);
  const csvText = await response.text();
  const parsed = Papa.parse(csvText, { header: true });
  res.json(parsed.data); // returns JSON array
});

app.listen(PORT, () => console.log(`API running on port ${PORT}`));