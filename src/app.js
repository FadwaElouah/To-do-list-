let btn = document.getElementById("btn");
let main = document.getElementById("main");
let section1=document.getElementById("section1");
let annuler=document.getElementById("annuler");
let submit = document.getElementById("submit");
let taskTitle = document.getElementById("taskTitle");
let taskDesc = document.getElementById("taskDesc");
let taskStatus = document.getElementById("taskStatus");
let taskPrioriter = document.getElementById("taskPrioriter");
let taskDate = document.getElementById("taskDate");
let boxs = document.querySelectorAll(".box");
let div = document.getElementById("div");



btn.addEventListener("click",()=>{
    main.classList.remove("hidden");
    section1.classList.add("hidden");
}
    
);
annuler.addEventListener("click",()=>{
    main.classList.add("hidden");
    section1.classList.remove("hidden");
});



submit.addEventListener("click", (e)=>{
    e.preventDefault()
    if(taskTitle.value != '' && taskDesc.value != '' && taskStatus.value != '' && taskPrioriter.value != '' && taskDate.value != ''){
        boxs[0].innerHTML += `
            <div   class=" item border border-gray-600  mt-5 rounded-lg py-3 pl-2 w-72" draggable="true" id="div" >
                <h2 class="text-white text-3xl ">${taskTitle.value}</h2>
                <p class="text-white ">${taskDesc.value}</p>
                <p class="text-white ">${taskStatus.value}</p>
                <p class="text-white ">${taskPrioriter.value}</p>
                <p class="text-white ">${taskDate.value}</p>
                <button type="button"  class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800 mt-4" id="delete" >Delete</button>
                <button type="button" class="text-yellow-400 hover:text-white border border-orange-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-orange-300 dark:text-orange-300 dark:hover:text-white dark:hover:bg-orange-400 dark:focus:ring-yellow-900">Edit</button>
            </div>
        `
        
    }
    dragItem();
})
function dragItem(){
    let items = document.querySelectorAll(".item");
    items.forEach(item=>{
        item.addEventListener('dragstart',function(){
            console.log("drag start")
        })
    })
    
}





