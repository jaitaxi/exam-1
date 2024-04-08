

// Array
let studentData = [];

// main-function
document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let medium = document.getElementById("medium").value;
    let group = document.getElementById("group").value;
    let grid = document.getElementById("grid").value;
    let email = document.getElementById("email").value;
    let grade = document.getElementById("grade").value;
    let image = document.getElementById("image").files[0]; 

    // Push form data into the array
    studentData.push({
        name: name,
        medium: medium,
        group: group,
        grid: grid,
        email: email,
        grade: grade,
        image: URL.createObjectURL(image)
    });

    updateTable();
});

// function for table
function updateTable() {

    document.getElementById("data").innerHTML = "";


    studentData.forEach(function (student) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.textContent = student.name;

        let td2 = document.createElement("td");
        let img = document.createElement("img");
        img.src = student.image;
        img.style.maxWidth = "100px";
        td2.appendChild(img);

        let td3 = document.createElement("td");
        td3.textContent = student.medium;
        let td4 = document.createElement("td");
        td4.textContent = student.group;
        let td5 = document.createElement("td");
        td5.textContent = student.grid;
        let td6 = document.createElement("td");
        td6.textContent = student.email;
        let td7 = document.createElement("td");
        td7.textContent = student.grade;

        let td8 = document.createElement("td");
        td8.textContent = "Delete";
        td8.style.background = "red";
        td8.style.textAlign = "center";
        td8.style.color = "#FFFFFF";
        td8.addEventListener("click", function () {
            deleteStudent(student);
        });

        tr.append(td1, td2, td3, td4, td5, td6, td7, td8);
        document.getElementById("data").append(tr);
    });
}


// delete
function deleteStudent(student) {
    
    let index = studentData.indexOf(student);

    if (index !== -1) {
        studentData.splice(index, 1);
        updateTable(); 
    }
}

document.getElementById("deleteAllBtn").addEventListener("click", function () {
    studentData = [];
    updateTable();
});

