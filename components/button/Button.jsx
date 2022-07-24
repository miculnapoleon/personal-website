import styles from "./styles.module.scss";
//export a function that returns a html

const Button = ({ handleClick, name, id }) => {
  return (
    <div key={id} onClick={handleClick} className={styles.btnContainer}>
      {name}
    </div>
  );
};

export default Button;
