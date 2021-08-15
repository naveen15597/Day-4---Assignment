
// Task 3
// 1.Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######
let nVal=7;
for(let i=0;i<nVal;i++)
{
    let str="";
    for(let j=0;j<=i;j++)
    {
        str+='#';        
    }
    console.log(str);
}

// 2.Iterate through the string array and print it contents
var strArray= ["<option>Jazz</option>",
,"<option>Blues</option>",
,"<option>New Age</option>",
,"<option>Classical</option>",
,"<option>Opera</option>"]

for(let i=0;i<strArray.length;i++)
{
    console.log(strArray[i]);
}

// 2a.write a code to count the elements in the array . Don’t use length property
var myarray=[11,22,33,44,55]
let total=0;
for(let i of myarray)
{
    total+=i;
}
console.log(total);

// 2b. Create an array called foods holds the names of your top 20 favorite foods, starting with the best food.
let foods=['chkn briyani','chkn shawarma','grilled chkn','chkn Tandoori','idly','dosa','poori','pongal','vada','payasam','chapati','Naan','paneer butter masala',
'chkn friedRice','chkn soup','mutton briyani','sambar idly','egg puff','chkn puff'];

// 2c.Foods variable holds the names of your top 20 favorite foods, starting with the best food. How can you find your fifth favorite food?
console.log('fifth food in array=',foods[4]);
// Find the length of your foods array
console.log('length of the food array=',foods.length);

// 2c.Starting from the existing friends variable below, change the element that is currently 'Mari' to 'Munnabai'.
let friends = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
    ];

function dataHandling(input){
for (var i = 0; i < input.length; i++) {
    if(input[i]=='Mari')
    {
        input[i]='Munnabai';
    }    
}
}
console.log("before changing the friends=",friends);
dataHandling(friends);
console.log("After changing the friends=",friends);

// 2d.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
function dataHandling(input){
    console.log("Friends list till captain America");
for (var i = 0; i < input.length; i++) {
    if(input[i]=="CaptianAmerica")
    {
        break;
    }
    console.log(input[i]);
}
}
dataHandling(friends);

// 2e.Find the person is ur friend or not.
function dataHandling(input, name){
for (var i = 0; i < input.length; i++) {
    if(input[i]==name)
    {
        return "Yes";
    }
}
return "No";
}
let found = dataHandling(friends,'Jeff');
console.log("Is Jeff present in your friend list?",found);

// 2f. We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
var friends1 = [
    'Mari',
    'MaryJane',
    'CaptianAmerica',
    'Munnabai',
    'Jeff',
    'AAK chandran'
];
var friends2 = [
    'Gabbar',
    'Rajinikanth',
    'Mass',
    'Spiderman',
    'Jeff',
    'ET'
];
function dataHandlingFriends(input1,input2){
    let frnds=input1;    
    for(let i=0;i<input2.length;i++)
    {
        frnds.push(input2[i]);
    }    
    frnds.sort();
    console.log(frnds);
}
dataHandlingFriends(friends1,friends2);

// 3a.Get the first item, the middle item and the last item of the array
let array=[
    'Gabbar',
    'Rajinikanth',
    'Mass',
    'Spiderman',
    'Jeff',
    'ET'
];
console.log('first element if an array=',array[0]);
console.log('last element if an array=',array[array.length- 1]);

// 3b. Add your name to the end of the friends array, and add another name to beginning.
let sampleArr=[];
sampleArr[0]="Naveen";
let k=1;
for(let i in array)
{
    sampleArr[k]=array[i];
    k++;
}
console.log("added name front and last=",sampleArr);

// 3c. Add Mr or Ms to the names in the friends array.
for(let i=0;i<array.length;i++)
{
    str="Mr ";    
    array[i]=str+array[i];
}
console.log(array);

// 3d. Concat all the names the friends array and return as comma ',' seperated string.
console.log("Joining array with , = ",array.join(','));

// 3e. Find the friends names who has letter 'a' and return the list.
let newList=[];
for(let i=0;i<array.length;i++)
{
    if(array[i].indexOf('a')!=-1)
    {
        newList.push(array[i]);
    }
}
console.log(newList);

// 3f. Find the avg length of all the friends names. Get the individual length of the names and do the avg.
let avg=0;
for(let i=0;i<array.length;i++)
{
    avg+=array[i].length;
}
console.log(avg/6);

// 3g. Find the names and return the list starting with letter M.
let mList=[];
for(i of array)
{
    if(i.toLowerCase().charAt(0)=='m')
    {
        mList.push(i);
    }
}
console.log(mList);

// 3h. Find the name with max characters and return the name.
let max=0;
let name;
for(i of array)
{
    if(max<i.length)
    {
        max=i.length;
        name=i;
    }
}
console.log(name);

// 3i. Find the name with min characters and return the name.
let min=999;
for(i of array)
{
    if(min>i.length)
    {
        min=i.length;
        name=i;
    }
}
console.log(name);

// 4. Find the average in the array below. Make sure you add only the numbers and do avg.
const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
let cnt=0,tot=0;
for(let i=0;i<friendsInfo.length;i++)
{
    if(typeof(friendsInfo[i]) == "number")
    {
        tot+=friendsInfo[i];
        cnt++;
    }
}
console.log('Average of numbers=',tot/cnt);

// 5.Print the contents of the input variable
var inp = [
    ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
    ['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
    ['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
    ['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun']
    ]
    function handling(input){
    for (let i = 0; i < input.length; i++) {
        for(let j=0;j<input[i].length;j++)
        {
            console.log(input[i][j]);
        }
    }
    }
    handling(inp);

// OBJECTS:

// 1.What is the output
var myobject = {1:one,'11':1,'name':'arun'}
// console.log(myobject.11); 
console.log(myobject.name);

// Answer:
// Output =  one is not defined
// correction -> The one needs to be in quotes "one".

// 2.Write out an object literal to represent the data below.
// Guvi, Geek, 6, IIT-M RP,Chennai.
var arr={
    "address":"Guvi, Geek, 6, IIT-M RP,Chennai."
};
console.log(arr.address);

// 3.Add a new key value pair to myobject
// key : ten
// value : ten
console.log(myobject);
arr.ten="ten";
console.log(arr);

// 4.How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)
// Guvi, Geek, 6, IIT-M RP,Chennai.
// Amazon, Inc, 31, SP Infocity, Chennai.
// Google, Alphabet, 34 Amphitheater Parkway, MountainView.
// Tesla, Inc , 32, 333 Santana Row,San Jose.
var companyContact={
    "Guvi":"Guvi, Geek, 6, IIT-M RP,Chennai.",
    "Amazon":"Amazon, Inc, 31, SP Infocity, Chennai.",
    "Google":"Google, Alphabet, 34 Amphitheater Parkway, MountainView.",
    "Tesla":"Tesla, Inc , 32, 333 Santana Row,San Jose."
}