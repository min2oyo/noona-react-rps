import '../App.css';

const Box = (props) => {
  return (
    <>
      <div className="box">
        <h1>{props.title}</h1 >
        <img className='item-img' src="https://cdn-icons-png.flaticon.com/512/4975/4975327.png" />
        <h2>Win</h2>
      </div>
    </>
  );
};

export default Box;