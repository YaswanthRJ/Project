import React from "react";
import "./login.css"
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  return (
    <Container fluid className="vh-100 d-flex align-items-center justify-content-center gradient-custom">
    <Row>
      <Col md={50} className="mx-auto">
        <div className="bg-light p-5 rounded shadow" style={{ height: 'auto' }}>
        <Form>
              <Form.Group className="mb-3" controlId="exampleInputEmail1">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="exampleInputPassword1">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <div className="text-center">
        <Button variant="primary" type="submit" className="mb-3">
          Submit
        </Button>
        <p className="mb-0"><a className="link-offset-2 link-underline link-underline-opacity-0" href="/RegisterForm">Register</a></p>
      </div>
            </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default Login;
