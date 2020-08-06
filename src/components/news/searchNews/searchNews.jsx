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
            attemptFetch: false
        }
    }

    fetchData = async () => {
        if (this.props.isSubmitted) {
            this.props.clickedSearch(false);
            this.setState({ attemptFetch: true })
            try {
                const resp = await fetch(`${URL}${this.props.search}&language=en&apiKey=${API_KEY}`)
                const json = await resp.json();
                this.setState({ data: json });
            } catch (error) {
                console.log(error)
            }
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isSubmitted !== this.props.isSubmitted) {
            this.fetchData();
        }
        if (this.state.data.length) this.setState({ attemptFetch: false });
    }

    render() {
        console.log(this.state.attemptFetch);
        console.log(this.state.data);
        return (
            <>
                <Articles news={this.state.data.news} attemptFetch={this.state.attemptFetch} />
            </>
        )
    }
}


export default searchNews;