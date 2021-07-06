import { Container, Row, Col} from "react-bootstrap"
import React, { useState} from "react"
import calculator from "../utils/calculator"
import { ToolTipLite } from 'tooltip-lite';




const Main = (props) => {
let defaultCalcOptions = {  
    startAge: 25,
    income: 50000, 
    spouseIncome: 0, 
    amountSaved: 1000,
    retirementAge: 65,
    yearsRetired: 20,
    savingsRate: 5,
    inflation: 3,
    preRoi: 8, 
    postRoi: 6,
    incomeRetirementPercent: 80,
    salaryIncrease: 3  

}

let setGraphData = props.setterFunction

let [calcOptions, setCalcOptions] = useState(defaultCalcOptions)


let [savingsArray, setSavingsArray] = useState([])


const updateGraph = (event) => {
    event.preventDefault()
    setGraphData(calculator(calcOptions))

}

    return (
        <Container fluid className="App" >
            
        <Row>
            <h1 className="content">Retirement Calculator</h1>
            <p className="App">Estimate your expected total retirement savings based on your annual contributions</p>
       </Row>

       <Row>
        <Col sm={12} md={6} lg={4}>
    
          <ToolTipLite content={(
            <div>
              <p>Your current age.</p>
              <p>If you have a spouse,</p>
              <p>please use older age amongst the two</p>
            </div>
          )}
            direction="right">
            <label for="ageInput" className="pr-5 mt-2">
            Age
            </label>
          </ToolTipLite>
          <input  value={calcOptions.startAge} onChange={event => setCalcOptions({...calcOptions, startAge: event.target.value})} id="ageInput"></input>
        
        </Col>
   





         <Col sm={12} md={6} lg={4}>
        <label>Income 
            <div>
            <ToolTipLite content="Current yearly income" direction="top">
                <span>
                <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.income} onChange={event => setCalcOptions({...calcOptions, income: event.target.value})} ></input>
        </label>
       </Col>


        <Col sm={12} md={6} lg={4}>
        <label>Spouse's Income Savings<div>
            <ToolTipLite content="Spouse's current yearly income (if applicable)" direction="top">
                <span>
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>    
        <input  value={calcOptions.spouseIncome} onChange={event => setCalcOptions({...calcOptions, spouseIncome: event.target.value})} ></input>
        </label>
        </Col>



         <Col sm={12} md={6} lg={4}>
        <label>Amount In Retirement Account <div>
            <ToolTipLite content="Current balance in retirement accounts (if applicable)" direction="top">
                <span >
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.amountSaved} onChange={event => setCalcOptions({...calcOptions, amountSaved: event.target.value})} ></input>
        </label>
        </Col>


         <Col sm={12} md={6} lg={4}>
        <label>Retirement Age
            <div>
            <ToolTipLite content="The age you wish to retire" direction="top">
                <span>
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.retirementAge} onChange={event => setCalcOptions({...calcOptions, retirementAge: event.target.value})} ></input>
        </label>
        </Col>


        <Col sm={12} md={6} lg={4}>
        <label>Desired Retirement Years
            <div>
            <ToolTipLite content="Number of years you wish to remain in retirement" direction="top">
                <span >
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.yearsRetired} onChange={event => setCalcOptions({...calcOptions, yearsRetired: event.target.value})} ></input>
        </label>
        </Col>


        <Col sm={12} md={6} lg={4}>
        <label>Income Saved (%)
            <div>
            <ToolTipLite content="% of income saved per year" direction="top">
                <span >
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.savingsRate} onChange={event => setCalcOptions({...calcOptions, savingsRate: event.target.value})} ></input>
        </label>
        </Col>

        <Col sm={12} md={6} lg={4}>
        <label>Investment Rate (Pre-Retirement %)
              <div>
            <ToolTipLite content="% growth rate of investments before retirement" direction="top">
                <span >
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.preRoi} onChange={event => setCalcOptions({...calcOptions, preRoi: event.target.value})} ></input>
        </label>
        </Col>


        <Col sm={12} md={6} lg={4}>
        <label>Investment Rate (Post-Retirement %)
            <div>
            <ToolTipLite content="% growth rate of investments after retirement.
            We suggest a lower growth rate in retirement, 
            as you may want a more conservative style as you grow older" direction="top" className="explanation" html={true}>
                <span>
                        <i class="fas fa-question-circle"></i>
                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.postRoi} onChange={event => setCalcOptions({...calcOptions, postRoi: event.target.value})} ></input>
        </label>
        </Col>


        <Col sm={12} md={6} lg={4}>
        <label>Inflation (%)
            <div>
            <ToolTipLite content="% rate of inflation. Consumer Price Index, has averaged ~4% over the past 50 years or so" direction="top" html={true} toolTipClassName="explanation">
                <span>
                        <i class="fas fa-question-circle"></i>
                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.inflation} onChange={event => setCalcOptions({...calcOptions, inflation: event.target.value})} ></input>
        </label>
        </Col>


        <Col sm={12} md={6} lg={4}>
        <label>Income at Retirement (%)
            <div>
            <ToolTipLite content="% of final year's income you will need each year in retirement. Common estimate is 80%" direction="top">
                <span>
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.incomeRetirementPercent} onChange={event => setCalcOptions({...calcOptions, incomeRetirementPercent: event.target.value})} ></input>
        </label>
        </Col>

        <Col sm={12} md={6} lg={4}>
        <label>Salary Increase (%)
            <div>
            <ToolTipLite content="% of salary increase per year. Defaults to 3%" direction="top">
                <span>
                        <i class="fas fa-question-circle"></i>

                </span>
            </ToolTipLite> 
        </div>
        <input value={calcOptions.salaryIncrease} onChange={event => setCalcOptions({...calcOptions, salaryIncrease: event.target.value})} ></input>
        </label>
        </Col>
        </Row>
        
        
         <Row>

        <button className="calcButton" onClick={updateGraph}>Calculate</button>
        </Row>
        </Container>
    )

}

export default Main