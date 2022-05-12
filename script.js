const cartIcon = document.getElementById("cart") 
 const cartCon = document.getElementsByClassName("cartList")[0]
const cartList = document.createElement("div")
cartList.classList.add("cartList")

const dv = document.createElement("div")
dv.classList.add("redCircle")

const posterItems = []
let listItems = []
let counter = 0;

class Poster {
    constructor(id,title,price,image,discount,prePrice){
        this.id = id
        this.title = title
        this.price = price
        this.image = image
        this.discount = discount 
        this.prePrice = prePrice
    }
    getPrice(){
        return this.price;
    }
}
const luffy = new Poster(1,"Luffy",15.99,"https://hdandroidwallpaper.com/wp-content/uploads/2021/12/Monkey-D-Luffy-Android-Wallpaper-Download.jpg",false,null)
posterItems.push(luffy)

const itachi = new Poster(2,"Itachi",17.99,"https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/itachi-paul-dipre.jpg",true,26.99)
posterItems.push(itachi)

const genos = new Poster(3,"Genos",14.99,"https://i.pinimg.com/originals/7e/a9/9a/7ea99a61fc04f9f25db3ae6e0f576954.png",true,25.99)
posterItems.push(genos)

const garou = new Poster(4,"Garou",15.99,"https://i.pinimg.com/736x/3e/fe/2e/3efe2e38e83c92063853da56e9b63c9d.jpg",false,null)
posterItems.push(garou)

const zoro = new Poster(5,"Zoro",25.99,"https://www.itl.cat/pngfile/big/305-3051559_roronoa-zoro.jpg",false,null)
posterItems.push(zoro)

const saitama = new Poster(6,"Saitama",35.99,"https://get.wallhere.com/photo/anime-digital-art-fan-art-One-Punch-Man-Saitama-hero-superhero-anime-man-1795473.jpg",true,59.99)
posterItems.push(saitama)

const tatsumaki = new Poster(7,"Tatsumaki",12.99,"https://cdna.artstation.com/p/assets/images/images/020/762/274/large/allen-baisa-tatsumaki-2-3.jpg?1569070291",true,18.99)
posterItems.push(tatsumaki)

const naruto = new Poster(8,"Naruto",19.99,"https://i.pinimg.com/originals/91/ce/6e/91ce6edc136e9c6ecd651515e6693c02.jpg",false,null)
posterItems.push(naruto)


function showList(){
    const postCon = document.getElementById("posterItems")
    let items = ""
    posterItems.forEach((element,i) =>{
        items += 
        `<div class="width-m"><div class="posterItem">
        <h1 class="fullwidth center name">${element.title}</h1>
        <div class="pics"><img src=${element.image} alt=""></div>
        <div class="fullwidth price flexrow center" style="position: relative;"><h4 class="special">$${element.price}</h4><h4 class="disc">`
        if(element.discount){
            items+=`$${
                element.prePrice
            }`
        }
        items+=
        `</h4></div>
        <div><button id="${i}" class="cartbtn">Add to Cart</button></div>
    </div></div>`
    })
    postCon.innerHTML = items;
}
function connectListener(){
    const btns = document.getElementsByClassName("cartbtn");
    for(let i of btns){
        i.addEventListener('click',()=>{
            if(typeof listItems[i.id] =='undefined'){
                listItems[i.id] = 1;
            }else{
                listItems[i.id]++;
            }
            counter++;
            cartCorner();
            drawCartCon();
        })
    }
}

function cartCorner(){
    if(counter>0){
        dv.innerHTML = counter
        cartIcon.appendChild(dv)
    }else{
        dv.remove();
    }
}
function drawCartCon(){
    let items = '';
    let total = 0;
    if(counter){
        listItems.forEach((el,i) =>{
            if(el>0)
            items+=
            `<div class="fullwidth flexrow spacebtwn mar-b-10">
              <div class="flexrow">
                <div class="cartPics">
                  <img
                    src="${posterItems[i].image}"
                  />
                </div>
                <h3 class="cartItemTitle center">${
                    posterItems[i].title
                } Poster</h3>
              </div>
              <div class="flexrow">
                <div class="center mar-r-10">
                  <h4 class="mar-r-10">$${posterItems[i].price} <span><i class="fa-solid fa-xmark"></i></span> ${el}</h4><div class="flexrow">
                  <button onclick="plusSubBtn(${i},true)" class="lilBtn" style="margin-right:5px;"> + </button>
                  <button onclick="plusSubBtn(${i},false)" class="lilBtn"> - </button>
                  </div>
                </div>
                <div class="center mar-r-10">
                  <div class="removeIcon center" onclick="removeItem(${i})">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </div>
            </div>`;
            total+=posterItems[i].price*el
        })
        items+=
        `<div class="border-t fullwidth center"><h2>Total price : $${total}</h2></div>`
    }else{
        items = "Cart is Empty"
    }
  cartCon.innerHTML = items;
}
cartIcon.addEventListener('click', () => {
         drawCartCon();
    cartCon.classList.toggle("off")
    cartIcon.classList.toggle("back")
})
function plusSubBtn(i,t){
    if(t){
        counter++;
        listItems[i]++;
    }else{
        if(listItems[i]>0){
            listItems[i]--;
            counter--;
        }
    }
    cartCorner()
    drawCartCon();
}
function removeItem(i){
    counter-=listItems[i];
    listItems[i]=0;
    cartCorner()
    drawCartCon();
}
showList();
connectListener();