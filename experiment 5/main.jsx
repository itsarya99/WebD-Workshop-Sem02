let employee=[];
function addEmployee(){
    let name=document.getElementById("name").value;
    let empId=document.getElementById("empId").value;
    let salary=document.getElementById("salary").value;
    let dept=document.getElementById("dept").value;
    if(name=="" || empId=="" || salary=="" || dept==""){
        alert("Please fill all the fields");

    let emp={
        name:name,
        id:empId,
        salary:salary,
        department:dept
        





    }



    employee.push(emp);
    console.log(employee);
}}