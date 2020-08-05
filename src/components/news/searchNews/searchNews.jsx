import React, { Component } from 'react';
import Articles from '../articles';
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

    async componentDidMount() {
        const resp = await fetch(`${URL}${this.props.search}&language=en&apiKey=${API_KEY}`)
        const json = await resp.json();
        this.setState({ data: json });
    }

    render() {
        console.log(this.props.search, this.props.isSubmitted);
        console.log(this.state.data.news);
        return (
            <>
                <h1>Searched News</h1>
                <hr />
                {/* <Articles news={this.state.data.news} /> */}
            </>
        )
    }
}

export default searchNews;