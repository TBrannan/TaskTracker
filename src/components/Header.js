import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        className="btn btn"
        color={showAdd ? "red" : "green"}
        onClick={onAdd}
        text={showAdd ? "Close" : "Add"}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
  Student: "Stank",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in JS
// const HeaderStyle = {
//     color: 'blue',
//     opacity: '0.5'

// }

export default Header;
