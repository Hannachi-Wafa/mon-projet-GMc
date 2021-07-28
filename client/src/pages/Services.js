import React from 'react'

const Services = () => {
    return (
        <div >
            
            <div style={{ display:'flex', flexDirection:'row',marginLeft:'10%'}}>
            <div className='1'>
            <p >
            <h1 style={{marginLeft:'10%'}}>NOS SERVICES</h1>
            <br></br>
            <br></br>
            </p>
            <h3 style={{color:'DeepPink'}}>
                Vente des articles décorative
                </h3>
                <br></br>
                <h5>une gamme variée d’accessoires de décoration pour embellir votre évènement</h5>
                <br></br>
                <img style={{width:'550px', height:'550px',border: '5px solid #555'}} alt="" src='https://5.imimg.com/data5/BC/UH/OW/SELLER-31675113/unicorn-theme-birthday-decoration-items-for-kids-party-unicorn-theme-birthday-crockery-items-500x500.jpg'></img>

            </div>
            <div className='2' style={{marginLeft:'3%', marginTop:'5%'}}>
            <h3 style={{color:'DeepPink'}}>
            Décorer votre évènement speciale
                </h3>
                <br></br>
                <h5>La décoration de table et de salle, ou bien encore, l’organisation de votre évènement,
                <br></br>
                    vous retrouverez l’essentiel pour une décoration parfaite qui vous ressemble.</h5>
                <img style={{width:'670px', height:'550px', border: '5px solid #555'}} alt="" src='https://mykarmastream.com/wp-content/uploads/2017/04/spring-party-ideas.jpg'></img>

            </div>
            </div>
        </div>
    )
}

export default Services
