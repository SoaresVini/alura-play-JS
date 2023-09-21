import {api} from "./api.js";
const form = document.querySelector("[data-form]");

async function criarVideos(evento) {
    evento.preventDefault();

    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try {
        await api.criarVideos(titulo, descricao, url, imagem);

        window.location.href = "../pages/envio-concluido.html";
    }catch(e) {
        alert(e)
    }
}

form.addEventListener("submit", evento => criarVideos(evento))
