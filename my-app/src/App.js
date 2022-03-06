import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import Register from "./Register";
import { useState } from "react";
import UserData from "./UserData";

function App() {
  const [state, setState] = useState(false);
  const handleBtn = () => {
    setState(!state);
  };
  console.log(state);

  return (
    <div>
      {/* {state ? <Login /> : <Register />}
      <button onClick={handleBtn}>Login OR Register</button> */}
      <UserData />
    </div>
  );
}

export default App;
