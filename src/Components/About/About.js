
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faBuildingColumns } from '@fortawesome/free-solid-svg-icons'
import { faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons'
import { faUsersLine } from '@fortawesome/free-solid-svg-icons'
import { faEarth } from '@fortawesome/free-solid-svg-icons'
import { faUserTie } from '@fortawesome/free-solid-svg-icons'
import { faCartFlatbed } from '@fortawesome/free-solid-svg-icons'
import { faPersonDigging } from '@fortawesome/free-solid-svg-icons'
import { faUsersRays } from '@fortawesome/free-solid-svg-icons'
import { faBoxOpen } from '@fortawesome/free-solid-svg-icons'
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons'
import { faAward } from '@fortawesome/free-solid-svg-icons'


const About = () => {
    return (
        <div className='mb-5'>
            <Container>
                <div className='my-3'>
                    <h2 className='mb-3'>About us</h2>
                    <h5 className='mb-3'>Our warehousing services are known nationwide to be one of the most reliable,safe and affordable .We are honest ,dependable.we have quality  commitment.we are always improving.Here we show our warehouse information.</h5>
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
                    <Row className='mt-5' >
                        <Col xs={12} md={3}>
                            <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faAward} /> 1k</h3>
                                <h4 className='arrow'>Business testimonials</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faBoxesStacked} />  </h3>
                                <h4 className='arrow'>Packaging and wrapping</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faBoxOpen} /> 50k </h3>
                                <h4 className='arrow'>Storage</h4>
                            </div>
                        </Col>
                        <Col xs={12} md={3}>
                            <div style={{ height: '180px' }} className=' pt-5 my-bg border border-1 rounded'>
                                <h3 className='arrow'> <FontAwesomeIcon className='arrow' icon={faBuildingColumns} /> </h3>
                                <h4 className='arrow'>Door-to-door delivery</h4>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default About;