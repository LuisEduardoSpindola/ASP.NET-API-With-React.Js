import React, { useState, useEffect } from 'react';
import './List.css';
import axios from 'axios';

const ListNotes = ({ theme }) => {
  const [notes, setNotes] = useState([]);
  const [showList, setShowList] = useState(true);
  const [selectedNote, setSelectedNote] = useState(null);
  const buttonText = showList ? 'Fechar' : 'Abrir';
  const buttonStyle = showList ? 'btn-outline-success' : 'btn-outline-success';

  useEffect(() => {
    axios.get('https://localhost:7015/api/Notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Error fetching notes:', error));
  }, []);

  const handleNoteClick = () => {
    setShowList(!showList);
  };

  const handleViewMoreClick = (note) => {
    setSelectedNote(note);
  };

  const handleBackClick = () => {
    setSelectedNote(null);
  };

  return (
    <div className='container'>
      <table className={`tableContainer ${theme}`}>
        <thead>
          <tr>
            <th style={{ width: '130px' }}>
              <button className={`btn ${theme === 'dark' ? buttonStyle : buttonStyle}`} onClick={handleNoteClick}>{buttonText}</button>
            </th>
            <th style={{ width: '75px'}}>#</th>
            <th style={{ width: '600px'}}>Avisos</th>
          </tr>
        </thead>
        <tbody>
          {showList &&
            notes.map(note => (
              <>
                <tr key={note.id}>
                  <td>
                  <button className={`btn ${theme === 'dark' ? buttonStyle : buttonStyle}`} onClick={() => {
                    if (selectedNote && selectedNote.id === note.id) {
                      handleBackClick();
                    } else {
                      handleViewMoreClick(note);
                    }
                  }}>
                    {selectedNote && selectedNote.id === note.id ? 'Voltar' : 'Ver mais'}
                  </button>
                  </td>
                  <td>{note.id}</td>
                  <td>{note.name}</td>
                </tr>
                {selectedNote && selectedNote.id === note.id &&
                  <tr key={`${note.id}-details`}>
                    <td colSpan="6">
                      <div>
                        <p><strong>Descrição:</strong> {note.description}</p>
                        <p><strong>Data da postagem:</strong> {note.postDate}</p>
                        <p><strong>Prazo:</strong> {note.validity}</p>
                      </div>
                    </td>
                  </tr>
                }
              </>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListNotes;
