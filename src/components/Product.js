import React from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { fetchBooks } from 'services/booksService'

const useDidUpdate = (cb, args) => {
    const intialRender = React.useRef(false)
    React.useEffect(() => {
        if (intialRender.current) cb()
        else intialRender.current = true
    }, args)


}

function Product({ products, setProducts, id }) {
    const [book, setbook] = React.useState('')
    const [quantity, setquantity] = React.useState(0)
    const [allbooks, setAllbooks] = React.useState(null)

    useDidUpdate(() => {
        console.log('hello bb')
        setProducts(state => state.map(el => {
            if (el.id == id) return { ...el, livreid: book, quantite: quantity }
            else return el
        }))
    }, [book, quantity])

    React.useEffect(() => {
        fetchBooks()
            .then(res => setAllbooks(res))
    }, [])

    return (
        <div>
            {allbooks &&
                <Row>
                    <Col className="pr-1" md="6">
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Book name</Form.Label>
                            <Form.Control name="book" as="select" value={book} onChange={(e) => setbook(e.target.value)}>
                                <option selected>Select a value</option>
                                {allbooks.map(el => <option value={el._id}>{el.title}</option>)}

                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col className="pl-1" md="6">
                        <Form.Group>
                            <label>Item quantity</label>
                            <Form.Control
                                placeholder="quantity"
                                type="number"
                                value={quantity}
                                onChange={(e) => setquantity(e.target.value)}
                            ></Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            }
        </div>
    )
}

export default Product
