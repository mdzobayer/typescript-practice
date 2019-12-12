// Reference: https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript

import {List} from './List';

let myList:List = new List();


function PrintList() {

    let returnedList:string [] = myList.getList();

    let i: number;
    let len: number = myList.size();
    let fullList: string = "";

    for (i = 0; i < len; ++i) {
        console.log(i + ". " + returnedList[i]);
        //console.log("\n");
        fullList += "<h4>" + (i + 1) + ". " + returnedList[i] +"</h4>";
    }
    (<HTMLInputElement>document.getElementById("list")).innerHTML = fullList;
}

function AddItem() {
    let x = (<HTMLInputElement>document.getElementById("item")).value;
    if (x != "") {
        console.log("New item added: " + x);
        myList.add(x);
    }
}

function FindItem() {
    let x = (<HTMLInputElement>document.getElementById("index")).value;

    if (!(typeof x === "number")) {
        (<HTMLInputElement>document.getElementById("result")).innerHTML = "<h4>Invalid input</h4>";
    }
    else {
        let ans: string = myList.getIndexOf(x);
        (<HTMLInputElement>document.getElementById("result")).innerHTML = ans;
    }
}