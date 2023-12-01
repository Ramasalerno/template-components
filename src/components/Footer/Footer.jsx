import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    return (
        <footer className="custom-footer py-5 bg-dark text-white">
            <Container className='mt-5'>
                <Row className="align-items-center justify-content-around">
                    <Col md={4} className="text-center image-footer">
                        <Image src="https://placehold.jp/3d4070/ffffff/150x150.png" roundedCircle alt="Logo" className="footer-logo" />
                    </Col>

                    <Col md={4} className="text-center">
                        <h2>Enlaces útiles</h2>
                        <ul className="list-unstyled">
                            <li><a href="#" className="footer-link">Inicio</a></li>
                            <li><a href="#" className="footer-link">Productos</a></li>
                            <li><a href="#" className="footer-link">Nosotros</a></li>
                            <li><a href="#" className="footer-link">Contacto</a></li>
                        </ul>
                    </Col>

                    <Col md={4} className="text-center">
                        <h2>Síguenos</h2>
                        <div className="social-icons">
                            <FaFacebookF className="footer-social-icon" />
                            <FaTwitter className="footer-social-icon" />
                            <FaInstagram className="footer-social-icon" />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col md={12} className="text-center">
                        <p className="footer-copyright">
                            Creado por  &copy; Chagra
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
