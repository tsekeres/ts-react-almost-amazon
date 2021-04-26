import React from 'react';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import PropTypes from 'prop-types';

const AuthorCard = ({
  email,
  firstName,
  lastName,
  handleClick
}) => (
  <Card body>
    <CardTitle tag='h5'>Author Card</CardTitle>
    <CardText>{firstName} {lastName}</CardText>
    <CardText>Email: {email}</CardText>
    {handleClick ? <Button onClick={handleClick}>Print Author Name</Button> : ''}
  </Card>
);

AuthorCard.propTypes = {
  email: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default AuthorCard;
