import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';
import './latestNews.css'

const articles = ({ news }) => {
    if (!news || news.length === 0) return <p>Sorry! No news</p>
    return (
        <div id="articles">
            {
                news.map(article => {
                    return (
                        <CardDeck>
                            <Card key={article.id}>
                                <Card.Img variant="top" src="holder.js/100px160" />
                                <Card.Body>
                                    <Card.Title>{article.title}</Card.Title>
                                    <Card.Text>
                                        {article.description}
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">{article.published}</small>
                                </Card.Footer>
                            </Card>
                        </CardDeck>
                    )
                })
            }
        </div>
    );
}

export default articles;