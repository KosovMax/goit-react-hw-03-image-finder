import PropTypes from 'prop-types';

import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({imageGalleries, showIdModel}){

    return(
        <ul className="ImageGallery">
            {imageGalleries.map(item => (
                <ImageGalleryItem key={item.id} src={item.webformatURL} id={item.id} showIdModel={showIdModel} />
            ))}
        </ul>
    )
}

ImageGallery.defaultProps = {
    imageGalleries:[]
}

ImageGallery.propTypes = {
    imageGalleries:PropTypes.array.isRequired
}