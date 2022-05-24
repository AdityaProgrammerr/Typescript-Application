// Function defination
function fun()
{
     console.log("Inside fun");

}

// Function call
fun()


function gun(no : number)

{
     console.log("Inside gun : "+no);


}

gun(11)

function sun(no : number): Number
{
    var i : number = no; //Local Variables
    i++;
    return i;
}

var ret : number = 0;
var a : number = 10;
 ret = sun(a);
console.log("Return value is : "+ret);
