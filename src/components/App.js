import React, { Component } from 'react';


import Loader from "react-loader-spinner";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import hitsApi from './../services/hits-api'


export default class App extends Component{

    state = {
        imageGalleries:[],
        page:1,
        searchQuery:'', 

        loading: false,
        error: null,

        srcModal:'',
        showModal:false
    }

    updateSerach = (query) =>{
        if(this.state.searchQuery !== query)
            this.setState({
                searchQuery:query,
                imageGalleries:[],
                page:1
            })

    }

    componentDidUpdate = (prevProps, prevState) =>{
        // console.log(prevProps, prevState, snapshot)
        
        if(prevState.searchQuery !== this.state.searchQuery){
            this.fetchHits()
        }
    }

    fetchHits = () =>{

        const { searchQuery, page } = this.state; 

        this.setState({ loading: true });
    
        hitsApi.fetchHits({searchQuery:searchQuery, page:page})
        .then(data => {
                this.setState(prevState => ({
                    imageGalleries: [...prevState.imageGalleries, ...data],
                    page: prevState.page+1
                }))
            })
        .catch(error => this.setState({ error:error }))
        .finally(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
            this.setState({ loading: false })
        })
    }

    showIdModel = (id) =>{
        const { imageGalleries } = this.state;
        console.log(id);

        const image = imageGalleries.find((item) => {return item.id === id})

        console.log(image);
        this.setState({
            srcModal:image.largeImageURL,
            showModal:true
        })
    }

    toggleModal = () =>{
        this.setState(({showModal}) => ({
            showModal: !showModal
        }))
    }
    

    render(){
        const { imageGalleries, loading, error, srcModal, showModal} = this.state;

        console.log(this.state);

        return (
           <div className="App">   
                <Searchbar onSearch={this.updateSerach} />
                {error && <p>Whoops, something went wrong: {error.message}</p>}
                {imageGalleries.length > 0 && <ImageGallery imageGalleries={imageGalleries} showIdModel={this.showIdModel} /> }
                {loading && <Loader type="Oval" color="#00BFFF" height={100} width={100} style={{textAlign:"center"}} />}
                {imageGalleries.length > 0 && <Button onClick={this.fetchHits} >Load more</Button>}
                {showModal && <Modal src={srcModal} closeModal={this.toggleModal} />}
           </div>
        );
    }
}
