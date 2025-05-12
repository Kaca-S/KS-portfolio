import { useState } from "react";
import "./Register.css";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    return minLength && hasSymbol;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validatePassword(password)) {
      setMessage("❌ Password must be at least 8 characters and contain at least one symbol.");
      return;
    }

    // Save to localStorage
    localStorage.setItem("game_username", username);
    localStorage.setItem("game_password", password);

    setMessage("✅ Registration successful!");
    setUsername("");
    setPassword("");
  };

  return (
    <div className="register-container">
      <h2>Register to Play</h2>
      <form onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Register;
