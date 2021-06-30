import React from 'react'

const VenteMariage = () => {
    return (
        <div>
            <div style={{display:"flex",flexDirection:"row",marginLeft:"10%"}}>
            <div className="container">
                <p style={{marginLeft:"220px"}} >Marriage</p>
                    <a href="/pages/ThemeMariage">
                    
                    <img style={{width:"500px",height:"350px"}} src="https://www.mariage.com/wp-content/uploads/2016/05/planche-mon-mariage-electrique-en-bleu-cobalt.jpg" alt=""/>
                    </a>
            </div>
            <div className="container" >
                <p style={{marginLeft:"220px"}} >Anniversaire</p>
                    <a href="/pages/ThemeAnniv">
                    <img style={{width:"500px",height:"350px"}} src="https://p1.storage.canalblog.com/22/07/1144894/94882664_o.jpg" alt=""/>
                    </a>
            </div>
            </div>
            <div style={{marginLeft:"30%",marginTop:"5%"}} >
                <p style={{marginLeft:"220px"}} >Baby Shower</p>
                    <a href="/pages/ThemeBaby">
                    <img style={{width:"500px",height:"350px"}} src="https://vss.astrocenter.fr/habitatpresto/pictures/29478397-baby-shower-ballon.jpg" alt=""/>
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

export default VenteMariage
