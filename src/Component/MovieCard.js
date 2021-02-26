import React from 'react'
 import {Card} from 'react-bootstrap'
 import  {Rating} from '@material-ui/lab';
import './MovieCard.css'

const MovieCard = ({movie}) => {
    
    return (
    
 <Card className="card" >
           <Card.Img className="cardimg"  src= {movie.img} alt=""/>
           

           <Card.ImgOverlay  d-flex align-items-end>
    <Card.Body className="body">
        <Card.Text className="cardtext">
<Card.Title className="cardtitle"> {movie.titre}</Card.Title>
           <Rating name="read-only" value={movie.rate} readOnly />
        </Card.Text>
     </Card.Body>
     </Card.ImgOverlay>
</Card>



    )
}

export default MovieCard
