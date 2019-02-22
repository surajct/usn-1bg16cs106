//decision making
/*
var age=18;
if(age<18){
    console.log("minor");

}else if (age >=18){
    console.log("major");

}

age>=18?console.log("major"):console.log("minor");
*/
/*
function suraj (firstname,lastname)
{
    console.log(firstname+'-'+lastname);

}
suraj('abc','hajsh');
   
//array

var ab=['avbs','gsahsb','hasgh'];
console.log(ab)
ab.push("hhhhhhh");
console.log(ab)
ab.unshift("hhsshashh");
console.log(ab)
ab.pop()
console.log(ab)
*/


var bill =[124,48,268]


var tip = new Array()
var amount= new Array()
for(i=0;i<bill.length;i++)
{
    if(bill[i]<50)
    {
        tip[i] = bill[i]*0.2;
        amount[i]= bill[i]+tip[i];
    }
     
    if(bill[i]>=50 && bill[i]<=200)
    {
        tip[i] = bill[i]*0.15;
        amount[i]= bill[i]+tip[i];
    }
    if(bill[i]>200)
    {
        tip[i]=bill[i]*0.1;
        amount[i]= bill[i]+tip[i];
    }
}
console.log("bill amount")
console.log(bill)
console.log("tip paid")
console.log(tip)
console.log("total amount paid")
console.log(amount)
