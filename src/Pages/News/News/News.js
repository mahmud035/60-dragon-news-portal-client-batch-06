import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';

const News = () => {
  const singleNews = useLoaderData();
  // console.log(singleNews);
  const { title, image_url, details, category_id } = singleNews;

  return (
    <div>
      <Card className="shadow border-0">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">All news in this category</Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
