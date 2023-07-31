import { createPortal } from 'react-dom'
import css from './Modal.module.css'
import {useEffect} from 'react'
import { GoXCircle } from "react-icons/go";
import PropTypes from 'prop-types';

export default function Modal ({onClose, data}){
  const modalRoot = document.querySelector('#modal-root');

  const handleKeyDown = event => {
    if(event.code === 'Escape'){
      onClose();
    }
  }
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

 const  handlwBackdropClick = event => {
if(event.currentTarget === event.target){
  onClose();
}
  }
const { src, alt } = data;

  return createPortal(
  <div className={css.overlay} onClick={handlwBackdropClick}>
<div className={css.modal}>
<button className={css.button} onClick={onClose}>
    <GoXCircle/>
    </button>
<img
      src={src}
      alt={`${alt}`}
      className={css.largeImage}
    />
    </div>
</div>, modalRoot
  )
}


Modal.propTypes = {
  data: PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
};
