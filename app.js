const immaginiCitta = [
    "immagini/01.jpg",
    "immagini/02.jpg",
    "immagini/03.jpg",
    "immagini/04.jpg",
    "immagini/05.jpg"
];

let titoliCitta = [
    "Svezia",
    "Svizzera",
    "Gran Bretagna",
    "Germania",
    "Paradise"
]

const containerDiv = document.querySelector(".container")

let activeElement ;

let bottonedestra = document.querySelector(".bdes")

let bottonesinistra = document.querySelector(".bsin")



for (let i = 0 ; i < immaginiCitta.length ; i++){

    const divElement = document.createElement('div');

    const carta = `<h2>${titoliCitta[i]}</h2><img src="${immaginiCitta[i]}">`

    containerDiv.append(divElement)

    divElement.innerHTML = carta

    if (i == 0){
        divElement.classList.add("active")
        activeElement = 0

    } 

}

bottonedestra.addEventListener("click", function(){
    
    const currentDiv = document.getElementsByClassName("active")[0]
    currentDiv.classList.remove("active")
    activeElement++
    const nextDiv = document.getElementsByClassName(titoliCitta[activeElement])[0]
    nextDiv.classList.add("active")
})
   






