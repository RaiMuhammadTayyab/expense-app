 
import {TransactionContext} from './transcontext'; 
import React,{ useContext, useState } from 'react';

function Child(){
let {transaction,addtransaction}=useContext(TransactionContext)
let [newDesc, setDesc]=useState("");
let [newamount, setamount]=useState(0);

const handladd =(event) => {
event.preventDefault();
addtransaction({
    amount:Number(newamount),
    desc: newDesc

});
setDesc("")
setamount(0)

}
const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transaction.length; i++) {
        if (transaction[i].amount > 0)
            income = income + transaction[i].amount
    }
    return income;
}
const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transaction.length; i++) {
        if (transaction[i].amount < 0)
            expense += transaction[i].amount
    }
    return expense;
}


    return (
      <div className= "firstSection"> 
  <h1 className="text"> Expense Tracker  </h1>
  <h3> Balance <br /> ${getIncome()+(getExpense())}</h3>

      <div className="secondSection">
      <h4> Income <br/> ${getIncome()}</h4>

      <h4> Expenses <br/>${getExpense()}</h4>
      </div>
  
      <h3> History</h3>
      <hr />
  
      <ul className="listSection">
          {transaction.map((transObj, ind) => {
              return (
                  <li key= {ind}> 
                  <span> {transObj.desc} </span>
                  <span> {transObj.amount} </span>
                  </li>
                  
              )
          } )}
             </ul>
             
      
      <h3> Amount Transaction</h3>
      <hr />

      <form className= "formSection" onSubmit={handladd}>

          <label>
            Enter Discription <br/>

            <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required/>
          </label>
          <br/>

          <label>
              Enter amount <br/>
<input type="number"onChange={(ev)=>setamount(ev.target.value)} required/>
         
          </label>
         
          <br/>

          <input type="submit" value= "Add Transaction"/>
      </form>
      </div>
     );
  }
  
  export default Child;
 













