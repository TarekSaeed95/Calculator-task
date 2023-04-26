import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";
import { useEffect, useRef, useState } from "react";
function ManageArea({
  setTipAmount,
  setTotal,
  isReseted,
  setIsReseted,
}) {
  const [calcManager,setCalcManager] = useState({
    tip:0,people:null,bill:null
  });
  const {tip,people,bill}=calcManager
  const allBtns = document.querySelectorAll(".btn");
  const CustomTip = useRef();
  const tips = [5, 10, 15, 20, 25];

  useEffect(() => {
    if (bill > 0 && tip > 0 && people > 0) {
      setTipAmount(((bill * (tip / 100)) / people));
      setTotal(((bill * (tip / 100)) / people + bill / people));
    }
  }, [calcManager]);

  //check every render if reseted button is clicked
  useEffect(() => {
    if (isReseted) {
      allBtns.forEach((btn) => btn.classList.remove("choosed"));
      CustomTip.current.value = null;
    }
    if(isReseted){
      setCalcManager({ tip:0,people:null,bill:null})

    setTotal(0);
    setTipAmount(0);
    }
  },[isReseted]);

  //handle inputs depend on their state name
  const clearTips = () => {
    allBtns.forEach((btn) => {
      btn.classList.remove("choosed");
    });
  };

  //handle tip buttons if any of them clicked
  const tipClickHandler = (e) => {
    setIsReseted(false)
    clearTips(e);
    let allBtns = e.currentTarget.parentNode.childNodes;
    allBtns.forEach((btn) => {
      btn.classList.remove("choosed");
    });
    e.currentTarget.classList.add("choosed");
  };

  //create tip buttons dynamically
  const tipBtns = tips.map((tip, index) => {
    let tipNum = "tip" + (index + 1);
    return (
      <div key={index} className={`${tipNum} btn `} onClick={tipClickHandler}>
        <label htmlFor={tipNum}>{tip}%</label>
        <input type="radio" name="tip" value={tip} id={tipNum} hidden />
      </div>
    );
  });

  return (
    <section className="manage-area">
      <section className="bill">
        <div className="text">
          <label htmlFor="bill">Bill</label>
          {bill == 0 && <span className="error">can't be zero</span>}
        </div>

        <div className="input">
          <img src={dollar} alt="dollar-sign"/>
          <input
            id="bill"
            type="number"
            onChange={(e) => {
              setCalcManager((prev)=>({...prev,bill:+e.target.value}))
              setIsReseted(false)
            }
          }
            value={bill == null ? "" : bill}
            placeholder="0"
            className={bill == 0 ? "error" : null}
          />
        </div>
      </section>
      <section className="tip-group">
        <label className="main-label" htmlFor="tip">
          Select tip %
        </label>
        <form
          className="button-group"
          onChange={(e) => {
            setCalcManager((prev)=>({...prev,tip:e.target.value}))
            setIsReseted(false)
          }}
        >
          {tipBtns}
          <div className="custom-btn btn" onClick={tipClickHandler}>
            <input name="tip" placeholder="Custom" ref={CustomTip} />
          </div>
        </form>
      </section>
      <section className="people">
        <div className="text">
          <label htmlFor="people">Number of People</label>
          {people == 0 && <span className="error">can't be zero</span>}
        </div>
        <div className="input">
          <img src={person} alt="people-sign" />
          <input
            id="people"
            type="number"
            value={people == null ? "" : people}
            placeholder="0"
            onChange={(e) => {
              setCalcManager((prev)=>({...prev,people:e.target.value}))
              setIsReseted(false)
            }}
            className={people == 0 ? "error" : null}
          />
        </div>
      </section>
    </section>
  );
}

export default ManageArea;
