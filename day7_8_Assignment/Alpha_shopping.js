
//store the cart products 
let cart = [];

//store the counts of the cart products
let cartCount = 0;

//main Products--Array contain marvel figuren products as objects
let stockProducts = [
    {
        id: 1,
        name: "Spider man",
        size: "7 inchs",
        price: 1999,
        img: "1spidy.jpeg",
        description: "homecomming spiderman figure",
    },
    {
        id: 2,
        name: "Ironman",
        size: "6 inchs",
        price: 3599,
        img: "2ironman.jpeg",
        description: "Infinity Ironman NanoBot suit",
    },
    {
        id: 3,
        name: "Thor",
        size: "8 inchs",
        price: 2199,
        img: "3thor.jpeg",
        description: "Angry thor figuren",
    },
    {
        id: 4,
        name: "Dr.Strange",
        size: "5 inchs",
        price: 1200,
        img: "4strange.jpeg",
        description: "Magical Dr.strange figure",
    },
    {
        id: 5,
        name: "Captan America",
        size: "6 inchs",
        price: 2999,
        img: "5cap.jpeg",
        description: "Captain America the Lead",
    },
    {
        id: 6,
        name: "Ant Man",
        size: "4 inchs",
        price: 1000,
        img: "6antman.jpeg",
        description: "Little Antman figures",
    },
    {
        id: 7,
        name: "Wolverine",
        size: "7 inchs",
        price: 3200,
        img: "7wolverine.jpeg",
        description: "Angry Wolverine Blades out",
    },
    {
        id: 8,
        name: "Hela",
        size: "7 inchs",
        price: 3000,
        img: "8hela.jpeg",
        description: "Hela the god of death",
    },
    {
        id: 9,
        name: "Thanos",
        size: "7 inchs",
        price: 2000,
        img: "9thanos.jpeg",
        description: "Thanos Descision of his snap",
    },
    {
        id: 10,
        name: "Hulk",
        size: "6 inchs",
        price: 2500,
        img: "10hulk.jpeg",
        description: "Hulk always anger",
    },
    {
        id: 11,
        name: "Captain Marvel",
        size: "6 inchs",
        price: 2600,
        img: "11marvel.jpeg",
        description: "Captian Marvel Universal power",
    },
    {
        id: 12,
        name: "Natasha",
        size: "5.5 inchs",
        price: 2200,
        img: "12natasha.jpeg",
        description: "Natasha Romanoff the spy",
    }
];

//display the passing objects(products) array in web page
function display(objArr, check)
{
    let products = "";

    objArr.forEach(function(product) {
        
        let {id,name,size,price,img,description} = product;
        products += `<div class="product">
                        <div class="productimg">
                        <img src="products/${img}" width=100%>
                        </div>
                        <h3>${name}</h3>
                        <p>size  :   ${size}</p>
                        <p>price : ${price} $</p>
                        <p>Description:   ${description}</p>`;
                if(check == null){
                    products +=`<button onclick="addCart(${id})">add to cart</button>
                         <button>Buy now</button>
                        </div>`;
                }else{
                    products +=`<button onclick="removeCart(${id})">remove</button>
                         <button>Buy now</button>
                         </div>`;
                }
        });
        if(check == null){
            document.getElementById("prod").innerHTML = products;
        }
        else{
            document.getElementById("cart").innerHTML = products;
         }
    document.getElementById("cartCount").innerHTML = `
    <img src="products/cart.png" width=12%>` + "your Carts-(" + cartCount + ")";
}

display(stockProducts);

//get the product from main Products by Id
function getProductsById(id)
{
    return stockProducts.find(function(elem){
        return elem.id == id;
    });
}

//add the product in cart 
function addCart(id)
{   
    let product = getProductsById(id);
    if(checkCart(id) == false){
        cart.push(product);
        cartCount++;
    }
    else{
        alert("product already in cart");
        
    }
    display(cart, "cart");
}

//remove product from cart
function removeCart(id)
{
    let index = cart.findIndex(function(elem){
        return elem.id == id;
    });
    cart.splice(index, 1);
    cartCount--;
    display(cart, "cart");
}
//search products
function searchs()
{
    let srch = document.getElementById("sch").value;
    let p = stockProducts.filter(function(elem){
        return (elem.name.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
                (elem.size.toUpperCase().indexOf(srch.toUpperCase()) != -1) ||
                (elem.description.toUpperCase().indexOf(srch.toUpperCase()) != -1);
    });
    display(p);
    
}

//search products by minimum to maximum values
function search()
{
    let min = (document.getElementById("minS").value != 0)? document.getElementById("minS").value : 500;
    let max = (document.getElementById("maxS").value != 0)? document.getElementById("maxS").value : 5000;
    let p = stockProducts.filter(function(elem){
        return (elem.price>=min && elem.price<=max);
    });
    display(p);
    
}

//check the product that already exists in cart or not?
function checkCart(id)
{
    return cart.filter(function(elem){
        return elem.id == id ? true:false;
    })
}
