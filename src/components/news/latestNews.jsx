import React, { Component } from 'react';
import Articles from './articles';
import './latestNews.css'

const URL = "https://api.currentsapi.services/v1/latest-news?";
const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

class searchNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        const resp = await fetch(`${URL}apiKey=${API_KEY}`)
        const json = await resp.json();
        this.setState({ data: json });
    }

    render() {
        return (
            <>
                <h1>Latest News</h1>
                <hr />
                <Articles news={this.state.data.news} />
            </>
        )
    }
}

export default searchNews;