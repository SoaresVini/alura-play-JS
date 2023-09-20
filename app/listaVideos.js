import {conectaApi} from "./conectaAPI.js";

const listaVideos = document.querySelector("[data-lista]")


function  criarListaVideos(element) {
    const video = document.createElement("li");

    video.className = "videos__item"

    video.innerHTML = `
     <iframe width="100%" height="72%" src="${element.url}"
                title= "${element.titulo}"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen>        
     </iframe>
     
     <div class="descricao-video">
         <img src="${element.imagem}" alt="logo canal alura">
         <h3>${element.titulo}</h3>
         <p>${element.descricao}</p>
     </div>
    `
    return video;
}

async function get() {
    const lista = await conectaApi.listaVideos();
    lista.forEach(element => listaVideos.appendChild(criarListaVideos(element)))
}

get()