import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myjs from '../../banner/myjs.png'
import mysql from '../../banner/mysql.png'
import nodedb from '../../banner/nodedb.png'
const Blog = () => {
    return (
        <div className='my-3'>
            <Container>
                <Row className='mt-5'>
                    <Col xs={12} md={6}>
                        <div>
                            <img className='w-100' src={myjs} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className='text-start'>
                            <h4>1. Difference between javascript and nodjs ?</h4>
                            <p>
                                # Javascript is a programming language and nodeJS is a cross-platform,open source,javascript runtime environment.
                                <br />
                                # Javascript is use in frontend development and nodeJS is used in server-side development.
                                <br />
                                # Javascript is capable to add html tags and NodeJS is not capable to add html tags.
                                <br />
                                # Javascript can run all browser ,all browser have in-built javascript engines,which is why browsers can run the javascript code of the web page and nodeJs use V8 engine which is enable to parse and run javascript code.
                                <br />
                                # Not all javascript apps could be nodeJS apps and All nodeJs apps are javascript apps they use javascript as their programming language.
                            </p>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col className='text-start' xs={12} md={6}>
                        <h4>2. Difference between sql and nosql database ?</h4>
                        <p>
                            # Sql is relatonal database and nosql database is non-relational or distributed database.
                            <br />
                            # Sql database structure is table-based and nosql database structure is key-value pairs,document based,graph database,wide-column stores.
                            <br>
                            </br>
                            # Sql's scaling is typically achieved horizontaly with data partitioned to span servers and nonsql;s scaling is typically achieved vertically with more server resources.
                            <br />
                            # Sql's schema static nosql schema synamic.
                            <br />
                            # Sql is structured query language and nosql is un-structured query language.
                        </p>
                    </Col>
                    <Col xs={12} md={6}>
                        <div>
                            <img className='w-100' src={mysql} alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={12} md={6}>
                        <div>
                            <img className='w-100' src={nodedb} alt="" />
                        </div>
                    </Col>
                    <Col xs={12} md={6} className='text-start'>
                        <h4>3.When should you use nodejs and when should you use mongodb?</h4>
                        <p>
                            When any project needs a javascript programming language and  a runtime library  and need compile or interpret code that time we should use nodejs.nodjs is such as tools for javascript language.
                            <br />
                            when any project needs the ability to persistently store data ,update data,delet data that time we should use mongodb.mongodb is a populer database.
                            <br />
                            Finally we can say mongodb is a database where we can store data ,nodejs helps to connect our client site to database by its server site.

                        </p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blog;