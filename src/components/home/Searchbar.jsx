import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchNews from '../news/searchNews/searchNews';
import './home.css'

function SearchBar() {
    const [search, setSearch] = React.useState("");
    const [submit, setSubmit] = React.useState(false);

    const submitSearch = () => {
        setSubmit(true);
    }

    const clickedSearch = clicked => {
        setSubmit(clicked);
    }

    const onKeyPress = event => {
        if (event.which === 13 /* Enter */) {
            event.preventDefault();
            submitSearch();
        }
    }

    return (
        <>
            <form className="form-inline input-group m-auto" id="form" onKeyPress={onKeyPress}>
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <FontAwesomeIcon icon={faSearch} />
                    </span>
                </div>

                <input className="form-control my-0 py-1 w-50"
                    id="searchbar"
                    type="text"
                    placeholder="search for news"
                    aria-label="Search"
                    onChange={e => setSearch(e.target.value)}
                    value={search}
                />
            </form>

            <br />

            <SearchNews
                search={search}
                isSubmitted={submit}
                clickedSearch={clickedSearch}
            />
        </>
    );
}

export default SearchBar;
