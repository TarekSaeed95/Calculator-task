import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";
import { useEffect, useMemo, useState } from "react";
function ManageArea({ setTipAmount, setTotal, isReseted, setIsReseted }) {
  const [calcManager, setCalcManager] = useState({
    tip: 0,
    people: null,
    bill: null,
  });
  const { tip, people, bill } = calcManager;
  const tips = [5, 10, 15, 20, 25];
  const [currentTip,setCurrentTip] = useState();
  const [customTip,setCustomTip] = useState("");

  useEffect(() => {
    if (bill > 0 && tip > -1 && people > 0) {
      // const tipAmount=tip==0?0:(bill * (tip/100)) / 1 / people
      let tipAmount=0;
      let total=0;
      if(tip==0){
         tipAmount=0
        total=bill  / people + bill / people
      }else {
        tipAmount=(bill * (tip/100)) / people
        total=tipAmount+bill/people
      }

      setTipAmount(tipAmount)
      setTotal(total)
      // setTotal=
      // tip==0?setTotal((bill  / people + bill / people)):setTotal((bill *  (tip / 100)) / people + bill / people);
    }
  }, [calcManager]);

  //check every render if reseted button is clicked
  useEffect(() => {
    
    if (isReseted) {
      setCalcManager({ tip: 0, people: null, bill: null });
      setCurrentTip()
      setTotal(0);
      setTipAmount(0);
      setCustomTip("")
    }
  }, [isReseted]);

  //handle tip buttons if any of them clicked
  const tipClickHandler = (i) => {
    setCustomTip("")
    setIsReseted(false);
    setCurrentTip(i)
  };

  const customTipHandler=(e)=>{
    {
      setCustomTip(e.target.value)
      setIsReseted(false)
      setCurrentTip()
    }
  }
  //create tip buttons dynamically
  const tipBtns =
  useMemo(()=>
    tips.map((tip, index) => {
      let tipNum = "tip" + (index + 1);
      return (
        <div key={index} className={`${tipNum} btn ${currentTip === index ? "choosed": ""}`} 
        onClick={()=>{tipClickHandler(index)
        }}
        >
          <label htmlFor={tipNum}>{tip}%</label>
          <input type="radio" name="tip" value={tip} id={tipNum} hidden />
        </div>
      );
    })
  ,[currentTip])


  return (
    <section className="manage-area">
      <section className="bill">
        <div className="text">
          <label htmlFor="bill">Bill</label>
          {bill === 0 && <span className="error">can't be zero</span>}
        </div>

        <div className="input">
          <img src={dollar} alt="dollar-sign" />
          <input
            id="bill"
            type="number"
            onChange={(e) => {
              setCalcManager((prev) => ({ ...prev, bill: +e.target.value }));
              setIsReseted(false);
            }}
            value={bill === null ? "" : bill}
            placeholder="0"
            className={bill === 0 ? "error" : null}
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
            setCalcManager((prev) => ({ ...prev, tip: e.target.value }));
            setIsReseted(false);
          }}
        >
          {tipBtns}
          <div className="custom-btn btn" 
          >
            <input name="tip" placeholder="Custom"
            type="number"
            min={0}
            onChange={(e)=>customTipHandler(e)
          }
            value={customTip}
            />
          </div>
        </form>
      </section>
      <section className="people">
        <div className="text">
          <label htmlFor="people">Number of People</label>
          {people === 0 && <span className="error">can't be zero</span>}
        </div>
        <div className="input">
          <img src={person} alt="people-sign" />
          <input
            id="people"
            type="number"
            value={people === null ? "" : people}
            placeholder="0"
            onChange={(e) => {
              setCalcManager((prev) => ({ ...prev, people: e.target.value }));
              setIsReseted(false);
            }}
            className={people === 0 ? "error" : null}
          />
        </div>
      </section>
    </section>
  );
}

export default ManageArea;
