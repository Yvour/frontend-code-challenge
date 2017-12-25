import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/component.jsx';
import styles from "./style.css";

export default class Puzzle extends
React.Component {

        componentWillMount() {
			const req = new XMLHttpRequest();
			req.onload = () => {
				const answer = JSON.parse(req.response);
				window.fullElements = answer.data;
				const elements = (answer.data && Array.isArray(answer.data)) ? answer.data.slice(0,10) : [];
				window.elements = elements;
				    
                    this.setState({
                        list: elements
			})};
			req.open("get", "http://localhost:3000", true);
			req.send();
        }
        
        render() {
               
                return ( < div className = "puzzle" > {
                            ((this.state&&Array.isArray(this.state.list) )?this.state.list : []).map(element =>{
								const pictureKeys=Object.keys(element.advertisementAssets)
								.filter(key=>parseInt(key)==key)
								.filter(key=>element.advertisementAssets[key].titlePicture);
								let imgSrc='';
								if (pictureKeys && pictureKeys.length)
								 imgSrc=element.advertisementAssets[pictureKeys[0]].advertisementThumbnails.inventory_m.url
								
								return (
							<Layout key={element._id.$id}
							address={element.realestateSummary.address.fullAddress}
							title={element.title}
							numberOfRooms={element.realestateSummary.numberOfRooms}
							totalArea={element.realestateSummary.space}
							imgSrc={imgSrc}
							isSell={!!element.purpose}
							price={element.purpose ? element.advertisementPrice.sellPrice : element.advertisementPrice.baseRent}
                                
							/>)})} </div>)
                            }
 }


                        Puzzle.propTypes = {
                            list: PropTypes.array
                        }