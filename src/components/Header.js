import { Navbar, Nav, Container} from "react-bootstrap"

const Header = () => {

    return (

        <header>
        
  <Navbar style={{backgroundColor: "#3BADEE"}} collapseOnSelect>
      <Container>
  <Navbar.Brand href="/">Self.</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto" >
      <Nav.Link href="#">LEARN</Nav.Link>
      <Nav.Link href="#">ABOUT</Nav.Link>
      <Nav.Link href="#">RESOURCES</Nav.Link>
      <Nav.Link href="#">GET $10</Nav.Link>
      <Nav.Link href="#">HELP</Nav.Link>
      <Nav.Link href="/calculator">RETIREMENT CALCULATOR</Nav.Link>

    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </header>
        
    )
}


export default Header