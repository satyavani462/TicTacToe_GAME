console.log("hello");
let move=new Audio('boing.mp3');
let success=new Audio('success.mp3');
let gameover=new Audio('gameover.mp3');
let turn="X";
let isgameover=false;
let win=false;
const change=()=>{
    return turn==="X"?"O":"X";
}
const checkwin=()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    let wins=[
        [0,1,2,5,5,0],
        [3,4,5,5,15,0],
        [6,7,8,5,25,0],
        [0,4,8,5,15,45],
        [2,4,6,5,15,135],
        [0,3,6,-5,15,90],
        [1,4,7,5,15,90],
        [2,5,8,15,15,90]
    ]
    wins.forEach((e)=>{
        // console.log(boxtexts[e[0]].innerText)
        if( (boxtexts[e[0]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText===boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText!=="") && (boxtexts[e[1]].innerText!=="") && (boxtexts[e[2]].innerText!=="")){
            console.log(e[3],e[4],e[5])
            document.getElementById('info').innerText="Hurray!..."+boxtexts[e[0]].innerText+" Won The Game";
            document.getElementById("excited").style.width="200px";
            document.getElementById('line').style.width="20vw";
            document.getElementById('line').style.transform=`translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
            isgameover=true;
            win=true;
            success.play();
        }
    })
}
// success.play(); 
let boxes=document.getElementsByClassName('box');
Array.from(boxes).forEach((element)=>{
    let boxtext=element.querySelector('.boxtext');
    element.addEventListener('click',()=>{
        if(boxtext.innerText===""){
            boxtext.innerText=turn;
            turn=change();
            move.play();
            checkwin();
            if(!isgameover){
                document.getElementById('info').innerText="Turn For "+turn;
            }
        }
    })
})

//reset
document.getElementById('reset').addEventListener('click',()=>{
    let boxtexts=document.getElementsByClassName('boxtext');
    Array.from(boxtexts).forEach((e)=>{
        e.innerText="";
        document.getElementById("excited").style.width="0";
        turn="X";
        document.getElementById('info').innerText="Turn For "+turn;
        document.getElementById('line').style.width="0";
        isgameover=false;
    })
})
