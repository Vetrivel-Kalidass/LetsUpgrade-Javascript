let cartoonHeros = [
    {
        name: "Ben 10",
        age: 15,
        city: "washington",
        salary: "$5000"
    },
    {
        name: "Courage the dog",
        age: 10,
        city: "desert",
        salary: "$10000"
    },
    {
        name: "Billy",
        age: 10,
        city: "new york",
        salary: "$2500"
    },
];

function display(heroArr) {
    let tabledata = "";
  
    heroArr.forEach(function (hero, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${hero.name}</td>
      <td>${hero.age}</td>
      <td>${hero.city}</td>
      <td>${hero.salary}</td>
      <td>
      <button onclick='deletehero(${index})'>delete</button>
      <button onclick='showhero(${index})'>update</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tData")[0].innerHTML = tabledata;
  }
  
  display(cartoonHeros);
  
  function addregisterHero(e) {
    e.preventDefault();
    let CartHero = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    CartHero.name = name;
    CartHero.age = Number(age);
    CartHero.city = city;
    CartHero.salary = salary;
  
    cartoonHeros.push(CartHero);
  
    display(cartoonHeros);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "$";
  }
  
  function searchs() {
    let s = document.getElementById("searchs").value;
  
    let newdata = cartoonHeros.filter(function (cartoonheros) {
      return (cartoonheros.name.toUpperCase().indexOf(s.toUpperCase()) != -1)||
      (cartoonheros.city.toUpperCase().indexOf(s.toUpperCase()) != -1);
    });
  
    display(newdata);
  }
  
  function deletehero(index) {
    cartoonHeros.splice(index, 1);
    display(cartoonHeros);
  }
  
  let uIndex;
  
  function copyhero(index) {
    uIndex = index;
    let sup = cartoonHeros[index];
  
    document.getElementById("uname").value = sup.name;
    document.getElementById("uage").value = sup.age;
    document.getElementById("ucity").value = sup.city;
    document.getElementById("usalary").value = sup.salary;
  }
  
  function uphero(e) {
    e.preventDefault();
    let hero = cartoonHeros[uIndex];
    let name = document.getElementById("uname").value;
    let age = document.getElementById("uage").value;
    let city = document.getElementById("ucity").value;
    let salary = document.getElementById("usalary").value;
    hero.name = name;
    hero.age = Number(age);
    hero.city = city;
    hero.salary = salary;
  
    display(cartoonHeros);
    
    let m = document.getElementsByClassName("upheros")[0];
    m.style.display = "none";
  }
  
  function showhero(index) {
    let m = document.getElementsByClassName("upheros")[0];
    m.style.display = "block";
  
    copyhero(index);
  }
  
  function hide(event) {
    if (event.target.className == "upheros") {
      let m = document.getElementsByClassName("upheros")[0];
      m.style.display = "none";
    }
  }
