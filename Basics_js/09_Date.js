//Dates

let myDate = new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);

let myCreateDate = new Date(2025,0,19)
console.log(myCreateDate);
console.log(myCreateDate.toDateString());

let myCreateDates = new Date(2025,0,19,5,3)
console.log(myCreateDates.toLocaleString());

let myCreateDates01 = new Date("19-01-2025")
console.log(myCreateDates01.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreateDates01.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})






