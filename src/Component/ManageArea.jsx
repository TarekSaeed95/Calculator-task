import React from 'react'
import  dollar from '../assets/images/icon-dollar.svg'
import  person from '../assets/images/icon-person.svg'
function ManageArea() {
  return (
    <div className="manage-area">
        <div className="bill">
            <label htmlFor="bill">Bill</label>
            <div className="input">
                <img src={dollar}/>
                <input id="bill" type="number"/>
            </div>

        </div>
        <div className="tip-group">

            <label htmlFor="tip">Select tip %</label>
        <div className="button-group">
            <div className="btn">5%</div>
            <div className="btn">10%</div>
            <div className="btn">15%</div>
            <div className="btn">20%</div>
            <div className="btn">20%</div>
            <div className="custom-btn">Custom</div>
        </div>
        </div>
        <div className="people">
            <label htmlFor="people">Number of People</label>
            <div className="input">
            <img src={person} alt=""  />
            <input id="bill" type="number"/>
            </div>
        </div>
    </div>
  )
}

export default ManageArea