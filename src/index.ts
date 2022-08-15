import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

//////////// sort an array of numbers : array[]
/*
        const numsCollection = new NumbersCollection([-4,3,7,0,-1,-3,10]);
        const numbersSorter = new Sorter(numsCollection);
        numbersSorter.sort();
        console.log("NUmbers sorted : " + numsCollection.data);
*/

//////////// sort a string : string
/*
        const charactersCollection = new CharactersCollection("MmvvVWAbbBLk");
        const charactersSorter = new Sorter(charactersCollection);
        charactersSorter.sort();
        console.log("characters sorted : " + charactersCollection.data);
*/

////////////

const linnkedList = new LinkedList();
linnkedList.add(230);
linnkedList.add(-43);
linnkedList.add(89);
linnkedList.add(0); 

const linkedListSorter = new Sorter(linnkedList);
linkedListSorter.sort();

linnkedList.print();
