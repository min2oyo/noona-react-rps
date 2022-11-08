import './App.css';
import Box from './component/Box';

function App() {
  return (
    <>
      <div className='main'>
        <Box title="You" />
        <Box title="Computer" />
      </div>
      <div className='main'>
        <button>가위</button>
        <button>바위</button>
        <button>보</button>
      </div>
    </>
  );
}

export default App;
