import { ACTIVITIES } from "./constants";
import { LightSaber, LightSaberColor } from "./types";
import { Loggable } from "./Serializable";
import { Comparable } from "./Comparable";

export class Worm implements Loggable, Comparable<Worm> {
  private _lightSaber: LightSaber;

  constructor(
    private _name: string,
    private _activity: ACTIVITIES,
    private _experience: number
  ) {}

  isFatherOf(potentialSon: Worm): boolean {
    return (
      this._name === "Darth Vader" && potentialSon._name === "Luke Skywalker"
    );
  }

  attack(worm: Worm): void {
    // this._lightSaber.color = "red";

    if (!this._lightSaber || this._lightSaber.status === "inactive") {
      this.error("You can't attack");
    }

    if (this._lightSaber.status === "active") {
      console.log(
        `${this._name} is attacking ${worm._name} with ${this._lightSaber.color} light saber`
      );
    }
  }

  private error(message: string): never {
    throw new WormError(message);
  }

  get name(): string {
    return `Worm ${this._name}`;
  }

  get experience(): number {
    return this._experience;
  }

  get activity(): string {
    return `${this._name} is now ${this._activity}`;
  }

  set lightSaber(color: LightSaberColor) {
    this._lightSaber = {
      color,
      status: "inactive",
      pressButton: () => {
        if (this._lightSaber.status === "active") {
          this._lightSaber.status = "inactive";
        } else {
          this._lightSaber.status = "active";
        }
      },
      // isBroken: false,
    };
    // this._lightSaber.isBroken = false;
  }

  log() {
    // Log to a file
    console.log(this.serialize());
  }

  serialize(): string {
    return `${this._name} is ${this._activity} and has a ${this._lightSaber.color}, ${this._lightSaber.status} light saber`;
  }

  compareTo(worm2: Worm, direction: "bigger" | "smaller" = "bigger"): string {
    if (direction === "bigger") {
      return this._experience > worm2._experience
        ? this._name
        : this._experience < worm2._experience
        ? worm2._name
        : "Equal";
    }

    if (direction === "smaller") {
      return this._experience < worm2._experience
        ? this._name
        : this._experience > worm2._experience
        ? worm2._name
        : "Equal";
    }

    // const difference = this._experience - worm2._experience;
    // if (
    //   (difference > 0 && direction === "bigger") ||
    //   (difference < 0 && direction === "smaller")
    // ) {
    //   return this._name;
    // } else if (
    //   (difference > 0 && direction === "smaller") ||
    //   (difference < 0 && direction === "bigger")
    // ) {
    //   return worm2._name;
    // }
    // return "Equal";
  }
}

export class WormError extends Error {}
