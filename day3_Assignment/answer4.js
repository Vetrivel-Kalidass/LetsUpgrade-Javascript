
   let details=[
    {name:"arjun",
    age:30,
    country:"India",
    hobbies:["hacking","coder","web"]},

    {name:"okazaki",
    age:25,
    country:"Japan",
    hobbies:["electrician","playing with nagisa","daughter ushio"]},

    {name:"billy",
    age:20,
    country:"America",
    hobbies:["baking cake","batminton","carrom"]},

    {name:"junaid",
    age:40,
    country:"India",
    hobbies:["coder","animator","cybersecurity"]},

    {name:"kaleem",
    age:30,
    country:"India",
    hobbies:["coder","animator","cybersecurity"]},
];

details.forEach(function(details){
    console.log(details)
});


console.log("Person with age <30");

for(let i=0;i<details.length;i++){
    if (details[i].age<30){
    console.log(details[i])
}
}

console.log("Person who live in INDIA");

for(let i=0;i<details.length;i++){
    if (details[i].country=="India"){
    console.log(details[i])
}
}
