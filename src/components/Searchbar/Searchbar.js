import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Searchbar extends Component{

    state = {
        search: ''
    }

    handleChange = ({target}) => {
        this.setState({ search: target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();

        const { onSearch } = this.props;
        const { search } = this.state;

        onSearch(search);
    }

    render(){
        return(
            <header className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
                <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                className="SearchForm-input"
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="search"
                value={this.state.search}
                onChange = {this.handleChange}
                />
            </form>
            </header>
        )
    }
}