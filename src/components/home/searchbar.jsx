import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from 'react-bootstrap';
import SearchNews from '../news/searchNews/searchNews';
import './home.css'

function SearchBar() {
    const [search, setSearch] = React.useState("");

    return (
        <div className="center">
            <h1 className="text-center display-3 mt-5 mb-5">Welcome to Current News</h1>
            <form className="form-inline d-flex justify-content-center input-group m-auto">
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>
                <input className="form-control my-0 py-1 w-50"
                    type="text"
                    placeholder="search for news"
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
                <Button className="ml-3" variant="primary">Search</Button>
            </form>

            <SearchNews search={search} />
        </div>
    );
}

export default SearchBar;