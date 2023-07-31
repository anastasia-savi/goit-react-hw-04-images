import {useState, useEffect} from 'react'
import SearchBar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import * as ImageServes from 'service/image-service'
import Loader from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import css from './App.module.css';

export default function App () {
const [word, setWord] = useState('');
const [images, setImages] = useState([]);
const [page, setPage] = useState(1);
const [isButtonLoadVisible, setIsButtonLoadVisible] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const [isModalShow, setIsModalShow] = useState(false);
const [dataForModal, setDataForModal] = useState({});
const [formSubmitted, setFormSubmitted] = useState(false);

 const formSubmitHandler = (searchTerm) => {
  setWord(searchTerm);
  setImages([]);
  setPage(1);
  setFormSubmitted(true);
  }

  useEffect(() => {
    async function api() {
      if(formSubmitted){
      try {
        setIsLoading(true);
        const { data: { hits, totalHits } } = await ImageServes.getImages(word, page);
        setImages(state => [...state, ...hits]);
        setIsButtonLoadVisible(page < Math.ceil(totalHits / 12));
      } catch (error) {

      } finally {
        setIsLoading(false);
      }
    }
  }
    api();
  }, [formSubmitted, word, page]);

const onButtonLoadMoreClick=()=>{
  setPage(state => state + 1 );
}

const handlerOnClickModal = (event, image) =>{
  setIsModalShow(true);
  setDataForModal({src: image.largeImageURL, alt: image.alt});
}

const closeModalW = () =>{
  setIsModalShow(false);
}

   return (
    <div className={css.App}>
   <SearchBar onSubmit={formSubmitHandler}/>
    {isLoading && <Loader/>}
   {images.length !==0 && <ImageGallery images={images} onClickModal={handlerOnClickModal}/>}
    {isButtonLoadVisible && !isLoading && <Button onClickButton={onButtonLoadMoreClick}/>}
    {isModalShow && <Modal data={dataForModal} onClose={closeModalW}/>}
    </div>
   )
};



