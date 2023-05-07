import React, { useState } from 'react';
import { FormGroup,Form } from 'react-bootstrap';

function ChildComponent(props) {
  const [childData, setChildData] = useState('');

  const handleChange = (event) => {
    const data = event.target.value;
    setChildData(data);
    props.onChildData(props.childName, data);
  };

  return (
    <Form.Group className="mb-3" controlId={props.name}>
        <Form.Label>{props.label}</Form.Label>
        <Form.Control type={props.type} placeholder={props.placeholder} value={childData} onChange={handleChange} />
    </Form.Group>
    // <div>
    //   <h2>Child Component {props.childName}</h2>
    //   <input type="text" value={childData} onChange={handleChange} />
    // </div>
  );
}

export default ChildComponent;
