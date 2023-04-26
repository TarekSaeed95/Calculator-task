import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";
import { useCallback, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

function ManageArea({ setTipAmount, setTotal, isReseted, setIsReseted }) {
  const [calcManager, setCalcManager] = useState({
    tip: 0,
    people: null,
    bill: null,
  });
  const [currentTip, setCurrentTip] = useState();
  const [customTip, setCustomTip] = useState("");

  const { tip, people, bill } = calcManager;
  const tips = useMemo(() => [5, 10, 15, 20, 25, customTip], [customTip]);

  useEffect(() => {
    if (bill > 0 && tip > -1 && people > 0) {
      let tipAmount = 0;
      let total = 0;
      if (tip == 0) {
        tipAmount = 0;
        total = bill / people + bill / people;
      } else {
        tipAmount = (bill * (tip / 100)) / people;
        total = tipAmount + bill / people;
      }
      setTipAmount(tipAmount);
      setTotal(total);
    }
  }, [bill, people, setTipAmount, setTotal, tip]);

  //check every render if reseted button is clicked
  useEffect(() => {
    if (isReseted) {
      setCalcManager({ tip: 0, people: null, bill: null });
      setCurrentTip();
      setTotal(0);
      setTipAmount(0);
      setCustomTip("");
    }
  }, [isReseted, setTipAmount, setTotal]);

  //handle tip buttons if any of them clicked

  const tipClickHandler = useCallback(
    (e, i) => {
      setCalcManager((prev) => ({ ...prev, tip: +e.target.value }));
      setIsReseted(false);
      setCurrentTip(i);
      if (i === tips.length - 1) {
        setCustomTip(e.target.value);
      } else {
        setCustomTip("");
      }
    },
    [setIsReseted, tips.length]
  );

  //create tip buttons dynamically
  const tipBtns = useMemo(
    () =>
      tips.map((tip, index) => {
        let tipNum = "tip" + (index + 1);
        return index !== tips.length - 1 ? (
          <div
            key={index}
            className={`${tipNum} btn ${currentTip === index ? "choosed" : ""}`}
            onClick={(e) => {
              tipClickHandler(e, index);
            }}
          >
            <label htmlFor={tipNum}>{tip}%</label>
            <input type="radio" name="tip" value={tip} id={tipNum} hidden />
          </div>
        ) : (
          <div className="custom-btn btn" key={index}>
            <input
              name="tip"
              placeholder="Custom"
              type="number"
              min={0}
              onChange={(e) => tipClickHandler(e, index)}
              value={tip}
            />
          </div>
        );
      }),
    [currentTip, tipClickHandler, tips]
  );

  return (
    <section className="manage-area">
      <section className="bill">
        <div className="text">
          <label htmlFor="bill">Bill</label>
          {bill === 0 && <span className="error">can&apos;t be zero</span>}
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
        <div className="button-group">{tipBtns}</div>
      </section>
      <section className="people">
        <div className="text">
          <label htmlFor="people">Number of People</label>
          {people === 0 && <span className="error">can&apos;t be zero</span>}
        </div>
        <div className="input">
          <img src={person} alt="people-sign" />
          <input
            id="people"
            type="number"
            value={people === null ? "" : people}
            placeholder="0"
            onChange={(e) => {
              setCalcManager((prev) => ({ ...prev, people: +e.target.value }));
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
ManageArea.propTypes = {
  setTipAmount: PropTypes.func,
  setTotal: PropTypes.func,
  isReseted: PropTypes.boolean,
  setIsReseted: PropTypes.func,
};
