import { useEffect, useState } from "react";

function ResultArea({tipAmount,total,setIsReseted,isReseted}) {
  const [isDisabled, setIsDisabled] = useState(true);
useEffect(()=>{
  if(isReseted){
    setIsDisabled(true)
  }else setIsDisabled(false)
},[isReseted])
  return (
    <section className="result-area">
      <section className="tip-amount">
          <div className="text">
            <div className="head">Tip Amount</div>
            <p>/ person</p>
          </div>
          <div className="tip-result">
            ${tipAmount==0?"0.00":tipAmount}
            
          </div>
      </section>
      <section className="total">
          <div className="text">
            <div className="head">Total</div>
            <p>/ person</p>
          </div>
          <div className="total-result">
          ${total==0?"0.00":total}
          </div>
      </section>
      <button  
      onClick={()=>setIsReseted(true)}
      className={isDisabled?"disabled":null}
      >
        Reset
      </button>
    </section>
  )
}

export default ResultArea