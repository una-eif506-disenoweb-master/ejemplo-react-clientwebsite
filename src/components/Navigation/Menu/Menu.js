import React from 'react';
import styles from './Toolbar.module.css';
import {Row, Col}  from 'react-bootstrap';

const toolbar = (props) => (
    <Row className={styles.Toolbar}>
        <Col sm={4}>LOGO</Col>
        <Col sm={4}>MENU</Col>
    </Row>
);

export default toolbar;