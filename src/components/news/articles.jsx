import React from 'react';
import Blank from '../../Images/no-image-found.jpeg'
import './news.css'

const articles = ({ news, attemptFetch }) => {
    if (!news && attemptFetch) return <p>No news founded</p>;
    if (!news) return null;
    return (
        <div id="articles">
            {
                news.map(article => {
                    return (
                        <div className="container-fluid mb-4" key={article.id}>
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div className="img-square-wrapper">
                                                <img src={article.image === "None" ? Blank : article.image}
                                                    alt={article.title}
                                                    className="news-image"
                                                />
                                            </div>

                                            <div className="card-body">
                                                <h4 className="card-title">{article.title}</h4>
                                                <p className="card-text">
                                                    {article.description === "" ? "No description available" : article.description}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="card-footer d-flex justify-content-between">
                                            <small>For full article:
                                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="ml-1">Click Here</a>
                                            </small>
                                            <small className="text-muted">Published: {article.published.slice(0, 11)}</small>
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

Credits -  https://codepen.io/SteveJRobertson/pen/POdvgz
*/