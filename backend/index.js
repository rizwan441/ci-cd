const express = require("express");
const { Pool } = require("pg");
const cors = require("cors");
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV || "development"}`,
});

const app = express();

// ✅ Proper usage of middleware
app.use(cors());

const port = process.env.PORT || 5000;

// ✅ PostgreSQL pool setup
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});

// ✅ Sample route
app.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.send(result.rows[0]);
  } catch (err) {
    console.error("DB Error:", err);
    res.status(500).send("DB error: " + err.message);
  }
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`✅ Backend listening on port ${port}`);
});
