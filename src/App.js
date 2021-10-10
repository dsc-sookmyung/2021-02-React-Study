import logo from './logo.svg';
import './App.css';
import Title from './component/Title';
import Title_btn from './component/Title_btn';
import React, {Component} from 'react';
import { useState } from 'react';

function App() {

  var styles={paddingLeft: "50px"};
  const [title, setTitle] = useState('민휘');

  return (
    <div style={styles}>
      <Title content={title}/>
      <Title_btn 
        onChangePage = {function(){
          setTitle(title === '민휘'?'리액트 스터디 화이팅!':'민휘');
        }}
      />
    </div>
  );
}

export default App;