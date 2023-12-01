import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ListGroup } from 'react-bootstrap';

const products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', imagen: "https://placehold.jp/150x150.png" },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', imagen: "https://placehold.jp/150x150.png" },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', imagen: "https://placehold.jp/150x150.png" },
];

function CardsGrid() {
    return (
        <Container className="mt-10">
            <h1 className='text-center m-10'>Trending products</h1>
            <Row xs={1} md={3} className="justify-content-center">
                {products.map((product) => (
                    <Col key={product.id} className="mb-4 d-flex justify-content-center">
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.imagen} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item>Cras justo odio</ListGroup.Item>
                                <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CardsGrid;
