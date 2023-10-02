import Button from "./Button";

const Nav = ({ reqType, setReqType }) => {
  return (
    <div className="btnGroup">
      <Button btnText="All" reqType={reqType} setReqType={setReqType} />
      <Button btnText="Completed" reqType={reqType} setReqType={setReqType} />
      <Button btnText="Running" reqType={reqType} setReqType={setReqType} />
    </div>
  );
};

export default Nav;
