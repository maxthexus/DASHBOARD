const menuItem = document.querySelector(".sidebar").querySelectorAll("a")
console.log(menuItem)

menuItem.forEach(Element => {
    Element.addEventListener("click",function(){
        menuItem.forEach(menu=>menu.classList.remove("ativo"))

        this.classList.add("ativo")
    })
})


//let item = document.getElementsByTagName('a')[i].classList.toggle('ativo')