import "./Purpose.css";

const Purpose = ({ text, handleClick, isChecked, handleCheck }) => {
  return (
    <li className="purpose">
      <input
        className="checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheck}
      />
      {text}{" "}
      <span className="xbutton" onClick={handleClick}>
        {" "}
        x{" "}
      </span>
    </li>
  );
};

export default Purpose;
