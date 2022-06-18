import React, { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

export const App = () => {
  
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note! ",
      date: "15/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my second note! ",
      date: "20/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my third note! ",
      date: "5/04/2021",
    },
    {
      id: nanoid(),
      text: "This is my new note! ",
      date: "5/04/2021",
    },
  ]);
  
  const [searchText, setSrarch] = useState('');

  const [darkMode, setDarkMode] = useState(false);
  
      useEffect(() => {
        const savedNotes = JSON.parse(
          localStorage.getItem("react-notes-app-data"));

        if (savedNotes) {
          setNotes(savedNotes);
        }
      }, []);

      useEffect(() => {
        localStorage.setItem(
          'react-notes-app-data',
           JSON.stringify(notes));
      }, [notes]);
     
      const handleAddNote = (text) => {
        const date = new Date();
        const newNote = {
          id: nanoid(),
          text,
          date: date.toLocaleDateString(),
        };
      const newNotes = [...notes, newNote];
      setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleTogler={setDarkMode} />
        <Search searchText={setSrarch} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLocaleLowerCase().includes(searchText)
          )}
          handleAddNote={handleAddNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};
