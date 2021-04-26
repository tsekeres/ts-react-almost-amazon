import React, { useEffect, useState } from 'react';
import AuthorCard from '../components/AuthorCard';
import { getAuthors } from '../helpers/data/AuthorData';
import './App.scss';
import AuthorForm from '../AuthorForm';

function App() {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    getAuthors().then((response) => setAuthors(response));
  }, []);

  return (
    <div className="App">
      <AuthorForm formTitle='Author Card' />
      <hr />
      {authors.map((authorInfo) => (
        <AuthorCard
          key={authorInfo.firebaseKey}
          email={authorInfo.email}
          firstName={authorInfo.firstName}
          lastName={authorInfo.lastName}
          handleClick={() => console.warn(`${authorInfo.firstName}`)}
        />
      ))}
    </div>
  );
}

export default App;
