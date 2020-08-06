import React from 'react';
import Searchbar from './Searchbar';
import './home.css'

function Home() {
    return (
        <>
            <h1 className="text-center display-3 mt-5 mb-5">Welcome to Current News</h1>
            <Searchbar />
        </>
    );
}

export default Home;