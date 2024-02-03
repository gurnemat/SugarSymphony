const express = require("express");
const router = express.Router();

const fs = require("fs");

// --- SUBSCRIBE TO EMAIL ---
router.post("/subscribe", (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    // Read existing emails from the JSON file
    const existingEmails = fs.readFileSync("./data/emails.json");
    const parsedEmails = JSON.parse(existingEmails);
    console.log(parsedEmails);
    console.log(email);

    // Add the new email to the array
    parsedEmails.push(email);

    // Write the updated emails back to the JSON file
    fs.writeFileSync(
      "./data/emails.json",
      JSON.stringify(parsedEmails, null, 2)
    );

    res.status(200).json({ message: "Email saved successfully" });
  } catch (error) {
    console.error("Error saving email:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
