import React, { Component } from 'react';

const URL = "https://api.currentsapi.services/v1/latest-news?";
const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

class searchNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        fetch(`${URL}apiKey=${API_KEY}`)
            .then(resp => resp.json())
            .then(json => this.setState({ news: json }))
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.news);
        return (
            <div>
                <h1>Hello</h1>
            </div>
        )
    }
}

export default searchNews;