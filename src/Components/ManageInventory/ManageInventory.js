import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useInventories from '../../Hooks/useInventories';
import AllProduct from '../AllProduct/AllProduct';

const ManageInventory = () => {
    const [items, setItems] = useInventories()
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?? wanna deleted?')
        if (proceed) {
            const url = `https://dry-citadel-76897.herokuapp.com/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const remainingItem = items.filter(i => i._id !== id)
                    setItems(remainingItem)
                })
        }
    }

    return (
        <div>
            <h2 className='mt-3'>All perfume collection and Manage</h2>
            <Container>
                <Row>
                    {
                        items.map(item => <AllProduct key={item._id}
                            item={item}
                            handleDelete={handleDelete}
                        ></AllProduct>)
                    }
                </Row>
                <Link to='/addItem'><button className='my-btn text-white p-1 w-25 rounded-pill m-3 fw-bold my-5'>Add new item</button></Link>
            </Container>
        </div>
    );
};

export default ManageInventory;