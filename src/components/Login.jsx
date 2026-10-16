import { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    // Empty field validation
    if (!email || !password) {
      setError("Please enter email and password");
      return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Mock role data
    let role = "";

    if (email === "student@gmail.com" && password === "student123") {
      role = "Student";
    } else if (
      email === "mentor@gmail.com" &&
      password === "mentor123"
    ) {
      role = "Mentor";
    } else {
      setError("Invalid email or password");
      return;
    }

    onLogin(role);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Institute Login</h1>

        <p className="login-subtitle">
          Login to access your dashboard
        </p>

        <form onSubmit={handleLogin}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="error">{error}</p>}

          <button type="submit">
            Login
          </button>
        </form>

        <div className="demo-login">
          <p><b>Student:</b> student@gmail.com / student123</p>
          <p><b>Mentor:</b> mentor@gmail.com / mentor123</p>
        </div>
      </div>
    </div>
  );
}

export default Login;