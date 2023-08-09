import React, { useState } from "react";
import "./styles.css";
export default function App() {
  const [button1, setbutton1] = useState("#ffffff");
  const [button2, setbutton2] = useState("#FFFFFF");
  const [button3, setbutton3] = useState("#FFFFFF");
  const [button4, setbutton4] = useState("#FFFFFF");
  const [back, setback] = useState("#FFFFFF");

  function Back() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setback(color1);
  }

  function changebutton1() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setbutton1(color1);
    Back();
  }

  function changebutton2() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setbutton2(color1);
    Back();
  }
  function changebutton3() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setbutton3(color1);
    Back();
  }
  function changebutton4() {
    const color1 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    setbutton4(color1);
    Back();
  }

  return (
    <div
      style={{
        backgroundColor: back,
        minHeight: "98vh",
        overflow: "hidden",
        textAlign: "center"
      }}
    >
      <h1>Randomized color</h1>
      <button style={{ backgroundColor: button1 }} onClick={changebutton1}>
        Random
      </button>

      <button style={{ backgroundColor: button2 }} onClick={changebutton2}>
        color
      </button>
      <button style={{ backgroundColor: button3 }} onClick={changebutton3}>
        change
      </button>
      <button style={{ backgroundColor: button4 }} onClick={changebutton4}>
        App
      </button>
    </div>
  );
}
