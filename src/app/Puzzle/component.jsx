import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/component.jsx';

export default class Puzzle extends
React.Component {

        componentWillMount() {
			const req = new XMLHttpRequest();
			req.onload = () => {
                    this.setState({
                        data: req.response
			})};
			req.open("get", "http://localhost:3000", true);
			req.send();
        }
        
        render() {
                console.log("render");
                return ( < div className = "puzzle" > {
                            ((this.state&&Array.isArray(this.state.list) )?this.state.list : []).map(x => < Layout { ...x
                                }
                                />)} <
                                /div>)
                            }
                        }


                        Puzzle.propTypes = {
                            list: PropTypes.array
                        }