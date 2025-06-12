import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { Form, Button } from "react-bootstrap";
import { authenticate } from "@/features/counterSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Email and password are required!");
      return;
    }
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: email, password: password }),
        });
      
        const data = await response.json();
      
        if (data.token) {
          localStorage.setItem("token", data.token);
          alert("Login successful!");
          dispatch(authenticate(true));
          navigate("/");
        } else {
          alert("Invalid credentials");
          dispatch(authenticate(false));
        }
    console.log("Logged in with:", { email, password });
    setError(""); // Clear any previous error
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        {error && <p className="text-danger">{error}</p>}

        <Button variant="primary" type="submit">
          Login
        </Button>
      <p>Don't have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/signup")}>Sign up here</span></p>
      </Form>
    </div>
  );
};

export default Login;