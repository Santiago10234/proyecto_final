import { useNavigate } from 'react-router-dom';

const Marcas = () => {
    const navigate = useNavigate();

    const handleRedirect = (brand) => {
        navigate(`/search/${brand}`);
    };

    return (
        <div>
            <div className="card-group" style={{display: 'flex', justifyContent: 'space-evenly', marginLeft: '60px', marginRight: '60px'}}>
                <div style={{border: '1px solid silver', borderRadius: '20px', padding: '6px', transition: 'transform 0.3s ease', cursor: 'pointer', backgroundColor: 'white'}} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                     onClick={() => handleRedirect('Volkswagen')}>
                    <img style={{width: '150px'}} src="../src/assets/Captura_de_pantalla_2024-09-19_144353-transformed.png" className="card-img-top" alt="Volkswagen"/>
                </div>
                <div style={{border: '1px solid silver', borderRadius: '20px', padding: '6px', transition: 'transform 0.3s ease', cursor: 'pointer', backgroundColor: 'white'}} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                     onClick={() => handleRedirect('Peugeot')}>
                    <img style={{width: '150px'}} src="../src/assets/Captura_de_pantalla_2024-09-19_144405-transformed.png" className="card-img-top" alt="Peugeot"/>
                </div>
                <div style={{border: '1px solid silver', borderRadius: '20px', padding: '6px', transition: 'transform 0.3s ease', cursor: 'pointer', backgroundColor: 'white'}} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                     onClick={() => handleRedirect('Mercedes Benz')}>
                    <img style={{width: '150px'}} src="../src/assets/Captura_de_pantalla_2024-09-19_144416-transformed.png" className="card-img-top" alt="Mercedes Benz"/>
                </div>
                <div style={{border: '1px solid silver', borderRadius: '20px', padding: '6px', transition: 'transform 0.3s ease', cursor: 'pointer', backgroundColor: 'white'}} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                     onClick={() => handleRedirect('Ford')}>
                    <img style={{width: '150px'}} src="../src/assets/Captura_de_pantalla_2024-09-19_144426-l3Kb0GS_I-transformed.png" className="card-img-top" alt="Ford"/>
                </div>
                <div style={{border: '1px solid silver', borderRadius: '20px', padding: '6px', transition: 'transform 0.3s ease', cursor: 'pointer', backgroundColor: 'white'}} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                     onClick={() => handleRedirect('Audi')}>
                    <img style={{width: '150px'}} src="../src/assets/Captura_de_pantalla_2024-09-19_144446-transformed.png" className="card-img-top" alt="Audi"/>
                </div>
                <div style={{border: '1px solid silver', borderRadius: '20px', padding: '6px', transition: 'transform 0.3s ease', cursor: 'pointer', backgroundColor: 'white'}} 
                     onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'} 
                     onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                     onClick={() => handleRedirect('BMW')}>
                    <img style={{width: '150px'}} src="../src/assets/Captura_de_pantalla_2024-09-19_144433-transformed (1).png" className="card-img-top" alt="BMW"/>
                </div>
            </div>
        </div>
    );
};

export default Marcas;


