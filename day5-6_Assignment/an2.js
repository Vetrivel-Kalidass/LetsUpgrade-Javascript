

    let busArr1;

window.onload = function(){
    if((localStorage.getItem("busArr1")) == undefined)
    {
        console.log("if");
        localStorage.setItem("busArr1", JSON.stringify(busArr1));
    }
}

function display(busDat) {
    let dispBus= "";
    let arr;
    if(busDat == undefined){
        arr = JSON.parse(localStorage.getItem("busArr1"));
    }
    else{
    arr = busDat;
    }
  
    arr.forEach(function(elem, index) {
      let row = `
      <tr>
      <td>${index+1}</td>
      <td>${elem.name}</td>
      <td>${elem.source}</td>
      <td>${elem.destination}</td>
      <td>${elem.busNum}</td>
      <td>${elem.busCap}</td>
      <td><button onclick="deleteR(${index})" class="del">delete</button>
      </td>
      </tr>`;
        dispBus += row;
    });

    document.getElementsByClassName("tableDat")[0].innerHTML = dispBus;
}

display(busArr1);

function insertB(e) {
    e.preventDefault();
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let dest = document.getElementById("destin").value;
    let num = document.getElementById("bno").value;
    let passcap = document.getElementById("pass").value;
 
   bus.name = name;
   bus.source=source;
   bus.destination=dest;
   bus.busNum=num;
   bus.busCap=passcap;

   let newBus = JSON.parse(localStorage.getItem("busArr1"));
   newBus.push(bus);
   localStorage.setItem("busArr1", JSON.stringify(newBus));

    display(newBus);

    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destin").value = "";
    document.getElementById("bno").value = "";
    document.getElementById("pass").value = "";
    
}


function searchs() {
    let srch = document.getElementById("search").value;

    let arrbus= JSON.parse(localStorage.getItem("busArr1"));

    let filtarr = arrbus.filter(function (elem) {
        return (elem.source.toUpperCase().indexOf(srch.toUpperCase()) != -1)||
        (elem.destination.toUpperCase().indexOf(srch.toUpperCase()) != -1);

    });
    display(filtarr);

}

function deleteR(index){
    let buses = JSON.parse(localStorage.getItem("busArr1"));
    buses.splice(index, 1);
    display(buses);
    localStorage.setItem("busArr1", JSON.stringify(buses));


}
