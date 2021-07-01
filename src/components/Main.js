import { Container, Row, Col} from "react-bootstrap"
import React, { useState, useEffect } from "react"
import calculator from "../utils/calculator"



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
        <label>Age
        <input  value={calcOptions.startAge} onChange={event => setCalcOptions({...calcOptions, startAge: event.target.value})} ></input>
        </label>
        </Col>
         <Col sm={12} md={6} lg={4}>
        <label>Income
        <input value={calcOptions.income} onChange={event => setCalcOptions({...calcOptions, income: event.target.value})} ></input>
        </label>
       </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Spouse's Income
        <input  value={calcOptions.spouseIncome} onChange={event => setCalcOptions({...calcOptions, spouseIncome: event.target.value})} ></input>
        </label>
        </Col>
         <Col sm={12} md={6} lg={4}>
        <label>Amount In Retirement Account
        <input value={calcOptions.amountSaved} onChange={event => setCalcOptions({...calcOptions, amountSaved: event.target.value})} ></input>
        </label>
        </Col>
         <Col sm={12} md={6} lg={4}>
        <label>Retirement Age
        <input value={calcOptions.retirementAge} onChange={event => setCalcOptions({...calcOptions, retirementAge: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Desired Retirement Years
        <input value={calcOptions.yearsRetired} onChange={event => setCalcOptions({...calcOptions, yearsRetired: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Income Saved (%)
        <input value={calcOptions.savingsRate} onChange={event => setCalcOptions({...calcOptions, savingsRate: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Investment Rate (Pre-Retirement %)
        <input value={calcOptions.preRoi} onChange={event => setCalcOptions({...calcOptions, preRoi: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Investment Rate (Post-Retirement %)
        <input value={calcOptions.postRoi} onChange={event => setCalcOptions({...calcOptions, postRoi: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Inflation (%)
        <input value={calcOptions.inflation} onChange={event => setCalcOptions({...calcOptions, inflation: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Income at Retirement (%)
        <input value={calcOptions.incomeRetirementPercent} onChange={event => setCalcOptions({...calcOptions, incomeRetirementPercent: event.target.value})} ></input>
        </label>
        </Col>
        <Col sm={12} md={6} lg={4}>
        <label>Salary Increase (%)
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