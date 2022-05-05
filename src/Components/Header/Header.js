import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogout = () => {
        signOut(auth)
    }
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className='text-white fw-bold'>

                        Perfume-Warehouse</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/home">Home</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/about">About</NavLink>
                            <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/blog">Blog</NavLink>
                            {
                                user && <>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/manageInventory">Manage Inventory</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/addItem">Add Item</NavLink>
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/myItems">My Items</NavLink>

                                </>
                            }
                            {
                                user ? <button onClick={handleLogout} className='my-btn rounded-pill text-white fw-bold ms-3'>Log out</button> :
                                    <NavLink className={({ isActive }) => (isActive ? 'active-link' : 'link')} to="/login">Login</NavLink>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;