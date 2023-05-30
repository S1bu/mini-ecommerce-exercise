let products = [
{
    // ps 5 controller (item 0)
    product_image:`https://i.postimg.cc/v8jFVHmD/ps5-controller.webp`,
    product_name:`PS 5 Controller`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
{
    // ps 5 console (item 1)
    product_image:`https://i.postimg.cc/ncD8Ybs2/ps-5-console.webp`,
    product_name:`PS 5 Gaming console`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
{
    // spiderman (item 2)
    product_image:`https://i.postimg.cc/j5JMGfp7/spidermn-game.jpg`,
    product_name:`Spiderman Game ps 5`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
// --------------------------------------------------
{
    // tELESCOPE (item 3)
    product_image:`https://i.postimg.cc/GmqgYdPH/telescope.jpg`,
    product_name:`Telescope`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
{
    // ps 4 controller ( item 4)
    product_image:`https://i.postimg.cc/2y1sKg0z/ps4-controller.webp`,
    product_name:`PS 4 Gaming controller`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
{
    // ps 4 gaming console (item 5)
    product_image:`https://i.postimg.cc/SxFBgTCh/Play-Station-4-console.png`,
    product_name:`ps 4 Gaming console`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
// --------------------------------------------------
{
    // drone (item 6)
    product_image:`https://i.postimg.cc/1zXCr2MM/mini-drone.jpg`,
    product_name:`Mini drone`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
{
    // gGod of war toy ( item 7)
    product_image:`https://i.postimg.cc/gc7sn8jL/god-of-war-toy.jpg`,
    product_name:`PS 4 Gaming controller`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
},
{
    // laptop (item 8)
    product_image:`https://i.postimg.cc/gj1HQFQH/laptop.png`,
    product_name:`ps 4 Gaming console`,
    product_detail:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla ut quas a consequuntur itaque voluptate officia molestias eius consequatur cumque odio aperiam repellat reprehenderit in illo, quam aliquam, mollitia veritatis?`,
    product_price:`1000`
    
}

];
(function(){
     document.querySelector('.container').innerHTML=`
   
     <div class="row">
     <div class="col">
       
    <div class="card">
    <img src=${products[0].product_image} class="card-img-top" alt="PS 5 Controller">
    <div class="card-body">
      <h5 class="card-title">${products[0].product_name}</h5>
      <p class="card-text">${products[0].product_detail}</p>
      <p class="card-text"><b>R ${products[0].product_price}</b></p>
      <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
    </div>
     </div>
     </div>
     <div class="col"> 
    <div class="card"  >
    <img src=${products[1].product_image} class="card-img-top" alt="PS 5 Controller">
    <div class="card-body">
      <h5 class="card-title">${products[1].product_name}</h5>
      <p class="card-text">${products[1].product_detail}</p>
      <p class="card-text"><b>R ${products[1].product_price}</b></p>
      <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
    </div>
     </div>
      </div>
     <div class="col">
       
    <div class="card" >
    <img src=${products[2].product_image} class="card-img-top" alt="PS 5 Controller">
    <div class="card-body">
      <h5 class="card-title">${products[2].product_name}</h5>
      <p class="card-text">${products[2].product_detail}</p>
      <p class="card-text"><b>R ${products[2].product_price}</b></p>
      <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
    </div>
 
   </div>
   </div>
   </div>
   <!-------------------------------------------->
   <!--------------------------------------------->
   <div class="row">
   <div class="col">
     
  <div class="card"  >
  <img src=${products[3].product_image} class="card-img-top" alt="PS 5 Controller">
  <div class="card-body">
    <h5 class="card-title">${products[3].product_name}</h5>
    <p class="card-text">${products[3].product_detail}</p>
    <p class="card-text"><b>R ${products[3].product_price}</b></p>
    <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
  </div>
   </div>
   </div>
   <div class="col"> 
  <div class="card"  >
  <img src=${products[4].product_image} class="card-img-top" alt="PS 5 Controller">
  <div class="card-body">
    <h5 class="card-title">${products[4].product_name}</h5>
    <p class="card-text">${products[4].product_detail}</p>
    <p class="card-text"><b>R ${products[4].product_price}</b></p>
    <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
  </div>
   </div>
    </div>
   <div class="col">
     
  <div class="card" >
  <img src=${products[5].product_image} class="card-img-top" alt="PS 5 Controller">
  <div class="card-body">
    <h5 class="card-title">${products[5].product_name}</h5>
    <p class="card-text">${products[5].product_detail}</p>
    <p class="card-text"><b>R ${products[5].product_price}</b></p>
    <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
  </div>

 </div>
 </div>
 </div>
 <!-------------------------------------------->
 <!--------------------------------------------->
 <div class="row">
 <div class="col">
   
<div class="card"  >
<img src=${products[6].product_image} class="card-img-top" alt="PS 5 Controller">
<div class="card-body">
  <h5 class="card-title">${products[6].product_name}</h5>
  <p class="card-text">${products[6].product_detail}</p>
  <p class="card-text"><b>R ${products[6].product_price}</b></p>
  <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
</div>
 </div>
 </div>
 <div class="col"> 
<div class="card" >
<img src=${products[7].product_image} class="card-img-top" alt="PS 5 Controller">
<div class="card-body">
  <h5 class="card-title">${products[7].product_name}</h5>
  <p class="card-text">${products[7].product_detail}</p>
  <p class="card-text"><b>R ${products[7].product_price}</b></p>
  <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
</div>
 </div>
  </div>
 <div class="col">
   
<div class="card">
<img src=${products[8].product_image} class="card-img-top" alt="PS 5 Controller">
<div class="card-body">
  <h5 class="card-title">${products[8].product_name}</h5>
  <p class="card-text">${products[8].product_detail}</p>
  <p class="card-text"><b>R ${products[8].product_price}</b></p>
  <a href="#" class="btn btn-primary text-center"><i class="bi bi-bag-plus"></i> add to cart</a>
</div>

</div>
</div>
</div>

    `
    })()
 