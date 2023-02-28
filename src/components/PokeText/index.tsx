import css from './style.module.css';
const PokeText = (props:{text:string}) => <p className={css.pokeText}>{props.text}</p>
export default PokeText;