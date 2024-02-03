require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
app.use(cors());

app.use(express.json());

const recipeRoute = require("./routes/recipeRoute");
const newsletterRoute = require("./routes/newsletterRoute");

app.use("/api/recipes", recipeRoute);
app.use("/api/newsletter", newsletterRoute);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${process.env.BASE_URL}:${PORT}`);
});
