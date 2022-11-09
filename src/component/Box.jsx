import '../App.css';

const Box = (props) => {

  // CSS
  const win = { border: "5px solid blue" };
  const lose = { border: "5px solid red" };
  const tie = { border: "5px solid black" };

  return (
    <>
      <div className="box" style={props.result === "win" ? win : props.result === "lose" ? lose : tie}>
        <h1>{props.title}</h1 >
        <img className='item-img' src={props.item?.img} />
        <h2>{props.result}</h2>
      </div>
    </>
  );
};

export default Box;