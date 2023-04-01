import { useState } from "react";

const SimpleInput = (props) => {
  const [entredName, setEntredName] = useState("");
  const [entredNameTouched, setEntredNameTouched] = useState(false);
  const entredNameIsValid = entredName.trim() !== "";
  const nameInputIsInvalid = !entredNameIsValid && entredNameTouched;

  let formIsValid = false;
  if (entredNameIsValid) {
    formIsValid = true;
  }

  const entredNmaeHundler = (e) => {
    setEntredName(e.target.value);
  };

  const entredNameBlurHundler = (e) => {
    setEntredNameTouched(true);
  };

  const formSubmittion = (e) => {
    e.preventDefault();

    setEntredNameTouched(true);

    if (!entredNameIsValid) {
      return;
    }

    setEntredName(""); //reset input with state

    setEntredNameTouched(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmittion}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          onChange={entredNmaeHundler}
          type="text"
          onBlur={entredNameBlurHundler}
          id="name"
          value={entredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
