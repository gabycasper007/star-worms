export interface Loggable extends Serializable {
  log: () => void;
}

export interface Serializable {
  serialize: () => string;
}
