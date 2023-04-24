import React from 'react'

function ResultArea() {
  return (
    <div className="result-area">
      <div className="tip-amount">
          <div className="text">
            <div className="head">Tip Amount</div>
            <p>/ person</p>
          </div>
          <div className="tip-result">
            $0.00
          </div>
      </div>
      <div className="total">
          <div className="text">
            <div className="head">Total</div>
            <p>/ person</p>
          </div>
          <div className="total-result">
            $0.00
          </div>
      </div>
      <button className="reset">
        Reset
      </button>
    </div>
  )
}

export default ResultArea