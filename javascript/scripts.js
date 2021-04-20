//Place your javascript code related with HTML and CSS here
const pestañas = document.querySelector("#pestañas");
const subp = document.querySelector("#subp");
pestañas.addEventListener("click", function(){
    subp.classList.toggle("mostrar");
});
