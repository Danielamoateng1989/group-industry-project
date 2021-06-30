const canRetire = (calculationOptions, arr) => {
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

  if (retirementAge + yearsRetired >= arr[retirementAge + yearsRetired - startAge - 1].age && arr[retirementAge + yearsRetired - startAge - 1].endingSavings >= 0) {
    return "you are currently saving enough money for retirement"
  } else {
    return "you are not currently saving enough for retirement. Please try to increase your savings amount"
  }
  
}

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

  for (let i = 0; i < totalYears - startAge; i++) {
    if (currentAge === retirementAge) {
      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      totalIncome = totalIncome / (1 + salaryIncrease / 100)
      totalIncome += inflation / 100 * totalIncome
      withdrawal = incomeRetirementPercent / 100 * totalIncome
      totalIncome = 0
      let totalBalance = savingsBalance + totalSavings - withdrawal
      let returnObject = {
        startingSavings: savingsBalance.toFixed(2),
        age: currentAge,
        income: totalIncome.toFixed(2),
        yearlySavings: accountSavings.toFixed(2),
        withdrawal: withdrawal.toFixed(2),
        endingSavings: totalBalance.toFixed(2)
      }

      finalSavingsArray.push(returnObject)
      savingsBalance = totalBalance
      withdrawal += (withdrawal * inflation / 100)
      currentAge += 1
    } else
    if (currentAge > retirementAge) {

      let accountSavings = postRoi / 100 * savingsBalance
      let totalSavings = accountSavings
      let totalBalance = savingsBalance + totalSavings - withdrawal
      let returnObject = {
        startingSavings: savingsBalance.toFixed(2),
        age: currentAge,
        income: totalIncome.toFixed(2),
        yearlySavings: accountSavings.toFixed(2),
        withdrawal: withdrawal.toFixed(2),
        endingSavings: totalBalance.toFixed(2)
      }

      finalSavingsArray.push(returnObject)
      if(totalBalance > 0 ) {
        withdrawal += (withdrawal * inflation / 100)
      } else { 
        withdrawal = 0 }
      savingsBalance = totalBalance
      currentAge += 1
    } else {
      let incomeSavings = savingsRate / 100 * totalIncome;
      let accountSavings = preRoi / 100 * savingsBalance
      let totalSavings = accountSavings + incomeSavings
      let totalBalance = savingsBalance + totalSavings

      let returnObject = {
        startingSavings: savingsBalance.toFixed(2),
        age: currentAge,
        income: totalIncome.toFixed(2),
        yearlySavings: totalSavings.toFixed(2),
        withdrawal: withdrawal.toFixed(2),
        endingSavings: totalBalance.toFixed(2)
      }

      finalSavingsArray.push(returnObject)

      savingsBalance = totalBalance
      totalIncome += salaryIncrease / 100 * totalIncome
      currentAge += 1
    }
  }
  
  const retirementCheck = canRetire(calculationOptions, finalSavingsArray)
  return { finalSavingsArray, retirementCheck }
}

console.log(calculator({
  startAge: 32, income: 75000, spouseIncome: 65000, amountSaved: 50000, retirementAge: 65, yearsRetired: 20, savingsRate: 10, inflation: 4, preRoi: 8, postRoi: 6, incomeRetirementPercent: 75, salaryIncrease: 3
  }
))

export default calculator