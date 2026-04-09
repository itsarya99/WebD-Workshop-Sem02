function calculateFactorial() {
    let n = document.getElementById("num").value;

    if(n < 0 || n === ""){
        alert("Enter a valid positive number");
        return;
    }

    let fact = 1;

    for(let i = 1; i <= n; i++){
        fact *= i;
    }

    document.getElementById("result").innerHTML =
        "Factorial of " + n + " is: " + fact;
}