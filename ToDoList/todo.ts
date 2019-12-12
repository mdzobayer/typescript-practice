import {Item} from './Item';
import {List} from './List';

let myList:List = new List();


function processForDOM(item:Item, index:number) :string {

    let dom:string = "";

    if (item.getStatus() === true) {
        dom = "<p>&#10004; &nbsp;&nbsp;" + index + ". &nbsp; " + item.getShortDes() + " </p>";
    }
    else {
        dom = "<p id = \"task" + (index-1) + "\"  >&#10007; &nbsp;&nbsp;" + index + ". &nbsp; " + item.getShortDes() + " <input type=\"button\" value = \"Mark as done\" onclick=\"workDone(" + (index - 1) + ")\" />" + " </p>";
    }


    return dom;
}



function PrintFullList() {
    let returnedList:Item [] = myList.getFullList();

    let i, len: number;
    let fullList: string = "";

    len = returnedList.length;


    for (i = 0; i < len; ++i) {
        console.log(returnedList[i]);
        fullList += processForDOM(returnedList[i], i+1);
    }
    (<HTMLInputElement>document.getElementById("list")).innerHTML = fullList;
}

function PrintDoneList() {
    let returnedList:Item [] = myList.getFullList();

    let i, len: number;
    let fullList: string = "";

    len = returnedList.length;


    for (i = 0; i < len; ++i) {
        if (returnedList[i].getStatus() === true) {
            console.log(returnedList[i]);
            fullList += processForDOM(returnedList[i], i+1);
        }
    }
    (<HTMLInputElement>document.getElementById("list")).innerHTML = fullList;
}

function PrintPendingList() {
    let returnedList:Item [] = myList.getFullList();

    let i, len: number;
    let fullList: string = "";

    len = returnedList.length;


    for (i = 0; i < len; ++i) {
        if (returnedList[i].getStatus() === false) {
            console.log(returnedList[i]);
            fullList += processForDOM(returnedList[i], i+1);
        }
    }
    (<HTMLInputElement>document.getElementById("list")).innerHTML = fullList;
}

function AddItem() {
    let x = (<HTMLInputElement>document.getElementById("item")).value;


    if (x != "") {
        let anItem:Item = new Item(x, false);
        console.log("New item added: " + x);
        myList.add(anItem);
    }
}