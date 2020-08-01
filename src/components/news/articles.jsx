import React from 'react';
import './latestNews.css'

const articles = ({ news }) => {
    if (!news || news.length === 0) return <p>Sorry! No news</p>
    return (
        <div id="articles">
            {
                news.map(article => {
                    return (
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-12 mt-3">
                                    <div class="card">
                                        <div class="card-horizontal">
                                            <div class="img-square-wrapper">
                                                <img src={article.image}
                                                    alt="Card image cap"
                                                    width="350px"
                                                    height="200px"
                                                />
                                            </div>
                                            <div class="card-body">
                                                <h4 class="card-title">{article.title}</h4>
                                                <p class="card-text">{article.description}</p>
                                            </div>
                                        </div>
                                        <div class="card-footer">
                                            <small class="text-muted">{article.published}</small>
                                        </div>
                                    </div>
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

/*
{article.image}
{article.title}
{article.description}
{article.published}
*/