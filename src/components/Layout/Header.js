import {Col, Row} from "react-bootstrap";
import React from "react";
import Logo from '../../assets/clients.png';
import styles from './Header.module.css'
import Menu from '../Navigation/Menu/Menu'

const header = (props) => (
    <Row className={styles.Header}>
        <Col sm={4}>
            <img src={ Logo } alt= 'Clientes' className={styles.Logo} />
        </Col>
        <Col sm={8}>
            <Menu mainMenu={true}/>
        </Col>
    </Row>
);

export default header;