var container=document.createElement("div");
container.setAttribute("class","container");
var row=document.createElement("div")

row.classList.add("row","m-3");
container.append(row);
var res=fetch("https://restcountries.com/v2/all")
res.then((data)=>data.json()).then((value)=>foo(value));



function foo(value){
    for(var i=0;i<value.length;i++){
        row.innerHTML+=`
        <div class="col-md-4">
        <div class="card border-primary mb-3" style="max-width: 18rem;" >
        <div class="card-body text-primary" >
        <h1 class="card-text" style="text-align:center;background-color:black;color:white;">${value[i].name}</h1>
        <img src="${value[i].flag}" class="card-img-top" >
        <p class="card-text"style="text-align:center;color:blue;">Capital:${value[i].capital}</p>
        <p class="card-text" style="text-align:center;color:blue;">region:${value[i].region}</p>
        <p class="card-text" style="text-align:center;color:blue;">Country Code:${value[i].alpha3Code}</p>
        <a href="https://openweathermap.org/" class="btn btn-primary">Click for the Weather </a> 
        </div>
      </div>
      </div>
      `;
      document.body.append(container);
    }
}

