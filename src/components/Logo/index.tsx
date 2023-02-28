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

    // local Component
    const Flame = () => <span className={css.flame}>🔥</span>;
    
    return (
        <div style={{display:'flex', width: '100%', justifyContent:'center', alignItems:'center', gap:'1rem'}}>
            <Flame />
            <h1 data-style="poke" style={textStyle}>PokeCharm</h1>
            <Flame />
        </div>
    )
}

export default index