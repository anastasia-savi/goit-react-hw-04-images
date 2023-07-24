import css from './ImageGalleryItem.module.css'
import PropTypes from 'prop-types'

const ImageGalleryItem = ({webformatURL,  largeImageURL, tags, onClickModal}) => {
  return (
    <li className={css.imageGalleryItem }>
    <img
      src={webformatURL}
      alt={`${tags}`}
      className={css.imageGalleryItemImage}
      onClick={(event) => onClickModal(event, { webformatURL, largeImageURL, alt: tags })}
    />
  </li>
         )
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

