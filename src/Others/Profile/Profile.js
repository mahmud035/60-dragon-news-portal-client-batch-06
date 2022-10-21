import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName);
  const [photoURL, setPhotoURL] = useState(user?.photoURL);

  const emailRef = useRef(user?.email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, photoURL);
    console.log(emailRef.current.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhotoURLChange = (e) => {
    setPhotoURL(e.target.value);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Your name</Form.Label>
          <Form.Control
            onChange={handleNameChange}
            defaultValue={name}
            type="text"
            placeholder="name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            defaultValue={emailRef}
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control
            onChange={handlePhotoURLChange}
            defaultValue={photoURL}
            type="text"
            placeholder="photo URL"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Changes
        </Button>
      </Form>
    </div>
  );
};

export default Profile;
