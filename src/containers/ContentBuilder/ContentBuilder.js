import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Article from "./Article/Article";
import ClientList from './Client/ClientList'

import {Route} from 'react-router-dom'
class ContentBuilder extends Component {
    render() {
        return (
            <Aux>
                <Route path='/' exact component={Article} />
                <Route path='/clientes' exact component={ClientList} />
            </Aux>
        );
    }
}

export default ContentBuilder;