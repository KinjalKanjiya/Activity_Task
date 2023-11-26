var addBtn = document.querySelector("#add-btn")
var model = document.querySelector(".model")
var closeBtn = document.querySelector("#closeBtn")
var allInput = document.querySelectorAll("INPUT")
addBtn.onclick = function () {
  model.classList.add("active");
  productBtn.style.opacity = "100";
  updateproductBtn .style.opacity = "0";
}

closeBtn.addEventListener("click", () => {
  model.classList.remove("active")
  var i
  for (i = 0; i < allInput.length; i++) {
    allInput[i].value = ""
  }
})
// Add Product data on localstorage
var productData = []
var productBtn = document.querySelector("#addproductBtn")
var pnameEl = document.querySelector("#pname")
var descriptionEl = document.querySelector("#description")
var priceEl = document.querySelector("#price")
var pimageEl = document.querySelector("#pimage")
var productform = document.querySelector("#addProductForm")
var updateproductBtn = document.querySelector("#updateproductbtn")
var imgUrl;
productform.onsubmit = function (e) {
  
  e.preventDefault()
  addproductData()
  getDataFromLocal()
  productform.reset("")
  closeBtn.click()
  
}

if (localStorage.getItem("productData") != null) {
  productData = JSON.parse(localStorage.getItem("productData"))
}
function addproductData() {

  

  productData.push({
    pname: pnameEl.value,
    description: descriptionEl.value,
    price: priceEl.value,
    pimage:imgUrl,

  })
  var productstring = JSON.stringify(productData)
  localStorage.setItem("productData", productstring)
  
  swal("Good job!", "Product Added Successfullt !", "success")
}

//start reading data from localstorage
var tableData = document.querySelector("#table-data")
const getDataFromLocal = () => {
  tableData.innerHTML = ""
  productData.forEach((data, index) => {
    tableData.innerHTML += `
        <tr index='${index}'>
        <td>${index + 1}</td>
        <td>${data.pname}</td>
        <td>${data.description}</td>
        <td>${data.price}</td>
        <td><img src="${data.pimage}" width="40" height="40"></td>
          <td>  <button class="editbutton edit-btn mx-1 " ><i class="fa fa-edit"></i></button>
            <button class="deletebutton del-btn"><i class="fa fa-trash"></i></button>
        </td>
    </tr>
        `
  })

  // delete data from localstorage
  var i
  var DelBtn = document.querySelectorAll(".del-btn")
  for (i = 0; i < DelBtn.length; i++) {
    DelBtn[i].onclick = function () {
      var tr = this.parentElement.parentElement
      var id = tr.getAttribute("index")
      swal({
        title: "Are you sure?",
        text: "you want to delete this product",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          productData.splice(id, 1)
          localStorage.setItem("productData", JSON.stringify(productData))
          tr.remove()
          swal("Poof! Your product has been deleted!", {
            icon: "success",
          })
        } else {
          swal("Your imaginary file is safe!")
        }
      })
    }
  }

    // update data into local storage
var EditBtn = document.querySelectorAll(".edit-btn")

for(i=0;i<EditBtn.length;i++){
    EditBtn[i].onclick = function(){
        var tr = this.parentElement.parentElement;
        var td = tr.getElementsByTagName("TD");
        var index = tr.getAttribute("index");
        var pname = td[1].innerHTML;
        var description = td[2].innerHTML;
        var price = td[3].innerHTML;
        var pimage = td[4].innerHTML;
        addBtn.click();
        updateproductBtn .style.opacity = "100";
        productBtn.style.opacity = "0";
        pnameEl.value = pname;
        descriptionEl.value= description;
        priceEl.value = price;
        pimageEl.value = pimage;
        updateproductBtn.onclick = function(e){
          e.preventDefault()
          alert();
            productData[index]={
                pname: pnameEl.value,
                description: descriptionEl.value,
                price: priceEl.value,
                pimage: pimageEl.value,
            }
            localStorage.setItem("productData", JSON.stringify(productData))
        }
    }
}
}
getDataFromLocal()

//search Functionality
var searchEl = document.querySelector("#search-Id")
searchEl.oninput = function () {
  searchFuc()
}
function searchFuc() {
  var tr = tableData.querySelectorAll("TR")
  console.log(tr)
  var filter = searchEl.value.toLowerCase()
  var i
  for (i = 0; i < tr.length; i++) {
    var index = tr[i].getElementsByTagName("TD")[0].innerHTML;
    var pname = tr[i].getElementsByTagName("TD")[1].innerHTML;
    if (index.toLowerCase().indexOf(filter) > -1) {
      tr[i].style.display = ""
    }else if(pname.toLowerCase().indexOf(filter)>-1){
        tr[i].style.display = ""
    } 
    else {
      tr[i].style.display = "none"
    }
  }
}
//delete all data
var allDel = document.querySelector("#alldel-btn")
allDel.onclick = function () {
  swal({
    title: "Are you sure?",
    text: "you want to delete all products",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      localStorage.removeItem("productData")
      window.location = location.href
      swal("Poof! Your product has been deleted!", {
        icon: "success",
      })
    } else {
      swal("Your imaginary file is safe!")
    }
  })
}



//Sorting 
var table_rows = document.querySelectorAll('tbody tr');
var table_headings = document.querySelectorAll('thead th');

table_headings.forEach((head,i)=>{
    let sort_arc = true;
    head.onclick = () =>{
       table_headings.forEach(head => head.classList.remove('active'));
       head.classList.add('active');
       document.querySelectorAll('td').forEach(td=>td.classList.remove('active'))
        table_rows.forEach(row =>{
           row.querySelectorAll('td')[i].classList.add('active');
        })
        head.classList.toggle('asc',sort_arc)
        sort_arc = head.classList.contains('asc') ? false :true;

        sortTable(i,sort_arc);
    }
})

function sortTable(column,sort_arc){
    [...table_rows].sort((a,b)=>{
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

            return sort_arc ?( first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);


    }).map(sorted_row => document.querySelector('tbody').appendChild(sorted_row))
}


//image processing
var uploadPic = document.getElementById("pimage");
function uploadPicHandler() {
  if (uploadPic.files[0]) {
      var fReader = new FileReader();
      fReader.onload = function(e) {
           imgUrl = e.target.result;
        
      }
      fReader.readAsDataURL(uploadPic.files[0]);
  }
}


uploadPic.addEventListener("change", uploadPicHandler);