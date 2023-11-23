var nameInput = document.getElementById("nameInput")
var addBtn = document.getElementById("addBtn")
var surnameInput = document.getElementById("surnameInput")
var submit2 = document.getElementById("submit2")
var ageInput = document.getElementById("ageInput")
var submit3 = document.getElementById("submit3")
var myTable = document.getElementById("myTable")

// console.log(nameInput, addBtn, surnameInput, submit2, ageInput, submit3, myTable)

addBtn.addEventListener("click", function(){
    if(nameInput.value == "" || surnameInput.value == "" || ageInput.value == "" || ageInput.value < 1){
        alert("įveskite duomenis")
    } else {
        var row = myTable.insertRow(-1);
        var c1 = row.insertCell(0);
        var c2 = row.insertCell(1);
        var c3 = row.insertCell(2);

        c1.innerText = nameInput.value;
        c2.innerText = surnameInput.value;
        c3.innerText = ageInput.value;

        nameInput.value = "";
        surnameInput.value = "";
        ageInput.value = "";

        row.style.color = "white";
        row.style.textAlign = "start";
        c1.style.backgroundColor = "#3a2b6f";
        c2.style.backgroundColor = "#3a2b6f";
        c3.style.backgroundColor = "#3a2b6f";
}
});

submit2.addEventListener("click", function(){
    if (myTable.rows.length > 1) {
        myTable.deleteRow(1);
    } else {
        alert("Nebėra ką trinti.");
    }
});

submit3.addEventListener("click", function(){
    var rowCount = myTable.rows.length;
    if (rowCount > 1) {
        myTable.deleteRow(rowCount - 1);
    } else {
        alert("Nebėra ką trinti.");
    }
});