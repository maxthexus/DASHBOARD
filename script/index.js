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
//menu ativo class="ativo"
function mostrarAtivo(tag){
    let menuAtivo = document.querySelector(".sidebar")
    let

}


//mudar tema
altTema.addEventListener('click', ()=> {
    document.body.classList.toggle('tema-dark');

    altTema.querySelector('span:nth-child(1)').classList.toggle('ativo')
    altTema.querySelector('span:nth-child(2)').classList.toggle('ativo')
})



Pedidos.forEach(pedido =>{
    const tr = document.createElement('tr');
    const trConteudo = `
    <td>${pedido.nomeProduto}</td>
    <td>${pedido.numProduto}</td>
    <td>${pedido.pagStatus}</td>
    <td class="${pedido.envio === 'Cancelado' ? 'perigo': pedido.envio === 'Pendente'?'atencao' : 'primaria'} ">${pedido.envio}</td>
    <td class="primaria">Detalhes</td>
    `
    tr.innerHTML = trConteudo;
    document.querySelector('table tbody').appendChild(tr);
})