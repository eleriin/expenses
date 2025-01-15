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
    
        console.log(filteredExpenses)
    
    return (
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler} />
            
            {
                filteredExpenses.map((expense)=>{
                    return <ExpenseItem data={expense} key={expense.id} />
                })
            }
            </Card>
    )
}

export default Expenses