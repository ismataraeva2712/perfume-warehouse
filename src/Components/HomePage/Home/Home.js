import React, { useState, useEffect } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import img1 from '../../../banner/img1.jpg'
import img8 from '../../../banner/img8.jpg'
import img4 from '../../../banner/img4.jpg'
import Item from '../Item/Item';
const Home = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src={img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Perfume-Warehouse have outstanding flower fragnance</h3>
                        <p>we have lots of floral fragnance. </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src={img8}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Perfume-Warehouse have natural organic products perfume.</h3>
                        <p>we keep many organic products perfumes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" style={{ height: '500px' }}
                        src={img4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Perfume-Warehouse have strong ,light fragnance</h3>
                        <p>We have many strong ,light flavour perfumes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div>
                <Container>
                    <h2 className="mt-5">Perfume Collection</h2>
                    <Row>
                        {
                            items.slice(0, 6).map(item => <Item
                                key={item._id}
                                item={item}
                            ></Item>)
                        }
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;