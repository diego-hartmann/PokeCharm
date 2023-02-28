import css from './style.module.css';

const index = () => {
    // creating a literal style object
    // so its values can be easier dinamicaly changed
    // without the need to use any external framework
    const borderSize = 3;
    const borderColor = '#3d63b7';
    const textStyle = {
        letterSpacing: '0.4rem',
        color:'#fac705',
        textShadow: `-${borderSize}px -${borderSize}px 0 ${borderColor}, ${borderSize}px -${borderSize}px 0 ${borderColor}, -${borderSize}px ${borderSize}px 0 ${borderColor}, ${borderSize}px ${borderSize}px 0 ${borderColor}`
    }

    {/* @ts-ignore */}
    const Flame = ({delay}:{delay:number}) => <span className={css.wiggle} style={ { fontSize: '2rem', '--delay': `${delay}s`} }>🔥</span>;
    
    return (
        <div style={{display:'flex', width: '100%', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <Flame delay={0} />
            <h1 data-style="poke" style={textStyle}>PokeCharm</h1>
            <Flame delay={1} />
        </div>
    )
}

export default index