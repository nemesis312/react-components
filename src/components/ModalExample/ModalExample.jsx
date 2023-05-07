import { useState } from 'react';
import { Col, FormLabel, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalExample(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant={props.variant} onClick={handleShow} type={props.type}>
                {props.name}
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col>
                            <FormLabel>
                                Name: {props.data.firstName}
                            </FormLabel>

                        </Col>
                        <Col>
                            <FormLabel>
                                Last Name: {props.data.lastName}
                            </FormLabel>
                        </Col>
                        <Col>
                            <FormLabel>
                                Phone: {props.data.phone}
                            </FormLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormLabel>
                            Address: {props.data.address}
                            </FormLabel>

                        </Col>
                        <Col>
                            <FormLabel>
                                State: {props.data.state}
                            </FormLabel>
                        </Col>
                        <Col>
                            <FormLabel>
                                Zip Code: {props.data.zipCode}
                            </FormLabel>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormLabel>
                                Email: {props.data.email}
                            </FormLabel>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalExample;