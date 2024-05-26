const personData = sessionStorage.getItem('person');
    
if (personData) {} 

else {
    alert("Usuário não encontrado")
    window.location = "index.html";
}

const person = JSON.parse(personData);

console.log(person.name)

var dinheiro = person.money;
var stMarketing = person.stMarketing
var price = person.price;
var money = document.getElementById("money");
var img = document.getElementById("img");

// var upMarketing=[400,3500];
var upPrice=[400,5];
var priceST = 1;
var vendas = 1;

var btnMark = document.getElementById("btnMark");
var btnMelh = document.getElementById("btnMelh");

function updMarketing(){
    
    if(
        dinheiro >= 2**(Number(stMarketing-1)) * 300 
        && stMarketing < 10
    ){
        dinheiro -= 2**(Number(stMarketing-1)) * 300
        money.innerHTML = "Dinheiro: " + dinheiro
        vendas += 1
        document.getElementById("vMark").innerHTML = "Vendas(3seg): " + vendas

        stMarketing += 1;
        
        btnMark.innerHTML = "Upgrade (" + 2**(Number(stMarketing-1)) * 300 + ")"

        btnMark.style.padding = "4px 11px";
        btnMark.style.transition = "0.1s";
        setTimeout(()=>{
            btnMark.style.padding = "5px 12px";
        },200)
        
    }

}

function updMelhorias(){
    
    if(dinheiro >= 2**(Number(priceST-1)) * 300){
       
        dinheiro -= 2**(Number(priceST-1)) * 300
        money.innerHTML = "Dinheiro: " + dinheiro
        
        priceST += 1
        if(priceST > 2){
            price = (priceST-1) * 5
        }else{
            price = 5
        }

        document.getElementById("vMelh").innerHTML = "Preço: " + price;

        btnMelh.innerHTML = "Upgrade (" + 2**(Number(priceST-1)) * 300 + ")"

        btnMelh.style.padding = "4px 11px";
        btnMelh.style.transition = "0.1s";
        setTimeout(()=>{
            btnMelh.style.padding = "5px 12px";
        },200)

    }

}


function venda(){
    dinheiro += price;
    money.innerHTML="Dinheiro: " + dinheiro;
    img.style.width = "95%";
    img.style.transition = "0.1s"
    setTimeout(()=>{
        img.style.width = "100%";
    },200)
    // person.update(dinheiro,stMarketing,price)
}


setInterval( ()=>{
    dinheiro += price*vendas;
    money.innerHTML="Dinheiro: " + dinheiro;
    img.style.width = "95%";
    img.style.transition = "0.1s"
    setTimeout(()=>{
        img.style.width = "100%";
    },200)

},2000);


setInterval(()=>{
    if(stMarketing<10){

        if(dinheiro < 2**(Number(stMarketing-1)) * 300){
            btnMark.style.background = "gray"
        } else{
            btnMark.style.backgroundImage = "linear-gradient(90deg, rgb(138, 187, 4), green)"
        }
    
    }else{
        btnMark.style.background = "gray"
    }

    if(dinheiro < 2**(Number(priceST-1)) * 300){
        btnMelh.style.background = "gray"
    } else{
        btnMelh.style.backgroundImage = "linear-gradient(90deg, rgb(138, 187, 4), green)"
    }

},700)