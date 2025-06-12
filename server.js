const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const bodyParser = require("body-parser");
const axios = require("axios"); // Import axios

const app = express();
app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = "your_secret_key"; // Change to a secure value

// Load users from JSON server running on port 5000
const getUsers = async () => {
  try {
    const response = await axios.get("http://localhost:5000/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching users:", error);
    return [];
  }
};

// Login endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const users = await getUsers();
  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: "1h" });
  res.json({ token });
});

app.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const users = await getUsers();
  
    if (users.find((user) => user.username === username)) {
      return res.status(400).json({ message: "User already exists" });
    }
  
    const newUser = { id: users.length + 1, username, password };
    try {
        await axios.post("http://localhost:5000/users", newUser
        );
      } catch (error) {
        res.status(500).json({ message: "Failed to add user", error: error.message });
      }    
    
  
    const token = jwt.sign({ id: newUser.id, username: newUser.username }, SECRET_KEY, { expiresIn: "1h" });
     res.json({ message: "Signup successful!", token });
  });
  

// Protected Route Middleware
// const authenticate = (req, res, next) => {
//   const token = req.headers.authorization?.split(" ")[1];
//   if (!token) return res.status(403).json({ message: "Unauthorized" });

//   jwt.verify(token, SECRET_KEY, (err, decoded) => {
//     if (err) return res.status(401).json({ message: "Invalid token" });
//     req.user = decoded;
//     next();
//   });
// };

// Example protected route
// app.get("/protected", authenticate, (req, res) => {
//   res.json({ message: "Access granted!", user: req.user });
// });

app.listen(3000, () => console.log("Server running on port 3000"));