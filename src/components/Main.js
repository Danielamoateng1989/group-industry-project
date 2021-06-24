import { Container} from "react-bootstrap"
import { useState } from "react"



const Main = () => {
  
    const [number1, setNumber1] = useState(41)


    const changeNumber = () => {
        setNumber1(40)
    }

    return (
        <Container className="App">
        
         <h2 className="content">Retirement income calculator</h2>
        
         <p className="content">Your retirement is on the horizon, but how far away? You can use this calculator to help you see where you stand in relation to your retirement goal and map out different paths to reach your target. You can print the results for future reference, and rest assured your data will not be saved online.</p>
         
         <h1 className="content">Your retirement story</h1>
         <p className="content">Contrary to popular belief <>___{number1}___</> Lorem Ipsum is not simply random text. It has roots in a piece____________ of classical Latin literature from 45 BC, making ___________it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more____________ obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes___________ from sections 1.10.32 and 1.10.33 _____________of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>

         <button className="button">Calculate</button>
        </Container>
    )
}

export default Main