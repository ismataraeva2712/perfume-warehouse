import React from 'react';
import { Card } from 'react-bootstrap';

const AllProduct = ({ item }) => {
    const { name, picture, description, quantity, supplierName, price, _id } = item
    return (

        <div className='col-12 col-md-6 col-lg-4 g-5'>
            <Card className='shadow-sm border-0' >
                <Card.Img style={{ height: '200px' }} className='w-100' variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text >
                        Perfume Id : {_id}
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
                </Card.Body>
                <button className='my-btn text-white p-1 w-25 rounded-pill m-3 fw-bold'>Delete</button>
            </Card>

        </div>


    );
};

export default AllProduct;