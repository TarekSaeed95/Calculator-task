import React from "react";
import dollar from "../assets/images/icon-dollar.svg";
import person from "../assets/images/icon-person.svg";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
function ManageArea({ setBill, setTip, setPeople, bill, people ,isReseted,setIsReset}) {
    const allBtns=document.querySelectorAll(".btn")
    const CustomTip=useRef()
    
    const clearTips=(e)=>{
        allBtns.forEach(btn => {
            btn.classList.remove("choosed")
        });
    }
    const clickHandler=(e)=>{
        clearTips(e)
        let allBtns=e.currentTarget.parentNode.childNodes
        allBtns.forEach(btn => {
            btn.classList.remove("choosed")
        });
        e.currentTarget.classList.add("choosed")
    }
useEffect(()=>{
    if(isReseted){allBtns.forEach(btn=>btn.classList.remove("choosed"));
    CustomTip.current.value=null
    setIsReset(false)
}
})
  return (
    <div className="manage-area">
      <div className="bill">
        <label htmlFor="bill">Bill</label>
        <div className="input">
          <img src={dollar} />
          <input
            id="bill"
            type="number"
            onChange={(e) => setBill(+e.target.value)}
            value={bill}
          />
        </div>
      </div>
      <div className="tip-group">
        <label htmlFor="tip">Select tip %</label>
        <form className="button-group"  onChange={(e)=>setTip(e.target.value)} >
          <div className="tip1 btn " onClick={clickHandler}>
            <label htmlFor="tip1"  >
              5%
            </label>
            <input type="radio" name="tip" value="5" id="tip1" hidden />
          </div>
          <div className="tip2 btn "onClick={clickHandler}>
            <input type="radio" name="tip" value="10" id="tip2" hidden />
            <label htmlFor="tip2"  >
              10%
            </label>
          </div>
          <div className="tip3 btn"onClick={clickHandler}>
            <input type="radio" name="tip" value="15" id="tip3" hidden />
            <label htmlFor="tip3" >
              15%
            </label>
          </div>
          <div className="tip4 btn"onClick={clickHandler}>
            <input type="radio" name="tip" value="20" id="tip4" hidden />
            <label htmlFor="tip4" >
              20%
            </label>
          </div>
          <div className="tip5 btn"onClick={clickHandler}>
            <input type="radio" name="tip" value="25" id="tip5" hidden />
            <label htmlFor="tip5" >
              25%
            </label>
          </div>
          <div className="custom-btn btn" onClick={clickHandler}>
          <input  name="tip" placeholder="Custom" ref={CustomTip}
        />
          </div>
        </form>
      </div>
      <div className="people">
        <label htmlFor="people">Number of People</label>
        <div className="input">
          <img src={person} alt="" />
          <input
            id="bill"
            type="number"
            value={people}
            onChange={(e) => setPeople(+e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}

export default ManageArea;
