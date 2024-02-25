import React from 'react'

export default function Balance(props) {
  return (
    <div className='my-5'>
      <span className='text-l underline'>Your Balance : </span>
      <span className='text-l' style={{color:'#9AD0C2'}}> {props.income - props.expense} $</span>

      <div className='flex flex-row text-center mr-10 mt-5'>
        <div className='income w-1/2 py-2' style={{border:'2px solid #F1FADA'}}>
            <p>Income :</p>
            <p style={{color:'#9AD0C2'}}>{props.income} $ </p>
        </div>
        <div className="expense w-1/2 py-2" style={{border:'2px solid #F1FADA'}}>
            <p>Expense :</p>
            <p style={{color:'#9AD0C2'}}>{props.expense} $ </p>
        </div>
      </div>
    </div>
  )
}
