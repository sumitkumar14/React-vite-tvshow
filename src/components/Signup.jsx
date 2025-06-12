import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Username and password are required!");
      return;
    }

    const response = await fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (data.token) {
      localStorage.setItem("token", data.token);
      alert("Signup successful!");
      navigate("/"); // Redirect to home page
    } else {
      setError(data.message || "Signup failed");
    }
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-md-center">
        <Col md={6}>
          <h2 className="text-center">Sign Up</h2>
          <Form onSubmit={handleSignup}>
            <Form.Group controlId="formUsername">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            {error && <p className="text-danger">{error}</p>}

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
          </Form>

          <p className="text-center mt-3">
            Already have an account? <span style={{ color: "blue", cursor: "pointer" }} onClick={() => navigate("/login")}>Login here</span>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;