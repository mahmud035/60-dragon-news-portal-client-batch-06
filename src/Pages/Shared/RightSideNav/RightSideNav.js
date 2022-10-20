import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import {
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { toast } from 'react-toastify';

const RightSideNav = () => {
  const { googleSignIn } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Successfully logged in');
      })
      .catch((error) => {
        console.log('error', error);
      });
  };

  return (
    <div>
      <ButtonGroup vertical>
        <Button
          onClick={handleGoogleSignIn}
          variant="outline-primary"
          className="mb-2 rounded"
        >
          <FcGoogle size={24} /> Login with Google
        </Button>
        <Button variant="outline-dark" className="mb-4 rounded">
          <BsGithub size={24} /> Login with Github
        </Button>
      </ButtonGroup>

      <div>
        <h5>Find Us On</h5>
        <ListGroup>
          <ListGroup.Item className="mb-2 rounded">
            <FaFacebook size={24} /> Facebook
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded">
            <FaTwitter size={24} /> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded">
            <FaWhatsapp size={24} /> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded">
            <FaInstagram size={24} /> Instagram
          </ListGroup.Item>
          <ListGroup.Item className="mb-2 rounded">
            <FaYoutube size={24} /> Youtube
          </ListGroup.Item>
        </ListGroup>
      </div>

      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
