"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.billingApplication = void 0;
var nonTaxableItem = [
    "pills",
    "book",
    "food",
    "medicines"
];
var billingApplication = /** @class */ (function () {
    function billingApplication(product) {
        this.product = product;
        this.totalTax = 0;
        this.totalAmount = 0;
    }
    billingApplication.prototype.percentValue = function (percent, amount) {
        return amount * percent / 100;
    };
    billingApplication.prototype.taxCalculation = function (type, amount) {
        switch (type) {
            case "import duty":
                return this.percentValue(5, amount);
            case "basic tax":
                return this.percentValue(10, amount);
            case "basic and imported":
                return this.percentValue(15, amount);
            default:
                return 0;
        }
    };
    billingApplication.prototype.calculateValueWithTax = function () {
        var _this = this;
        return (this.product.map(function (items) {
            var value = nonTaxableItem.filter(function (s) { return s.includes(items.item); });
            if (!value.length && items.type == "imported") {
                items.newAmount = _this.taxCalculation("basic and imported", items.amount);
            }
            else if (!value.length && items.type == "imported") {
                items.newAmount = _this.taxCalculation("import duty", items.amount);
            }
            else if (!value.length) {
                items.newAmount = _this.taxCalculation("basic tax", items.amount);
            }
            else {
                items.newAmount = 0;
            }
        }));
    };
    billingApplication.prototype.returnItem = function () {
        var _this = this;
        this.product.map(function (items) {
            var newAmount = items.newAmount + items.amount;
            console.log(items.quantity + " " + items.item + " at " + newAmount);
            _this.totalTax = _this.totalTax + items.newAmount;
            _this.totalAmount = _this.totalAmount + newAmount;
        });
        this.product.push();
    };
    billingApplication.prototype.generateBill = function () {
        this.returnItem();
        console.log("Total Tax", Math.round(this.totalTax * 2) / 2);
        console.log("Total Amount", this.totalAmount);
    };
    billingApplication.prototype.disp = function () {
        this.calculateValueWithTax();
        this.generateBill();
        return;
    };
    return billingApplication;
}());
exports.billingApplication = billingApplication;
//# sourceMappingURL=billingApplication.js.map