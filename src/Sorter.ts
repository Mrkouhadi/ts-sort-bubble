
interface Sortable{
    length:number;
    compare(index1:number, index2:number):boolean;
    swap(firstInd:number, secondInd:number):void;
}

export abstract class Sorter {
    // (making a promise that children will have specific methods and properties) : define some methdos that will be implemented by child classes in the future
    abstract compare(ind1:number, ind2:number):boolean;
    abstract swap(ind1:number, ind2:number):void;
    abstract length:number;

    sort():void{
        const {length} = this;

        for(let i = 0; i < length; i++){
            for(let j=0; j<length - i - 1; j++){
                if(this.compare(j, j+1)){
                    this.swap(j, j+1);
                }
            }
        }

    }
}