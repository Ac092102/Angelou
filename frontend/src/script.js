function getLetterGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
}

function addStudent() {
    let name = document.getElementById("name").value.trim();
    let grade = document.getElementById("grade").value.trim();
    
    if (name === "" || grade === "") {
        alert("Please enter both name and grade.");
        return;
    }

    let numericGrade = parseInt(grade);
    if (isNaN(numericGrade) || numericGrade < 0 || numericGrade > 100) {
        alert("Please enter a valid grade between 0 and 100.");
        return;
    }
    
    let letterGrade = getLetterGrade(numericGrade);
    let table = document.getElementById("studentTable");
    let row = table.insertRow();
    
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    
    cell1.innerHTML = name;
    cell2.innerHTML = numericGrade;
    cell3.innerHTML = letterGrade;
    
    if (letterGrade === 'A') cell3.style.color = "green";
    else if (letterGrade === 'B') cell3.style.color = "blue";
    else if (letterGrade === 'C') cell3.style.color = "orange";
    else if (letterGrade === 'D') cell3.style.color = "purple";
    else cell3.style.color = "red"; 
    
    document.getElementById("name").value = "";
    document.getElementById("grade").value = "";
}