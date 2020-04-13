import React from 'react';
import styles from './Menu.module.css';
import {Row, Col, ButtonGroup, Button}  from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const menu = (props) => {
    const mainStyle = {
        textAlign: 'right',
        marginTop: '2em'
    };

    const footerStyle = {
        textAlign: 'left',
        marginTop: '1em'
    };

    let style = (props.mainMenu ? mainStyle : footerStyle);

    return (
        <Row className={styles.Menu} style={style}>
            <Col>
                <ButtonGroup aria-label="Menu Principal" size='lg' className='mb-2'>
                    <LinkContainer to="/">
                        <Button>Inicio</Button>
                    </LinkContainer>
                    <LinkContainer to="/clientes">
                        <Button>Clientes</Button>
                    </LinkContainer>
                </ButtonGroup>
            </Col>
        </Row>
    );
};

export default menu;