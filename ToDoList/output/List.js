"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
        this.list = [];
    }
    List.prototype.size = function () {
        return this.list.length;
    };
    List.prototype.getFullList = function () {
        return this.list;
    };
    List.prototype.getDoneList = function () {
        var doneList = [];
        for (var i = 0; i < this.list.length; ++i) {
            if (this.list[i].getStatus() === true) {
                doneList.push(this.list[i]);
            }
        }
        return doneList;
    };
    List.prototype.getPendingList = function () {
        var pendingList = [];
        for (var i = 0; i < this.list.length; ++i) {
            if (this.list[i].getStatus() === false) {
                pendingList.push(this.list[i]);
            }
        }
        return pendingList;
    };
    List.prototype.add = function (item) {
        this.list.push(item);
    };
    return List;
}());
exports.List = List;
;
