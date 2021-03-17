var blog=[];

function submitBlog() {
    insertNewBlog();
    displayBlog();
}

function readFormData() {
  var formData={};
  formData.title = document.getElementById("title").value;
  formData.desc = document.getElementById("desc").value;
  formData.imageId = document.getElementById("imageId").files[0].name;
  console.log(formData);
  return(formData);
}

// use array to store data
// one function to retrieve latest values from local localStorage
// one function to insert value from local localStorage
// one function to display your blog listing, you have to use loop inside it

function displayBlog() {
  retrieveFromSession();
	var container = document.getElementById('cardContainer');
	var content = '';
  for (let i = 0; i < blog.length; i++) {
        content += `<div class="card">
        <img src="${blog[i].imageId}" class="card-img-top">
        <div class="card-body">
        <h3 class="card-title">${blog[i].title}</h3>
        <p class="card-text">${blog[i].desc}</p>
        </div>
        </div>
        `;
	}
	container.innerHTML = content;
}

function retrieveData() {
  var str = localStorage.getItem("blog");
  console.log(str);
  if (str !== null) {
    blog = JSON.parse(str);
  }
}

function insertNewBlog(formData) {
  retrieveData();
  var newEntry = readFormData();
  blog.push(newEntry);
  localStorage.setItem("blog", JSON.stringify(blog));
}

function deleteRec(data){
    var row = data.parentElement.parentElement;
    document.getElementById("employeeDetails").deleteRow(row.rowIndex);
}