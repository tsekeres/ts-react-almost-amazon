import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { addAuthor } from './helpers/data/AuthorData';

const AuthorForm = ({ formTitle }) => {
  const [author, setAuthor] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  const handleInputChange = () => {
    setAuthor((prevState) => ({
      ...prevState
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
    console.warn(author);
  };

  return (
    <>
      <div className="author-form">
        <form
          id="addAuthorForm"
          autoComplete="off"
          onSubmit={handleSubmit}
        >
        <h2>{formTitle}</h2>
        <div className='form-group'>
          <label>First Name</label>
          <input
            type='text'
            name='firstName'
            placeholder='Enter Author first name'
            value={author.firstName.value}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label>Last Name</label>
          <input
            type='text'
            name='lastName'
            placeholder='Enter Author last name'
            value={author.lastName.value}
            onChange={handleInputChange}
          />
        </div>
        <div className='form-group'>
          <label>Author Email</label>
          <input
            type='text'
            name='email'
            placeholder='Enter Author email'
            value={author.email.value}
            onChange={handleInputChange}
          />
        </div>
        <button type='submit'>Submit Author</button>
        </form>
      </div>
    </>
  );
};

AuthorForm.propTypes = {
  formTitle: PropTypes.string.isRequired
};

export default AuthorForm;
