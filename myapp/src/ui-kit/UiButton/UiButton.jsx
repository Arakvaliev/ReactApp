import styles from "./styles.module.css";

const UiButton = (props) => {
  const { text, OnClick } = props;
  return <button onClick={OnClick}>{text}</button>;
};

export default UiButton;
