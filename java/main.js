const container=document.getElementById("myList");

for (let i = 0; i < 100; i++) {
    console.log(i)
    let node = document.createElement("div");
    
    
    if(i % 15==0){
        console.log("divisibile diviso entrambi");
        node.innerHTML+="FIZZ"
        node.style.backgroundColor="blue";
        
        
        
    }
    else if(i % 3 ==0) {
        console.log("è divisibile diviso 3");
        node.innerHTML+="BUZZ"
        node.style.backgroundColor="orange";
        
        
    }   
    else if(i % 5 ==0){
        console.log("divisibile diviso 5");
        node.innerHTML+="FIZZBUZZ"
        node.style.backgroundColor="aqua";
        node.style.FontSize="2px";
        
        
        
        
    }
    else{
        node.innerHTML+=i
        node.style.backgroundColor="white";
        
    }
    
    container.append(node);


}

