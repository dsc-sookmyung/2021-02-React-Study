import { useState } from "react";
import styles from "./Hello.module.css";

function showName() {
  console.log("Mike");
}

function showAge(age) {
  console.log(age);
}

function showText(txt) {
  console.log(txt);
}

export default function Hello() {
  const [name, setName] = useState('mike');

  function changeName() {
    setName(name === 'mike' ? 'jane' : 'mike');
  }

  return (
    <div>
      <h1 className={ styles.box }>Hello</h1>
      <button onClick={ showName }>Show name</button>
      <button onClick={() => {
          showAge(20);
      }}>Show age</button>
      <input type="text" onChange={ e => {
        const txt = e.target.value;
        showText(txt);
      } } />

      <h1>state</h1>
      <h2>{ name }</h2>
      <button onClick={ changeName }>Change</button>
    </div>
  );
}