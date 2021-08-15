

// Task 2
// 1.Square of a number
var sqrnumber=4;
console.log("Square of anumber="+sqrnumber*sqrnumber);

// 2.Swapping 2 numbers
let a=1;
let b=2;
console.log("Before Swap values of a and b="+ a+''+b);
let temp=a;
a=b;
b=temp;
console.log("After Swap values of a and b="+a+''+b);

// 3.Addition of 3 numbers
let v1=1;
let v2=2;
let v3=3;
console.log(v1+v2+v3);

// 4.Celsius to Fahrenheit conversion
let Celsius=35;
console.log(Celsius *(9/5) + 32 );

// 5.Meter to miles
let meters= 1000;
console.log("Meters to miles : 1000 meters = ",meters/1609," miles");

// 6.Pounds to kg
let Pounds=500;
console.log("Pounds to kg conversion : ",Pounds,"Pounds = ",Pounds/2.205,"Kg");

// 7.Calculate Batting Average
let totalScore=5000;
let noOfWockets=300;
console.log("Batting average =",totalScore/noOfWockets);

// 8.Calculate five test scores and print their average
let test1=78;
let test2=58;
let test3=98;
let test4=71;
let test5=65;
console.log("Test Scores=",test1," ",test2," ",test3," ",test4," ",test5)
console.log("Average of 5 test scores", (test1+test2+test3+test4+test5)/5);

// 9.Power of any number x ^ y.
let expValue=2;
console.log("valueof 2^3 is ",Math.pow(2, 3));

// 10.Calculate Simple Interest
let principle=4000;
let rate=4;
let noOfYears=4;
console.log("Principle amt",principle);
console.log("Rate of Interest",rate);
console.log("No. of years",noOfYears);
console.log("Simple Interst is ", (principle*noOfYears*rate)/100);

// 11.Calculate area of an equilateral triangle
let side=5;
console.log("Area of Equilateral Triangle of side ",side,"is",((Math.sqrt(3)/4)*side*side));

// 12.Area Of Isosceles Triangle
let height=12;
let base=10;
console.log("Area of Isosceles Triangle of height=",height,"and base=",base," is ",(1/2)*base*height);

// 13.Volume Of Sphere
let r=10;
console.log("Volume of Sphere of radius ",r,"=",((4/3)*Math.PI*r*r*r));

// 14.Volume if Prism
let prismBase=10;
let prismHeight=20;
console.log("Volume of prism of height 10 and base 20 is ",prismBase*prismHeight);

// 15.Find area of a triangle.
let triHeight=12;
let triBase=10;
console.log("Area of  Triangle of height=",triHeight,"and base=",triBase," is ",(1/2)*triBase*triHeight);

// 16.Give the Actual cost and Sold cost, Calculate Discount Of Product
let actualCost=100;
let soldCost=80;
console.log("Actual Cost = ",actualCost);
console.log("Sold Cost = ",soldCost);
console.log("Discount = ",((100-80)/actualCost)*100,"%");

// 17.Given their radius of a circle and find its diameter, circumference and area.
let radius=5;
console.log("radius of circle =",radius);
console.log("diameter of circle =",radius*2);
console.log("circumference of circle =",2*Math.PI*radius);
console.log("area of circle =",Math.PI*radius*radius);

// 18.Given two numbers and perform all arithmetic operations.
let value1=20;
let value2=10;
console.log("Addition",value1+value2);
console.log("Subtraction",value1-value2);
console.log("Division",value1/value2);
console.log("Multiplication",value1*value2);

// 19.Display the asterisk pattern as shown below(No loop needed):
// *****
// *****
// *****
// *****
// *****
console.log(`*****
*****
*****
*****
*****`);

// 20.Calculate electricity bill?
// For example, a consumer consumes 100 watts per hour daily for one month. Calculate the total energy bill of that consumer if per unit rate is 10?
let dailywatt=100;
let costPerUnit=10;
console.log("Total energy bill =",((24*100*30)/1000)*10);

// 21.Program To Calculate CGPA
let n=5;
let m=[];
let g=[];
let sum=0;
m[0]=95;
m[1]=85;
m[2]=75;
m[3]=80;
m[4]=95;
for(let i=0;i<n;i++)
{
    g[i]=(m[i]/10);
}

for(let i=0;i<n;i++)
{
    sum+=g[i];
}
console.log("cgpa=",sum/n);      

