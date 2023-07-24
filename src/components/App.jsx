import React from 'react'
import SearchBar from './Searchbar/Searchbar'
import ImageGallery from './ImageGallery/ImageGallery'
import * as ImageServes from 'service/image-service'
import Loader from './Loader/Loader'
import Button from './Button/Button'
import Modal from './Modal/Modal'
import css from './App.module.css';

export default class App extends React.Component {
  state = {
    word: '',
    images: [],
    page: 1,
    isButtonLoadVisible: false,
    isLoading: false,
    isModalShow: false,
    dataForModal: {},
  }
  formSubmitHandler = (searchTerm) => {
this.setState({ word: searchTerm , images: [], page: 1});
  }

async componentDidUpdate(prevProps, prevState){
  const {word, page} = this.state;
  if((prevState.word !== word && word!=='')|| prevState.page !==page){
    try {
      this.setState({isLoading: true})
  const {data:{hits, totalHits}} = await ImageServes.getImages(word, page);
  this.setState(prevState => ({images: [...prevState.images, ...hits], isButtonLoadVisible: page<Math.ceil(totalHits/12)}))
    } catch (error) {

    }finally{
this.setState({isLoading: false})
    }

  }
}

onButtonLoadMoreClick=()=>{
this.setState(prevState=>({page: prevState.page + 1 }))
}

handlerOnClickModal = (event, image) =>{
this.setState({isModalShow: true, dataForModal: {src: image.largeImageURL, alt: image.alt}})
}

closeModalW = () =>{
  this.setState({isModalShow: false})
}
  render(){
    const { images, isButtonLoadVisible, isLoading, isModalShow, dataForModal} = this.state;
   return (
    <div className={css.App}>
   <SearchBar onSubmit={this.formSubmitHandler}/>
    {isLoading && <Loader/>}
   {images.length !==0 && <ImageGallery images={images} onClickModal={this.handlerOnClickModal}/>}
    {isButtonLoadVisible && !isLoading && <Button onClickButton={this.onButtonLoadMoreClick}/>}
    {isModalShow && <Modal data={dataForModal} onClose={this.closeModalW}/>}
    </div>
   )
};
}

