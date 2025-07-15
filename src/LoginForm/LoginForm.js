import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-sm mx-auto mt-10 border rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="w-full mb-3 p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-3 p-2 border"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default LoginForm;
