import express from "express";
import { registerUser, loginUser } from "../Backend/Controllers/user.controllers.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Register and login routes
app.post("/register", registerUser);
app.post("/login", loginUser);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
