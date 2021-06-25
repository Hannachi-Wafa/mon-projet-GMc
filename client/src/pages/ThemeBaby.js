import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ThemeBaby = () => {
    return (
        <div style={{display:"flex",flexDirection:"row", marginLeft:"80px"}}>
            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://i.pinimg.com/originals/73/06/5c/73065c248a188577b4c43c0401ceb23a.jpg" />
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
            <Card.Img style={{ height: '250px' }} variant="top" src="https://la-boite-a-dragees.fr/wp-content/uploads/2020/12/decoration-baby-shower-fille.jpg" />
            <Card.Body>
            <Card.Title>Fille</Card.Title>
            <Card.Text>
            6 models de votre dessin animé  préféré disponibles 
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            
            </Card.Body>
            </Card>

            <span style={{color:"white"}}>
                .........
            </span>


            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="http://www.axianephotographe.fr/wp-content/uploads/2020/07/photographe-babyshower-paris-23.jpg" />
            <Card.Body>
            <Card.Title>Tropicale</Card.Title>
            <Card.Text>
            4 models sur la plage disponible
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default ThemeBaby
