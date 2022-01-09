import React, { useEffect } from "react";
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
import { Link,useHistory } from "react-router-dom";
import { fetchBooks } from "services/booksService";
import { deleteBook } from "services/booksService";
import { fetchUsers } from "services/userService";
function Books() {
    const notificationAlertRef = React.useRef(null);
    const history=useHistory()
    const [data,setData]=React.useState(null)
    useEffect(()=>{
        fetchUsers()
        .then((res)=>{
            console.log(res)
        })
        fetchBooks()
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
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
                                    <Card.Title as="h4">Books Table</Card.Title>
                                    <Link to={`/admin/book/add`}><Button
                                        className="btn-fill pull-right"
                                        variant="info"
                                    >
                                        Add Book
                                    </Button>
                                    </Link>
                                </div>

                            </Card.Header>
                            <Card.Body className="table-full-width table-responsive px-0">
                                <Table className="table-hover table-striped">
                                    <thead>
                                        <tr>
                                            <th className="border-0">ID</th>
                                            <th className="border-0">title</th>
                                            <th className="border-0">Author</th>
                                            <th className="border-0">Price</th>
                                            <th className="border-0">QUantity</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((el,i) =>
                                            
                                        <tr>
                                            <td>{i}</td>
                                            <td>{el.title}</td>
                                            <td>{el.author}</td>
                                            <td>{el.price}</td>
                                            <td>{el.quantity}</td>
                                            <td>
                                            <Dropdown >
                                                    <Dropdown.Toggle
                                                        aria-expanded={false}
                                                        aria-haspopup={true}
                                                        
                                                        data-toggle="dropdown"
                                                        id="navbarDropdownMenuLink"
                                                        variant="default"
                                                        className="m-0"
                                                        style={{border:"none"}}
                                                    >
                                                        <span className="no-icon" ></span>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                                                        <Dropdown.Item
                                                            href="#pablo"
                                                            onClick={(e) => {
                                                                e.preventDefault()
                                                                history.push(`/admin/book/edit/${el._id}`)
                                                            }}
                                                        >
                                                            Edit
                                                        </Dropdown.Item>
                                                        <Dropdown.Item
                                                            href="#pablo"
                                                            onClick={async (e) => {
                                                                e.preventDefault()
                                                                await deleteBook(el._id)
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

export default Books;
