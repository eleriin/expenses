import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import { useState }  from 'react'



const Expenses = (props) => {
    const [filteredYear, setfilteredYear] = useState(new Date().getFullYear().toString())

    const filteredChangeHandler = (filteredYear) => {
        setfilteredYear(filteredYear)
        }

        const filteredExpenses = props.expenses.filter((expense) =>{
            return expense.date.getFullYear().toString() ===filteredYear
        })
    
        let expensesContent = <p>No expenses found</p>
        
        if(filteredExpenses.length > 0) {
            expensesContent = filteredExpenses.map((expense)=>{
                return <ExpenseItem data ={expense} key={expense.id}/>
            })
        }
    
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter=
            {filteredChangeHandler} />
            
            {expensesContent}
            </Card>
    )
}

export default Expenses