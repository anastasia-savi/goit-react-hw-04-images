import React from 'react'
import css from './Searchbar.module.css'
import { LuSearch } from "react-icons/lu";

export default class SearchBar extends React.Component{
state ={
  inputValue: '',
}

handlerOnChange = (event) => {
this.setState({inputValue: event.currentTarget.value.toLowerCase()})
}

handlerOnSubmit = (event) => {
event.preventDefault();
if(this.state.inputValue.trim()===''){
  alert('Enter something');
  return;
}
this.props.onSubmit(this.state.inputValue);
this.setState({inputValue: ''});
}

  render(){
    return(
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handlerOnSubmit}>
          <button type="submit" className={css.searchFormButton}>
          <LuSearch/>
          </button>

    <input
    onChange={this.handlerOnChange}
    value={this.state.inputValue}
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
}
