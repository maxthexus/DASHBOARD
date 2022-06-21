const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const altTema = document.querySelector(".alt-tema")
//mostrar menu
menuBtn.addEventListener('click', ()=>{
    sideMenu.style.display ='block'
})
//fechar menu
closeBtn.addEventListener('click', () => {
    sideMenu.style.display ='none'
})
//mudar tema
altTema.addEventListener('click', ()=> {
    document.body.classList.toggle('tema-dark');

    altTema.querySelector('span:nth-child(1)').classList.toggle('ativo')
    altTema.querySelector('span:nth-child(2)').classList.toggle('ativo')
})
