import { useState } from 'react'
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';


  const DUMMY_EXPENSES =[
      {
    id: 'id1',
    date: new Date (2024, 10, 22),
    title: 'New Book',
    amount: 139.99
  },
  {
    id: 'id2',
    date: new Date (2023, 10, 22),
    title: 'New Bag',
    amount: 99.99
  },
  {
    id: 'id3',
    date: new Date (2025, 10, 22),
    title: 'New Car',
    amount: 99.99
  },
  {
    id: 'id4',
    date: new Date (2024, 6, 22),
    title: 'New Toy',
    amount: 99.99
  }
]

const App = ()=>{
  const [expenses,setExpenses] = useState(DUMMY_EXPENSES)

const addExpenseHandler = (expense) => {
  setExpenses((previousExpenses) =>{
    return [expense, ...previousExpenses]
  })
}

  return (
    <div className="App">
      <NewExpense onAddExpense = {addExpenseHandler}/>
     <Expenses expenses={expenses} />
    </div>
  )
}

export default App;
