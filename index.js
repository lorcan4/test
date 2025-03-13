const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("✅ Server is running on Vercel!");
});

// لا تستخدم app.listen() عند النشر على Vercel
module.exports = app;
