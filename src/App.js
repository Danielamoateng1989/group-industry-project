import './App.css';
import {  Container  } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Graph from './components/Graph';

function App() {
  return (
    <>
      <Header />
      
      
        <main>
      <Container>
     
        <Main/>
        <Graph />
     
     
     </Container>


        </main>
      

      <Footer />
      
    </>
  );
}

export default App;
