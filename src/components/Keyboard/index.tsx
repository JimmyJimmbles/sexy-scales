import React, { ChangeEvent, useEffect, useState } from "react";
import { baseNotes, scales } from "../../data";
import { Scale } from "../../models";
import Note from "../Note";

import styles from "./styles.module.css";

interface KeyboardProps {
  keys: string[][];
}

const Keyboard = ({ keys }: KeyboardProps) => {
  const [activeNotes, setActiveNotes] = useState<string[]>([]);
  const [selectedScale, setSelectedScale] = useState<Scale>();
  const [rootNote, setRootNote] = useState<string>();
  const scaleOptions = scales.map((v) => v.name);
  console.log({ keys });

  useEffect(() => {
    const buildScale = () => {
      if (selectedScale && rootNote) {
        const intr = selectedScale?.interval;
        const base = baseNotes.indexOf(rootNote);
        let idx = base;
        let notes: string[] = [];

        intr.forEach((i) => {
          notes.push(baseNotes[idx]);
          idx = (idx + i) % baseNotes.length;
        });

        setActiveNotes(notes);
      }
    };

    buildScale();
  }, [selectedScale, rootNote]);

  const handleScaleOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    const selected = scales.filter((v) => v.name === val)[0];
    if (selected) setSelectedScale(selected);
  };

  const handleRootNoteOnChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRootNote(e.target.value);
  };

  return (
    <>
      <div className={styles.keyboard}>
        {keys.map((oct, i) =>
          oct.map((note) => (
            <Note
              key={note}
              note={note}
              highlight={activeNotes?.includes(note)}
            />
          ))
        )}
      </div>
      <h1>
        {rootNote} {selectedScale && selectedScale.name}
      </h1>
      <label className={styles.label} htmlFor="rootSelect">
        <select
          name="rootSelect"
          id="rootSelect"
          value={rootNote}
          onChange={handleRootNoteOnChange}
        >
          <option value="none">Select Root Note</option>
          {baseNotes.map((note, i) => (
            <option key={note + i} value={note}>
              {note}
            </option>
          ))}
        </select>
      </label>
      <label className={styles.label} htmlFor="scaleSelect">
        <select
          name="scaleSelect"
          id="scaleSelect"
          value={selectedScale && selectedScale.name}
          onChange={handleScaleOnChange}
        >
          <option value="none">Select Scale</option>
          {scaleOptions.map((opt, i) => (
            <option key={opt + i} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </label>
    </>
  );
};

export default Keyboard;
