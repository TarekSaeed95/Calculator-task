import ManageArea from "./ManageArea";
import ResultArea from "./ResultArea";
import logo from "../assets/images/logo.svg";
import { useState } from "react";
function MainScreen() {
  const [tipAmount, setTipAmount] = useState(0);
  const [total, setTotal] = useState(0);
  const [isReseted, setIsReseted] = useState(true);
  return (
    <main className="main-screen">
      <img src={logo} alt="logo" />
      <section className="content">
        <ManageArea
          setTipAmount={setTipAmount}
          setTotal={setTotal}
          isReseted={isReseted}
          setIsReseted={setIsReseted}
        />
        <ResultArea
          total={total}
          tipAmount={tipAmount}
          isReseted={isReseted}
          setIsReseted={setIsReseted}
        />
      </section>
    </main>
  );
}

export default MainScreen;
