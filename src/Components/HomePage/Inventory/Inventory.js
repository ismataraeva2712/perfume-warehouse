import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Card, Container } from 'react-bootstrap';
import { toast } from 'react-toastify';
const Inventory = () => {
    const { id } = useParams()
    const [update, setUpdate] = useState({})
    const [item, setItem] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/items/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [update])
    // add quantity
    const handleAddQuantity = event => {
        event.preventDefault()
        const newquantity = parseInt(event.target.quantity.value) + parseInt(item.quantity)
        const updatedQuantity = { quantity: newquantity }
        fetch(`http://localhost:5000/items/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedQuantity)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
                setUpdate(data)
                toast('Perfume added successfully')

                event.target.reset()
            })
    }
    const handleDeleveryQuantity = () => {
        if (parseInt(item.quantity) > 0) {

            const newquantity = parseInt(item.quantity) - 1
            const updatedQuantity = { quantity: newquantity }
            fetch(`http://localhost:5000/items/${id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedQuantity)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data)
                    setUpdate(data)
                    toast('Delevery successfully')


                })
        }
        else {
            toast('stock out')

        }
    }




    return (
        <div>
            <Container>
                <h2>Inventory</h2>
                <Card className='shadow-lg border-0' >
                    <Card.Img style={{ height: '300px' }} className='w-100' variant="top" src={item.picture} />
                    <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            {item.description}
                        </Card.Text>
                        <Card.Text >
                            Perfume Id : {item._id}
                        </Card.Text>
                        <Card.Text >
                            Quantity :  {item.quantity}
                        </Card.Text>
                        <Card.Text >
                            Supplier Name :  {item.supplierName}
                        </Card.Text>
                        <Card.Text className='fw-bold'>
                            Price :  ${item.price}
                        </Card.Text>
                    </Card.Body>

                </Card>
                <button onClick={() => handleDeleveryQuantity()} className="py-1 my-5 my-btn text-white fw-bold rounded-pill px-3 ">Delivered</button>
                <form onSubmit={handleAddQuantity} className='mb-5'>
                    <input type="number" name="quantity" id="" />
                    <input className='my-btn text-white py-1 fw-bold' type="submit" value=" Restock" />
                </form>
            </Container>
        </div>
    );
};

export default Inventory;