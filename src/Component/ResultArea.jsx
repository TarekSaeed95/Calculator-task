import React from 'react'


function ResultArea({tipAmount,total,resetHandler,isDisabled}) {
  return (
    <div className="result-area">
      <div className="tip-amount">
          <div className="text">
            <div className="head">Tip Amount</div>
            <p>/ person</p>
          </div>
          <div className="tip-result">
            ${tipAmount==0?"0.00":tipAmount}
            
          </div>
      </div>
      <div className="total">
          <div className="text">
            <div className="head">Total</div>
            <p>/ person</p>
          </div>
          <div className="total-result">
          ${total==0?"0.00":total}
          </div>
      </div>
      <button  onClick={resetHandler}
      
      className={isDisabled&&"disabled"}
      >
        Reset
      </button>
    </div>
  )
}

export default ResultArea