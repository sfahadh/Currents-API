import React, { Component } from 'react';
import SearchedNewsArticles from './searchedNewsArticle';
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
            const resp = await fetch(`${URL}${this.props.search}&language=en&apiKey=${API_KEY}`)
            const json = await resp.json();
            this.setState({ data: json });
            this.props.clickedSearch(false);
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.isSubmitted !== this.props.isSubmitted) {
            this.fetchData();
        }
    }

    render() {
        console.log(this.props.search, this.props.isSubmitted);
        console.log(this.state.data.news);
        return (
            <>
                <SearchedNewsArticles />
            </>
        )
    }
}


export default searchNews;