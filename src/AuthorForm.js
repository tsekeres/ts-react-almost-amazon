import React, { useState } from 'react';
import addAuthor from './helpers/data/AuthorData';

export default function AuthorForm() {
  const [author, setAuthor] = useState({
    first_name: '',
    last_name: '',
    email: '',
    favorite: Boolean,
  });

  const handleInputChange = (e) => {
    setAuthor((prevState) => ({
      ...prevState,
      [e.target.name]:
        e.target.value === 'favorite' ? Boolean(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAuthor(author);
  };

  return (
    <>
      <div className="author-form">
        <form form id="addAuthorForm" autoComplete="off" onSubmit={handleSubmit}>
          <h2>Add Author</h2>
          <div className='form-group'>
            <label>First Name</label>
            <input
              type='text'
              name='first-name'
              placeholder='Enter Author first name' required
              value={author.first_name.value}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label>Last Name</label>
            <input
              type='text'
              name='last-name'
              placeholder='Enter Author last name' required
              value={author.last_name.value}
              onChange={handleInputChange}
            />
          </div>
          <div className='form-group'>
            <label>Author Email</label>
            <input
              type='text'
              name='email'
              placeholder='Enter Author email' required
              value={author.email.value}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-check">
            <input type="checkbox" id="fave"/>
            <label>Favorite?</label>
          </div>
          <button type='submit'>Submit Author</button>
        </form>
      </div>
    </>
  );
}
