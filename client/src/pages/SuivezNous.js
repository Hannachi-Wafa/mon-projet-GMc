import React from 'react'

const SuivezNous = () => {
    return (
        <div>
            <p style={{marginLeft:'10%'}}>
                <h1>SUIS-NOUS:</h1>
                <span style={{color:'DeepPink'}}>
                Cliquez sur...
                </span>
                <br></br>
                Nous avons sélectionné sur SAVE the DECO tous les articles
                que nous aimons pour tous les moments festifs de votre vie, alors profitez, amusez-vous et décorez !
            </p>
            {/* <img  style={{marginLeft:'10%'}} alt='' src='/images/socialMedia.PNG'></img> */}
            <div style={{display:'flex', flexDirection:'row',justifyContent:"space-around" }}>
            <a href="https://www.facebook.com/">
                    
                    <img  src="/images/Facebook.PNG" alt="" style={{height:"120px"}}/>
            </a>
            <a href="https://www.instagram.com/">
                    
                    <img  src="/images/Insta.PNG" alt="" style={{height:"120px"}}/>
            </a>
            <a href="https://www.pinterest.fr/">
                    
                    <img  src="/images/Pintrest.PNG" alt="" style={{height:"120px"}}/>
            </a>
            <a href="https://www.savethedeco.com/blog">
                    
                    <img  src="/images/Blog.PNG" alt="" style={{height:"120px"}}/>
            </a>
            </div>
        </div>
    )
}

export default SuivezNous
