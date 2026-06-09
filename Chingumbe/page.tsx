"use client";

import { useState } from "react";

export default function Home() {
  const [display, setDisplay] = useState("");
  
return (
  <main>
    <h1>Calculator App</h1>

    <input
      type="text"
      value={display}
      readOnly
    />

    <br />
    <br />

    <button onClick={() => setDisplay(display + "1")}>
      1
    </button>

    <button onClick={() => setDisplay(display + "2")}>
      2
    </button>

    <button onClick={() => setDisplay(display + "3")}>
      3
    </button>
  </main>
);
}