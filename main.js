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
    nombre: "Morron",
    ingredientes: ["Muzarella", " Aceituna", " Morron"],
    precio: 550,
    imagen: "./img/p-napo.jpg",
  },

  {
    id: 3,
    nombre: "Palmitos",
    ingredientes: ["Muzarella", " Salsa Golf", " Tomate Cherry"],
    precio: 650,
    imagen: "./img/p-palmitos.jpg",
  },
  {
    id: 4,
    nombre: "Panceta",
    ingredientes: ["Muzarella", " Huevo Frito"],
    precio: 700,
    imagen: "./img/p-panceta.jpg",
  },
  {
    id: 5,
    nombre: "Especial de la Casa",
    ingredientes: [
      "Muzarella",
      "Carne de lomo",
      " Tiras de Morron",
      "Huevo Frito",
    ],
    precio: 750,
    imagen: "./img/p-especial.webp",
  },
];
const $contain = document.createElement("section"),
  $imgLuigi = document.createElement("img"),
  $btnSumit = document.createElement("input");

// titulo
const $title = document.createElement("h1"),
  $titletext = document.createTextNode("Pizzeria Luigi Risoto");
$title.appendChild($titletext);
$title.className = "titulo";
document.body.appendChild($title);
// contenedor

$contain.className = "box";
$imgLuigi.setAttribute("src", "./img/Luigi_Risotto.webp");
$imgLuigi.className = "imgLuigi";
document.body.appendChild($contain);
document.body.appendChild($imgLuigi);

// card

const renderPizza = () => {
  menuPizzas.forEach((pizzas) => {
    let $eCard = document.createElement("div");
    $eCard.classList.add("card");
    $contain.appendChild($eCard);

    let $imgPizza = document.createElement("img");
    $imgPizza.setAttribute("src", pizzas.imagen);
    $eCard.appendChild($imgPizza);

    let $info = document.createElement("div");
    $info.classList.add("info");
    $eCard.appendChild($info);

    let $nPizza = document.createElement("h2");
    $nPizza.innerHTML = pizzas.nombre;

    let $iPizza = document.createElement("span");
    $iPizza.innerHTML = pizzas.ingredientes;

    let $pPizza = document.createElement("span");
    $pPizza.innerHTML = `$ ${pizzas.precio}`;

    $info.appendChild($nPizza);
    $info.appendChild($iPizza);
    $info.appendChild($pPizza);
  });
};

// Input search y submit
$btnSumit.className = "btn";
$btnSumit.setAttribute("type", "search");
$btnSumit.setAttribute("placeholder", "¿Qué Pizzas buscas?");
document.body.appendChild($btnSumit);

const searchP = () => {
  const searchValor = $btnSumit.value;

  while ($contain.firstChild) {
    $contain.removeChild($contain.firstChild);
  }

  // menuPizzas.forEach((pizzas) => {
  // const mostrarPizza = pizzas.find((p) => p.nombre == searchValor);

  if (searchValor) {
    for (let i = 0; i < menuPizzas.length; i++) {
      if (menuPizzas[i].nombre == searchValor.value) {
        let $eCard = document.createElement("div");
        $eCard.classList.add("card");
        $contain.appendChild($eCard);

        let $imgPizza = document.createElement("img");
        $imgPizza.setAttribute("src", i.imagen);
        $eCard.appendChild($imgPizza);

        let $info = document.createElement("div");
        $info.classList.add("info");
        $eCard.appendChild($info);

        let $nPizza = document.createElement("h2");
        $nPizza.innerHTML = searchValor.nombre;

        let $iPizza = document.createElement("span");
        $iPizza.innerHTML = searchValor.ingredientes;

        let $pPizza = document.createElement("span");
        $pPizza.innerHTML = `$ ${searchValor.precio}`;

        $info.appendChild($nPizza);
        $info.appendChild($iPizza);
        $info.appendChild($pPizza);
      }
    }
  }
};

$btnSumit.addEventListener("search", () => {
  searchP();
});

document.addEventListener("DOMContentLoaded", (e) => {
  localStorage.setItem("Pizzeria Luigi", JSON.stringify(menuPizzas));

  document.body.className = "content";

  renderPizza();
});
