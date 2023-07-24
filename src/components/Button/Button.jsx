import css from './Button.module.css'

 const Button = ({onClickButton}) => {
  return(
    <button className={css.button} onClick={onClickButton}>Load More</button>
  )
 }

 export default Button
;
