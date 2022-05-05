import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const AllProduct = ({ item, handleDelete }) => {
    const { name, picture, description, quantity, supplierName, price, _id } = item

    const navigate = useNavigate()
    const handleInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (

        <div className='col-12 col-md-6 col-lg-4 g-5'>
            <Card className='shadow-sm border-0' >
                <Card.Img style={{ height: '300px' }} className='w-100' variant="top" src={picture} />
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
                <div className='d-flex justify-space-around ms-5'>
                    <button onClick={() => handleDelete(_id)} className='my-btn text-white p-1 w-25 rounded-pill m-3 fw-bold'>Delete</button>
                    <button onClick={() => handleInventory(_id)} className="py-1 my-btn text-white fw-bold rounded-pill px-2 m-3  w-25 ">  Update</button>
                </div>
            </Card>

        </div>


    );
};

export default AllProduct;