import { CharactersCollection } from "./CharactersCollection";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

// sort an array of numbers : array[]
const numsCollection = new NumbersCollection([-4,3,7,0,-1,-3,10]);
const numbersSorter = new Sorter(numsCollection);
numbersSorter.sort();
console.log("NUmbers sorted : " + numsCollection.data);

// sort a string : string
const charactersCollection = new CharactersCollection("MmvvVWAbbBLk");
const charactersSorter = new Sorter(charactersCollection);
charactersSorter.sort();
console.log("characters sorted : " + charactersCollection.data);