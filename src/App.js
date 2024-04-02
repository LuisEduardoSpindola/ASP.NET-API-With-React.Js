import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';
import logoCadastro from './assets/cadastro.png';

function App() {
  const baseUrl = "https://localhost:7015/api/Notes";
  const [data, setData] = useState([]);

  const requestGet = async()=>
  {
    await axios.get(baseUrl).then(response => 
      {
        setData(response.data);
      }).catch(error => {
        console.error(error)
      }); 
  }

  useEffect(() => {
    requestGet();
  })

  return (
    <div className="App">
      <header className="App-header">
        <h1>Notes Table</h1>
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
            {data.map(note => (
              <tr key={note.id}>
                <td>{note.id}</td>
                <td>{note.Name}</td>
                <td>{note.description}</td>
                <td>{note.postDate}</td>
                <td>{note.validity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
