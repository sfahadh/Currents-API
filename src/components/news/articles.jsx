import React from 'react';
import './latestNews.css'

const articles = ({ news }) => {
    if (!news) return <p>Sorry! No news</p>
    return (
        <div id="articles">
            {
                news.map(article => {
                    return (
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 mt-3">
                                    <div className="card">
                                        <div className="card-horizontal">
                                            <div className="img-square-wrapper">
                                                <img src={article.image}
                                                    alt="Card image cap"
                                                    width="350px"
                                                    height="200px"
                                                />
                                            </div>

                                            <div claclassNamess="card-body">
                                                <h4 className="card-title">{article.title}</h4>
                                                <p className="card-text">{article.description}</p>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <small className="text-muted">{article.published}</small>
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