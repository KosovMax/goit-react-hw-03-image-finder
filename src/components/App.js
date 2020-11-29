import React, { Component } from 'react';
import axios from 'axios';

import Loader from "react-loader-spinner";
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Modal from './Modal/Modal';


export default class App extends Component{

    constructor(props){
        super(props);

        this.state = {
            imageGalleries:[],
            page:1,
            search:'', 
            loading: false,
            error: null,
            srcModal:'',
            showModal:false
        }
    }

    updateSerach = (search) =>{
        if(this.state.search != search)
            this.setState({
                search:search,
                imageGalleries:[]
            })

    }

    onLoadMore = () => {

        this.setState({page:this.state.page + 1});
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        },500)
    }


    componentDidUpdate = (prevProps, prevState) =>{
        // console.log(prevProps, prevState, snapshot)

        const API_KEY = '19319242-70903095163a85f904f3acecb';
        const { search, page } = this.state; 

        if(prevState.search !== search || prevState.page !== page){

            this.setState({ loading: true });
    
            axios
            .get('https://pixabay.com/api/?q='+search+'&page='+page+'&key='+API_KEY+'&image_type=photo&orientation=horizontal&per_page=12')
            .then(response => this.setState({ imageGalleries:this.state.imageGalleries.concat(response.data.hits) }))
            .catch(error => this.setState({ error:error }))
            .finally(() => this.setState({ loading: false }))

        }
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
        this.setState({showModal: !this.state.showModal})
    }
    

    render(){
        const { search, imageGalleries, loading, error, srcModal, showModal} = this.state;

        console.log(this.state);

        return (
           <div className="App">   
                <Searchbar search={search} changeSearch={this.updateSerach} />
                {error && <p>Whoops, something went wrong: {error.message}</p>}
                {imageGalleries.length > 0 && <ImageGallery imageGalleries={imageGalleries} showIdModel={this.showIdModel} /> }
                {loading && <Loader type="Oval" color="#00BFFF" height={100} width={100} style={{textAlign:"center"}} />}
                {imageGalleries.length > 0 && <Button onLoad={this.onLoadMore} />}
                {showModal && <Modal src={srcModal} closeModal={this.toggleModal} />}
           </div>
        );
    }
}
