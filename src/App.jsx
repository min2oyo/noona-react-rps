import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {

  // DB
  const choice = {
    Scissor: {
      img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png"
    },
    Rock: {
      img: "https://w7.pngwing.com/pngs/215/800/png-transparent-rock-rock-angle-rectangle-stone.png"
    },
    Paper: {
      img: "https://t.pimg.jp/062/164/041/5/62164041.jpg"
    }
  };

  // 변수
  const Scissor = Object.values(choice)[0]; // 가위 객체
  const Rock = Object.values(choice)[1];    // 바위 객체
  const Paper = Object.values(choice)[2];   // 보 객체
  const results = ["lose", "win", "tie"];   // 결과
  const [userSelect, setUserSelect] = useState(null); // 사용자
  const [aiSelect, setAiSelect] = useState(null);     // 컴퓨터
  const [userResult, setUserResult] = useState(null); // 사용자 결과
  const [aiResult, setAiResult] = useState(null);     // 컴퓨터 결과

  // 함수
  const play = kind => {  // 가위바위보 버튼 클릭

    let user = kind;  // 유저 선택
    let ai = Object.values(choice)[Math.floor(Math.random() * Object.keys(choice).length)]; // 컴퓨터 선택

    setUserSelect(user);
    setAiSelect(ai);

    if (user === ai) {  // 무승부
      setUserResult(results[2]);
      setAiResult(results[2]);
    }
    if ((user === Scissor && ai === Paper) || (user === Rock && ai === Scissor) || (user === Paper && ai === Rock)) { // 유저 승
      setUserResult(results[1]);
      setAiResult(results[0]);
    }
    if ((user === Scissor && ai === Rock) || (user === Rock && ai === Paper) || (user === Paper && ai === Scissor)) { // 컴퓨터 승
      setUserResult(results[0]);
      setAiResult(results[1]);
    }

  };

  // 출력
  return (
    <>
      <div className='main'>
        <Box title="You" item={userSelect} result={userResult} />
        <Box title="Computer" item={aiSelect} result={aiResult} />
      </div>
      <div className='main'>
        <button onClick={() => play(Object.values(choice)[0])}>가위</button>
        <button onClick={() => play(Object.values(choice)[1])}>바위</button>
        <button onClick={() => play(Object.values(choice)[2])}>보</button>
      </div>
    </>
  );

}

export default App;
