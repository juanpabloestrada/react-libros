import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemListContainer = ({productsData}) => {
    return (
            <div style={{display: 'flex', justifyContent: 'space-between', width: '100vw', flexWrap: 'wrap', marginBottom: '5px'}}>
                {productsData.map((products) => {
                        return (
                            <Card key={products.id} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={products.img} />
                            <Card.Body>
                              <Card.Title>{products.name}</Card.Title>
                              <Card.Text>
                                {products.description}
                              </Card.Text>
                              <div>{products.price}</div>
                              <Button variant="primary">Add cart</Button>
                            </Card.Body>
                          </Card>
                        );
                    })}
            </div>
    );
};

export default ItemListContainer;