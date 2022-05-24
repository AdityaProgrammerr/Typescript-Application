// Object Oriented Programming (OOP)

// Class Defination
 class Arithematic
{
    // Characteristics
   No1 : number;
   No2 : number;

   constructor(a: number,b : number)
   {
      this.No1 = a;
      this.No2 = b;
   }

    Addition()   /// Behaviour
   {
       var Ans : number = 0;   // Local variable
       Ans =  this.No1 + this.No2;
       return Ans;
   }
   Substraction()   //Behaviour
   {
       var Ans : number = 0;
       Ans =  this.No1 -  this.No2;  // Local Variable
       return Ans;
   }
}

var obj1 = new Arithematic(10,11);
var Ret : number = 0;
Ret = obj1.Addition();
console.log("Addition is :"+Ret);







// Kay Karayecha ahe? (Behviours / Function)
// Addition & Substruction

// Te KaranyaKarata Kay Laganar ahe? (Characteristcs/Variables)
// 2 number value thewayeala ani 1 number answer thewayeala