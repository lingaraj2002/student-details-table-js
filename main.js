let form = document.getElementById("form");
let regno = document.getElementById("regno");	
let stdName = document.getElementById("stdname");
let phNo = document.getElementById("phno");
let fname = document.getElementById("fname");
let mark = document.getElementById("mark");

let data = JSON.parse(localStorage.getItem('userData2')) || [];

let editContent = JSON.parse(localStorage.getItem('editContent')) || [];
regno.value = editContent[0]?.REGNO || '';
  stdName.value = editContent[0]?.STDNAME || '';
  phNo.value = editContent[0]?.PHNO || '';
  fname.value = editContent[0]?.FNAME || '';
  mark.value = editContent[0]?.MARK || '';

form.addEventListener('submit',(e) =>{
	e.preventDefault();
  
let obj = {
                REGNO:regno.value,
                STDNAME:stdName.value,
                PHNO:phNo.value,
                FNAME:fname.value,
                MARK:mark.value
            };

            if(editContent.length > 0){
              
                const updatedData = data.map((e,i) => {
                  return i === editContent[1] ? obj : e
                 })
                 localStorage.setItem('userData', JSON.stringify(updatedData)); 
                 localStorage.removeItem('editContent');
                }else{
            
                if(data.length > 0){
                    data = [...data, obj];
                  }
                  else{
                    data.push(obj);
                  }
              console.log(data);
              localStorage.setItem('userData', JSON.stringify(data));
            }

regno.value = "";
stdName.value = "";
phNo.value = "";
fname.value = "";
mark.value = "";
regno.focus();
        })
        
document.querySelector('#btn1').addEventListener('click', (e) => {
    e.preventDefault();
    location.href= 'display.html';
  })
