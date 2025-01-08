import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Spinner, Form } from 'react-bootstrap';
import './App.css';
import Cart from './components/Cart';

function App() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:5000/orders')
      .then((response) => {
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to fetch orders');
        setLoading(false);
      });
  }, []);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddToCart = (order) => {
    setCart([...cart, order]);
  };

  const handleRemoveFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const filteredOrders = selectedCategory === 'All' ? orders : orders.filter(order => order.item.includes(selectedCategory));

  return (
    <Container>
      <h1 className="my-5">Food Delivery</h1>
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Category Selector */}
      <Form.Group controlId="categorySelect">
        <Form.Label>Select Food Category</Form.Label>
        <Form.Control as="select" onChange={handleCategoryChange}>
          <option>All</option>
          <option>Pizza</option>
          <option>Burger</option>
          <option>Pasta</option>
          <option>Sushi</option>
        </Form.Control>
      </Form.Group>

      {/* Display Orders */}
      <Row>
        {loading ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          filteredOrders.map((order) => (
            <Col md={4} key={order.id}>
              <Card className="my-2">
                <Card.Body>
                  <Card.Title>{order.item}</Card.Title>
                  <Card.Text>{order.description}</Card.Text>
                  <Card.Text>Status: {order.status}</Card.Text>
                  <Card.Text>Price: ${order.price}</Card.Text>
                  <Button variant="primary" onClick={() => handleAddToCart(order)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>

      {/* Cart Section */}
      <Cart cartItems={cart} removeFromCart={handleRemoveFromCart} clearCart={handleClearCart} />
    </Container>
  );
}

export default App;
