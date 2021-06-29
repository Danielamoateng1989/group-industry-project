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

  const finalSavingsArray = []
  let currentAge = startAge;
  const totalYears = retirementAge + yearsRetired;
  let isRetired = (currentAge <= retirementAge) ? false : true;
  let totalIncome = isRetired ? 0 : income + spouseIncome;
  let savingsBalance = amountSaved;
  let firstWithdrawal = (currentAge === retirementAge) ? incomeRetirementPercent / 100 * totalIncome : 0;
  let withdrawal = 0;

  for (let i = startAge - 1; i < totalYears; i++) {
    if (currentAge >= retirementAge) {

      totalIncome = 0
      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      withdrawal = incomeRetirementPercent / 100 * firstWithdrawal
      let totalBalance = savingsBalance + totalSavings - firstWithdrawal - withdrawal
      let returnObject = {
        startingSavings: savingsBalance,
        age: currentAge,
        yearlySavings: accountSavings,
        endingSavings: totalBalance
      }

      finalSavingsArray.push(returnObject)
      savingsBalance = totalBalance
      withdrawal = ((firstWithdrawal + withdrawal) * inflation / 100) + (firstWithdrawal + withdrawal)
      currentAge += 1
    } else {
      let incomeSavings = savingsRate / 100 * totalIncome;
      let accountSavings = preRoi / 100 * savingsBalance
      let totalSavings = accountSavings + incomeSavings
      let totalBalance = savingsBalance + totalSavings

      let returnObject = {
        startingSavings: savingsBalance,
        age: currentAge,
        income: totalIncome,
        yearlySavings: totalSavings,
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