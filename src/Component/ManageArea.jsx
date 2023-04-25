import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";
import { useEffect, useRef } from "react";
function ManageArea({
  setBill,
  setTip,
  setPeople,
  bill,
  people,
  isReseted,
  setIsReset,
  setIsDisabled,
}) {
  const allBtns = document.querySelectorAll(".btn");
  const CustomTip = useRef();

  const clearTips = (e) => {
    allBtns.forEach((btn) => {
      btn.classList.remove("choosed");
    });
  };
  const fieldHandler = (e, setState) => {
    setState(+e.target.value);
    setIsDisabled(false);
  };
  const clickHandler = (e) => {
    clearTips(e);
    let allBtns = e.currentTarget.parentNode.childNodes;
    allBtns.forEach((btn) => {
      btn.classList.remove("choosed");
    });
    e.currentTarget.classList.add("choosed");
  };
  useEffect(() => {
    if (isReseted) {
      allBtns.forEach((btn) => btn.classList.remove("choosed"));
      CustomTip.current.value = null;
      setIsReset(false);
    }
  });
  return (
    <div className="manage-area">
      <div className="bill">
        <div className="text">
          <label htmlFor="bill">Bill</label>
          {bill == 0 && <span className="error">can't be zero</span>}
        </div>

        <div className="input">
          <img src={dollar} />
          <input
            id="bill"
            type="number"
            onChange={(e) => {
              fieldHandler(e, setBill);
            }}
            value={bill == null ? "" : bill}
            placeholder="0"
            className={bill == 0 ? "error" : null}
          />
        </div>
      </div>
      <div className="tip-group">
        <label className="main-label" htmlFor="tip">
          Select tip %
        </label>
        <form
          className="button-group"
          onChange={(e) => {
            fieldHandler(e,setTip)

          }}
        >
          <div className="tip1 btn " onClick={clickHandler}>
            <label htmlFor="tip1">5%</label>
            <input type="radio" name="tip" value="5" id="tip1" hidden />
          </div>
          <div className="tip2 btn " onClick={clickHandler}>
            <input type="radio" name="tip" value="10" id="tip2" hidden />
            <label htmlFor="tip2">10%</label>
          </div>
          <div className="tip3 btn" onClick={clickHandler}>
            <input type="radio" name="tip" value="15" id="tip3" hidden />
            <label htmlFor="tip3">15%</label>
          </div>
          <div className="tip4 btn" onClick={clickHandler}>
            <input type="radio" name="tip" value="20" id="tip4" hidden />
            <label htmlFor="tip4">20%</label>
          </div>
          <div className="tip5 btn" onClick={clickHandler}>
            <input type="radio" name="tip" value="25" id="tip5" hidden />
            <label htmlFor="tip5">25%</label>
          </div>
          <div className="custom-btn btn" onClick={clickHandler}>
            <input name="tip" placeholder="Custom" ref={CustomTip} />
          </div>
        </form>
      </div>
      <div className="people">
        <div className="text">
          <label htmlFor="people">Number of People</label>
          {people == 0 && <span className="error">can't be zero</span>}
        </div>
        <div className="input">
          <img src={person} alt="" />
          <input
            id="people"
            type="number"
            value={people == null ? "" : people}
            placeholder="0"
            onChange={(e) => {
              fieldHandler(e, setPeople);
            }}
            className={people == 0 ? "error" : null}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageArea;
