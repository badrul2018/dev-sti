import React from 'react'
import {Row} from 'reactstrap'
//import Horizental from './Horizental'
import Vertical from './Vertical'
import Data_Store from './DataStore/DataStore'

const Gallery = () => {
    return (
        <Row className='p-5 m-5'>
       {
           Data_Store.map(({id,imageUrl,horizental})=>(
               <Vertical key={id} imageUrl={imageUrl} horizental={horizental}/>
           ))
       }
        
        </Row>
    )
}

export default Gallery
