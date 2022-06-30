import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    const navigate = useNavigate();
    function logOut() {
        localStorage.clear();
        navigate("/register")
    }


    return (
        <div>
            <Navbar bg="warning" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#" style={{color:"white"}}>*</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0 navbar_wrapper"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            {
                                localStorage.getItem('user-info') ?
                                    <>
                                        <Link to="/">ÜRÜNLERİ LİSTELE</Link>
                                        <Link to="/add">ÜRÜN EKLE</Link>
                                        
                                        <Link to="/search">SEARCH</Link>
                                    </>
                                    :
                                    <>
                                        <Link to="/login">GİRİŞ</Link>
                                        <Link to="/register">ÜYE OL</Link>
                                    </>
                            }

                            
                        </Nav>

                        {localStorage.getItem('user-info')?
                               
                        <Nav>
                            <NavDropdown title= {user && user.data.name} >
                                <NavDropdown.Item onClick={logOut}>ÇIKIŞ</NavDropdown.Item>
                            </NavDropdown>
                        </Nav> 
                        :
                        null
                        }
                         <Navbar.Brand href="#" style={{color:"white"}}>E-Commerce</Navbar.Brand>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header