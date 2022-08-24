const mainEl = document.getElementById("main");
const addEl = document.getElementById("add_note");
const deleteEl = document.getElementById("delete_note");
const notes = JSON.parse(localStorage.getItem("notes"))
if(notes){
    notes.forEach((el)=>{
        addNewNote(el);
    })
}
addEl.addEventListener("click",()=>{

    addNewNote();
});

function addNewNote(text=""){
    var note = document.createElement("textarea");
    note.cols=40;
    note.rows=22;
    if(text==="") mainEl.classList.add("hidden");
    else mainEl.classList.add("textarea");
    mainEl.appendChild(note);

    const textareaEl = mainEl.querySelector("textarea");

    textareaEl.addEventListener("input",()=>{
        const saveEl = document.getElementById("save");
        saveEl.addEventListener("click",updateLocalStorage);

        const clearEl = document.getElementById("clear_note");
        clearEl.addEventListener("click",()=>{
            note.value="";
        })
    
    })
    
    deleteEl.addEventListener("click",(e)=>{
        e.preventDefault();
        mainEl.classList.remove("textarea");
        mainEl.removeChild(note);
        updateLocalStorage();
    })

    

}

function updateLocalStorage(){
    const textEl = document.querySelectorAll("textarea");
    const notes =[];
    if(textEl.length==0) return;
    textEl.forEach((el)=>{
        notes.push(el.value);
    });
    localStorage.setItem("notes",JSON.stringify(notes));
}


