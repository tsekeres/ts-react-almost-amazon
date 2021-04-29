import React from 'react';
import PropTypes from 'prop-types';
import AuthorCard from '../components/AuthorCard';
import '../App/App.scss';

function Authors({ authors, setAuthors }) {
  return (
    <>
      <hr />
      <div className='card-container'>
        {authors.map((authorInfo) => (
          <AuthorCard
            key={authorInfo.firebaseKey}
            firebaseKey={authorInfo.firebaseKey}
            email={authorInfo.email}
            firstName={authorInfo.firstName}
            lastName={authorInfo.lastName}
            setAuthors={setAuthors}
          />
        ))}
      </div>
    </>
  );
}

Authors.propTypes = {
  authors: PropTypes.array.isRequired,
  setAuthors: PropTypes.func.isRequired
};

export default Authors;
