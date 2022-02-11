const links = document.querySelectorAll(".link")
const lists = document.querySelectorAll(".list-group-item")
console.log(links)
console.log(lists)



// document.querySelectorAll(".list-group-item").addEventListener("click", show);


// function show(){
    
// }

links.forEach(link=>{
    link.addEventListener("click", function(e){
        e.preventDefault();

        
        show();
    })
})


function show(){
    
}

// show()



