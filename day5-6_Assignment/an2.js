window.onload=function(){
    let busArr1 = [{}];

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
 
   bus.name = document.getElementById("name").value;
   bus.source= document.getElementById("source").value;
   bus.destination= document.getElementById("destin").value;
   bus.number= document.getElementById("bno").value;
   bus.capacity= document.getElementById("pass").value;

   let newBus=JSON.parse(localStorage.getItem("busArr1"));
   newBus.push(bus);
   strbuses=JSON.stringify(newBus);
   localStorage.setItem("busArr1",strbuses);

    let newbus1 = JSON.parse(localStorage.getItem("busArr1"));
    display(newbus1);
    document.getElementById("name").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destin").value = "";
    document.getElementById("bno").value = "";
    document.getElementById("pass").value = "";



    return false;
}

display();

function searchs() {
    let srch = document.getElementById("search").value;

    let arrbus= JSON.parse(localStorage.getItem("busArr1"));

    let filtarr = arrbus.filter(function (elem) {
        return (elem.source.toUpperCase().indexOf(srch.toUpperCase()) != -1)||
        (elem.destination.toUpperCase().indexOf(srch.toUpperCase()) != -1);

    })
    display(filtarr);

}

function deleteR(index){
    let buses = JSON.parse(localStorage.getItem("busArr1"));
    buses.splice(index, 1);
    display(buses);
    localStorage.setItem("busArr1", JSON.stringify(buses));


}
