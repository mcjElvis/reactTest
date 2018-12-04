import React from 'react'  
import { render } from 'react-dom'  

import CarouselOne from './demo1' 
import CarouselTwo from './demo2' 
import CarouselThree from './demo3' 
import Demo4 from './demo4'

export default class From extends React.Component {
    render () {
        return (
            <div style={{width:'800px',margin: 'auto',marginTop:50}}>   
                <CarouselOne/> 
                <hr/>
                <CarouselTwo/>
                <hr/>
                <CarouselThree/>
                <hr/>
                <Demo4/>
            </div>
            
        )
    }
}
