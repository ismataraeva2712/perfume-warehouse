import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './item.css'
const Item = ({ item }) => {
    const { picture, name, description, price, quantity, supplierName } = item
    return (
        <div className='col-12 col-md-6 col-lg-4 g-5'>

            <Card className='shadow-sm' >
                <Card.Img style={{ height: '200px' }} className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text >
                        Quantity :  {quantity}
                    </Card.Text>
                    <Card.Text >
                        Supplier Name :  {supplierName}
                    </Card.Text>
                    <Card.Text className='fw-bold'>
                        Price :  ${price}
                    </Card.Text>

                    <button className="py-1 my-btn text-white fw-bold rounded-pill px-3 ">  Update</button>
                </Card.Body>

            </Card>


        </div>
    );
};

export default Item;