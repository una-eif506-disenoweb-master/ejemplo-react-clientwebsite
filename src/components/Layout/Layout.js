import React from 'react';
import Aux from '../../hoc/Aux';
import styles from './Layout.module.css'
import {Container, Row, Col} from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'

const Layout = (props) => (
    <Aux>
        <Container>
            <Row>
                <Col>
                    <Header/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <main className={styles.Content}>
                        {props.children}
                    </main>
                </Col>
            </Row>
            <Footer />
        </Container>
    </Aux>
);

export default Layout;