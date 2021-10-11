import { useState } from "react";

const Fighting = function() {
  const [title, setTitle] = useState('김민지');

  function changeTitle() {
    setTitle(title === '김민지' ? '리액트 스터디 화이팅!!' : '김민지');
  }

  return (
    <div>
      <h1>{ title }</h1>
      <button onClick={ changeTitle }>타이틀 바꾸기</button>
    </div>
  );
};

export default Fighting;

// 위 코드를 한번에
// export default function Fighting() {
//   return <h1>Welcome</h1>;
// }