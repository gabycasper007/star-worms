export type LightSaberColor = "blue" | "red";
export type LightSaberStatus = "active" | "inactive";

// Works with interface
export interface LightSaber {
  readonly color: LightSaberColor;
  status: LightSaberStatus;
  lengthInCm?: number | string;
  pressButton: () => void;
  // readonly
  [key: string]: any;
}

// An interface can extend multiple interfaces and class as well.
// Types can have unions or intersections

export type GameElement = LightSaber | string;
