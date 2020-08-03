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

    async componentDidMount() {
        const resp = await fetch(`${URL}${this.props.category}&apiKey=${API_KEY}`)
        const json = await resp.json();
        this.setState({ data: json });
    }

    render() {
        console.log(this.state.data)
        return (
            <>
            </>
        )
    }
}

export default categorizedNews;