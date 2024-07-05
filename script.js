function removeElementAfterDelay() {
    setTimeout(function() {
        var element = document.getElementById("remove");
        if (element) {
            element.remove();
        }
    }, 6000);
}
removeElementAfterDelay();


let flag="X"
function change(){
    return flag= (flag==="X")?"0":"X"
}

let win=document.querySelector(".win")
let resetbtn=document.querySelector(".reset")

let a=document.querySelector(".a")
let b=document.querySelector(".b")
let c=document.querySelector(".c")
let d=document.querySelector(".d")
let e=document.querySelector(".e")
let f=document.querySelector(".f")
let g=document.querySelector(".g")
let h=document.querySelector(".h")
let i=document.querySelector(".i")

let total=0;
let end=0;

function checkwin( ){
    total++;

    let won=0
    if( ((a.innerText===b.innerText) && (b.innerText===c.innerText) && (a.innerText!=='')) || 
    ( (d.innerText===e.innerText) && (e.innerText===f.innerText) && (d.innerText!=='') ) ||
    ( (g.innerText===h.innerText) && (h.innerText===i.innerText) && (g.innerText!=='') ) ||
    ( (a.innerText===e.innerText) && (e.innerText===i.innerText) && (a.innerText!=='') ) ||
    ( (c.innerText===e.innerText) && (e.innerText===g.innerText) && (c.innerText!=='') ) ||
    ( (a.innerText===d.innerText) && (d.innerText===g.innerText) && (a.innerText!=='') ) ||
    ( (b.innerText===e.innerText) && (e.innerText===h.innerText) && (b.innerText!=='') ) ||
    ( (c.innerText===f.innerText) && (f.innerText===i.innerText) && (c.innerText!=='') ) ){
        won=1
    }

    if(won===1){
        end=1
        if(flag==='0'){
            win.innerText="PLAYER_1 WON"
            resetbtn.innerText="New Game"
        }
        else{
            win.innerText="PLAYER_2 WON"
            resetbtn.innerText="New Game"

        }
    }
    if(total==9){
        win.innerText="IT'S A DRAW"
        resetbtn.innerText="New Game"
    }
}


let boxes=document.querySelectorAll(".box")
let audio=document.querySelector(".audi")

boxes.forEach(el=>{
    el.addEventListener("click",()=>{
        if(el.innerText===''){
            el.innerText=flag
            change()
            audio.play()
            checkwin()
            if(end){

            }
        }
    });
});

resetbtn.addEventListener("click",()=>{
    boxes.forEach(el=>{
        el.innerText=''
    })
    win.innerText="Let's Play :)"
    flag="X"
    resetbtn.innerText="Reset"
})

let nightmode=document.querySelector(".nightmode")
let full=document.querySelector(".full")

nightmode.onclick=function(){
    document.body.classList.toggle("dark-mode")
}
