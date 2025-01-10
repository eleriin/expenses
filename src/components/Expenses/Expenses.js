import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'
import './Expenses.css';



const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2024')

    const filteredChangeHandler = (selectedYear) =>{
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    })

    console.log(`Filtered Expenses for ${filteredYear}:`);
        if (filteredExpenses.length === 0) {
            console.log('No expenses found for this year.');
        } else {
            filteredExpenses.forEach((expense) => {
                console.log(`- ${expense.title}: $${expense.price} on ${expense.date.toDateString()}`);
            });
        }
    

    return (
        <div>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filteredChangeHandler}/>
    
        <Card className='expenses'>
        {filteredExpenses.length === 0 ? (
                    <p>No expenses found for {filteredYear}</p>  // Kui pole kulusid
                ) : (
                    filteredExpenses.map((expense) => (
                        <ExpenseItem key={expense.title} data={expense} />
                    ))
                )}
            </Card>
        </div>
    )
}

export default Expenses