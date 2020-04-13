import {Col, Row} from "react-bootstrap";
import React from 'react';
import styles from './Footer.module.css';
import Aux from '../../hoc/Aux';
import Menu from '../Navigation/Menu/Menu'

const footer = (props) => (
    <Aux>
        <Row className={styles.Footer}>
            <Col>
                <Menu mainMenu={false}/>
            </Col>
        </Row>
        <Row>
            <Col className={styles.Author}>
                <div>
                    <a href='https://github.com/una-eif506-disenoweb-master'>github.com/una-eif506-disenoweb-master</a>
                </div>
                <div>
                    <a href='www.mike.education'>www.mike.education</a>
                </div>
                <p>Universidad Nacional de Costa Rica</p>
            </Col>
        </Row>
    </Aux>
);

export default footer;