import PropTypes from 'prop-types';

export default function ImageGalleryItem({id, src, alt, showIdModel}){
    return (
        <li className="ImageGalleryItem">
            <img src={src} alt={alt} onClick={()=>showIdModel(id)} className="ImageGalleryItem-image" />
        </li>
    )
}

ImageGalleryItem.defaultProps = {
    src:'https://dummyimage.com/640x480/2a2a2a/ffffff&text=No+image',
    alt:''
}

ImageGalleryItem.propTypes = {
    src:PropTypes.string.isRequired,
    alt:PropTypes.string.isRequired
}