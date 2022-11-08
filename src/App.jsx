import { useState } from 'react';
import './App.css';
import Box from './component/Box';

function App() {

  const choice = {
    Rock: {
      name: "Rock",
      img: "https://w7.pngwing.com/pngs/215/800/png-transparent-rock-rock-angle-rectangle-stone.png"
    },
    Scissor: {
      name: "Scissor",
      img: "https://cdn-icons-png.flaticon.com/512/4975/4975327.png"
    },
    Paper: {
      name: "Paper",
      img: "https://t.pimg.jp/062/164/041/5/62164041.jpg"
    }
  };

  const [userSelect, setUserSelect] = useState(null);

  // const [aiSelect, setAiSelect] = useState(null);
  // const kind = [choice.Rock.name, choice.Scissor.name, choice.Paper.name];
  // setAiSelect(kind[Math.floor(Math.random() * 3) + 1]);
  // console.log("z", kind[0]);



  const play = (kind) => {
    setUserSelect(kind);
    console.log("클릭", userSelect);
  };

  return (
    <>
      <div className='main'>
        <Box title="You" item={userSelect} />
        <Box title="Computer" />
      </div>
      <div className='main'>
        <button onClick={() => play(choice.Scissor)}>가위</button>
        <button onClick={() => play(choice.Rock)}>바위</button>
        <button onClick={() => play(choice.Paper)}>보</button>
      </div>
    </>
  );
}

export default App;
