import React, { Component } from 'react';

export default class Modal extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount = () => {
        window.addEventListener('keydown', this.handler)
    }
    componentWillUnmount = () => {
        window.removeEventListener('keydown', this.handler)
    }
    handler = evt => {
        if (evt.key === 'Escape') {
            this.props.closeModal()
        }
    }

    render(){
        const { src, closeModal } = this.props
        return(
            <div className="Overlay" onClick={closeModal} >
                <div className="Modal">
                    <img src={src} alt="" />
                </div>
            </div>
        )
    }
}