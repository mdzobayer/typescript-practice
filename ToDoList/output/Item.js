"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(des, sts) {
        this.shortDes = des;
        this.status = sts;
    }
    Item.prototype.getShortDes = function () {
        return this.shortDes;
    };
    Item.prototype.getStatus = function () {
        return this.status;
    };
    Item.prototype.updateShortDes = function (des) {
        this.shortDes = des;
    };
    Item.prototype.updateStatus = function (sts) {
        this.status = sts;
    };
    return Item;
}());
exports.Item = Item;
;
