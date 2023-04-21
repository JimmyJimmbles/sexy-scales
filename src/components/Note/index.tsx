import React from "react";

import styles from "./styles.module.css";

interface NoteProps {
  note: string;
  highlight: boolean;
}

const Note = ({ note, highlight }: NoteProps) => {
  return (
    <div
      className={`${styles.note} ${
        !note.includes("#") ? styles.noteWhite : ""
      } ${highlight && styles.highlightWhite}`}
    >
      {note.includes("#") && (
        <div
          className={`${styles.note} ${styles.noteBlack} ${
            highlight && styles.highlightBlack
          }`}
        ></div>
      )}
    </div>
  );
};

export default Note;
