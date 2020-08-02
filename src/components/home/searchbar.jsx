import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './home.css'

const searchBar = () => {
    return (
        <>
            <h1 className="text-center display-3 mt-5">Welcome to Current News</h1>
            <FontAwesomeIcon icon="search" />
            <form class="form-inline d-flex justify-content-center md-form form-sm mt-0">
                <input class="form-control form-control-sm ml-3 w-50" type="text" placeholder="Search"
                    aria-label="Search" />
            </form>
        </>
    );
}

export default searchBar;