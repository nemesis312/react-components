import React, { useState } from 'react';
import ChildComponent from './ChildComponent';
import { Col, Container, Form, Row } from 'react-bootstrap';

function ParentComponent() {
  const [childData, setChildData] = useState({
    email: '',
    firstName: '',
    child3: ''
  });

  const handleChildData = (childName, data) => {
    setChildData(prevState => ({
      ...prevState,
      [childName]: data,
      
    }));
  };

  return (
    
        <Container>
            <p>Child 1 Data: {childData.firstName}</p>
            <p>Child 1 Data: {childData.email}</p>
            <Form >
                <Row>
                    <Col xs={12} md={4} className='TextLeft'>
                        <ChildComponent onChildData={handleChildData} childName="firstName" name = "FirstName" type = "text" placeholder = "" label="First Name" />          
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4} className='TextLeft'>
                        <ChildComponent onChildData={handleChildData} childName="email" name = "Email" type = "email" placeholder = "email@email.com.com" label="Email Address" />          
                    </Col>
                </Row>
            </Form>
        </Container>
    
 
  );
}

export default ParentComponent;
