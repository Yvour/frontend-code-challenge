import React from 'react';
import styles from "./style.css";
import PropTypes from 'prop-types';

export default class Layout extends
React.Component {
	render() {
		return ( 
		<div className="layout_container">
		<div className="photo">
		<img src="{this.props.imgSrc}/>
		</div>
		<div className="info">
		<div className="title">
		{this.props.title}
		</div>
		<div className="address">
		{this.porps.address}
		</div>
		<div className="bottom-info>
		<div className="price">{this.props.price}</div>
		<div className="numberOfRooms">{this.props.numberOfRooms}</div>
		<div className="total-area">{this.props.totalArea}</div>
		</div>

	 </div>

	</div>)
	}
}

Layout.propTypes = {
	title : PropTypes.string,
	address : PropTypes.string,
	price : PropTypes.string,
	numberOfRooms : PropTypes.number,
	totalArea : PropTypes.number,
	imgSrc : PropTypes.string
}