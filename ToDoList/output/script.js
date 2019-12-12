// Reference: https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript
import { List } from './List';
let myList = new List();
function PrintList() {
    let returnedList = myList.getList();
    let i;
    let len = myList.size();
    let fullList = "";
    for (i = 0; i < len; ++i) {
        console.log(i + ". " + returnedList[i]);
        //console.log("\n");
        fullList += "<h4>" + (i + 1) + ". " + returnedList[i] + "</h4>";
    }
    document.getElementById("list").innerHTML = fullList;
}
function AddItem() {
    let x = document.getElementById("item").value;
    if (x != "") {
        console.log("New item added: " + x);
        myList.add(x);
    }
}
function FindItem() {
    let x = document.getElementById("index").value;
    if (!(typeof x === "number")) {
        document.getElementById("result").innerHTML = "<h4>Invalid input</h4>";
    }
    else {
        let ans = myList.getIndexOf(x);
        document.getElementById("result").innerHTML = ans;
    }
}
