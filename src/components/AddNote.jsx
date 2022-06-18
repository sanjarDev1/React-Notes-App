import React from "react";
import { useState } from "react";

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText]= useState('')
  const characterLimit =200;

const handleChange = (e)=>{
 characterLimit - e.target.value.length >= 0 && setNoteText(e.target.value)
}

const handleSaveClick =()=>{
  if(noteText.trim().length > 0){
    handleAddNote(noteText);
    setNoteText(' ');
    
  }
}

  return (
    <div className="note new">
      <textarea
        placeholder="Type to add a note ..."
        cols="10"
        rows="8"
        value={noteText}
        onChange={(e)=>handleChange(e)}
      ></textarea>
      <div className="note-footer">
        <small>{characterLimit-noteText.length} Reamining</small>
        <button onClick={()=>handleSaveClick()} className="save">Save</button>
      </div>
    </div>
  );
};

export default AddNote;
