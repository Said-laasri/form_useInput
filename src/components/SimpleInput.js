import { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [entredName, setEntredName] = useState("");
  const nameRef = useRef();

  const entredNmaeHundler = (e) => {
    setEntredName(e.target.value);
  };

  const formSubmittion = (e) => {
    e.preventDefault();

    if( entredName.trim() === ''){
      return;
    }
    
    const entredValue = nameRef.current.value;
    console.log(entredName, 'state');
    console.log(entredValue, "ref");
    setEntredName(''); //reset input with state
    // nameRef.current.value = ''; //reset input with ref // not ideal // manipulate Dom 
  };
  return (
    <form onSubmit={formSubmittion}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          ref={nameRef}
          onChange={entredNmaeHundler}
          type="text"
          id="name"
          value={entredName}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
