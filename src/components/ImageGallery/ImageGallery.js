import PropTypes from 'prop-types';

import ImageGalleryItem from './../ImageGalleryItem/ImageGalleryItem'

export default function ImageGallery({imageGalleries, showIdModel}){

    return(
        <ul className="ImageGallery">
            {imageGalleries.map(({id, webformatURL}) => (
                <ImageGalleryItem key={id} src={webformatURL} showIdModel={showIdModel} />
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