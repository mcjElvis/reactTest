import React from 'react'  
import { render } from 'react-dom'  

import { Carousel } from 'antd';

import '../form/demo1.css'

function onChange(a) {
  console.log(a);
}

export default class CarouselComponent extends React.Component {
	render () {
		return (
			<div className="car1">
			<Carousel autoplay afterChange={onChange}>
			<div><img src="https://img.alicdn.com/tfs/TB1IkXxXAvoK1RjSZPfXXXPKFXa-750-420.png" /></div>
			<div><img src="https://img.alicdn.com/tfs/TB1eFlvXCzqK1RjSZPcXXbTepXa-750-420.png" /></div>
			<div><img src="https://img.alicdn.com/tfs/TB1wp4xXq6qK1RjSZFmXXX0PFXa-750-420.png" /></div>
			<div><img src="https://img.alicdn.com/tfs/TB1Ab0cXgTqK1RjSZPhXXXfOFXa-750-420.png" /></div>
			<div><img src="https://img.alicdn.com/tfs/TB1zO4bXmzqK1RjSZFHXXb3CpXa-750-420.png" /></div>
			</Carousel>
			</div>
		)
	}
}

