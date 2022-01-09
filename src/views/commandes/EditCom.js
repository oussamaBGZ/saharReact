import EditProduct from "components/EditProduct";
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
import { useParams } from "react-router";
import { updateCommande } from "services/commandesServices";
import { fetchCommande } from "services/commandesServices";
import { fetchuser } from "services/userService";
import { fetchUsers } from "services/userService";

function AddCommande() {
  const { id } = useParams()
  const notificationAlertRef = React.useRef(null);
  const [products, setProducts] = React.useState(null)
  const [users, setUsers] = React.useState([])
  const [currentUser, setCurrentUser] = React.useState(null)
  React.useEffect(async () => {
    const users = await fetchUsers()
    setUsers(users)
    fetchCommande(id)
      .then(async res => {
        console.log("res orderItems ", res.orderItems)
        const user = await fetchuser(res.client)
        setCurrentUser(user.id)
        setProducts(res.orderItems)
      })
  }, [])
  return (
    <>
      <NotificationAlert ref={notificationAlertRef} />

      <Container fluid>
        <Row>
          <Col md="12">
            <Card>
              <Card.Header>
                <Card.Title as="h4">Edit a Commande</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>User</Form.Label>
                    <Form.Control name="available" as="select" value={currentUser} onChange={(e) => setCurrentUser(e.target.value)}>
                      {users && users.map(el => <option key={el.id} value={el.id}>{el.name}</option>)}
                    </Form.Control>
                  </Form.Group>
                  {products && products.map((el, i) => <EditProduct key={i} _id={el._id} products={products} setProducts={setProducts} />)}

                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                    onClick={(e) => {
                      e.preventDefault()
                      console.log(products)
                      const data = {
                        client: currentUser,
                        orderItems: products
                      }
                      updateCommande(data, id)
                        .then(() => {
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
                          e.target.reset()
                        }).catch(err => console.error(err))
                    }}
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
