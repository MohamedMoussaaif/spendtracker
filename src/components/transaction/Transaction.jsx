import React, {useState} from 'react'
import Cookies from 'js-cookie';

export default function Transaction(props) {
    const [transactionType, setTransactionType] = useState('income');
    const [amount, setAmount] = useState('');

    function addTransaction () {

      if(document.getElementById("amount").value == '')
        alert("Enter Amount !!!")
      else {
        if(transactionType == 'income') {
          props.setIncome(parseFloat(props.income) + parseFloat(amount))
          Cookies.set('income', parseFloat(props.income) + parseFloat(amount), { expires: 7 });
        } 
        else { 
          props.setExpense(parseFloat(props.expense) + parseFloat(amount))
          Cookies.set('expense', parseFloat(props.expense) + parseFloat(amount), { expires: 7 });
        }
      }
    }

    
  return (
    <div className='flex flex-col'>
      <span className='mb-5 underline '>Your Transaction : </span>

      <span className='text-s'>Amount : </span>
      <div className="flex flex-row">
        <select 
            style={{backgroundColor:'#F1FADA' , color:'#265073', height:'40px'}} 
            className='outline-none p-2 ' 
            onChange={(e) => setTransactionType(e.target.value)} 
        >
            <option value="income">+</option>
            <option value="expense">-</option>
        </select>
        <input 
            type='number' 
            id='amount'
            className='w-full text-black outline-none p-2 mb-5' 
            onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button onClick={addTransaction} className='justify-start w-full' style={{backgroundColor:'#F1FADA', color:'#265073' , border:'2px solid #F1FADA'}}>Add Transaction</button>
    </div>
  )
}
