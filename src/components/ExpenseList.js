import React from "react";
import Item from './ExpenseItem';



const ExpenseList=({expenses,handleEdit,handleDelete,clearitem})=>{
    return (
        <div>
            <ul className="list">
                {expenses.map((expense)=>{
                    return <Item key={expense.id} expense={expense} handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    ></Item>

                })}

            </ul>
            {expenses.length>0 && <button className="btn" onClick={clearitem}>clear expense</button>}

        </div>

    );

}
export default ExpenseList;