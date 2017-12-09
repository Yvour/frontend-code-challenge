import React from 'react';
import styles from "./style.css";
import PropTypes from 'prop-types';

export default class Layout extends
React.Component {
	render() {
		return ( < div className="layout_container">
		<div classname="photo">
		</div>
		<div classname="info">
		<div classname="title">
		{this.props.title}
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