import React from 'react'
import { render } from 'react-dom'

class Clock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {data: new Date()}
	}
	render() {
		return (<div>
			<h1>Hello,world!</h1>
			<h2>It is {this.state.date,toLocaleTimeString()}</h2>
		</div>)
	}
}