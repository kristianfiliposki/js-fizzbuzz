
for (let i = 0; i < 100; i++) {
    console.log(i)
    const node = document.createElement("li");

    if(i % 15==0){
    console.log("divisibile diviso entrambi");
    let node = document.createElement("li");
    const textnode = document.createTextNode("MarinaPlus");
    node.appendChild(textnode);
    document.getElementById("myList").append(node);

    }
    else if(i % 3 ==0) {
        console.log("è divisibile diviso 3");
    }   
    else if(i % 5 ==0){
        console.log("divisibile diviso 5");
    }
}

