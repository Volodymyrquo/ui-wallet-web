import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Activities from './Activities'


const Transactions = () => {
    return (
        <div className="page-content" >
            <Container fluid>
            <Row>
            <Col lg="12">
            
                <Activities />
            
            </Col>
          </Row>
        </Container>

           
        </div>
    )
}

export default Transactions
