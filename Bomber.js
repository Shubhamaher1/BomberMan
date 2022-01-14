let bombs=[];
let play=true;
let greenBombs=[];
let countScore=0;
function table(){
    const app = document.createElement("div");
    app.setAttribute("id","appbody");
    const appbody=document.getElementById("app");
    appbody.append(app);
    for(let i=0;i<9;i++){
        const row= document.createElement("div");
        for(let j=0;j<9;j++){
            const index= i+9+j;
            const colom= document.createElement("div");
            colom.style.display="inline-block";
            colom.style.width="40px";
            colom.style.height="40px";
            colom.style.border="2px solid black";
            colom.style.margin="0px";
            colom.style.padding="0px";
            
            colom.setAttribute("index",index);
            row.appendChild(colom);
            colom.addEventListener("click",function(){
                if(play){
                    if(bombs.includes(index)){
                        alert("you are Loss!");
                        colom.style.background="red";
                        play=false;
                        const input= confirm("Play Again");
                        if(input==true){
                            const table1=document.getElementById("app");
                            table1.innerHTML="";
                            table();
                            play=true;
                            countScore=0;
                        }else{
                            const table1=document.getElementById("app");
                            table1.innerHTML="Thanks For Playing !";
                        }
                   
                    }else{
                      if(colom.style.background=="green"){

                      }else{
                        colom.style.background="green";
                        //greenBombs.push(index);
                        countScore++;
                        
                        displayScore();
                        if(countScore==71){
                            alert("you are winner !");
                            play=false;
                        }
                      }
                        
                       
                    }
                   
                }
            });


        }
        row.style.padding="0px";
        row.style.margin="0px";
        row.style.border= "collapse";
        app.appendChild(row);
    }
}
function showAllbombs(){
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            const index=i+9+j;
            const getcolum=document.getElementsByTagName("div");
            if(bombs.includes(index)){
                getcolum.style.background="red";
            }
        }
    }
}
function displayScore(){
    const countHeading= document.getElementById("score");
    countHeading.innerHTML="Score: "+countScore;

}
function createbomb(){
    while(bombs.length<10){
        const randomNo= Math.floor(Math.random()*81);
       if(!bombs.includes(randomNo)){
        bombs.push(randomNo); 
       }
    }
}
table();
createbomb();
console.log(bombs);
// let bombs=[];
// console.log("shubham");
// const boady= document.getElementsByTagName("body");
// //boady.style.border="red";
// let gamepoints=0;
// function addGrid(){
//     const app= document.getElementById('app');
//     for(let i=0;i<9;i++){
//         const ro = document.createElement('div');
//         for(let j=0;j<9 ; j++){
//             const index=i+9+j;
//             const col= document.createElement('div');
//             col.style.display='inline-block';
//             col.style.width='60px';
//             col.style.height='60px';
//             col.style.border='1px solid black';
//            // col.style.background='red';
//            col.setAttribute("index",index);
//         //    col.addEventListener("click",function(){
//         //        if(bombs.includes(index)){
//         //            alert("bomb is click");
//         //        }
//         //        else{
//         //            col.style.background="green";
//         //            gamepoints++;
                 
//         //        }
//         //    });
           
//             ro.appendChild(col);
//         }
//         app.appendChild(ro);
//     }
// }

// function randomno(){
//    while(bombs.length<11){
//     const rand=Math.floor( Math.random()*100);
//     if(rand<81&&!bombs.includes(rand)){
//         bombs=push(rand);
//     }
//    }
// }
// addGrid();
// randomno();
// console.log(bombs);
