import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter'



const Expenses = (props) => {
    const filterChangeHandler = (filteredYear) => {
        console.log('Year data in Expenses.js' + filteredYear)
    }
    
    return (
        <Card className='expenses'>
            <ExpensesFilter onChangeFilter={filterChangeHandler}/>
            {
                props.expenses.map((expense)=>{
                    return <ExpenseItem expenseData={expense} key={expense.id} data={expense}/>
                })
            }
            </Card>
    )
}

export default Expenses