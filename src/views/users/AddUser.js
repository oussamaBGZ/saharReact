import React, { useEffect } from "react";
import NotificationAlert from "react-notification-alert";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useParams } from "react-router";
import { AddUserApi } from "services/userService";

function AddUsers() {
  const notificationAlertRef = React.useRef(null);

  const handelSubmit = (e, val) => {
    e.preventDefault()
    const data ={
      id: String(Date.now()),
      name: e.target.name.value,
      email:e.target.email.value,
    }
    console.log(data)
    AddUserApi(data)
    .then((res) => {
      const options = {
        place: 'tc',
        message: (
          <div>
            <div>
              user Added successfully
            </div>
          </div>
        ),
        type: "success",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7,
      };
      notificationAlertRef.current.notificationAlert(options)
      e.target.reset()
    }).catch(err => console.log(err))
  }

  return (
    <>
          <NotificationAlert ref={notificationAlertRef} />

      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add User</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handelSubmit}>
                  <Col className="p-2" md="12">
                    <Form.Group>
                      <label>Username</label>
                      <Form.Control
                        placeholder="Username"
                        type="text"
                        name="name"

                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Col md="12">
                    <Form.Group>
                      <label htmlFor="exampleInputEmail1">
                        Email address
                      </label>
                      <Form.Control
                        placeholder="Email"
                        type="email"
                        name="email"

                      ></Form.Control>
                    </Form.Group>
                  </Col>
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Submit
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AddUsers;
