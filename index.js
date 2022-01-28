const btn =document.querySelector('#btn');
const child=document.querySelector('.child');
const list = [];
// console.log(btn);
btn.addEventListener('click',()=>{
    const inputbox =document.querySelector('#todo');
    if(inputbox.value===''){
        alert("You Have not Enter Any text ");
    }else{
        list.push(inputbox.value);
        var elem = document.createElement('h1');
        console.log(inputbox.value.length);
        var con=`${list.length}`+`) `+`${inputbox.value}`;
          elem.textContent=con;
          console.log(elem.textContent);
        // console.log(con);
    // elem.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000';
    child.appendChild(elem);
    inputbox.value="";
    }
   
    
})