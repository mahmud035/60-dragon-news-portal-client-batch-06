import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import { FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';
import { GrView } from 'react-icons/gr';

const NewsSummaryCard = ({ news }) => {
  // console.log(news);

  const { title, _id, total_view, author, details, image_url, rating } = news;
  return (
    <div>
      <Card className=" mb-4 shadow-sm border-0">
        <Card.Header>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <Image
                roundedCircle
                src={author?.img || 'N/A'}
                style={{ height: '60px' }}
              ></Image>
              <div>
                <h6 className="mb-1">{author?.name || 'N/A'}</h6>
                <p className="mb-1">{author?.published_date || 'N/A'}</p>
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
        <Card.Footer>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <FaStar style={{ color: 'goldenrod' }} /> {rating?.number}
            </div>
            <div className="d-flex align-items-center gap-2">
              <GrView /> {total_view}
            </div>
          </div>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default NewsSummaryCard;
