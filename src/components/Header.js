import {Container} from "react-bootstrap"

const Header = () => {

    return (   
  <>
  <div class="nav-left">
  <Container>
  <a  href="/"><span>Self.</span></a>
  <a  href="/login">Learn</a>
  <a href="/about">About</a>
  <a href="/resources">Resources</a>
  <a href="/reward">Get $10</a>
  <a href="/help">Help</a>
  </Container>
  
  
  </div>  
  <Container>
  <div class="nav-right">
  <a href="/help">START BUILDING TODAY</a>
  </div>
  </Container>
  </>

    )
}


export default Header