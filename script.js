const cartIcon = document.getElementById("cart") 
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
const tatsumaki = new Poster(1,"Tatsumaki",12.99,"https://cdna.artstation.com/p/assets/images/images/020/762/274/large/allen-baisa-tatsumaki-2-3.jpg?1569070291",true,18.99)
posterItems.push(tatsumaki)

const bang = new Poster(2,"Bang",8.99,"https://i.pinimg.com/736x/00/92/eb/0092eb2cf40640ad7fbc0caeaee8ca93.jpg",false,null)
posterItems.push(bang)

const genos = new Poster(3,"Genos",14.99,"https://i.pinimg.com/originals/7e/a9/9a/7ea99a61fc04f9f25db3ae6e0f576954.png",true,25.99)
posterItems.push(genos)

const garou = new Poster(4,"Garou",15.99,"https://i.pinimg.com/736x/3e/fe/2e/3efe2e38e83c92063853da56e9b63c9d.jpg",false,null)
posterItems.push(garou)

const zoro = new Poster(5,"Zoro",25.99,"https://www.itl.cat/pngfile/big/305-3051559_roronoa-zoro.jpg",false,null)
posterItems.push(zoro)

const saitama = new Poster(6,"Saitama",35.99,"https://get.wallhere.com/photo/anime-digital-art-fan-art-One-Punch-Man-Saitama-hero-superhero-anime-man-1795473.jpg",true,59.99)
posterItems.push(saitama)

const luffy = new Poster(7,"Luffy",15.99,"https://hdandroidwallpaper.com/wp-content/uploads/2021/12/Monkey-D-Luffy-Android-Wallpaper-Download.jpg",false,null)
posterItems.push(luffy)

const naruto = new Poster(8,"Naruto",19.99,"https://i.pinimg.com/originals/91/ce/6e/91ce6edc136e9c6ecd651515e6693c02.jpg",false,null)
posterItems.push(naruto)

const itachi = new Poster(9,"Itachi",17.99,"https://render.fineartamerica.com/images/rendered/default/poster/8/10/break/images/artworkimages/medium/3/itachi-paul-dipre.jpg",true,26.99)
posterItems.push(itachi)

function showList(){
    const postCon = document.getElementById("posterItems")
    let items = ""
    posterItems.forEach((element,i) =>{
        items += 
        `<div class="posterItem">
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
    </div>`
    })
    postCon.innerHTML = items;
}
function connectListener(){
    const btns = document.getElementsByClassName("cartbtn");
    for(let i of btns){
        i.addEventListener('click',()=>{
            listItems.push(posterItems[i.id])
            console.log(listItems)
            counter++;
            cartCorner()
        })
    }
}

function cartCorner(){
    if(counter>0){
        dv.innerHTML = counter
        cartIcon.appendChild(dv)
    }
}
showList();
connectListener();



