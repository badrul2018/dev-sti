import React from 'react'
import { useState } from 'react'
import {Modal} from 'reactstrap'
import './Vertical.css'

const Vertical = ({imageUrl,horizental}) => {
    const [model,setmodel]=useState(false)
    const toggle=()=>setmodel(!model)
    return (
       <div className=" col p-5">
       <div className='row'>
       <img onClick={toggle} src={imageUrl} alt="" className={`Vimg ${horizental && 'Himg'}`}/>
       <Modal isOpen={model} toggle={toggle} style={{maxWidth:1300,maxHeight:700,zIndex:9999,overflowX:'hidden',overflowY:'auto',objectFit:'contain'}} zIndex={9999} scrollable={true}>
       
       <img  src={imageUrl} alt="" height='720px' />
       
      
       <div className='left_div'>
        <button>&lt;</button>
       </div>
       <div className='right_div'>
       <button>&gt;</button>
       </div>
      
        
       </Modal>
       </div>
       
       </div>
    )
}

export default Vertical
