"use strict";
var myList = [];
function PrintList() {
    var i;
    var fullList = "";
    for (i = 0; i < myList.length; ++i) {
        console.log(i + ". " + myList[i]);
        //console.log("\n");
        fullList += "<h4>" + (i + 1) + ". " + myList[i] + "</h4>";
    }
    document.getElementById("list").innerHTML = fullList;
}
function AddItem() {
    var x = document.getElementById("item").value;
    if (x != "") {
        console.log("New item added: " + x);
        myList.push(x);
    }
}
