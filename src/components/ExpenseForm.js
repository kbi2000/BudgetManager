import React from "react";
import { MdSend } from "react-icons/md";


const ExpenseForm=({charge,amount,handleCharge,handleAmount,handleSubmit,edit})=>{
    return (
        <form onSubmit={handleSubmit}>

            <div className="form-center">
                <div className="form-group">
                    <label htmlFor="charge">charge</label>
                    <input type="text" className="form-control" 
                     id="charge" value={charge} onChange={handleCharge} 
                     name="charge" placeholder="e.g rent"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="charge">amount</label>
                    <input type="text" className="form-control" 
                    value={amount} onChange={handleAmount} id="amount" name="amount" placeholder="e.g 1000"></input>
                </div>

            </div>
            <button className="submit" className="btn">{edit?'edit':"submit"}  <MdSend className="btn-icon"
            ></MdSend></button>
        </form>

    );

}
export default ExpenseForm;