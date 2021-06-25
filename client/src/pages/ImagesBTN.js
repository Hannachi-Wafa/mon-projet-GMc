import React from 'react'


const ImagesBTN = () => {
    return (
        <div >
            <div style={{display:"flex",flexDirection:"row",marginLeft:"10%"}}>
            <div className="container">
                <p style={{marginLeft:"220px"}} >Marriage</p>
                    <a href="">
                    <img style={{width:"500px",height:"350px"}} src="https://action2.nl/wp-content/uploads/2020/04/Trouwen-in-het-buitenland.jpeg" alt=""/>
                    </a>
            </div>
            <div className="container" >
                <p style={{marginLeft:"220px"}} >Anniversaire</p>
                    <a href="">
                    <img style={{width:"500px",height:"350px"}} src="https://la-boite-a-dragees.fr/wp-content/uploads/2020/12/deco-anniversaire-18-ans.jpg" alt=""/>
                    </a>
            </div>
            </div>
            <div style={{marginLeft:"30%",marginTop:"5%"}} >
                <p style={{marginLeft:"220px"}} >Baby Shower</p>
                    <a href="">
                    <img style={{width:"500px",height:"350px"}} src="https://la-boite-a-dragees.fr/wp-content/uploads/2020/01/Decoration-baby-shower-garcon.jpg" alt=""/>
                    </a>
            </div>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
    </div>
    )
}

export default ImagesBTN
