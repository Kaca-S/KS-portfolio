import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem("game_username");
    const storedPassword = localStorage.getItem("game_password");

    if (username === storedUsername && password === storedPassword) {
      setMessage("✅ Login successful!");
      setTimeout(() => {
        navigate("/cat-facts"); // ✅ Redirect to minigame
      }, 1000);
    } else {
      setMessage("❌ Invalid username or password.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login to Play</h2>
      <form onSubmit={handleLogin}>
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

        <button type="submit">Login</button>
      </form>

      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default Login;
