import {Item} from './Item'

export class List {
    private list:Item[] = [];

    constructor() {

    }
    size() :number {
        return this.list.length;
    }

    getFullList() :Item[] {
        return this.list;
    }

    getDoneList() :Item[] {
        
        let doneList:Item[] = [];

        for ( let i:number = 0; i < this.list.length; ++i) {
            if (this.list[i].getStatus() === true) {
                doneList.push(this.list[i]);
            }
        }

        return doneList;
    }

    getPendingList() :Item [] {
        let pendingList:Item[] = [];

        for ( let i:number = 0; i < this.list.length; ++i) {
            if (this.list[i].getStatus() === false) {
                pendingList.push(this.list[i]);
            }
        }

        return pendingList; 
    }

    add (item:Item) {
        this.list.push(item);
    }

};