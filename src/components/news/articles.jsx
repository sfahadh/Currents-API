import React from 'react';
import './latestNews.css'

const articles = ({ news }) => {
    if (!news || news.length === 0) return <p>Sorry! No news</p>
    return (
        <div id="articles">
            {
                news.map(article => {
                    return (
                        <div className="container" id="card">
                            <div class="card flex-row flex-wrap">
                                <div class="card-header border-0">
                                    <img src={article.image} alt="" height="180px" width="300px" />
                                </div>
                                <div class="card-block px-2">
                                    <h4 class="card-title">Title</h4>
                                    <p class="card-text">Description</p>
                                    <a href="#" class="btn btn-primary">BUTTON</a>
                                </div>
                                <div class="w-100"></div>
                                <div class="card-footer w-100 text-muted">
                                    Footer stating cats are CUTE little animals
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default articles;