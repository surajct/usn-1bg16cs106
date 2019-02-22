


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
