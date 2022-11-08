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

  const play = (kind) => {
    console.log("클릭", kind.name);
  };

  return (
    <>
      <div className='main'>
        <Box title="You" />
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
