import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {

  const choice = {
    Scissor: {
      name: "Scissor",
      img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png"
    },
    Rock: {
      name: "Rock",
      img: "https://w7.pngwing.com/pngs/215/800/png-transparent-rock-rock-angle-rectangle-stone.png"
    },
    Paper: {
      name: "Paper",
      img: "https://t.pimg.jp/062/164/041/5/62164041.jpg"
    }
  };

  const [userSelect, setUserSelect] = useState(null);
  const [aiSelect, setAiSelect] = useState(null);

  const play = kind => {
    setUserSelect(kind);
    setAiSelect(Object.values(choice)[Math.floor(Math.random() * Object.keys(choice).length)]);
  };

  return (
    <>
      <div className='main'>
        <Box title="You" item={userSelect} />
        <Box title="Computer" item={aiSelect} />
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
