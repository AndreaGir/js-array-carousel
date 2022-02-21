let immaginiCitta = [
    'immagini/01.jpg',
    'immagini/02.jpg',
    'immagini/03.jpg',
    'immagini/04.jpg',
    'immagini/05.jpg'
];

let titoliCitta = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const containerDiv = document.getElementById("dentro")

let activeElement;

let bottonedestra = document.querySelector(".bdes")

let bottonesinistra = document.querySelector(".bsin")


for (i = 0 ; i < immaginiCitta.length ; i++){

    const div = document.createElement('div');

    const carta = `<h2>${titoliCitta[i]}</h2><img src="${immaginiCitta[i]}">`

    containerDiv.append(div)

    containerDiv.innerHTML = carta

    if (i === 0){
        div.classList.add("active")
        activeElement = 0

    } 

}

   






