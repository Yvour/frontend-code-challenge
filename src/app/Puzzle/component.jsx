import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/component.jsx';

export default class Puzzle extends
React.Component {

        componentWillMount() {
			const req = new XMLHttpRequest();
			req.onload = () => {
				const answer = JSON.parse(req.response);
				const elements = (answer.data && Array.isArray(answer.data)) ? answer.data.slice(0,10) : [];
				window.elements = elements;
				    
                    this.setState({
                        list: elements
			})};
			req.open("get", "http://localhost:3000", true);
			req.send();
        }
        
        render() {
                console.log("render");
                return ( < div className = "puzzle" > {
                            ((this.state&&Array.isArray(this.state.list) )?this.state.list : []).map(x =>
							<Layout key={x._id.$id}{ ...x
                                }
                                />)} </div>)
                            }
 }


                        Puzzle.propTypes = {
                            list: PropTypes.array
                        }