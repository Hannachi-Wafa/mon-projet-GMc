import React from 'react'
import { Card, Button } from 'react-bootstrap';

const ThemeMariage = () => {
    return (
        <div style={{display:"flex",flexDirection:"row", marginLeft:"80px"}}>
            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.robedesoireelongue.fr/blog/wp-content/uploads/2021/03/decoration-mariage-chic-elegant-pays-basque-2-1024x683.jpg" />
            <Card.Body>
            <Card.Title>Chic</Card.Title>
            <Card.Text>
            9 models chic et élegant disponibles 
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            </Card.Body>
            </Card>

            <span style={{color:"white"}}>
                .........
            </span>


            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.guide-reception-mariage.fr/img/b/2/1509984056..jpg" />
            <Card.Body>
            <Card.Title>Amour</Card.Title>
            <Card.Text>
            7 models d'amours trés originale disponibles 
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            
            </Card.Body>
            </Card>

            <span style={{color:"white"}}>
                .........
            </span>


            <Card style={{ width: '400px' }}>
            <Card.Img style={{ height: '250px' }} variant="top" src="https://www.cdeco.fr/wp-content/uploads/2019/08/Thanakorn.P-Shutterstock.jpg" />
            <Card.Body>
            <Card.Title>Plage</Card.Title>
            <Card.Text>
            6 models sur la plage disponible
            </Card.Text>
            <Button variant="outline-dark">Voir les modéles</Button>
            </Card.Body>
            </Card>
        </div>
    )
}

export default ThemeMariage
