import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Article from "./Article/Article";
import {Route} from 'react-router-dom'
class ContentBuilder extends Component {
    render() {
        return (
            <Aux>
                <Route path='/' exact component={Article} />
                <Route path='/clientes' exact render={() => <h1>Lista de Clientes</h1>}  />
            </Aux>
        );
    }
}

export default ContentBuilder;