let itens = [
  {
    image: "assets/img/actions/animewoman.jpg",
    name: "Animewoman",
    price:  79.9,
    type: "figure",
  },
  {
    image: "assets/img/actions/dragonballpersonagem.jpg",
    name: "Goku",
    price: 69.9,
    type: "figure",
  },
  {
    image: "assets/img/actions/dragonballpersonagem.jpg",
    name: "Goku",
    price: 69.9,
    type: "figure",
  },
  {
    image: "assets/img/actions/dragonballpersonagem.jpg",
    name: "Goku",
    price: 69.9,
    type: "figure",
  },
  {
    image: "assets/img/actions/dragonballpersonagem.jpg",
    name: "Goku",
    price: 69.9,
    type: "figure",
  },
  {
    image: "assets/img/actions/starwarspersonagem.jpg",
    name: "Mestre Yoda",
    price: 59.0,
    type: "figure",
  },
  {
    image: "assets/img/painting/clock.jpg",
    name: "Clock",
    price: 79.9,
    type: "frame",
  },
  {
    image: "assets/img/painting/gamepad.jpg",
    name: "Gamepad",
    price: 135.0,
    type: "frame",
  },
  {
    image: "assets/img/painting/personagem.jpg",
    name: "Personagem",
    price: 239.9,
    type: "frame",
  },
];

let figures = [];

let frame = [];

function separateItens(lista) {
  const divListaFigura = document.querySelector(".listaFigure");
  const divListaFrame = document.querySelector(".listaFrame");

  for (let i = 0; i <= itens.length; i++) {
    let separar = itens[i];

    let image = separar.image;
    let name = separar.name;
    let price = separar.price;
    let type = separar.type;

    let liFigure = document.createElement("li");
    let divFigureImage = document.createElement("div");

    let imgFigure = document.createElement("img");
    imgFigure.src = image;
    imgFigure.classList.add("image");

    let divInfoFigure = document.createElement("div");

    let nameFigure = document.createElement("h2");
    nameFigure.innerText = name;

    let priceFigure = document.createElement("p");
    priceFigure.innerText = "R$" + price;

    divInfoFigure.classList.add("info");

    liFigure.appendChild(divFigureImage);
    divFigureImage.appendChild(imgFigure);
    liFigure.appendChild(divInfoFigure);
    divInfoFigure.appendChild(nameFigure);
    divInfoFigure.appendChild(priceFigure);

    if (separar.type == "figure") {
      divListaFigura.appendChild(liFigure);
    } else if (separar.type == "frame") {
      frame.push(separar);
      divListaFrame.appendChild(liFigure);
    }
  }
}

separateItens(itens);

// function criarItens(lista){
//    const divListaFigura = document.querySelector(".listaFigure")
//     for(let i = 0; i<lista.length; i++){
//         let criarFigura = lista[i]

//         let divFig = document.createElement('div')
//         divFig.classList.add("perfilLi")
//         let img = document.createElement('img')
//         img.src = perfilLi.image
//         img.alt = perfilLi.name
//         img.classList.add("capa")
//         divFig.appendChild(img)

//         let dadosFigure = document.createElement('div')
//         dadosFigure.add("cardTexto")

//         let nomeFigure = document.createElement('h2')
//         nomeFigure.innerText = perfilLi.name
//         divListaFigura.appendChild(nomeFigure)

//         let precoFigure = document.createElement('p')
//         precoFigure.innerText = perfilLi.price
//         precoFigure.classList.add('price')
//         divListaFigura.appendChild(precoFigure)

// divFig.appendChild(dadosFigure)
// divListaFigura.appendChild(divFig)

//     }

// }
// criarItens(itens)
