// Object Oriented Programming (OOP)
// Class Defination
var Arithematic = /** @class */ (function () {
    function Arithematic() {
        console.log("Inside constructor");
    }
    Arithematic.prototype.Addition = function () {
        var Ans = 0; // Local variable
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substraction = function () {
        var Ans = 0;
        Ans = this.No1 - this.No2; // Local Variable
        return Ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic();
var obj2 = new Arithematic();
// Kay Karayecha ahe? (Behviours / Function)
// Addition & Substruction
// Te KaranyaKarata Kay Laganar ahe? (Characteristcs/Variables)
// 2 number value thewayeala ani 1 number answer thewayeala
