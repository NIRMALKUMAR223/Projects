// add button and record button

var add = document.getElementById('add');
var record = document.getElementById('record');

// loader

var table = document.getElementById('table');

// display 

var displayAdd = document.getElementById('employee');
var displayRecords = document.getElementById('employee-record');

// IIFC

(()=>{
    add.style.borderBottom = '3px solid rgb(65, 156, 241)'
})();
displayRecords.style.display = 'none';

// adding records to table

var eid = document.getElementById('empid');
var ename = document.getElementById('name');
var esalary = document.getElementById('salary');
var eemail = document.getElementById('email');
var ephone = document.getElementById('phone');
var submit = document.getElementById('submit');

// event function

var displayEmp = ()=>{
    add.style.borderBottom = '3px solid rgb(65, 156, 241)'
    record.style.borderBottom = 'none'
    displayAdd.style.display = 'flex';
    displayRecords.style.display = 'none';
}

var displayRecord = ()=>{
    record.style.borderBottom = '3px solid rgb(65, 156, 241)'
    add.style.borderBottom = 'none'
    displayAdd.style.display = 'none';
    displayRecords.style.display = 'flex';
}

var addingRecordsInTable = ()=>{

    var tableRow = document.createElement('tr');
    var empId  = document.createElement('td');
    var empName  = document.createElement('td');
    var empSalary  = document.createElement('td');
    var empEmail  = document.createElement('td');
    var empPhone  = document.createElement('td');
    var del = document.createElement('td');

    empId.textContent = eid.value;
    empName.textContent = ename.value;
    empSalary.textContent = esalary.value;
    empEmail.textContent = eemail.value;
    empPhone.textContent = ephone.value;
    del.id = 'delete';
    del.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" id="svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    </svg>`

    tableRow.appendChild(empId);
    tableRow.appendChild(empName);
    tableRow.appendChild(empSalary);
    tableRow.appendChild(empEmail);
    tableRow.appendChild(empPhone);
    tableRow.appendChild(del);
    table.appendChild(tableRow);

    eid.value = ''
    ename.value = ''
    esalary.value =''
    eemail.value = ''
    ephone.value = ''
    submit.value = ''

    var deleteRecords = ()=>{
        tableRow.remove();
    }

    del.addEventListener('click',deleteRecords)
}




// add event listner

record.addEventListener('click', displayRecord);
add.addEventListener('click', displayEmp);
submit.addEventListener('click', addingRecordsInTable);