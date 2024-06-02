const NavigationItem = ({
  text,
  link,
  handleClick,
  isAtctive = false,
  className = "navigation-item",
}) => {
  return (
    <li onClick={handleClick} className={className}>
      <a href={link}>{isAtctive ? <strong>text</strong> : text}</a>
    </li>
  );
};

export default NavigationItem;
