import React, {useState, useEffect} from 'react'
import Balance from './balance/Balance'
import Transaction from './transaction/Transaction'
import Cookies from 'js-cookie'

export default function MainComponent() {
  //use cokies
    const [income,setIncome] = useState(0)
    const [expense,setExpense] = useState(0)

    useEffect(() => {
      const income = Cookies.get('income');
      const expense = Cookies.get('expense');
      if (income) {
        setIncome(income);

      }
      if (expense) {
        setExpense(expense);
      }
    }, []);

    

  return (
    <div className='w-full md:w-1/2 px-5 m-2' style={{backgroundColor:'#265073', color:'#F1FADA' , borderRadius:'15px'}}>
      <h1 className='text-center p-5 font-bold'>Expense Tracker</h1>

      <Balance income={income} expense={expense}/>
      <Transaction setIncome={setIncome} setExpense={setExpense} income={income} expense={expense}/>
    </div>
  )
}
