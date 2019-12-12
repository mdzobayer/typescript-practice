"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item_1 = require("./Item");
var List_1 = require("./List");
var myList = new List_1.List();
function processForDOM(item, index) {
    var dom = "";
    if (item.getStatus() === true) {
        dom = "<p>&#10004; &nbsp;&nbsp;" + index + ". &nbsp; " + item.getShortDes() + " </p>";
    }
    else {
        dom = "<p id = \"task" + (index - 1) + "\"  >&#10007; &nbsp;&nbsp;" + index + ". &nbsp; " + item.getShortDes() + " <input type=\"button\" value = \"Mark as done\" onclick=\"workDone(" + (index - 1) + ")\" />" + " </p>";
    }
    return dom;
}
function PrintFullList() {
    var returnedList = myList.getFullList();
    var i, len;
    var fullList = "";
    len = returnedList.length;
    for (i = 0; i < len; ++i) {
        console.log(returnedList[i]);
        fullList += processForDOM(returnedList[i], i + 1);
    }
    document.getElementById("list").innerHTML = fullList;
}
function PrintDoneList() {
    var returnedList = myList.getFullList();
    var i, len;
    var fullList = "";
    len = returnedList.length;
    for (i = 0; i < len; ++i) {
        if (returnedList[i].getStatus() === true) {
            console.log(returnedList[i]);
            fullList += processForDOM(returnedList[i], i + 1);
        }
    }
    document.getElementById("list").innerHTML = fullList;
}
function PrintPendingList() {
    var returnedList = myList.getFullList();
    var i, len;
    var fullList = "";
    len = returnedList.length;
    for (i = 0; i < len; ++i) {
        if (returnedList[i].getStatus() === false) {
            console.log(returnedList[i]);
            fullList += processForDOM(returnedList[i], i + 1);
        }
    }
    document.getElementById("list").innerHTML = fullList;
}
function AddItem() {
    var x = document.getElementById("item").value;
    if (x != "") {
        var anItem = new Item_1.Item(x, false);
        console.log("New item added: " + x);
        myList.add(anItem);
    }
}
