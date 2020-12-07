import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{

    componentDidMount = () => {
        window.addEventListener('keydown', this.handler)
    }
    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handler)
    }

    handler = ({ key }) => {
        if (key === 'Escape') this.props.closeModal()
    }

    handleBackdrop = evt =>{
        // console.log(evt.currentTarget);
        // console.log(evt.target);

        if(evt.currentTarget === evt.target) this.props.closeModal()
    }

    render(){
        const { src } = this.props
        return ReactDOM.createPortal(
            <div className="Overlay" onClick={this.handleBackdrop} >
                <div className="Modal">
                    <img src={src} alt="" />
                </div>
            </div>, 
            modalRoot
        );
    }
}