import { createCards } from "./cards_projetos_controller.js";
import { girarBanner } from "./banner_controller.js";

window.girarBanner = girarBanner;

document.addEventListener("DOMContentLoaded", () =>{
    createCards();
});//evento de escuto com arquivo DOM