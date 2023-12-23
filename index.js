var bookName = document.getElementById("input1")
var url = document.getElementById("input2")


var sites = []

if (localStorage.getItem("products") != null) {
    sites = JSON.parse(localStorage.getItem("products"))
    display()
}



function addSite() {
    var site = {
        name: bookName.value ,
        url: url.value 
    }
    sites.push(site);
    localStorage.setItem("products" ,JSON.stringify(sites) )
    clear() 
    display()
}




function display(){
    var cartona = "" ;
    for(var i =0 ; i < sites.length ;i++) {
        cartona += `
        <tr >
        <td>${i}</td>
        <td>${sites[i].name}</td>
        <td><a href="${sites[i].url}" target="_blank" ><button id="btnVisit" class="btn btn-sm btn-dark" >Visit</button></a></td>
        <td><button onclick="deleteItem(${i})" id="btnDelete" class="btn btn-sm btn-warning" >Delete</button></td>
    </tr>
        `
    }
    document.getElementById("tableBody").innerHTML = (cartona) 
}

function clear() {
    bookName.value = ""
    url.value = ""
}


function deleteItem(index) {
    sites.splice(index , 1);
    display()
    localStorage.setItem("products" ,JSON.stringify(sites) )
}
