const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: 'db',
  user: 'postgres',
  password: 'password',
  database: 'mydb',
  port: 5432
});

app.get("/api/messages", async (req, res) => {
  const result = await pool.query("SELECT * FROM messages");
  res.json(result.rows);
});

app.post("/api/messages", async (req, res) => {
  const { content } = req.body;
  await pool.query("INSERT INTO messages (content) VALUES ($1)", [content]);
  res.sendStatus(201);
});

app.listen(5000, () => {
  console.log("Backend listening on port 5000");
});
