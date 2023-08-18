const amount = document.getElementById("amount");
const guest = document.getElementById("guest");
const quality = document.getElementById("quality");
const tipAmount = document.getElementById("tip-amount");

calculate = () =>{
    const tip = ((amount.value * quality.value)).toFixed(2);
    
    if(tip === "NaN"){
        tipAmount.innerHTML = "Tip $0 each";
        showtipAmount();
    }
    else{
        tipAmount.innerHTML = "Tip $" + tip ;
        showtipAmount();
    }
}

showtipAmount = () =>{
    var x = tipAmount;
    x.className = "show";
    // setTimeout(function(){x.className = x.className.replace("show", ""),3000});

}

reset = () =>{
    amount.value ="";
    guest.value = "";
     quality.value = "";
}