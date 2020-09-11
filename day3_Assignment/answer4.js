
    let details=[
        {name:"abc"},
        {age:30},
        {country:"India"},
        {hobbies:["hacking","webdev","cybersec"]},

        {name:"xyz"},
        {age:25},
        {country:"Japan"},
        {hobbies:["hacking","webdev","cybersec"]},

        {name:"rps"},
        {age:20},
        {country:"America"},
        {hobbies:["hacking","webdev","cybersec"]},

        {name:"dfgh"},
        {age:35},
        {country:"NYC"},
        {hobbies:["hacking","webdev","cybersec"]},

        {name:"jkl"},
        {age:40},
        {country:"India"},
        {hobbies:["hacking","webdev","cybersec"]},
]
details.forEach(function(details){
    console.log(details)
});


console.log("Person with age <30");

for(let i=0;i<details.length;i++){
    if (details[i].age<30){
    console.log(details[i])
}
}

console.log("Person who live in INDIA <30");

for(let i=0;i<details.length;i++){
    if (details[i].country=="India"){
    console.log(details[i])
}
}