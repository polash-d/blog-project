const menuIcon=document.getElementById('menu-icon');
const menu=document.getElementById('menu');

menuIcon.addEventListener("click", () =>{
    // console.log("clicked")
    if(menu.className==='hidden'){
        menu.classList.remove('hidden');
        console.log("show");
    }else {
        menu.classList.add('hidden');
        console.log("hidden");
    }
});