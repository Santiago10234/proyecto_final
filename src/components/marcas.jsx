import React from 'react'

function Marcas() {
  return (
    <div>
        <div className="card-group" style={{display:'flex', justifyContent:'space-evenly', marginLeft:'60px', marginRight:'60px'}}>
            <div style={{border:'1px solid silver', borderRadius:'20px', padding:'6px',  transition: 'transform 0.3s ease', cursor:'pointer', backgroundColor:'white'}}   onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img style={{width:'150px'}} src="src\assets\Captura_de_pantalla_2024-09-19_144353-transformed.png" className="card-img-top" alt="..."/>
            </div>
            <div style={{border:'1px solid silver', borderRadius:'20px', padding:'6px',  transition: 'transform 0.3s ease', cursor:'pointer', backgroundColor:'white'}} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img style={{width:'150px'}} src="src\assets\Captura_de_pantalla_2024-09-19_144405-transformed.png" className="card-img-top" alt="..."/>
            </div>
            <div style={{border:'1px solid silver', borderRadius:'20px', padding:'6px',  transition: 'transform 0.3s ease', cursor:'pointer', backgroundColor:'white'}} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img style={{width:'150px'}} src="src\assets\Captura_de_pantalla_2024-09-19_144416-transformed.png" className="card-img-top" alt="..."/>
            </div>
            <div style={{border:'1px solid silver', borderRadius:'20px', padding:'6px',  transition: 'transform 0.3s ease', cursor:'pointer', backgroundColor:'white'}} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img style={{width:'150px'}} src="src\assets\Captura_de_pantalla_2024-09-19_144426-l3Kb0GS_I-transformed.png" className="card-img-top" alt="..."/>
            </div>
            <div style={{border:'1px solid silver', borderRadius:'20px', padding:'6px',  transition: 'transform 0.3s ease', cursor:'pointer', backgroundColor:'white'}} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img style={{width:'150px'}} src="src\assets\Captura_de_pantalla_2024-09-19_144446-transformed.png" className="card-img-top" alt="..."/>
            </div>
            <div style={{border:'1px solid silver', borderRadius:'20px', padding:'6px',  transition: 'transform 0.3s ease', cursor:'pointer', backgroundColor:'white'}} onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}>
                <img style={{width:'150px'}} src="src\assets\Captura_de_pantalla_2024-09-19_144433-transformed (1).png" className="card-img-top" alt="..."/>
            </div>
        </div>
    </div>
  )
}

export default Marcas
