import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../Layout/component.jsx';

export default class Puzzle extends
React.Component {

        componentWillMount() {
            console.log("component did mount");
 ////CORS «Access-Control-Allow-Origin»)
            fetch("https://api.mcmakler.de/v1/advertisements")
                .then((response) => {
                	console.log("response");
                    let myData = response.json()
                    // return myData;
                    this.setState({
                        data: myData
                    })
                })
                .then((json) => {
                    console.log('parsed json', json)
                })
                .catch((ex) => {
                	console.log(ex);
                    console.log('parsing failed', ex)
                })


        }
        
        render() {
                console.log("render");
                return ( < div className = "puzzle" > {
                            (this.state.list || []).map(x => < Layout { ...x
                                }
                                />)} <
                                /div>)
                            }
                        }


                        Puzzle.propTypes = {
                            list: PropTypes.array
                        }