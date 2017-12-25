import React from 'react';
import styles from "./style.css";
import PropTypes from 'prop-types';


export default class Layout extends
React.Component {
	render() {
		return ( 
		<div className="layout_container">
		
		<div className="purpose">{(this.props.isSell?"Kaufen":"Mieten")}</div>
		<img className="photo" src={this.props.imgSrc}/>
		

		<div className="title">
		<div className="title-text">
		{this.props.title}<br/><br/>
		</div>
		</div>
		<div className="address">
		{this.props.address}
		</div>
		<div className="bottom-info">
	     	 <div className="price"><b>{`${this.props.price} €`}</b></div>
		     <div className="numberOfRooms">{this.props.numberOfRooms} Zimmer</div>
		     <div className="total-area">ab {this.props.totalArea}m<sup>2</sup></div>
		</div>



	</div>)
	}
}

Layout.propTypes = {
	title : PropTypes.string,
	address : PropTypes.string,
	price : PropTypes.number,
	numberOfRooms : PropTypes.number,
	totalArea : PropTypes.number,
	imgSrc : PropTypes.string,
	isSell: PropTypes.bool
}