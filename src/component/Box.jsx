import '../App.css';

const Box = (props) => {
  // console.log("<Box />: ", props.item);
  return (
    <>
      <div className="box">
        <h1>{props.title}</h1 >
        <img className='item-img' src={props.item?.img} />
        <h2>{props.result}</h2>
      </div>
    </>
  );
};

export default Box;