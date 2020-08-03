import React, { Component } from 'react';

const URL = "https://api.currentsapi.services/v1/latest-news?category=";
const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

class categorizedNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }


    render() {
        return (
            <>
            </>
        )
    }
}

export default categorizedNews;