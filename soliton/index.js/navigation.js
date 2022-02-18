
const newSlide = ()=>{

    const burger =document.querySelector(".burger")
    const navmenu = document.querySelector(".navigation-menu")
    const navLists = document.querySelectorAll("#nav-list li")
    const body = document.querySelector("body")
    const show = document.querySelector(".show")
    const backdark = document.querySelector(".backdark")
    
    burger.addEventListener('click',()=>{
         navmenu.classList.toggle("toggle-menu")
         

         navLists.forEach((navList,index)=>{
            if(navList.style.animation){
                navList.style.animation = ''
                backdark.style.opacity=''
                backdark.style.background=''
                body.style.overflow=''
                 
              }else{
                navList.style.animation=`fadeOut .2s ease forwards ${index / 15 -0.2 }s` 
                backdark.style.opacity='.1'
                
                body.style.overflow='hidden'
                
                 
                
              }
              
         })
         burger.classList.toggle("toggle")
    })
    
    
    
    
    

}



newSlide()



