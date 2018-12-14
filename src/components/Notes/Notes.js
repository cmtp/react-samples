import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Notes.css';

class Notes extends Component {
  constructor() {
    super();

    this.state = {
      notes: [
        {
          id: 1,
          title: 'My note 1',
        },
        {
          id: 2,
          title: 'My note 2',
        },
        {
          id: 3,
          title: 'My note 3',
        },
      ],
    };
  }

  renderNotes = notes => (
    <ul>
      {notes.map((note, key) => (
        /* eslint-disable react/no-array-index-key */
        <li key={key}>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </li>
      ))}
    </ul>
  );

  render() {
    /* eslint-disable react/prop-types */
    const {
      match: {
        params: { noteId },
      },
    } = this.props;
    const { notes } = this.state;
    let selectedNote = false;

    if (noteId > 0) {
      selectedNote = notes.filter(note => note.id === Number(noteId));
    }

    return (
      <div className="Notes">
        <h1>Notes</h1>
        {this.renderNotes(selectedNote || notes)}
      </div>
    );
  }
}

export default Notes;
