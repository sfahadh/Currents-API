import React from 'react';
import './home.css'

const searchBar = () => {
    return (
        <>
            <h1 className="text-center display-3 mt-5">Welcome to Current News</h1>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="basic-addon1">@</span>
                </div>
                <input type="text"
                    class="form-control"
                    placeholder="search for news" />
            </div>
        </>
    );
}

export default searchBar;