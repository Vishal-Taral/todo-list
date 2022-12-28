import "./Input.scss";

const Inputs = () => {
  const ChangeHandler = (event) => {
    console.log(event.target.value);
  }
  return (
    <div>
      <div className="Input-box">
        <input
          type="text"
          placeholder="Type Here To Search"
          className="input"
          onChange={ChangeHandler}
        ></input>

      </div>

      
    </div>
  );
};

export default Inputs;
