"use strict";
// Reference: https://stackoverflow.com/questions/53071851/getting-the-value-from-input-element-in-typescript
// Class Design
var List = /** @class */ (function () {
    function List() {
        this.aList = [];
    }
    List.prototype.size = function () {
        return this.aList.length;
    };
    List.prototype.getList = function () {
        return this.aList;
    };
    List.prototype.getIndexOf = function (index) {
        if (index < 0 || index >= this.aList.length) {
            return "Invalid index";
        }
        return this.aList[index];
    };
    List.prototype.add = function (item) {
        this.aList.push(item);
    };
    return List;
}());
;
var myList = new List();
function PrintList() {
    var returnedList = myList.getList();
    var i;
    var len = myList.size();
    var fullList = "";
    for (i = 0; i < len; ++i) {
        console.log(i + ". " + returnedList[i]);
        //console.log("\n");
        fullList += "<h4>" + (i + 1) + ". " + returnedList[i] + "</h4>";
    }
    document.getElementById("list").innerHTML = fullList;
}
function AddItem() {
    var x = document.getElementById("item").value;
    if (x != "") {
        console.log("New item added: " + x);
        myList.add(x);
    }
}
function FindItem() {
    var x = document.getElementById("index").value;
    // if (!(typeof x === "number")) {
    //     document.getElementById("result").innerHTML = "<h4>Invalid input</h4>";
    // }
    {
        var ans = myList.getIndexOf(x);
        document.getElementById("result").innerHTML = "<h4>" + ans + "</h4>";
    }
}
