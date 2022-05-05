import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AllProduct from '../AllProduct/AllProduct';

const ManageInventory = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <h2 className='mt-3'>All perfume collection and Manage</h2>
            <Container>
                <Row>
                    {
                        items.map(item => <AllProduct key={item._id}
                            item={item}></AllProduct>)
                    }
                </Row>
                <Link to='/addItem'><button className='my-btn text-white p-1 w-25 rounded-pill m-3 fw-bold my-5'>Add new item</button></Link>
            </Container>
        </div>
    );
};

export default ManageInventory;