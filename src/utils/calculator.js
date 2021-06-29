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
  let withdrawal = 0;

  for (let i = startAge - 1; i < totalYears; i++) {
    if (currentAge === retirementAge) {
      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      totalIncome = 0
      withdrawal = incomeRetirementPercent / 100 * parseFloat(finalSavingsArray['income'][i-1])
      withdrawal += (withdrawal * inflation / 100)
      let totalBalance = savingsBalance + totalSavings - withdrawal
      let returnObject = {
        startingSavings: savingsBalance,
        age: currentAge,
        yearlySavings: accountSavings,
        withdrawal: withdrawal,
        endingSavings: totalBalance
      }

      finalSavingsArray.push(returnObject)
      savingsBalance = totalBalance
      currentAge += 1
    } else
    if (currentAge > retirementAge) {

      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      withdrawal += (withdrawal * inflation / 100)
      withdrawal = incomeRetirementPercent / 100 * withdrawal
      let totalBalance = savingsBalance + totalSavings - withdrawal
      let returnObject = {
        startingSavings: savingsBalance,
        age: currentAge,
        yearlySavings: accountSavings,
        withdrawal: withdrawal,
        endingSavings: totalBalance
      }

      finalSavingsArray.push(returnObject)
      savingsBalance = totalBalance
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
    }
  }

  return finalSavingsArray
}

console.log(calculator({
  startAge: 32, income: 75000, spouseIncome: 65000, amountSaved: 50000, retirementAge: 65, yearsRetired: 20, savingsRate: 10, inflation: 4, preRoi: 8, postRoi: 6, incomeRetirementPercent: 80, salaryIncrease: 3
  }
))

// export default calculator