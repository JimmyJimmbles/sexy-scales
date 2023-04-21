import { Scale } from "../models";
import { intervals } from "./intervals";

export const scales: Scale[] = [
  {
    name: "Major",
    interval: intervals.major,
  },
  {
    name: "Natural Minor",
    interval: intervals.natural_minor,
  },
  {
    name: "Harmonic Minor",
    interval: intervals.harmonic_minor,
  },
  {
    name: "Melodic Minor",
    interval: intervals.melodic_minor,
  },
  {
    name: "Pentatonic",
    interval: intervals.pentatonic,
  },
  {
    name: "Blues",
    interval: intervals.blues,
  },
  {
    name: "Dorian",
    interval: intervals.dorian,
  },
  {
    name: "Phrygian",
    interval: intervals.phrygian,
  },
  {
    name: "Lydian",
    interval: intervals.lydian,
  },
  {
    name: "Mixolydian",
    interval: intervals.mixolydian,
  },
  {
    name: "Aeolian",
    interval: intervals.aeolian,
  },
  {
    name: "Locrian",
    interval: intervals.locrian,
  },
];
