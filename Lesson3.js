//Объект со сведениями о произошедшем событии
//В качестве параметра передается в обработчик



const sml = document.getElementById("small")
const mdm = document.getElementById("medium")
const big = document.getElementById("big")
const a = document.getElementById("a")

function onClickHandler(e){
   // e.stopPropagation()
    e.preventDefault()
    console.dir(`${e.currentTarget.tagName}`)

}

//Обработка событий на стадии погружения

// sml.addEventListener("click", onClickHandler,true)
// mdm.addEventListener("click", onClickHandler,true)
// big.addEventListener("click", onClickHandler)
// big.removeEventListener("click", onClickHandler)

a.addEventListener("click", onClickHandler)


// При множестве кнопок
sml.addEventListener("click", (e)=>{
    if(e.target.tagName === "BUTTON") {
        console.log(e.target.id)
    }
}) 


