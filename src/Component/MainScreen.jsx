import ManageArea from "./ManageArea";
import ResultArea from "./ResultArea";
import logo from "../assets/images/logo.svg";
import { useState, useEffect } from "react";
function MainScreen() {
  // const [tip, setTip] = useState(0);
  // const [people, setPeople] = useState();
  // const [bill, setBill] = useState();
  // const [isReseted, setIsReseted] = useState(false);
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isReseted, setIsReseted] = useState(true);

  // useEffect(() => {
  //   if (bill > 0 && tip > 0 && people > 0) {
  //     setTipAmount(((bill * (tip / 100)) / people).toFixed(2));
  //     setTotal(((bill * (tip / 100)) / people + bill / people).toFixed(2));
  //   }
  // }, [bill, people, tip]);
  const resetHandler = () => {
    // setTip(null);
    // setPeople(null);
    // setBill(null);
    // setTotal(0);
    // setTipAmount(0);
    // setIsReset(true);
    // setIsDisabled(true);
  };
  return (
    <main className="main-screen">
      <img src={logo} alt="logo" />
      <section className="content">
        <ManageArea
          // bill={bill}
          // people={people}
          // tip={tip}
          // setTip={setTip}
          // setPeople={setPeople}
          // setBill={setBill}
          // isReseted={isReseted}
          // setIsReset={setIsReset}
          // setIsDisabled={setIsDisabled}
          setTipAmount={setTipAmount}
          setTotal={setTotal}
          isReseted={isReseted}
          setIsReseted={setIsReseted}

        />
        <ResultArea
          total={total}
          tipAmount={tipAmount}
          // resetHandler={resetHandler}
          // isDisabled={isDisabled}
          isReseted={isReseted}
          setIsReseted={setIsReseted}
        />
      </section>
    </main>
  );
}

export default MainScreen;
