var i = 0;


var text = "Todo List";

function Type(){
    myHead = document.querySelector('.float1')
    myHead.textContent += text[i];
    i++

    if(i<text.length){
        setTimeout(Type,300)
    }
    
   
}

setTimeout(Type,0000)