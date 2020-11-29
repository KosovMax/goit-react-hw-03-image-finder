import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Searchbar extends Component{

    constructor(props){
        super(props);

        this.state = {
            search: this.props.search
        }
    }

    static defaultProps = {
        search: ''
    }

    static propTypes = {
        search: PropTypes.string.isRequired
    }

    handleChange = evt => {
        this.setState({ search: evt.target.value });
    }

    handleSubmit = evt => {
        evt.preventDefault();

        const { changeSearch } = this.props;
        const { search } = this.state;

        changeSearch(search);
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