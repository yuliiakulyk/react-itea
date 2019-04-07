import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class SearchInput extends Component {

    constructor(props) {
        super(props);
    } 

    render() {
        const placeholder = "Введите имя для поиска";
        return(
            <input className="search-input form-control" placeholder={placeholder} type='text' name='filter' onChange={this.props.filter}>
            </input>
        );
    }
}

export default SearchInput;