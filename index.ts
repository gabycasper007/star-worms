import { Worm } from "./Worm";
import { ACTIVITIES } from "./constants";

const luke: Worm = new Worm("Luke Skywalker", ACTIVITIES.MEDITATING, 12);
const obiWan: Worm = new Worm("Obi Wan", ACTIVITIES.PARTYING, 90);
const darthVader = new Worm("Darth Vader", ACTIVITIES.SINGING, 75);

const worms: Worm[] = [darthVader, luke, obiWan];

// Rest Parameters
const wormNamesList = (...worms: Worm[]): string => {
  return worms.map((worm) => worm.name).join(", ");
};
console.log("Worm names: ", wormNamesList(luke, obiWan));

worms.forEach((worm) => {
  console.table({
    name: worm.name,
    isFather: worm.isFatherOf(luke),
    activity: worm.activity,
  });
});

luke.lightSaber = "blue";
luke.attack(darthVader);
console.log(luke.compareTo(darthVader));

// unknown, null, undefined
// type assertions
// hybrid types
// Interfaces Extending Classes
// this: function f(this: void) {
// function overloads
// literal types: tileSize: 8 | 16 | 32; type Easing = "ease-in" | "ease-out" | "ease-in-out";
// Discriminating Unions

// https://blog.logrocket.com/when-to-use-never-and-unknown-in-typescript-5e4d6c5799ad/
