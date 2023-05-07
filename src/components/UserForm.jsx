import React, { useState } from 'react';
import ChildComponent from './ParentChildExample/ChildComponent';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import ModalExample from './ModalExample/ModalExample';


function UserForm() {
  const [formData, setChildData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    address: '',
    state:'',
    zipCode:''

  });

  const handleChildData = (childName, data) => {
    setChildData(prevState => ({
      ...prevState,
      [childName]: data,

    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    // do something with formData, like submit to a backend API
    console.log(formData);
  };

  return (
    <Container>
     
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="firstName" name="FirstName" type="text" placeholder="" label="First Name" />
          </Col>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="lastName" name="LastName" type="text" placeholder="" label="Last Name" />
          </Col>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="phone" name="Phone" type="text" placeholder="" label="Phone" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="address" name="Address" type="text" placeholder="" label="Address" />
          </Col>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="state" name="State" type="text" placeholder="" label="State" />
          </Col>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="zipCode" name="ZipCode" type="number" placeholder="" label="ZipCode" />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} className='TextLeft'>
            <ChildComponent onChildData={handleChildData} childName="email" name="Email" type="email" placeholder="email@email.com" label="Email Address" />
          </Col>
        </Row>
      </Form>
      {/* <Button name='btnSubmit' type='submit' onClick={handleSubmit} variant='dark'>Submit</Button> */}
      <ModalExample name="Submit" type='submit' data={formData} variant='dark' />
    </Container>
  );
}

export default UserForm;
