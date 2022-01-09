import React, { useEffect, useState } from "react";
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
import { fetchBook, updateBook } from "services/booksService";

function EditBook() {
  const notificationAlertRef = React.useRef(null);

  const { id } = useParams()
  const [data, setData] = useState(null)
  useEffect(() => {
    console.log(id)
    // fetch your data here
    fetchBook(id)
      .then((data) => {
        console.log(data)
        setData(data)
      })

  }, [])

  const handelSubmit = (e, val) => {
    e.preventDefault()

    updateBook({
      title: e.target.title.value,
      author: e.target.author.value,
      price: e.target.price.value,
      available: e.target.available.value,
      quantity: e.target.quantity.value
    }, id).then(() => {
      const options = {
        place: 'tc',
        message: (
          <div>
            <div>
              Items updated successfully
            </div>
          </div>
        ),
        type: "success",
        icon: "nc-icon nc-bell-55",
        autoDismiss: 7,
      };
      notificationAlertRef.current.notificationAlert(options)
    }).catch(err => console.error(err))
  }

  return (
    <>
      {data &&
        <Container fluid>
          <NotificationAlert ref={notificationAlertRef} />

          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Edit Book</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form onSubmit={handelSubmit}>

                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Title</label>
                          <Form.Control
                            name="title"
                            placeholder="Title"
                            type="text"
                            defaultValue={data.title}
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Author</label>
                          <Form.Control
                            placeholder="Author"
                            type="text"
                            defaultValue={data.author}
                            name="author"

                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Price</label>
                          <Form.Control
                            placeholder="Price"
                            type="number"
                            defaultValue={data.price}
                            name="price"

                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>quantity</label>
                          <Form.Control
                            placeholder="quantity"
                            type="number"
                            defaultValue={data.quantity}
                            name="quantity"

                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Availability</Form.Label>
                      <Form.Control name="available" as="select" defaultValue={data.available}>
                        <option value="true">true</option>
                        <option value="false">false</option>
                      </Form.Control>
                    </Form.Group>

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
        </Container>}
    </>
  );
}

export default EditBook;
