window.onload=function(){
    let busArr1 = [
        {
            name: "APR travels",
            source: "vandavasi",
            destination: "arni",
            number: 3,
            capacity: 50,
        }
    ];

    if(localStorage.getItem("busArr1")==null){
        let busStr=JSON.stringify(busArr1);
        localStorage.setItem("busArr1", busStr);
    }

};

function display(busDat=undefined) {
    let dispBus;
    let arr='';
    if(busDat==undefined){
    dispBus=JSON.parse(localStorage.getItem("busArr1"));
    }
    else{
    dispBus = busDat;
    }
  
    dispBus.forEach(function(elem, index) {
      let row = `
      <tr>
      <td>${index+1}</td>
      <td>${elem.name}</td>
      <td>${elem.source}</td>
      <td>${elem.destination}</td>
      <td>${elem.number}</td>
      <td>${elem.capacity}</td>
      <td><button onclick="deleteR(${index})" class="del">delete</button>
      </td>
      </tr>`;
        arr += row;
        
        
    });

    document.getElementById("tableDat").innerHTML = arr;
}

function insertB(e) {
    e.preventDefault()  
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let dest = document.getElementById("destin").value;
    let number = document.getElementById("bno").value;
    let passcap = document.getElementById("pass").value;
 
   bus.name = name;
   bus.source=source;
   bus.destination=dest;
   bus.number=number;
   bus.capacity=passcap;

   let newBus=JSON.parse(localStorage.getItem("busArr1"));
   newBus.push(bus);
   strbuses=JSON.stringify(newBus);
   localStorage.setItem("busArr1",strbuses);

    let newbus1 = JSON.parse(localStorage.getItem("busArr1"));
    display(newbus1);
    



    return false;
}

display();

function searchs() {
    let srch = document.getElementById("search").value;

    let arrbus= JSON.parse(localStorage.getItem("busArr1"));

    let filtarr = arrbus.filter(function (elem) {
        return (elem.name.toUpperCase().indexOf(srch.toUpperCase()) != -1)||
        (elem.city.toUpperCase().indexOf(srch.toUpperCase()) != -1);

    })
    display(filtarr);

}

function deleteR(index){
    let buses = JSON.parse(localStorage.getItem("busArr1"));
    buses.splice(index, 1);
    display(buses);
    localStorage.setItem("busArr1", JSON.stringify(buses));


}
