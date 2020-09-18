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
      <button onclick='showModal(${index})'>update</button>
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
    superhero.name = name;
    superhero.age = Number(age);
    superhero.city = city;
    superhero.salary = salary;
  
    cartoonHeros.push(CartHero);
  
    display(cartoonHeros);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchs() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = cartoonHeros.filter(function (cartoonheros) {
      return (
        cartoonheros.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
      return (
        cartoonheros.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deletehero(index) {
    cartoonHeros.splice(index, 1);
    display(cartoonHeros);
  }
  
  let updateIndex;
  
  function copyhero(index) {
    updateIndex = index;
    let superhero = cartoonHeros[index];
  
    document.getElementById("upname").value = superhero.name;
    document.getElementById("upage").value = superhero.age;
    document.getElementById("upcity").value = superhero.city;
    document.getElementById("upsalary").value = superhero.salary;
  }
  
  function updatehero(e) {
    e.preventDefault();
    let superhero = cartoonHeros[updateIndex];
    console.log(superhero);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;
    superhero.name = name;
    superhero.age = Number(age);
    superhero.city = city;
    superhero.salary = salary;
    console.log(superhero);
  
    display(cartoonHeros);
    
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }
  
  function showModal(index) {
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "block";
  
    copyhero(index);
  }
  
  function hideModal(event) {
    if (event.target.className == "modal") {
      let modal = document.getElementsByClassName("modal")[0];
      modal.style.display = "none";
    }
  }
