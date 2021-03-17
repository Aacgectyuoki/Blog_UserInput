var empData=[];
function storeInSession() {
   // localStorage.setItem("empInfo",JSON.stringify(empData));
   sessionStorage.setItem("empInfo",JSON.stringify(empData));
}
function retrieveFromSession() {
    //var obj = JSON.parse(localStorage.getItem("empInfo"));
    var obj = JSON.parse(sessionStorage.getItem("empInfo"));
    console.log(obj);
}
function onFormSubmit() {
    var formData = addBlog();
    //insertNewRecords(formData);
    resetForm();
    empData.push(formData);
    console.log(empData)
}

function addBlog(){
  /**var formData={};
  formData.title=document.getElementById("titleInfo").value;
  formData.desc=document.getElementById("descInfo").value;
  return formData;**/
    var formData={};
    formData.title = document.getElementById("title").value;
    formData.desc = document.getElementById("desc").value;
    var imageInfo = document.getElementById("imageId").files[0].name;
    console.log(formData.title)
    console.log(formData.desc);
    console.log(imageInfo);
    document.getElementById("titleInfo").innerHTML=formData.title;
    document.getElementById("descInfo").innerHTML=formData.desc;
    document.getElementById("imageInfo").src=imageInfo;
    return formData;
}

/**
function readData() {
    var formData={};
    formData.title=document.getElementById("titleInfo").innerHTML;
    formData.desc=document.getElementById("descInfo").innerHTML;
    return formData;
}**/

function insertNewRecords(formData) {
    var table = document.getElementById("employeeDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newRow1 = tableBody.insertRow(tableBody.length);
    var newRow2 = tableBody.insertRow(tableBody.length);
    var newRow3 = tableBody.insertRow(tableBody.length);
    var cell1 = newRow1.insertCell(0);
    cell1.innerHTML=formData.title;
    var cell2 =newRow2.insertCell(0);
    cell2.innerHTML= formData.desc;
    var cell3 = newRow3.insertCell(0);
    cell3.innerHTML="<a href='#' onclick='deleteRec(this)'>Delete Post</a>";
}
/**
function insertNewRecords(formData) {
    var table = document.getElementById("employeeDetails");
    var tableBody = table.getElementsByTagName("tbody")[0];
    var newColumn = tableBody.insertRow(tableBody.length);
    var cell1 = newRow.insertCell(0);
    cell1.innerHTML=formData.name;
    var cell2 =newRow.insertCell(1);
    cell2.innerHTML= formData.age;
    var cell3 = newRow.insertCell(2);
    cell3.innerHTML="<a href='#' onclick='deleteRec(this)'>X</a>";
}**/

function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("employeeDetails").deleteRow(row.rowIndex);
}

function myFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}
