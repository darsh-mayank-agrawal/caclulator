const body = document.body
const input1 = body.querySelector("#num1")
const input2 = body.querySelector("#num2")
const operlist = body.querySelector("#oper")
const calc = body.querySelector("#calc")
const ans = body.querySelector("#ans")

calc.onclick = function () {
    if (input1.value == "" || input2.value == "") {
        alert("Enter a number(s)")
    } else {
        ans.innerHTML = "Answer: "
        let num1 = parseInt(input1.value)
        let num2 = parseInt(input2.value)
        let oper = operlist.value
        switch (oper) 
        {
            case "add":
                ans.innerHTML += num1 + num2
                break
            case "sub":
                ans.innerHTML += num1 - num2
                break
            case "mul":
                ans.innerHTML += num1 * num2
                break
            case "div":
                ans.innerHTML += num1 / num2
                break
            default:
                alert("An error occurred :-(")
        }
    }
}