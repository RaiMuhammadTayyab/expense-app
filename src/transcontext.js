import React,{createContext,useReducer} from "react";
import TransactionReducer from './Reducer.js';

const initransaction = [
    { amount: 500, desc: "cash" },
    { amount: -40, desc: "book" },
    { amount: -200, desc: "Camera" },
    {amount: 300,  desc: "football"}
]

export const TransactionContext = createContext(initransaction)
export const TransactionProvider = ({ children }) => {
    let [state, dispatch] =
        useReducer(
            TransactionReducer, initransaction)
            
            
    function addtransaction(transObj){
        dispatch
            ({
                type: "ADD_TRANSACTION",
                payload: {
                    amount: transObj.amount,
                    desc: transObj.desc
                }
            })}

    return(
        <TransactionContext.Provider value={{
              transaction: state,
                addtransaction
        }}>
                {children}
        </TransactionContext.Provider> 
        
        )


}
        
        
    
