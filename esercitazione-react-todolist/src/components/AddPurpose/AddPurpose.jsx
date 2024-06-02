import { useState } from "react";
import { nanoid } from "nanoid";
import "./AddPurpose.css";

const AddPurpose = ({ setPurposes = () => {}, purpose = [] }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!inputValue.trim()) {
      return;
    }
    setPurposes([...purpose, { id: nanoid(), text: inputValue }]);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="input-form"
        type="text"
        placeholder="Insert your Task"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />{" "}
      <button type="submit" className="insert-button">
        +
      </button>
    </form>
  );
};

export default AddPurpose;
