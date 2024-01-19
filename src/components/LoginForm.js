import React, { useState } from "react";
function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !password) {
      setErrorMessage("Both username and password are required.");
    } else {
      setErrorMessage(""); // Perform actual login logic here... } };
    }
  };

  return (
    <div>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {errorMessage && <p id="errorMessage" >errorMessage</p>}
      <button onClick={handleSubmit}>Login</button>
    </div>
  );
}

export default LoginForm;
