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
import { fetchUsers } from "services/userService";
function Users() {
    const notificationAlertRef = React.useRef(null);
    const history = useHistory()
    const [users, setUsers] = React.useState([])

    React.useEffect(() => {
        fetchUsers()
            .then((res) => {
                setUsers(res)
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
                                    <Card.Title as="h4">Users Table</Card.Title>
                                    <Link to={`/admin/user/add`}><Button
                                        className="btn-fill pull-right"
                                        variant="info"
                                    >
                                        Add User
                                    </Button>
                                    </Link>
                                </div>
                            </Card.Header>

                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">ID</th>
                                            <th className="border-0">Name</th>
                                            <th className="border-0">Email</th>
                                            <th className="border-0"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        { users.map((el,i) =>
                                        <tr>
                                            <td>{i}</td>
                                            <td>{el.name}</td>
                                            <td>{el.email}</td>
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
                                                                history.push(`/admin/user/edit/${el.id}`)
                                                            }}
                                                        >
                                                            Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            href="#pablo"
                                                            onClick={(e) => {
                                                                e.preventDefault()
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

export default Users;
