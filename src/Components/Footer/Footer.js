import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch } from '@fortawesome/free-solid-svg-icons'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='bg-dark text-white py-2'>
            <Container>
                <Row className='py-3'>
                    <Col xs={12} md={6}>
                        <h5>Contact us</h5>
                        <p><FontAwesomeIcon icon={faPhone} /> +096089039</p>
                        <p><FontAwesomeIcon icon={faEnvelope} />   perfumeWare23@gmail.com</p>
                        <p><FontAwesomeIcon icon={faStopwatch} />  (sat-fri ): 9.00 am-18.00 pm</p>
                        <p><FontAwesomeIcon icon={faLocationPin} />  14,streetroad,dhanmondi,bangladesh</p>
                    </Col>
                    <Col xs={12} md={6}>
                        <h5>Information</h5>
                        <div >
                            <p ><FontAwesomeIcon icon={faArrowRight} /> About us</p>
                            <p><FontAwesomeIcon icon={faArrowRight} /> Manage </p>
                            <p><FontAwesomeIcon icon={faArrowRight} /> Blogs</p>
                            <p><FontAwesomeIcon icon={faArrowRight} />Contact</p>
                        </div>
                    </Col>

                </Row>

                <h6><small>copyright &copy; reserves by eva || {year}  </small></h6>
            </Container>
        </div>
    );
};

export default Footer;