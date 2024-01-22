
const MyButton = ({text, type, onClick} ) => {

  const btnType = ["positive", "negative"].includes(type) ? type :  "default";  // type이 positive, negative가 아니면 default로 처리

  return (
    <button className={["MyButton", `MyButton_${btnType}`].join(" ")} onClick={onClick}>{text}</button>
  );
}

MyButton.defaultProps = {type : "default"};

export default MyButton;