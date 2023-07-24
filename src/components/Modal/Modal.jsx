import { createPortal } from 'react-dom'
import css from './Modal.module.css'
import React from 'react'
import { GoXCircle } from "react-icons/go";
import PropTypes from 'prop-types';

export default class Modal extends React.Component{
  modalRoot = document.querySelector('#modal-root');
  componentDidMount(){
    window.addEventListener('keydown',this.handleKeyDown)
  }

  componentWillUnmount(){
    window.removeEventListener('keydown',this.handleKeyDown)
  }

  handleKeyDown = event => {
    if(event.code === 'Escape'){
      this.props.onClose();
    }
  }

  handlwBackdropClick = event => {
if(event.currentTarget === event.target){
  this.props.onClose();
}
  }

render(){
  const { src, alt } = this.props.data;
  return createPortal(
  <div className={css.overlay} onClick={this.handlwBackdropClick}>
<div className={css.modal}>
<button className={css.button} onClick={this.props.onClose}>
    <GoXCircle/>
    </button>
<img
      src={src}
      alt={`${alt}`}
      className={css.largeImage}
    />
    </div>
</div>, this.modalRoot
  )
}
}

Modal.propTypes = {
  data: PropTypes.objectOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};
