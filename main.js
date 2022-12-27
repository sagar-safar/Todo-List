
/* body buttton */

const btn = document.querySelector('.add')


const flex = document.querySelector('.flex-container')
const popMsg = document.querySelector('.pop1')

const popBtn1 = document.querySelector('.add-task')
const popBtn2 = document.querySelector('.del-task')
popBtn1.addEventListener('click',addTask)
popBtn2.addEventListener('click',delTask)
popText = document.querySelector('.task')



btn.onclick=function(){

    document.querySelector('.blur').style = "filter:opacity(30%);pointer-events:none"
    popMsg.style.display = 'block'
    popText.focus()
    

   
        
   
        
   
}

function date(){
    const dt = new Date()
    return dt

}

function addTask(){

    document.querySelector('.blur').style = "filter:opacity(100%);pointer-events:auto"
    const div = document.createElement('div');
    div.className = 'flex-items';
    flex.append(div)

    const h3 = document.createElement('h3')
    const h5 = document.createElement('h5')
    h5.className = 'date'
    h5.textContent = date();

    div.append(h3)
    div.append(h5)
    
    
   
    h3.textContent = popText.value;
    popText.value = ""
    popMsg.style.display = 'none'
    h3.className='item-head'

    const scrollItem = document.createElement('div');
    scrollItem.className = 'scroll-items';
    div.append(scrollItem)

    
    

    

    const img1 = document.createElement('img')
    const img2 = document.createElement('img')
    
    img1.src = "./assest/add-icon.png";
    img2.src = "./assest/del-icon.png"
    img1.className = "flex-items-add"
    img2.className = "flex-items-cancel"

    div.append(img1)
    div.append(img2)


   img1.addEventListener('click',addItem)
   img2.onclick  = function(){
    div.remove()
   }
   

    


}

function addItem(event){
    document.querySelector('.blur').style = 'filter:opacity(30%);pointer-events:none'
    const flexItem = event.target.parentElement;
    
    scrollItem = flexItem.children[2]

   

    document.querySelector('.pop2').style.display='block';
    document.querySelector('.item').focus()

    const btn1 = document.querySelector('.add-item')
    const btn2 = document.querySelector('.del-item')
    

    btn1.onclick = function(){
        document.querySelector('.blur').style = 'filter:opacity(100%);pointer-events:auto'
    
      
        const divContent = document.createElement('div')
        divContent.className = "item-content";

        const span = document.createElement('span')
        span.className= "item-span"
        
        span.textContent = document.querySelector('.item').value;
        document.querySelector('.item').value = ""
      

        if(span.textContent.length!==0){
            
            var btn = document.createElement('input')
            btn.type = "checkbox"
            btn.className = "mark-btn";
            
            

            divContent.append(span)
            divContent.append(btn)
            scrollItem.append(divContent)
            btn.onclick=function(){
                
                if(btn.checked){
                    span.style='text-decoration:line-through;color:#16213E;';

                }
                else{
                    span.style='text-decoration:none;color:#16213E'
                }
          
               
                
            }
        }
       
      
    
      
       

       
      
        document.querySelector('.pop2').style.display='none';


        

        

    }

    btn2.onclick = function(){
        document.querySelector('.blur').style = 'filter:opacity(100%);pointer-events:auto'
        
        document.querySelector('.pop2').style.display='none';

    }





}

function delTask(){
    document.querySelector('.blur').style = 'filter:opacity(100%)'
    popMsg.style.display = 'none'
    

}






