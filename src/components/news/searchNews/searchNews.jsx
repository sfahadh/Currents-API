import React, { Component } from 'react';
import Articles from '../articles';
import '../news.css'

const URL = "https://api.currentsapi.services/v1/search?keywords=";
const API_KEY = process.env.REACT_APP_CURRENTS_API_KEY;

class searchNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

    fetchData = async () => {
        if (this.props.isSubmitted) {
            this.props.clickedSearch(false);
            const resp = await fetch(`${URL}${this.props.search}&language=en&apiKey=${API_KEY}`)
            const json = await resp.json();
            this.setState({ data: json });
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isSubmitted !== this.props.isSubmitted) {
            this.fetchData();
        }
    }

    render() {
        console.log(this.props.isSubmitted)
        console.log(this.state.data.news);
        return (
            <>
                <Articles news={this.state.data.news} />
            </>
        )
    }
}


export default searchNews;