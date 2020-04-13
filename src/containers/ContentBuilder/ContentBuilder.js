import React, { Component } from 'react';
import Aux from '../../hoc/Aux'
import Article from "../../components/Article/Article";

class ContentBuilder extends Component {
    render() {
        return (
            <Aux>
                <Article/>
                <div>CLIENTS</div>
            </Aux>
        );
    }
}

export default ContentBuilder;