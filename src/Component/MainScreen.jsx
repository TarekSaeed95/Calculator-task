import React from "react";
import ManageArea from "./ManageArea";
import ResultArea from "./ResultArea";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
import { useEffect } from "react";
function MainScreen() {
  const [tip, setTip] = useState(0);
  const [people, setPeople] = useState(0);
  const [bill, setBill] = useState(0);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isReseted,setIsReset]=useState(false)
  useEffect(() => {
    if (bill != NaN && people != NaN && tip != NaN) {
      if (bill > 0 && tip > 0 && people > 0) {
        setTipAmount(((bill * (tip / 100)) / people).toFixed(2));
        setTotal(((bill * (tip / 100)) / people + bill / people).toFixed(2));
      }
    }
  }, [bill, people, tip]);
  const resetHandler = () => {
    setTip(0);
    setPeople(0);
    setBill(0);
    setTotal(0);
    setTipAmount(0);
    setIsReset(true);
  };
  return (
    <div className="main-screen">
      <img src={logo} alt="" />
      <div className="content">
        <ManageArea
          bill={bill}
          people={people}
          tip={tip}
          setTip={setTip}
          setPeople={setPeople}
          setBill={setBill}
          isReseted={isReseted}
          setIsReset={setIsReset}
        />
        <ResultArea
          total={total}
          tipAmount={tipAmount}
          resetHandler={resetHandler}
        />
      </div>
    </div>
  );
}

export default MainScreen;
