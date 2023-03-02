import css from './index.module.css';

export default ( { onClick }: { onClick : ()=> void} ) => {
    
    return(
        <div onClick={onClick} className={css.container}>
            <img src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/769px-Pokebola-pokeball-png-0.png"} />
        </div>
    )
} 