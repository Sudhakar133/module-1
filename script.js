var container=document.createElement("div");
container.setAttribute("class", "container");

var row=document.createElement("div");
row.setAttribute("class", "row");

container.append(row);
document.body.append(container);

async function products(){
  try {
     
      let res=await fetch("https://makeup-api.herokuapp.com/api/v1/products.json");
      let res1=await res.json();
    console.log(res1);
  for(var i=0; i<res1.length;i++){
    let brand = res1[i].brand;
    let name=res1[i].name;
    let price=res1[i].price;
    let pricesign=res1[i].price_sign;
    let image=res1[i].image_link;
    let productlink=res1[i].product_link;
    let desc=res1[i].description;
    console.log(brand,name,price,pricesign,image,productlink,desc);
    var div=document.createElement("div");
    div.innerHTML=`<div class="col-md-12">
    <div class="card">
    <img src=${image} class="card-img-top" alt=${name}>
    <div class="card-body">
      <h5>Product Name:${name}</h5>
      <h5>Brand Name:${brand}</h5>
      <p class="card-text">Price:${pricesign} ${price}</p>
    </div>
  </div>`;
    row.append(div);
}
  }
 catch (error) {
  console.log(error);
}

}
products();