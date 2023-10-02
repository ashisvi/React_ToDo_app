const Button = ({ btnText, reqType, setReqType }) => {
  return (
    <button
      className={reqType === btnText.toLowerCase() ? "activeBtn" : null}
      onClick={() => setReqType(btnText.toLowerCase())}
    >
      {btnText}
    </button>
  );
};

export default Button;
