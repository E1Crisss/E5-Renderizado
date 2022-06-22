/* En este ultimo desafío general vamos a utilizar el mismo array "Pizzas🍕":

👉 Guardarlo en el local storage. 
👉 Renderizar HTML desde JS. 
👉 Renderizar en cards todas las pizzas del array (Incluir nombre, imagen, precio e ingredientes). 
👉 Crear una barra de búsqueda (input), la cual tenga la función de mostrarnos solo las pizzas cuyos nombres coincidan con la búsqueda realizada. */

const menuPizzas = [
  {
    id: 1,
    nombre: "Muzarella",
    ingredientes: ["Muzarella", " Aceituna"],
    precio: 500,
    imagen: "./img/p-muzzarella.jpg",
  },
  {
    id: 2,
    nombre: "Muzarella con Morron",
    ingredientes: ["Muzarella", " Aceituna", " Morron"],
    precio: 550,
    imagen: "./img/p-napo.jpg",
  },
  {
    id: 3,
    nombre: "Corazon de Pollo",
    ingredientes: ["Queso Cremoso ", " Muzarella", " Albahaca"],
    precio: 600,
    imagen: "./img/p-corazonPollo.jpg",
  },
  {
    id: 4,
    nombre: "Palmitos",
    ingredientes: ["Muzarella", " Salsa Golf", " Tomate Cherry"],
    precio: 650,
    imagen: "./img/p-palmitos.jpg",
  },
  {
    id: 5,
    nombre: "Panceta",
    ingredientes: ["Muzarella", " Huevo Frito"],
    precio: 700,
    imagen: "./img/p-panceta.jpg",
  },
  {
    id: 6,
    nombre: "Especial de la Casa",
    ingredientes: [
      "Muzarella",
      "Carne de lomo Arabe",
      " Tiras de Morron",
      "Huevo Frito",
    ],
    precio: 750,
    imagen: "./img/p-especial.webp",
  },
];

// DOM

const $contain = document.createElement("section"),
  $inputS = document.createElement("input"),
  $btnSumit = document.createElement("input"),
  $imgLuigi = document.createElement("img");
  // titulo
  const $title = document.createElement("h1"),
    $titletext = document.createTextNode("Pizzeria Luigi Risoto");
  $title.appendChild($titletext);
  $title.className = "titulo";
  document.body.appendChild($title);
  // contenedor

  document.body.style.width = "100vw";
  $contain.className = "box";
  document.body.appendChild($contain);
  $imgLuigi.setAttribute("src", "./img/Luigi_Risotto.webp");
  $imgLuigi.className = "imgLuigi";
  $contain.appendChild($imgLuigi);

// card



  // Input search y submit
  document.body.appendChild($inputS);
  $inputS.className = "inputS";
  $inputS.setAttribute("placeholder", "¿Qué Pizzas buscas?");
  $btnSumit.className = "btn";
  $btnSumit.setAttribute("type", "submit");
  document.body.appendChild($btnSumit);

document.addEventListener("DOMContentLoaded", (e) => {
    localStorage.setItem("Pizzeria Luigi", JSON.stringify(menuPizzas));
});

document.body.style.background =
  "red url('https://c0.wallpaperflare.com/preview/436/87/720/artesanal-pizza-cheese-close-up-crust.jpg') no-repeat fixed center";
document.body.style.backgroundSize = "cover";
document.body.style.fontFamily = "Noto Sans";

