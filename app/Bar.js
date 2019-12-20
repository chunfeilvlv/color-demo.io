import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import $ from 'jquery'
require('webpack-jquery-ui')
import * as actions from './actions.js'
require('jquery-ui')
class Bar extends React.Component {
	constructor ({r,g,b,color}) {
		super()
	}
	componentDidMount () {
		var self = this
		$(this.refs.barWrap).find('b').
			draggable({
				"containment":$(this.refs.barWrap).find('.barB'),
				"axis": "x",
				"drag": function (e,ui) {
					let x = ui.position.left
					let v = parseInt(x / 189 * 255)
					self.props.actions["change" + self.props.color.toUpperCase()](v)
				}
			})
	}
	componentWillUpdate () { {/*得到的是更新的前一个状态*/}
		console.log(this.props.r, this.props.g, this.props.b)
	}
	componentDidUpdate () {
		{/*得到的是更新之后的状态*/}
		console.log(this.props.r, this.props.g, this.props.b)
		var offsetLeft = parseInt(this.props[this.props.color] / 255 * 189)
		if (this.props[this.props.color] == 0) {
			offsetLeft = 0
		}
		if (this.props[this.props.color] == 255) {
			offsetLeft = 189
		}
		$(this.refs.barWrap).find('b').css('left',offsetLeft)
	}
	minusLeft () {
		this.props.actions.minusColor(this.props.color)
		
	}
	addLeft () {
		this.props.actions.addColor(this.props.color)
		// var offsetLeft = parseInt(this.props[this.props.color] / 255 * 189) + 20
		// console.log(offsetLeft)
		// if (this.props[this.props.color] == 255) {
		// 	offsetLeft = 189
		// }
		// $(this.refs.barWrap).find('b').css('left',offsetLeft)
	}
	getStyle () {
		if (this.props.color == 'r') {
			return {
				"background":`-webkit-linear-gradient(left, rgb(0,${this.props.g},${this.props.b}), rgb(255,${this.props.g},${this.props.b}))`
			}
		} else if (this.props.color == 'g') {
				
			return {
				"background":`-webkit-linear-gradient(left, rgb(${this.props.r},0,${this.props.b}), rgb(${this.props.r},255,${this.props.b}))`
			}	
		} else if (this.props.color == 'b') {
			return {
				"background":`-webkit-linear-gradient(left, rgb(${this.props.r},${this.props.g},0), rgb(${this.props.r},${this.props.g},255))`
			}	
		}
	}
	checkMinusEnabled(){
		return this.props[this.props.color] > 0 ? "" : "disabled";
	}

	checkAddEnabled(){
		return this.props[this.props.color] < 255 ? "" : "disabled";
	}
	render () {

		return (
			<div className='barWrap' ref='barWrap'>
				<div className="barB">
					<a onClick={this.minusLeft.bind(this)} href="#" className={"minus_btn colorbtn " + this.checkMinusEnabled()}>-</a>
					<div className="bar" style={this.getStyle()}>
						<b></b>
					</div>
					<a onClick={this.addLeft.bind(this)} href="#" className={"add_btn colorbtn " + this.checkAddEnabled()}>+</a>
				</div>
			</div>

		)
	}
}
export default connect(
	(state) => {
		return {
			r: state.r,
			g: state.g,
			b: state.b
		}
	},
	(dispatch) => {
		return {
			actions: bindActionCreators(actions, dispatch)
		}
	}

)(Bar)