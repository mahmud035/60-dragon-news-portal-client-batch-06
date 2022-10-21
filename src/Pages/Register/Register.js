import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
  const { createUser, verifyEmail, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const handleAccepted = (e) => {
    setAccepted(e.target.checked); // work same as below
    // setAccepted(!accepted); // Toggling the value of accepted.
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('User created successfully');
        setError('');
        handleEmailVerification();

        navigate('/');
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message);
      });

    form.reset();
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {
        toast.success('Profile updated');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEmailVerification = () => {
    verifyEmail().then(() => {
      toast.info('Please verify your email address.');
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Photo URL" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          onClick={handleAccepted}
          label={
            <>
              Accept <Link to="/terms-and-condition">Terms and Conditions</Link>
            </>
          }
        />
      </Form.Group>

      <Button variant="primary" type="submit" disabled={!accepted}>
        Submit
      </Button>
      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Register;
