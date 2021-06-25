import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ThemeAnniv = () => {
    return (
        <div style={{display:"flex",flexDirection:"row", marginLeft:"80px"}}>
            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="http://www.monbebecheri.com/wp-content/uploads/2012/11/anniversaire-Tiffany-En-pointe-photography-1.jpeg" />
            <Card.Body>
            <Card.Title>Chic</Card.Title>
            <Card.Text>
            5 models chic et élegant disponibles 
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            </Card.Body>
            </Card>

            <span style={{color:"white"}}>
                .........
            </span>


            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://m.media-amazon.com/images/S/aplus-media/sc/f91258a5-0689-4d6c-9858-371f82f256cb.__CR0,0,970,600_PT0_SX970_V1___.jpg" />
            <Card.Body>
            <Card.Title>Dessin animé</Card.Title>
            <Card.Text>
            7 models de votre dessin animé  préféré disponibles 
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            
            </Card.Body>
            </Card>

            <span style={{color:"white"}}>
                .........
            </span>


            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.untibebe.com/wp-content/uploads/2019/03/anniversaire-tropical-theme.jpg" />
            <Card.Body>
            <Card.Title>Tropicale</Card.Title>
            <Card.Text>
            6 models sur la plage disponible
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default ThemeAnniv
