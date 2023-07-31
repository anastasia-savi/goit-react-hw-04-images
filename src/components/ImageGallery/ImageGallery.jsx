import React from 'react'
import css from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import PropTypes from 'prop-types'

export default function ImageGallery ({images, onClickModal}){

  return (
<>
<ul className={css.imageGallery}>
          {images.map(({id, webformatURL, largeImageURL, tags}) => (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              onClickModal={onClickModal}
            />
          ))}
        </ul>
</>
  );
}


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickModal: PropTypes.func.isRequired,
};
