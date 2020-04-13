import React from 'react';
import styles from './Menu.module.css';
import {Row, Col}  from 'react-bootstrap';

const menu = (props) => {
    const mainStyle = {
        textAlign: 'right',
        marginTop: '80px',
        fontSize: '1.3em'
    };

    const footerStyle = {
        textAlign: 'left',
        marginTop: '0',
        fontSize: '1.3em'
    };

    let style = (props.mainMenu ? mainStyle : footerStyle);

    return (
        <Row className={styles.Menu} style={style}>
            <Col>
                <ul>
                    <li><a href='/'>Inicio</a></li>
                    <li>|</li>
                    <li><a href='/clientes'>Clientes</a></li>
                </ul>
            </Col>
        </Row>
    );
};

export default menu;