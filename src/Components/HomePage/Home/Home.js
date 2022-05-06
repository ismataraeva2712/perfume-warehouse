import React, { useState, useEffect } from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import img2 from '../../../banner/img2.jpg'
import img19 from '../../../banner/img19.jpg'
import img4 from '../../../banner/img4.jpg'
import img1 from '../../../banner/img1.jpg'
import Item from '../Item/Item';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { faUsersRays } from '@fortawesome/free-solid-svg-icons'
import './Home.css'
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
                        src={img2}
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
                        src={img19}
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
                    <Link to='/manageInventory'><button className='my-5 my-btn text-white rounded-pill py-1 px-3'>Manage Inventories</button></Link>
                    <h2 className='mb-5'>Why choose our warehouse?</h2>
                    <Row>

                        <Col xs={12} md={6}>
                            <div className='w-100 shadow-lg customer-pic '>
                                <img className='w-100  border border-1 rounded  ' src={img1} alt="" />
                            </div>
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='w-100 text-start  my-bg shadow-sm   rounded'>
                                <h6 className='my-bg p-2' > <FontAwesomeIcon className='arrow' icon={faArrowRight} /> Our warehousing service are known nationwide to be one of the most reliable,safe and affordable</h6>
                                <h6 className='my-bg p-2' > <FontAwesomeIcon className='arrow' icon={faArrowRight} /> We take pride in delivering the best of warehousing service,at the most reasonable price</h6>
                                <h6 className='my-bg p-2' > <FontAwesomeIcon className='arrow' icon={faArrowRight} /> Our vast network of warehouse and distribution centers spread out the country.which is key factor in winning the hearts of the cutomers.</h6>
                                <h6 className='my-bg p-2' > <FontAwesomeIcon className='arrow' icon={faArrowRight} />We do not only provide customizes storage solution that align with your business.but also provide a range of other warehousing service. </h6>
                                <h6 className='my-bg p-2' > <FontAwesomeIcon className='arrow' icon={faArrowRight} /> Which includes fulfilment,returns management,packaging,spevialty wrapping,transportation,logistic support,customizes logistic process,supply chain management,distribution,inventory control,door-to-door transport,pick and pack operations,cross dock dristribution,labelling,temperature controlled storage solution etc.</h6>

                            </div>
                        </Col>
                    </Row>
                    {/* ============================== */}
                    <div className='my-5'>
                        <h2 className='mb-5'>About us</h2>
                        <Row >
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faBuilding} /> 16</h3>
                                    <h4 className='arrow'>Worldwide warehouse</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faEarth} /> 10</h3>
                                    <h4 className='arrow'>Countries covered</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faUsersLine} /> 10</h3>
                                    <h4 className='arrow'>Years of experience</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faUserTie} /> 1500</h3>
                                    <h4 className='arrow'>Experienced masters</h4>
                                </div>
                            </Col>
                        </Row>
                        {/* ==================== */}
                        <Row className='mt-5' >
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faPersonDigging} /> 3000</h3>
                                    <h4 className='arrow'>Hardworking workers</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faFileInvoiceDollar} /> 0.00 $ </h3>
                                    <h4 className='arrow'>Free shipping</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faCartFlatbed} /> </h3>
                                    <h4 className='arrow'>Worldwide delivery</h4>
                                </div>
                            </Col>
                            <Col xs={12} md={3}>
                                <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                    <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faUsersRays} /> 10000</h3>
                                    <h4 className='arrow'>Happy Clients</h4>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <Link to='/about'><button className='mb-5 fw-bold my-btn text-white rounded-pill py-1 px-3'>See more about us</button></Link>
                </Container>
            </div >
        </div >
    );
};

export default Home;