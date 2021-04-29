import React, { useState } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addAuthor, updateAuthor } from '../helpers/data/AuthorData';

const AuthorForm = ({
  formTitle,
  setAuthors,
  firstName,
  lastName,
  email,
  firebaseKey
}) => {
  const [author, setAuthor] = useState({
    firstName: firstName || '',
    lastName: lastName || '',
    email: email || '',
    firebaseKey: firebaseKey || null
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (author.firebaseKey) {
      updateAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    } else {
      addAuthor(author).then((authorsArray) => setAuthors(authorsArray));
    }
  };

  return (
    <div className="author-form">
      <Form
        id="addAuthorForm"
        // autoComplete="off"
        onSubmit={handleSubmit}
      >
        <h2>{formTitle}</h2>
        <FormGroup>
          <Label for="firstName">First Name</Label>
          <Input
            type='text'
            name='firstName'
            placeholder='Enter Author first name'
            value={author.firstName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastName">Last Name</Label>
          <Input
            type='text'
            name='lastName'
            placeholder='Enter Author last name'
            value={author.lastName}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Author Email</Label>
          <Input
            type='text'
            name='email'
            placeholder='Enter Author email'
            value={author.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <Button type='submit'>Submit Author</Button>
      </Form>
    </div>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired,
  setAuthors: PropTypes.func,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  firebaseKey: PropTypes.string
};

export default AuthorForm;
