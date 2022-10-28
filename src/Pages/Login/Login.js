import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const Login = () => {
  const [error, setError] = useState('');
  const { emailSignIn, setLoading } = useContext(AuthContext);

  useSetTitle('Login');

  const navigate = useNavigate();
  const location = useLocation();

  let from = location.state?.from?.pathname || '/';

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    emailSignIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError('');

        if (user.emailVerified) {
          navigate(from, { replace: true });
          toast.success('Logged in successfully');
        } else {
          toast.warn('Your email is not verified. Please verify your email.');
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        toast.error(error.message.slice(22, -2));
      })
      .finally(() => {
        setLoading(false);
      });

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <Form.Text className="text-danger">{error}</Form.Text>
    </Form>
  );
};

export default Login;
