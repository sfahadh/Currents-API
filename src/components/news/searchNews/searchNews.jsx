import React, { Component } from 'react';
import '../news.css'

const URL = "https://api.currentsapi.services/v1/search?keywords=";
const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

class searchNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    render() {
        return (
            <>
                <h1>Searched News</h1>
                <hr />
            </>
        )
    }
}

export default searchNews;