import React from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actions from './actions.js'
import './css/index.css'
import Bar from './Bar.js'
class App extends React.Component {
	constructor ({r,g,b}) {
		super()
	}
	
	render () {
		return (
			<div>
				<div className='colorBox' style={{"backgroundColor": `rgb(${this.props.r},${this.props.g},${this.props.b})`}}>
				</div>
				<Bar color='r'></Bar><span>{this.props.r}</span>
				<Bar color='g'></Bar><span>{this.props.g}</span>
				<Bar color='b'></Bar><span>{this.props.b}</span>
			</div>
		)
	}
}
export default connect(
	(state) => {
		return {
			r: state.r,
			g: state.g,
			b: state.b,
		}
	},
	(dispatch) => {
		return {			
			actions: bindActionCreators(actions, dispatch)
		}
	}

)(App)