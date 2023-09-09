import "./App.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  return (
    <div className="container">
      <h1>CLICA AI ARROMBADO!!</h1>
      <button onClick={() => setActive(!active)}>Aqui</button>
      <div>{active && <img className="imge" src="meme.jpg" />}</div>
    </div>
  );
}

export default App;
