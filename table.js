//via HTML
function addRecordToTable_1() {
    // <tbody>
    let tableBody = document.getElementById('customersBody');

    // let nameInput = document.getElementById('name');
    // let name = nameInput.value;
    //
    // let age = document.getElementById('age').value;
    // let city = document.getElementById('city').value;

    let person = new Person();


    //1.1

    // let nameTd = wrapTd(name); //<td>John</td>
    // let ageTd = wrapTd(age);
    // let cityTd = wrapTd(city);

    // let tableRow = "<tr>" + nameTd + ageTd + cityTd + "</tr>";
    // tableBody.innerHTML += tableRow;

    //1.2
    let tr = document.createElement('tr');

        let nameTd = document.createElement('td');
        nameTd.innerText = person.name;

        let ageTd = document.createElement('td');
        ageTd.innerText = person.age;

        let cityTd = document.createElement('td');
        cityTd.innerText = person.city;

    tr.appendChild(nameTd);
    tr.appendChild(ageTd);
    tr.appendChild(cityTd);

    tableBody.appendChild(tr);

    person.clear();
}

function wrapTd(data) {
    return "<td>" + data + "</td>"
}


function Person() {
    this.name = document.getElementById('name').value;
    this.age = document.getElementById('age').value;
    this.city = document.getElementById('city').value;

    this.clear = function () {
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('city').value = '';
    }
}

function deleteRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

//via Table API (.insertRow, .insertCell)
function addRecordToTable_2() {

    let person = new Person();
    let table = document.getElementById('customers');

    //[0,1,2,3] .length=4
    let insertIndex = table.rows.length;

    let row = table.insertRow(insertIndex);
    let nameCell = row.insertCell(0);
    nameCell.innerText = person.name;

    let ageCell = row.insertCell(1);
    ageCell.innerText = person.age;

    let cityCell = row.insertCell(2);
    cityCell.innerText = person.city;

    let deleteButtonCell = row.insertCell(3);

    let button = document.createElement('button');
    button.innerText = "Remove Customer";

    button.onclick = function () {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row);
    };
    deleteButtonCell.appendChild(button);
}