import React from 'react'
import {  Container, Row, Col  } from 'react-bootstrap'


const Footer = () => {
    return (
        <footer className="footer-container">
            <Container>
                <Row>
                    <Col className="text-center py-3">

                     Copyright &copy; Self. Created by Daniel, Andy and Kwaku
                    </Col> 
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
