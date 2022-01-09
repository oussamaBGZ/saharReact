import Product from "components/Product";
import React from "react";
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
import { AddCommandeApi } from "services/commandesServices";
import { fetchUsers } from "services/userService";

function AddCommande() {
  const [products, setProducts] = React.useState([{ livreid: '', quantite: 0, id: Date.now() }])
  const [users, setUsers] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(null)

  const notificationAlertRef = React.useRef(null);

  React.useEffect(() => {
    console.log(products)
    fetchUsers()
    .then((res) => {
      setUsers(res)
    })
  }, [])

  const handelSubmit=(e) => {
    e.preventDefault()
    const data = {
      client: currentUser,
      orderItems: products
    }
    AddCommandeApi(data)
      .then(() => {
        const options = {
          place: 'tc',
          message: (
            <div>
              <div>
                Items Added successfully
              </div>
            </div>
          ),
          type: "success",
          icon: "nc-icon nc-bell-55",
          autoDismiss: 7,
        };
        notificationAlertRef.current.notificationAlert(options)
        e.target.reset()
      }).catch(err => console.error(err))
  }
  return (
    <>
      <NotificationAlert ref={notificationAlertRef} />

      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Add a Commande</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handelSubmit}>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>User</Form.Label>
                    <Form.Control name="available" as="select" onChange={(e) => setCurrentUser(e.target.value)}>
                    <option >Select A value</option>
                      {users && users.map(el =><option key={el.id} value={el.id}>{el.name}</option>)}
                    </Form.Control>
                  </Form.Group>
                  {products.map((el, i) => <Product key={i} id={el.id} products={products} setProducts={setProducts} />)}
                  <Button
                    className="btn-fill pull-right mr-3"
                    variant="info"
                    onClick={() => {
                      setProducts(state => [...state, { livreid: '', quantite: 0, id: Date.now() }])
                    }}
                  >
                    add product
                  </Button>
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

export default AddCommande;
