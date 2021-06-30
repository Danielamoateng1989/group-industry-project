
import { Bar } from "react-chartjs-2"
import calculator from '../utils/calculator'

const Graph = () => {
    const dummyData = {
        startAge: 32, 
        income: 75000, 
        spouseIncome: 65000, 
        amountSaved: 50000, 
        retirementAge: 65, 
        yearsRetired: 20, 
        savingsRate: 13.5, 
        inflation: 4, 
        preRoi: 8, 
        postRoi: 6, 
        incomeRetirementPercent: 75, 
        salaryIncrease: 3
        }
    
    const formattedData = calculator(dummyData)
    console.log(formattedData)

    const getAges = formattedData.finalSavingsArray.map(year => year.age)

    const getSavings = formattedData.finalSavingsArray.map(year => year.endingSavings)

    const getWithdrawal = formattedData.finalSavingsArray.map(year => year.withdrawal)

    return (
    <>
     <Bar data={{
        labels: getAges,
        datasets: [{
          label: 'Ending Savings',
          data: getSavings,
          backgroundColor: '#3badee'
        }, {
          label: 'Withdrawal',
          data: getWithdrawal,
          backgroundColor: '#E37D03'
        }]
    }}>
      </Bar>
      <h1 className="retirementCheck">{ formattedData.retirementCheck }</h1>
    </>
)

}

export default Graph