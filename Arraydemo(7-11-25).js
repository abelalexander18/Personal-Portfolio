numbers=[1,2,3,4,5,6,7,8,9,10];
for (i=0;i<numbers.length;i++){
    console.log(numbers[i]);
}
//numbers.forEach(e=> console.log(e)); This code is also used for iterating
let person=[
    {id:1,name:'a',age:13},
    {id:2,name:'b',age:14},
    {id:3,name:'c',age:15}];
person.forEach(p=>console.log(p.name +" "+p.age));
