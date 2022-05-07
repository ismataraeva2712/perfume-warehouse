import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import AllProduct from '../AllProduct/AllProduct';

const MyItems = () => {
    const [myitems, setMyItems] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    useEffect(() => {
        const url = `http://localhost:5000/myItem?email=${user.email}`
        try {
            fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => {

                    if (data.message) {
                        signOut(auth)
                        navigate('/login')
                    }
                    else {
                        setMyItems(data)
                    }
                    console.log('data', data)
                })
        }
        catch (error) {
            console.log(error)
        }
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure ?? wanna deleted?')
        if (proceed) {
            const url = `http://localhost:5000/items/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)

                    const remainingItem = myitems.filter(i => i._id !== id)
                    setMyItems(remainingItem)
                })
        }
    }

    return (
        <div>
            <h2 className='mt-3'>My Items</h2>
            <p> total item: {myitems.length}</p>
            <Container>
                <Row>
                    {
                        myitems.map(item => <AllProduct
                            key={item._id}
                            item={item}
                            handleDelete={handleDelete}
                        ></AllProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default MyItems;