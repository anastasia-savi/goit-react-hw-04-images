import React from 'react'
import css from './ImageGallery.module.css'
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem.jsx';
import PropTypes from 'prop-types'

export default class ImageGallery extends React.Component {


render() {
const {images, onClickModal} = this.props
  return (
<div>
<ul className={css.imageGallery}>
          {images.map((image) => (
            <ImageGalleryItem
              key={image.id}
              webformatURL={image.webformatURL}
              tags={image.tags}
              largeImageURL={image.largeImageURL}
              onClickModal={onClickModal}
            />
          ))}
        </ul>
</div>
  );
}
}

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

