// Types
type interval = number[];
export type ScaleInterval = { [key: string]: interval };

// Interfaces
export interface Scale {
  name: string;
  interval: interval;
}
