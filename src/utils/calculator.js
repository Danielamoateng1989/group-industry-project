const calculator = (calculationOptions) => {
  const { 
    startAge, 
    income, 
    spouseIncome, 
    amountSaved, 
    retirementAge, 
    yearsRetired, 
    savingsRate,
    inflation,
    preRoi,
    postRoi,
    incomeRetirementPercent,
    salaryIncrease
    } = calculationOptions

  let finalSavingsArray = []
  let currentAge = startAge
  let totalYears = retirementAge + yearsRetired
  let yearsToRetired = retirementAge - currentAge
  let isRetired = (yearsToRetired > 0) ? false : true
  let totalIncome = isRetired ? 0 : income + spouseIncome
  let savingsBalance = amountSaved
  let incomeSavings = savingsRate / 100 * totalIncome
  let accountSavings = (yearsToRetired > 0) ? preRoi / 100 * savingsBalance : postRoi / 100 * savingsBalance
  let firstWithdrawal = (yearsToRetired === 0) ? incomeRetirementPercent / 100 * totalIncome : 0
  let withdrawal = 0

  for (let i = startAge - 1; i < totalYears; i++) {
    if (isRetired === true) {

      totalIncome = 0
      withdrawal = incomeRetirementPercent / 100 * withdrawal
      let totalBalance = savingsBalance + accountSavings - firstWithdrawal - withdrawal
      let returnObject = {
        startingSavings: savingsBalance,
        age: currentAge,
        yearlySavings: incomeSavings + accountSavings,
        endingSavings: totalBalance
      }

      finalSavingsArray.push(returnObject)
      savingsBalance = totalBalance
      withdrawal = ((firstWithdrawal + withdrawal) * inflation / 100) + (firstWithdrawal + withdrawal)
      currentAge += 1
    } else {
      let totalBalance = savingsBalance + incomeSavings + accountSavings

      let returnObject = {
        startingSavings: savingsBalance,
        age: currentAge,
        income: totalIncome,
        yearlySavings: incomeSavings + accountSavings,
        endingSavings: totalBalance
      }

      finalSavingsArray.push(returnObject)

      savingsBalance = totalBalance
      totalIncome += salaryIncrease / 100 * totalIncome
      currentAge += 1
      withdrawal = firstWithdrawal
    }
  }

  return finalSavingsArray
}

console.log(calculator({
  startAge: 32, income: 75000, spouseIncome: 65000, amountSaved: 50000, retirementAge: 65, yearsRetired: 20, savingsRate: 10, inflation: 4, preRoi: 8, postRoi: 6, incomeRetirementPercent: 80, salaryIncrease: 3
  }
))

// export default calculator