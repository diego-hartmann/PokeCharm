const PagesMenu = () => {
  const container = {
    display:'flex',
    width:'100%',
    justifyContent: 'center'
  }
  const btn = {
    width: '100px',
    height: '60',
    background: 'white',
    color:'red',
    cursor: 'pointer'
  }
  return (
    <div style={container}>
        <p style={btn}>Home</p>
        <p style={btn}>Pokedex</p>
    </div>
  )
}

export default PagesMenu