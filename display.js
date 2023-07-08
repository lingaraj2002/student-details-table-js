let userData = JSON.parse(localStorage.getItem('userData'));
console.log(userData);
localStorage.setItem('userData2',JSON.stringify(userData));

let body = document.getElementsByTagName('body');

let Table = document.createElement('table');
document.body.appendChild(Table)

let thead = document.createElement('thead');
Table.appendChild(thead);

let th1 = document.createElement('th');
thead.appendChild(th1);
th1.innerHTML = "Reg No";

let th2 = document.createElement('th');
thead.appendChild(th2);
th2.innerHTML = "Student Name";

let th3 = document.createElement('th');
thead.appendChild(th3);
th3.innerHTML = "Phone No";

let th4 = document.createElement('th');
thead.appendChild(th4);
th4.innerHTML = "Father's Name";

let th5 = document.createElement('th');
thead.appendChild(th5);
th5.innerHTML = "Mark";

let th6 = document.createElement('th');
thead.appendChild(th6);
th6.innerHTML = "Edit";

let th7 = document.createElement('th');
thead.appendChild(th7);
th7.innerHTML = "Delete";

userData.forEach(value =>{
    let row = document.createElement('tr');
    row.classList.add("table-row");
    Table.appendChild(row);

    let Td1 = document.createElement('td');
    Td1.innerHTML = value.REGNO;
    row.appendChild(Td1);

    let Td2 = document.createElement('td');
    Td2.innerHTML = value.STDNAME;
    row.appendChild(Td2);

    let Td3 = document.createElement('td');
    Td3.innerHTML = value.PHNO;
    row.appendChild(Td3);

    let Td4 = document.createElement('td');
    Td4.innerHTML = value.FNAME;
    row.appendChild(Td4);

    let Td5 = document.createElement('td');
    Td5.innerHTML = value.MARK;
    row.appendChild(Td5);

    let Td6 = document.createElement('td');
    Td6.innerHTML = '<button id="edit">Edit</button>';
    row.appendChild(Td6);

    let Td7 = document.createElement('td');
    Td7.innerHTML = '<button id="delete">del</button>';
    row.appendChild(Td7);
})

document.querySelector('#back').addEventListener('click', (e) => {
    e.preventDefault();
    location.href= 'index.html';
  })

const handleSearch = () => {
    let searchInput = document.getElementById('search');
    let filtered = searchInput.value.toUpperCase();
    let listItems = document.querySelectorAll('td');

    for(i=0; i< listItems.length; i++){
    let content = listItems[i].innerText || listItems[i].textContent
    console.log(content);

    if(content.toUpperCase().indexOf(filtered) > -1){
        listItems[i].style.display = '';
    }else{
        listItems[i].style.display = 'none';
    }
    }
}

document.querySelectorAll('#delete').forEach((e,index) => {
    e.addEventListener('click', () => {
        handleDelete(index);
    })
})
const handleDelete = (deleteIndex) => {
    let updatedData = userData.filter((e,i) => i !== +deleteIndex)
    console.log(deleteIndex);
    console.log(updatedData);
    localStorage.setItem('userData',JSON.stringify(updatedData));
    window.location.reload(true);
}

document.querySelectorAll('#edit').forEach((e,i) => {
    e.addEventListener('click', () => {
        console.log(userData[i]);
        localStorage.setItem('edit', true);
        localStorage.setItem('editContent', JSON.stringify([userData[i], i]))
        location.href = 'index.html';
    })
})
