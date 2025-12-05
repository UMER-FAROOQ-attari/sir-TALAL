import { useState } from "react";
import "./App.css";

function App() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [msg, setMsg] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (password.length > 6) {
      setMsg("Sign Up Successful!");
      console.log("Sign Up Successful", email, password); 
    } else {
      setMsg("Password is too short!");
      console.log("Password is short");
    }
  }

  return (
    <>
      <div className=" text-center border p-5 border-4 w-fit bg-amber-300  rounded-2xl  m-5">
        <h1 className="text-2xl font-bold "> React Sign Up Form</h1>
        
        <p className="text-lg font-semibold text-red-700">{msg}</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="border p-3 m-3 rounded-2xl shadow shadow-amber-900/100"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="password"
            className="border p-3 m-3 rounded-2xl shadow shadow-yellow-700/100"
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="submit"
            className="border p-2 m-3 rounded-2xl font-medium bg-amber-900 text-amber-100"
          />
        </form>
      </div>
    </>
  );
}

export default App;
