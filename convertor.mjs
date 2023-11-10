function doSum(event) {

    event.preventDefault();
    let firstNumber = document.querySelector("#firstNum").value;


    let result = Number(firstNumber) * 272.51;

    let message = `the ${firstNumber}marla is equal ${result} feet`

    document.querySelector("#resultWindow").innerHTML = message

}