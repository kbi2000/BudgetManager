
import './App.css';
import { useEffect, useState } from 'react';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Aleart';
import { v4 as uuidv4 } from 'uuid';

// const initialExpense=[
//   { id:uuidv4(),charge:"rent",amount:1676

// },
// { id:uuidv4(),charge:"Car Payment",amount:160

// },
// { id:uuidv4(),charge:"Credit",amount:16

// }
// ]
const initialExpense=localStorage.getItem("expenses")?JSON.parse(localStorage.getItem("expenses")):[];


function App() {
  const[expenses,setExpenses]=useState(initialExpense);

  const[charge,setCharege]=useState('');

  const[edit,setedit]=useState(false);
  
  const[id,setid]=useState(0);

  const[amount,setamouont]=useState('');
  useEffect(()=>{
    localStorage.setItem('expenses',JSON.stringify(expenses));
  });
  

  const [alert,setalert]=useState({show:false})

   const handleCharge=e=>{
    setCharege(e.target.value)
   };

   const handleAmount=e=>{
    setamouont(e.target.value)
   };
   const handleAlert=({type,text})=>{
    setalert({show:true,type,text});
    setTimeout(()=>{
      setalert({show:false})

    },3000)
   }
   const handleSubmit=e=>{
    e.preventDefault();
    if(charge!=="" && amount>0){
      if(edit){
        let temp1=expenses.map(item=>{
          return item.id===id?{...item,charge,amount}:item
        })
        setExpenses(temp1);
        setedit(false)
        handleAlert({type:"success",text:"item edited"});

      }
      else{
      const sin={id:uuidv4(),charge,amount};
      setExpenses([...expenses,sin]);
      handleAlert({type:'success',text:'item added'});
      setCharege("");
      setamouont("");}
    }
    else{
      handleAlert({type:'danger',text:'fill the form'})
    }
   };
   //clear all item

   const clearitem=()=>{
    setExpenses([]);
    handleAlert({type:'danger',text:"cleared"})

   };

   const handleDelete=id=>{
    let temp=expenses.filter(item=>item.id!=id);
    setExpenses(temp);
    handleAlert({type:'danger',text:"item deleted"});

   };
   const handleEdit=id=>{
    let expense=expenses.find(item=>item.id==id)
    let {charge,amount}=expense;
    setCharege(charge);
    setamouont(amount);
    setedit(true);
    setid(id);

   };




  return (
    <div>
      {alert.show && <Alert type={alert.type} text={alert.text}></Alert>}
      <Alert /> 
    <h1>Budget calculator</h1>
    <main className='App'>
    <ExpenseForm charge={charge} amount={amount} handleAmount={handleAmount}
    handleSubmit ={handleSubmit} handleCharge={handleCharge}
    edit={edit}
    
    ></ExpenseForm>
    <ExpenseList expenses={expenses}
    handleDelete={handleDelete}
    handleEdit={handleEdit}
    clearitem={clearitem}
    
    
    ></ExpenseList>


    </main>
    <h1>Total spending: <span className='total'>Rp{expenses.reduce((acc,curr)=>{return (acc +=parseInt(curr.amount));},0)}</span></h1>
   
    </div>
 
  );
}

export default App;
