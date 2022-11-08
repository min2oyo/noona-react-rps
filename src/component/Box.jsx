import '../App.css';

const Box = (props) => {
  console.log("여기", props.item);
  return (
    <>
      <div className="box">
        <h1>{props.title}</h1 >
        <img className='item-img' src={props.item?.img} />
        <h2>Win</h2>
      </div>
    </>
  );
};

export default Box;