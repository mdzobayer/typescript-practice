

var myList : string [] = [];

function PrintList() {
    var i: number;
    var fullList: string = "";

    for (i = 0; i < myList.length; ++i) {
        console.log(i + ". " + myList[i]);
        //console.log("\n");
        fullList += "<h4>" + (i + 1) + ". " + myList[i] +"</h4>";
    }
    (<HTMLInputElement>document.getElementById("list")).innerHTML = fullList;
}

function AddItem() {
    var x = (<HTMLInputElement>document.getElementById("item")).value;
    if (x != "") {
        console.log("New item added: " + x);
        myList.push(x);
    }
}