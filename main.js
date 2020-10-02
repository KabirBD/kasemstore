// main database
var goods ={
    
    Groceries:{
        "Rice":{ price:20, link:"http"},
        
    },
    Cookies:{
        "Fruit fun":{ price:100, link:"http"},
        
    },
    Snacks:{
        "Rashid Chanachur":{ price:100, link:"http"},
        
    },
    Drinks:{
        "7up":{ price:100, link:"http"},
        
    },
    Cosmetics:{
        "Fair and Lovely":{ price:100, link:"http"},
        
    },
    Medicines:{
        "Napa":{ price:100, link:"http"},
        
    },
    Electronics:{
        "Plug":{ price:20, link:"http"},
        "Holder":{ price:15, link:"http"},
    },
    Stationary:{
        "Pen":{ price:5, link:"http"},
    }
}



// ----------------------Coding start from here-----------------

{

var category ="Stationary"
var itemBox = document.getElementById("itemList");
    getSelect();
    
// When dropdown changed
 function getSelect(){
     category = document.getElementById("categories").value;
     itemBox.innerHTML ="";
    for (var key in goods[category]) {
        addToList(key, goods[category][key])
    }

// Add item to web page
 function addToList(key, item){
    console.log(item);
    itemBox.innerHTML +=`<div class="col-6 col-md-4 my-3">
              <div class="card" style="">
                  <img class="card-img-top" src="${key.link}" alt=" Image of ${key}">
                  <div class="card-body">
                    <h5 class="card-title">${key}</h5>
                    <p class="card-text">Price: <span id="price">${item.price}</span> Taka</p>
                    <button class="btn btn-sm btn-success my-4"><span class="fas fa-shopping-cart"></span> Add to Cart</button>
                  </div>
                </div>
            </div>`;
    }
 }

//typed effect
        window.onload = function() {
            var typed = new Typed('#typed', {
                strings: ["Welcome to","Kasem Store", "Find all groceries", "Cosmetics", "Electronics", "Medicines", "Chips", "Biscuits", "Phone recharge!"],
                backSpeed: 30,
                smartBackspace: true,
                backDelay: 2000,
                startDelay: 300,
                typeSpeed: 30,
                loop: true,
                
            });
            
        };
}