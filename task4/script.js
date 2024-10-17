var a = 0
document.querySelector("button").addEventListener("click", function () {

    if(a == 0){
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("p").style.color = "white";
    a = 1
}
    else{
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("p").style.color = "black";
        a = 0
    }
    
})




// Q-2 div createion 

document.querySelector("#divcreate").addEventListener("click", function () {
    var div = document.createElement("div");
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.backgroundColor = "red";
    document.querySelector("#container").appendChild(div);
})



// Q-3. Hide Show Para
document.querySelector("#para").addEventListener("click", function () {
    if(a==0){
    document.querySelector("#par").style.display = "none";
    a = 1
}
    else{
        document.querySelector("#par").style.display = "block";
        a = 0
    }
})


// Q-4. Dynamic Css

const dynamic = document.querySelector("#dynamic");
document.querySelector("#dynamiccss").addEventListener("click", function () {
   
    dynamic.style.backgroundColor = "red";
    dynamic.style.height = "100px";
    dynamic.style.width = "100px";
    dynamic.style.marginTop = "20px";

})
