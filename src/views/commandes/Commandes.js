import React from "react";
import NotificationAlert from "react-notification-alert";

// react-bootstrap components
import {
    Badge,
    Button,
    Card,
    Navbar,
    Nav,
    Table,
    Container,
    Row,
    Col,
    Dropdown,
} from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { fetchCommandes } from "services/commandesServices";
import { deleteCommande } from "services/commandesServices";
import { fetchuser } from "services/userService";
function Commandes() {
    const notificationAlertRef = React.useRef(null);
    const history = useHistory()
    const [data, setData]=React.useState()
    React.useEffect(() => {
        fetchCommandes()
        .then(async (res)=>{
            const data=[]
            for (const iterator of res) {
                const user=await fetchuser(iterator.client)
                data.push({...iterator, ...user})
            }
            setData(data)
        })
    }, [])
    return (
        <>
            <div className="rna-container">
                <NotificationAlert ref={notificationAlertRef} />
            </div>
            <Container fluid>
                <Row>
                    <Col md="12">
                        <Card className="strpied-tabled-with-hover">
                            <Card.Header>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                    <Card.Title as="h4">Commande Table</Card.Title>
                                    <Link to={`/admin/commande/add`}><Button
                                        className="btn-fill pull-right"
                                        variant="info"
                                    >
                                        Add Commande
                                    </Button>
                                    </Link>
                                </div>

                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">ID</th>
                                            <th className="border-0">user</th>
                                            <th className="border-0">Book quantity</th>
                                            <th className="border-0"></th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                            {data && data.map((el,i) =>

                                        <tr>
                                            <td>{i}</td>
                                            <td>{el.name}</td>
                                            <td>{el.orderItems.reduce((acc,el)=> acc+el.quantite,0)}</td>
                                 
                                            <td>
                                                <Dropdown >
                                                    <Dropdown.Toggle
                                                        aria-expanded={false}
                                                        aria-haspopup={true}

                                                        data-toggle="dropdown"
                                                        id="navbarDropdownMenuLink"
                                                        variant="default"
                                                        className="m-0"
                                                        style={{ border: "none" }}
                                                    >
                                                        <span className="no-icon" ></span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                                                        <Dropdown.Item
                                                            href="#pablo"
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                history.push(`/admin/commande/edit/${el._id}`)
                                                            }}
                                                        >
                                                            Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            href="#pablo"
                                                            onClick={async (e) => {
                                                                e.preventDefault()
                                                                await deleteCommande(el._id)
                                                                setData(state => state.filter(Element => Element._id!==el._id))

                                                                const options = {
                                                                    place: 'tc',
                                                                    message: (
                                                                        <div>
                                                                            <div>
                                                                                Items deleted successfully
                                                                            </div>
                                                                        </div>
                                                                    ),
                                                                    type: "success",
                                                                    icon: "nc-icon nc-bell-55",
                                                                    autoDismiss: 7,
                                                                };
                                                                notificationAlertRef.current.notificationAlert(options)
                                                            }}
                                                        >
                                                            Delete
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                            )}

                                        
                                   
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Commandes;
