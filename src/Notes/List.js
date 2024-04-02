import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:7015/api/Notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
              <th>Post Date</th>
              <th>Validity</th>
            </tr>
          </thead>
          <tbody>
            {notes.map(note => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.name}</td>
                <td>{note.description}</td>
                <td>{note.postDate}</td>
                <td>{note.validity}</td>
              </tr>
            ))}
          </tbody>
        </table>
  );
};

export default ListNotes;
