import {useState} from 'react'
import css from './Searchbar.module.css'
import { LuSearch } from "react-icons/lu";

export default function SearchBar ({onSubmit}){

const [inputValue, setInputValue] = useState('');

const handlerOnChange = (event) => {
  setInputValue(event.currentTarget.value.toLowerCase())
}

const handlerOnSubmit = (event) => {
event.preventDefault();
if(inputValue.trim()===''){
  alert('Enter something');
  return;
}
onSubmit(inputValue);
setInputValue('');
}

    return(
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={handlerOnSubmit}>
          <button type="submit" className={css.searchFormButton}>
          <LuSearch/>
          </button>

    <input
    onChange={handlerOnChange}
    value={inputValue}
      className={css.searchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</header>
    )
  }
