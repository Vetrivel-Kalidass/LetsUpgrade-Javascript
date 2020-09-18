window.onload=function(){
    let busArr1 = [
        {
            name: "haii",
            source: "vsi",
            destination: "arni",
            number: 3,
            passengerCapacity: 4,
        }
    ];

    if(localStorage.getItem("busArr")==null){
        let busStr=JSON.stringify(busArr1);

        console.log(busStr);
        localStorage.setItem("busArr", busArr1);
    }

};
function display(bus_data=undefined) {
    let dispBus;
    let arr='';
    if(bus_data==undefined){
    dispBus=JSON.parse(localStorage.getItem("busArr"));
    }
    else{
    dispBus = bus_data;
    }
  
    dispBus.forEach(function(element, index) {
      let row = `
      <tr>
      <td>${index+1}</td>
      <td>${element.name}</td>
      <td>${element.source}</td>
      <td>${element.destination}</td>
      <td>${element.number}</td>
      <td>${element.passengerCapacity}</td>
      <td><button onclick="deleteR(${index})" class="del">delete</button>
      </td>
      </tr>`;
        arr+=(row);
        
        
    });

    
    console.log(typeof(dispBus));
    document.getElementById("tableDat").innerHTML = arr;
}

function insertB(e) {
    e.preventDefault()  
    let bus = {};
    let name = document.getElementById("name").value;
    let source = document.getElementById("source").value;
    let dest = document.getElementById("dest").value;
    let number = document.getElementById("number").value;
    let passcap = document.getElementById("passcap").value;
 
   bus.name = name;
   bus.source=source;
   bus.destination=dest;
   bus.number=number;
   bus.passengerCapacity=passcap;

   let newBus=JSON.parse(localStorage.getItem("busArr"));
   newBus.push(bus);
   strbuses=JSON.stringify(newBus);
   localStorage.setItem("busArr",strbuses);

    let newbus1 = JSON.parse(localStorage.getItem("busArr"));
    display(newbus1);
    



    return false;
}

display();

function search() {
    let srch = document.getElementById("search").value;

    let arrbus= JSON.parse(localStorage.getItem("busArr"));

    let filtarr = arrbus.filter(function (element) {
        if (element.source.indexOf(srch) != -1) {
            return element.source.indexOf(srch) != -1;
        }
        else if (element.destination.indexOf(srch) != -1) {
            return element.destination.indexOf(srch) != -1;


        };

    })
    display(filtarr);

}

function deleteR(index){
    let buses = JSON.parse(localStorage.getItem("busArr"));
    buses.splice(index, 1);
    display(buses);
    localStorage.setItem("busArr", JSON.stringify(buses));


}
