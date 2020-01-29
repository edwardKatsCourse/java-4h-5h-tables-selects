
function Person() {
    //instance
    this.name = document.getElementById('name').value;
    this.age = document.getElementById('age').value;
    this.city = getCityFromSelect();

    //static
    function getCityFromSelect() {
        let select = document.getElementById('city'); //{selectedIndex: 1}
        let options = select.options; //{selected: true, value: 'raanana', index: 3}

        return options[select.selectedIndex].value;
    }


    this.clear = function () {
        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
        document.getElementById('city').value = '';
    }
}

function City() {
    this.englishName = document.getElementById('cityAddEnglish').value;
    this.russianName = document.getElementById('cityAddRussian').value;

    this.clear = function () {
        document.getElementById('cityAddEnglish').value = '';
        document.getElementById('cityAddRussian').value = '';
    }
}

function addCity() {
    let city = new City();
    let citySelect = document.getElementById('city');

    let option = document.createElement('option');
    option.text = city.russianName;
    option.value = city.englishName;
    option.selected = true;

    citySelect.add(option);
    city.clear();
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

//en.json
//"customers.city.raanana" : "Raanana"

//ru.json
//"customers.city.raanana" : "Раанана"