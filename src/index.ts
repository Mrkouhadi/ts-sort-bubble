import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";

//////////// sort an array of numbers : array[]

        const numsCollection = new NumbersCollection([-4,3,7,0,-1,-3,10]);
        numsCollection.sort();
        console.log("NUmbers sorted : " + numsCollection.data);


//////////// sort a string : string

        const charactersCollection = new CharactersCollection("MmvvVWAbbBLk");
        charactersCollection.sort();
        console.log("characters sorted : " + charactersCollection.data);


//////////// testing the sorting implmentation of linked list

        const linnkedList = new LinkedList();
        linnkedList.add(230);
        linnkedList.add(-43);
        linnkedList.add(89);
        linnkedList.add(0); 
        linnkedList.sort();
        linnkedList.print();
