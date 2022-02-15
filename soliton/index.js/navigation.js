
const newSlide = ()=>{

    const burger =document.querySelector(".burger")
    const navmenu = document.querySelector(".navigation-menu")
    const navLists = document.querySelectorAll("#nav-list li")

    
    burger.addEventListener('click',()=>{
         navmenu.classList.toggle("toggle-menu")
    
         navLists.forEach((navList,index)=>{
            if(navList.style.animation){
                navList.style.animation = ''
              }else{
                navList.style.animation=`fadeOut .2s ease forwards ${index / 15 -0.2 }s` 
              }
              
         })
         burger.classList.toggle("toggle")
    })
    
    
    
    
    

}



newSlide()