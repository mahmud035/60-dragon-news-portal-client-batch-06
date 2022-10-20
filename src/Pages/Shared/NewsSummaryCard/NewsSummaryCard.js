import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {
  console.log(news);

  const { title, _id, total_view, author, details, image_url } = news;
  return (
    <div>
      <Card className=" mb-4">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <Image
                roundedCircle
                src={author?.img}
                style={{ height: '60px' }}
              ></Image>
              <div>
                <h6 className="mb-1">{author?.name}</h6>
                <p className="mb-1">{author?.published_date}</p>
              </div>
            </div>
            <div>
              <FaRegBookmark className="me-2" />
              <FaShareAlt />
            </div>
          </div>
        </Card.Header>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Img src={image_url} className="my-3" />
          <Card.Text>
            <p>
              {details.length > 250 ? details.slice(0, 250) + '...' : details}
              <Link to={`/news/${_id}`}>Read More</Link>
            </p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
