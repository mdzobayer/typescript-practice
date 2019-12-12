export class List {
    constructor() {
        this.aList = [];
    }
    size() {
        return this.aList.length;
    }
    getList() {
        return this.aList;
    }
    getIndexOf(index) {
        if (index < 0 || index >= this.aList.length) {
            return "Invalid index";
        }
        return this.aList[index];
    }
    add(item) {
        this.aList.push(item);
    }
}
;
